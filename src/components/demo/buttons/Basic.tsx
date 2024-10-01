import React from 'react'
import { Button } from '@/components/ui/button'

const Basic = () => {
  return (
    <>
      <Button>Primary</Button>
      <Button color='error'>Error</Button>
      <Button color='warning'>Warning</Button>
      <Button color='success'>Success</Button>
      <Button color='dark'>Dark</Button>
      <Button color='light'>Light</Button>
      <Button color='link'>Link</Button>
    </>
  )
}

export default Basic
