window.onload = () => {

    // 1)Створити кнопку при натисканні на яку створюється дів з порядковим номером всередині, якщо створено більше 5 дівів. Покажіть на сторінці кнопку, видалити всі створені елементи. При натисканні на кнопку всі створенні div елементи видаляються

    let btn = document.querySelector("div.first>button");
    let btnRemove = document.createElement("button");
    let n = 0;
    let divFirst = document.querySelector("div.first");
    function divCreater(){
        let div = document.createElement("div");
        n++;
        div.innerHTML = n;
        div.className = "block";
        divFirst.appendChild(div);
        if(n===5){
            btnRemove.textContent = "Remove divs";
            btnRemove.className = "btnRemove";
            divFirst.insertBefore(btnRemove, btn.nextSibling);
        }
    }
    btn.addEventListener("click", divCreater);
    btnRemove.addEventListener("click", ()=>{
        n = 0;
        let blocksToRemove = document.querySelectorAll('.block, .btnRemove');
        blocksToRemove.forEach((block) => block.remove());
    })

    // 2) в html створіть 2 інпута і кнопку.  в js створіть class  по створенню обєкту товару. При вводі данних і натисканні на кнопку додати товар, у вас обєкт товару додається в массив 

    let inpText = document.querySelector(`div.second>input[type="text"]`);
    let inpPrice = document.querySelector(`div.second>input[type="number"]`);
    let btnAdd = document.querySelector("div.second>button");
    let arrProducts = [];

    function addObj(){
        if(inpText.value !== "" && inpPrice.value !== ""){
            arrProducts.push({name: inpPrice.value, price: inpPrice.value});
            inpText.value = "";
            inpPrice.value = "";
        }
    }

    btnAdd.addEventListener("click", addObj);

    // 3) Створіть кнопку яка відображається на сторінці коли більше 3 товарів в масиві і при dblclick відмальовує список товарів на сторінці

    let divThird = document.querySelector("div.third");
    let btnViev = document.querySelector("div.third>button")

    function showList () {
        if(arrProducts.length>=3){
            let divRemove = document.querySelectorAll("div.third>div");
            divRemove !== null ? divRemove.forEach((div) => div.remove()) : null;

            arrProducts.forEach(element => {
                let div = document.createElement("div");
                div.textContent = `Name: ${element.name} Price: ${element.price}`;
                divThird.appendChild(div);
            });
        }
    }
 
    btnViev.addEventListener("dblclick", showList);

    // Додаткове завдання:
    // Створіть інпут і кнопку, вводячи дані і натискаючи кнопку ви стоврюєте новий елемент списку покупок. В елементі списка покупок, повиненно бути:  інформація з інпуту, час створення, а також кнопка при натисканні на яку елемент стає сірим ( або позначається як куплений)

    let divBonus = document.querySelector("div.bonus");
    let inpBonus = document.querySelector("div.bonus>input");
    let btnAddBonus = document.querySelector("div.bonus>button");
    let n0 = 0;

    function getDayInfo() {
        let day = ""
        switch(new Date().getDay()){
            case 0:
                day = "неділя";
                break;
            case 1:
                day = "понеділок";
                break;
            case 2:
                day = "вівторок";
                break;
            case 3:
                day = "середа";               //=======================\\
                break;                        //                       \\
            case 4:                           //  Тут зробив у switch  \\
                day = "четвер";               //                       \\
                break;                        //=======================\\
            case 5:
                day = "п'ятниця";
                break;
            case 6:
                day = "субота";
                break;
        }
        let month = "";
        switch(new Date().getMonth()){
            case 0:
                month = "січеня";
                break;
            case 1:
                month = "лютого";
                break;
            case 2:
                month = "березеня";
                break;
            case 3:
                month = "квітня";
                break;
            case 4:
                month = "травеня";
                break;
            case 5:
                month = "червня";
                break;
            case 6:
                month = "липня";
                break;
            case 7:
                month = "серпня";
                break;
            case 8:
                month = "вересня";
                break;
            case 9:
                month = "жовтня";
                break;
            case 10:
                month = "листопада";
                break;
            case 11:
                month = "грудня";
                break;
        }
    
        return `${new Date().getHours()}:${new Date().getMinutes()} ${day} ${new Date().getDate()} ${month} ${new Date().getFullYear()}`;
    }

    function notebook () {
        if(inpBonus.value !== ""){
            n0++;
            let div = document.createElement("div");
            let btn = document.createElement("button");
            btn.className = "btnCheck";
            btn.id = n0;
            btn.textContent = 'Є';
            btn.addEventListener("click", () => {
                div.classList.add("done");
            });
            div.textContent = `${n0}. ${inpBonus.value} | ${getDayInfo()} | `;
            divBonus.appendChild(div);
            div.appendChild(btn);
            inpBonus.value = "";
        }
    }

    btnAddBonus.addEventListener("click", notebook);

}