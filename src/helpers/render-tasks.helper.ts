import { Category, Task } from "../types/types.js";

const handleCategoryChange = (category: Category) => {
  if (category === Category.GENERAL) {
    console.log("General");
    document.body.style.background =
      "linear-gradient(45deg, rgb(66, 144, 42), #fff)";
  } else if (category === Category.GYM) {
    alert("Siłka");
    document.body.style.background =
      "linear-gradient(45deg, rgb(25, 22, 135), #fff)";
  } else if (category === Category.HOBBY) {
    document.body.style.background =
      "linear-gradient(45deg, rgb(197, 197, 46), #fff)";
  } else {
    const never: never = category;
  }
};

export const render = (tasks: Task[], tasksContainer: HTMLElement) => {
  tasksContainer.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");

    if (task.category) {
      taskElement.classList.add(task.category);
    }

    const id: string = `task-${index}`;

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.innerText = task.name;
    labelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.name = task.name;
    checkboxElement.id = id;
    checkboxElement.checked = task.done;
    checkboxElement.addEventListener("change", () => {
      task.done = !task.done;
    });

    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkboxElement);

    tasksContainer.appendChild(taskElement);
  });
};

export const renderCategories = (
  categoriesContainer: HTMLElement,
  categories: Category[],
  inputChangeCallback: (category: Category) => void
) => {
  categoriesContainer.innerHTML = "";

  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement("li");

    const id: string = `category-${category}`;

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.innerText = category;
    labelElement.setAttribute("for", id);

    const radioElement: HTMLInputElement = document.createElement("input");
    radioElement.type = "radio";
    radioElement.name = "category";
    radioElement.value = category;
    radioElement.id = id;
    radioElement.addEventListener("change", () => {
      inputChangeCallback(category);
      handleCategoryChange(category);
    });

    categoryElement.appendChild(radioElement);
    categoryElement.appendChild(labelElement);

    categoriesContainer.appendChild(categoryElement);
  });
};
