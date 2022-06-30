import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

import Button from '@components/input/Button';
import Container from '@components/layout/Container';
import TagTab from '@pages/common/organisms/TagTab';
import FilterBar from '@pages/DefaultPage/UtilBar/FilterBar';

export default function UtilBar() {
  const navigate = useNavigate();

  const handleClickNewButton = () => {
    navigate('/createIssue');
  };

  return (
    <Container
      flexInfo={{ align: 'center', justify: 'space-between' }}
      mt="2rem"
    >
      <FilterBar />
      <Container
        flexInfo={{ align: 'center', justify: 'space-between' }}
        gap={1}
      >
        <TagTab />
        <Button variant="primary" size="small" onClick={handleClickNewButton}>
          <AddIcon fontSize="small" />
          <span>이슈 작성</span>
        </Button>
      </Container>
    </Container>
  );
}
