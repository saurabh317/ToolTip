import "./index.css";

import React from "react";

class ToolTip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  handleTriggerHover = () => {
    this.setState({
      isHovered: !this.state.isHovered
    });
  };

  render() {
    return (
      <div
        onMouseEnter={() => this.handleTriggerHover()}
        onMouseLeave={() => this.handleTriggerHover()}
        className="tooltipwrapper"
      >
        {this.props.children}

        {this.state.isHovered && (
          <div className={`tooltip ${this.props.position ?? "top"}`}>
            {this.props.content}
          </div>
        )}
      </div>
    );
  }
}

export default ToolTip;
