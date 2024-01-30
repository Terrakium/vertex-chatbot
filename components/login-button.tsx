'use client'

import * as React from 'react'
import { signIn } from 'next-auth/react'

import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconSpinner } from '@/components/ui/icons'

interface LoginButtonProps extends ButtonProps {
  text?: string
}

export function LoginButton({
  text = 'Connexion',
  className,
  ...props
}: LoginButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  return (
    <div className="flex-col gap-4">
      <Button
        variant="outline"
        onClick={() => {
          setIsLoading(true)
          signIn('github', { callbackUrl: `/` })
        }}
        disabled={isLoading}
        className={cn(className)}
        {...props}
      >
        {/* Insérer des icones ici */}
        {isLoading ? <IconSpinner className="mr-2 animate-spin" /> : 'GitHub '}
        {text}
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          setIsLoading(true)
          signIn('google', { callbackUrl: `/` })
        }}
        disabled={isLoading}
        className={cn(className)}
        {...props}
      >
        {/* Insérer des icones ici pour les providers */}
        {isLoading ? <IconSpinner className="mr-2 animate-spin" /> : 'Google '}
        {text}
      </Button>
    </div>
  )
}
