import React from 'react';
import { Route } from 'react-router-dom';

import PersonasDetail from './containers/PersonasDetail';


const BaseRouter = () => (
    <div>
        <Route exact path='/articles/:personaID/' component={PersonasDetail} />
    </div>
);

export default BaseRouter;