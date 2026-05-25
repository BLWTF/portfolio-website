import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        textAlign="center"
      >
        Hello, I&apos;m a fullstack engineer based in Lagos, Nigeria.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Boluwatife Adegbemile
          </Heading>
          <p>Fullstack Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/bolu.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Fullstack Engineer based in Lagos with a track record of leading technical delivery for global institutions: African Development Bank, USAID, at the intersection of real-time systems, geospatial data, and M&E infrastructure. I specialize in TypeScript-first architectures, event-driven backends, and data visualization at scale.
        </Paragraph>
        <Box align="center" my={4}>
          <Link as={NextLink} href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </Link>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2017</BioYear>
          Bachelor of Science in Computer Science, Federal University Otuoke.
        </BioSection>
        <BioSection>
          <BioYear>2020 to 2022</BioYear>
          Freelance Software Engineer & Fullstack Engineer for USAID.
        </BioSection>
        <BioSection>
          <BioYear>2024 to 2025</BioYear>
          Lead Software Engineer at African Development Bank Group (Contract).
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <BioSection>
          <BioYear>Languages</BioYear>
          TypeScript, JavaScript (ES6+), SQL, Python, HTML5, CSS3
        </BioSection>
        <BioSection>
          <BioYear>Frontend</BioYear>
          React, Next.js, Chakra UI, ArkUI, Tailwind CSS, shadcn/ui
        </BioSection>
        <BioSection>
          <BioYear>Backend</BioYear>
          Node.js, Nest.js, TypeORM, MySQL, GraphQL, REST APIs, gRPC
        </BioSection>
        <BioSection>
          <BioYear>State Mgmt</BioYear>
          XState (Actors), Redux, Context API
        </BioSection>
        <BioSection>
          <BioYear>DevOps</BioYear>
          Docker, Fly.io, Lerna, CI/CD, WebSockets
        </BioSection>
        <BioSection>
          <BioYear>Specialized</BioYear>
          Mapbox GL JS, Geospatial Queries, AI/LLM Integration
        </BioSection>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Find Me
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/BLWTF" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @BLWTF
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/boluwatife-adegbemile-014361158" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Bolu Adegbemile
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  )
}

export default Page
