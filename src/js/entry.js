// entry.js
import '../css/common.css';
import hello from './hello';
import world from './world';
var a = 0; // with eslint, error ocurrs!
document.write(`${hello}, ${world}!`);
