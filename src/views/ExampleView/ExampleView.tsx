import { FC } from 'react'
import { ExampleComponent } from '../../components/ExampleComponent'
import { StyledExampleView } from '.'

const ExampleView: FC = () => {
  return (
    <StyledExampleView>
      <ExampleComponent/>
    </StyledExampleView>
  )
}

export default ExampleView
