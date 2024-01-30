import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Explique moi un concept technique',
    message: `Explique moi ce qu'est le machine learning. \n`
  },
  {
    heading: 'Résume un article',
    message: `Résume moi l'article suivant : \n`
  },
  {
    heading: 'Rédige un email',
    message: `Rédige un email à monsieur Dupont à ce sujet : \n`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Bienvenue dans Numeribot AI !
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          {
            "Il s'agit d'un projet open source qui vous permet de discuter avec un robot. 🤖"
          }
          <ExternalLink href="https://numericoach.fr">Numericoach</ExternalLink>{' '}
          &{' '}
          <ExternalLink href="https://thierryvanoffe.com">
            Numeriblog
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-muted-foreground">
          {
            "Démarrez une conversation en tapant dans la zone de texte ci-dessous ou essayez l'un des exemples suivants :"
          }
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
