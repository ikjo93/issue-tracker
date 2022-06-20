import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useRef, useState } from 'react';
import styled from 'styled-components';

import { fontSize } from '@constants/fonts';

export default function FileInputBox() {
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChangeFileInput = () => {
    if (!fileInputRef.current) throw Error('file input ref is not found');
    const newFileName = fileInputRef.current.value;
    setFileName(newFileName);
  };

  return (
    <FileBox>
      <label htmlFor="input-file">
        <AttachFileIcon fontSize="inherit" />
        {fileName === '' && <span>파일 첨부하기</span>}
      </label>
      <input
        ref={fileInputRef}
        type="file"
        id="input-file"
        onChange={handleChangeFileInput}
      />
      <UploadedFileName>{fileName}</UploadedFileName>
    </FileBox>
  );
}

const FileBox = styled.div`
  padding: 1rem;
  color: ${({ theme }) => theme.palette.placeholder};
  font-size: ${fontSize.xsmall};
`;

const UploadedFileName = styled.span``;
