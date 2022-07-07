import 'normalize.css'
import "./style.css"
import "./banner.css"
import "./content.css"
import "./popup.css"
import banner from "./banner.js"
import content from "./content.js"
import favicon from "./img/favicon.jpg"
import { add, differenceInCalendarDays } from 'date-fns'

const domStuff = (() => {
  const head = document.querySelector("head")
  const body = document.querySelector("body");

  function initialDom() {
    storage.fetchProjects()

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

    <div class="banner"></div>
    <div class="content"></div>
  
    `;

    head.insertAdjacentHTML("beforeend", `<link rel="icon" href=${favicon}>`)
    body.innerHTML = html;
    banner.displayBanner();
    content.displayContent();
  }
    
  return {
    initialDom,
  }
})();

const itemMaker = (title, description=null, date=null, priority=null, project=null, check) => {
  let checklist = null
  if (check === undefined) {
    checklist = false
  } else {
    checklist = check
  }

  function getChecklist() {
    return checklist
  }

  function toggleChecklist() {
    checklist = !checklist
    console.log(checklist)
    storage.saveProjects()
  }

  return {
    title,
    description,
    dueDate: new Date(date),
    priority,
    project,
    getChecklist,
    toggleChecklist,
  }
}

const projectMaker = (name, items = []) => {
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
  let currentProject = 0;

  function getCurrentProjectIndex() {
    return currentProject
  }

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
        itemMaker("Brush Teeth", "Ayaya", "2022-07-10", "high", "Home"),
        itemMaker("Make Todo List", "Ayaya", "2022-10-05", "low", "Home"),
        itemMaker("Eat Soto Noodles", "Ayaya", "2022-11-06", "medium", "Home"),
        itemMaker("Listen to Vergil to get Motivation", "Ayaya", "2022-12-07", "low", "Home"),
      ]
    ),
    projectMaker(
      "Family",
      [
        itemMaker("Ahmad Arsy", "Ayaya", "2022-07-11", "low", "Family"),
        itemMaker("Meutia Maharani", "Ayaya", "2004-11-21", "medium", "Family"),
        itemMaker("Khansa Izzati", "Ayaya", "2008-03-08", "high", "Family")
      ]
    ),
    projectMaker(
      "Odin Project",
      [
        itemMaker("HTML", "The Skeleton of a Website", "2022-02-15", "low", "Odin Project"),
        itemMaker("CSS", "The Skin of a Website", "2022-03-01", "medium", "Odin Project"),
        itemMaker("JavaScript", "The Organs of a Website", "2022-04-22", "high", "Odin Project")
      ]
    ),
    projectMaker(
      "Physicist",
      [
        itemMaker("Albert Einstein", "The Father of Relativity", "1879-03-14", "high", "Physicist"),
        itemMaker("Max Planck", "The Father of Quantum Mechanics", "1858-04-23", "medium", "Physicist"),
        itemMaker("Isaac Newton", "The Father of Classical Mechanics and Optics", "1643-01-04", "high", "Physicist")
      ]
    ),
  ]

  function getProjects() {
    return projects
  }

  function addProject(projectName) {
    projects.push(projectMaker(projectName))
    saveProjects()
  }

  function addItem(title, description, dueDate, priority, project) {;
    projects[currentProject].items.push(itemMaker(title, description, dueDate, priority, project))
    saveProjects()
  }

  function editItem(index, title, description, dueDate, priority, itemProject) {
    for (let i of projects) {
      if (i.name === itemProject) {
        i.items[index] = itemMaker(title, description, dueDate, priority, itemProject)
      }
    }
    saveProjects()
  }

  function removeItem(index, itemProject) {
    for (let i of projects) {
      if (i.name === itemProject) {
        i.items.splice(index, 1)
      }
    }
    saveProjects()
  }

  function saveProjects() {
    localStorage.setItem('projects', processor.objectToList())
  }

  function fetchProjects() {
    if (localStorage.getItem('projects') === null) {
      saveProjects()
    } else {
      projects = processor.listToObject()
    }
  }

  return {
    getProjects,
    addProject,
    getCurrentProjectIndex,
    getCurrentProject,
    setCurrentProject,
    addItem,
    editItem,
    removeItem,
    saveProjects,
    fetchProjects,
  }
})();

const processor = (() => {
  function getToday() {
    let todayItems = []
  
    for (let project of storage.getProjects()) {
      for (let [index, item] of project.items.entries()) {
        if (differenceInCalendarDays(new Date(), item.dueDate) === 0) {
          todayItems.push([index, item])
        }
      }
    }
  
    let today = projectMaker("Today", todayItems)
    return today
  }

  function getWeek() {
    let weekItems = []
  
    for (let project of storage.getProjects()) {
      for (let [index, item] of project.items.entries()) {
        if (differenceInCalendarDays(add(new Date(), { days: 7 }), item.dueDate) < 7 && differenceInCalendarDays(add(new Date(), { days: 7 }), item.dueDate) > 1) {
          weekItems.push([index, item])
        }
      }
    }
  
    let week = projectMaker("Week", weekItems)
    return week
  }

  function getProject() {
    let project = storage.getCurrentProject()

    if (storage.getCurrentProjectIndex() === "-1") {
      project = processor.getToday()
    } else if (storage.getCurrentProjectIndex() === "-2") {
      project = processor.getWeek()
    }

    return project
  }

  function getSameProject(itemProject) {
    for (let i of storage.getProjects()) {
      if (i.name === itemProject) {
        return i
      }
    }
  }

  function objectToList() {
    let list = []

    for (let project of storage.getProjects()) {
      let childList = [project.name]
      let siblingList = []
      for (let item of project.items) {
        let grandChildList = []
        grandChildList.push(item.title, item.description, item.dueDate.getTime(), item.priority, item.project, item.getChecklist())
        siblingList.push(grandChildList)
      }
      childList.push(siblingList)
      list.push(childList)
    }
    return JSON.stringify(list)
  }

  function listToObject() {
    let list = []
    for (let project of JSON.parse(localStorage.getItem("projects"))) {
      let childList = []
      for (let item of project[1]) {
        childList.push(itemMaker(item[0], item[1], item[2], item[3], item[4], item[5]))
      }
      list.push(projectMaker(project[0], childList))
    }
    return list
  }

  return {
    getToday,
    getWeek,
    getProject,
    getSameProject,
    objectToList,
    listToObject,
  }
})();

export { storage, processor };

domStuff.initialDom()
console.log(processor.objectToList())