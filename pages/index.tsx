import Head from 'next/head'
import React from 'react'

import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'

import * as config from '@/lib/config'
import { Container } from '@/components/Container'
import { Article } from '@/components/Home/Article'
import { Photos } from '@/components/Home/Photos'
import { Resume } from '@/components/Home/Resume'
import { SocialLink } from '@/components/SocialLink'
import { getPosts } from '@/lib/get-articles'

const ICON_STYLE =
  'h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300 hover:text-teal-500 dark:hover:text-teal-400'

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>{`Tristan Deane - ${config.name}`}</title>
        <meta
          name='description'
          content='I’m Tristan, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.'
        />
      </Head>
      <Container className='mt-9'>
        <div className='max-w-2xl'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
            {config.name}
          </h1>
          <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
            {config.description}
          </p>
          <div className='mt-6 flex gap-6'>
            <SocialLink
              href={`https://github.com/${config.github}`}
              ariaLabel='Follow Tristan on GitHub'
            >
              <FaGithub className={ICON_STYLE} />
            </SocialLink>
            <SocialLink
              href={`https://www.linkedin.com/in/${config.linkedin}`}
              ariaLabel='Follow Tristan on LinkedIn'
            >
              <FaLinkedin className={ICON_STYLE} />
            </SocialLink>
          </div>
        </div>
      </Container>
      <Photos />
      <Container className='mt-24 md:mt-28'>
        <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
          <div className='flex flex-col gap-16'>
            {articles.map((article) => (
              <Article key={article.id} article={article} />
            ))}
          </div>
          <div className='space-y-10 lg:pl-16 xl:pl-24'>
            <Resume />
          </div>
        </div>
      </Container>
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
