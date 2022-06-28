import AddIcon from '@mui/icons-material/Add';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import axios from 'axios';
import { FormEvent } from 'react';
import styled from 'styled-components';

import Button from '@components/Button';
import Container from '@components/Container';
import IconTextBox from '@components/IconTextBox';
import TextAreaBox from '@components/inputs/TextAreaBox';
import UserIcon from '@components/UserIcon';
import { useHeaderState } from '@contexts/HeaderProvider';
import { useIssueContext } from '@contexts/IssueProvider';
import mixin from '@style/mixin';
import { ReplyType } from '@type/types';

interface IReplyWritingArea {
  type: 'NEW' | 'EDIT';
  originalData?: ReplyType;
  finishEdit: () => void;
}

interface IFormEventTarget extends EventTarget {
  description?: HTMLTextAreaElement;
}

export default function ReplyWritingArea({
  type,
  originalData,
  finishEdit,
}: IReplyWritingArea) {
  const { userInfo } = useHeaderState();
  const { issue: { id } = {}, refetch: issueAxiosRefetch } = useIssueContext();

  const handleSubmitReply = (e: FormEvent) => {
    e.preventDefault();
    const formData: IFormEventTarget = e.target;
    if (!formData.description) throw new Error('Something wrong with form');
    if (type === 'NEW') {
      axios.post(`/api/issues/${id}/replies`, {
        writerId: userInfo?.id,
        comment: formData.description.value,
      });
    } else if (type === 'EDIT') {
      axios.patch(`/api/issues/replies/${originalData?.id}/update`, {
        comment: formData.description.value,
      });
      finishEdit();
    }
    formData.description.value = '';
    issueAxiosRefetch();
  };

  return (
    <ReplyForm onSubmit={handleSubmitReply}>
      <Container gap={1} flexInfo={{}} width="100%">
        <UserIcon size="BIG" imgUrl={userInfo?.profileUrl} />
        <TextAreaBox />
      </Container>
      <Container flexInfo={{}} gap={0.5}>
        {type === 'NEW' ? (
          <Button type="submit" width={7.5} height={2.5}>
            <IconTextBox
              Icon={<AddIcon fontSize="small" />}
              texts={['코멘트 작성']}
            />
          </Button>
        ) : (
          <>
            <Button width={7.5} height={2.5} variant="outlined">
              <IconTextBox
                Icon={<AddIcon fontSize="small" />}
                texts={['편집 취소']}
                onClick={finishEdit}
              />
            </Button>
            <Button type="submit" width={7.5} height={2.5}>
              <IconTextBox
                Icon={<ModeEditOutlinedIcon fontSize="small" />}
                texts={['편집 완료']}
              />
            </Button>
          </>
        )}
      </Container>
    </ReplyForm>
  );
}

const ReplyForm = styled.form`
  ${mixin.flexMixin({ direction: 'column', align: 'flex-end' })}
  gap: 1rem;
  margin-bottom: 2rem;
`;
