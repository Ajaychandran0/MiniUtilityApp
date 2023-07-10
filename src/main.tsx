import React from 'react'
import ReactDOM from 'react-dom/client'
import Taskify from './pages/Taskify/Taskify.tsx'
import WeatherApp from "./pages/WeatherApp.tsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Layout from './components/Layout.tsx';
import PageNotFound from "./pages/PageNotFound.tsx"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<WeatherApp />} />
          <Route path='/taskify' element={<Taskify />} />
          <Route path ="*" element={<PageNotFound/>} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
