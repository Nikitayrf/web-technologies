function socialStatus(age) {
    if (0 < age && age <= 7) {
        return "дошкольник";
    }
    else if (7 < age && age <= 14) {
        return "школьк";
    }
    else if (14 < age && age <= 16) {
        const result = confirm("Если выбирете 'Да' то Ваш ребёнок поступит в колледж, если 'Отмена', то хотите чтобы ребёнок поступил в лицей");
        if (result) {
            return "колледжера";
        }
        else {
            return "лицеиста";
        }
    }
    else {
        alert("Ваш ребёнок, уже не ребёнок. В институт или работь!!!)");
    }
};

function x(social) {
    switch (social) {
        case "дошкольник":
            return (46200 * rubToMab) / monthsYear;
        case "школьк":
            return (42200 * rubToMab) / monthsYear;
        case "колледжера":
            return (46100 * rubToMab) / monthsYear;
        case "лицеиста":
            return (51500 * rubToMab) / monthsYear;
        default:
            return "РАБОТАТЬ";
    }
};

const childAge = Number.parseInt(prompt("Здравствуйте, сколько Вашему ребёнку лет?"));
const statusChild = socialStatus(childAge);

let rubToMab = 5; // 1 MAD (Маррокански дирхам) равен 5 рублей
const madToRub = x * rubToMab;
const monthsYear = 12;

alert(`Плата в месяц для '${statusChild}' равна ${x(statusChild).toFixed(1)} руб`);
alert(`В первый год обучение необходимо внести дополнительный вступительный взнос ${23500 * rubToMab} руб`)
