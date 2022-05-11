import React from "react";
import PropTypes from 'prop-types'
class Card extends React.Component {
  render() {
    return (
      <div className="cards">
        <h3>{this.props.name}</h3>
        <h2>{this.props.id}</h2>
        <img src={this.props.image} />
      </div>
    );
  }
}
// Card.prototype = {
//   name: PropTypes.string
// }
 export default Card;
