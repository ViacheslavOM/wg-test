import React from "react";
import {Route, Routes} from "react-router-dom";
import Search from "../components/Search";
import List from "../components/List";
import './index.scss'
import Widget from "../components/Widget";

export const Main = () => {
    return (
        <div className='main'>
            <Routes>
                <Route path='/search' element={<Search/>}/>
                <Route path='/adaptive' element={<List/>}/>
                <Route path='/widget' element={<Widget/>}/>
            </Routes>
        </div>
    )
}