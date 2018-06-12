'use strict';

const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));
const { app } = require('../../index.js'); // Our app
var fs = require("fs");

const BASE_PATH = '/api/complexs/v1';
const samplePath = '/../../sampleData/v1/complex.json';
var complexData;

describe('Testing mochatestings API endpoints', function () {

  beforeEach(function() {
    var complexFD = fs.readFileSync(__dirname + samplePath);
    complexData = [];
    if(complexFD) {
      complexData = JSON.parse(complexFD);
    }
  });


                        
  // GET - List all records
  it('GET List of complexs', function () {
    return chai.request(app)
      .get(BASE_PATH)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(data.length).to.be.eql(complexData.length);
      });
  });
    // GET - List existing record by lastName
  it('GET Existing complex by lastName', function () {
    var myRecord = complexData[0];
    var uniqueParam = myRecord['lastName'];
    return chai.request(app)
      .get(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(data).to.be.eql(complexData[0]);
      });
  });

  // GET - List non-existing record by lastName
  it('GET Non-Existing complex by lastName', function () {
    var uniqueParam = 'randomNotExistingId';
    return chai.request(app)
      .get(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(404);
      });
  });
                    

                                  
  // PUT - Update existing record
  it('PUT Existing complex', function () {
    return chai.request(app)
      .put(BASE_PATH + '/'+complexData[0]['lastName'])
      .send(complexData[0])
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(complexData[0]);
      });
  });      

    // PUT - Update non-existing record
    it('PUT Non-Existing complex', function () {
      var uniqueParam = 'randomNotExistingId';
      return chai.request(app)
        .put(BASE_PATH + '/'+uniqueParam)
        .send(complexData[0])
        .then(function (res) {
          expect(res).to.have.status(404);
        });
    });  

      

                            
  // POST - Add new record
  it('POST New complex', function () {
    return chai.request(app)
      .post(BASE_PATH)
      .send(complexData[0])
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(complexData[0]);
      });
  }); 

            

                
  // PATCH - Semi-update existing record
  it('PATCH Existing complex', function () {
    var updatedSting = JSON.stringify(complexData[0]);
    var updatedRecord = JSON.parse(updatedSting);
    var uniqueParam = updatedRecord['lastName'];
    delete updatedRecord['lastName'];
    return chai.request(app)
      .patch(BASE_PATH + '/'+uniqueParam)
      .send(updatedRecord)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(complexData[0]);
      });
  }); 

                        

          
  // DELETE - Delete existing record
  it('Delete Existing complex', function () {
    var recordToDelete = complexData[0];
    var uniqueParam = recordToDelete['lastName'];
    return chai.request(app)
      .delete(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(204);
      });
  });    

  // DELETE - Delete non-existing record
  it('Delete Non-Existing complex', function () {
    var uniqueParam = 'randomNotExistingId';
    return chai.request(app)
      .delete(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(404);
      });
  });     

                              

      
});