'use strict';

var utils = require('../utils/writer.js');
var Organisation = require('../service/OrganisationService');

module.exports.apiOrganisationDELETE = function apiOrganisationDELETE (req, res, next) {
  Organisation.apiOrganisationDELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiOrganisationGET = function apiOrganisationGET (req, res, next, creator) {
  Organisation.apiOrganisationGET(creator)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiOrganisationOrg_idUsersPATCH = function apiOrganisationOrg_idUsersPATCH (req, res, next, body, org_id) {
  Organisation.apiOrganisationOrg_idUsersPATCH(body, org_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiOrganisationOrg_idUsersPOST = function apiOrganisationOrg_idUsersPOST (req, res, next, body, org_id) {
  Organisation.apiOrganisationOrg_idUsersPOST(body, org_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiOrganisationPATCH = function apiOrganisationPATCH (req, res, next, body) {
  Organisation.apiOrganisationPATCH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiOrganisationPOST = function apiOrganisationPOST (req, res, next, body) {
  Organisation.apiOrganisationPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUsersIdGET = function apiUsersIdGET (req, res, next, id) {
  Organisation.apiUsersIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
