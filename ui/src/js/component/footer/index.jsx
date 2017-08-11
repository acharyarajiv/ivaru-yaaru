import './style.scss';
import React from 'react';
import { Panel } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Panel>
          Example page footer 
          <small> Subtext for footer</small>
        </Panel>
      </div>
    );
  }
}
export default Footer;
