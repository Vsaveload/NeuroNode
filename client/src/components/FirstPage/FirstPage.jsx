import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback, useState } from 'react';
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
  return (
    <>
      {' '}

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={config}
      />

      <div className="full-screen__body">
        <div className="full-screen__title">Neuro Node</div>
        <div className="full-screen__text">Приложение для создания проектов на основе графов</div>
      </div>
      <div onClick={toggle} className="btns in from-right">Войти</div>
      <div className="btns reg from-left open-btn">Зарегистрироваться</div>
      <div className="btns lib from-center open-btn">Библиотека</div>

      <ModalPage modal={modal} toggle={toggle} />
    </>
  );
}
export default FirstPage;
