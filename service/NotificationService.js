'use strict';


/**
 * Get user notifications
 * Returns all notifications for a user
 *
 * returns inline_response_200_15
 **/
exports.apiNotificationsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "date" : "date",
    "message" : "message"
  }, {
    "date" : "date",
    "message" : "message"
  } ],
  "message" : "Fetched notifications successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

