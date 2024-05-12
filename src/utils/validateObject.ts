// const requiredKeys: (keyof User)[] = ['email', 'firstName', 'lastName']

function validateObject<T extends Record<string | number, any>>(
  object: T | null,
  requiredKeys: (keyof T)[],
  optionalKeys: (keyof T)[],
  requiredValues?: Partial<T>,
): boolean {
  if (!object) return false;
  const keys = Object.keys(object) as (keyof T)[];
  for (const k of requiredKeys) {
    if (!keys.includes(k) && !optionalKeys.includes(k)) {
      console.error(
        'Object does not meet the required shape, check if the required keys are there',
        object,
      );
      return false;
    }
    if (requiredValues) {
      const key = k;
      if (
        typeof requiredValues[key] !== 'string' &&
        typeof requiredValues[key] !== 'number' &&
        typeof requiredValues[key] !== 'symbol' &&
        typeof requiredValues[key] !== 'boolean'
      ) {
        if (
          JSON.stringify(requiredValues[key] ?? undefined) !==
          JSON.stringify(object[key] ?? undefined)
        )
          return false;
      } else if (requiredValues[key] !== object[key]) return false;
    }
  }
  return true;
}

export default validateObject;
