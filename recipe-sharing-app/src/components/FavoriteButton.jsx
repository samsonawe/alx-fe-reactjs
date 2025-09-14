import { useRecipeStore } from './recipeStore';

function FavoriteButton({ id }) {
  const favorites = useRecipeStore((s) => s.favorites);
  const addFavorite = useRecipeStore((s) => s.addFavorite);
  const removeFavorite = useRecipeStore((s) => s.removeFavorite);

  const isFav = favorites.includes(id);

  return (
    <button
      onClick={() => (isFav ? removeFavorite(id) : addFavorite(id))}
      style={{
        marginLeft: '1rem',
        background: isFav ? 'gold' : '#eee',
        border: '1px solid #ccc',
        padding: '0.3rem 0.6rem',
      }}
    >
      {isFav ? '★ Unfavorite' : '☆ Favorite'}
    </button>
  );
}

export default FavoriteButton;