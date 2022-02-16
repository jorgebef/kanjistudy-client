import { Container, TopRow } from '../components/common/PageContainer'
import { Title } from '../components/common/Title'
import { KanaGrid } from '../components/Grid'

export const Kana: React.FC = () => {
  return (
    <Container>
      <TopRow>
        <Title fontSize='md'>Kana Review!!</Title>
      </TopRow>
      <KanaGrid />
    </Container>
  )
}
