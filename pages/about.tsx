import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { email, github, linkedin } from '@/lib/config'

import vaderPortrait from '/public/images/photos/darth-vader-oil-painting.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Icon className='h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500' />
      <a
        href={href}
        className='group flex text-md font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500'
      >
        <span className='ml-4'>{children}</span>
      </a>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <path
        fillRule='evenodd'
        d='M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z'
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Tristan Deane</title>
        <meta
          name='description'
          content='I’m Tristan Deane. I live in New York City, where I design the future.'
        />
      </Head>
      <Container className='mt-16 sm:mt-32 pb-16'>
        <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
          <div className='lg:pl-20'>
            <div className='max-w-xs px-2.5 lg:max-w-none'>
              <Image
                src={vaderPortrait}
                alt=''
                sizes='(min-width: 1024px) 32rem, 20rem'
                className='aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800'
              />
            </div>
          </div>
          <div className='lg:order-first lg:row-span-2'>
            <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
              Who am I?
            </h1>
            <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
              <p>As you might have already guessed, my name is Tristan. 👋🏾</p>
              <p>
                I currently work as a{' '}
                <strong>Full-Stack Software Engineer at NimbleHiring</strong>,
                where I strive to sling clean code and foster an innovative
                engineering culture.
              </p>
              <p>
                I love software development and spend most of my time
                researching libraries and building exciting applications that
                satisfy my creative itch.
              </p>
              <p>
                Aside from a passion for coding, I have some entrepreneurial
                tendencies that will likely lead to founding my own company when
                the time is right.
              </p>
              <p>
                In fact, as I write this, it&apos;s Q1 of 2023, and I think the
                world is in <strong>dire need</strong> of another AI-based
                chatbot. 😉
              </p>
              <p>
                Outside of work, I enjoy lounging on beaches, practicing
                Brazilian Jiu-Jitsu, and holding the controversial opinion that{' '}
                <strong>
                  Star Wars episode 3 is the best movie in the franchise
                </strong>
                .
              </p>
            </div>
          </div>
          <div className='lg:pl-20'>
            <ul role='list'>
              <SocialLink href={github} icon={GitHubIcon} className='mt-4'>
                Find me on GitHub
              </SocialLink>
              <SocialLink href={linkedin} icon={LinkedInIcon} className='mt-4'>
                Find me on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${email}`}
                icon={MailIcon}
                className='mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40'
              >
                {email}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
