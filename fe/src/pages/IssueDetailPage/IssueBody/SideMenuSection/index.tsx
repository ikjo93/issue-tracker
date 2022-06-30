import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import IconTextBox from '@components/data-display/IconTextBox';
import Container from '@components/layout/Container';
import AlertDialog from '@components/util/AlertDialog';
import { useIssueContext } from '@contexts/IssueProvider';
import SideMenu from '@pages/common/organisms/SideMenu';
import sideMenuReducer from '@pages/common/organisms/SideMenu/sideMenuReducer';

export default function SideMenuSection() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { issue: { id, assignees = [], labels = [], milestone } = {} } =
    useIssueContext();
  const initState = { assignees, labels, milestone };
  const [menuState, menuDispatch] = useReducer(sideMenuReducer, initState);

  const handleClickDeleteButton = () => {
    axios.delete(`/api/issues/${id}`);
    navigate('/');
  };

  useEffect(() => {
    menuDispatch({ type: 'ALL', data: { milestone, assignees, labels } });
  }, [id]);

  useEffect(() => {
    const newAssigneeIds = menuState.assignees.map((assignee) => assignee.id);
    if (!id) return;
    (async () => {
      await axios.patch(`/api/issues/${id}/assignees/update`, {
        assignees: newAssigneeIds,
      });
    })();
  }, [menuState.assignees]);

  useEffect(() => {
    const newLabelIds = menuState.labels.map((label) => label.id);
    if (!id) return;
    (async () => {
      await axios.patch(`/api/issues/${id}/labels/update`, {
        labels: newLabelIds,
      });
    })();
  }, [menuState.labels]);

  useEffect(() => {
    const newMileStoneId = menuState.milestone?.id;
    if (!id) return;
    (async () => {
      await axios.patch(`/api/issues/${id}/milestone/update`, {
        milestoneId: newMileStoneId,
      });
    })();
  }, [menuState.milestone]);

  return (
    <Container flexInfo={{ direction: 'column', align: 'flex-end' }} gap={0.75}>
      <SideMenu menuState={menuState} menuDispatch={menuDispatch} />
      <Container mr="2rem">
        <AlertDialog
          sx={{
            backgroundColor: theme.palette.bgColor,
            color: theme.palette.fontColor,
          }}
          onClickYes={handleClickDeleteButton}
        >
          <IconTextBox
            Icon={<DeleteForeverOutlinedIcon />}
            texts={['이슈 삭제']}
            color={theme.palette.warning}
          />
        </AlertDialog>
      </Container>
    </Container>
  );
}
