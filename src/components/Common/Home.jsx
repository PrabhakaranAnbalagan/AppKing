/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron p-3 p-md-5 text-white rounded">
          <h1 className="display-4 font-italic">Developer's Kingdom</h1>
          <p className="lead my-3">
            A place where you can find answers for Technical Questions...
          </p>
          <Link to="/AboutPage" className="btn btn-primary">
            About
          </Link>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">
                  World
                </strong>
                <h3 className="mb-0">
                  <a className="text-dark" href="#">
                    Featured post
                  </a>
                </h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#">Continue reading</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-success">
                  Design
                </strong>
                <h3 className="mb-0">
                  <a className="text-dark" href="#">
                    Post title
                  </a>
                </h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#">Continue reading</a>
              </div>
            </div>
          </div>
          <aside className="col-md-4 blog-sidebar">
            <div className="p-3">
              <h4 className="font-italic">Elsewhere</h4>
              <ol className="list-unstyled">
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

export default Home;
