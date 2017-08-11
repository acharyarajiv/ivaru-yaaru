import './style.scss';
import React from 'react';
import { PageHeader } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <PageHeader>Example page header
          <small>Subtext for header</small>
        </PageHeader>
      </div>
    );
  }
}
export default Header;
