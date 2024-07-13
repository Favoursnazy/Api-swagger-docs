'use strict';

var utils = require('../utils/writer.js');
var Subscription = require('../service/SubscriptionService');

module.exports.apiSubcriptionGET = function apiSubcriptionGET (req, res, next) {
  Subscription.apiSubcriptionGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiSubcriptionPOST = function apiSubcriptionPOST (req, res, next, body) {
  Subscription.apiSubcriptionPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiSubscribePlan_idPOST = function apiSubscribePlan_idPOST (req, res, next, plan_id) {
  Subscription.apiSubscribePlan_idPOST(plan_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiSubscriptionIdDELETE = function apiSubscriptionIdDELETE (req, res, next, id) {
  Subscription.apiSubscriptionIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiSubscriptionIdPATCH = function apiSubscriptionIdPATCH (req, res, next, body, id) {
  Subscription.apiSubscriptionIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
