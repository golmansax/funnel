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

function reversePath(path) {
  const parts = path.split('/');
  if (parts.length <= 1) { return path; }

  return parts.reduce((previousValue, currentValue) => {
    return `${currentValue}/${previousValue}`;
  }, '');
}

function loadCategories(categories) {
  categories.forEach((category) => {
    insertCategoryAndSlug(category, slugify(category.name));
    insertCategoryAndSlug(category, slugify(category.path));
    insertCategoryAndSlug(category, slugify(reversePath(category.path)));

    if (category.children) { loadCategories(category.children); }
  });
}
loadCategories(rawCategories);

autocomplete.initialize((onReady) => onReady(slugs));
console.log('categories loaded!'); // eslint-disable-line no-console

export function queryCategories(query) {
  const matches = autocomplete.search(slugify(query));
  if (matches.length > 0) {
    const lookup = {};
    const categories = [];
    matches.forEach((match) => {
      const category = index.get(match);
      if (!lookup[category.id]) {
        lookup[category.id] = true;
        categories.push(category);
      }
    });

    return categories;
  }

  return [];
}
