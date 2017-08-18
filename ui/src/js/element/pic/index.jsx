import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

class Pic extends React.Component {
  render() {
    return (
       <Image src={this.props.src} circle />
    );
  }
}

Pic.propTypes = {
  src: PropTypes.string.isRequired
}
export default Pic;