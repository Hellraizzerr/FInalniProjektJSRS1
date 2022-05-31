import "../CSS/loader.css";
import { Link } from "react-router-dom";

export default function Loader() {
  return (
    <div className="Loader">
      <h1 id="upperLoaderh1">Get ready...</h1>
      <div id="loaderContainer">
        <div id="loaderBar">Loading....99%</div>

        <Link to="/main" class="Link">
          Lets skip that last 1%
        </Link>
      </div>
    </div>
  );
}
