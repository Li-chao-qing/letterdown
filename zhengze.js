
var newstr=str.replace(/\s*$/g,'');
VM676:2 Uncaught ReferenceError: str is not defined(…)(anonymous function) @ VM676:2InjectedScript._evaluateOn @ VM651:875InjectedScript._evaluateAndWrap @ VM651:808InjectedScript.evaluate @ VM651:664
var str='  dfd fdf  sfs fd fs dfs fdfd fdf dsf fdsf fsdf fdf'
undefined
var newstr=str.replace(/\s*$/g,'');
undefined
newstr
"  dfd fdf  sfs fd fs dfs fdfd fdf dsf fdsf fsdf fdf"
newstr=str.replace(/\s*/g,'');
"dfdfdfsfsfdfsdfsfdfdfdfdsffdsffsdffdf"
newstr=str.replace(/\s*$/g,'');
"  dfd fdf  sfs fd fs dfs fdfd fdf dsf fdsf fsdf fdf"
newstr=str.replace(/^\s*/g,'');
"dfd fdf  sfs fd fs dfs fdfd fdf dsf fdsf fsdf fdf"
newstr=str.replace(/^\s*|\s*$/g,'');
"dfd fdf  sfs fd fs dfs fdfd fdf dsf fdsf fsdf fdf"
str.split('')
[" ", " ", "d", "f", "d", " ", "f", "d", "f", " ", " ", "s", "f", "s", " ", "f", "d", " ", "f", "s", " ", "d", "f", "s", " ", "f", "d", "f", "d", " ", "f", "d", "f", " ", "d", "s", "f", " ", "f", "d", "s", "f", " ", "f", "s", "d", "f", " ", "f", "d", "f"]
var aa=str.split('')
undefined
aa
[" ", " ", "d", "f", "d", " ", "f", "d", "f", " ", " ", "s", "f", "s", " ", "f", "d", " ", "f", "s", " ", "d", "f", "s", " ", "f", "d", "f", "d", " ", "f", "d", "f", " ", "d", "s", "f", " ", "f", "d", "s", "f", " ", "f", "s", "d", "f", " ", "f", "d", "f"]
var m=0;
for(var i=0;i<aa.length;i++){
if(aa[i]==''){m++;}
if(aa[i]!==''){break;}

}
undefined
m
0
var m=0;
for(var i=0;i<aa.length;i++){
if(aa[i]==''){m++;alert(1)}
if(aa[i]!==''){break;}

}
undefined
aa
[" ", " ", "d", "f", "d", " ", "f", "d", "f", " ", " ", "s", "f", "s", " ", "f", "d", " ", "f", "s", " ", "d", "f", "s", " ", "f", "d", "f", "d", " ", "f", "d", "f", " ", "d", "s", "f", " ", "f", "d", "s", "f", " ", "f", "s", "d", "f", " ", "f", "d", "f"]
var x=0;
undefined
for(var i=0;i<aa.length;i++){
x++;
}
50
x
51
var m=0;
for(var i=0;i<aa.length;i++){
if(aa[i]==' '){m++;alert(1)}
if(aa[i]!==' '){break;}

}
undefined
m
2