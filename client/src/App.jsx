import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import IndexPage from './pages/IndexPage';

function App() {

  return (
    <Routes>
      <Route index element={<IndexPage />} />
    </Routes>

  )
}

export default App
