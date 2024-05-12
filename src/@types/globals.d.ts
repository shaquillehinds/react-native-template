declare module globalThis {
  var is: <T>(value: T) => NonNullable<T> | undefined;
  var isDef: (value: unknown) => boolean;
  var errMsg: (error: unknown) => string;
}
