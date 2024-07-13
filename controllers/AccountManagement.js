'use strict';

var utils = require('../utils/writer.js');
var AccountManagement = require('../service/AccountManagementService');

module.exports.apiChange_passwordPOST = function apiChange_passwordPOST (req, res, next, body) {
  AccountManagement.apiChange_passwordPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiProfileDELETE = function apiProfileDELETE (req, res, next) {
  AccountManagement.apiProfileDELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiProfileGET = function apiProfileGET (req, res, next) {
  AccountManagement.apiProfileGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiProfilePATCH = function apiProfilePATCH (req, res, next, body) {
  AccountManagement.apiProfilePATCH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
