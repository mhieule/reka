// Filename - pages/index.js
import stonk from "../assets/stonk.gif";
import background from "../assets/background.gif";

const Home = () => {
  return (
    <>
      <div>
        <h1>
          Welcome to RekAI. The language learning platform that makes sense.
        </h1>
        <img
          src={background}
          alt="stonk"
          style={{ width: "80%", height: "auto" }}
        />
      </div>
    </>
  );
};

export default Home;
