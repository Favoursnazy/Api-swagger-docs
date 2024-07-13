'use strict';


/**
 * Delete organisation
 * User can only delete organisations they created [NOTE All organistation details will be lost]
 *
 * returns inline_response_200_6
 **/
exports.apiOrganisationDELETE = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Organisation deleted successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all user's organisations
 * Return all organisations a user is part of including both those the user created and others
 *
 * creator Boolean Returns only organisations a user created if true, only organisations where user is a member if false, all organisations if not specified. (optional)
 * returns inline_response_200_5
 **/
exports.apiOrganisationGET = function(creator) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "creator" : false,
    "name" : "Impala golden",
    "description" : "Resurrecting faith in mankind"
  }, {
    "creator" : false,
    "name" : "Impala golden",
    "description" : "Resurrecting faith in mankind"
  } ],
  "message" : "Fetched organisation successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove a user from organisation
 * A user can only remove other users from organisation they created.
 *
 * body Org_id_users_body_1 
 * org_id String The organisation to remove the user from
 * returns inline_response_200_9
 **/
exports.apiOrganisationOrg_idUsersPATCH = function(body,org_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "User removed from organisation successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds user to organisation
 * A user can only add other users to an organisation they created
 *
 * body Org_id_users_body 
 * org_id String The organisation to add a new user to
 * returns inline_response_200_8
 **/
exports.apiOrganisationOrg_idUsersPOST = function(body,org_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "User added to organisation successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update organisation details
 * Update details of an organisation a user created
 *
 * body Api_organisation_body_1 
 * returns inline_response_200_7
 **/
exports.apiOrganisationPATCH = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Organisation details updated successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create organisation
 * Creates a new organisation for a user
 *
 * body Api_organisation_body 
 * returns inline_response_201_1
 **/
exports.apiOrganisationPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Organisation created successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a user in your organisation
 * Returns the proifile the user
 *
 * id String User ID of user to return
 * returns inline_response_200_10
 **/
exports.apiUsersIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "phone" : "1234567",
    "last_name" : "Golden",
    "first_name" : "Impala",
    "email" : "impala.golden@gmail.com"
  },
  "message" : "Fetched user successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

