import { SteamApi } from "../modules/steamApi";
import { setTokenToDB } from "../functions/misc";
import { showTabelData } from "./tableData";
function showLoginComponent() {
    const form = document.getElementById("loginForm");
    const btn = form.querySelector("a");
    //! remove hidden attribut form element
    form.removeAttribute("hidden", "");

    btn.addEventListener("click", async (e) => {
        //! prevent Events
        e.preventDefault();
        //! this line get token input text then remove spaces
        let inputValue = form
            .querySelector("input")
            .value.split(" ")
            .join("");
        //! check input not empty
        if (inputValue && inputValue !== "") {
            //! call api class
            const api = new SteamApi(inputValue);
            //! check token not banned and its right
            if (await api.checkToken()) {
                //! save token to DB then hide login form
                setTokenToDB(inputValue);
                hideLoginComponent();
                const api = new SteamApi(inputValue);
                const serverList = await api.getServersList();
                showTabelData(serverList);
                //! show Logout Buttom
                document.getElementById("logoutButton").style.display = "";
                //! empty input value
                inputValue = null;
            } else {
                //! show error message if token have issuse
                form.querySelector("p").innerHTML =
                    "Your Token Is Wrong or Banned";
            }
        }
    });
}

function hideLoginComponent() {
    //! give hidden attribute to login form
    document.getElementById("loginForm").setAttribute("hidden", "");
}

export { hideLoginComponent, showLoginComponent };
