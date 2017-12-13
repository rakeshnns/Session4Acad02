//Namespace3f which reference to NameSpace1 and NameSpace2
//Reference to Namespace1.ts
///<reference path='Namespace1.ts'/>
//Reference to Namespace2.ts
///<reference path='Namespace2.ts'/>

let  namespace2var:Namespace1.NameSpaceInter = {name:"Namespace",Assignment:1};
Namespace1.NameSpaceFn(namespace2var);
Namespace1.NameSpaceFn1();

//to complie :tsc --outfile .\bundle.ts .\Namespace3f.ts  --> to a typescript file
/* or
 tsc --outfile final.js Namespace1.ts Namespace2.ts NameSpace3f.ts --> to a .js file*/