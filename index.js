const { prisma } = require('./generated/prisma-client')

async function main() {

  const newRecipe = await prisma.createRecipe({ title: 'Steak', ingredients: 'Steak', directions: 'cook steak', isPublished: true})
  console.log(`Created new recipe: ${newRecipe.title} (ID: ${newRecipe.id})`)

  const allRecipes = await prisma.recipes()
  console.log(allRecipes)
}

main().catch(e => console.error(e))