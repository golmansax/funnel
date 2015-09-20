import slugify from '../shared/utils/slugify';

const PREFIX = 'http://localhost:3000/images/facets';

export default function lookupImage(filterName, facetName) {
  const extension = filterName === 'color' ? 'png' : 'webp';
  return `${PREFIX}/${slugify(filterName)}/${slugify(facetName)}.${extension}`;
}
