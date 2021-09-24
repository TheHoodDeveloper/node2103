import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Post from "./Post";
import PostDetail from "./PostDetail";
import NewPost from "./NewPost";
import CategoryPosts from "./CategoryPosts";

export default function LeftComponent(props) {
  const { post, error, loading, show } = props;
  return (
    <>
      <Route
        exact
        path="/main/posts"
        render={(routerProps) => (
          <Post
            post={post}
            error={error}
            loading={loading}
            show={show}
            {...routerProps}
          />
        )}
      />

      <Route exact path="/main/posts/:id" component={PostDetail} />
      <Route exact path="/main/new/post" component={NewPost} />
      <Route exact path="/main/categories/:id" component={CategoryPosts} />
    </>
  );
}
