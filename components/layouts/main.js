import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Head from 'next/head'
import AfroBoy from '../afroboy'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

const Main = ({ children, router }) => {
  const smallLogo = useRive({
    src: '/rive/afroboy.riv',
    autoplay: true,
    stateMachines: 'State'
  })
  const smallHereInput = useStateMachineInput(
    smallLogo.rive,
    'State',
    'isHere',
    false
  )

  const bigLogo = useRive({
    src: '/rive/afroboy.riv',
    autoplay: true,
    stateMachines: 'State'
  })
  const bigHereInput = useStateMachineInput(bigLogo.rive, 'State', 'isHere')
  const bigRef = useRef(null)
  const inView = useInView(bigRef)

  useEffect(() => {
    if (bigHereInput && smallHereInput) {
      if (inView) {
        bigHereInput.value = true
        smallHereInput.value = false
      }
      
      if (!inView) {
        bigHereInput.value = false
        smallHereInput.value = true
      }
    }
  }, [inView, bigHereInput, smallHereInput])

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Bolu's homepage" />
        <meta name="author" content="Adegbemile Bolu" />
        <meta name="author" content="blwtf" />
        <link rel="shortcut icon" href="/images/apple-touch-icon.png" />
        <meta name="twitter:title" content="Adegbemile Bolu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@blwtf" />
        <meta name="twitter:creator" content="@blwtf" />
        <meta property="og:site_name" content="Adegbemile Bolu" />
        <meta property="og:title" content="Adegbemile Bolu" />
        <meta property="og:type" content="website" />
        <title>Adegbemile Bolu - Homepage</title>
      </Head>

      <Navbar path={router.asPath} rive={smallLogo} />

      <Container maxW="container.md" pt={20}>
        <Box ref={bigRef}>
          <AfroBoy rive={bigLogo} height={{ base: 180, md: 240 }} />
        </Box>
        {children}
      </Container>
    </Box>
  )
}

export default Main
