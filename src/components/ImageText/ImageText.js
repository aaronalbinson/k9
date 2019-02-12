import React from "react";
import showdown from "showdown";

require("./ImageText.scss");

const converter = new showdown.Converter();

class ImageText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="ImageText">
          <div className="Image">
            <img src={this.props.image} />
          </div>
          <div
            className="container content"
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(this.props.html)
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ImageText;
