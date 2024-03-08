import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { IconContext } from '@react-icons/all-files'

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html className='h-full antialiased' lang='en'>
          <Head>
            <script dangerouslySetInnerHTML={{ __html: modeScript }} />

            <link
              rel='alternate'
              type='application/rss+xml'
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
            />
            <link
              rel='alternate'
              type='application/feed+json'
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
            />
            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/favicon/apple-touch-icon.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/favicon/favicon-32x32.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/favicon/favicon-16x16.png'
            />
            <link rel='manifest' href='/favicon/site.webmanifest' />
            <link
              rel='mask-icon'
              href='/favicon/safari-pinned-tab.svg'
              color='#5bbad5'
            />
            <meta name='impact-site-verification' content='12fa10d4-2cee-4a9a-853e-4c95912a457a'/>
            <meta name='msapplication-TileColor' content='#da532c' />
            <meta name='theme-color' content='#ffffff' />
          </Head>

          <body className='flex h-full flex-col bg-zinc-50 dark:bg-black'>
            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
