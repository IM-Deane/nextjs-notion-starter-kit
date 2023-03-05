import React from 'react'

import { Card } from '../Card'

export function Article({ article }) {
  return (
    <Card as='article'>
      <Card.Title href={`/blog/${article.id}`}>{article.title}</Card.Title>
      <Card.Eyebrow as='time' dateTime={article.published_on} decorate>
        {article.published_on}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}
