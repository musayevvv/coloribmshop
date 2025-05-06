import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from '../mstore/layout/Layout'
import Home from '../mstore/home/Home'
import Dashboard from '../mstore/dashboard/Dashboard'
import Basket from '../mstore/basket/Basket'

const Router = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='basket' element={<Basket />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router