import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Numeribot AI peut faire des erreurs. Pensez à vérifier les informations
      importantes. <ExternalLink href="https://numericoach.fr">NC</ExternalLink>{' '}
      <ExternalLink href="https://thierryvanoffe.com">Numeriblog</ExternalLink>.
    </p>
  )
}
