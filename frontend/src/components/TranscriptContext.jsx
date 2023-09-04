import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const TranscriptContext = createContext(null);

export const TranscriptProvider = ({ children }) => {
  const [transcript, setTranscript] = useState(null);

  return (
    <TranscriptContext.Provider value={{ transcript, setTranscript }}>
      {children}
    </TranscriptContext.Provider>
  );
};

export const useTranscript = () => {
  return useContext(TranscriptContext);
};


TranscriptProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};