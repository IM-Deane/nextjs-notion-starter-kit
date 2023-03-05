import React, { LegacyRef, Ref, forwardRef } from 'react'

import clsx from 'clsx'

export interface ContainerProps {
  className?: string
  children: React.ReactNode
  [key: string]: any
}

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props }: ContainerProps,
  ref: LegacyRef<HTMLDivElement>
) {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className='mx-auto max-w-7xl lg:px-8'>{children}</div>
    </div>
  )
})

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props }: ContainerProps,
  ref: LegacyRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className='mx-auto max-w-2xl lg:max-w-5xl'>{children}</div>
    </div>
  )
})

export const Container = forwardRef(function Container(
  { children, ...props }: ContainerProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
})

// @ts-expect-error ref doesn't have 'Outer' prop
Container.Outer = OuterContainer
// @ts-expect-error ref doesn't have 'Inner' prop
Container.Inner = InnerContainer
