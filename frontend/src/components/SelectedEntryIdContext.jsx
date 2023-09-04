import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const SelectedentryIdContext = createContext(null);

export const SelectedentryIdProvider = ({ children }) => {
  const [selectedentryId, setSelectedentryId] = useState(null);

  return (
    <SelectedentryIdContext.Provider value={{ selectedentryId, setSelectedentryId }}>
      {children}
    </SelectedentryIdContext.Provider>
  );
};

export const useSelectedentryId = () => {
  return useContext(SelectedentryIdContext);
};


SelectedentryIdProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};