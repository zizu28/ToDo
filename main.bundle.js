/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
}

body,
html {
    height: 100%;
    margin: 0;
}

/* Container Styling */
.mainContainer {
    background: linear-gradient(135deg, #153677, #4e085f);
    display: grid;
    grid-template: 100px 1fr / 1fr;
}

/* Navigation Pane Styling */
.navContainer {
    grid-row: 1 / 2;
    color: white;
    font-size: 40px;
    font-weight: bold;
    box-shadow: 3px 3px 6px black;
    z-index: 1;
}

.navContainer i {
    font-size: 65px;
    margin-top: 15px;
}

.navContainer h1 {
    margin-top: 0;
    margin-left: 5px;
}

.font {
    font-size: 30px;
    margin-top: 15px;
    margin-right: 10px;
    margin-left: 5px;
}

.allTasks,
.navContainer {
    display: flex;
}

/* Content Container Containing Both The Sidebar and Content for Displaying Tasks Styling*/
.contentContainer {
    grid-row: 2 / 3;
    display: grid;
    grid-template: 1fr / 300px 1fr;
}

/* Sidebar Styling */
.sideBar {
    height: 100%;
    grid-column: 1 / 2;
    display: grid;
    grid-template: 300px 600px / 1fr;
    box-shadow: 3px 3px 6px black;
    background: rgb(146, 139, 130);
}

.barItems {
    grid-row: 1/2;
    margin: 10px;
}

.barSettings {
    grid-row: 2/3;
    margin: 10px;
}

.allTasks ~ {
    margin: 10px;
}

.allTasks:hover,
.hover {
    background-color: gray;
    border-radius: 15px;
}

.title {
    font-weight: bold;
}

.entry {
    background: rgb(146, 139, 130);
    font-size: 16px;
    color: black;
    border-top-style: none;
    border-left-style: none;
    border-right-style: none;
    outline: none;
}

/* Content Styling */
.content {
    grid-column: 2 / 3;
}

.taskInfo,
.projectTitle {
    margin: 0 auto;
    text-align: center;
}

.projectTitle {
    margin: 20px;
    padding: 10px;
    background-color: black;
    color: white;
    font-size: 32px;
    font-weight: bold;
    border-radius: 20px;
}

.reset,
.taskAdder,
.others {
    margin: 10px;
    padding: 10px;
    background-color: black;
    color: white;
    font-size: 32px;
    font-weight: bold;
    /* border-style: none; */
    border-radius: 10px;
    box-shadow: 3px 3px 6px black;
    cursor: pointer;
}

.projectEntryIcon {
    background-color: rgb(141, 204, 247);
    border-radius: 50%;
    font-size: 20px;
    padding: 10px;
}

/* Dialog design */
dialog {
    background-color: black;
    color: white;
    font-family: 'Times New Roman';
    font-size: 16px;
    font-weight: bold;
    border-style: none;
    border-radius: 10px;
    height: 300px;
}

form {
    display: grid;
    grid-template: repeat(4, 50px) 70px / 1fr;
}

.div1 {
    grid-row: 1/2;
}

.div2 {
    grid-row: 2/3;
}

.div3 {
    grid-row: 3/4;
}

.div4 {
    grid-row: 4/5;
    margin-top: 50px;
}

.sbt {
    grid-row: 5/6;
    margin: 0 auto;
    border-radius: 10px;
    border-style: none;
    background-color: white;
    color: black;
    box-shadow: 3px 3px 6px white;
    margin-top: 40px;
    font-family: 'Times New Roman';
    font-size: 16px;
    font-weight: bold;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


// Elements to dynamically create a new project in the side bar
const projectEntries = document.querySelector('.projectEntries');
const entry = document.querySelector('.entry');
const projectTitle = document.querySelector('.projectTitle');
_localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].projectsArray = JSON.parse(localStorage.getItem('projectsList')) || []

function createProject(){
    entry.addEventListener('change', (e) => {
        let container = document.createElement('div');
        let arrowIcon = document.createElement('i');
        let iconDelete = document.createElement('i');
        let outputText = document.createElement('h2');
        let inputText = e.target.value;
        outputText.textContent = inputText;
        let iconClassList = ["fa-solid", "fa-arrow-right"];
        iconClassList.forEach(ic => {
            arrowIcon.classList.add(ic);
        })
        let deleteProjectIcons = ["fa-solid", "fa-circle-xmark"];
        deleteProjectIcons.forEach(icon => {
            iconDelete.classList.add(icon);
        })
        arrowIcon.style = 'margin-top: 25px; margin-left: 10px; margin-right: 10px;';
        iconDelete.style = 'grid-column: 3/4; margin-top: 25px; margin-right: 10px; font-size: 20px;';
        container.appendChild(arrowIcon)
        container.appendChild(outputText)
        container.appendChild(iconDelete);
        container.setAttribute('value', inputText);
        container.style = 'display: grid; grid-template: 60px / 20px 1fr 30px;';
        arrowIcon.style = 'grid-column: 1/2; margin-top: 25px; margin-left: 0;';
        outputText.style = 'grid-column: 2/3; margin-left 0;';
        e.target.value = '';
        projectEntries.appendChild(container);
        projectEntries.style = 'margin-bottom: 20px;';
        hoverOverProjects();
        // iconDelete.onclick = deleteProject();

        _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].projectObject.project = inputText;
        _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].projectObject.id = _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].generateGuid();
        _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].projectObject.todo = [];
        _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].projectsArray.push(_localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].projectObject);
        localStorage.setItem('projectsList', JSON.stringify(_localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].projectsArray));
        _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].projectsArray = JSON.parse(localStorage.getItem('projectsList'));
    }) 
}

function hoverOverProjects(){
    projectEntries.addEventListener('mouseover', (e) => {
        let clickedDiv = e.target.closest('div');
        clickedDiv.classList.add('hover');
    })
    projectEntries.addEventListener('mouseout', (e) => {
        let clickedDiv = e.target.closest('div');
        clickedDiv.classList.remove('hover');
    })
}

function clickToEnableTasksCardCreationOrDeleteProject(){
    projectEntries.addEventListener('click', (e) => {
        let clickedDiv = e.target.closest('div');
        clickedDiv.addEventListener('click', (e) => {
            const clickedElement = e.target;
            if(clickedElement.classList.contains("fa-circle-xmark")){
                projectTitle.setAttribute('value', 'All tasks');
                clickedDiv.remove();
                projectTitle.textContent = projectTitle.getAttribute('value');
            }
            else{
                projectTitle.textContent = clickedDiv.getAttribute('value');
                projectTitle.setAttribute('value', clickedDiv.getAttribute('value'));
            }
        })
    })
    projectTitle.textContent = 'All Tasks';
}


// function removeProjectFromLocalStorage(){

// }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
                createProject,
                clickToEnableTasksCardCreationOrDeleteProject
                });

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectsArray = [];
const projectObject = {
    id: '',
    project: '',
    todo: []
}

const taskArray = [];
const task = {
  project: '',
  title: '',
  priority: '',
  date: '',
  description: '',
  isTaskComplete: false
}

function integrateTasksIntoProjects(){
  if(projectObject.project === task.project){
    projectObject.todo.push(task)
  }
  return projectObject;
}

function generateGuid() {
    function s4() {
      return Math.floor((1 + Math. random()) * 0x10000). toString(16). substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ projectsArray, projectObject, task, taskArray, generateGuid, integrateTasksIntoProjects });

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


let todos;

const taskAddBtn = document.querySelector('.taskAdder');
const taskInfo = document.querySelector('.taskInfo');
const mainContainer = document.querySelector('.content');
const projectTitle = document.querySelector('.projectTitle');
const dialog = document.querySelector('#taskDialog');


mainContainer.style = 'display: grid; grid-template: 100px 100px 100px 1fr / 1fr;';
taskInfo.style = 'margin-bottom: 10px;';
taskAddBtn.style = 'width: 200px; height: 60px';
const cardsContainer = document.createElement('div');
cardsContainer.style = 'display: flex; flex: 1 1 0; flex-wrap: wrap; gap: 10px;';
mainContainer.appendChild(cardsContainer);

function showTaskCards(){
    taskAddBtn.addEventListener('click', () => {
        taskInfo.style.display = 'none'; 
        mainContainer.style = 'display: grid; grid-template: 100px 100px 1fr / 1fr;';
        dialog.showModal();
        createTask();
        if(cardsContainer.childNodes.length === 0){
            taskInfo.style.display = 'block';
        }
    })
}


function createTask(){
    const card = document.createElement('div');
    const isDone = document.createElement('input');
    const title = document.createElement('p');
    const date = document.createElement('p');
    const description = document.createElement('textarea');
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    const btnDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const titleLabel = document.createElement('label');
    const dateDiv = document.createElement('div');
    const dateLabel = document.createElement('label');
    const success = document.createElement('p');
    const isDoneLabel = document.createElement('label');
    const isDoneDiv = document.createElement('div');
    const priorityText = document.createElement('p');
    const priorityLabel = document.createElement('label');
    const priorityDiv = document.createElement('div');

    description.name = 'taskDescription';
    description.disabled = true;
    isDone.type = 'checkbox';
    isDone.name = 'isTaskComplete';
    isDone.classList.add('checkbox');
    isDoneLabel.textContent = 'Is Task Complete? ';
    isDoneLabel.appendChild(isDone);
    isDoneDiv.appendChild(isDoneLabel);
    isDoneDiv.style = 'display: flex; justify-content: flex-start; align-items: center; font-family: "Times New Roman";'+ 
    'font-size: 25px; font-weight: bold;';
    editBtn.textContent = 'edit';
    editBtn.classList.add('taskAdder');
    deleteBtn.classList.add('taskAdder');
    deleteBtn.textContent = 'delete'
    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(deleteBtn);
    btnDiv.style = 'display: flex; justify-content: space-between; align-items: center;'
    card.style = 'width: 300px; height: 450px; display: grid; grid-template: 50px 50px 50px 50px 150px 100px / 1fr; border-radius: 10px;'+ 
    'box-shadow: 3px 3px 6px black; margin-left: 10px; background-color: gray; color: black;';

    const dialog = document.querySelector('#taskDialog');
    const taskForm = document.querySelector('#taskForm');
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        title.textContent = document.querySelector('#title').value;
        _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].task.title = document.querySelector('#title').value;
        date.textContent = document.querySelector('#date').value;
        _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].task.date = document.querySelector('#date').value;
        description.textContent = document.querySelector('#taskDescription').value;
        _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].task.description = document.querySelector('#taskDescription').value;
        const selectedIndex = document.querySelector('#prioritySelection').selectedIndex;
        _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].task.parent = projectTitle.textContent;
        if(selectedIndex >= 0){
            const selectedOption = document.querySelector('#prioritySelection').options[selectedIndex];
            priorityText.textContent = selectedOption.value;
            _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].task.priority = selectedOption.value;
        }
        dialog.close();
        _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].taskArray.push(_localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].task);
        localStorage.setItem('task', JSON.stringify(_localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].taskArray));
        _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].taskArray = JSON.parse(localStorage.getItem('task'));
        isDone.addEventListener('click', (e) => {
            success.style = 'text-align: center; font-family: "Times New Roman"; font-size: 25px; font-weight: bold;';
            success.textContent = 'Task Completed!!!'
            _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].task.isTaskComplete = e.target.checked ? true : false;
            if(e.target.checked){
                title.style.textDecoration = 'line-through';
                date.style.textDecoration = 'line-through';
                description.style.textDecoration = 'line-through';
                btnDiv.removeChild(editBtn);
                btnDiv.removeChild(deleteBtn)
                btnDiv.appendChild(success);
            }
            else {
                title.style.textDecoration = 'none';
                date.style.textDecoration = 'none';
                description.style.textDecoration = 'none';
                btnDiv.removeChild(success);
                btnDiv.appendChild(editBtn);
                btnDiv.appendChild(deleteBtn);
            }
        })
        // dbase.taskArray.push(dbase.task);
        // localStorage.setItem('task', JSON.stringify(dbase.taskArray));
        // dbase.taskArray = JSON.parse(localStorage.getItem('task'));
    })
    
    title.style = 'text-align: center; font-family: "Times New Roman"; font-size: 25px; font-weight: bold;';
    title.id = 'title';
    titleLabel.htmlFor = 'title';
    titleLabel.textContent = 'Title: ';
    titleDiv.style = 'display: flex; justify-content: flex-start; align-items: center; font-family: "Times New Roman";'+ 
    'font-size: 25px; font-weight: bold;';
    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(title);

    date.style = 'text-align: center; font-family: "Times New Roman"; font-size: 25px; font-weight: bold;';
    date.id = 'date';
    dateLabel.htmlFor = 'date';
    dateLabel.textContent = 'Date: ';
    dateDiv.style = 'display: flex; justify-content: flex-start; align-items: center; font-family: "Times New Roman";'+ 
    'font-size: 25px; font-weight: bold;';
    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(date);

    priorityText.style = 'text-align: center; font-family: "Times New Roman"; font-size: 25px; font-weight: bold;';
    priorityText.id = 'date';
    priorityLabel.htmlFor = 'date';
    priorityLabel.textContent = 'Priority: ';
    priorityDiv.style = 'display: flex; justify-content: flex-start; align-items: center; font-family: "Times New Roman";'+ 
    'font-size: 25px; font-weight: bold;';
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(priorityText);

    description.style = 'font-family: "Times New Roman"; font-size: 30px; font-weight: bold;';
    card.appendChild(isDoneDiv);
    card.appendChild(titleDiv);
    card.appendChild(dateDiv);
    card.appendChild(priorityDiv);
    card.appendChild(description);
    card.appendChild(btnDiv);
    card.classList.add('edit');
    card.classList.add('delete');
    cardsContainer.appendChild(card);

    deleteBtn.addEventListener('click', (e) => {
        cardsContainer.removeChild(card);
    })

    editBtn.addEventListener('click', () => {
        description.disabled = false;
        dialog.showModal();
        description.disabled = true;
    })
}
  
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({showTaskCards, todos});

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _projectFns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _taskCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);



// import tasks from './cards'

const barItems = document.querySelector('.barItems');
const projectTitle = document.querySelector('.projectTitle');
const projectEntryIcon = document.querySelector('.projectEntryIcon');
// const taskAdder = document.querySelector('.taskAdder');


// Modify this code after local storage manipulation**************
barItems.addEventListener('click', (e) => {
    const clickedElement = e.target.closest('div');
    if(clickedElement){
        projectTitle.textContent = clickedElement.getAttribute('value');
    }
})

projectEntryIcon.onclick = _projectFns__WEBPACK_IMPORTED_MODULE_1__["default"].createProject();
_projectFns__WEBPACK_IMPORTED_MODULE_1__["default"].clickToEnableTasksCardCreationOrDeleteProject();
_taskCards__WEBPACK_IMPORTED_MODULE_2__["default"].showTaskCards();
// tasks.myCardLibrary;
// tasks.displayMyTasks();
})();

/******/ })()
;