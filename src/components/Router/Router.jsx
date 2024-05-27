import React from "react";
import { Route, Routes } from "react-router-dom";
import GetPlayers from "../GetPlayers";
import AddPlayer from "../AddPlayer";
import SinglePlayer from "../SinglePlayer";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/players" element={<GetPlayers />} />
      <Route path="/addplayer" element={<AddPlayer />} />
      <Route path="/player/:id" element={<SinglePlayer />} />
    </Routes>
  );
};

export default Router;
