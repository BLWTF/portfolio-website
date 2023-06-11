import { Box } from '@chakra-ui/react'

const AfroBoy = ({ rive, height, width = null }) => {
  return (
    <Box height={height} width={width} m={3}>
      <rive.RiveComponent />
    </Box>
  )
}

export default AfroBoy
