import { Task, Category } from "./types/types.js";
import { render, renderCategories } from "./helpers/render-tasks.helper.js";

const tasksContainer: HTMLElement = document.querySelector(".tasks");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const taskNameInput: HTMLInputElement = document.querySelector("#name");
const categoriesContainer: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [Category.GENERAL, Category.HOBBY, Category.GYM];

const tasks: Task[] = [
  { name: "Ograć prototyp", done: false, category: Category.HOBBY },
  { name: "Siłka", done: true, category: Category.GYM },
  { name: "Nakarmić kota", done: false, category: Category.GENERAL },
];

const addTask = (task: Task) => {
  tasks.push(task);
};

const updatedSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (event: Event) => {
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
