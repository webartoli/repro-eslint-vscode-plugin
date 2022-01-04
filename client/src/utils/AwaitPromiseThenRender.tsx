import { useBoolean } from '@fluentui/react-hooks'
import React, { useEffect } from 'react'

interface IProps {
  promise: Promise<unknown>
  children: React.ReactNode
  onError?: (e: Error) => void
}

const AwaitPromiseThenRender: React.FC<IProps> = (props) => {
  const { children, promise, onError = () => ({}) } = props
  const [resolved, { setTrue }] = useBoolean(false)

  useEffect(() => void promise.then(setTrue).catch(onError), [])

  return resolved ? <>{children}</> : null
}

export default AwaitPromiseThenRender
