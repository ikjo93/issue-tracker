import AttachFileIcon from '@mui/icons-material/AttachFile';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { useRef, useState } from 'react';
import styled from 'styled-components';

import colors from '@constants/colors';
import { fontSize } from '@constants/fonts';

const enableFileTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/jpg'];
const enableMaxFileSize = 20_000_000; // 20MB

export default function FileInputBox({ textAreaRef }) {
  const [isUploading, setIsUploading] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);
  const [isSizeError, setIsSizeError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChangeFileInput = async () => {
    if (!fileInputRef.current) throw Error('file input ref is not found');
    const { files } = fileInputRef.current;
    if (!files) return;
    // Only one file upload -> file is files[0]
    if (!enableFileTypes.includes(files[0].type)) {
      setIsTypeError(true);
      return;
    }
    if (files[0].size > enableMaxFileSize) {
      setIsSizeError(true);
      return;
    }
    const formData = new FormData();
    formData.append('images', files[0]);
    setIsUploading(true);
    const {
      data: { imageLink },
    } = await axios.post('/api/images', formData);
    const markDownString = `\n![${files[0].name}](${imageLink})`;
    textAreaRef.current.value += markDownString;
    setIsUploading(false);
    setIsTypeError(false);
    setIsSizeError(false);
  };

  return (
    <FileBox>
      <InputLabel htmlFor="input-file">
        <AttachFileIcon fontSize="inherit" />
        <span>파일 첨부하기</span>
        {isUploading && <CircularProgress color="inherit" size="0.6rem" />}
        {isTypeError && (
          <ErrorMessageBox>
            <span>지원하지 않는 파일형식입니다. </span>
            <span>
              해당 형식으로 다시 시도해보세요 -{' '}
              {enableFileTypes.map((type) => `${type.split('/')[1]}`).join(',')}
            </span>
          </ErrorMessageBox>
        )}
        {isSizeError && (
          <ErrorMessageBox>
            <span>파일 용량이 너무 큽니다. 20MB 이하로 시도해주세요 </span>
          </ErrorMessageBox>
        )}
      </InputLabel>
      <input
        ref={fileInputRef}
        type="file"
        id="input-file"
        onChange={handleChangeFileInput}
      />
    </FileBox>
  );
}

const InputLabel = styled.label`
  display: flex;
  gap: 0.5rem;
`;

const FileBox = styled.div`
  padding: 1rem;
  color: ${({ theme }) => theme.palette.placeholder};
  font-size: ${fontSize.xsmall};
`;

const ErrorMessageBox = styled.span`
  color: ${colors.red};
`;
