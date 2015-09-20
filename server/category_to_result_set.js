import { buildCategoryUrl } from './walmart_url_builder';
import { getFilters } from './filters';

function categoryToResult(category) {
  return {
    displayText: category.name,
    filters: getFilters(category.id),
    path: category.path,
    url: buildCategoryUrl(category),
  };
}

export default function categoryToResultSet(category) {
  return {
    parentResult: categoryToResult(category),
    childResults: category.children ? category.children.map(categoryToResult) : [],
  };
}
