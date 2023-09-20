// import { showLoginComponent } from "../components/form";
// import { hideTabelData } from "../components/tableData";
function isLoggedin() {
    const token = getTokenFromDB();
    if (token && token !== null && token !== "") {
        return true;
    } else {
        return false;
    }
}


// function removeBtn() {
//     const logoutBtn = document.getElementById("logoutBtn");
//     logoutBtn.addEventListener("click", () => {
//         removeTokenFromDB();
//         hideTabelData();
//         logoutBtn.setAttribute("hidden", "");
//         showLoginComponent();
//     });
// }

function setTokenToDB(apiKey) {
    sessionStorage.setItem("apiKey", apiKey);
}

function getTokenFromDB() {
    return sessionStorage.getItem("apiKey");
}
function removeTokenFromDB() {
    sessionStorage.removeItem("apiKey");
}

export { isLoggedin, setTokenToDB, getTokenFromDB, removeTokenFromDB };
