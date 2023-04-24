import React, { Component } from "react";
import NewsCard from "./NewsCard";
import "./News.css";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults: 0,
    };
    // console.log(this.state.page);
  }
  options = {
    method: "GET",
    url: "https://api.newscatcherapi.com/v2/search",
    params: {
      q: "Crypto",
      lang: "en",
      sort_by: "relevancy",
      page_size: 12,
      page: 1,
    },
    headers: {
      "x-api-key": "FVhpiEfZSZiqAPP8O_aDNaE1-0o6Mn5b83yu6rjL9Rs",
    },
  };

  static defaultProps = {
    page: 1,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    await axios
      .request(this.options)
      .then(async (response) => {
        // console.log(response.data);
        let parsedJsonData = await response.data;
        this.setState({
          articles: parsedJsonData.articles,
          totalResults: parsedJsonData.total_hits,
          loading: false,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  render() {
    return (
      <div className="main">
        <div className="heading">
          <h2>Top Articles Related to Crypto Currency</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0px 0px 10px 0px",
          }}
        >
          {this.state.loading && (
            <CircularProgress
              style={{ color: "#ff2e63", marginTop: "10px" }}
              thickness={2}
            />
          )}
        </div>
        <div className="newsContainer">
          {this.state.articles
            ? this.state.articles.map((element) => {
                return (
                  <NewsCard
                    title={element?.title}
                    description={element?.summary}
                    imgUrl={element?.media}
                    key={element?._id}
                    myUrl={element?.link}
                    author={element?.author}
                    date={element.published_date}
                  />
                );
              })
            : ""}
        </div>
      </div>
    );
  }
}
