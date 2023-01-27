const $ = document


const buttonTab = $.querySelector('.tab-btn')
const tabButton = $.querySelectorAll('.tab-button')
const contents = $.querySelectorAll('.content')
   //event
buttonTab.addEventListener('click', event => {
    const mainContentId = event.target.dataset.id
    const mainContent = $.querySelector(`#${mainContentId}`)

    tabButton.forEach(btn => btn.classList.remove('active'))
    event.target.classList.add('active')

    contents.forEach(content => content.classList.remove('active'))
    mainContent.classList.add('active')
})
