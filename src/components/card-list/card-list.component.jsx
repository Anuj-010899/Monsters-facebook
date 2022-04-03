import { Component } from "react";
import "./card-list.style.css";
import Card from "../card/card.component.jsx";

const CardList = (props) => {
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { name, email, id } = monster;
        return (
          <Card
            alt={`monster ${name}`}
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
            monster={monster}
          />
        );
      })}
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           const { name, email, id } = monster;
//           return (
//             <Card
//               alt={`monster ${name}`}
//               src={`https://robohash.org/${id}?set=set2&size=180x180`}
//               monster={monster}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
