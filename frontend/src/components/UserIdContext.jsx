// UserIdContext.js
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserIdContext = createContext();

export const UserIdProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  return (
    <UserIdContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserIdContext.Provider>
  );
};

export const useUserId = () => {
  return useContext(UserIdContext);
};

UserIdProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};