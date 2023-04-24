import { BrowserRouter, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import Header from "./homePageComponents/Header";
import CoinPage from "./pages/coinPage";
import Navbar from "./components/Navbar";
// import { makeStyles } from "@material-ui/core";
import "./App.css";
import Home from "./home";
import Middle from "./middle";
import News from "./homePageComponents/News";

// const useStyles = makeStyles(() => ({
//   App: {
//     backgroundColor: "#14161a",
//     color: "white",
//     minHeight: "100vh",
//   },
// }));

function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Navbar />
        {/* <div className={classes.App}> */}
        <Route path="/" component={Home} exact />
        <Route path="/homepage" component={Middle} exact />
        <Route path="/coins/:id" component={CoinPage} exact />

        <Route path="/articles" component={News} exact />
        {/* </div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
