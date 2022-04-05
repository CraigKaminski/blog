import { useEffect, useState } from 'react';
import string from 'lodash/string';
import { Link } from 'react-router-dom';

function Posts() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const host = 'blog-content.craigkaminski.org.s3-website.us-east-2.amazonaws.com';
    const postsRequest = new Request(`http://${host}/metadata.json`);
    const postsResponse = await fetch(postsRequest);
    const posts = await postsResponse.json();
    setPosts(posts);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post, index) =>
        <div key={index}>
          <Link to={`/${string.kebabCase(post.title)}`}>{post.title}</Link>
        </div>
      )}
    </div>
  );
}

export default Posts;
