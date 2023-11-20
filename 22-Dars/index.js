const elList = document.querySelector(".card__wraper")
const elTemplate = document.querySelector(".templet").content


function renderArr(arr, List) {
    arr.map(item => {
        let cloneTempleted = elTemplate.cloneNode(true)
        let cradTitle = cloneTempleted.querySelector(".card__title")
        let cradimg = cloneTempleted.querySelector(".card__img")
        let cradtext = cloneTempleted.querySelector(".card__text")


        cradtext.textContent = item.email
        cradimg.src = item.avatar
        cradTitle.textContent = item.first_name + " " + item.last_name
        List.appendChild(cloneTempleted)
    })
}



fetch("https://reqres.in/api/users?page=1")
    .then(res => res.json())
    .then(users => renderArr(users.data, elList))