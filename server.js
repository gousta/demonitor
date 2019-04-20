const _ = require('lodash');
const app = require('express')();
const cors = require('cors');
const logger = require('./lib/core/logger.js');
const { name, version } = require('./package.json');
const {
  getImages, ps, containersKill, containersStop, stats, getContainerIds,
} = require('./lib/core/docker');

app.use(cors());
app.use((req, res, next) => {
  logger.info(`[D&M][HTTP][${req.method}] ${req.originalUrl}`);
  next();
});

app.get('/', (req, res) => res.json({ name, version }));
app.get('/images', (req, res) => {
  getImages().then(({ images }) => {
    if (images && images.length > 0) {
      res.json({ data: images });
    } else {
      res.json({ data: [] });
    }
  });
});

app.get('/images/:image', (req, res) => {
  ps(req.params.image).then(({ containerList }) => {
    res.json({ data: containerList });
  });
});

app.post('/containers/:container/stop', (req, res) => {
  containersStop([req.params.container]).then(() => res.json({}));
});

app.post('/containers/:container/kill', (req, res) => {
  containersKill([req.params.container]).then(() => res.json({}));
});

// app.get('/images/:image/stats', (req, res) => {
//   getContainerIds(req.params.image)
//     .then((containerIds) => stats(containerIds))
//     .then((data) => {
//       res.json({ data });
//     });
// });

app.listen(5555, () => {
  logger.info('[D&M][HTTP] STARTED: 5555');
});
