import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-C5LMQ011F1"); 
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};
