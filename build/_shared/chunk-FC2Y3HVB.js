import{c as i}from"/user-tutorials/build/_shared/chunk-2NH4LW52.js";var o=i((a,e)=>{e.exports=t;t.displayName="autoit";t.aliases=[];function t(n){n.languages.autoit={comment:[/;.*/,{pattern:/(^[\t ]*)#(?:comments-start|cs)[\s\S]*?^[ \t]*#(?:ce|comments-end)/m,lookbehind:!0}],url:{pattern:/(^[\t ]*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,lookbehind:!0},string:{pattern:/(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,greedy:!0,inside:{variable:/([%$@])\w+\1/}},directive:{pattern:/(^[\t ]*)#[\w-]+/m,lookbehind:!0,alias:"keyword"},function:/\b\w+(?=\()/,variable:/[$@]\w+/,keyword:/\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,boolean:/\b(?:False|True)\b/i,operator:/<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Not|Or)\b/i,punctuation:/[\[\]().,:]/}}});export{o as a};
