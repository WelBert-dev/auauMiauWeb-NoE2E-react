import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';

import HomeScreen from './screens/HomeScreen';
import ClientScreen from './screens/ClientScreen';
import AnimalScreen from './screens/AnimalScreen';
import VeterinarianScreen from './screens/VeterinarianScreen';
import SurgeryScreen from './screens/SurgeryScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} >
          <Route path="/" element={<HomeScreen />} exact/>
          <Route path="cliente/" element={<ClientScreen />} />
          <Route path="animal/" element={<AnimalScreen />} />
          <Route path="veterinario/" element={<VeterinarianScreen />} />
          <Route path="cirurgia/" element={<SurgeryScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
