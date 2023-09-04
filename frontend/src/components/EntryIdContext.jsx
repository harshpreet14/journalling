import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const EntryIdContext = createContext(null);

export const EntryIdProvider = ({ children }) => {
  const [entryId, setEntryId] = useState(null);

  return (
    <EntryIdContext.Provider value={{ entryId, setEntryId }}>
      {children}
    </EntryIdContext.Provider>
  );
};

export const useEntryId = () => {
  return useContext(EntryIdContext);
};


EntryIdProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};