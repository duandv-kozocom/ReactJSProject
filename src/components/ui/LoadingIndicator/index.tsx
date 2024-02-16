import React from 'react'

interface Props extends React.HTMLAttributes<HTMLElement> {}

export function LoadingIndicator(props: Props) {
  const { className, ...rest } = props

  const resolveClass = () => {
    const classList = ['block', className || '']
    return classList.join(' ')
  }

  return <div {...rest} className={resolveClass()} />
}
