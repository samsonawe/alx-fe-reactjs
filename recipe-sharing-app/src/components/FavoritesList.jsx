import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

function FavoritesList() {
  const favorites = useRecipeStore((s) =>
    s.favorites.map((id) => s.recipes.find((r) => r.id === id))
  );

  return (
    <section>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((r) => (
          <article key={r.id} style={{ marginBottom: 12 }}>
            <h3>
              <Link to={`/recipes/${r.id}`}>{r.title}</Link>
            </h3>
            <p>{r.description}</p>
          </article>
        ))
      )}
    </section>
  );
}

export default FavoritesList;