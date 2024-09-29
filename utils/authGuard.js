const withGuard = (req, res, next) => {
    if (req.session.logged_in) {
      next();  // Proceed if the user is logged in
    } else {
      res.redirect('/login');  // Redirect to login if not logged in
    }
  };
  
  const apiGuard = (req, res, next) => {
    if (req.session.logged_in) {
      next();  // Proceed if the user is logged in
    } else {
      res.status(403).json({ message: 'You must be logged in to perform this action.' });
    }
  };
  
  const withoutGuard = (req, res, next) => {
    if (!req.session.logged_in) {
      next();  // Proceed if the user is not logged in
    } else {
      res.redirect('/');  // Redirect to home if already logged in
    }
  };
  
  module.exports = { withGuard, apiGuard, withoutGuard };
  