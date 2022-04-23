function Tick() {

  const element = /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/

  React.createElement("div", null, /*#__PURE__*/

  React.createElement("h1", null, " Hello, World "), /*#__PURE__*/

  React.createElement("h2", null, " It is now ",
  new Date().toLocaleTimeString())));







  ReactDOM.render(
  element,
  document.getElementById('root'));

}

setInterval(Tick, 1000);