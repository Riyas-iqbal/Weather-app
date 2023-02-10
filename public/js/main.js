console.log(baseUrl) //base address loaded form contstants.js file accessed through html file

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
console.log(weatherForm)
console.log(search)


weatherForm.addEventListener('submit', (e) => {
    console.log('hry');
    e.preventDefault()

    fetch(`${baseUrl}/weather?address=${search.value}`)
    .then((response) => {
        response.json()
            .then((data) => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    console.log(data)
                }
            })
    })
    .catch((error)=>{
        console.log(error,'Unxexpected Error')
    })

})
