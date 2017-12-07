import React from 'react';
import PropTypes from 'prop-types';

class Label extends React.Component {

  static propTypes = {
    fontFamily: PropTypes.string,
    fontSize: PropTypes.number,
    fontWeight: PropTypes.any,
    color: PropTypes.string,
    style: PropTypes.object,
    maxWidth: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    horizontalAlign: PropTypes.oneOf(['left', 'center', 'right']),
    text: PropTypes.any,
    padding: PropTypes.number,
    paddingTop: PropTypes.number,
    paddingBottom: PropTypes.number,
    paddingRight: PropTypes.number,
    paddingLeft: PropTypes.number,
    margin: PropTypes.number,
    oneLine: PropTypes.bool
  };

  static defaultProps = {
    fontFamily: 'Roboto',
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0,
    oneLine: false
  };

  getStyles() {
    return {
      root: {
        display: 'block',
        textAlign: this.props.horizontalAlign,
        fontFamily: "'" + this.props.fontFamily + "', 'sans-serif'",
        fontSize: this.props.fontSize,
        fontWeight: this.props.fontWeight,
        color: this.props.color,
        maxWidth: this.props.maxWidth,
        height: this.props.height,
        width: this.props.width,
        padding: this.props.padding,
        margin: this.props.margin,
        paddingTop: this.props.paddingTop + this.props.padding,
        paddingBottom: this.props.paddingBottom + this.props.padding,
        paddingRight: this.props.paddingRight + this.props.padding,
        paddingLeft: this.props.paddingLeft + this.props.padding,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: this.props.oneLine ? 'nowrap' : 'initial'
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <span
        style={Object.assign(
          styles.root,
          this.props.style)}>
        {this.props.text}
      </span>
    );
  }
}

export default Label;
