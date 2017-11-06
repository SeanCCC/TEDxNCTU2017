import React, { Component } from 'react';

export default (propItems) => {
  return (ComposeComponent) => (
    class HOC extends React.Component {
      render() {
        return (
              <ComposeComponent {...this.props} {...propItems} />
          );
      }
    }
  );
};
