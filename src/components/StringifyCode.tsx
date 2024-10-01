import { readFileSync } from 'fs'
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
