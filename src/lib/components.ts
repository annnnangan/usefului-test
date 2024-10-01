import { readFileSync } from 'fs'
import { NextResponse } from 'next/server'
import { parseImports } from 'parse-imports'
import path from 'path'

export const getComponentMetadata = async (componentName: string) => {
  const componentPath = path.join(
    process.cwd(),
    `./src/components/ui/${componentName}.tsx`
  )
  const componentCode = readFileSync(componentPath).toString()
  const knownDependencies = ['@radix-ui/']
  const imports = await parseImports(componentCode)

  return NextResponse.json({
    name: componentName,
    dependencies: Array.from(imports)
      .filter(dep =>
        knownDependencies.some(
          kwnonDep =>
            dep.moduleSpecifier.value &&
            dep.moduleSpecifier.value.startsWith(kwnonDep)
        )
      )
      .map(dep => dep.moduleSpecifier.value),
    files: [
      {
        name: `${componentName}.tsx`,
        content: componentCode
      }
    ]
  })
}
