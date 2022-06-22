import Container from '@components/Container';
import FilterBar from '@components/UtilBar/FilterBar';
import NewButton from '@components/UtilBar/NewButton';
import TagTab from '@components/UtilBar/TagTab';

export default function UtilBar() {
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
        <NewButton label="이슈 작성" />
      </Container>
    </Container>
  );
}
