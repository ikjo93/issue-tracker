import AttachFileIcon from '@mui/icons-material/AttachFile';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { useRef, useState } from 'react';
import styled from 'styled-components';

import { fontSize } from '@constants/fonts';

export default function FileInputBox({ textAreaRef }) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChangeFileInput = async () => {
    if (!fileInputRef.current) throw Error('file input ref is not found');
    const enableFileTypes = ['image/png', 'image/jpeg', 'image/gif'];
    const enableMaxFileSize = 20_000_000; // 20MB
    const { files } = fileInputRef.current;
    if (!files) return;
    // Only one file upload -> file is files[0]
    if (!enableFileTypes.includes(files[0].type)) {
      // Error Message
    }
    if (files[0].size > enableMaxFileSize) {
      // Error Message
    }
    const formData = new FormData();
    formData.append('images', files[0]);
    setIsUploading(true);
    const {
      data: { imageLink },
    } = await axios.post('http://3.38.208.189/api/images', formData);
    const markDownString = `\n[${files[0].name}](${imageLink})`;
    textAreaRef.current.value += markDownString;
    setIsUploading(false);
  };

  return (
    <FileBox>
      <InputLabel htmlFor="input-file">
        <AttachFileIcon fontSize="inherit" />
        <span>파일 첨부하기</span>
        {isUploading && <CircularProgress color="inherit" size="0.6rem" />}
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
