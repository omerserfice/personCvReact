import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';
import './Index.css'
import routes from './routes';

const Index = () => {
   
return(
    <Router>
    

    <Header/>
        <Switch>
            {
                routes.map((item,key)=>{
                    return(
                        <Route
                        key={key}
                        path={item.path}
                        component={item.component}
                        >
                            
                        </Route>
                    )
                })
            }
        </Switch>
       
      

     <Footer/>
    
            
     
    </Router>
)


};

export default Index;
