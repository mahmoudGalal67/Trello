import "./workspace.css";
import "../../App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/navbar/Navbar";

import { workspaces } from "../../../fakeData";
import { Link } from "react-router-dom";

function Workspace() {
  return (
    <div className="home">
      <Link to="/board">Board</Link>

      <Navbar />
      <div className="views">
        <h2>YOUR WORKSPACES</h2>
        <div className="wrapper">
          {workspaces.map((workspace, index) => (
            <a href="#" key={index}>
              <div className="card">
                <img src="photo-1675981004510-4ec798f42006.jpg" alt="" />
                <p>{workspace.title}</p>
              </div>
            </a>
          ))}
          <a href="\">
            <div className="card">
              <img src="photo-1716369414930-bcdc1565fa3c.webp" alt="" />
              <p>first workspace</p>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="photo-1719825718360-7de63c92135f.webp" alt="" />
              <p>first workspace</p>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="photo-1716369414930-bcdc1565fa3c.webp" alt="" />
              <p>first workspace</p>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="photo-1675981004510-4ec798f42006.jpg" alt="" />
              <p>first workspace</p>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="photo-1716369414930-bcdc1565fa3c.webp" alt="" />
              <p>first workspace</p>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="photo-1719825718360-7de63c92135f.webp" alt="" />
              <p>first workspace</p>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="photo-1716369414930-bcdc1565fa3c.webp" alt="" />
              <p>first workspace</p>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="photo-1675981004510-4ec798f42006.jpg" alt="" />
              <p>first workspace</p>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="photo-1716369414930-bcdc1565fa3c.webp" alt="" />
              <p>first workspace</p>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="photo-1719825718360-7de63c92135f.webp" alt="" />
              <p>first workspace</p>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="photo-1716369414930-bcdc1565fa3c.webp" alt="" />
              <p>first workspace</p>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="photo-1675981004510-4ec798f42006.jpg" alt="" />
              <p>first workspace</p>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="photo-1716369414930-bcdc1565fa3c.webp" alt="" />
              <p>first workspace</p>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="photo-1719825718360-7de63c92135f.webp" alt="" />
              <p>first workspace</p>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="photo-1675981004510-4ec798f42006.jpg" alt="" />
              <p>first workspace</p>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="photo-1716369414930-bcdc1565fa3c.webp" alt="" />
              <p>first workspace</p>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="photo-1719825718360-7de63c92135f.webp" alt="" />
              <p>first workspace</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
