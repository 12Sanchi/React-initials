module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    [("@babel/preset-react", { runtime: "automatic" })],
  ],
};

{
  /* if u want this configuration to work and not what parcel bydefault uses 
  
  WHAT IS THIS 2ND PRESET-Basically what is babel-babel is transpiler,it basically converts your code  from 1 form to another 
  RIGHT NOW THIS BABEL preset is helping  testinglibrary to convert jsx code to html so that itcan read properly
  now if u run it would again throw a err as toBeInTheDocument() is not a f() bcoz we have not installed a lib yet i.e.testing */
}
