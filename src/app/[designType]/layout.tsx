import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { UIDesignType } from '@/type/enum.type'
import React, { PropsWithChildren } from 'react'

type Props = {
  params: {
    designType: keyof typeof UIDesignType
  }
}

const Layout = ({ children, params }: PropsWithChildren<Props>) => {
  return (
    <div className='mx-auto flex min-h-screen flex-col'>
      <Header params={params} />
      <div className='mx-auto flex w-full max-w-[1500px] sm:gap-6'>
        <aside className='sticky top-10 hidden h-[calc(100vh-60px)] max-h-fit w-full sm:block sm:w-[300px]'>
          {/* <Sidebar lang={params.lang} /> */}sidebar
        </aside>
        <main className='w-full px-6 py-7 sm:max-w-[calc(100%-300px)] sm:px-0 sm:py-12 sm:pr-7'>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
