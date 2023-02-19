import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage";
import HomePage from "../pages/HomePage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<DetailsPage />} />
      {/* <Route path="/" element={<HomePage />} /> */}
    </Routes>
  );
};

export default AllRoutes;
