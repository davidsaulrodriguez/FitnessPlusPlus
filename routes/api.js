module.exports = function (app) {
  app.get('/api/:action', (req, res) => {
    let action = req.params.action;
    if (action) {
      switch (action) {
      case 'workouts':
        res.json({ message: 'All your workout data will show up here' });
        break;

      default:
        res.json({ Error: 'This action does not exist in our api' });
        break;
      }
    }
  });
};
