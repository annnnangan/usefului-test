import { readFileSync } from 'fs'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import CodeWrapper from './CodeWrapper'

type Props = {
  componentName: string
  componentCategory: string
}

const StringifyCode = ({ componentName, componentCategory }: Props) => {
  const componentPath = `./src/components/demo/${componentName}/${componentCategory}.tsx`
  const componentCode = readFileSync(componentPath).toString()

  return <CodeWrapper code={componentCode} />
}

export default StringifyCode
