import Autocomplete from 'autocomplete';
import { categories as rawCategories } from '../static_data/categories.json';
import slugify from '../shared/utils/slugify';

const autocomplete = Autocomplete.connectAutocomplete();
const index = new Map();
const slugs = [];

function insertCategoryAndSlug(category, slug) {
  if (!index.get(slug)) {
    index.set(slug, category);
    slugs.push(slug);
  }
}

function loadCategories(categories) {
  categories.forEach((category) => {
    insertCategoryAndSlug(category, slugify(category.name));
    insertCategoryAndSlug(category, slugify(category.path));

    if (category.children) { loadCategories(category.children); }
  });
}
loadCategories(rawCategories);

autocomplete.initialize((onReady) => onReady(slugs));
console.log('categories loaded!'); // eslint-disable-line no-console

export function queryCategories(query) {
  const matches = autocomplete.search(slugify(query));
  if (matches.length > 0) {
    return matches.map((match) => index.get(match));
  }

  return [];
}
