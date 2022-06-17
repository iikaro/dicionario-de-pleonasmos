import React from "react";
import { Link } from "react-router-dom";

export const PleonasmOfTheDay = () => {
    let currentDay = new Date().getDate()
    return (
        <Link to={`/pleonasms/${currentDay}`}>Pleonasmo do dia</Link>
      );
}