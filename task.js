const addElement = (root, element, label) => {
  let selection = document.getElementById(root);
  let elem = document.createElement(element);
  let content = document.createTextNode(label);
  elem.appendChild(content);
  selection.appendChild(elem);
}

addElement("container","div","list element");
addElement("container","li","first");
addElement("container","div","div element");
addElement("container","div","second");
addElement("container","div","button");
addElement("container","button","first");
