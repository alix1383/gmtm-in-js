function createTabelRow(memo, appId, token, status) {
    //! create Html Elements
    const mainNode = document.querySelector("#tableData > table > tbody");
    const tr = document.createElement("tr");
    const memoTd = document.createElement("td");
    const appIdTd = document.createElement("td");
    const tokenTd = document.createElement("td");
    const statusTd = document.createElement("td");
    const btnTd = document.createElement("td");
    const a = document.createElement("a");

    //! set class
    memoTd.classList = "whitespace-nowrap pl-4 py-2 font-medium text-gray-900";

    appIdTd.classList = "whitespace-nowrap px-4 py-2";
    tokenTd.classList = "whitespace-nowrap px-4 py-2";
    statusTd.classList = "whitespace-nowrap px-4 py-2";

    btnTd.classList = "whitespace-nowrap px-4 py-2";

    a.classList =
        "inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700";
    //! set Data
    memoTd.innerHTML = memo;
    appIdTd.innerHTML = appId;
    tokenTd.innerHTML = token;
    statusTd.innerHTML = status ? "Expired" : "Active";

    a.innerHTML = "View";

    //! Append Childs
    btnTd.appendChild(a);

    tr.appendChild(memoTd);
    tr.appendChild(appIdTd);
    tr.appendChild(tokenTd);
    tr.appendChild(statusTd);
    tr.appendChild(btnTd);
    //! Append to main Node
    mainNode.appendChild(tr);
}

function showTabelData(data) {
    document.getElementById("tableData").removeAttribute("hidden", "");
    console.log(data);
    for (const key in data) {
        //! copy object to new variable to better access
        let newObj = data[key];
        //! cerate Tabel Rows
        createTabelRow(
            newObj.memo,
            newObj.appid,
            newObj.login_token,
            newObj.is_expired
        );
    }
}
function hideTabelData() {
    document.getElementById("tableData").setAttribute("hidden", "");
}
export { createTabelRow, showTabelData, hideTabelData };
