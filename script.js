const name = document.getElementById('firstname')
const lastname= document.getElementById('lastname')
const email = document.getElementById('email')
const countrycode = document.getElementById('countrycode')
const telephonenumber = document.getElementById('telephonenumber')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (firstname.value === '' || firstname.value == null) {
      messages.push('First name is required')
    }
    if (firstname.value.length >= 20) {
        messages.push('First name must be less than 20 characters')
      }
      if (lastname.value === '' || lastname.value == null) {
        messages.push('Last name is required')
      }
      if (lastname.value.length >= 20) {
          messages.push( 'Last name must be less than 20 characters')
        }
    if (countrycode.value.length >= 5) {
        messages.push('Country code must be less than 5 characters')
      }
      if (telephonenumber.value.length >= 20) {
        messages.push( 'Telephone number  must be less than 20 characters')
      }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
   
})