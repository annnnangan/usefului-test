import Breadcrumb from '@/components/Breadcrumb'
import PageContainer from '@/components/PageContainer'
import { UICategory, UIDesignType } from '@/type/enum.type'
import { PropsWithChildren } from 'react'

type Props = {
  params: {
    component: keyof typeof UICategory
    designType: keyof typeof UIDesignType
  }
}

const Layout = ({ children, params }: PropsWithChildren<Props>) => {
  return (
    <div>
      <Breadcrumb params={params} />
      <PageContainer>{children}</PageContainer>
    </div>
  )
}

export default Layout
