import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { alt, src, monster } = this.props;

    return (
      <div key={monster.id} className="card-container">
        <img alt={alt} src={src} />
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
      </div>
    );
  }
}

export default Card;
