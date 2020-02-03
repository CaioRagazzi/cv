import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Career extends Component {
  render() {
    return (
      <section className={`section ${this.props.className || ''}`} id={this.props.id || null}>
        <h2 className="section-title">
          <i className={`fa fa-${this.props.icon}`} />
          { this.props.title }
        </h2>
        { this.props.children }
      </section>
    );
  }
}

export default Career
