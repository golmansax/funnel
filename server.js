import express from 'express';
import path from 'path';
import React from 'react';
import Layout from './layout';
import { getWalmartResults } from './server/walmart_results';

const env = process.env.NODE_ENV || 'development';
const server = express();

server.use(express.static(path.resolve(__dirname, 'public')));

server.get('/', (req, res) => {
  const html = '<!DOCTYPE html>' + React.renderToStaticMarkup(<Layout/>);
  res.send(html);
});

server.get('/result_sets', (req, res) => {
  getWalmartResults().then((walmartResults) => {
    res.json({
      resultSets: [getMockResultSet()].concat(walmartResults)
    });
  });
});

function getMockResultSet() {
  return {
    parentResult: getMockResult(),
    childResults: [getMockResult(), getMockResult()],
  };
}

function getMockResult() {
  return {
    displayText: 'Yay!',
    url: 'http://walmart.com',
  };
}

export default server;
