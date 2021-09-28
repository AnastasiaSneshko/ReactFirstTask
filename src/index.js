const Heading = require('./Heading');
const container = document.getElementById('root');

const element = React.createElement( Heading, {src: '#', alt:"image"});

ReactDOM.render(element, container);