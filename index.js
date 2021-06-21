/**
 * @fileoverview Bytes formatter module from Glize library.
 *
 * @see https://google.github.io/styleguide/javascriptguide.xml
 * @see https://developers.google.com/closure/compiler/docs/js-for-compiler
 * @see https://github.com/Datamart/Glize
 * @module bytes-formatter
 */


/**
 * @type {!Array<string>}
 * @inner
 */
const FORMATS = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  
/**
 * Formats given <code>bytes</code> to human friendly format.
 * @param {number} bytes The bytes to be formatted.
 * @return {string} The formatted bytes as string.
 * @method
 * @example
 * import {formatBytes} from 'bytes-formatter';
 * formatBytes(1024);
 * //> 1.0 Kb
 */
export const formatBytes = (bytes) => {
  let i = 0;

  while (1023 < bytes) {
    bytes /= 1024;
    ++i;
  }

  return (i ? bytes.toFixed(2) : bytes) + ' ' + FORMATS[i];
};
  
  