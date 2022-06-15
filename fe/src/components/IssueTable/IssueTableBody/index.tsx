import IssueTableCell from './IssueTableCell';

export default function IssueTableBody({ issues }) {
  return issues?.map((issue) => (
    <IssueTableCell key={issue.id} issue={issue} />
  ));
}
