import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { postId } = useParams();
  return <h2>Viewing Blog Post #{postId}</h2>;
}