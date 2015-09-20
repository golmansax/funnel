import express from 'express';
import path from 'path';
import React from 'react';
import Layout from './server/layout';
import { getWalmartResults } from './server/walmart_results';
import { queryCategories } from './server/categories';
import categoryToResultSet from './server/category_to_result_set';

const server = express();

server.use(express.static(path.resolve(__dirname, 'public')));
server.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://www.walmart.com');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
server.get('/', (req, res) => {
  const html = '<!DOCTYPE html>' + React.renderToStaticMarkup(<Layout/>);
  res.send(html);
});

server.get('/result_sets', (req, res) => {
  const query = req.query.query;
  let resultSets = [];

  getWalmartResults(query).then((walmartResults) => {
    resultSets = resultSets.concat(walmartResults);
    res.json({ resultSets: resultSets });
  });

  const categories = queryCategories(query);
  resultSets = resultSets.concat(categories.map(categoryToResultSet));
});

export default server;
