import { Typography } from '@material-ui/core';
import React from 'react';
import DataStore from '../services/datastore';
import Image from './Image';

class ImagesDataSource extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const { images } = this.state;
    DataStore.images().then((data) => {
      if (data !== images) {
        this.setState({ images: data });
      }
    });
  }

  render() {
    const { images } = this.state;

    return (images && images.length > 0) ? <Images images={images} /> : <Empty />;
  }
}

const Empty = () => (
  <Typography>No images found</Typography>
);

const Images = ({ images }) => (
  <div>
    {images.map((image) => (
      <div key={image.repository}>
        <Typography variant="headline" color="primary" style={{ marginLeft: 24, marginBottom: 16 }}>{image.repository}:{image.tag} <span style={{ color: '#777' }}>{image['image id']}</span></Typography>
        <Image image={image} />
      </div>
    ))}
  </div>
);

export default ImagesDataSource;
