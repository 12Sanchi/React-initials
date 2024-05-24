import { render, screen } from "@testing-library/react";
import Contact from "../Contacts";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});

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
