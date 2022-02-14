import { Container, TopRow,  } from '../components/common/PageContainer'
import { Title } from '../components/common/Title'
import KanjiGrid from '../components/KanjiPicker'

export const Kanji: React.FC = () => {
  return (
    <Container>
      <TopRow>
        <Title fontSize='md'>Kanji review!!</Title>
      </TopRow>
      <KanjiGrid />
    </Container>
  )
}
