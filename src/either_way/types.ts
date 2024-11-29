export type NotNil = {}
export type NotUndefined = NotNil | null

export type Problem<P extends NotNil> = {
  problem: P;
  success?: never;
};

export type Success<S extends NotUndefined> = {
  problem?: never;
  success: S;
};

export type Either<P extends NotNil, S extends NotUndefined> = Problem<P> | Success<S>;

