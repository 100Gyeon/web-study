/* ES2015 모듈 */

import { odd, even } from './var';

function checkOddOrEven(num) {
    if(num % 2) {
        return odd;
    }
    return even;
}

export default checkOddOrEven;

// .js -> .mjs
// require -> import
// module.exports -> export default