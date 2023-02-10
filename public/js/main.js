console.log(baseUrl) //base address loaded form contstants.js file accessed through html file

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const degree = document.querySelector('#degree')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    degree.textContent = ''

    fetch(`${baseUrl}/weather?address=${search.value}`)
        .then((response) => {
            response.json()
                .then((data) => {
                    if (data.error) {
                        console.log(data.error)
                        messageOne.textContent = data.error
                    } else {
                        console.log(data)
                        degree.textContent = data.temperature+'°'
                        messageOne.textContent = data.location
                        messageTwo.textContent = data.weather
                    }
                })
        })
        .catch((error) => {
            console.log(error, 'Unxexpected Error')
        })

})
