import{b as k}from"/user-tutorials/build/_shared/chunk-2NH4LW52.js";function r(e,n){return u=n,e}function t(e,n){var l=e.next();if(l=="<"&&e.eat("!")){if(e.eatWhile(/[\-]/))return n.tokenize=o,o(e,n);if(e.eatWhile(/[\w]/))return r("keyword","doindent")}else{if(l=="<"&&e.eat("?"))return n.tokenize=f("meta","?>"),r("meta",l);if(l=="#"&&e.eatWhile(/[\w]/))return r("atom","tag");if(l=="|")return r("keyword","separator");if(l.match(/[\(\)\[\]\-\.,\+\?>]/))return r(null,l);if(l.match(/[\[\]]/))return r("rule",l);if(l=='"'||l=="'")return n.tokenize=a(l),n.tokenize(e,n);if(e.eatWhile(/[a-zA-Z\?\+\d]/)){var i=e.current();return i.substr(i.length-1,i.length).match(/\?|\+/)!==null&&e.backUp(1),r("tag","tag")}else return l=="%"||l=="*"?r("number","number"):(e.eatWhile(/[\w\\\-_%.{,]/),r(null,null))}}function o(e,n){for(var l=0,i;(i=e.next())!=null;){if(l>=2&&i==">"){n.tokenize=t;break}l=i=="-"?l+1:0}return r("comment","comment")}function a(e){return function(n,l){for(var i=!1,c;(c=n.next())!=null;){if(c==e&&!i){l.tokenize=t;break}i=!i&&c=="\\"}return r("string","tag")}}function f(e,n){return function(l,i){for(;!l.eol();){if(l.match(n)){i.tokenize=t;break}l.next()}return e}}var u,s,h=k(()=>{s={name:"dtd",startState:function(){return{tokenize:t,baseIndent:0,stack:[]}},token:function(e,n){if(e.eatSpace())return null;var l=n.tokenize(e,n),i=n.stack[n.stack.length-1];return e.current()=="["||u==="doindent"||u=="["?n.stack.push("rule"):u==="endtag"?n.stack[n.stack.length-1]="endtag":e.current()=="]"||u=="]"||u==">"&&i=="rule"?n.stack.pop():u=="["&&n.stack.push("["),l},indent:function(e,n,l){var i=e.stack.length;return n.charAt(0)==="]"?i--:n.substr(n.length-1,n.length)===">"&&(n.substr(0,1)==="<"||u=="doindent"&&n.length>1||(u=="doindent"?i--:u==">"&&n.length>1||u=="tag"&&n!==">"||(u=="tag"&&e.stack[e.stack.length-1]=="rule"?i--:u=="tag"?i++:n===">"&&e.stack[e.stack.length-1]=="rule"&&u===">"?i--:n===">"&&e.stack[e.stack.length-1]=="rule"||(n.substr(0,1)!=="<"&&n.substr(0,1)===">"?i=i-1:n===">"||(i=i-1)))),(u==null||u=="]")&&i--),e.baseIndent+i*l.unit},languageData:{indentOnInput:/^\s*[\]>]$/}}});h();export{s as dtd};
