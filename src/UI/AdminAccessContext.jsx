/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const AdminAccessContext = createContext();

export const useAdminAccess = () => useContext(AdminAccessContext);

export const AdminAccessProvider = ({ children }) => {
  const [hasAccess, setHasAccess] = useState(false);

  return (
    <AdminAccessContext.Provider value={{ hasAccess, setHasAccess }}>
      {children}
    </AdminAccessContext.Provider>
  );
};