import React from 'react'
import { Button } from '@/components/ui/buttons'

const Outline = () => {
  return (
    <>
      <Button variant='outline'>Primary</Button>
      <Button color='error' variant='outline'>
        Error
      </Button>
      <Button color='warning' variant='outline'>
        Warning
      </Button>
      <Button color='success' variant='outline'>
        Success
      </Button>
    </>
  )
}

export default Outline
