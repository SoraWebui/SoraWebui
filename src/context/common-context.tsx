'use client';
import {createContext, useContext, useEffect, useRef, useState} from "react";

const CommonContext = createContext(undefined);


export const CommonProvider = ({ children }) => {

  const [showLoadingModal, setShowLoadingModal] = useState(false);



  return (
    <CommonContext.Provider
      value={{
        showLoadingModal, setShowLoadingModal,
      }}
    >
      {children}
    </CommonContext.Provider>
  );

}

export const useCommonContext = () => useContext(CommonContext)
