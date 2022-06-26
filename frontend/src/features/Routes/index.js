import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BodyWrapper from "../BodyWrapper/view";
import AddCustomer from "../Customer/AddCustomer/view";
import Login from "../login/Login";

const AppRoutes = () => {
  const login = useSelector((state) => state.userSlice);
  console.log("login", login.data);
  return (
    <BrowserRouter>
      <Routes>
        {login.data.login ? (
          <Route path="/" element={<BodyWrapper />}>
            <Route index element={<AddCustomer />} />
          </Route>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
