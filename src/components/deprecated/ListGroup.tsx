import { MouseEvent, useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: String;
  onSelectItem: (item: string) => void;
}

function ListGroup(props: ListGroupProps) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //handle Click event
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h1>List of items</h1>
      {props.items.length === 0 && <p>No items in the list</p>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(item);
            }}
          >
            {item} {index}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
