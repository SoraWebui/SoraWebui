import Image from "next/image";
import Link from "next/link";

const navigation = {
  product: [
    {name: 'SoraWebui', href: 'https://sorawebui.com'}
  ],
  legal: [
    {name: 'Privacy Policy', href: '/privacy-policy'},
    {name: 'Terms & Conditions', href: '/terms-of-service'},
  ]
}

export default function Footer({
                                 locale = '',
                                 description = ''
                               }) {
  return (
    <footer className="bg-[#020d24]" aria-labelledby="footer-heading">
      <div id="footer-heading" className="sr-only">
        Footer
      </div>
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <a href={`/${locale}`}>
              <Image
                className="h-10"
                src="/appicon.svg"
                width={32}
                height={32}
                alt="Sorawebui.com"
              />
            </a>
            <p className="text-sm text-gray-300">
              {description}
            </p>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div className="text-sm font-semibold leading-6 text-white"></div>
                <ul role="list" className="mt-6 space-y-4">

                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <div className="text-sm font-semibold leading-6 text-white"></div>
                <ul role="list" className="mt-6 space-y-4">

                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div className="text-sm font-semibold leading-6 text-white">Product</div>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => {
                      return (
                        <li key={item.name}>
                          <Link href={`${item.href}`}
                                target={"_blank"}
                                className="text-sm leading-6 text-gray-300 hover:text-[#2d6ae0]">
                            {item.name}
                          </Link>
                        </li>
                      )
                    }
                  )}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <div className="text-sm font-semibold leading-6 text-white">Legal</div>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => {
                      let hrefTo = `/${locale}${item.href}`;
                      if (locale == 'en') {
                        hrefTo = `${item.href}`;
                      }
                      return (
                        <li key={item.name}>
                          <Link href={`${hrefTo}`}
                                className="text-sm leading-6 text-gray-300 hover:text-[#2d6ae0]">
                            {item.name}
                          </Link>
                        </li>
                      )
                    }
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
