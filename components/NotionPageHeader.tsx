import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import * as types from 'notion-types'
import clsx from 'clsx'
import { Header } from 'react-notion-x'

import { Container } from '@/components/Container'
import { DesktopNavigation } from '@/components/Header'
import { MobileNavigation } from '@/components/Header'
import { ModeToggle } from '@/components/ModeToggle'
import { navigationStyle } from '@/lib/config'

import avatarImage from '/public/images/tristan-headshot.jpg'

function AvatarContainer({ className = '', ...props }) {
  return (
    <div
      className={clsx(
        className,
        'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
      )}
      {...props}
    />
  )
}

function Avatar({ large = false, className = '', ...props }) {
  return (
    <Link
      href='/'
      aria-label='Home'
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <Image
        src={avatarImage}
        alt='A headshot of Tristan Deane'
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-9 w-9'
        )}
        priority
      />
    </Link>
  )
}

export const NotionPageHeader: React.FC<{
  block: types.CollectionViewPageBlock | types.PageBlock
}> = ({ block }) => {
  if (navigationStyle === 'default') {
    return <Header block={block} />
  }

  return (
    <>
      <header className='notion-header' style={{ marginBottom: '10px' }}>
        <div className='notion-nav-header'>
          <div
            className='notion-nav-header-rhs breadcrumbs'
            style={{ flexGrow: 1 }}
          >
            <div
              className='pointer-events-none relative z-50 flex grow items-center h-full'
              style={{
                height: 'var(--header-height)',
                marginBottom: 'var(--header-mb)'
              }}
            >
              <div>
                <Container
                  className='top-[var(--header-top,theme(spacing.6))] w-full'
                  style={{ position: 'var(--header-inner-position)' }}
                >
                  <div className='relative flex gap-4'>
                    <div className='flex flex-1'>
                      <AvatarContainer>
                        <Avatar />
                      </AvatarContainer>
                    </div>
                    <div className='flex flex-1 justify-end md:justify-center'>
                      <MobileNavigation className='pointer-events-auto md:hidden' />
                      <DesktopNavigation className='pointer-events-auto hidden md:block' />
                    </div>
                  </div>
                </Container>
              </div>
            </div>
            <div className='pointer-events-auto'>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
