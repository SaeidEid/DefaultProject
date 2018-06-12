'use strict';

const request = require('request');
const config = require('../../configuration/config');

const MOCK_SERVER_PORT = config.MOCK_SERVER_PORT;
const BASE_PATH = `http://localhost:${MOCK_SERVER_PORT}`+'/api/complexs/v1';

                        
module.exports.getcomplex = function getcomplex(callback) {
  request({
    url: BASE_PATH,
    method: "GET",
    headers: {
        "content-type": "application/json"
    }
  }, function(error, response, body) {
    callback(error,response);
  });
};
module.exports.getcomplexById = function getcomplexById(uniqueParam, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "GET",
    headers: {
        "content-type": "application/json"
    }
  }, function(error, response, body) {
    callback(error,response);
  });
};
                  
                                  module.exports.putcomplex = function putcomplex(uniqueParam, body, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "PUT",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(body)
  }, function(error, response, body) {
    callback(error,response);
  });
}; 
      
                            module.exports.postcomplex = function postcomplex(body, callback) {
  request({
    url: BASE_PATH,
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(body)
  }, function(error, response, body) {
    callback(error,response);
  });
}; 

            
                module.exports.patchcomplex = function patchcomplex(uniqueParam, body, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "PATCH",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(body)
  }, function(error, response, body) {
    callback(error,response);
  });
}; 
                        
          module.exports.deletecomplex = function deletecomplex(uniqueParam, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "DELETE",
    headers: {
        "content-type": "application/json"
    }
  }, function(error, response, body) {
    callback(error,response);
  });
}; 
                              
      
  
