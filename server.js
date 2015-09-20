import express from 'express';
import path from 'path';
import React from 'react';
import Layout from './layout';
import { getWalmartResults } from './server/walmart_results';
import { getMockResultSet } from './server/mock_data';

const server = express();

server.use(express.static(path.resolve(__dirname, 'public')));

server.get('/', (req, res) => {
  const html = '<!DOCTYPE html>' + React.renderToStaticMarkup(<Layout/>);
  res.send(html);
});

server.get('/result_sets', (req, res) => {
  const query = req.query.query;
  getWalmartResults(query).then((walmartResults) => {
    res.json({
      resultSets: [getMockResultSet()].concat(walmartResults),
    });
  });
});

export default server;
