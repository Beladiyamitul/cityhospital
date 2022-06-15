import { Route, Router, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Department from "./Container/Department/Department";
import Doctor from "./Container/Doctor/Doctor";
import About from "./Container/About/About";
import Contact from "./Container/Contact/Contact";
import Home from "./Container/Home/Home";
import Auth from "./Container/Auth/Auth";
import PublicRoute from "./Container/route/PublicRoute";
import PrivateRoute from "./Container/route/PrivateRoute";
import ListAppoinment from "./Container/Appoinment/ListAppoinment";
import Appoinment from "./Container/Appoinment/Appoinment";



function App() {
  return (
   <>
     <Header/>
        <Switch>
          <PublicRoute exact path={"/"} component={Home}/>
          <PublicRoute exact path={"/department"} component={Department}/>
          <PrivateRoute exact path={"/doctor"} component={Doctor}/>
          <PublicRoute exact path={"/about"} component={About}/>
          <PublicRoute exact path={"/contact"} component={Contact}/>
          <PrivateRoute exact path={"/appoinment"} component={Appoinment}/>
          <Route exact path={"/listappoinment"} component={ListAppoinment}/>
          <PublicRoute restricted={true} exact path={"/auth"} component={Auth}/>

  
        </Switch>
    <Footer/>
   
   
   </>
  );
}

export default App;
