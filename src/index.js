const Heading = require('./Heading');
const container = document.getElementById('root');

const element = React.createElement(
  Heading,
  { },
  React.createElement(
    "img",
    { className: "img", src: '#', alt: 'image' },
  )
);

ReactDOM.render(element, container);