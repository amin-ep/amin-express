import { Query } from './types/Query';

export default function queryExtractor(path: string): Query {
  const url = `https://example.com${path}`;
  const parsedUrl = new URL(url);
  const queryParams = parsedUrl.searchParams;
  const query: Query = {};

  queryParams.forEach((value, key) => {
    const paramsValue = value.split(',');
    if (!query[key]) {
      query[key] = [];
    }

    query[key] = query[key].concat(paramsValue);
  });
  return query;
}
