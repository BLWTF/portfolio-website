import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

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
        Hello, I&apos;m a full-stack developer based in Abuja, Nigeria.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Adegbemile Bolu
          </Heading>
          <p>Software Developer</p>
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
          Bolu is a freelance full stack engineer with a passion for problem
          solving and learning. Currently working on a product called{' '}
          <Link as={NextLink} href="/works/punterversity">
            Punterversity
          </Link>
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
          <BioYear>1995</BioYear>
          Born in Kaduna.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Acquired a Computer Science and Informatics Bachelor&pos;s Degree in
          the Federal University Otuoke
        </BioSection>
        <BioSection>
          <BioYear>2019 to 2021</BioYear>
          Developed and implemented{' '}
          <Link as={NextLink} href="/works/waterserver">
            Waterserver
          </Link>
          for the state water management agengies (WaterBoard) of Kaduna, Niger,
          Taraba and Abia States.
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Worked as a freelancer
        </BioSection>
      </Section>
			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					I Love
				</Heading>
				<Paragraph>
					Music, Pixel Art, Movies.
				</Paragraph>
			</Section>
    </Container>
  )
}

export default Page
