import { createRef, FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { StyledExampleView } from '.'

const ExampleView: FC = () => {
  const { popup }: any = useParams()
  const ref = createRef<HTMLAnchorElement>()

  const openLink = () => {
    window.open('http://kanishkkunal.com','popup','width=600,height=600')
  }

  return (
    <StyledExampleView>
      <a target="popup" ref={ref} onClick={() => openLink()} >
        Start Painting
      </a>
    </StyledExampleView>
  )
}

export default ExampleView
