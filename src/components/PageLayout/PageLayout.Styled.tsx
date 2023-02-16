import styled from 'styled-components'

type StyledProps = {
  maxWidth?: number
}

const StyledPageLayout = styled.div<StyledProps>`
  max-width: ${({ maxWidth }) => maxWidth}px;
  margin: 0 auto;
  padding: 20px;

  h1 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.color.gray[800]};
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    margin: 30px 0 -10px 0;
    color: ${({ theme }) => theme.color.gray[800]};
  }

  p,
  ol {
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.color.gray[600]};

    li {
      padding-left: 12px;

      &:not(:first-of-type) {
        margin-top: 20px;
      }
    }

    &:not(:first-of-type) {
      margin-top: 20px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.m}px) {
    padding: 40px 20px;
  }
`

export default StyledPageLayout
