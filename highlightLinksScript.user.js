'use strict';
// ==UserScript==
// @name         Highlight Links
// @namespace    http://tampermonkey.net/
// @version      0.1.3
// @description  highlights links in SC threads
// @author       AndreyK
// @match        https://isc.devexpress.com/Thread/WorkplaceDetails*
// @grant        none
// ==/UserScript==
function highLight() {
  for (let i = 0; i < document.links.length; i++) {
    let link = document.links[i];
    // console.dir(link);
    // mce-edit-area
    if (link.classList.length == 0) {
      let hasParent = hasSomeParentTheClass(link, 'item-html');
      if (hasParent)
        document.links[i].style.backgroundColor = '#ffffcc';
    };
  };
};
function hasSomeParentTheClass(element, classname) {
  if (element.className && element.className.split(' ').indexOf(classname) >= 0) return true;
  return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
}
highLight();
