//! Defind Elements
const table = document.getElementById('tableData')
const tBody = table.querySelector('tbody')

/**
 * this func render array to html tag and append them to main node
 * @param {String} memo
 * @param {Number} appId
 * @param {String} token
 * @param {Boolean} status
 */
function createTabelRow (memo, appId, token, status) {
  //! create Html Elements
  const mainNode = tBody
  const tr = document.createElement('tr')
  const memoTd = document.createElement('td')
  const appIdTd = document.createElement('td')
  const tokenTd = document.createElement('td')
  const statusTd = document.createElement('td')
  const btnTd = document.createElement('td')
  const aRremove = document.createElement('a')

  //! set class
  memoTd.classList = 'whitespace-nowrap pl-4 py-2 font-medium text-gray-900'

  appIdTd.classList = 'whitespace-nowrap px-4 py-2'
  tokenTd.classList = 'whitespace-nowrap px-4 py-2'
  statusTd.classList = 'whitespace-nowrap px-4 py-2'

  btnTd.classList = 'whitespace-nowrap px-4 py-2'

  aRremove.classList =
        'inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700'
  //! set Data
  memoTd.innerHTML = memo
  appIdTd.innerHTML = appId
  tokenTd.innerHTML = token
  statusTd.innerHTML = status ? 'Expired' : 'Active'

  aRremove.innerHTML = 'Remove'

  //! Append Childs
  btnTd.appendChild(aRremove)

  tr.appendChild(memoTd)
  tr.appendChild(appIdTd)
  tr.appendChild(tokenTd)
  tr.appendChild(statusTd)
  tr.appendChild(btnTd)
  //! Append to main Node
  mainNode.appendChild(tr)
}

/**
 * remove previous list and use loop to run createTabelRow()
 * @param {Array} data
 */
function renderTabelDataComponent (data) {
  //! UnHide tabel tag
  table.removeAttribute('hidden', '')

  //! clear previous List
  tBody.innerHTML = null

  for (const key in data) {
    //! copy object to new variable to better access
    const newObj = data[key]
    //! cerate Tabel Rows
    createTabelRow(
      newObj.memo,
      newObj.appid,
      newObj.login_token,
      newObj.is_expired
    )
  }
}

function hideTabelDataComponent () {
  table.setAttribute('hidden', '')
}

function showTabelDataComponent () {
  table.removeAttribute('hidden', '')
}

export {
  renderTabelDataComponent,
  hideTabelDataComponent,
  showTabelDataComponent
}
