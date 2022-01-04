import React from 'react'

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  when: boolean | any
  children: React.ReactNode
  otherwise?: React.ReactNode
}

const Only: React.FC<IProps> = ({ when, children, otherwise = null }) => {
  if (when) return <>{children}</>
  if (otherwise) return <>{otherwise}</>
  return null
}

export default Only
