import {
    removeSpaceFromString,
    replaceSpaceWithDashString,
    getApiKeyFromDB,
} from "../functions/misc";
import { hideTabelDataComponent, showTabelDataComponent } from "./tableData";
import { SteamApi } from "../modules/steamApi";

const newTokenDiv = document.getElementById("newToken");

function showNewTokenForm() {
    newTokenDiv.removeAttribute("hidden", "");
    hideTabelDataComponent();

    //! Generate New Token Submit Event

    newTokenDiv
        .querySelector("a")
        .addEventListener("click", generateNewTokenAction);
}

function hideNewTokenForm() {
    newTokenDiv.setAttribute("hidden", "");
    showTabelDataComponent();
}
async function generateNewTokenAction() {
    //! Define Input Elements
    const memoInput = document.getElementById("memo").value;
    const gameId = document.getElementById("gameId").value;
    const warmTxt = document.getElementById("selectText");

    //! remove space from Memo Input
    const filtredSpaceMemoInput = removeSpaceFromString(memoInput);

    //! check inputs
    if (filtredSpaceMemoInput === "") {
        warmTxt.innerHTML = "Fill Memo Input.";
        return;
    }
    if (gameId === "none") {
        warmTxt.innerHTML = "Select Game.";
        return;
    }

    //! replace space with "-"
    const filtredDashMemoInput = replaceSpaceWithDashString(memoInput);

    //! get Api Key From DB
    const webApiKey = getApiKeyFromDB();

    //! call api
    const api = new SteamApi(webApiKey);
    await api.generateNewToken(filtredDashMemoInput, Number(gameId));

    //! reload Page
    location.reload();
}

export { generateNewTokenAction, showNewTokenForm, hideNewTokenForm };
