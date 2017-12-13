//Namespace1 which has interface
//Linkesd to NameSpace2 and NameSpace3f 
//Namespace2 which has function
//Reference to Namespace1.ts
///<reference path='Namespace1.ts'/>
var Namespace1;
(function (Namespace1) {
    //Function with Export
    function NameSpaceFn(Parameter) {
        console.log("Example With Namesapce, Assignment Name:" + Parameter.name + " \n        and Assignment number:" + Parameter.Assignment + ".");
    }
    Namespace1.NameSpaceFn = NameSpaceFn;
    function NameSpaceFn1() {
        console.log("Second function in NameSpace2 has been evoked.");
    }
    Namespace1.NameSpaceFn1 = NameSpaceFn1;
})(Namespace1 || (Namespace1 = {}));
//Linkesd to NameSpace2 and NameSpace3f 
//Namespace3f which reference to NameSpace1 and NameSpace2
//Reference to Namespace1.ts
///<reference path='Namespace1.ts'/>
//Reference to Namespace2.ts
///<reference path='Namespace2.ts'/>
var namespace2var = { name: "Namespace", Assignment: 1 };
Namespace1.NameSpaceFn(namespace2var);
Namespace1.NameSpaceFn1();
//to complie :tsc --outfile .\bundle.ts .\Namespace3f.ts  --> to a typescript file
/* or
 tsc --outfile final.js Namespace1.ts Namespace2.ts NameSpace3f.ts --> to a .js file*/ 
