import React, { Component } from 'react';

class Career extends Component {
  render() {
    const {
      className,
      id,
      icon,
      title,
      children,
    } = this.props;

    return (
      <section className={`section ${className || ''}`} id={id || null}>
        <h2 className="section-title">
          <i className={`fa fa-${icon}`} />
          {title}
        </h2>
        {children}
      </section>
    );
  }
}

export default Career
