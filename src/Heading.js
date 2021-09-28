class Heading extends React.Component {
  render(){
    //C помощью деструктуризации достаем дополнительные элементы
    const {children} = this.props;
    return React.createElement(
      "div",
      { className: "imageWrapper" },
      children
    );
  };
}

module.exports = Heading;