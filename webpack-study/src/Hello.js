import React from "react";
import bonobono from "./bonobono.jpg";
import css from "./hello.css";

export default function Hello(){
    return (<div><h1 className="Hello">보노보노좀 치워라</h1><img src={bonobono} alt=""/></div>)
}