/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/Firebase";
export const context = createContext();
const GlobalContext = ({ children }) => {
  const [edit, setEdit] = useState();

  const [user, loading] = useAuthState(auth);

  return (
    <context.Provider
      value={{
        user,
        loading,
        setEdit,
        edit,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default GlobalContext;
