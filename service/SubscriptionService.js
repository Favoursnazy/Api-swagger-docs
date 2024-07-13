'use strict';


/**
 * Get all subscriptions
 * Returns all subscriptions
 *
 * returns inline_response_200_11
 **/
exports.apiSubcriptionGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "price" : 10,
    "name" : "Basic"
  }, {
    "price" : 10,
    "name" : "Basic"
  } ],
  "message" : "Fetched subscriptions successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new subscription plan
 * SuperAdmnin create a new subscription plan
 *
 * body Api_subcription_body 
 * returns inline_response_201_2
 **/
exports.apiSubcriptionPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Plan created successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Subscribe to a plan
 * Users can subscribe to a plan already created by admin
 *
 * plan_id String ID of the subscription plan to subscribe to.
 * returns inline_response_200_14
 **/
exports.apiSubscribePlan_idPOST = function(plan_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Subscribed successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete subscription plan
 * Deletes subscription plan
 *
 * id String The subscription plan ID to delete
 * returns inline_response_200_12
 **/
exports.apiSubscriptionIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Plan deleted successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a subscription plan
 * Admin update a plan they have created before
 *
 * body Subscription_id_body 
 * id String The subscription plan ID to update
 * returns inline_response_200_13
 **/
exports.apiSubscriptionIdPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Plan updated successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

