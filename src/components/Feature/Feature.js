import React, { Component } from 'react';
import './Feature.css';

class Feature extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Name">
          { this.props.feature.heading }
        </div>
        <div className="Desc">
          { this.props.feature.desc }
        </div>
        <div className="Desc">
          Since: { this.props.feature.since }
        </div>
        <div>
          <div className="Heading">
            Arguments
          </div>
          <div className="Desc">
            { this.props.feature.arguments.map((arg) => {
              return `${arg.arg}: ${arg.desc}`
            }) }
          </div>
        </div>
        <div>
          <div className="Heading">
            Returns
          </div>
          <div className="Desc">
            { this.props.feature.returns.name }: { this.props.feature.returns.desc }
          </div>
        </div>
        <div>
          <div className="Heading">
            Example
          </div>
          <div className="Example">
            { this.props.feature.example.split("\n").map((line) => {
              return <div>{ line }</div>
            }) }
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
