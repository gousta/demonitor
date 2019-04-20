import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import DataStore from '../services/datastore';
import Event from '../services/event';

const styles = {
  card: {
    marginTop: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
  },
};

const kill = (data) => {
  const containerId = data['container id'];

  DataStore.containerKill(containerId)
    .then(() => Event.emit('container.kill', containerId));
};

const Container = ({ classes, data }) => (
  <ExpansionPanel>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Grid container spacing={16}>
        <Grid item xs={12} md={6}>
          <Typography style={{ fontSize: 16 }}>{data.names}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography style={{ color: '#777777' }}>{data.status}</Typography>
        </Grid>
      </Grid>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Grid container spacing={16}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h2">
            {data['container id']}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Container
          </Typography>
          <Typography variant="h5" component="h2">
            {data.ports}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Ports
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h2">
            {data.status}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Status
          </Typography>
          <Typography variant="h5" component="h2">
            {data.command}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Command
          </Typography>
        </Grid>
      </Grid>
    </ExpansionPanelDetails>
    <Divider />
    <ExpansionPanelActions>
      <Button size="small" color="secondary" onClick={() => kill(data)}>KILL</Button>
    </ExpansionPanelActions>
  </ExpansionPanel>
);

export default withStyles(styles)(Container);
