import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'leading-6 font-semibold whitespace-nowrap rounded-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed',
  {
    variants: {
      color: {
        primary:
          'bg-usBlue-600 text-white hover:bg-usBlue-500 active:bg-usBlue-700 disabled:bg-usBlue-300',
        error:
          'bg-usRed-600 text-white hover:bg-usRed-500 active:bg-usRed-700 disabled:bg-usRed-300',
        warning:
          'bg-usOrange-600 text-white hover:bg-usOrange-500 active:bg-usOrange-700 disabled:bg-usOrange-300',
        success:
          'bg-usGreen-600 text-white hover:bg-usGreen-500 active:bg-usGreen-700 disabled:bg-usGreen-300',
        dark: 'bg-usGray-1100 text-white hover:bg-usGray-900 hover:text-white active:bg-usGray-1100 disabled:bg-usGray-300',
        light:
          'bg-usGray-100 text-black hover:bg-white active:bg-usGray-400 disabled:bg-usGray-200 disabled:text-white',
        link: 'bg-transparent text-usBlue-600 hover:underline hover:text-usBlue-500 active:text-usBlue-700 disabled:no-underline disabled:text-usBlue-300' //TODO: disabled color is missing
      },
      size: {
        block: 'w-full px-6 py-4',
        lg: 'px-6 py-4', //default
        md: 'px-4 py-2 text-sm font-normal',
        sm: 'px-2 py-1 text-xs font-normal',
        icon: 'h-10 w-10'
      },
      variant: {
        solid: '',
        outline: 'bg-transparent'
      }
    },
    // TODO: outline active style?
    compoundVariants: [
      {
        variant: 'outline',
        color: 'primary',
        class:
          'border border-usBlue-600 text-usBlue-600 hover:bg-usBlue-600  hover:text-white active:bg-usBlue-600 active:text-usBlue-600 disabled:border-usBlue-300 disabled:text-usBlue-300'
      },
      {
        variant: 'outline',
        color: 'error',
        class:
          'border border-usRed-600 text-usRed-600 hover:bg-usRed-600  hover:text-white active:bg-usRed-600 active:text-usRed-600 disabled:border-usRed-300 disabled:text-usRed-300'
      },
      {
        variant: 'outline',
        color: 'warning',
        class:
          'border border-usOrange-600 text-usOrange-600 hover:bg-usOrange-600 hover:text-white active:bg-usOrange-600 active:text-usOrange-600 disabled:border-usOrange-300 disabled:text-usOrange-300'
      },
      {
        variant: 'outline',
        color: 'success',
        class:
          'border border-usGreen-600 text-usGreen-600 hover:bg-usGreen-600 hover:text-white active:bg-usGreen-600 active:text-usGreen-600 disabled:border-usGreen-300 disabled:text-usGreen-300'
      }
    ],
    defaultVariants: {
      color: 'primary',
      variant: 'solid',
      size: 'lg'
    }
  }
)

export interface ButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      'color' | 'disabled'
    >,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isDisabled?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      color,
      size,
      variant,
      isDisabled = false,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'

    if (
      variant === 'outline' &&
      (color === 'dark' || color === 'light' || color === 'link')
    ) {
      return null
    }
    // TODO: outline + dark, outline + light are not allowed

    return (
      <Comp
        className={cn(buttonVariants({ color, size, variant, className }))}
        ref={ref}
        {...props}
        disabled={isDisabled}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
