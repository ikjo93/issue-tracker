export const checkIfUrlHasQuery = (
  queryKey: string,
  queryValue: string | number,
) => {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.getAll(queryKey).includes(String(queryValue));
};

export const handleUrlQuery = (
  method: 'delete' | 'set' | 'append',
  queryKey: string,
  queryValue?: string,
) => {
  const searchParams = new URLSearchParams(window.location.search);

  switch (method) {
    case 'delete':
      searchParams.delete(queryKey);
      break;
    case 'set':
      searchParams.set(queryKey, queryValue);
      break;
    case 'append':
      searchParams.append(queryKey, queryValue);
      break;
    default:
      throw new Error('invalid method');
  }

  return searchParams.toString();
};
