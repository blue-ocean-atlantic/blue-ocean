import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import regeneratorRuntime from 'regenerator-runtime';

import './index.scss';
import {
  Chat,
  Dashboard,
  Details,
  Home,
  Login,
  NewListing,
  SearchResults,
  Signup,
  Test
} from './pages';



const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/details/:listingId" element={<Details />} />
      <Route path="/new" element={<NewListing />} />
      <Route path="/results" element={<SearchResults />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </BrowserRouter>
);
