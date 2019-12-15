var NodeRequest = require('request')

/**
 * Make a request using node.
 *
 * @param   {string}  method
 * @param   {string}  url
 * @param   {string}  body
 * @param   {Object}  headers
 * @returns {Promise}
 */
module.exports = function request (method, url, body, headers) {
  return new Promise((resolve, reject) => {
    NodeRequest({
      url,
      body: body,
      method: method,
      headers: headers
    }, function (error, response, body) {
      resolve({
        status: response.status,
        body: body
      });
    })
  });
}
