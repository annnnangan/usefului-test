import React from 'react'
import { Button } from '@/components/ui/buttons'

const Disabled = () => {
  return (
    <>
      <Button isDisabled>Submit</Button>
      <Button isDisabled color='error'>
        Error
      </Button>
      <Button isDisabled color='warning'>
        Warning
      </Button>
      <Button isDisabled color='success'>
        Success
      </Button>
      <Button isDisabled color='dark'>
        Dark
      </Button>
      <Button isDisabled color='light'>
        Light
      </Button>
      <Button isDisabled color='link'>
        Link
      </Button>
    </>
  )
}

export default Disabled
