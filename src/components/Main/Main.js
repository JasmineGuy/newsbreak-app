import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import "./Main.css";
import SmallArticleCard from "../SmallArticleCard/SmallArticleCard";
import Features from "../Features/Features";
import BigBoy from "../BigBoy/BigBoy";
import Triplet from "../Triplet/Triplet";
import Quad from "../Quad/Quad";
import Quarter from "../Quarter/Quarter";

const { REACT_APP_API_KEY } = process.env;

const Main = () => {
  const [topArticles, setTopArticles] = useState();
  const [sports, setSports] = useState();
  const [entertainment, setEntertainment] = useState();
  const [business, setBusiness] = useState();
  const [health, setHealth] = useState();

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${REACT_APP_API_KEY}`
      )
      // .then((res) => setTopArticles(res.data.articles));
      .then((res) => {
        console.log("FIRST RES: ", res);
        setTopArticles(res.data.articles);
      });

    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${REACT_APP_API_KEY}`
      )
      .then((res) => setSports(res.data.articles));
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${REACT_APP_API_KEY}`
      )
      .then((res) => setEntertainment(res.data.articles));
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${REACT_APP_API_KEY}`
      )
      .then((res) => setBusiness(res.data.articles));
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${REACT_APP_API_KEY}`
      )
      .then((res) => setHealth(res.data.articles));
  }, []);

  console.log("topArticles:", topArticles);
  console.log("sports:", sports);

  return (
    <div className="main">
      <Header />
      <div className="top-stories">
        <h1 className="red">Top Stories</h1>
        <div className="feature-portion">
          {topArticles && topArticles.length && topArticles[0] && topArticles[1]
            ? [topArticles[0], topArticles[1]].map((article, index) => {
                return (
                  <Features
                    key={index}
                    source={article.source.name}
                    title={article.title}
                    time={article.publishedAt}
                    image={article.urlToImage}
                    url={article.url}
                  />
                );
              })
            : null}
        </div>
        <div className="small-features">
          {topArticles &&
          topArticles.length &&
          topArticles[2] &&
          topArticles[3] &&
          topArticles[4] &&
          topArticles[5]
            ? [
                topArticles[2],
                topArticles[3],
                topArticles[4],
                topArticles[5],
              ].map((article, index) => {
                return (
                  <SmallArticleCard
                    key={index}
                    source={article.source.name}
                    title={article.title}
                    time={article.publishedAt}
                    image={article.urlToImage}
                    url={article.url}
                  />
                );
              })
            : null}
        </div>
      </div>
      <div id="sports" className="sports">
        <h1 className="red">Sports</h1>
        <div className="big-boy-container">
          {sports && sports.length && sports[0] ? (
            <BigBoy
              source={sports[0].source.name}
              title={sports[0].title}
              description={sports[0].description}
              image={sports[0].urlToImage}
              time={sports[0].publishedAt}
              url={sports[0].url}
            />
          ) : null}
        </div>
        <div className="sports-triplet-container">
          {sports && sports.length && sports[1] && sports[2] && sports[3]
            ? [sports[1], sports[2], sports[3]].map((sport, index) => {
                return (
                  <Triplet
                    key={index}
                    source={sport.source.name}
                    title={sport.title}
                    time={sport.publishedAt}
                    image={sport.urlToImage}
                    url={sport.url}
                  />
                );
              })
            : null}
        </div>
      </div>

      <div id="entertainment" className="entertainment">
        <h1 className="red">Entertainment</h1>
        <div className="entertainment-wrap">
          <div className="quarter-section">
            {entertainment && entertainment.length && entertainment[0] ? (
              <Quarter
                source={entertainment[0].source.name}
                title={entertainment[0].title}
                description={entertainment[0].description}
                image={entertainment[0].urlToImage}
                time={entertainment[0].publishedAt}
                url={entertainment[0].url}
              />
            ) : null}
          </div>
          <div className="quad-section-1">
            {entertainment &&
            entertainment.length &&
            entertainment[1] &&
            entertainment[2]
              ? [entertainment[1], entertainment[2]].map((item, index) => {
                  return (
                    <Quad
                      key={index}
                      source={item.source.name}
                      title={item.title}
                      time={item.publishedAt}
                      image={item.urlToImage}
                      url={item.url}
                    />
                  );
                })
              : null}
          </div>
          <div className="quad-section-2">
            {entertainment &&
            entertainment.length &&
            entertainment[3] &&
            entertainment[4]
              ? [entertainment[3], entertainment[4]].map((item, index) => {
                  return (
                    <Quad
                      key={index}
                      source={item.source.name}
                      title={item.title}
                      time={item.publishedAt}
                      image={item.urlToImage}
                      url={item.url}
                    />
                  );
                })
              : null}
          </div>
          <div className="quad-section-3">
            {entertainment &&
            entertainment.length &&
            entertainment[5] &&
            entertainment[6]
              ? [entertainment[5], entertainment[6]].map((item, index) => {
                  return (
                    <Quad
                      key={index}
                      source={item.source.name}
                      title={item.title}
                      time={item.publishedAt}
                      image={item.urlToImage}
                      url={item.url}
                    />
                  );
                })
              : null}
          </div>
        </div>
        <div id="business" className="business">
          <h1 className="red">Business</h1>
          <div className="business-wrap">
            <div className="small-business=left">
              {business &&
              business.length &&
              business[0] &&
              business[1] &&
              business[2] &&
              business[3]
                ? [business[0], business[1], business[2], business[3]].map(
                    (bus, index) => {
                      return (
                        <SmallArticleCard
                          key={index}
                          source={bus.source.name}
                          title={bus.title}
                          time={bus.publishedAt}
                          image={bus.urlToImage}
                          url={bus.url}
                        />
                      );
                    }
                  )
                : null}
            </div>
            <div className="small-business=right">
              {business &&
              business.length &&
              business[4] &&
              business[5] &&
              business[6] &&
              business[7]
                ? [business[4], business[5], business[6], business[7]].map(
                    (bus, index) => {
                      return (
                        <SmallArticleCard
                          key={index}
                          source={bus.source.name}
                          title={bus.title}
                          time={bus.publishedAt}
                          image={bus.urlToImage}
                          url={bus.url}
                        />
                      );
                    }
                  )
                : null}
            </div>
          </div>
        </div>
        <div id="health" className="health">
          <h1 className="red">Health</h1>
          <div className="health-triplet-container">
            {health &&
            health.length &&
            health[0] &&
            health[1] &&
            health[2] &&
            health[3] &&
            health[4] &&
            health[5]
              ? [
                  health[0],
                  health[1],
                  health[2],
                  health[3],
                  health[4],
                  health[5],
                ].map((thingy, index) => {
                  return (
                    <Triplet
                      key={index}
                      source={thingy.source.name}
                      title={thingy.title}
                      time={thingy.publishedAt}
                      image={thingy.urlToImage}
                      url={thingy.url}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
