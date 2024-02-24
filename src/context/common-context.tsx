'use client';
import {createContext, useContext, useEffect, useRef, useState} from "react";
import { useSession } from "next-auth/react";
import {useInterval} from "ahooks";


const CommonContext = createContext(undefined);
export const CommonProvider = ({ children }) => {

  const {data: session, status} = useSession();
  const [userData, setUserData] = useState();
  const [intervalUserData, setIntervalUserData] = useState(1000);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showGeneratingModal, setShowGeneratingModal] = useState(false);

  useInterval(() => {
    init();
  }, intervalUserData);

  async function init() {
    if (status == 'authenticated') {
      // 获取用户
      const requestData = {
        name: session.user.name,
        email: session.user.email,
        image: session.user.image
      }
      const response = await fetch(`/api/checkAndSaveUser`, {
        method: 'POST',
        body: JSON.stringify(requestData)
      });
      if (response.status != 200) {
        return;
      }
      const result = await response.json();
      if (result.user_id) {
        setUserData(result);
      }
      setIntervalUserData(undefined);
    } else if (status == 'loading') {

    } else if (status == 'unauthenticated') {
      setIntervalUserData(undefined);
    }
  }

  return (
    <CommonContext.Provider
      value={{
        userData, setUserData,
        showLoginModal, setShowLoginModal,
        showLogoutModal, setShowLogoutModal,
        showLoadingModal, setShowLoadingModal,
        showGeneratingModal, setShowGeneratingModal,
      }}
    >
      {children}
    </CommonContext.Provider>
  );

}

export const useCommonContext = () => useContext(CommonContext)
