
 import Inputmask from './inputmask';
export default class Application {
    constructor() {
        let structure = `
        <div class="application">
            <h2 class="application__title">Заявка на открытие вклада</h2>
            <form id="form" class="application__form">
                <label>
                        <input type="text" name="surename" class="application__input" placeholder="Фамилия*">
                    <div class="err"></div>
                    </label>
                <label>
                    <input type="text" name="name" class="application__input" placeholder="Имя*">
                    <div class="err"></div>
                    </label>
                <label>
                    <input type="text" name="fathername" class="application__input" placeholder="Отчество*">
                    <div class="err"></div>
                    </label>
                <label>
                    <input type="text" onfocus="(this.type = 'date')" name="birthday" class="application__input" placeholder="Дата рождения*">
                    <div class="err"></div>
                    </label>
                <label class="application__tel-label"><span class="application__tel-wrap">Телефон</span>
                    <input type="tel" class="application__input" name="tel" id="tel">
                    <div class="err"></div>
                    </label>
                <div class="application__check-wrap"><input id="check" type="checkbox" name="accept" class="application__check">
                    <label class="check-label" for="check"></label><span class="application__check-span">&nbsp Я подтверждаю согласие на обработку &nbsp</span>
                    <a href="#" class="form__link">персональных данных</a>
                </div>
                <button class="application__btn" type="submit">Оставить заявку</button>
            </form>
        </div>`
        this.application = document.createElement('div');
        this.application.classList.add('wrap-application');
        this.application.insertAdjacentHTML('afterbegin', structure);
        this.elem = document.body;
    }
    render() {
        this.elem.append(this.application);
            const form = document.querySelector(".application__form");
    const check = document.querySelector(".application__check");
    const checkPerData = document.querySelector('.application__check-span');
    var selector = document.getElementById("tel");
    var im = new Inputmask("+7(\\999) 999-99-99");
    im.mask(selector);
    let isSubmit = false;
            form.addEventListener("submit", (event) => {
        event.preventDefault();
        validate()
        if (isSubmit) {
            let data = {
                name: form.elements.name.value,
                surename: form.elements.surename.value,
                fathername: form.elements.fathername.value,
                birthday: form.elements.birthday.value,
                tel: form.elements.tel.value,
                check: form.elements.accept.checked,
            };
            console.log(data);
            form.reset();
        }
    })

    function validate() {
        for (let elem of form.elements) {
            if (elem.value == "") {
                elem.nextElementSibling.textContent =
                    "Поле необходимо заполнить";
                elem.style.borderColor = "#FF535B";
                isSubmit = false;
            } else {
                elem.nextElementSibling.textContent = "";
                elem.style.borderColor = "#818181";
                isSubmit = true;
            }
            if (isSubmit) {
                if (!check.checked) {
                    checkPerData.style.color = "#FF535B";
                    isSubmit = false;
                } else {
                    checkPerData.style.color = "#000";
                    return isSubmit = true;
                }
            }
        }
    }

    }
}