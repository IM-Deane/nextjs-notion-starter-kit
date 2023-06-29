import Head from 'next/head'
import React from 'react'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { author } from '@/lib/config'
import { formatDate, getPosts } from '@/lib/get-articles'

const DESCRIPTION =
  'All of my long-form thoughts on programming, company building, and more, collected in chronological order.'

function Article({ article }) {
  return (
    <article className='md:grid md:grid-cols-4 md:items-baseline'>
      <Card className='md:col-span-3'>
        <Card.Title href={`/posts/${article.id}`} isExternal>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as='time'
          dateTime={article.published_on}
          className='md:hidden'
          decorate
        >
          {formatDate(article.published_on)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as='time'
        dateTime={article.published_on}
        className='mt-1 hidden md:block'
      >
        {formatDate(article.published_on)}
      </Card.Eyebrow>
    </article>
  )
}
export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>{`Blog - ${author}`}</title>
        <meta name='description' content={DESCRIPTION} />
      </Head>
      <SimpleLayout
        title='Writing on software design and entreprenuership.'
        intro={DESCRIPTION}
      >
        <div className='md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'>
          <div className='flex max-w-3xl flex-col space-y-16'>
            {articles.map((article) => (
              <Article key={article.id} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: await getPosts()
    }
  }
}
