import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/img/brand/logo.svg'
import { UIDesignType } from '@/type/enum.type'
import { PropsWithChildren } from 'react'

type Props = {
  params: {
    designType: keyof typeof UIDesignType
  }
}

const Header = ({ params }: PropsWithChildren<Props>) => {
  const { designType } = params
  const navItems = Object.values(UIDesignType)
  const activeNavItem = navItems.find(i => i === (designType as UIDesignType))
  return (
    <header className='sticky top-0 z-30 bg-white shadow'>
      <div className='flex max-w-[1500px] justify-between px-6 py-3 sm:mx-auto sm:w-full sm:px-4 sm:py-0'>
        <Link href='/' className='custom-navbar-begin my-3 hidden sm:block'>
          <Image src={logo} width={117} height={35} alt='Useful UI' />
        </Link>
        <nav className='hidden items-end sm:flex'>
          <ul className='custom-tab-list custom-body-content z-10 ml-20 mr-auto flex items-center text-center'>
            {navItems.map((item, index) => {
              const isActived = item === activeNavItem

              return (
                <li
                  className={`${isActived ? 'cursor-default border-usBlue-600 text-usBlue-600' : 'border-b-transparent text-usGray-600'} flex select-none items-center justify-center border-b-2 text-center text-sm`}
                  key={index}
                >
                  <Link
                    href={`/${item}`}
                    className={`${isActived && 'cursor-default'} px-2 py-4`}
                  >
                    {item}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div>icons</div>
      </div>
    </header>
  )
}

export default Header
