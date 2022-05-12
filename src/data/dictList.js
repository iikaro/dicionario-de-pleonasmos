import React, { Component } from "react";
import DictData from './data.json'
import {Route, NavLink, HashRouter} from "react-router-dom"

export const DictList = () => {
    return (
        <div>
            <h1>Índice Remissivo de Pleonasmos</h1>
            {DictData.map((entryData, index) => {
                const pleonasm = `${entryData.firstWord} ${entryData.secondWord}`
                const pleonasmURL = pleonasm.replaceAll(' ', '-')
                return <div>
                    <p><NavLink exact to={"/" + pleonasmURL}> {entryData.firstWord} {entryData.secondWord} </NavLink></p>
                </div>
            })}
        </div>
    )
}

