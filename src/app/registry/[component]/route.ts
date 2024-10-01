import { readFileSync } from 'fs'
import { parseImports } from 'parse-imports'

export async function GET(
  request: Request,
  { params }: { params: { style: string; component: string } }
) {
  const componentName = params.component // TODO security
  const componentPath = `./src/components/ui/${componentName}.tsx`
  const componentCode = readFileSync(componentPath).toString()
  const knownDependencies = ['@radix-ui/']
  const imports = await parseImports(componentCode)

  return Response.json({
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
