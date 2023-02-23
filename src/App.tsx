import { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
import { persistor, store } from './redux'
import { Global, ROUTES, theme } from './utils'
import { AboutView, CanvasView, PrivacyView, TermsView } from './views'

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
      </PersistGate>
    </Provider>
  )
}

export default App
