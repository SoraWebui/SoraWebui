import {Fragment, useRef, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {useCommonContext} from "~/context/common-context";

export default function LoadingModal({
                                       loadingText,
                                     }) {

  const cancelButtonRef = useRef(null);
  const {showLoadingModal, setShowLoadingModal} = useCommonContext();

  return (
    <Transition.Root show={showLoadingModal} as={Fragment}>
      <Dialog as="div" className="relative z-30" initialFocus={cancelButtonRef} onClose={setShowLoadingModal}>
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

        <div className="fixed inset-0 z-30 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl">
                <div className="flex items-center justify-center">
                  <div
                    className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-xl transition ease-in-out duration-150"
                    style={{color: '#2d6ae0'}}>
                    <svg className="animate-spin -ml-1 mr-3 h-10 w-10" style={{color: '#2d6ae0'}}
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                              strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {loadingText}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
