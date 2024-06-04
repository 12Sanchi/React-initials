import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the Body component with Search ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");
  //console.log(searchInput);
  console.log(searchBtn);
  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  //const cards = screen.getAllByTestId("resCard");

  // expect(cards.length).toBe(1);
  expect(searchBtn).toBeInTheDocument();
});

/* we r going to test integration or conjunction of multi. comp.
1st on loading 20 cards of items r disp.aftter yping burger 4 cards r shown
we r going tomtest this ,i am testing search feautures so named fil as search,let me render full body 
comp.one mooree thing is there in body comp.fetch f(n) which was goig to network,making an api call,
getting the data,let me tell u how can we write tt.c to fetch the data,to handle these type of async
 oper.doing import rener+body+it+render gives er-fetch not defined bcoz when we write render (<Body />) body comp. it is not
rendering it on browsers it renders body on js-dom which is browser like,it doesnot have all the 
superpowers of browser & if u getback to nama.javascript this fetch is sup.pow. of brow. bcoz this is
 given us by brows. it's not there in j.s,its kind of api written in j.s,so it (jest) cannot undertand
  what is fetch so we have to fake this,just like we have mockdata for rest.we can write mock fetch f(n) for our fetch 
so i will do global.fetch

global.fetch = jest.f(n)

this global is a global obj.whereevr this is being rendered so it will replace the fetch f(n),b
bcoz it didnot find the fetch f(n),so i am defining my own dummy fetch f(n) & how will i get this 
fetch f(n)i will do jest.fetch f(n) this will give me a mock f(n) this f(n) basically take a ca.back f(n) here i 
will mock exactly like how my fetch f(n) mock,what does fetch f(n) return in BODY COMP.IT RETURNS A 
PROMISE SO HERE I WILL ALSO HAVE TO RETUIN
 A PROMISE ALSO THE PREV.FETCH RESOLVES WITH A JSON 
 const fetchData = async () => {
    const data = await data.json();
 }
 
-- gloval.fetch = jest.fn()=>{
    return Promise.resolve({
        json: () => 
            
            
            
            this json is again a fn that returns a promise.resolve &  this promise.resolve actually has the data 
           SUMMARY- WE R TRYING TO MAKE THIS FETCH FN EXACTLY SAME AS IN BODY COMP. THAT OUR BROWSER GIVES US,SO THE OREV FETCH FN 
           GIVES US A PROMISE & THAT PROMISE RETURNS US A JSON & WE CONVERT IT INTO A JSON & THAT RETURNS US A 
           PROMISE ONCE AGAIN AND WHEN WE RESOLVE TJHAT PROMISE THEN WE ACTUALLY GET THA DATA 
           setListofRestaurant(json?.data.cards[2])  
           ---so basically we will resolve the promise once & then we made this json & this json will have a fn hich will again return a promise
           this test we cannot make a ntwk call from this fetch bcoz uit doesnot ruin on browser it is running on jsdom also we dont need any internet connec.to ruun tjhese testcases
           now this fn function that we have created needs mock data  
           inspect+Fetch/XHR+v5?lat(api)+Response+copy/paste in a diff file under mocks
    $$  ACT--  error comes after watch-test,shouild rap render of body imside act  act fn
    write await in front of act,this act fn returns a promise,& this act is a fn which takes a c.back fn 
        await act(()),this is again a async fn,    await act (async()) & this aync fn renders your Body comp.
    
    
    
    & when we  await this we have tomake this asnyc 
    u have to write your t.c c.back as async now when u write await act this act fn takes another fn which is again a async fn & this fn basically 
     renders your body comp. now err comes-it cannot find link comp.-wrap it inside browser router
     ----now lets something inside input box & test ,writibng inside uinput is a event in itself,this input has a ponchane event in itself
      which is being triggered,so we will have to trigger that input box to change that input event 
       so lets try to update the input box,so lets brought that input here,how will get that searchinput,i will getthat 
       searchinput by screen,JEST GIVES US TO TEST BY TESTID 
       
       SUPPOSE IF getByRole is not working,by placeholder is not working, at the end of day 
       getBytestId always works -----go to Body.js in input tag give it a data-testid ="searchInput"
       do const searchIput+console+expect now i want to change the value of it after typed how to 
       trigger that,u have to trigger a fireevent.change now what do u want to change and then 
       paas an object,this obj is simulating what we get here in this e  in Body.js 
        onChange={(e) => {
              setSearchText(e.target.value);
            }}     
            this e is given by browser,here we dont have browser,here we r faking so many things,
            this tym i want to give this e as target let me make that e,this target again has a value 
            & that value is what we want to type inside that input for eg-as on going to foodpageas we type burger 
            similr thing wil happen if ui will fire this changeevent + fireEvent.click now to expect some numbers of foodcards of 
            burgers as these restauracard is nothing but a div, i can give a testid in RestauraCard.js 
            as  data-testid = "resCard"  */
