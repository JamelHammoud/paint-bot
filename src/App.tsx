import { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Global, ROUTES, theme } from './utils'
import { CanvasView } from './views'

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Router>
        <Switch>
          <Route path={ROUTES.canvas} component={CanvasView} exact />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
