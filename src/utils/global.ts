globalThis.is = function <T>(value: T) {
  return value ? value : undefined;
};
globalThis.isDef = function (value: unknown) {
  return value !== undefined;
};

globalThis.errMsg = function (error: unknown) {
  if (error instanceof Error) {
    return error.message;
  } else if (typeof error === 'string') {
    return error;
  } else {
    return JSON.stringify(error);
  }
};
