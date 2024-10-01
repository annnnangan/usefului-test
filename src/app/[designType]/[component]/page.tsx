import React from 'react'
import dynamic from 'next/dynamic'
import { uiDescription } from '@/data/uiDescription'
import { notFound } from 'next/navigation'
import StringifyCode from '@/components/StringifyCode'
import { UIComponentInfo } from '@/type/common.types'
import { UICategory, UIDesignType } from '@/type/enum.type'
import SubTitle from '@/components/SubTitle'
import CodeWrapper from '@/components/CodeWrapper'
import { parseDescription } from '@/lib/parseDescription'
import Image from 'next/image'

type Props = {
  params: {
    component: keyof typeof UICategory
    designType: keyof typeof UIDesignType
  }
}

const ComponentPage = async ({ params }: Props) => {
  const { component } = params
  const componentInfo: UIComponentInfo | undefined = uiDescription[component]

  if (!componentInfo) {
    return notFound()
  }

  // TODO: Update fetch link
  const installationData = await fetch(`/registry/button`)
  if (!installationData.ok) {
    throw new Error(`HTTP error! status: ${installationData.status}`)
  }
  const installationRes = await installationData.json()
  const npmDependencies = 'npm install ' + installationRes.dependencies

  const installSteps = [
    {
      instruction: '1. Install the following dependencies:',
      code: npmDependencies
    },
    {
      instruction: '2. Copy and paste the following code into your project.',
      code: installationRes.files[0].content
    },
    {
      instruction: '3. Update the import paths to match your project setup.',
      code: null
    }
  ]

  return (
    <>
      <header className='flex flex-col gap-4'>
        <h1 className='break-all text-7xl font-bold capitalize text-usBlue-600'>
          {component}
        </h1>
        <p className='text-sm'>{componentInfo.mainDescription}</p>
      </header>
      <Image
        width={1013}
        height={530}
        className='m-auto aspect-[1013/530] w-full max-w-[500px] rounded-3xl lg:w-3/4'
        src='/img/showcase/buttons.png'
        alt={component}
      />

      {/* Installation */}
      <section className='scroll-mt-28' id='button_installation'>
        <div className='flex flex-col gap-4'>
          <SubTitle>Installation</SubTitle>
          <ul className='flex flex-col gap-4'>
            {installSteps.map((item, index) => (
              <li className='space-y-2' key={index}>
                <h3 className='text-sm'>{item.instruction}</h3>
                {item.code && <CodeWrapper code={item.code} />}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Details */}
      {componentInfo.content.map((item, index) => {
        const DynamicComponent = dynamic(
          () => import(`@/components/demo/${component}/${item.demoCode}.tsx`)
        )

        return (
          <section
            className='scroll-mt-28'
            id={`button_${item.subTitle}`}
            key={index}
          >
            <div className='flex flex-col gap-4'>
              <SubTitle>{item.subTitle}</SubTitle>
              {item.description && (
                <p className='text-sm'>{parseDescription(item.description)}</p>
              )}
              <div className='flex flex-wrap items-center justify-center gap-x-5 gap-y-4 p-4'>
                <DynamicComponent />
              </div>
              <StringifyCode
                componentName={component}
                componentCategory={item.demoCode}
              />
            </div>
          </section>
        )
      })}
    </>
  )
}

export default ComponentPage
