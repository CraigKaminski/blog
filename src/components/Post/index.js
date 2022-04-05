import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { paramsPostId } = useParams();
  const [post, setPost] = useState([]);

  async function getPost(postId) {
    const host = 'blog-content.craigkaminski.org.s3-website.us-east-2.amazonaws.com';
    const postRequest = new Request(`http://${host}/${postId}.html`);
    const postResponse = await fetch(postRequest);
    const post = await postResponse.text();
    setPost(post);
  }

  useEffect(() => {
    getPost(paramsPostId);
  }, [paramsPostId]);

  return (
    <div dangerouslySetInnerHTML={{ __html: post }} />
  );
}

export default Post;
