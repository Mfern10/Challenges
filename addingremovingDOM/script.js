function activity() {
  // 1. Anchor code here
  let anchor = document.querySelector("a");
  anchor.textContent = "DOM Manipulation";

  // 2. List Item code here
  let ul = document.querySelector("ul");
  let li3 = ul.children[3];
  ul.removeChild(li3);

  // 3. Form code here
  let form = document.querySelector('#page-form');
  let lbl = document.createElement("label");
  lbl.textContent = 'Name:';
  let input = document.querySelector('#page-form input')
  form.insertBefore(lbl, input)



  // 4. Paragraph code here
  let question = document.querySelector('#question')
  let answer = document.createElement('p')
  answer.textContent = '42'
  question.appendChild(answer)
}

// Don't remove this
activity()
