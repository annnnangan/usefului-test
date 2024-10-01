import { PropsWithChildren } from 'react'

const SubTitle = ({ children }: PropsWithChildren) => {
  return (
    <h2 className='break-all text-3xl font-semibold text-usBlue-600'>
      {children}
    </h2>
  )
}

export default SubTitle
