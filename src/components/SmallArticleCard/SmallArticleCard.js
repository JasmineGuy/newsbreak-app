import React from "react";
import "./SmallArticleCard.css";
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

const SmallArticleCard = ({ source, author, title, time, image, url }) => {
  return (
    <div className="small-card">
      <div className="text">
        <h5 className="red">{source}</h5>
        <a
          className="links"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="small-title">{title}</h4>
        </a>
        <h6 className="gray">{calcTime(time)}</h6>
      </div>
      <div className="image">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img alt="article" src={image} />
        </a>
      </div>
    </div>
  );
};

export default SmallArticleCard;
