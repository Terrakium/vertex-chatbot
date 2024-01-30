'use client'

import * as React from 'react'
import { signIn } from 'next-auth/react'

import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconSpinner, IconGoogle } from '@/components/ui/icons'

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
    <div>
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
        {/* Insérer une icone ici pour le Google Provider */}
        {isLoading ? (
          <IconSpinner className="mr-2 animate-spin" />
        ) : (
          <IconGoogle />
        )}
        {text}
      </Button>
    </div>
  )
}
