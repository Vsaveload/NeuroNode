const config = {
  background: {
    color: {
      value: '#000000',
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'repulse',
      },
      onHover: {
        enable: true,
        mode: 'grab',
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 450,
        duration: 0.5,
      },
      grab: {
        distance: 250,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
export default config;
