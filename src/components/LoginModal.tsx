'use client'
import React from 'react'
import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {FcGoogle} from 'react-icons/fc'
import {blackLoadingSvg} from './svg'
import {useCommonContext} from "~/context/common-context";
import {signInUseAuth} from "~/utils/nextAuthClient";
import {useSession} from "next-auth/react";
import Image from "next/image";

const style = {
  loginGoogleBtn: 'inline-flex w-full justify-center items-center space-x-3 rounded-md  px-3 py-2 text-sm font-semibold shadow-sm hover:border-indigo-400 border-2  border-indigo-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
}

const LoginModal = ({
                      loadingText='',
                      redirectPath='',
                      loginModalDesc='',
                      loginModalButtonText='',
                    }) => {

  const {data: session, status} = useSession();
  const [loadGoogle, setLoadGoogle] = useState(false)
  const {showLoginModal, setShowLoginModal} = useCommonContext();


  return (
    <Transition.Root show={showLoginModal} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setShowLoginModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>

                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3"
                                  className="gradient-text text-3xl font-bold flex justify-center items-center">
                      <a className="-m-1.5 ml-0.5 p-1.5">
                        <Image
                          className="h-8 w-auto"
                          src="/sorawebui.svg"
                          width={32}
                          height={24}
                          alt="Whooper"/>
                      </a>
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {loginModalDesc}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 space-y-3">
                  {
                    loadGoogle ? (
                      <button
                        type="button"
                        className={style.loginGoogleBtn}
                        disabled
                      >
                        {blackLoadingSvg}
                        <p>{loadingText}</p>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className={"inline-flex w-full justify-center items-center space-x-3 rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover:border-indigo-400 border-2 border-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                        onClick={async () => {
                          await signInUseAuth({
                            redirectPath: redirectPath
                          })
                          setLoadGoogle(true)
                        }}
                      >
                        <FcGoogle className='text-xl'/>
                        <p>{loginModalButtonText}</p>
                      </button>
                    )
                  }
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default LoginModal
