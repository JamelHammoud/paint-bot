import styled from 'styled-components'

/* 

Format for adding props to your styled component.
To use it, change line 14 to `const StyledExampleComponent = styled.div<StyledProps>``.

type StyledProps = {
  prop: type;
}

*/

const StyledExampleComponent = styled.div`
  background-color: ${({ theme }) => theme.color.gray[200]};
  text-shadow: 1px 1px ${({ theme }) => theme.color.background};
  text-align: center;
  box-sizing: border-box;
  padding: 1rem;
  width: 100vw;
  height: 100vh;
  display: grid;
  align-items: center;
  align-content: center;
  grid-gap: 1rem;

  a {
    color: ${({ theme }) => theme.color.indigo[700]};
  }
`

export default StyledExampleComponent
