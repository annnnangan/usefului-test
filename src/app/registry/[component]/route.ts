import { getComponentMetadata } from '@/lib/components'

export async function GET(
  request: Request,
  { params }: { params: { component: string } }
) {
  return await getComponentMetadata(params.component)
}
