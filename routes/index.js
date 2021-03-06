const path = require('path');
const router = require('express').Router();
const articleRoutes = require('./api/articles');
const userRoutes = require('./api/users');
const messageRoutes = require('./api/messages');

router.use('/users', userRoutes);
router.use('/articles', articleRoutes);
router.use('/messages', messageRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
