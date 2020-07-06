import React from "react";

import "./more-container.scss";

const MoreContainer = () => (
  <div className="page-container">
    <div className="content-container">
      <div className="split-wrapper">
        <div className="split-again">
          <div className="split">
            <div className="refs">
              <div className="refs-column">
                <TableSection name="Refs" />
              </div>
            </div>
            <div className="content">
              <div className="splitter">
                <div className="splitter-columns">
                  <TableSection name="Splitter 1" />
                </div>
              </div>
              <div className="splitter">
                <div className="splitter-columns">
                  <TableSection name="Splitter 2" />
                </div>
              </div>
              <div className="splitter">
                <div className="splitter-columns">
                  <TableSection name="Splitter 3" />
                </div>
              </div>
              <div className="splitter">
                <div className="splitter-columns">
                  <TableSection name="Splitter 2" />
                </div>
              </div>
              <div className="splitter">
                <div className="splitter-columns">
                  <TableSection name="Splitter 2" />
                </div>
              </div>
              <div className="splitter">
                <div className="splitter-columns">
                  <TableSection name="Splitter 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MoreContainer;

const TableSection = ({ name }) => (
  <table>
    <tbody>
      <tr>
        <td>{name}</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
      </tr>
      {[...Array(10).keys()].map((item, index) => (
        <tr key={index}>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
      ))}
      <tr>
        <td>Last</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
      </tr>
    </tbody>
  </table>
);
