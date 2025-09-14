import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';


function EditRecipeForm() {
const { id } = useParams();
const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
const updateRecipe = useRecipeStore((s) => s.updateRecipe);
const navigate = useNavigate();


const [title, setTitle] = useState(recipe?.title || '');
const [description, setDescription] = useState(recipe?.description || '');


if (!recipe) return <p>Recipe not found.</p>;


const handleSubmit = (event) => {
event.preventDefault();
if (!title.trim() || !description.trim()) return;
updateRecipe(id, { title: title.trim(), description: description.trim() });
navigate(`/recipes/${id}`);
};


return (
<form onSubmit={handleSubmit}>
<div>
<input value={title} onChange={(e) => setTitle(e.target.value)} />
</div>
<div>
<textarea value={description} onChange={(e) => setDescription(e.target.value)} />
</div>
<button type="submit">Save changes</button>
</form>
);
}

export default EditRecipeForm