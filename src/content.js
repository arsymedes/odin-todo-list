/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
import { format } from "date-fns";
import { storage, processor } from "./index";

const content = (() => {
  function displayContent() {
    const contentClass = document.querySelector(".content");

    const html = /* html */ `
    <h1>${processor.getProject().name}</h1>
    <ul></ul>
    <button class="add-button big-button">+ Add Item</button>
    `;

    contentClass.innerHTML = html;
    displayItems();

    document.querySelector(".add-button").addEventListener("click", () => {
      addForm();
    });
  }

  function displayItems() {
    const contentUl = document.querySelector(".content ul");
    let html = "";

    const project = processor.getProject();

    if (project.name === "Today" || project.name === "Week") {
      project.items.forEach(([index, item]) => {
        const li = /* html */ `
        <li class="${item.priority} ${
          item.getChecklist() ? "vague" : ""
        }" data-projectname="${item.project}" data-item="${index}">
          <div class="li-left ${item.getChecklist() ? "strikethrough" : ""}">
            <input type="checkbox" ${item.getChecklist() ? "checked" : ""}>
            <div class="title">${item.title}</div>
          </div>
          <div class="li-right">
            <button class="details small-button">Details</button>
            <div class="date">${item.dueDate.toLocaleString("en-UK", {
              day: "numeric",
              month: "short",
            })}</div>
            <svg class="edit" style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12H20A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4V2M18.78,3C18.61,3 18.43,3.07 18.3,3.2L17.08,4.41L19.58,6.91L20.8,5.7C21.06,5.44 21.06,5 20.8,4.75L19.25,3.2C19.12,3.07 18.95,3 18.78,3M16.37,5.12L9,12.5V15H11.5L18.87,7.62L16.37,5.12Z" />
            </svg>
            <svg class="remove" style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          </div>
        </li>
        `;
        html += li;
      });

      contentUl.innerHTML = html;

      document.querySelectorAll(".details").forEach((element) => {
        element.addEventListener("click", () => {
          showDetails(element);
        });
      });

      document.querySelectorAll(".remove").forEach((element) => {
        element.addEventListener("click", () => {
          const index = element.parentElement.parentElement.dataset.item;
          const projectName =
            element.parentElement.parentElement.dataset.projectname;

          storage.removeItem(index, projectName);
          displayItems();
        });
      });

      document.querySelectorAll('input[type="checkbox"]').forEach((element) => {
        element.addEventListener("click", () => {
          const index = element.parentElement.parentElement.dataset.item;
          const projectName =
            element.parentElement.parentElement.dataset.projectname;
          processor.getSameProject(projectName).items[index].toggleChecklist();
          element.parentElement.parentElement.classList.toggle("vague");
          element.parentElement.classList.toggle("strikethrough");
        });
      });

      document.querySelectorAll(".edit").forEach((element) => {
        element.addEventListener("click", () => {
          editForm(element);
        });
      });
    } else {
      [...project.items.entries()].forEach(([index, item]) => {
        const li = /* html */ `
        <li class="${item.priority} ${
          item.getChecklist() ? "vague" : ""
        }" data-projectname="${item.project}" data-item="${index}">
          <div class="li-left ${item.getChecklist() ? "strikethrough" : ""}">
            <input type="checkbox" ${item.getChecklist() ? "checked" : ""}>
            <div class="title">${item.title}</div>
          </div>
          <div class="li-right">
            <button class="details small-button">Details</button>
            <div class="date">${item.dueDate.toLocaleString("en-UK", {
              day: "numeric",
              month: "short",
            })}</div>
            <svg class="edit" style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12H20A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4V2M18.78,3C18.61,3 18.43,3.07 18.3,3.2L17.08,4.41L19.58,6.91L20.8,5.7C21.06,5.44 21.06,5 20.8,4.75L19.25,3.2C19.12,3.07 18.95,3 18.78,3M16.37,5.12L9,12.5V15H11.5L18.87,7.62L16.37,5.12Z" />
            </svg>
            <svg class="remove" style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          </div>
        </li>
        `;
        html += li;
      });
      contentUl.innerHTML = html;

      document.querySelectorAll(".details").forEach((element) => {
        element.addEventListener("click", () => {
          showDetails(element);
        });
      });

      document.querySelectorAll(".remove").forEach((element) => {
        element.addEventListener("click", () => {
          const index = element.parentElement.parentElement.dataset.item;
          const projectName =
            element.parentElement.parentElement.dataset.projectname;

          storage.removeItem(index, projectName);
          displayItems();
        });
      });

      document.querySelectorAll('input[type="checkbox"]').forEach((element) => {
        element.addEventListener("click", () => {
          const index = element.parentElement.parentElement.dataset.item;
          const projectName =
            element.parentElement.parentElement.dataset.projectname;
          processor.getSameProject(projectName).items[index].toggleChecklist();
          element.parentElement.parentElement.classList.toggle("vague");
          element.parentElement.classList.toggle("strikethrough");
        });
      });

      document.querySelectorAll(".edit").forEach((element) => {
        element.addEventListener("click", () => {
          editForm(element);
        });
      });
    }
  }

  function showDetails(el) {
    const body = document.querySelector("body");
    const index = el.parentElement.parentElement.dataset.item;
    const projectName = el.parentElement.parentElement.dataset.projectname;
    const project = processor.getSameProject(projectName).items[index];

    const html = /* html */ `
    <div class="popup">
      <form action="" method="get" id="my-form">
        <h1>Details</h1>
        <div class="form-section">${project.title}</div>
        <div class="form-section">${format(project.dueDate, "dd/MM/yyyy")}</div>
        <div class="form-section">
          <label for="desc"></label>
          <textarea disabled name="desc" id="desc" cols="30" rows="5">${
            project.description
          }</textarea>
        </div>
        <fieldset class="radio-form">
          <legend>Priority</legend>
          <ul>
            <li>
              <input type="radio" id="radio-low" name="priority" value="low" ${
                project.priority === "low" ? "checked" : "disabled"
              }>
              <label class="low" for="radio-low">Low</label>
            </li>
            <li>
              <input type="radio" id="radio-medium" name="priority" value="medium" ${
                project.priority === "medium" ? "checked" : "disabled"
              }>
              <label class="medium" for="radio-medium">Medium</label>
            </li>
            <li>
              <input type="radio" id="radio-high" name="priority" value="high" ${
                project.priority === "high" ? "checked" : "disabled"
              }>
              <label class="high" for="radio-high">High</i></label>
            </li>
          </ul>
        </fieldset>
        <div class="form-buttons">
          <button type="button" id="close">Close</button>
        </div>
      </form> 
    </div>
    `;
    body.insertAdjacentHTML("beforeend", html);

    document.querySelector("#close").addEventListener("click", () => {
      document.querySelector(".popup").remove();
    });
  }

  function addForm() {
    const body = document.querySelector("body");

    const html = /* html */ `
    <div class="popup">
      <form action="" method="get" id="my-form">
        <h1>Add a New Item</h1>
        <div class="form-section">
          <label for="title"></label>
          <input required type="text" id="title" name="title" placeholder="Title">
        </div>
        <div class="form-section">
          <label for="date"></label>
          <input type="text" id="date" name="date" placeholder="Due Date" onfocus="(this.type='date')" onblur="if(this.value==''){this.type='text'}">
        </div>
        <div class="form-section">
          <label for="desc"></label>
          <textarea name="desc" id="desc" cols="30" rows="5" placeholder="Description"></textarea>
        </div>
        <fieldset class="radio-form">
          <legend>Select the priority</legend>
          <ul>
            <li>
              <input type="radio" id="radio-low" name="priority" value="low">
              <label class="low" for="radio-low">Low</label>
            </li>
            <li>
              <input type="radio" id="radio-medium" name="priority" value="medium">
              <label class="medium" for="radio-medium">Medium</label>
            </li>
            <li>
              <input type="radio" id="radio-high" name="priority" value="high">
              <label class="high" for="radio-high">High</i></label>
            </li>
          </ul>
        </fieldset>
        <div class="form-buttons">
          <button type="submit" form="my-form">Submit</button>
          <button type="button" id="cancel">Cancel</button>
        </div>
      </form> 
    </div>
    `;

    body.insertAdjacentHTML("beforeend", html);

    document.querySelector("#my-form").addEventListener("submit", (event) => {
      event.preventDefault();
      storage.addItem(
        document.getElementById("title").value,
        document.getElementById("desc").value,
        document.getElementById("date").value,
        document.querySelector('input[name="priority"]:checked').value,
        storage.getCurrentProject()
      );
      displayItems();
      document.querySelector(".popup").remove();
    });

    document.querySelector("#cancel").addEventListener("click", () => {
      document.querySelector(".popup").remove();
    });
  }

  function editForm(el) {
    const body = document.querySelector("body");
    const index = el.parentElement.parentElement.dataset.item;
    const projectName = el.parentElement.parentElement.dataset.projectname;
    const project = processor.getSameProject(projectName).items[index];

    const html = /* html */ `
    <div class="popup">
      <form action="" method="get" id="my-form">
        <h1>Edit The Item</h1>
        <div class="form-section">
          <label for="title"></label>
          <input required type="text" id="title" name="title" value='${
            project.title
          }'>
        </div>
        <div class="form-section">
          <label for="date"></label>
          <input type="text" id="date" name="date" value='${
            project.dueDate
          }' onfocus="(this.type='date')" onblur="if(this.value==''){this.type='text'}">
        </div>
        <div class="form-section">
          <label for="desc"></label>
          <textarea name="desc" id="desc" cols="30" rows="5">${
            project.description
          }</textarea>
        </div>
        <fieldset class="radio-form">
          <legend>Select the priority</legend>
          <ul>
            <li>
              <input type="radio" id="radio-low" name="priority" value="low" ${
                project.priority === "low" ? "checked" : ""
              }>
              <label class="low" for="radio-low">Low</label>
            </li>
            <li>
              <input type="radio" id="radio-medium" name="priority" value="medium" ${
                project.priority === "medium" ? "checked" : ""
              }>
              <label class="medium" for="radio-medium">Medium</label>
            </li>
            <li>
              <input type="radio" id="radio-high" name="priority" value="high" ${
                project.priority === "high" ? "checked" : ""
              }>
              <label class="high" for="radio-high">High</i></label>
            </li>
          </ul>
        </fieldset>
        <div class="form-buttons">
          <button type="submit" form="my-form">Edit</button>
          <button type="button" id="cancel">Cancel</button>
        </div>
      </form> 
    </div>
    `;

    body.insertAdjacentHTML("beforeend", html);

    document.querySelector("#my-form").addEventListener("submit", (event) => {
      event.preventDefault();
      storage.editItem(
        index,
        document.getElementById("title").value,
        document.getElementById("desc").value,
        document.getElementById("date").value,
        document.querySelector('input[name="priority"]:checked').value,
        projectName
      );
      displayItems();
      document.querySelector(".popup").remove();
    });

    document.querySelector("#cancel").addEventListener("click", () => {
      document.querySelector(".popup").remove();
    });
  }

  return {
    displayContent,
  };
})();

export default content;
