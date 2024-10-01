import { UICategory, UIDesignType } from '@/type/enum.type'
import Link from 'next/link'

type Props = {
  params: {
    component: keyof typeof UICategory
    designType: keyof typeof UIDesignType
  }
}

const Breadcrumb = ({ params }: Props) => {
  const { designType: section, component } = params

  const list = [
    {
      tag: 'home',
      url: '/'
    },
    {
      tag: section,
      url: `/${section}`
    },
    {
      tag: component,
      url: `/${section}/${component}`
    }
  ]

  return (
    <div className='sticky top-12 z-10 w-full bg-gray-50 py-2 sm:top-[60px]'>
      <ul className='flex items-center gap-1 text-usGray-1100'>
        {list.map((item, index) => {
          const isCurrentPage = index === list.length - 1
          return (
            <li
              key={item.tag}
              className={`flex items-center gap-1 capitalize text-inherit ${isCurrentPage ? 'text-usBlue-500' : 'ml-1 after:content-["/"]'}`}
            >
              <Link
                href={item.url}
                className={`${isCurrentPage ? 'cursor-default' : 'hover:underline'}`}
              >
                {item.tag}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Breadcrumb
