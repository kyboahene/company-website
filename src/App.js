import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Index from './pages'
import About from './pages/about'
import Contact from './pages/contact'

import Work from './pages/work'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/our-work" component={Work} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
