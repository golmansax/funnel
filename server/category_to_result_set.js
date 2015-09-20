import { buildCategoryUrl } from './walmart_url_builder';

function categoryToResult(category) {
  return {
    displayText: category.name,
    url: buildCategoryUrl(category),
  };
}

export default function categoryToResultSet(category) {
  return {
    parentResult: categoryToResult(category),
    childResults: category.children ? category.children.map(categoryToResult) : [],
  };
}
