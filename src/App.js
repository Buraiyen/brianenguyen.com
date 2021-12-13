import { Route, Switch } from 'react-router-dom';

import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import PortfolioView from './views/PortfolioView';
import ResumeView from './views/ResumeView';
import ContactView from './views/ContactView';
import ErrorView from './views/ErrorView';

import Navbar from './components/UI/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <header className='App-header' style={{ marginTop: 10 + 'rem' }}>
        <Switch>
          <Route path='/' exact component={HomeView} />
          <Route path='/about' component={AboutView} />
          <Route path='/portfolio' component={PortfolioView} />
          <Route path='/resume' component={ResumeView} />
          <Route path='/contact' component={ContactView} />
          <Route path='*' component={ErrorView} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
