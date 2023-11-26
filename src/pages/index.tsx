// Filename - pages/index.js
import stonk from "../assets/stonk.gif";

const Home = () => {
  const items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
  const cities = [
    "New York",
    "London",
    "Paris",
    "Berlin",
    "Tokyo",
    "Mumbai",
    "Beijing",
    "Singapore",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <h1>
          Welcome to RekAI. The language learning platform that makes sense.
        </h1>
        <img src={stonk} width="80%" height="80%"></img>
      </div>
      {/*
      <div>
        <ListGroup
          items={items}
          heading="Order"
          onSelectItem={handleSelectItem}
        />
      </div>
      <div>
        <ListGroup
          items={cities}
          heading={"Cities"}
          onSelectItem={handleSelectItem}
        />
      </div>
      <div>
        <Alert>
          {" "}
          Hello <span>World</span>
        </Alert>
      </div>
      <div>
        <Button
          onClick={() => {
            console.log("Button clicked !!");
          }}
        >
          MyButton
        </Button>
      </div>
        */}
    </>
  );
};

export default Home;
