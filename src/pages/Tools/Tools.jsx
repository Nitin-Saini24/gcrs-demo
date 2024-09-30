import React from "react";
import CardData from "../../Components/cards/CardData";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";

export default function Tools() {
  return (
    <div>
      Tools
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-5 2xl:gap-7">
        <Link to={"/admin/process-tools/tools/1"}>page1</Link>
        <Link to={"/admin/process-tools/tools/2"}>page2</Link>
        <Link to={"/admin/process-tools/tools/3"}>page3</Link>
        <Link to={"/admin/process-tools/tools/4"}>page4</Link>
        <Link to={"/admin/process-tools/tools/5"}>page5</Link>
      </div>
      <Outlet />
    </div>
  );
}
