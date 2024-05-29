import { render, screen } from "@testing-library/react";
import Contact from "../Contacts";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes inside contact us component", () => {
    render(<Contact />);

    //QUERYING
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    // console.log(inputBoxes.length);
    expect(inputBoxes.length).toBe(2);
  });
});

//2nd
/* whenever u  r testing a U.I component in react, u have to render that comp. on jsdom 
Now this render method will take a comp.which is going to be render now where it will render,it will render on jsdom
There is something known as screen whtever will be rrendered u will get its access by screen and whenever u willl do . u will find info.about 
what has been rendered on screen now by doing get by role(heading) u can find all the {headings},now i can expect something {toBeInTheDocument} 
NOW WHEN I WOULD RUN THIS  IT WOULD THROW A ERROR- DOESNOT SUPPORT JSX as 
        render{<Contact/>}--- is a jsx syntax  
      So our jsx isn't working we r adding a library  add babel

      tobeInTheDocuent-whenever we have to check whether this  is loaded or not,whether this heading 
      is present in doc or not

*/
/* Suppose u have rendered a comp. on JS-DOM,suppose i am rendering a comp.(Contact) at line no.6,now i want to find 
something inside that rendered comp.,suppose i want to find whether my button is there on page or not,lets write a t.case for it, 
  ctrl+c,now i can alsomwrite getByText instead of Role if i am writing Submit only and run it finally--no error 
  
  NOTE-When u r writing getBy means u r expecting only one thing,when u r writing getAll means u r expecting multiple inputBoxes
  
  On doing console.log(inputBoxes) we got 2 objects,basically this inputBoxes is an array,
  console.log(inputBoxes[0]) (indexing) gives 1st obj,and doing console.log(inputBoxes) we get HTMLInputElement on top which is a REACT Element,this 
  is basically the virtual-dom React Element,remember BTS when u render an input comp. when u have a input comp.it is basically JSX,& JSX is at the end React Element,& 
   React Element at the end is obj,so this obj that u see is input tag
   
   
   SUMMARY OF LINE 63 TO 66

    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes)
    when u will do console.log what will be returned over here=> screen.getAllByRole("textbox")- this returns your JSX
    Elementthat is a REACT elmt,that is a object,that is a react fiber node
    
    Do u know?--React Fibre node,JSX,React Element,virtual-dom object r ALL SAME THINGS..
    
    
    This  means doing screen dot--is termed as QUERYING and after that we ASSERT
    after that i would expect */
