'use strict';
  var ComplexFD = require('../../sampleData/v1/Complex.json');
  var ComplexData = ComplexFD;


var Promise = require('bluebird');
var paginationService = require('../apistrategies/pagination.js');
 

exports.getComplex = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(ComplexData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, ComplexData).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        res.end(JSON.stringify(result.pagedData));
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}





exports.putComplex = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(ComplexData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(ComplexData[Object.keys(ComplexData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postComplex = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(ComplexData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(ComplexData[Object.keys(ComplexData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchComplex = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(ComplexData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(ComplexData[Object.keys(ComplexData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteComplex = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(ComplexData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(ComplexData[Object.keys(ComplexData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


