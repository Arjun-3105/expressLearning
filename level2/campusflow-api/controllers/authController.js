exports.register = async (req, res, next) => {
  res.status(200).json({ message: 'register' });
};

exports.login = async (req, res, next) => {
  res.status(200).json({ message: 'login' });
};
