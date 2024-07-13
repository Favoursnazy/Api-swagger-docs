'use strict';


/**
 * Updates a logged in user's password
 *
 * body Api_changepassword_body 
 * returns inline_response_200_1
 **/
exports.apiChange_passwordPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Password changed successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete account
 * Deletes a user's account but keeps it for a number of days for revival
 *
 * returns inline_response_200_3
 **/
exports.apiProfileDELETE = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Account deleted successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * User profile
 * This endpoint returns the details of the currently logged in user
 *
 * returns inline_response_200_2
 **/
exports.apiProfileGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "address" : "address",
    "phone" : "phone",
    "last_name" : "last_name",
    "first_name" : "first_name",
    "email" : "email"
  },
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update user account
 * Update user details
 *
 * body Api_profile_body 
 * returns inline_response_200_4
 **/
exports.apiProfilePATCH = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

