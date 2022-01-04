/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// https://www.jpwilliams.dev/how-to-unpack-the-return-type-of-a-promise-in-typescript

/**
 * @deprecated Deprecated in favour of AwaitedReturnType
 * https://devblogs.microsoft.com/typescript/announcing-typescript-4-5/#awaited-type
 */
// prettier-ignore
export type AsyncReturnType<T> =
	T extends Promise<infer U> ? U :
	T extends (...args: any) => Promise<infer U> ? U :
	T extends (...args: any) => infer U ? U :
	T

export type AwaitedReturnType<T extends (...args: any) => any> = Awaited<ReturnType<T>>

// prettier-ignore
export type AsyncFunction<T> =
	T extends (...args: any) => Promise<infer U> ? T :
	never
