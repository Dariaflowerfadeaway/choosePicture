import React from 'react'
import {HashRouter , Route} from 'react-router-dom'
import App from '../App'
import Detail from '../views/detail'
import Home from '../views/home'
import PictureSelect from '../views/PictureSelect'

const router = <HashRouter>
    <App>
        <Route path="/detail" component={Detail}/>
        <Route path="/home" component={Home}/>
        <Route path="/aaa" component={PictureSelect}/>
    </App>
</HashRouter>

export default router;