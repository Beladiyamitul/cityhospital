import { Route, Router, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Department from "./Container/Department/Department";
import Doctor from "./Container/Doctor/Doctor";
import About from "./Container/About/About";
import Contact from "./Container/Contact/Contact";
import Home from "./Container/Home/Home";



function App() {
  return (
   <>
     <Header/>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/department"} component={Department}/>
          <Route exact path={"/doctor"} component={Doctor}/>
          <Route exact path={"/about"} component={About}/>
          <Route exact path={"/contact"} component={Contact}/>

  
        </Switch>
    <Footer/>
   
   
   </>
  );
}

export default App;
