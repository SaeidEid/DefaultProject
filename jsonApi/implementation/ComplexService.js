'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/Complex.json';
var bodyParam = 'complexs/v1'; 
     


exports.getComplex = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var ComplexFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var ComplexData = [];
    if(ComplexFD) {
        ComplexData = JSON.parse(ComplexFD);
    }
    cb(null, ComplexData);
}
exports.getComplexById = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var lastName = args['lastName'] ? args['lastName'].value: null;
    var ComplexFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var ComplexData = [];
    if(ComplexFD) {
        ComplexData = JSON.parse(ComplexFD);
    }
    var myRecord;
    for(var i=0;i<ComplexData.length;i++) {
        if(ComplexData[i]['lastName'] == lastName) {
             myRecord = ComplexData[i];
             break;
        }
    }
    cb(null, myRecord);
}





exports.putComplex = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var lastName = args['lastName'] ? args['lastName'].value: null;
   var body = args[bodyParam].value;
   var ComplexFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var ComplexData = [];
   if(ComplexFD) {
       ComplexData = JSON.parse(ComplexFD);
   }
   var myRecord;
   for(var i=0;i<ComplexData.length;i++) {
       if(ComplexData[i]['lastName'] == lastName) {
            ComplexData[i] = Object.assign(ComplexData[i],body);
            myRecord = ComplexData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(ComplexData));
   cb(null, myRecord);
}


exports.postComplex = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var body = args[bodyParam].value;
    var ComplexFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var ComplexData = [];
    if(ComplexFD) {
        ComplexData = JSON.parse(ComplexFD);
    }
    ComplexData.push(body);

    fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(ComplexData));
    cb(null, body);
}


exports.patchComplex = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var lastName = args['lastName'] ? args['lastName'].value: null;
   var body = args[bodyParam].value;
   var ComplexFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var ComplexData = [];
   if(ComplexFD) {
       ComplexData = JSON.parse(ComplexFD);
   }
   var myRecord;
   for(var i=0;i<ComplexData.length;i++) {
       if(ComplexData[i]['lastName'] == lastName) {
            ComplexData[i] = Object.assign(ComplexData[i],body);
            myRecord = ComplexData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(ComplexData));
   cb(null, myRecord);
}



exports.deleteComplex = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var lastName = args['lastName'] ? args['lastName'].value: null;
   //var body = args[bodyParam].value;
   var ComplexFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var ComplexData = [];
   if(ComplexFD) {
       ComplexData = JSON.parse(ComplexFD);
   }
   var found = false;
   for(var i=0;i<ComplexData.length;i++) {
       if(ComplexData[i]['lastName'] == lastName) {
            ComplexData.splice(i,1);
            found = true;
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(ComplexData));
   if(found) {
    cb(null, true);
   }
   else {
    cb(null, false);
   }
}


