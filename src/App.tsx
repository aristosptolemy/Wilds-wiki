import { useRef } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Toaster } from "react-hot-toast";
import "./css/button.css";

import TopPage from './sub-pages/top-page';
import NewTitleBuild from './sub-pages/build-page';

import './App.css'

const App = () => {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <>
      <Toaster />
      <TransitionGroup component={null}>
        <CSSTransition key={location.pathname} timeout={500} classNames="fade" nodeRef={nodeRef} unmountOnExit>
          <div ref={nodeRef} className="page">
            <Routes location={location}>
              <Route path="/" element={<TopPage />} />
              <Route path = "/new-title-build" element={<NewTitleBuild />} />

            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default App


