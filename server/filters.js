import { buildFacetUrl } from './walmart_url_builder';
import { getCategory } from './categories';

const default_filters = [
  ['1072864_1067618_1218947', []],
  ['1072864_1067618_1218949', []],
  ['1085666_1007039_1044037', []],
  ['1115193_1071965_1149374', []],
  ['1115193_1071968_1149388', []],
  ['1115193_1073264_1149388', []],
  ['1229749_1086976', []],
  ['1229749_1086976_1086986', []],
  ['1229749_1086977_1086987', []],
  ['2637_615760_1073684', []],
  ['4044_1156136_1156157', []],
  ['4044_1225229_1156157', []],
  ['4044_539103_1024979', []],
  ['5427_118134_1101426', []],
  ['5427_132943_132981', []],
  ['5428_4091_1043840', []],
  ['5440_1092244_1018823', []],
  ['976759_1086446_1229651', []],
  ['976759_976780_1092367', []],
  ['976759_976782_1001321', []],
  ['976759_976783_1001332', []],
  ['976759_976787_1044135', []]
];

const id_to_filter = new Map(default_filters);

function init() {

}

function loadFilters(id) {
  const filters = require(`../static_data/filters/${id}.json`);
  const category = getCategory(id);

  return filters.facets.map((filter) => {
    filter.facetValues.sort((a, b) => {
      if (a.count < b.count) { return 1; }
      if (a.count > b.count) { return -1; }
      return 0;
    });
    filter.facetValues.forEach((facet) => {
      facet.url = buildFacetUrl(category, filter, facet);
    });

    return filter;
  });
}

export function getFilters(id) {
  if (!id_to_filter.get(id)) {
    id_to_filter.set(id, loadFilters(id));
  }
  return id_to_filter.get(id);
}
