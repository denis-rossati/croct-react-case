const formatRecipes = (recipes) => {
  const result = recipes.reduce((acc, recipe) => {
    let shouldBeIncluded = true;

    acc.forEach((obj) => {
      if (obj.id === recipe.id) shouldBeIncluded = false;
    });

    if (shouldBeIncluded && !Array.isArray(recipe)) {
      acc.push(recipe);
    }
    return acc;
  }, []).map(({ id, thumb, title }) => ({
    idMeal: id, strMealThumb: thumb, strMeal: title,
  }));
  return result;
};

export default formatRecipes;
