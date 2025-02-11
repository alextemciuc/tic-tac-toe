import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TicTacToePage from "../pages/TicTacToePage";
import MyAccountPage from "../pages/MyAccountPage";
import StatisticsPage from "../pages/StatisticsPage";

function useRoutes(isAuthenticated) {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={
          <MainPage />
        }
        />
        <Route path="/tic-tac-toe" element={
          <TicTacToePage />
        }
        />
        <Route path="/account" element={
          <MyAccountPage />
        }
        />
        <Route path="/statistics" element={
          <StatisticsPage />
        }
        />
        <Route path="*" element={
          <Navigate to="/" replace />
        }
        />
      </Routes>
    );
  }

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
      <Route path="*" element={
        <Navigate to="/" replace />
      }
      />
    </Routes>
  );
}

export default useRoutes;