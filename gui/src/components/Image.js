
import Typography from '@material-ui/core/Typography';
import React from 'react';
import DataStore from '../services/datastore';
import Event from '../services/event';
import Container from './Container';

class ImageDataSource extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      containers: [],
    };

    Event.on('container.kill', (containerId) => this.containerKill(containerId));
  }

  componentDidMount() {
    this.fetch();
    setInterval(() => this.fetch(), 10000);
  }

  fetch() {
    const { image } = this.props;

    DataStore.image(image.repository).then((data) => {
      this.setState({ containers: data });
    });
  }

  containerKill(containerId) {
    const { containers } = this.state;

    this.setState({
      containers: containers.filter((c) => c['container id'] !== containerId),
    });
  }

  render() {
    const { containers } = this.state;

    if (containers.length === 0) return <Empty />;

    return containers.map((c) => <Container key={c['container id']} data={c} />);
  }
}

const Empty = () => (
  <Typography>No containers found for this image</Typography>
);


export default ImageDataSource;
