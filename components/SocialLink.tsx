import React from 'react'

interface SocialLinkProps {
  href: string
  children: React.ReactNode
  ariaLabel?: string
  className?: string
  title?: string
}

export const SocialLink = ({
  href,
  title,
  ariaLabel,
  className = '',
  children
}: SocialLinkProps) => (
  <a
    className={`hover:text-teal-500 dark:hover:text-teal-400 ${className}`}
    aria-label={ariaLabel ? ariaLabel : title}
    href={href}
    title={title ? title : ariaLabel}
    target='_blank'
    rel='noopener noreferrer'
  >
    {children}
  </a>
)
