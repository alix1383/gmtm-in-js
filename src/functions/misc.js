import { SteamApi } from "../modules/steamApi";
import { renderTabelDataComponent } from "../components/tableData";

function isLoggedin() {
    const token = getApiKeyFromDB();
    if (token && token !== null && token !== "") {
        return true;
    } else {
        return false;
    }
}

function removeSpaceFromString(value) {
    return value.split(" ").join("");
}

function replaceSpaceWithDashString(value) {
    return value.split(" ").join("-");
}

function clearInputValue() {
    document.getElementById("apiKeyFrom").value = null;
}

function setApiKeyToDB(apiKey) {
    sessionStorage.setItem("apiKey", apiKey);
}

function getApiKeyFromDB() {
    return sessionStorage.getItem("apiKey");
}
function removeTokenFromDB() {
    sessionStorage.removeItem("apiKey");
}

async function checkApiKeyIsOky(value) {
    return await new SteamApi(value).checkToken();
}

function getTokenList(apiKey) {
    const api = new SteamApi(apiKey);
    return api.getServersList();
}

async function showList() {
    //! Get Token From DB
    const token = getApiKeyFromDB();

    //! then call the api and revice token list
    const arrayList = await getTokenList(token);

    //! convert array to html element and show them
    renderTabelDataComponent(arrayList);

    //! Show Logout & Generate Token Button in header
    document.getElementById("logoutButton").style.display = "";
    document.getElementById("createNewTokenButton").style.display = "";
}

export {
    clearInputValue,
    isLoggedin,
    setApiKeyToDB,
    getApiKeyFromDB,
    removeTokenFromDB,
    removeSpaceFromString,
    replaceSpaceWithDashString,
    getTokenList,
    showList,
    checkApiKeyIsOky,
};
