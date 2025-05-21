import { createContext, useContext as useReactContext, useRef } from 'react';

const Context = createContext();

const ContextWrapper = ({ children }) => {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    solutions: useRef(null),
    pricing: useRef(null),
    faq: useRef(null),
    testimonial: useRef(null),
    action: useRef(null),
  };

  const scrollToSection = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Context.Provider value={{ refs, scrollToSection }}>
      {children}
    </Context.Provider>
  );
};

export default ContextWrapper;

export const useContext = () => useReactContext(Context);
