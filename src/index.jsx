const React = require("react")
const ReactDOM = require("react-dom")
var Main = require("./components/main")

window.React = React;

ReactDOM.render(<Main/>, document.querySelector("#root"))