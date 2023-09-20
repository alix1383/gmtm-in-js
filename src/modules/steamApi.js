import axios from "axios";
import { isObject } from "lodash";

class SteamApi {
    constructor(apiKey) {
        this.axios = axios.create({
            baseURL:
                "https://ali-x.ir//proxy.php?csurl=https://api.steampowered.com/IGameServersService/",
            // params: {
            //     key: apiKey,
            // },
            timeout: 5000,
            responseType: "json",
            responseEncoding: "utf8",
            // headers: {
            //     "Access-Control-Allow-Origin": "*",
            //     "Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS",
            //     "Access-Control-Allow-Headers":
            //         "origin, x-requested-with, content-type",
            // },
        });
        this.apiKey = apiKey;
    }
    async checkToken() {
        try {
            const response = await this.axios.get(
                `GetAccountList/v1/?key=${this.apiKey}`
            );
            const data = response.data.response;

            //! this check if (is_banned === true) or failed to login return false
            if (isObject(data) && data.is_banned === false) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async getServersList() {
        try {
            const response = await this.axios.get(
                `GetAccountList/v1/?key=${this.apiKey}`
            );
            const listData = response.data.response.servers;
            return listData;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async generateNewToken(memo, appId) {
        await this.axios
            .post(`CreateAccount/v1/`, {
                key: this.apiKey,
                appid: appId,
                memo: memo,
            })
            .then((r) => {
                console.log(r.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }
}

export { SteamApi };
