import React from "react";
import "./Quarter.css";
import differenceInHours from "date-fns/differenceInHours";
import differenceInMinutes from "date-fns/differenceInMinutes";
import differenceInDays from "date-fns/differenceInDays";

const calcTime = (time) => {
  let minutes = differenceInMinutes(new Date(), new Date(time));
  let hours = differenceInHours(new Date(), new Date(time));
  let days = differenceInDays(new Date(), new Date(time));

  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }
  if (hours < 24 && hours > 1) {
    return `${hours} hours ago`;
  } else if (hours === 1) {
    return "1 hour ago";
  }
  if (days > 1) {
    return `${days} days ago`;
  }
};

const Quarter = ({ source, title, description, image, time, url }) => {
  return (
    <div className="quarter">
      <div className="quarter-img">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img alt="big" src={image} />
        </a>
      </div>
      <div className="quarter-text">
        <h6 className="red">{source}</h6>
        <a
          className="links"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
        <h6 className="gray">{calcTime(time)}</h6>
      </div>
    </div>
  );
};

export default Quarter;
