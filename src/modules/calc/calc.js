
export default class Calc {
    constructor() {
        let structure = `<div class="calc">
        <div class="calc__col-1">
            <h2 class="calc__title">Расчёт доходности по вкладу</h2>
            <div class="calc__sum">
                <p class="calc__sum-title">Сумма вклада</p>
                <input type="text" class="calc__input" value="10000" id="sum">
                <input type="range" class="calc__input-range" step="10000" min="10000" max="10000000" value="10" id="sum-range">

            </div>
            <div class="calc__buttons">
                <div class="calc__percent">
                    <p class="calc__percent-title">Выплаты процентов</p>
                    <button type="button" class="calc__btn-mounth calc__btn-percent active" value="2">Ежемесячно</button>
                    <button type="button" class="calc__btn-end calc__btn-percent" value="1">В конце срока</button>
                </div>
                <div class="calc__period">
                    <p class="calc__period-title">Срок вклада</p>
                    <button type="button" class="calc__btn-two calc__btn-period active" value="2">2 года</button>
                    <button type="button" class="calc__btn-three calc__btn-period" value="3">3 года</button>
                </div>
            </div>
            <div class="calc__refer">
                <span>*Расчет по вкладу является предварительным при условии открытия вклада онлайн</span><br>
                <a href="#">Подробные условия</a>
            </div>
        </div>
        <div class="calc__col-2">
            <div class="calc__rate">
                <span class="calc__rate-title">Процентная ставка</span>
                <span class="calc__rate-value">6,20%</span>
            </div>
            <div class="calc__income">
                <span class="calc__income-title">Доход</span>
                <span class="calc__income-value">1240 рублей</span>
            </div>
            <div class="calc__summ">
                <span class="calc__summ-title">Сумма в конце срока</span>
                <span class="calc__summ-value">11 240 руб</span>
            </div>
            <button type="button" class="calc__btn-send">Оставить заявку</button>
        </div>
    </div>`
        this.calc = document.createElement('div');
        this.calc.classList.add('wrap-calc');
        this.calc.insertAdjacentHTML('afterbegin', structure);
        this.elem = document.body;
    }
    render() {
        this.elem.append(this.calc);
    const calcInput = document.querySelector('.calc__input');
    const calcInputRange = document.querySelector('.calc__input-range');
    const percentBtnMounth = document.querySelector(".calc__btn-mounth");
    const percentBtnEnd = document.querySelector(".calc__btn-end");
    const periodBtnThree = document.querySelector(".calc__btn-three");
    const periodBtnTwo = document.querySelector(".calc__btn-two");
    const inputRate = document.querySelector('.calc__rate-value');
    const inputIncome = document.querySelector('.calc__income-value');
    const inputSumm = document.querySelector('.calc__summ-value');
        calcInputRange.addEventListener("input", () => {
        calcInput.value = calcInputRange.value;
        calc();
    });
    calcInput.addEventListener("input", () => {
        calcInputRange.value = calcInput.value;
        calc();
    })
    percentBtnMounth.addEventListener("click", () => {
        percentBtnMounth.classList.add("active");
        percentBtnEnd.classList.remove("active");
        calc();
    });
    percentBtnEnd.addEventListener("click", () => {
        percentBtnMounth.classList.remove("active");
        percentBtnEnd.classList.add("active");
        calc();
    });
    periodBtnThree.addEventListener("click", () => {
        periodBtnThree.classList.add("active");
        periodBtnTwo.classList.remove("active");
        calc();
    });
    periodBtnTwo.addEventListener("click", () => {
        periodBtnThree.classList.remove("active");
        periodBtnTwo.classList.add("active");
        calc();
    });
     function calcPercent() {
        let percent = 0;
        if (periodBtnTwo.classList.contains("active") && percentBtnMounth.classList.contains("active")) {
            percent = 6.20;
        } else if (periodBtnThree.classList.contains("active") && percentBtnMounth.classList.contains("active")) {
            percent = 6.75;

        } else if (periodBtnTwo.classList.contains("active") && percentBtnEnd.classList.contains("active")) {
            percent = 6.60;
        } else if (periodBtnThree.classList.contains("active") && percentBtnEnd.classList.contains("active")) {
            percent = 7.50;
        }
        return percent;
    };

    function calc() {
        let percent = calcPercent();
        let period = 0;
        if (periodBtnThree.classList.contains("active")) {
            period = 3;
        } else {
            period = 2
        }
        let income = (calcInput.value * percent / 100) * period;
        let sum = +income + +calcInput.value;

        inputRate.innerHTML = `${percent}%`;
        inputIncome.innerHTML = `${income} Руб`;
        inputSumm.innerHTML = `${sum} Руб`;
    }
    }
    
}