import { Button } from '@/components/ui/button'

const Basic = () => {
  return (
    <div className='flex flex-col gap-4 p-4'>
      <div className='flex items-center justify-center gap-x-5 gap-y-4 p-4'>
        <Button>Large</Button>
        <Button size='md'>Medium</Button>
        <Button size='sm'>Small</Button>
      </div>
      <div className='flex items-center justify-center gap-x-5 gap-y-4 p-4'>
        <Button isDisabled>Disabled</Button>
        <Button isDisabled size='md'>
          Disabled
        </Button>
        <Button isDisabled size='sm'>
          Disabled
        </Button>
      </div>
      <div className='flex items-center justify-center gap-x-5 gap-y-4 p-4'>
        <Button color='error'>Error</Button>
        <Button color='error' size='md'>
          Error
        </Button>
        <Button color='error' size='sm'>
          Error
        </Button>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-x-5 gap-y-4 p-4'>
        <Button size='block'>Block Button</Button>
        <Button color='error' size='block'>
          Block Button
        </Button>
      </div>
    </div>
  )
}

export default Basic
