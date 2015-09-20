import http from 'http';
import { buildAutocompleteUrl, buildQueryUrl } from './walmart_url_builder';

const REGEX = /typeaheadResult\((.*)\) }/;

export function getWalmartResults(query) {
  return new Promise((resolve) => {
    if (!query) {
      resolve([]);
      return;
    }

    const url = buildAutocompleteUrl(query);
    http.get(url, (res) => {
      res.on('data', (chunk) => {
        const rawResult = chunk.toString().match(REGEX)[1];
        const walmartQueries = JSON.parse(rawResult).R;
        resolve(walmartQueries.map((walmartQuery) => {
          return {
            parentResult: {
              displayText: walmartQuery,
              url: buildQueryUrl(walmartQuery),
            },
          };
        }));
      });
    });
  });
}
