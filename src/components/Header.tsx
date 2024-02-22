'use client'
import {useState} from 'react'
import {Dialog} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {GlobeAltIcon} from '@heroicons/react/24/outline'
import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import Link from "next/link";
import {languages} from "~/config";
import {useCommonContext} from '~/context/common-context'
import LoadingModal from "./LoadingModal";
import Image from "next/image";
import GeneratingModal from "~/components/GeneratingModal";

const navigation = {
  topMenu: [],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/SoraWebui/SoraWebui',
      icon: (props) => (
        <svg fill="#fff" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    }
  ]
}

export default function Header({
                                 locale = '',
                                 page = '',
                                 indexLanguageText
                               }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const {setShowGeneratingModal} = useCommonContext();
  const {setShowLoadingModal} = useCommonContext();

  const checkLocalAndLoading = (lang) => {
    if (locale != lang) {
      setShowLoadingModal(true);
    }
  }

  return (
    <header className="sticky top-0 bg-[#020d24] z-20 w-full">
      <LoadingModal loadingText={indexLanguageText.loadingText}/>
      <GeneratingModal generatingText={indexLanguageText.generateText}/>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href={`/${locale}`} className="-m-1.5 p-1.5" onClick={() => setShowLoadingModal(true)}>
            <Image className="h-8 w-auto" src="/appicon.svg" alt="sorawebui.com" width={32} height={32}/>
          </a>
          <a href={`/${locale}`} className="-m-1.5 ml-0.5 p-1.5" onClick={() => setShowLoadingModal(true)}>
            <Image
              className="h-8 w-auto"
              src="/sorawebui.svg"
              width={32}
              height={24}
              alt="sorawebui.com"/>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.topMenu.map((item) => (
            <a
              key={item.name}
              href={`/${locale}${item.href}`}
              onClick={() => setShowLoadingModal(true)}
              className="text-sm font-semibold leading-6 text-white">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 justify-end mr-2">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true"/>
            </a>
          ))}
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button
              className="inline-flex w-full justify-center gap-x-1.5 border border-[rgba(255,255,255,0.5)] rounded-md px-3 py-2 text-sm font-semibold text-white hover:border-[rgba(255,255,255,0.9)]">
              <GlobeAltIcon className="w-5 h-5 text-white"/>{locale == 'default' ? 'EN' : locale.toUpperCase()}
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true"/>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className="absolute right-0 z-10 mt-2 w-26 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {
                  languages.map((item) => {
                    let hrefValue = `/${item.lang}`;
                    if (page) {
                      hrefValue = `/${item.lang}/${page}`;
                    }
                    return (
                      <Menu.Item key={item.lang}>
                        <Link href={hrefValue} onClick={() => checkLocalAndLoading(item.lang)}>
                              <span
                                className={'text-gray-700 block px-4 py-2 text-sm hover:text-[#2d6ae0]'}
                              >
                                {item.language}
                              </span>
                        </Link>
                      </Menu.Item>
                    )
                  })
                }
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10"/>
        <Dialog.Panel
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href={`/${locale}`} className="-m-1.5 p-1.5" onClick={() => setShowLoadingModal(true)}>
              <Image className="h-8 w-auto" src="/appicon.svg" alt="sorawebui.com" width={32} height={32}/>
            </a>
            <a href={`/${locale}`} className="-m-1.5 ml-0.5 p-1.5" onClick={() => setShowLoadingModal(true)}>
              <Image
                className="h-8 w-auto"
                src="/sorawebui.svg"
                width={32}
                height={24}
                alt="sorawebui.com"/>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.topMenu.map((item) => (
                  <a
                    key={item.name}
                    href={`/${locale}${item.href}`}
                    onClick={() => setShowLoadingModal(true)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
