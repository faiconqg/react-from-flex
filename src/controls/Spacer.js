import React from 'react';
import PropTypes from 'prop-types';

class Spacer extends React.Component {

  static propTypes = {
    height: PropTypes.any,
    width: PropTypes.any
  };

  getStyles() {
    return {
      root: {
        height: this.props.height,
        width: this.props.width
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
