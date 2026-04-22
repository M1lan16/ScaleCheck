/**
 * Bilingual Lead Generation Quiz Logic
 */

// --- DATA START ---
const RU_DATA = {
  questions: [
    "Бизнес-модель сходится по юнит-экономике?",
    "Ваш бизнес-юнит стабильно самостоятельно генерирует операционную прибыль?",
    "Описаны ли все ключевые процессы (от продажи до производства) в виде обязательных к исполнению протоколов, регламентов и инструкций?",
    "Может ли этот бизнес-юнит работать 1 месяц без вашего прямого участия, сохраняя плановую прибыль и качество продукта?"
  ],
  results: [
    {
      title: "Бизнес-модель убыточна",
      summary: "Это значит, что ваша бизнес-модель убыточна в своей основе. Каждая новая продажа не приносит вам прибыль, а создает убытки. Если масштабировать такую систему, то вы начнете терять деньги с нарастающей скоростью.",
      fix: ["Посчитайте все затраты (привлечение, производство) и сравните с ценой, чтобы понять, что на самом деле приносит вам деньги, а что — убытки.", "Откажитесь от убыточных продуктов и услуг, чтобы не распылять ресурсы.", "Внесите изменения (цена, издержки, маркетинг) так, чтобы заложить в каждую сделку минимум 30% рентабельности."]
    },
    {
      title: "Нет подтвержденной бизнес-модели",
      summary: "Нет подтвержденной бизнес-модели. Если масштабировать такую систему, есть вероятность, что она будет сжигать прибыль других направлений.",
      fix: ["Выясните, что приносит вам больше всего прибыли, и сфокусируйтесь на его улучшении.", "Разберитесь, сколько вы на самом деле зарабатываете с каждой отдельной продажи или клиента.", "Ваша цель — сделать так, чтобы это направление могло окупаться без привлечения других денег компании."]
    },
    {
      title: "Прибыль не поддается масштабированию",
      summary: "Прибыль появляется не из-за отлаженной системы, а случайным образом. Такую прибыль нельзя предсказывать, контролировать и масштабировать. При попытке роста система может сломаться и прибыль исчезнет.",
      fix: ["Поговорите со всеми ключевыми сотрудниками и составьте единый пошаговый план работы — кто, что и в какой последовательности делает.", "На основе пошагового плана составьте инструкции и регламенты.", "Обучите всю команду работать строго по этому регламенту и контролируйте его исполнение."]
    },
    {
      title: "Нет системы делегирования",
      summary: "Ваш набор инструкций и регламентов не работает должным образом. Нет системы делегирования и контроля. Когда у сотрудников возникают трудности, вам приходится решать их самостоятельно. Это может работать на небольших объемах, но при масштабировании системы будут расти и проблемы.",
      fix: ["Создайте систему, где сотрудники проверяют работу друг друга на ключевых этапах.", "Продумайте, что может пойти не так, и создайте резервы (материалы, время, подрядчики), чтобы форс-мажоры не парализовали работу.", "Пропишите для каждого сотрудника, за какой конкретный результат он отвечает, и привяжите его мотивацию именно к этому результату."]
    }
  ],
  success: "Ваш бизнес готов к масштабированию! Системы выстроены, юнит-экономика сходится, операционная прибыль стабильна, а процессы задокументированы."
};

const UA_DATA = {
  questions: [
    "Бізнес-модель сходиться по юніт-економіці?",
    "Ваш бізнес-юніт стабільно самостійно генерує операційний прибуток?",
    "Чи описані всі ключові процеси (від продажу до виробництва) у вигляді обов'язкових до виконання протоколів, регламентів та інструкцій?",
    "Чи може цей бізнес-юніт працювати 1 місяць без вашої прямої участі, зберігаючи плановий прибуток і якість продукту?"
  ],
  results: [
    {
      title: "Бізнес-модель збиткова",
      summary: "Це означає, что ваша бізнес-модель збиткова у своїй основі. Кожен новий продаж не приносить вам прибуток, а створює збитки. Якщо масштабувати таку систему, то ви почнете втрачати гроші з наростаючою швидкістю.",
      fix: ["Порахуйте всі витрати (залучення, виробництво) та порівняйте з ціною, щоб зрозуміти, що насправді приносить вам гроші, а що — збитки.", "Відмовтеся від збиткових продуктів і послуг, щоб не розпорошувати ресурси.", "Внесіть зміни (ціна, витрати, маркетинг) так, щоб закласти в кожну угоду мінімум 30% рентабельності."]
    },
    {
      title: "Немає підтвердженої бізнес-моделі",
      summary: "Немає підтвердженої бізнес-моделі. Якщо масштабувати таку систему, є ймовірність, що вона буде спалювати прибуток інших напрямків.",
      fix: ["З'ясуйте, що приносить вам найбільше прибутку, і сфокусуйтеся на його поліпшенні.", "Розберіться, скільки ви насправді заробляєте з кожного окремого продажу або клієнта.", "Ваша мета — зробити так, щоб цей напрямок міг окупатися без залучення інших грошей компанії."]
    },
    {
      title: "Прибуток не піддається масштабуванню",
      summary: "Прибуток з'являється не через налагоджену систему, а випадковим чином. Такий прибуток не можна передбачати, контролювати і масштабувати. При спробі росту система може зламатися і прибуток зникне.",
      fix: ["Поговоріть з усіма ключовими співробітниками і складіть єдиний покроковий план роботи — хто, що і в якій послідовності робить.", "На основі покрокового плану складіть інструкції та регламенти.", "Навчіть усю команду працювати строго за цим регламентом і контролюйте його виконання."]
    },
    {
      title: "Немає системи делегування",
      summary: "Ваш набір інструкцій і регламентів не працює належним чином. Немає системи делегування і контролю. Коли у співробітників виникають труднощі, вам доводиться вирішувати їх самостійно. Це може працювати на невеликих обсягах.",
      fix: ["Створіть систему, де співробітники перевіряють роботу один одного на ключових етапах.", "Продумайте, що може піти не так, і створіть резерви (матеріали, час, підрядники), щоб форс-мажори не паралізували роботу.", "Пропишіть для кожного співробітника, за який конкретный результат він відповідає, і прив'яжіть його мотивацію саме до цього результату."]
    }
  ],
  success: "Ваш бізнес готовий до масштабування! Системи вибудовані, юніт-економіка сходиться, операційний прибуток стабільний, а процеси задокументовані."
};
// --- DATA END ---


// --- Supplementary UI Text ---
const uiContent = {
    ru: {
        buttons: { yes: "Да", no: "Нет", start: "Начать тест", restart: "Начать заново" },
        welcome: {
            title: "Готов ли ваш бизнес к масштабированию?",
            descriptionHtml: `
                <p>Ответьте на 4 вопроса, чтобы определить, готова ли ваша система к росту и резкому увеличению трафика.</p>
                <p><b>Важно знать:</b></p>
                <ul>
                    <li>Тест работает по принципу моментальной квалификации.</li>
                    <li>Если в вашей модели есть критическое узкое место (ответ «Нет»), система прервет опрос.</li>
                    <li>Вы сразу получите детальный разбор и рекомендации по исправлению ситуации.</li>
                </ul>`
        },
        labels: {
            summary: "Промежуточный итог:",
            fix: "Как исправить:"
        }
    },
    ua: {
        buttons: { yes: "Так", no: "Ні", start: "Почати тест", restart: "Спочатку" },
        welcome: {
            title: "Чи готовий ваш бізнес до масштабування?",
            descriptionHtml: `
                <p>Дайте відповідь на 4 запитання, щоб визначити, чи готова ваша система до зростання та різкого збільшення трафіку.</p>
                <p><b>Важливо знати:</b></p>
                <ul>
                    <li>Тест працює за принципом моментальної кваліфікації.</li>
                    <li>Якщо у вашій моделі є критичне вузьке місце (відповідь «Ні»), система перерве опитування.</li>
                    <li>Ви одразу отримаєте детальний розбір та рекомендації щодо виправлення ситуації.</li>
                </ul>`
        },
        labels: {
            summary: "Проміжний підсумок:",
            fix: "Як виправити:"
        }
    }
};

const jsonPayload = {
    ru: RU_DATA,
    ua: UA_DATA
};

// --- State Machine & App Data ---
const appState = {
    view: 'lang', // lang, welcome, quiz, result
    lang: null,
    currentQuestion: 0
};

// --- DOM References ---
const views = {
    lang: document.getElementById('lang-view'),
    welcome: document.getElementById('welcome-view'),
    quiz: document.getElementById('quiz-view'),
    result: document.getElementById('result-view')
};

const UI = {
    langBtns: document.querySelectorAll('.btn-lang'),
    startBtn: document.getElementById('btn-start'),
    restartBtn: document.getElementById('btn-restart'),
    
    welcomeTitle: document.getElementById('welcome-title'),
    welcomeInstruction: document.getElementById('welcome-instruction'),
    
    questionText: document.getElementById('question-text'),
    progressIndicator: document.getElementById('progress-indicator'),
    btnYes: document.getElementById('btn-yes'),
    btnNo: document.getElementById('btn-no'),
    btnYesText: document.getElementById('btn-yes-text'),
    btnNoText: document.getElementById('btn-no-text'),
    
    resultTitle: document.getElementById('result-title'),
    resultContent: document.getElementById('result-content')
};

// --- Core Flow Functions ---

function switchView(newViewName) {
    if (views[appState.view]) {
        views[appState.view].classList.remove('active');
        views[appState.view].classList.add('hidden');
    }

    setTimeout(() => {
        appState.view = newViewName;
        if (views[newViewName]) {
            views[newViewName].classList.remove('hidden');
            views[newViewName].classList.add('active');
        }
        
        if (newViewName === 'welcome') {
            applyLocalizationToWelcome();
        } else if (newViewName === 'quiz') {
            appState.currentQuestion = 0;
            applyLocalizationToQuiz();
            renderQuestion();
        }
    }, 300); // Wait for transition ease
}

function applyLocalizationToWelcome() {
    const uiData = uiContent[appState.lang];
    UI.welcomeTitle.textContent = uiData.welcome.title;
    UI.welcomeInstruction.innerHTML = uiData.welcome.descriptionHtml;
    UI.startBtn.textContent = uiData.buttons.start;
}

function applyLocalizationToQuiz() {
    const uiData = uiContent[appState.lang];
    UI.btnYesText.textContent = uiData.buttons.yes;
    UI.btnNoText.textContent = uiData.buttons.no;
    UI.restartBtn.textContent = uiData.buttons.restart;
}

function renderQuestion() {
    const questions = jsonPayload[appState.lang].questions;
    UI.questionText.textContent = questions[appState.currentQuestion];
    
    const progressPercent = ((appState.currentQuestion) / questions.length) * 100;
    UI.progressIndicator.style.setProperty('--progress', `${progressPercent}%`);
    
    setTimeout(() => {
        const nextPercent = ((appState.currentQuestion + 1) / questions.length) * 100;
        UI.progressIndicator.style.setProperty('--progress', `${nextPercent}%`);
    }, 50);
}

function handleAnswer(isYes) {
    if (!isYes) {
        // Immediate stop on NO answer
        renderResult(appState.currentQuestion, false);
        return;
    }
    
    // They answered YES
    const questionsLength = jsonPayload[appState.lang].questions.length;
    if (appState.currentQuestion < questionsLength - 1) {
        // Next question
        UI.questionText.style.opacity = '0';
        setTimeout(() => {
            appState.currentQuestion++;
            renderQuestion();
            UI.questionText.style.opacity = '1';
        }, 200);
    } else {
        // Succeeded on all questions
        renderResult(null, true);
    }
}

function renderResult(errorIndex, isSuccess = false) {
    UI.resultContent.innerHTML = ''; // reset inner HTML
    UI.resultTitle.classList.remove('text-warning', 'text-success');

    if (isSuccess) {
        const successText = jsonPayload[appState.lang].success;
        UI.resultTitle.textContent = "✅"; // Just a checkmark for title, or keep it empty
        UI.resultTitle.classList.add('text-success');
        
        UI.resultContent.innerHTML = `<p style="text-align: center; font-size: 1.25rem;"><b>${successText}</b></p>`;
    } else {
        const resultObject = jsonPayload[appState.lang].results[errorIndex];
        const labels = uiContent[appState.lang].labels;
        
        UI.resultTitle.textContent = resultObject.title;
        UI.resultTitle.classList.add('text-warning');
        
        // Construct the content dynamically using the localization dictionary
        let htmlStr = `<div class="summary"><b>${labels.summary}</b> ${resultObject.summary}</div>`;
        htmlStr += `<b>${labels.fix}</b><ol class="fix-list">`;
        
        // resultObject.fix is now an Array of strings
        resultObject.fix.forEach(item => {
            htmlStr += `<li class="fix-item">${item}</li>`;
        });
        
        htmlStr += `</ol>`;
        
        UI.resultContent.innerHTML = htmlStr;
    }
    
    switchView('result');
}

// --- Event Listeners ---

UI.langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        appState.lang = e.target.getAttribute('data-lang');
        switchView('welcome');
    });
});

UI.startBtn.addEventListener('click', () => {
    switchView('quiz');
});

UI.btnYes.addEventListener('click', () => handleAnswer(true));
UI.btnNo.addEventListener('click', () => handleAnswer(false));

UI.restartBtn.addEventListener('click', () => {
    switchView('welcome');
});
