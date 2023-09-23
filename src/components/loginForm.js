import {
  setApiKeyToDB,
  showList,
  removeSpaceFromString,
  checkApiKeyIsOky
} from '../functions/misc'

//! Defind Elements
const form = document.getElementById('loginForm')

/**
 * when user submit loggin button this func run =>
 * 1st get input value
 * 2nd remove space from value and check api key
 * 3rd if check passed rander token list else show error
 */
function showLoginComponent () {
  //! Defind Elements
  const submibtLoginFormButton = form.querySelector('a')

  //! remove hidden attribut form element
  form.removeAttribute('hidden', '')

  submibtLoginFormButton.addEventListener('click', async (e) => {
    //! prevent Events
    e.preventDefault()

    //! this line get token input text then remove spaces
    const inputValue = removeSpaceFromString(
      form.querySelector('input').value
    )

    //! check input not empty
    if (inputValue && inputValue !== '') {
      //! Check APi Key is Oky
      if (checkApiKeyIsOky()) {
        //! if Api Key is oky. DO =>
        //! save ApiKey to DB
        setApiKeyToDB(inputValue)

        //! Show Token List
        showList()

        //! hide Login Component
        hideLoginComponent()
      } else {
        //! show error message if token have issuse
        form.querySelector('p').innerHTML =
                    'Your Token Is Wrong or Banned'
      }
    }
  })
}

function hideLoginComponent () {
  //! remove hidden attribute login form
  form.setAttribute('hidden', '')
}

export { hideLoginComponent, showLoginComponent }
