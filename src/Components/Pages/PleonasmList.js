import React from "react";
import DictData from "../../Data/data.json";
import { Link, Outlet } from "react-router-dom";

export const PleonasmList = () => {
  return (
    <div>
      {
        DictData.map((entryData) => {
          return (
              <Link 
              to={`${entryData.firstWord} ${entryData.secondWord}`.replaceAll(' ', '-')}
              key={entryData}>
              {entryData.firstWord} {entryData.secondWord}
              </Link>
          );
        })}
    <Outlet />
    </div>
  );
}
