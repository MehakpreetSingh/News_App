import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 10;
  constructor() {
    super();
    this.state = {
      country: "us",
    };
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  country={this.state.country}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News apiKey={this.apiKey}
                  key="business"
                  pageSize={this.pageSize}
                  country={this.state.country}
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News apiKey={this.apiKey}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country={this.state.country}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  country={this.state.country}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News apiKey={this.apiKey}
                  key="health"
                  pageSize={this.pageSize}
                  country={this.state.country}
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News apiKey={this.apiKey}
                  key="science"
                  pageSize={this.pageSize}
                  country={this.state.country}
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News apiKey={this.apiKey}
                  key="sports"
                  pageSize={this.pageSize}
                  country={this.state.country}
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News apiKey={this.apiKey}
                  key="technology"
                  pageSize={this.pageSize}
                  country={this.state.country}
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
