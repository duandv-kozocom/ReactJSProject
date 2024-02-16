import React from 'react'

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactElement | React.ReactElement[] | string | number
}

export function LoadingWrapper(props: Props) {
  const { children, className, ...rest } = props

  const resolveClass = () => {
    const classList = ['block', className || '']
    return classList.join(' ')
  }

  return (
    <div {...rest} className={resolveClass()}>
      {children}
    </div>
  )
}
