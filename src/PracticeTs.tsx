import React, { useEffect } from "react";

function PracticeTs() {
  // We could use ! at the end to make sure it is not null
  // or ? at console.log, OR condition
  // but instead we defined its type so that we can acess
  // the methods of a div element has.

  // const body = document.querySelector("#root") as HTMLDivElement;
  // console.log(body.firstElementChild);

  // const myDiv: HTMLDivElement = document.createElement("div");
  // myDiv.innerText = "CLICK ME";
  // const changeBackColor = (div: HTMLDivElement): void => {
  //   div.style.backgroundColor = 'red';
  // }

  // useEffect(() => {
  //   myDiv.addEventListener("click", (e: Event) => {
  //     myDiv.style.backgroundColor = "red";
  //   });
  //   return () => {
  //     myDiv.removeEventListener("click", blablabal);
  //   };
  // });

  //GENERICS
  const addRandNumber = (obj: object) => {
    let rand = Math.floor(Math.random() * 100);
    return { ...obj, rand };
  };

  //  without T extneds object, it will raise error as
  // it won't know if it is possible to use spreading
  const addRandNumber2 = <T extends object>(obj: T) => {
    let rand = Math.floor(Math.random() * 100);
    return { ...obj, rand };
  };

  const addRandNumber3 = <T extends { name: string }>(obj: T) => {
    let rand = Math.floor(Math.random() * 100);
    return { ...obj, rand };
  };

  interface Resource<T> {
    rand: number;
    resourceName: string;
    data: T;
  }

  const docThree: Resource<string> = {
    rand: 5,
    resourceName: "name",
    data: "data",
  };

  const docFour: Resource<string[]> = {
    rand: 2,
    resourceName: "naame",
    data: ["a", "b", "c"],
  };

  function takesOnlyArr<T>(arr: T[]) {
    // text editor will help us with the attributes and methods as well
    console.log(arr.length);
  }

  // Generic Types
  interface GenericIdentityFN<Type> {
    (arg: Type): Type; // type => type
  }

  function identity<Type>(arg: Type): Type {
    return arg;
  }

  // let myIdentity: GenericIdentityFN = identity;

  // Generic Constrains
  // Remember below?
  // function loggingIdentity<Type>(arg: Type): Type {
  //   console.log(arg.length);
  // Property 'length' does not exist on type 'Type'.

  //   return arg;
  // }
  // what if we want to have length property on all inputs
  interface Lengthwise {
    length: number;
  }

  function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
  }

  // Assertions
  // Unlike C# and Java, there is no runtime effect of type assertion in TypeScript. It is merely a way to let the TypeScript compiler know the type of a variable.
  let myNum: unknown = 5;
  let numToStr = myNum as string;

  return (
    <div>
      <h1>Practice</h1>
    </div>
  );
}

export default PracticeTs;
