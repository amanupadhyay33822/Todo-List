import { Category } from "./types/types.js";
import { render, renderCategories } from "./helpers/render-tasks.helper.js";
const tasksContainer = document.querySelector(".tasks");
const addButtonElement = document.querySelector("button");
const taskNameInput = document.querySelector("#name");
const categoriesContainer = document.querySelector(".categories");
let selectedCategory;
const categories = [Category.GENERAL, Category.HOBBY, Category.GYM];
const tasks = [
    { name: "Ograć prototyp", done: false, category: Category.HOBBY },
    { name: "Siłka", done: true, category: Category.GYM },
    { name: "Nakarmić kota", done: false, category: Category.GENERAL },
];
const addTask = (task) => {
    tasks.push(task);
};
const updatedSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        name: taskNameInput.value,
        done: false,
        category: selectedCategory,
    });
    render(tasks, tasksContainer);
});
// type TaskTuple = [task: string, cat: Category, done: boolean];
// const task: TaskTuple = ["nogi", Category.GYM, false];
renderCategories(categoriesContainer, categories, updatedSelectedCategory);
render(tasks, tasksContainer);
