import 'normalize.css'
import "./style.css"
import content from "./content.js"

const domStuff = (() => {
  const body = document.querySelector("body");

  function initialDom() {
    let html = /*html*/ `
    <nav>
      <svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
        <g>
          <g>
            <path d="M511.999,102.871c0-7.743-3.015-15.022-8.49-20.496l-11.386-11.388c-5.475-5.475-12.755-8.49-20.498-8.49
              c-7.743,0-15.022,3.015-20.498,8.49l-53.653,53.653V67.463c0-5.632-4.567-10.199-10.199-10.199H10.199
              C4.566,57.263,0,61.831,0,67.463v377.074c0,5.632,4.566,10.199,10.199,10.199h377.075c5.632,0,10.199-4.567,10.199-10.199
              l-0.004-215.126l106.04-106.041C508.984,117.895,511.999,110.614,511.999,102.871z M377.075,434.337H20.398V77.663h356.676v67.376
              L190.347,331.766c-1.12,1.12-1.963,2.486-2.464,3.987l-18.98,56.939c-1.222,3.665-0.268,7.706,2.464,10.437
              c1.944,1.944,4.551,2.987,7.214,2.987c1.079,0,2.167-0.171,3.224-0.523l56.939-18.979c1.502-0.501,2.867-1.344,3.987-2.464
              l134.344-134.344V434.337z M230.008,368.024l-35.304,11.767l11.768-35.304l216.563-216.563l23.536,23.536L230.008,368.024z
              M489.085,108.945l-28.09,28.091l-11.768-11.768L437.46,113.5l28.091-28.091c1.623-1.623,3.779-2.516,6.074-2.516
              c2.295,0,4.451,0.893,6.074,2.515l11.387,11.388c0,0.001,0,0.001,0.001,0.001c1.622,1.623,2.515,3.779,2.515,6.073
              C491.602,105.166,490.708,107.323,489.085,108.945z"/>
          </g>
        </g>
        <g>
          <g>
            <path d="M318.125,121.009h-9.724c-5.632,0-10.199,4.567-10.199,10.199c0,5.632,4.566,10.199,10.199,10.199h9.724
              c5.632,0,10.199-4.567,10.199-10.199C328.325,125.577,323.757,121.009,318.125,121.009z"/>
          </g>
        </g>
        <g>
          <g>
            <path d="M264.103,121.009H78.267c-5.633,0-10.199,4.567-10.199,10.199c0,5.632,4.566,10.199,10.199,10.199h185.837
              c5.632,0,10.199-4.567,10.199-10.199C274.302,125.577,269.735,121.009,264.103,121.009z"/>
          </g>
        </g>
        <g>
          <g>
            <path d="M254.379,180.434H78.267c-5.633,0-10.199,4.567-10.199,10.199c0,5.632,4.566,10.199,10.199,10.199h176.113
              c5.632,0,10.199-4.567,10.199-10.199C264.579,185.001,260.011,180.434,254.379,180.434z"/>
          </g>
        </g>
        <g>
          <g>
            <path d="M190.633,239.859H78.267c-5.633,0-10.199,4.567-10.199,10.199c0,5.632,4.566,10.199,10.199,10.199h112.367
              c5.633,0,10.199-4.567,10.199-10.199C200.833,244.426,196.266,239.859,190.633,239.859z"/>
          </g>
        </g>
        <g>
          <g>
            <path d="M142.014,298.202H78.267c-5.633,0-10.199,4.567-10.199,10.199c0,5.632,4.566,10.199,10.199,10.199h63.746
              c5.633,0,10.199-4.567,10.199-10.199C152.212,302.769,147.647,298.202,142.014,298.202z"/>
          </g>
        </g>
      </svg>
      <div class="logo">WHITEP!NK</div>
    </nav>

    <div class="banner">
      <ul class="tabs">
        <li>
          <div class="svg-text">
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
            </svg>
            <h1>Home</h1>
          </div>
        </li>
        <li>
          <div class="svg-text">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M17.65 32.5q-2.05 0-3.45-1.4-1.4-1.4-1.4-3.45 0-2.05 1.4-3.45 1.4-1.4 3.45-1.4 2.05 0 3.45 1.4 1.4 1.4 1.4 3.45 0 2.05-1.4 3.45-1.4 1.4-3.45 1.4ZM9 44q-1.2 0-2.1-.9Q6 42.2 6 41V10q0-1.2.9-2.1Q7.8 7 9 7h3.25V4h3.25v3h17V4h3.25v3H39q1.2 0 2.1.9.9.9.9 2.1v31q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V19.5H9V41Zm0-24.5h30V10H9Zm0 0V10v6.5Z"/></svg>
            <h1>Today</h1>
          </div>
        </li>
        <li>
          <div class="svg-text">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="48" width="48"><path d="M15.3 28.3q-.85 0-1.425-.575-.575-.575-.575-1.425 0-.85.575-1.425.575-.575 1.425-.575.85 0 1.425.575.575.575.575 1.425 0 .85-.575 1.425-.575.575-1.425.575Zm8.85 0q-.85 0-1.425-.575-.575-.575-.575-1.425 0-.85.575-1.425.575-.575 1.425-.575.85 0 1.425.575.575.575.575 1.425 0 .85-.575 1.425-.575.575-1.425.575Zm8.5 0q-.85 0-1.425-.575-.575-.575-.575-1.425 0-.85.575-1.425.575-.575 1.425-.575.85 0 1.425.575.575.575.575 1.425 0 .85-.575 1.425-.575.575-1.425.575ZM9 44q-1.2 0-2.1-.9Q6 42.2 6 41V10q0-1.2.9-2.1Q7.8 7 9 7h3.25V4h3.25v3h17V4h3.25v3H39q1.2 0 2.1.9.9.9.9 2.1v31q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V19.5H9V41Zm0-24.5h30V10H9Zm0 0V10v6.5Z"/></svg>
            <h1>Week</h1>
          </div>
        </li>
        <li>
          <div class="svg-text">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M38.4 42 25.85 29.45l2.85-2.85 12.55 12.55ZM9.35 42 6.5 39.15 21 24.65l-5.35-5.35-1.15 1.15-2.2-2.2v4.25l-1.2 1.2L5 17.6l1.2-1.2h4.3L8.1 14l6.55-6.55q.85-.85 1.85-1.15 1-.3 2.2-.3 1.2 0 2.2.425 1 .425 1.85 1.275l-5.35 5.35 2.4 2.4-1.2 1.2 5.2 5.2 6.1-6.1q-.4-.65-.625-1.5-.225-.85-.225-1.8 0-2.65 1.925-4.575Q32.9 5.95 35.55 5.95q.75 0 1.275.15.525.15.875.4l-4.25 4.25 3.75 3.75 4.25-4.25q.25.4.425.975t.175 1.325q0 2.65-1.925 4.575Q38.2 19.05 35.55 19.05q-.9 0-1.55-.125t-1.2-.375Z"/></svg>
            <h1>Projects</h1>
          </div>
          <ul class="small-text">
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </li>
        <li>
          <div class="svg-text">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 42v-3.55l10.8-10.8 3.55 3.55L27.55 42ZM6 31.5v-3h15v3Zm34.5-2.45-3.55-3.55 1.45-1.45q.4-.4 1.05-.4t1.05.4l1.45 1.45q.4.4.4 1.05t-.4 1.05ZM6 23.25v-3h23.5v3ZM6 15v-3h23.5v3Z"/></svg>
            <h1>Notes</h1>
          </div>
          <ul class="small-text">
            <li>Note 1</li>
            <li>Note 2</li>
            <li>Note 3</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="content"></div>
  
    `;

    body.innerHTML = html;
    content.displayProject();
    content.displayItems();
  }

  return {
    initialDom,
  }
})();

const itemMaker = (title, description, dueDate, priority) => {
  let checklist = false

  function getChecklist() {
    return checklist
  }

  function toggleChecklist() {
    checklist = !checklist
  }

  return {
    title,
    description,
    dueDate,
    priority,
    getChecklist,
    toggleChecklist,
  }
}

const projectMaker = (name, items) => {
  return {
    name,
    items,
  }
}

const notes = (title, description) => {
  return {
    title,
    description,
  }
}

const storage = (() => {
  let currentProject = 1;

  function getCurrentProject() {
    return projects[currentProject];
  }

  function setCurrentProject(newProject) {
    currentProject = newProject;
  }

  let projects = [
    projectMaker(
      "Home",
      [
        itemMaker("Brush Teeth", "Ayaya", "4 Sept", "low"),
        itemMaker("Make Todo List", "Ayaya", "4 Sept", "low"),
        itemMaker("Eat Soto Noodles", "Ayaya", "4 Sept", "low"),
        itemMaker("Listen to Vergil to get Motivation", "Ayaya", "4 Sept", "low"),
      ]
    ),
    projectMaker(
      "Family",
      [
        itemMaker("Arsy", "Ayaya", "4 Sept", "low"),
        itemMaker("Meutia", "Ayaya", "21 Nov", "medium"),
        itemMaker("Khansa", "Ayaya", "8 Mar", "high")
      ]
    ),
    projectMaker(
      "Odin Project",
      [
        itemMaker("HTML"),
        itemMaker("CSS"),
        itemMaker("JavaScript")
      ]
    ),
  ]

  function getProjects() {
    return projects
  }

  function addItem(title, description, dueDate, priority) {;
    projects[currentProject].items.push(itemMaker(title, description, dueDate, priority))
  }

  function editItem(index, title, description, dueDate, priority) {
    projects[currentProject].items[index] = (itemMaker(title, description, dueDate, priority))
  }

  function removeItem(index) {
    projects[currentProject].items.splice(index, 1)
  }

  return {
    getProjects,
    getCurrentProject,
    setCurrentProject,
    addItem,
    editItem,
    removeItem,
  }
})();

export default storage;

domStuff.initialDom()