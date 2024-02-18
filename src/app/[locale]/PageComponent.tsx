'use client'
import {useRouter} from "next/navigation";
import Header from '~/components/Header';
import Footer from '~/components/Footer';

const PageComponent = ({
                         locale = '',
                         title = '',
                         description = '',
                       }) => {
  const router = useRouter();


  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <Header locale={locale}/>
      <div className="my-auto text-black">
        {title}
      </div>
      <Footer locale={locale}/>
    </>
  )


}
export default PageComponent
