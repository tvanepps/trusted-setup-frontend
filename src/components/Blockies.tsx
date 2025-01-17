import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import blockies from 'blockies-identicon'
import { stringToColor } from '../utils'

type Props = {
  opts: {
    seed?: string
    size?: number
    scale?: number
  }
  onClick: () => void
}

const BlockiesIdenticon = ({
  opts: { seed = 'foo', size = 15, scale = 3 },
  onClick
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null!)

  useEffect(() => {
    const color = stringToColor(seed + 'main')
    const bgcolor = stringToColor(seed + 'bg')

    // render identicon after load
    blockies.render(
      {
        seed,
        color,
        bgcolor,
        size,
        scale,
        spotcolor: bgcolor
      },
      canvasRef.current
    )
    // eslint-disable-next-line
  }, [])

  return <Canvas ref={canvasRef} onClick={onClick} />
}

const Canvas = styled.canvas`
  cursor: pointer;
  border-radius: 6px;
  transition: all linear 0.1s;

  :hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0px 6px 6px 2px #00000033;
  }
`

export default BlockiesIdenticon
