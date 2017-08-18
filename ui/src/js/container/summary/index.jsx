import './style.scss';
import React from 'react';
import Header from 'js/container/header';
import Family from 'js/component/family';
import Footer from 'js/container/footer';
import { PageType } from 'constant/pagetype';
import PropTypes from 'prop-types';

class Summary extends React.Component {
  /**
   * loads page component
   */
  getContent() {
    const {page} = this.props;
    if(page === PageType.SUMMARY) {
      return (<Family />);
    }
    return null;
  }

  /**
   * render component
   */
  render() {
    return(
      <div className="layout">
        <Header pape={this.props.page} />
        {this.getContent()}
        <Footer />
      </div>
    );
  }
}

Summary.propTypes = {
  page: PropTypes.string.isRequired
}

Summary.defaultProps = {
  page: PageType.SUMMARY
}
export default Summary;