'use client'
import { PropsWithChildren, useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { MdContentCopy } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa6'

type Props = {
  code: string
}

const CodeWrapper = ({ code }: PropsWithChildren<Props>) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    setIsCopied(true)
    navigator.clipboard.writeText(code)
  }

  useEffect(() => {
    // TODO: Reset icon time
    const recoverIcon = setTimeout(() => {
      setIsCopied(false)
    }, 3000)
    return () => clearTimeout(recoverIcon)
  }, [isCopied])

  // code dispaly style: https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/

  return (
    <div className='code_wrapper relative overflow-hidden rounded-lg border'>
      <SyntaxHighlighter
        language='jsx'
        style={coldarkDark}
        className='custom-scrollbar mt-5 max-h-[400px] overflow-y-auto rounded-lg text-sm'
        customStyle={{
          margin: 'unset'
        }}
      >
        {code}
      </SyntaxHighlighter>
      <button
        type='button'
        className='absolute right-10 top-4 z-10 rounded-md text-sm text-usGray-200'
        onClick={handleCopy}
      >
        <FaCheck
          size={20}
          className={`${isCopied ? 'animate-grow' : 'animate-shrink pointer-events-none scale-50 opacity-0'} absolute transition`}
        />
        <MdContentCopy
          size={20}
          className={`${isCopied ? 'animate-shrink pointer-events-none scale-50 opacity-0' : 'animate-grow'} absolute transition`}
        />
      </button>
    </div>
  )
}

export default CodeWrapper
