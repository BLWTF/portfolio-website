import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="punterversity"
            title="Punterversity"
            thumbnail="/images/works/punterversity.png"
          >
            A social network for punters with bet code converter.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="waterserver"
            title="WaterServer"
            thumbnail="/images/works/waterserver.jpg"
          >
            A ERP Software suite for state water management agencies
            (WaterBoard).
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
