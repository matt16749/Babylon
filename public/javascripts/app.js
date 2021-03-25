"use strict";

module.exports = function (req, res, next) {
  var params = {
    title: 'Babylon'
  };
  res.render('index', params);
};