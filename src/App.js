import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

import MainPage from "./components/MainPage";
import UserPage from "./components/UserPage";

function App() {

  return (
    <Switch>
      <Route exact path={"/users/:id"}>
        <UserPage />
      </Route>
      <Route exact path={"/users"}>
        <MainPage />
      </Route>
    </Switch>

  );
}

export default App;


// import React from 'react';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useLocation,
//   useParams,
//   useRouteMatch
// } from "react-router-dom";

// function App() {

//   return (
//     <>
//       <Router>
//         <nav>
//           <Link to={"/"}>Home</Link>
//           <Link to={"/about"}>About</Link>
//           <Link to={"/contact"}>Contact</Link>
//           <AboutMe />
//         </nav>
//         <Switch>
//           <Route path={"/contact"}>
//           <Contact />
//         </Route>
//           <Route path={"/about"}>
//           {/* <Route path={"/about/:id"}> */}
//           <About />
//         </Route>
//           <Route exact path={"/"}>
//           <Home />
//         </Route>
//         </Switch>
//       </Router>
//     </>

//   );
// }

// export default App;

// function AboutMe() {
//   const match = useRouteMatch ("/about/:id");
//   console.log('id aboutMe:', match);
//   return (
//     <Link to={"/about/asdfg"}>AboutME</Link>
//   )
// }
