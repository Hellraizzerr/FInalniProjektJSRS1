import { Link } from "react-router-dom";
import "../CSS/main.css";

import Footer from "./Footer.js";
import Header from "./Header.js";

import rx7 from "../Images/rx7.jpg";
import mk4 from "../Images/mk4.jpg";
import r34 from "../Images/r34.jpg";

export default function MainPg({ infoOne }) {
  return (
    <div id="mainContainer">
      <nav class="links">
        <Link to="/"> Back to loader</Link>
        <a href="#Mazda">RX7</a>
        <a href="#Toyota">Toyota Supra</a>
        <a href="Nissan">Nissan Skyline</a>
        <a href="https://www.instagram.com/jdm/?hl=en">JDM page</a>
      </nav>

      <div id="midDiv">
        <Header />
      </div>

      <div id="mainBody">
        <div class="smallContainer">
          <div id="mazda">
            <tr>
              <td class="left">Name</td>
              <td>Mazda RX7 FD</td>
            </tr>

            <tr>
              <td class="left">Engine</td>
              <td>Twin-chamber rotary, twin-turbo</td>
            </tr>

            <tr>
              <td class="left">Production Year</td>
              <td>1995</td>
            </tr>

            <tr>
              <td class="left">Base Horsepower</td>
              <td>237bhp</td>
            </tr>

            <tr>
              <td class="left">Max torque</td>
              <td>218lb-ft</td>
            </tr>

            <tr>
              <td class="left">Weight</td>
              <td>1284kg</td>
            </tr>
          </div>
          <img src={rx7} alt="rx7" class="slikaRight" />
        </div>

        <div class="smallContainer">
          <img src={mk4} alt="mk4" class="slikaLeft" />
          <div id="toyota">
            <tr>
              <td class="left">Name</td>
              <td>Mazda RX7 FD</td>
            </tr>

            <tr>
              <td class="left">Engine</td>
              <td>Twin-chamber rotary, twin-turbo</td>
            </tr>

            <tr>
              <td class="left">Production Year</td>
              <td>1995</td>
            </tr>

            <tr>
              <td class="left">Base Horsepower</td>
              <td>237bhp</td>
            </tr>

            <tr>
              <td class="left">Max torque</td>
              <td>218lb-ft</td>
            </tr>

            <tr>
              <td class="left">Weight</td>
              <td>1284kg</td>
            </tr>
          </div>
        </div>

        <div class="smallContainer">
          <div id="nissan">
            <tr>
              <td class="left">Name</td>
              <td>Mazda RX7 FD</td>
            </tr>

            <tr>
              <td class="left">Engine</td>
              <td>Twin-chamber rotary, twin-turbo</td>
            </tr>

            <tr>
              <td class="left">Production Year</td>
              <td>1995</td>
            </tr>

            <tr>
              <td class="left">Base Horsepower</td>
              <td>237bhp</td>
            </tr>

            <tr>
              <td class="left">Max torque</td>
              <td>218lb-ft</td>
            </tr>

            <tr>
              <td class="left">Weight</td>
              <td>1284kg</td>
            </tr>
          </div>
          <img src={r34} alt="r34" class="slikaRight" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
