import { AsyncFunction } from './utilityTypes'

const ensureInstanceOfError = (err: unknown) => (err instanceof Error ? err : Error(err as string))

export const handleAsyncError = <TFunc extends AsyncFunction<TReturn>, TReturn>(
  fn: TFunc,
  errorHandler: (e: Error) => void
) =>
  (async (...args) => {
    try {
      return await fn(...args)
    } catch (err) {
      errorHandler(ensureInstanceOfError(err))
    }
  }) as TFunc
