import { Link, useColorModeValue, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import AfroBoy from '../components/afroboy'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = ({ rive }) => {
  // const boluLogoImg = `/images/bolu-logo.png`

  return (
    <Link href="/" as={NextLink}>
      <LogoBox>
        {/* <Image src={boluLogoImg} width={20} height={20} alt="logo" /> */}
        <AfroBoy rive={rive} height={30} width={30} />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          Adegbemile Bolu
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
