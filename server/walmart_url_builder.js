export function buildQueryUrl(query) {
  const encodedQuery = encodeURIComponent(query);
  return `http://www.walmart.com/search/?query=${encodedQuery}`;
}

export function buildAutocompleteUrl(query) {
  const modifiedQuery =
    encodeURIComponent(query.toLowerCase()).replace(/%/g, '_');

  return `http://www.walmart.com/search/autocomplete/v1/5438/${modifiedQuery}.js`;
}

export function buildCategoryUrl(category) {
  return `http://walmart.com/browse/${category.path}/${category.id}`;
}
