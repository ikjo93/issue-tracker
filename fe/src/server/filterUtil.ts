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
    searchParams.get('status') === 'closed'
      ? filterByStatus('closed', filteredByQueries)
      : filterByStatus('open', filteredByQueries);
  return filteredByStatus;
};

const filterByQuery = (
  queryKey: string,
  queryValue: string,
  originalIssues: IssueType[],
) => {
  if (queryValue === null) return originalIssues;
  switch (queryKey) {
    case 'writer':
      return originalIssues.filter((issue) => issue.writer === queryValue);
    case 'label':
      return filterByLabel(Number(queryValue), originalIssues);
    case 'milestone':
      return originalIssues.filter(
        (issue) => issue.milestone.id === Number(queryValue),
      );
    case 'assignee':
      return originalIssues.filter((issue) =>
        issue.assignee.includes(queryValue),
      );
    default:
      return originalIssues;
  }
};

const filterByLabel = (targetLabelId: number, originalIssues: IssueType[]) =>
  originalIssues.filter((issue) =>
    issue.labels.some((label) => label.id === targetLabelId),
  );

const filterByStatus = (
  target: 'open' | 'closed',
  originalIssues: IssueType[],
) => {
  const filtered = originalIssues.filter((issue) => issue.status === target);
  return {
    issues: filtered,
    oppositeStatusCnt: originalIssues.length - filtered.length,
  };
};
