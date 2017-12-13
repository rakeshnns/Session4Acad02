//Namespace2 which has function
//Reference to Namespace1.ts
///<reference path='Namespace1.ts'/>

namespace Namespace1{
    //Function with Export
    export function NameSpaceFn(Parameter: NameSpaceInter){
        console.log(`Example With Namesapce, Assignment Name:${Parameter.name} 
        and Assignment number:${Parameter.Assignment}.`);
 }
    export function NameSpaceFn1(){
        console.log("Second function in NameSpace2 has been evoked.");
    }
}

//Linkesd to NameSpace2 and NameSpace3f