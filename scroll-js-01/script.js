// https://youtu.be/rUg8bBWteUw?list=PL28O_hEAqjAvgaJOpfkmnOPHarc546QOt

const scrollLinks = document.querySelectorAll('.js-link')

scrollLinks.forEach(link => {
    link.addEventListener('click', event => {
        const id = link.getAttribute('href')
        const element = document.querySelector(id)
        const position = element.offsetTop - 69

        window.scrollTo({
            top: position,
            behavior: "smooth"
        })

        event.preventDefault()
    })
})