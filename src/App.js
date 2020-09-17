import React from 'react';
import YoutubeCompPage from "./containers/pages/YoutubeCompPage/YoutubeCompPage"
import Product from '../src/containers/pages/Product/Product'
import BlogPost from './containers/pages/BlogPost/BlogPost'
import PostDetail from './containers/pages/BlogPost/PostDetail/PostDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'


function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Blog Post</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/youtube">Youtube</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact component={BlogPost} />
            <Route path="/detail-post/:postID"  component={PostDetail} />
            <Route path="/youtube" component={YoutubeCompPage} />
            <Route path="/product" component={Product} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
