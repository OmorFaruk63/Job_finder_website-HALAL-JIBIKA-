/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/Firebase";

export const context = createContext();
const GlobalContext = ({ children }) => {
  const [favourite, setFavourite] = useState([]);
  const [edit, setEdit] = useState();
  const [user, loading] = useAuthState(auth);

  function handleFavorite(id) {
    setFavourite([...favourite, id]);
  }

  return (
    <context.Provider
      value={{
        favourite,
        user,
        loading,
        setFavourite,
        handleFavorite,
        setEdit,
        edit,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default GlobalContext;
