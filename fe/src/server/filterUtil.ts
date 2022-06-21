import { IssueType } from '@type/types';

export const filterIssues = (queryString: string, issues: IssueType[]) => {
  const searchParams = new URLSearchParams(queryString);
  const queryKeyList = ['writer', 'label', 'milestone', 'assignee'];
  const filteredByQueries = queryKeyList.reduce(
    (tempIssues, queryKey) =>
      filterByQuery(queryKey, searchParams.get(queryKey) as string, tempIssues),
    issues,
  );
  const filteredByStatus =
    searchParams.get('status') === 'CLOSED'
      ? filterByStatus('CLOSED', filteredByQueries)
      : filterByStatus('OPEN', filteredByQueries);
  return filteredByStatus;
};

const filterByQuery = (
  queryKey: string,
  queryValue: string | null,
  originalIssues: IssueType[],
) => {
  if (queryValue === null) return originalIssues;
  switch (queryKey) {
    case 'writer':
      return originalIssues.filter((issue) => issue.writer === queryValue);
    case 'label':
      return originalIssues.filter((issue) =>
        issue.labels.some((label) => label.name === queryValue),
      );
    case 'milestone':
      return originalIssues.filter(
        (issue) => issue.milestone && issue.milestone.subject === queryValue,
      );
    case 'assignee':
      return originalIssues.filter((issue) =>
        issue.assignees.some((assignee) => assignee.identity === queryValue),
      );
    default:
      return originalIssues;
  }
};

const filterByStatus = (
  target: 'OPEN' | 'CLOSED',
  originalIssues: IssueType[],
) => {
  const filtered = originalIssues.filter((issue) => issue.status === target);
  const oppositeStatusCnt = originalIssues.length - filtered.length;
  return {
    issues: filtered,
    countOfOpenIssues: target === 'OPEN' ? filtered.length : oppositeStatusCnt,
    countOfClosedIssues:
      target === 'CLOSED' ? filtered.length : oppositeStatusCnt,
  };
};
