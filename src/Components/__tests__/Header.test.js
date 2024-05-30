import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login btn", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart item ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  //const cartItems = screen.getByText("Cart - (1 items)");
  const cartItems = screen.getByText("Cart - (1 items)");

  expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a Cart item ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  //const cartItems = screen.getByText("Cart - (1 items)");
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

it("Should change Logi btn to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});

/*it("Should render Header Component with a Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login " });

  expect(loginButton).toBeInTheDocument();
});*/

/*it("Should change Login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login " });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout " });

  expect(logoutButton).toBeInTheDocument();
});*/

//render something,query s.m,then assert s.m
/*   After import render & Header & line it + render+npm run test shows error--could not find react-redux context value; please ensure the 
component is wrapped in a <Provider>] we r rendering this comp. in isolation,& we r rendering on jsdom,& jsdom undstnds Jsx,react code,js code,
but it doesn't undstd redux code,doesnt knows what is selector bcoz it is a part of react-redux,so we will have to provide it the store,
we will provide it to our header,just like we had provide it to our appliation
this provider will wrap my comp.-header and tis prvd will take store & this store will come from my appstore
 error again comes-bcoz we had useedd link in h.and this link comes frrom react-router dom
 so basically we have to provide context of react router dom to our appl.
 to this above header it doesnot undstn link bcoz it doesnot have router we wiill proide router remember we created browserrouter
as we provide our app.to b.r so MY APP.WILL UNDERSTAND MY LINK COMP. now
 
we can also use regex-where we dont have o write the exact string
u can also use regex when u r writing text  (.getByText) 

Next t.c-how can i simulate that click event means change it,can use fireEvent*/
