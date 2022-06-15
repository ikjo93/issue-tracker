import IssueTableCell from './IssueTableCell';

export default function IssueTableBody({ issues }) {
  return issues.map((issue) => <IssueTableCell issue={issue} />);
}
