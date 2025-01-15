import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-DR53T4HVVP"); 
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};
