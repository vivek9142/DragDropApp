import React from "react";
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import CreateProject from "./pages/CreateProject/CreateProject.page";
import LabelPage from "./pages/LabelPage/LabelPage.page";
import "./App.css";

export default function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route path='/create-project' exact component={CreateProject}/>
        <Route path='/label-images'  exact component={LabelPage}/>
        <Route exact path='/' render={()=> (
          <Redirect to='/create-project'/>
        )}/>
      </Switch>
      
      </div>
      
    </BrowserRouter>
  );
}
