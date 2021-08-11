// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';
import User from './components/User';
import Blog from './components/Blog';
import Account from './components/Account';
import MarkdownEditor from './components/MarkdownEditor';

function App() {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}

    //   <Info />

    // </div>
    <Router>
      <div>
        <div>
          <Link to="/">Home</Link> | 
          <Link to="/account">Account</Link> |
          <Link to="/blog">Blog</Link> |
          <Link to="/markdown-editor">Markdown demo</Link>
        </div>
        <hr/>
        <Route exact path={["/", "/user"]} component={User}></Route>
        <Route path="/account" component={Account}></Route>
        <Route path="/blog" component={Blog}></Route>
        <Route path="/markdown-editor" component={MarkdownEditor}></Route>
      </div>
    </Router>
  );
}

export default App;
