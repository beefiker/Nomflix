import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import { Helmet } from "react-helmet";
import Message from "Components/Message";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Cover = styled.div`
  width: 20vw;
  height: 50vh;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  z-index: 1;
  border-radius: 5px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 10px 20px 10px 0;
`;

const Item = styled.span``;

const IMDB = styled.a`
  background-color: #f5c518;
  border-radius: 5px;
  border: 1px solid black;
  color: black;
  font-size: 1px;
  font-weight: 600;
  padding: 2px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.3;
  width: 100%;
`;

const Video = styled.div`
  margin: 20px 20px 0 0;
`;

const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  overflow: ${(props) => (props.len > 2 ? "scroll" : "none")};
  &::-webkit-scrollbar {
    /* 세로 스크롤 넓이 */
    width: 0px;
    /* 가로 스크롤 높이 */
    height: 7px;

    border-radius: 6px;
    background: rgba(0, 0, 0, 0.7);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 6px;
  }
`;
const CompaniesContainer = styled.div`
  margin-top: 40px;
  z-index: 2;
  width: 100%;
  /* height: 20%; */
  flex-direction: column;
`;

const BottomBorderedTitle = styled.span`
  font-size: 24px;
  border-bottom: 2px solid #f5c518;
  padding-bottom: 2px;
`;

const Productions = styled.div`
  display: flex;
  /* margin-top: 5px; */
`;

const CompanyLogo = styled.div`
  width: 15vw;
  height: 15vh;
  margin-right: 20px;
  background-image: url(${(props) => `https://image.tmdb.org/t/p/w300${props.logoUrl}`});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center center;
`;

const Reviews = styled.div`
  position: relative;
  font-size: 13px;
  top: 50px;
`;

const Reviewer = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin: 20px 0 10px 0px;
`;

const ReviewContent = styled.p`
  opacity: 0.7;
  margin-bottom: 30px;
`;

const DetailPresenter = ({ reviews, result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message color="#ff00ff" text="Can't find Detail Information" />
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_name ? `${result.original_name} | Nomflix` : `${result.original_title} | Nomflix`}
        </title>
      </Helmet>
      <Backdrop
        bgImage={
          result.backdrop_path
            ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
            : require("../../assets/popcorn.png").default
        }
      ></Backdrop>
      <Content>
        <Cover
          key={result.id}
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/popcorn.png").default
          }
        />
        <Data>
          <Title>{result.original_title ? result.original_title : result.original_name}</Title>
          <ItemContainer>
            <Item>{result.release_date ? result.release_date.substring(0, 4) : result.first_air_date}</Item>
            <Divider>●</Divider>
            <Item>{result.runtime ? result.runtime : result.episode_run_time} min</Item>
            <Divider>●</Divider>
            {/* <IMDB> */}
            <IMDB href={`https://www.imdb.com/title/${result.imdb_id}/`} target="_blank">
              IMDB
            </IMDB>
            {/* </IMDB> */}
            <Divider>●</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1 ? genre.name : `${genre.name} / `
                )}
            </Item>
            <Divider>●</Divider>

            {result.production_countries &&
              result.production_countries.length > 0 &&
              result.production_countries.map((item, index) =>
                index === result.production_countries.length - 1 ? item.name : `${item.name} / `
              )}
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          {result.production_companies && result.production_companies.length && result.production_companies.length > 2 && (
            <CompaniesContainer>
              <BottomBorderedTitle>Companies</BottomBorderedTitle>
              <Productions>
                {result.production_companies &&
                  result.production_companies.length > 1 &&
                  result.production_companies.map((item, index) => {
                    if (item.logo_path !== null && index < 4) {
                      return <CompanyLogo key={item.id} logoUrl={item.logo_path}></CompanyLogo>;
                    }
                  })}
              </Productions>
            </CompaniesContainer>
          )}

          {result.videos && result.videos.results && result.videos.results.length >= 1 && (
            <VideoContainer len={result.videos.results.length}>
              {result.videos.results.map((video) => {
                return (
                  <Video>
                    <iframe
                      key={video.key}
                      src={`https://www.youtube.com/embed/${video.key}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </Video>
                );
              })}
            </VideoContainer>
          )}
        </Data>
      </Content>

      {reviews && reviews.length !== 0 && (
        <Reviews>
          <BottomBorderedTitle>Reviews</BottomBorderedTitle>
          {reviews &&
            reviews.length > 0 &&
            reviews.map((item) => {
              return (
                <>
                  <Reviewer>- {item.author}</Reviewer>
                  <ReviewContent>" {item.content} "</ReviewContent>
                </>
              );
            })}
        </Reviews>
      )}
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.any,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
