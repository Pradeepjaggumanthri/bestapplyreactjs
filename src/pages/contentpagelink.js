import React from 'react';
import { Route,Switch} from 'react-router-dom';
import Homepage from './home';
import Aboutpage from './aboutus';
import Servicepage from './servieces';
import Gallerypage from './gallerypage';
import Productspage from './products';
import Contactus from './contactus';

const Contentage = () =>
{
    return(
        <div>
            <Switch>
            <Route path="/" exact>
                <Homepage/>
            </Route>
            <Route path="/aboutus" >
                <Aboutpage/>
                </Route>
                <Route path="/servieces" >
                <Servicepage/>
                </Route>
                <Route path="/gallerypage" >
                <Gallerypage/>
                </Route>
                <Route path="/products" >
                <Productspage/>
                </Route>
                <Route path="/contactus" >
                <Contactus/>
                </Route>
            </Switch>
        </div>

    )
}

export default Contentage;