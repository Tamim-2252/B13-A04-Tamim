1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 ANS :  getElementById returns a single element by using ID.
        getElementsByClassName returns a collection of element by matching class name.
        querySelector returns a single element like getElementsById but it uses class name and only returns the first element that matches the class name.
        querySelectorAll is same as querySelector but insted of giving the first element it returns a collection of element by matching class name similler to getElementsByClassName.

2. How do you create and insert a new element into the DOM?

 ANS :  By using the document.createElement() method I can create any element.
        Then i can add content, attribute or style to the element.
        Then i need to insert the element to the parent node by using appendChild() method.

3. What is Event Bubbling? And how does it work?

 ANS :  Event Bubbling is a mechanism where an event triggered on a child element bubbles up to it's ancestor element like a bubble.
        First it triggers a element through an event like click or hover.
        Then it propagets upword like a bubble from target to document object.
        In the proses of going up if any parents element has event listiner for the same event it will triggir them too.

4. What is Event Delegation in JavaScript? Why is it useful?

 ANS :  Event Delegation is a method or design where an event listener is added to parent element inorder to manage events for it's children.
        By adding event listener to the parents it is not needed to attach event listener to all children element .
        So it is easy and more dynamic for dom manupulation.

5. What is the difference between preventDefault() and stopPropagation() methods?

 ANS :  preventDefault() is a method where it prevents the browers default action. it is used in form, check box, etc.
        stopPropagation() is a method where it stops the event going up or down through the DOM tree. it stops event propagation to parent or children elements.
