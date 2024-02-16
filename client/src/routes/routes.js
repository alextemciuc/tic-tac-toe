import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TicTacToePage from "../pages/TicTacToePage";

function useRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <MainPage />
      }
      />
      <Route path="/login" element={
        <LoginPage />
      }
      />
      <Route path="/register" element={
        <RegisterPage />
      }
      />
      <Route path="/tictactoe" element={
        <TicTacToePage />
      } />
      <Route path="*" element={
        <Navigate to="/" replace />
      }
      />
    </Routes>
  );
}

export default useRoutes;