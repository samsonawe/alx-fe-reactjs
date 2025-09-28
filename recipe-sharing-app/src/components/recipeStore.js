import { create } from 'zustand'; 

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Trigger filtering when search term updates
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((r) =>
      r.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  updateRecipe: (id, updates) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updates } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  setRecipes: (recipes) => set({ recipes }),

  // Favorites
  addFavorite: (id) =>
    set((state) =>
      state.favorites.includes(id)
        ? state // prevent duplicates
        : { favorites: [...state.favorites, id] }
    ),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((f) => f !== id),
    })),

  // Simple recommendation logic
  generateRecommendations: () => {
    const { favorites, recipes } = get();
    if (favorites.length === 0) {
      set({ recommendations: [] });
      return;
    }

    // Mock logic: recommend recipes that share at least 1 word in title/description with favorites
    const favRecipes = recipes.filter((r) => favorites.includes(r.id));
    const favWords = favRecipes
      .map((r) => (r.title + ' ' + r.description).toLowerCase().split(/\s+/))
      .flat();

    const recommended = recipes.filter(
      (r) =>
        !favorites.includes(r.id) &&
        favWords.some((word) =>
          (r.title + ' ' + r.description).toLowerCase().includes(word)
        )
    );

    set({ recommendations: recommended });
  },
}));