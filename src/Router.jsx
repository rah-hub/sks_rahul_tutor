// src/Router.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LessonPage from './LessonPage';
import CharacterSelectionPage from './CharacterSelectionPage';
import SettingsPage from './SettingsPage';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';

const AppRouter = () => (
  <>
    <Header />
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/lessons" element={<LessonPage />} />
      <Route path="/characters" element={<CharacterSelectionPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
    <Footer />
  </>
);

export default AppRouter;
