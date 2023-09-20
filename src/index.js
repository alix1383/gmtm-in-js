const apiKey = "48C492C360B333B72443EAF98303ADFB";
import { SteamApi } from "./modules/steamApi";
const api = new SteamApi(apiKey);

console.log(await api.getServersList());

// console.log(await api.generateNewToken("test123", 730));
//?

// import { SteamApi } from "./modules/steamApi";
// import { showTabelData, hideTabelData } from "./components/tableData";
// import {
//     getTokenFromDB,
//     isLoggedin,
//     removeTokenFromDB,
// } from "./functions/misc";
// import { showLoginComponent } from "./components/form";
// async function main() {
//     const logoutButton = document.getElementById("logoutButton");

//     logoutButton.addEventListener("click", () => {
//         removeTokenFromDB();
//         hideTabelData();
//         logoutButton.style.display = "none";
//         // logoutBtn.st("hidden", "");
//         showLoginComponent();
//     });

//     if (isLoggedin()) {
//         const api = new SteamApi(getTokenFromDB());
//         const serverList = await api.getServersList();
//         showTabelData(serverList);
//         //! show Logout button
//         logoutButton.style.display = "";
//     } else {
//         showLoginComponent();
//     }
// }

// document.addEventListener("DOMContentLoaded", main);
