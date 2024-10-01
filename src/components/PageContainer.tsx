import { PropsWithChildren } from 'react'

const PageContainer = ({ children }: PropsWithChildren) => {
  return <div className='flex flex-col gap-14 pt-4'>{children}</div>
}

export default PageContainer
