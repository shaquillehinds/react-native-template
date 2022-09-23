import CONFIG from '@configuration';

/**
 *
 * This is a logger function that will disable console logs outside of development mode
 * If the first value is 'warn' the logger will console.warn, 'error' will console.error
 *
 * @param {input} any[]
 *
 */
export function Logger(input: any[], source = 'Logger') {
  if (CONFIG.mode !== 'prod') {
    if (input[0] === 'warn') {
      console.warn(source + ': ', ...input.slice(1));
    } else if (input[0] === 'error') {
      console.error(source + ': ', ...input.slice(1));
    } else {
      console.log(source + ': ', ...input);
    }
  }
}

/**
 *
 * This returns a debugging logger keeps takes a location and keeps track of it when the logger function is called
 *
 * @param {source} "file name"
 *
 */
export function DebugLogger(source: string) {
  return (...args: any[]) => Logger(args, source + '/');
}

export default Logger;
