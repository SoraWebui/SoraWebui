'use client';
import {createContext, useContext, useEffect, useRef, useState} from "react";

const CommonContext = createContext(undefined);


export const CommonProvider = ({ children }) => {

  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showGeneratingModal, setShowGeneratingModal] = useState(false);



  return (
    <CommonContext.Provider
      value={{
        showLoadingModal, setShowLoadingModal,
        showGeneratingModal, setShowGeneratingModal,
      }}
    >
      {children}
    </CommonContext.Provider>
  );

}

export const useCommonContext = () => useContext(CommonContext)
