// 1. What does doctype do?
// answer: !DOCTYPE is a tag. For valid html we need to use it at the start of html document(1'st string). <!DOCTYPE html>.

// 2. How do you serve a page with content in multiple languages?
// answer: We need to use "lang" attribute in html tag. If we have site with Russian language and want to translate it in English. We need to use "lang="en"", browser will translate it into English. If we don't need auto translate, we could delete this attribute, then browser will not translate our page.

// 3. What kind of things must you be wary of when designing or developing for multilingual sites?
// answer: If we have library. We don't need to have broser's auto translate.

// 4. What are data- attributes good for?
// answer: An auxiliary attribute that allows you to refer to an element or its data.

// 5. Describe the difference between a cookie, sessionStorage and localStorage.
// answer: 1) Cookie is a data fragment. Server can send this data to user, and user stores it. There are some user's info, tokens and data in this fragments. 2) Session storage is a store. There are some tokens, date data in this store. In this type of storage we store data during seession (until browser is open). 3) LocalStorage the same storage, but data always stores. We can delete info from storage by ourselfs.

// 6. Describe the difference between <script>, <script async> and <script defer>.
// answer: <script> - is a section for JavaScript code. This section depends on position in html document. After <script> section we couldn't place html, which depends on JavaScript code. The solving of this problem is replacing <string> in the end of the body, but at this case people with bad network will have delays. We have defer and async. These scripts run in the background. Defer depends on the place in body. Async depends on speed of dowloading.

//       |      The order of execution       |     DOMContentLoaded
// async | No order of execution.            | Doesn't matter. Can dowload and execute 
//       | First downloaded script, starts   | before page loading. It happens, when
//       | first.                            | scripts are so little and document is big.
// defe  | Has the order of execution. The   | Executes after document downloaded and 
//       | order is how is it situated in the| processed, before DOMContentLoaded.
//       | document.                         |

// 7. Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?
// answer: Because it is the best place for them. In this case at the begining you will initicate css style, after browser will render html with styles. With fast internet connection it is not matter, but with slow speed it is(at the begining you will see elements without css).

// 8. Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.
// answer: Srcset is a attribute for adaptive images.