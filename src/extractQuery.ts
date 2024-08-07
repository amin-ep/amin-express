import { Query } from './types/Middlewares';

export default function extractQueryParams(path: string) {
  const url = `http://example.com${path}`;
  const parsedUrl = new URL(url);
  const queryParams = parsedUrl.searchParams;
  const queryObject: Query = {};

  queryParams.forEach((value, key) => {
    const param = value.split('&');
    if (!queryObject[key]) {
      queryObject[key] = [];
    } else {
      queryObject[key] = queryObject[key].concat(param);
    }
  });

  return queryObject;
}
