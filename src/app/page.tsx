import Link from 'next/link'

export default function Home() {
  return (
    <div className='p-5'>
      <h1 className='text-xl font-semibold text-black'>Home page</h1>
      <Link href='./development/buttons'>Go to Button component</Link>
    </div>
  )
}
