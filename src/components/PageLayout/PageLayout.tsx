import { FC, ReactNode } from 'react'
import { StyledPageLayout } from '.'

type Props = {
  children: ReactNode
  maxWidth?: number
}

const PageLayout: FC<Props> = ({ children, maxWidth = 1000 }) => {
  return (
    <StyledPageLayout className="page-layout" maxWidth={maxWidth}>
      {children}
    </StyledPageLayout>
  )
}

export default PageLayout
