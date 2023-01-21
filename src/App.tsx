import { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Global, ROUTES, theme } from './utils'
import { persistor, store } from './redux'

import { ExampleView } from './views'

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Global/>
          <Router>
            {/* Routes here */}
            <Switch>
              <Route path={ROUTES.App.home} component={ExampleView} exact/>
            </Switch>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
