import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import AdminHome from './pages/Admin/AdminHome';
import MainLayout from './MainLayout';
import AdminLayout from './AdminLayout';
import AdminHome2 from './pages/Admin/Admin-pages/AdminHome2';
import AdminAbout from './pages/Admin/Admin-pages/AdminAbout';
import AdminEducation from './pages/Admin/Admin-pages/AdminEducation';
import AdminProject from './pages/Admin/Admin-pages/AdminProject';
import AdminContact from './pages/Admin/Admin-pages/AdminContact';
import ImageUploader from './ImageUploader';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/education"
          element={
            <MainLayout>
              <Education />
            </MainLayout>
          }
        />
        <Route
          path="/project"
          element={
            <MainLayout>
              <Projects />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <AdminHome />
            </AdminLayout>
          }
        />
        <Route
          path="/admin-home"
          element={
            <AdminLayout>
              <AdminHome2 />
            </AdminLayout>
          }
        />
        <Route
          path="/admin-about"
          element={
            <AdminLayout>
              <AdminAbout />
            </AdminLayout>
          }
        />
        <Route
          path="/admin-education"
          element={
            <AdminLayout>
              <AdminEducation />
            </AdminLayout>
          }
        />
        <Route
          path="/admin-project"
          element={
            <AdminLayout>
              <AdminProject />
            </AdminLayout>
          }
        />
        <Route
          path="/admin-contact"
          element={
            <AdminLayout>
              <AdminContact />
            </AdminLayout>
          }
        />
        <Route
          path='/admin-upload'
          element={
            <AdminLayout>
              <ImageUploader />
            </AdminLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
