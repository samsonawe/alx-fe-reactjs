import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

function RecommendationsList() {
  const recommendations = useRecipeStore((s) => s.recommendations);
  const generateRecommendations = useRecipeStore(
    (s) => s.generateRecommendations
  );

  // Generate on mount
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <section>
      <h2>Recommended For You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Add some favorites!</p>
      ) : (
        recommendations.map((r) => (
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

export default RecommendationsList;