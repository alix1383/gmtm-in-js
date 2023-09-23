import axios from 'axios'
import { isObject } from 'lodash'

class SteamApi {
  constructor (apiKey) {
    this.axios = axios.create({
      baseURL: `https://api.allorigins.win/raw?url=${encodeURIComponent(
                'https://api.steampowered.com/IGameServersService/'
            )}`,

      timeout: 5000,
      responseType: 'json',
      responseEncoding: 'utf8',
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    })
    this.apiKey = apiKey
  }

  async checkToken () {
    try {
      const response = await this.axios.get(
                `${encodeURI(`GetAccountList/v1/?key=${this.apiKey}`)}`
      )
      const data = response.data.response

      //! this check if (is_banned === true) or failed to login return false
      if (isObject(data) && data.is_banned === false) {
        return true
      } else {
        return false
      }
    } catch (error) {
      console.error(error)
      return false
    }
  }

  async getServersList () {
    try {
      const response = await this.axios.get(
                `${encodeURI(`GetAccountList/v1/?key=${this.apiKey}`)}`
      )
      const listData = response.data.response.servers
      return listData
    } catch (error) {
      console.error(error)
      return false
    }
  }

  //! ignore error
  async generateNewToken (memo, appId) {
    try {
      //! sadly i can`t use axios for this request :(
      await fetch(
                `${`https://api.steampowered.com/IGameServersService/CreateAccount/v1/?key=${this.apiKey}&appid=${appId}&memo=${memo}`}`,
                { method: 'POST' }
      )
    } catch (error) {
      console.log('ignore error')
    }
  }
}

export { SteamApi }
