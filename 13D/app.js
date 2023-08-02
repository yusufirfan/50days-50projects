const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 10);

        randomSelect()
    }
})

function createTags(inp){
    const tags = inp.split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim())
    
    tagsEl.innerHTML =''
    tags.forEach(t => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = t
        tagsEl.appendChild(tagEl)
    });
}

function randomSelect(){
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        selectTag(randomTag)

        setTimeout(() => {
            unSelectTag(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag() 

            selectTag(randomTag)
        }, 100);
    }, times * 100);
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function selectTag(tag){
    tag.classList.add('selected')
}

function unSelectTag(tag){
    tag.classList.remove('selected')
}