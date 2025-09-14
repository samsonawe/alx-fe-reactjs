import { create } from 'zustand'; 

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',

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

  // 🔑 Search/filter
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: (state) => {
    if (!state.searchTerm) return state.recipes;
    return state.recipes.filter(
      (r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        r.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
  },
}));