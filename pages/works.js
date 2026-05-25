import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { GridItem } from '../components/grid-item'
import Section from '../components/section'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <GridItem
            id="newsm"
            title="Newsm.app"
            thumbnail="/images/works/newsm.png"
            href="https://newsm.app"
          >
            A platform for news and events.
          </GridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
