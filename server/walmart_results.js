import http from 'http';

const URL = 'http://www.walmart.com/search/autocomplete/v1/5438/mens_20shoes.js';
const REGEX = /typeaheadResult\((.*)\) }/;

export function getWalmartResults() {
  return new Promise((resolve, reject) => {
    http.get(URL, (res) => {
      res.on("data", (chunk) => {
        const rawResult = chunk.toString().match(REGEX)[1];
        const walmartQueries = JSON.parse(rawResult).R;
        resolve(walmartQueries.map((query) => {
          return {
            parentResult: {
              displayText: query,
              url: 'http://walmart.com',
            },
          };
        }));
      });
    });
  });
}
