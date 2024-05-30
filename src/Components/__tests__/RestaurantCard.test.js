import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Burger King");

  expect(name).toBeInTheDocument();
});

/*How u can pass a prop inside a comp.& do a unit testing*/
/*what comp. do i want to render RestaurantCard comp.now it takes a prop,it takes prop as resData what is resData 
in Body comp. RestaurantCard takes resData as prop & resData is basically restaurant,but here i would pass kind of mockdata 
in resData, i will do a console.log(resdata) and i would copy obj by right click and a new  folder in comp. a file and ctrl + v so i have hardcoded my data and 
now will import it now lets find whether mine this part.card has been rendered or not lets find name of the rest there or not  */
