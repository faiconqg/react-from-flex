import React from 'react';
import PropTypes from 'prop-types';

class Spacer extends React.Component {

  static propTypes = {
    layoutWeight: PropTypes.number,
    height: PropTypes.any,
    width: PropTypes.any
  };

  getStyles() {
    return {
      root: {
        height: this.props.height,
        width: this.props.width,
        flexGrow: this.props.layoutWeight ? this.props.layoutWeight / 100 : 0
      }
    };
  }

  render() {
    return (
      <div style={this.getStyles().root}/>
    );
  }
}

export default Spacer;
