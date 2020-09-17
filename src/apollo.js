import {ApolloClient} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  resolvers:{
    Movie:{ //Movie는 apollo개발툴에 캐쉬에 들가서 보면 알 수 있음. 
      isLiked:()=>false
    }
  }
});

export default client;