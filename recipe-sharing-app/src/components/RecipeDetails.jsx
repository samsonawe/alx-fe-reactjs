import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';


function RecipeDetails() {
const { id } = useParams();
const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));


if (!recipe) return <p>Recipe not found.</p>;


return (
<div>
<h1>{recipe.title}</h1>
<p>{recipe.description}</p>

<p><strong>Recipe ID:</strong> {recipe.id}</p>

<div style={{ marginTop: 12 }}>
<Link to={`/recipes/${id}/edit`}>Edit</Link>
<DeleteRecipeButton id={id} />
</div>


<div style={{ marginTop: 12 }}>
<Link to="/">Back to list</Link>
</div>
</div>
);
}

export default RecipeDetails