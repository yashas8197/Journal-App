const entriesList = document.querySelector('#entriesList')
document.querySelector('#journalForm').addEventListener('submit', saveJournal)

function saveJournal(e) {
  const title = document.querySelector('#title').value
  const content = document.querySelector('#content').value
  const tags = document.querySelector('#tags').value

  const journal = {
    title: title,
    content: content,
    tags: tags
  }

  if (localStorage.getItem('journals') === null) {
    journals = []
    journals.push(journal)
    localStorage.setItem('journals', JSON.stringify(journals))
  } else {
    let journals = JSON.parse(localStorage.getItem('journals'))
    journals.push(journal)
    localStorage.setItem('journals', JSON.stringify(journals))
  }
  fetchJournals()
  e.preventDefault()
}

function deleteBtn(index) {
  let journals = JSON.parse(localStorage.getItem('journals'))

  journals.splice(index, 1)
  localStorage.setItem('journals', JSON.stringify(journals))
  fetchJournals()
}

function fetchJournals() {
  let journals = JSON.parse(localStorage.getItem('journals'))

  entriesList.innerHTML = " "
  for (let i = 0; i < journals.length; i++) {
    entriesList.innerHTML += `
      <li class="list-group-item">
        <h3>${journals[i].title}</h3>
        <p>${journals[i].content}</p>
        <p>${journals[i].tags}</p>
        <button class="btn btn-danger" onClick='deleteBtn(${i})'>DELETE</button>
      </li>
    `

  }



}
