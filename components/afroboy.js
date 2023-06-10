import { Box } from '@chakra-ui/react'
// import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

const AfroBoy = ({ rive, height, width = null }) => {
  // const { rive, RiveComponent } = useRive({
  //   src: '/rive/afroboy.riv',
  //   autoplay: true,
  //   stateMachines: !startWithLeave ? 'State' : null,
  //   animations: startWithLeave ? ['Leave'] : null
  // });
  // const toggleInput = useStateMachineInput(rive, "State", "isHere");

  return (
    <Box height={height} width={width} m={3}>
      <rive.RiveComponent />
    </Box>
  )
}

export default AfroBoy
