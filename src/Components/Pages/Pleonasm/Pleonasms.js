import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getPleonasms } from "../../../Data/Data";

export const Pleonasms = () => {
    let pleonasms = getPleonasms();
    return (
        <div>
            {pleonasms.map((pleonasm) => {
                return (
                    <Link
                        to={`/pleonasms/${pleonasm.id}`}
                        key={pleonasm.id}>
                        <h4>{pleonasm.firstWord} {pleonasm.secondWord}</h4>
                    </Link>
                );
            })}
            <Outlet />
        </div>
    );
}
