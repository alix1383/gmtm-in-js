import { showLoginComponent } from "./components/loginForm";
import { isLoggedin, showList, removeTokenFromDB } from "./functions/misc";
import { hideNewTokenForm, showNewTokenForm } from "./components/newToken";

document.addEventListener("DOMContentLoaded", app);

function app() {
    //! logout Button On Click event
    document.getElementById("logoutButton").addEventListener("click", () => {
        removeTokenFromDB();
        location.reload();
    });

    //! New Token Button on click event
    document
        .getElementById("createNewTokenButton")
        .addEventListener("click", (e) => {
            const thisElement = e.target;
            if (thisElement.getAttribute("status") === "serverList") {
                //! Change Button Text
                thisElement.innerText = "Generate New Token";
                //! //! change Button attribute
                thisElement.setAttribute("status", "genNewToken");
                //! hide login form
                hideNewTokenForm();
            } else {
                //! Change Button Text
                thisElement.innerText = "Token List";
                //! change Button attribute
                thisElement.setAttribute("status", "serverList");
                //! show login form
                showNewTokenForm();
            }
        });

    //! check client logged in or Not
    if (isLoggedin()) {
        //! Show Token List
        showList();
    } else {
        //! show login Form
        showLoginComponent();
    }
}
