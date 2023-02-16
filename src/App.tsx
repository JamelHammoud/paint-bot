import { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Global, ROUTES, theme } from './utils'
import { AboutView, CanvasView, PrivacyView, TermsView } from './views'

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Router>
        <Switch>
          <Route path={ROUTES.canvas} component={CanvasView} exact />
          <Route path={ROUTES.about} component={AboutView} exact />
          <Route path={ROUTES.terms} component={TermsView} exact />
          <Route path={ROUTES.privacy} component={PrivacyView} exact />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
