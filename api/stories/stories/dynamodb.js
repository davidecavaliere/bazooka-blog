'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

AWS.config = new AWS.Config();
AWS.config.accessKeyId = "AKIAJD6WF5P7QJVVEWBA";
AWS.config.secretAccessKey = "secretKeyk/fazc6WdptOOl+C6HcqgtrQmQPZmvCF9Ea7dR5h";

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://localhost:8000',
  };
}

const client = new AWS.DynamoDB.DocumentClient(options);

module.exports = client;
