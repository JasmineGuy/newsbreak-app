import React from "react";
import "./Header.css";
import getDate from "date-fns/getDate";
import getMonth from "date-fns/getMonth";

const monthMapping = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

const renderMonth = (num) => {
  return monthMapping[num];
};

const Header = () => {
  return (
    <div className="header">
      <div className="stack">
        <h1> Breaking News</h1>
        <h1 className="gray">
          {renderMonth(getMonth(new Date()))} {getDate(new Date())}
        </h1>
      </div>
      <div className="top-nav">
        <a href="#sports">
          <span>Sports</span>
        </a>
        <a href="#entertainment">
          <span>Entertainment</span>
        </a>
        <a href="#business">
          <span>Business</span>
        </a>
        <a href="#health">
          <span>Health</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
