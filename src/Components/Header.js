import "../CSS/header.css";
import bgImage from "../Images/headerBackground.jpg";

export default function Header() {
  return (
    <div id="headerContainer">
      <img src={bgImage} alt="slika" id="image" />
      <h1>The home of JDMs top cars</h1>
      <h2>Youre not ready for these...</h2>
    </div>
  );
}
