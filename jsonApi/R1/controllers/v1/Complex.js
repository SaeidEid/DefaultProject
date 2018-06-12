'use strict';

  
    var paginationService = require('../apistrategies/pagination.js');
       var ComplexImplementation = require('../../../implementation/ComplexService.js');
    
var ComplexData;

        


    module.exports.getComplex = function getComplex (req, res, next) {
    var args = req.swagger.params;
    ComplexImplementation.getComplex(args, (error, data) => {
        ComplexData = data;
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
    });
};
module.exports.getComplexById = function getComplex (req, res, next) {
    var args = req.swagger.params;
    ComplexImplementation.getComplexById(args, (error, data) => {
        ComplexData = data;
        if (ComplexData && Object.keys(ComplexData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                        
            res.writeHead(200);
            res.end(JSON.stringify(ComplexData));

        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
    
                
        


    
            module.exports.putComplex = function putComplex (req, res, next) {
    var args = req.swagger.params;
    ComplexImplementation.putComplex(args, (error, data) => {
        ComplexData = data;
        if (ComplexData && Object.keys(ComplexData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(ComplexData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
        
        


    
        module.exports.postComplex = function postComplex (req, res, next) {
    var args = req.swagger.params;
    ComplexImplementation.postComplex(args, (error, data) => {
        ComplexData = data;
        if (ComplexData && Object.keys(ComplexData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(ComplexData || {}, null, 2));
        } else {
            res.writeHead(400);
            res.end();
        }
    });
};
            
        


    
    module.exports.patchComplex = function patchComplex (req, res, next) {
    var args = req.swagger.params;
    ComplexImplementation.patchComplex(args, (error, data) => {
        ComplexData = data;
        if (ComplexData && Object.keys(ComplexData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(ComplexData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
                
        module.exports.deleteComplex = function deleteComplex (req, res, next) {
    var args = req.swagger.params;
    ComplexImplementation.deleteComplex(args, (error, data) => {
        ComplexData = data;
                if(data == true) {
            res.writeHead(204);
            res.end();
        }
        else {
            res.writeHead(404);
            res.end();
        }
    });
};
    


    
                
        
    
