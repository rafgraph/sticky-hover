import React from 'react';

class FixStickyHover extends React.Component {
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
    if (this.state.active) return {color: 'red'};
    if (this.state.hover) return {color: 'green'};
    if (this.state.touchActive) return {color: 'blue'};
    return {color: 'black'};
  }

  handleTouchStart() {
    this.setState({touchActive: true});
  }

  handleTouchEnd(e) {
    this.setState({
      touchActive: false,
      touchTimeStamp: new Date()
    });
  }

  handleMouseEnter() {
    // arbitrary 250 ms leeway for mouseEnter event to fire after
    // touchEnd event
    if (new Date() - this.state.touchTimeStamp > 250) {
      this.setState({hover: true})
    }
  }

  handleMouseLeave() {
    this.setState({hover: false})
  }

  handleMouseDown(e) {
    this.setState({active: true});
  }

  handleMouseUp(e) {
    this.setState({active: false});
  }


  render() {
    const title = this.props.title;
    const description = this.props.description;
    const id = title.replace(/ /g, '-').toLowerCase();

    return (
      <div className="test">
        <h2 id={id}>{title}</h2>
          {description}
        <div className="anchor-tag">
          <a key="a" href={`#${id}`}
            style={this.getStyle()}
            onTouchStart={this.handleTouchStart}
            onTouchEnd={this.handleTouchEnd}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
          >Anchor tag: hover is green, active is red, touch active is blue</a>
        </div>
      </div>
    );
  }
}

export default FixStickyHover;
