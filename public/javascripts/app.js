module.exports = (req, res, next) => {
  const params = { title: 'Babylon' }

  res.render('index', params);
}
