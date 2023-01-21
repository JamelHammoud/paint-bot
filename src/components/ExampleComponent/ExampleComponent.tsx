import { FC } from 'react'
import { StyledExampleComponent } from '.'

/* 

Format for adding props to your component.
To use it, change line 15 to `const ExampleComponent: FC<Props> = ({ prop }) => {`.

type Props = {
  prop: type;
}

*/

const ExampleComponent: FC = () => {
  return (
    <StyledExampleComponent>
      <b>React template created by <a href="https://github.com/JamelHammoud" target="_blank" rel="noopener noreferrer">Jamel Hammoud</a>.</b>
      This is an example component. 
    </StyledExampleComponent>
  )
}

export default ExampleComponent
