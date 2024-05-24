type UnknownObject<T = { [key: string]: unknown }> = T;

type DetectChangedProps<A, B> = {
  original: UnknownObject<A>;
  updated: UnknownObject<B>;
  required?: (keyof B)[];
  returnFormData?: boolean;
};

function detectObjectChanges<A extends B, B>({
  original,
  updated,
  required,
  returnFormData,
}: DetectChangedProps<A, B>): Partial<typeof updated> | null | FormData {
  const formData = new FormData();
  const changed: Partial<typeof updated> = {};
  for (const k in updated) {
    const key = k;
    if (
      typeof updated[key] !== 'string' &&
      typeof updated[key] !== 'number' &&
      typeof updated[key] !== 'symbol' &&
      typeof updated[key] !== 'boolean'
    ) {
      if (
        JSON.stringify(is(updated[key])) !==
          JSON.stringify(is(original[key])) &&
        !(required?.includes(key) && !updated[key])
      ) {
        changed[key] = updated[key];
        if (returnFormData) formData.append(key, JSON.stringify(updated[key]));
      }
    } else {
      if (
        is(updated[key]) !== is(original[key]) &&
        !(required?.includes(key) && !updated[key])
      ) {
        const value = updated[key];
        changed[key] = value;
        if (returnFormData)
          formData.append(
            key,
            typeof value === 'string' ? value : JSON.stringify(value),
          );
      }
    }
  }
  if (Object.keys(changed).length) {
    if (returnFormData) return formData;
    return changed;
  }
  return null;
}

export default detectObjectChanges;
