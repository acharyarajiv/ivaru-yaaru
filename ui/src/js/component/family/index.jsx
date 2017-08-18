import './style.scss';
import React from 'react';
import { Grid, Row, Col, Panel, Image } from 'react-bootstrap';
import Pic from 'element/pic';

export default class Family extends React.Component {

  getPanel() {
    return(
      <Panel>
        {this.getRow()}
      </Panel>
    );
  }

  getRow() {
    const arr = [1,2,3];
    const listItems = arr.map((number) => this.getPic());
    return(
      <Row>
        {listItems}
      </Row>
    );
  }

  getPic() {
    const src = "https://lh4.googleusercontent.com/-N_O16AzbOqk/AAAAAAAAAAI/AAAAAAAAAAA/fkDRL0S6mE4/s128-c-k/photo.jpg";
    return (
      <Col xs={6} md={3}>
        <Pic src={src} />
      </Col>
    );
  }

  render() {
    const arr = [1,2,3];
    const listItems = arr.map((number) => this.getPanel());
    return (
      <Grid>
        {listItems}
      </Grid>
    );
  }
}
