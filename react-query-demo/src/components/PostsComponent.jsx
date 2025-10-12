import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    refetch,
  } = useQuery('posts', fetchPosts, {
    staleTime: 5000,
    cacheTime: 10000,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error fetching posts.</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;