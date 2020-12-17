###  textContent Differences from innerHTML

[`Element.innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML "The Element property innerHTML gets or sets the HTML or XML markup contained within the element.")  returns HTML, as its name indicates. Sometimes people use  `innerHTML`  to retrieve or write text inside an element, but  `textContent`  has better performance because its value is not parsed as HTML. Moreover, using  `textContent`  can prevent  [XSS attacks](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting).