import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    user: this.props.user,
  };

  setUser = (userObj) => {
    this.setState({
      user: userObj,
    });
  };

  updatePage = () => {
    this.forceUpdate();
  };

  // Language Switcher
  // changeLang = () => {
  //   const lang = localStorage.getItem("lang");
  //   if (lang === "de") {
  //     localStorage.setItem("lang", "en");
  //   } else if (lang === "en") {
  //     localStorage.setItem("lang", "de");
  //   }
  //   this.forceUpdate();
  // };

  render() {
    //console.log("APP", this.state.user);
    return (
      <div className="App">
        <Navbar
          setUser={this.setUser}
          user={this.state.user}
          updatePage={this.updatePage}
          //This means exporting "updatePage" to Navbar
        />
        <Route exact path="/" component={Home} />
        <Footer />
      </div>
    );
  }
}

export default App;

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
