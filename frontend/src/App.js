import { BrowserRouter, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import CoinPage from "./pages/coinPage";
// import { makeStyles } from "@material-ui/core";
import './App.css'
import Home from "./home";
import Middle from "./middle";

// const useStyles = makeStyles(() => ({
//   App: {
//     backgroundColor: "#14161a",
//     color: "white",
//     minHeight: "100vh",
//   },
// }));

function App() {
  // const classes = useStyles();

  return (
    <BrowserRouter>
      {/* <div className={classes.App}> */}
        <Route path="/homepage" component={Middle} exact />
        {/* <Route path="/coins/:id" component={CoinPage} exact /> */}

        <Route path="/" component={Home} exact />
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;