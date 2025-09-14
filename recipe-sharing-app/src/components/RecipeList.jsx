import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

  function RecipeList () {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <section>
            <h2>Recipes</h2>
            {recipes.length === 0 ? (
                <p>No recipes yet — add one!</p>
            ) : (
            recipes.map((r) => (
                <article key={r.id} style={{ marginBottom: 12 }}>
                    <h3>
                    <Link to={`/recipes/${r.id}`}>{r.title}</Link>
                    </h3>
                    <p>{r.description}</p>
                    <Link to={`/recipes/${r.id}/edit`}>Edit</Link>
                </article>
                ))
            )}
        </section>
    );
  };

export default RecipeList;