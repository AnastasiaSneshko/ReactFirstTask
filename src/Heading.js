class Heading extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    const {src, alt} = this.props;
    return React.createElement(
      "div",
      { className: "imageWrapper" },
      React.createElement('img', {clasName: "img", src: src, alt: alt})
    );
  };
}

module.exports = Heading;