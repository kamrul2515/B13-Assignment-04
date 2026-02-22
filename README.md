1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById()
Selects one element unique id in html-5. It returns a single element.

getElementsByClassName()
Selects elements are same name classs in html-5. It returns a live HTMLCollection.

querySelector()
This selector need the 1sr element that matches a CSS selector.

querySelectorAll()
This selector need all elements that match a CSS selector and returns a NodeList.


2. How do you create and insert a new element into the DOM?

First, create the element using createElement(). Then add content to the element, and finally insert it into the DOM using methods like appendChild().


3. What is Event Bubbling? And how does it work?

This is a function there click one element, event Bubbling means when an event happens on a child element, it also moves up to its parent elements.


4. What is Event Delegation in JavaScript? Why is it useful?

This event is very usefull event because it performance is good. Event Delegation is a technique where you add an event listener to a parent element instead of adding it to multiple child elements.

It works using event bubbling.


5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault()
It stops the default behavior of an element. For example, stopping a form from submitting.

stopPropagation()
It stops the event from moving to parent elements.
