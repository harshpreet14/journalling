import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ScriptContext = createContext(null);

export const ScriptProvider = ({ children }) => {
  const [script, setScript] = useState(null);

  return (
    <ScriptContext.Provider value={{ script, setScript }}>
      {children}
    </ScriptContext.Provider>
  );
};

export const useScript = () => {
  return useContext(ScriptContext);
};


ScriptProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};