import { useRouter } from 'next/router';
import React from 'react';

const Post: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
};

export default Post;