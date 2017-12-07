import React from 'react';
import PropTypes from 'prop-types';

class HGroup extends React.Component {
  static propTypes = {
    verticalScrollPolicy: PropTypes.oneOf(['off', 'auto', 'on']),
    horizontalScrollPolicy: PropTypes.oneOf(['off', 'auto', 'on']),
    background: PropTypes.any,
    children: PropTypes.node,
    style: PropTypes.object,
    minWidth: PropTypes.any,
    maxWidth: PropTypes.any,
    minHeight: PropTypes.any,
    maxHeight: PropTypes.any,
    layoutWeight: PropTypes.number,
    flexShrink: PropTypes.number,
    width: PropTypes.any,
    height: PropTypes.any,
    horizontalAlign: PropTypes.oneOf(['left', 'center', 'right']),
    verticalAlign: PropTypes.oneOf(['top', 'center', 'bottom']),
    padding: PropTypes.number,
    paddingTop: PropTypes.number,
    paddingBottom: PropTypes.number,
    paddingRight: PropTypes.number,
    paddingLeft: PropTypes.number,
    disableFlex: PropTypes.bool // ESSE É UM HACK MALUCO, desabilite se não houver um filho flex
  };

  static defaultProps = {
    // verticalAlign: 'top',
    // horizontalAlign: 'left',
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0,
    disableFlex: false,
    verticalScrollPolicy: 'off',
    flexShrink: 0
  };

  render() {
    const {
      flexShrink,
      verticalScrollPolicy,
      horizontalScrollPolicy,
      background,
      disableFlex,
      layoutWeight,
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,
      verticalAlign,
      horizontalAlign,
      width,
      height,
      padding,
      paddingTop,
      paddingBottom,
      paddingRight,
      paddingLeft,
      style,
      ...other
    } = this.props;

    return (
      <div
        style={Object.assign(
          {
            flexShrink: flexShrink,
            flexDirection: 'row',
            WebkitOverflowScrolling: 'touch',
            overflowY: { off: 'visible', auto: 'auto', on: 'scroll' }[
              verticalScrollPolicy
            ],
            overflowX: { off: 'visible', auto: 'auto', on: 'scroll' }[
              horizontalScrollPolicy
            ],
            background: background,
            boxSizing: 'border-box',
            display: disableFlex ? '' : 'flex',
            justifyContent: {
              left: 'flex-start',
              center: 'center',
              right: 'flex-end'
            }[horizontalAlign],
            alignItems: {
              top: 'flex-start',
              center: 'center',
              bottom: 'flex-end'
            }[verticalAlign],
            flexGrow: layoutWeight ? layoutWeight / 100 : 0,
            minWidth: minWidth,
            maxWidth: maxWidth,
            minHeight: minHeight,
            maxHeight: maxHeight,
            width: width,
            height: height,
            paddingTop: paddingTop + padding,
            paddingBottom: paddingBottom + padding,
            paddingRight: paddingRight + padding,
            paddingLeft: paddingLeft + padding
          },
          style
        )}
        {...other}
      >
        {this.props.children}
      </div>
    );
  }
}

export default HGroup;
