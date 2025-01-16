import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize(import.meta.env.VITE_MEASUREMENT_ID);
};

export const logPageView = () => {
  const device = navigator.platform;
  const browser = navigator.userAgent;
  const screenResolution = `${window.screen.width}x${window.screen.height}`;

  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
    title: document.title,
    location: window.location.href,
    customData: {
      device: navigator.platform, // Custom dimension
      browser: navigator.userAgent, // Custom dimension
      screenResolution: `${window.screen.width}x${window.screen.height}`, // Custom dimension
    },
  });
};
