import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PageType } from 'constant/pagetype';

class Header extends React.Component {

  getButton() {
    const { page } = this.props;
    if(page === PageType.SUMMARY) {
      return ( <Link to="/add">Create Relation</Link> );
    } else if(page === PageType.ADDRELATION) {
      return ( <Link to="/">Back to summary</Link> );
    }
    return null;
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            {this.getButton()}
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
            Signed in as: <Navbar.Link href="#">Admin</Navbar.Link>
          </Navbar.Text>
          <Navbar.Text pullRight>
            Have a great day!
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
Header.propTypes = {
  page: PropTypes.string.isRequired
}
Header.defaultProps = {
  page: PageType.SUMMARY
}
export default Header;
