import {Either, NotNil, NotUndefined, Problem, Success} from './types'

export const getSuccess = <P extends NotNil, S extends NotUndefined>(e: Either<P, S>): S => {
  return unwrapEither(e) as S
}

export const getProblem = <P extends NotNil, S extends NotUndefined>(e: Either<P, S>): P => {
  return unwrapEither(e) as P
}

const unwrapEither = <P extends NotNil, S extends NotUndefined>(e: Either<P, S>): P | S => {
  if (e.success !== undefined && e.problem !== undefined) {
    throw new Error(
      `
      Received both problem and success values at runtime when opening an Either
      Problem: ${JSON.stringify(e.problem)}
      Success: ${JSON.stringify(e.success)}
      `,
    )
    /*
     We're throwing in this function because this can only occur at runtime if something
     happens that the TypeScript compiler couldn't anticipate. That means the application
     is in an unexpected state and we should terminate immediately.
    */
  }
  if (isProblem(e)) {
    return e.problem
  }
  if (isSuccess(e)) {
    return e.success
  }
  throw new Error(`Received no problem or success values at runtime when opening Either`)
}

export const isProblem = <P extends NotNil, S extends NotUndefined>(e: Either<P, S>): e is Problem<P> => {
  return e.problem !== undefined
}

export const isSuccess = <P extends NotNil, S extends NotUndefined>(e: Either<P, S>): e is Success<S> => {
  return e.success !== undefined
}

export const createProblem = <P extends NotNil>(value: P): Problem<P> => ({ problem: value })

export const createSuccess = <S extends NotUndefined>(value: S): Success<S> => ({ success: value })

export const isStrictNever = (x: never): never => {
  throw new Error(`Never case reached with unexpected value ${x}`)
}
