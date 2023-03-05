import * as React from 'react'

import { FaEnvelopeOpenText } from '@react-icons/all-files/fa/FaEnvelopeOpenText'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaMastodon } from '@react-icons/all-files/fa/FaMastodon'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'

import * as config from '@/lib/config'

import { ModeToggle } from './ModeToggle'
import { SocialLink } from './SocialLink'
import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  return (
    <footer
      className={`${styles.footer} border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40`}
    >
      <div className='text-sm text-zinc-400 dark:text-zinc-500'>
        &copy; {new Date().getFullYear()} {config.author}
      </div>

      <div className={styles.settings}>
        <ModeToggle />
      </div>

      <div className='flex gap-6 text-4xl text-zinc-800 dark:text-zinc-200'>
        {config.twitter && (
          <SocialLink
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
          >
            <FaTwitter />
          </SocialLink>
        )}

        {config.mastodon && (
          <SocialLink
            href={config.mastodon}
            title={`Mastodon ${config.getMastodonHandle()}`}
          >
            <FaMastodon />
          </SocialLink>
        )}

        {config.github && (
          <SocialLink
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
          >
            <FaGithub />
          </SocialLink>
        )}

        {config.linkedin && (
          <SocialLink
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
          >
            <FaLinkedin />
          </SocialLink>
        )}

        {config.newsletter && (
          <SocialLink
            href={`${config.newsletter}`}
            title={`Newsletter ${config.author}`}
          >
            <FaEnvelopeOpenText />
          </SocialLink>
        )}

        {config.youtube && (
          <SocialLink
            href={`https://www.youtube.com/${config.youtube}`}
            title={`YouTube ${config.author}`}
          >
            <FaYoutube />
          </SocialLink>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
