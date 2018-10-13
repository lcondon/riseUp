const router = require('express').Router();
const passport = require('../../passport');
const db = require('../../models');

router
  .route('/')
  .post((req, res) => {
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      responses: []
    }).then(function(results) {
      console.log(results);
      res.json(results);
    });
  })
  .put(function(req, res) {
    console.log(req.body);
    db.User.findByIdAndUpdate(
      req.body.user,
      {
        responses: req.body.responses
      },
      { new: true }
    ).then(function(results) {
      console.log(results);
      res.json(results);
    });
  })
  .delete(function(req, res) {
    console.log(1);
    console.log(req.body.id);
    console.log(2);
    db.User.findByIdAndDelete(req.body.id).then(function(results) {
      console.log(results);
      res.json(results);
    });
  });

router.route('/loggedin').get(function(req, res) {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.send('Not logged in');
  }
});

router.route('/login').post(passport.authenticate('local'), function(req, res) {
  console.log(req.user);
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.json({ redirect: '/login' });
  }
});

router.route('/logout').post(function(req, res) {
  req.logout();
  res.redirect('/');
});

router.route('/match').post(function(req, res) {
  console.log(req.body.number);
  console.log(req.user);

  let response = `check${req.body.number}`;
  db.User.find({}).then(results => {
    let matches = results.filter(
      user =>
        user.responses[req.body.number] !== req.user.responses[req.body.number]
    );
    console.log(matches);
    if (matches.length > 0) {
      let index = Math.floor(Math.random() * matches.length);
      res.json(matches[index]);
    } else {
      res.json({ error: 'no matches' });
    }
  });
});

module.exports = router;
