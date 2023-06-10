import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Head from 'next/head'
import AfroBoy from '../afroboy'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'


const Main = ({ children, router }) => {
  const smallLogo = useRive({
    src: '/rive/afroboy.riv',
    autoplay: true,
    animations: 'Leave'
  });

  const bigLogo = useRive({
    src: '/rive/afroboy.riv',
    autoplay: true,
    stateMachines: 'State',
  });

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Adegbemile Bolu - Homepage</title>
      </Head>

      <Navbar path={router.asPath} rive={smallLogo} />

      <Container maxW="container.md" pt={20}>
        <AfroBoy rive={bigLogo} height={{ base: 180, md: 240 }} />

        {children}
      </Container>
    </Box>
  )
}

export default Main
