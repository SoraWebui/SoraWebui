'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { whiteLoadingSvg, blackLoadingSvg } from './svg';
import { useCommonContext } from '~/context/common-context';
import { useSession } from "next-auth/react";
import Image from "next/image";

const LoginButton = ({
                       buttonType=0,
                       loginText='Log in'
                     }) => {

  const router = useRouter();
  const {data: session, status} = useSession();

  const { userData, setUserData, showLoginModal, setShowLoginModal, showLogoutModal, setShowLogoutModal } = useCommonContext()
  const [loading, setLoading] = useState(false)

  async function login(event) {
    event.preventDefault();
    setLoading(true)
    let _userData;
    if (userData == null || Object.keys(userData).length == 0) {
      if (status == 'authenticated') {
        setUserData(session?.user)
        _userData = session?.user
      }
    } else {
      _userData = userData
    }

    if (_userData != null && Object.keys(_userData).length != 0) {
      router.refresh();
    } else {
      setShowLoginModal(true)
      setLoading(false)
    }
  }

  async function logout() {
    setShowLogoutModal(true);
  }

  return (
    <>
      {
        buttonType == 0 && (
          <>
            {
              loading ? (
                  <button className="inline-flex w-full justify-center gap-x-1.5 border border-[rgba(255,255,255,0.5)] rounded-md px-3 py-2 text-sm font-semibold hover:border-[rgba(255,255,255,0.9)]"
                          disabled
                  >
                    <p>Login</p>
                    {whiteLoadingSvg}
                  </button>
                ) :
                (
                  <button
                    className="inline-flex w-full justify-center gap-x-1.5 border border-[rgba(255,255,255,0.5)] rounded-md px-3 py-2 text-sm font-semibold hover:border-[rgba(255,255,255,0.9)]"
                    onClick={login}
                  >
                    {loginText}
                  </button>
                )
            }
          </>
        )
      }
      {
        buttonType == 1 && (
          <>
            {
              <button
                className="my-auto mx-auto mr-4 mt-1 inline-flex w-full justify-center gap-x-1.5 rounded-md text-sm font-semibold"
                onClick={logout}
              >
                <img className="h-8 w-auto rounded-full" src={userData.image} alt=""/>
              </button>
            }
          </>
        )
      }
    </>
  )
}

export default LoginButton
