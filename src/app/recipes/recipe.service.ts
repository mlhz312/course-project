import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "Test Recipe",
            "This is simply a test!",
            "https://www.maxpixel.net/static/photo/2x/Food-Dishes-Eat-Gastronomy-Lunch-Recipe-2760200.jpg",
            [
                new Ingredient('Tomato', 3),
                new Ingredient('Cheese', 2)
            ]
        ),
        new Recipe(
            "Test Recipe2",
            "This is the second test!",
            "https://www.maxpixel.net/static/photo/2x/Food-Dishes-Eat-Gastronomy-Lunch-Recipe-2760200.jpg",
            [
                new Ingredient('Bread', 1),
                new Ingredient('Oil', 1)
            ]
        )
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
