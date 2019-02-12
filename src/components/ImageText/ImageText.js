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
        <div className="container content">
          <div class="imageText">
            <div className="imageTextImage">
                <img src={this.props.image} />
            </div>
            <div
                className="imageTextText"
                dangerouslySetInnerHTML={{
                __html: converter.makeHtml(this.props.html)
                }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ImageText;
