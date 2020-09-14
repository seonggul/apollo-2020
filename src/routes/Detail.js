import React from "react";
import { useParams } from "react-router-dom"; //URL에 있는 Key/Value 객체를 받는다.
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

//Apollo사용을 위햐 query getMovie를 사용하고  type을 검사함.
//이 안에서 받아올때는 $를 써서 값 받아옴. 그런뒤에 query를 서버로 보냄
const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

export default () => {
  let { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });
  console.log(id);
  console.log(loading, data);
  return "detail";
};
/*
if (loading) {
    return "loading";
  }
  if (data && data.movie) {
    return data.movie.title;
  }*/
