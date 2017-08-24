import './style.scss';
import React from 'react';
import { Grid, Row, Col, Panel, Image } from 'react-bootstrap';
import Pic from 'element/pic';

export default class Family extends React.Component {

  getPic() {
    const src = "https://lh4.googleusercontent.com/-N_O16AzbOqk/AAAAAAAAAAI/AAAAAAAAAAA/fkDRL0S6mE4/s128-c-k/photo.jpg";
    return (
      <Col xs={6} md={3}>
        <Pic src={src} />
      </Col>
    );
  }

  showParents() {
    const src = "https://lh4.googleusercontent.com/-N_O16AzbOqk/AAAAAAAAAAI/AAAAAAAAAAA/fkDRL0S6mE4/s128-c-k/photo.jpg";
    const parents = (
      <strong>Parents</strong>
    );
    const children = (
      <strong>Children</strong>
    );
    const arr = [1,2,3];
    const listItems = arr.map((number) => this.getPic());
    return (
      <Row>
        <Col xs={6}>
          <Panel header={parents}>
            <Col xs={6}>
              <Pic src={src} />
            </Col>
            <Col>
              <Pic src={src} />
            </Col>
          </Panel>
        </Col>
        <Col xs={6}>
          <Panel header={children}>
            {listItems}
          </Panel>
        </Col>
      </Row>
    );
  }

  showPerson() {
    const src = "https://lh4.googleusercontent.com/-N_O16AzbOqk/AAAAAAAAAAI/AAAAAAAAAAA/fkDRL0S6mE4/s128-c-k/photo.jpg";
    return (
       <Row>
        <Col xs={6}>
          <Panel header="Husband">
            <Pic src={src} />
          </Panel>
        </Col>
        <Col xs={6}>
          <Panel header="Wife">
            <Pic src={src} />
          </Panel>
        </Col>
      </Row>
    );
  }

  showSiblings() {
    const src = "https://lh4.googleusercontent.com/-N_O16AzbOqk/AAAAAAAAAAI/AAAAAAAAAAA/fkDRL0S6mE4/s128-c-k/photo.jpg";
    const arr = [1,2,3];
    const listItems = arr.map((number) => this.getPic());
    return (
      <Row>
        <Col xs={6}>
          <Panel header="Siblings">
            <Pic src={src} />
          </Panel>
        </Col>
        <Col xs={6}>
          <Panel header="Cousins">
            {listItems}
          </Panel>
        </Col>
      </Row>
    );
  }
  render() {
    return (
      <Grid>
        {this.showParents()}
        {this.showPerson()}
        {this.showSiblings()}
      </Grid>
    );
  }
}
