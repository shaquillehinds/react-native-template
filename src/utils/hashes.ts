interface BooleanHash {
  [key: string]: boolean;
}

export function flushHash(hash: BooleanHash) {
  for (const key in hash) {
    delete hash[key];
  }
}

interface TimestampHash {
  [key: string]: number;
}

export const dataRefreshTimestamps: TimestampHash = {};
