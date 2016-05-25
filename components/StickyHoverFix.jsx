import React from 'react';
import { hasTouch } from 'detect-touch';

class StickyHoverFix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      active: false,
      touchActive: false,
      touchTimeStamp: new Date()
    };
    this.getStyle = this.getStyle.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  getStyle() {
    if (this.state.active) return {color: this.props.active};
    if (this.state.hover) return {color: this.props.hover};
    if (this.state.touchActive) return {color: this.props.touchActive};
    return {color: 'inherit'};
  }

  handleTouchStart() {
    this.setState({touchActive: true});
  }

  handleTouchEnd() {
    this.setState({
      touchActive: false,
      touchTimeStamp: new Date()
    });
  }

  handleMouseEnter() {
    // arbitrary 500 ms leeway for mouseEnter event to fire after
    // touchEnd event
    if (new Date() - this.state.touchTimeStamp > 500) {
      this.setState({hover: true})
    }
  }

  handleMouseLeave() {
    this.setState({hover: false})
  }

  handleMouseDown() {
    this.setState({active: true});
  }

  handleMouseUp() {
    this.setState({active: false});
  }

  render() {
    return (
      <this.props.tagType
        style={this.getStyle()}
        onTouchStart={hasTouch ? this.handleTouchStart : null}
        onTouchEnd={hasTouch ? this.handleTouchEnd : null}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        href={this.props.tagType === 'a' ? this.props.linkTo : null}
      >{this.props.content}</this.props.tagType>
    );
  }
}

export default StickyHoverFix;
