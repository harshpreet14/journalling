import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const EntriesContext = createContext(null);

export const EntriesProvider = ({ children }) => {
  const [entries, setEntries] = useState(null);

  return (
    <EntriesContext.Provider value={{ entries, setEntries }}>
      {children}
    </EntriesContext.Provider>
  );
};

export const useEntries = () => {
  return useContext(EntriesContext);
};


EntriesProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};