import React from 'react'

import { formatDate } from '@/lib/get-articles'

import { Card } from '../Card'

export function Article({ article }) {
  return (
    <Card as='article'>
      <Card.Title href={`/posts/${article.id}`} isExternal={true}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as='time' dateTime={article.published_on} decorate>
        {formatDate(article.published_on)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}
