import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from './config';
import './FirstPage.css';
import ModalPage from '../modalPage/ModalPage';

function FirstPage() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [modalType, SetModalType] = useState('');
  const navigate = useNavigate();
  const inHandler = () => {
    SetModalType('login');
    toggle();
  };
  const regHandler = () => {
    SetModalType('reg');
    toggle();
  };
  const libHandler = () => {
    navigate('/library');
  };
  return (
    <>
      {' '}

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={config}
      />

      <div onClick={inHandler} className="btns in from-right">Sign In</div>
      <div onClick={regHandler} className="btns reg from-left open-btn">Sign Up</div>
      <div onClick={libHandler} className="btns lib from-center open-btn">Library</div>
      <div className="full-screen__body">
        <div className="full-screen__title">Neuro Node</div>
        <div className="full-screen__text">WEB APP FOR CREATING PROJECTS BASED ON GRAPH STRUCTURE</div>
      </div>

      <ModalPage modalType={modalType} modal={modal} toggle={toggle} />
    </>
  );
}
export default FirstPage;
