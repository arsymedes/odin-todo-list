import {storage, processor} from "./index.js"
import content from "./content.js"

const banner = (() => {
  function displayBanner() {
    const bannerClass = document.querySelector(".banner")

    let html = /*html*/ `
    <ul class="tabs">
      <li>
        <a href="javascript:void(0)" class="svg-text activate" data-project=0>
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
          </svg>
          <h1>Home</h1>
        </a>
      </li>
      <li>
        <a id="today" data-project="-1" href="javascript:void(0)" class="svg-text activate">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M17.65 32.5q-2.05 0-3.45-1.4-1.4-1.4-1.4-3.45 0-2.05 1.4-3.45 1.4-1.4 3.45-1.4 2.05 0 3.45 1.4 1.4 1.4 1.4 3.45 0 2.05-1.4 3.45-1.4 1.4-3.45 1.4ZM9 44q-1.2 0-2.1-.9Q6 42.2 6 41V10q0-1.2.9-2.1Q7.8 7 9 7h3.25V4h3.25v3h17V4h3.25v3H39q1.2 0 2.1.9.9.9.9 2.1v31q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V19.5H9V41Zm0-24.5h30V10H9Zm0 0V10v6.5Z"/></svg>
          <h1>Today</h1>
        </a>
      </li>
      <li>
        <a id="week" data-project="-2" href="javascript:void(0)" class="svg-text activate">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="48" width="48"><path d="M15.3 28.3q-.85 0-1.425-.575-.575-.575-.575-1.425 0-.85.575-1.425.575-.575 1.425-.575.85 0 1.425.575.575.575.575 1.425 0 .85-.575 1.425-.575.575-1.425.575Zm8.85 0q-.85 0-1.425-.575-.575-.575-.575-1.425 0-.85.575-1.425.575-.575 1.425-.575.85 0 1.425.575.575.575.575 1.425 0 .85-.575 1.425-.575.575-1.425.575Zm8.5 0q-.85 0-1.425-.575-.575-.575-.575-1.425 0-.85.575-1.425.575-.575 1.425-.575.85 0 1.425.575.575.575.575 1.425 0 .85-.575 1.425-.575.575-1.425.575ZM9 44q-1.2 0-2.1-.9Q6 42.2 6 41V10q0-1.2.9-2.1Q7.8 7 9 7h3.25V4h3.25v3h17V4h3.25v3H39q1.2 0 2.1.9.9.9.9 2.1v31q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V19.5H9V41Zm0-24.5h30V10H9Zm0 0V10v6.5Z"/></svg>
          <h1>Week</h1>
        </a>
      </li>
      <!-- <li>
        <button class="svg-text">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 42v-3.55l10.8-10.8 3.55 3.55L27.55 42ZM6 31.5v-3h15v3Zm34.5-2.45-3.55-3.55 1.45-1.45q.4-.4 1.05-.4t1.05.4l1.45 1.45q.4.4.4 1.05t-.4 1.05ZM6 23.25v-3h23.5v3ZM6 15v-3h23.5v3Z"/></svg>
          <h1>Notes</h1>
        </button>
        <ul class="small-text">
          <li>Note 1</li>
          <li>Note 2</li>
          <li>Note 3</li>
        </ul>
      </li> -->
    </ul>
    `

    bannerClass.innerHTML = html;
    projectList.addProjects()

    document.querySelectorAll("[data-project]").forEach(element => {
      element.addEventListener("click", () => {
        storage.setCurrentProject(element.dataset.project)
        content.displayContent()
        if (+element.dataset.project < 0) {
          document.querySelector(".add-button").remove()
        }
      })
    })

    document.querySelectorAll(".activate").forEach(element => {
      element.addEventListener("click", () => {
        document.querySelectorAll(".activate").forEach(el => el.classList.remove("active"))
        element.classList.add("active")
      })
    })

    document.querySelector(".add-project").addEventListener("click", event => {
      event.stopPropagation()
      projectList.addForm()
      document.querySelector(".add-project").remove()
      document.querySelector("#new-project").focus()
    })
  }

  return {
    displayBanner,
  }
})();

const projectList = (() => {
  function addProjects() {
    const tabs = document.querySelector(".tabs")

    let html = /*html*/ `
    <li id="projects">
      <button class="svg-text activate">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M38.4 42 25.85 29.45l2.85-2.85 12.55 12.55ZM9.35 42 6.5 39.15 21 24.65l-5.35-5.35-1.15 1.15-2.2-2.2v4.25l-1.2 1.2L5 17.6l1.2-1.2h4.3L8.1 14l6.55-6.55q.85-.85 1.85-1.15 1-.3 2.2-.3 1.2 0 2.2.425 1 .425 1.85 1.275l-5.35 5.35 2.4 2.4-1.2 1.2 5.2 5.2 6.1-6.1q-.4-.65-.625-1.5-.225-.85-.225-1.8 0-2.65 1.925-4.575Q32.9 5.95 35.55 5.95q.75 0 1.275.15.525.15.875.4l-4.25 4.25 3.75 3.75 4.25-4.25q.25.4.425.975t.175 1.325q0 2.65-1.925 4.575Q38.2 19.05 35.55 19.05q-.9 0-1.55-.125t-1.2-.375Z"/></svg>
        <h1>Projects</h1>
      </button>
      ${addProjectList()}
      <button class="add-project">+ Add Project</button>
    </li>
    `
    tabs.insertAdjacentHTML("beforeend", html)
  }

  function addProjectList() {
    let ul = /*html*/ `<ul class="sub-project">`

    for (let [index, project] of storage.getProjects().entries()) {
      if (index === 0) continue;
      ul += /*html*/ `<li class="activate" data-project=${index}>${project.name}</li>`
    }

    ul += `</ul>`

    return ul
  }

  function addForm() {
    const projects = document.querySelector("#projects")

    let html = /*html*/ `
    <form action="" method="get" id="add-project-form">
      <div class="popup-form">
        <input type="text" id="new-project" name="newProject">
      </div>
    </form>
    `
    projects.insertAdjacentHTML("beforeend", html)

    document.addEventListener("click", () => {
      banner.displayBanner()
    }, { once: true})

    document.querySelector("#add-project-form").addEventListener("submit", event => {
      event.preventDefault();
      storage.addProject(document.querySelector("#new-project").value)
      banner.displayBanner()
    })
  }
  
  return {
    addProjects,
    addForm,
  }
})();

export default banner;