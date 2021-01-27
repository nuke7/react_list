/* import Arr from "./data"; */

function List(props) {
  return (
    <ul>
      {props.kismacska.map((e, key) => {
        return (
          <li key={key.toString()} style={{ listStyle: "none", textAlign: "left" }}>
            <input type="checkbox" /> {e}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
