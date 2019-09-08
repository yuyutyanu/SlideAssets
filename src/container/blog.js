import * as React from 'react';
import {Query} from "react-apollo"
import AppArticle from '../components/article'
import {allPost} from "../query/article";

const Blog = () => (
  <Query query={allPost}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return (
        <AppArticle posts={data.posts} />
      )
    }}
  </Query>
);


export default Blog;
