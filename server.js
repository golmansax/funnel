import express from 'express';
import path from 'path';
import React from 'react';
import Layout from './layout';
import { getWalmartResults } from './server/walmart_results';
import { queryCategories } from './server/categories';
import categoryToResultSet from './server/category_to_result_set';

const server = express();

server.use(express.static(path.resolve(__dirname, 'public')));

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
