/*const heading = React.createElement(
"h1",
{id:"heading"},
"Hello world react ke trf se");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

<div id = "parent">
  <div id ="child">
    <h1>I'm an h1 tag</h1>
    <h2>I'm an h2 tag</h2>
  </div>
  <div id ="child 2 ">
     <h1>I'm an h1 tag</h1>
     <h2>I'm an h2 tag</h2>
   </div>

</div>
 </div>*/

 const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I'm an h1 taag"),
        React.createElement("h2",{},"I'm an h2 taag"),
    ]),
    React.createElement("div",{id:"child 2"},[
        React.createElement("h1",{},"I'm an h1 taag"),
        React.createElement("h2",{},"I'm an h2 taag"),
    ]),
 ]);

 
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);