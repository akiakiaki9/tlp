import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            welcome: "Welcome to our website!",
            EXP: [
                {
                    id: 1,
                    title: "Kagan Interdistrict Court of Civil Cases",
                    role: "Judge's Assistant",
                    subtitle_1: "As part of the work on the application, the judge's assistant drafts case materials, prepares a list of documents, notifies the parties and interested persons about the time and place of the hearing, checks attendance, facilitates the familiarization of participants with case materials and provides them with copies of the court's acts, usually prepares and maintains the protocol of the court session, ensuring the completeness and accuracy of its content, stores the case materials during the trial.",
                    subtitle_2: "",
                    duration: "October 2011 — December 2013, 2 years 3 months",
                    image: "/images/exp/exp-1.jpg"
                },
                {
                    id: 2,
                    title: "Bukhara Regional Court of Civil Cases",
                    role: "Senior Judge's Assistant of the Appellate Instance",
                    subtitle_1: "As part of the work on the application, the judge's assistant drafts case materials, prepares a list of documents, notifies the parties and interested persons about the time and place of the hearing, checks attendance, facilitates the familiarization of participants with case materials and provides them with copies of the court's acts, usually prepares and maintains the protocol of the court session, ensuring the completeness and accuracy of its content, stores the case materials during the trial.",
                    subtitle_2: "",
                    duration: "December 2013 — December 2014, 1 year 1 month",
                    image: "/images/exp/exp-2.jpg"
                },
                {
                    id: 3,
                    title: "Dilkusho LLC",
                    role: "Legal Advisor",
                    subtitle_1: "Check drafts of orders, instructions, regulations, standards, and other legal documents of the organization, participate in their preparation; change or cancel internal legal acts issued in violation of the law; participate in preparing and concluding contracts with counterparties; provide legal consultations to employees and prepare legal opinions on arising issues; assist employees in working with claims, prepare and send materials to court; represent the organization in courts and state and public organizations; analyze results of claims and lawsuits; prepare materials on thefts, embezzlements, shortages, release of defective or non-compliant products, violations of environmental laws, etc., for submission to investigative and judicial authorities, and take measures to recover damages caused to the organization; identify debts that need to be collected and ensure collection.",
                    subtitle_2: "",
                    duration: "December 2014 — December 2016, 2 years 1 month",
                    image: "/images/exp/exp-3.jpg"
                },
                {
                    id: 4,
                    title: "Bukhara Cotton Processing Plant",
                    role: "Legal Advisor",
                    subtitle_1: "Check drafts of orders, instructions, regulations, standards, and other legal documents of the organization, participate in their preparation; change or cancel internal legal acts issued in violation of the law; participate in preparing and concluding contracts with counterparties; provide legal consultations to employees and prepare legal opinions on arising issues; assist employees in working with claims, prepare and send materials to court; represent the organization in courts and state and public organizations; analyze results of claims and lawsuits; prepare materials on thefts, embezzlements, shortages, release of defective or non-compliant products, violations of environmental laws, etc., for submission to investigative and judicial authorities, and take measures to recover damages caused to the organization; identify debts that need to be collected and ensure collection.",
                    subtitle_2: "",
                    duration: "December 2016 — October 2019, 2 years 11 months",
                    image: "/images/exp/exp-4.jpg"
                },
                {
                    id: 5,
                    title: "Birrtek Global LLC",
                    role: "Director",
                    subtitle_1: "Director",
                    subtitle_2: "",
                    duration: "November 2019 — October 2021, 2 years",
                    image: "/images/exp/exp-5.jpg"
                },
                {
                    id: 6,
                    title: "Universal Packing Masters LLC (Murat Building)",
                    role: "Legal Advisor",
                    subtitle_1: "Check drafts of orders, instructions, regulations, standards, and other legal documents of the organization, participate in their preparation; change or cancel internal legal acts issued in violation of the law; participate in preparing and concluding contracts with counterparties; provide legal consultations to employees and prepare legal opinions on arising issues; assist employees in working with claims, prepare and send materials to court; represent the organization in courts and state and public organizations; analyze results of claims and lawsuits; prepare materials on thefts, embezzlements, shortages, release of defective or non-compliant products, violations of environmental laws, etc., for submission to investigative and judicial authorities, and take measures to recover damages caused to the organization; identify debts that need to be collected and ensure collection.",
                    subtitle_2: "",
                    duration: "March 2021 — March 2022, 1 year 1 month",
                    image: '/images/exp/exp-6.webp'
                },
                {
                    id: 7,
                    title: "Discover Invest LLC",
                    role: "Legal Advisor",
                    subtitle_1: "Check drafts of orders, instructions, regulations, standards, and other legal documents of the organization, participate in their preparation; change or cancel internal legal acts issued in violation of the law; participate in preparing and concluding contracts with counterparties; provide legal consultations to employees and prepare legal opinions on arising issues; assist employees in working with claims, prepare and send materials to court; represent the organization in courts and state and public organizations; analyze results of claims and lawsuits; prepare materials on thefts, embezzlements, shortages, release of defective or non-compliant products, violations of environmental laws, etc., for submission to investigative and judicial authorities, and take measures to recover damages caused to the organization; identify debts that need to be collected and ensure collection.",
                    subtitle_2: "",
                    duration: "June 2022 — November 2023, 1 year 6 months",
                    image: '/images/exp/exp-7.webp'
                },
                {
                    id: 8,
                    title: "TLP Tillayev Law Partners Law Firm",
                    role: "Attorney",
                    subtitle_1: "The legal profession requires not only deep knowledge of laws but also high moral qualities. The duties of an attorney cover a wide range of activities, from providing legal consultations to representing clients' interests in court. Attorneys defend the rights and interests of their clients, whether individuals or organizations.",
                    subtitle_2: "The foundation of an attorney's work is confidentiality and protecting the client's interests. This includes not only providing qualified legal assistance but also maintaining high standards of professional ethics. Attorneys must constantly improve their knowledge, following the requirements of the Federal Chamber of Attorneys and relevant regional attorney chambers.",
                    duration: "February 2024 — Present, 1 year 3 months",
                    image: "/images/exp/exp-8.jpg"
                }
            ]
            
        },
    },
    ru: {
        translation: {
            EXP: [
                {
                    id: 1,
                    title: "Каганский межрайонный суд по гражданским делам",
                    role: "Помошник судьи",
                    subtitle_1: "В рамках работы по заявлению помощник судьи-докладчика формирует материалы дела с составлением описи документов, осуществляет извещение лиц, участвующих в споре, заинтересованных участников спора о месте и времени судебного заседания, предварительно проверяет явку лиц, участвующих в споре, осуществляет ознакомление с материалами дела и получение ими копий актов Суда, как правило, ведет и оформляет протокол судебного заседания, обеспечивая полноту и достоверность его содержания, осуществляет хранение материалов дела в ходе судебного разбирательства.",
                    subtitle_2: "",
                    duration: "Октябрь 2011 — Декабрь 2013 2 года 3 месяца",
                    image: "/images/exp/exp-1.jpg"
                },
                {
                    id: 2,
                    title: "Бухарский областной суд по гражданским делам",
                    role: "Старший помощник судьи апелляционной инстанции",
                    subtitle_1: "В рамках работы по заявлению помощник судьи-докладчика формирует материалы дела с составлением описи документов, осуществляет извещение лиц, участвующих в споре, заинтересованных участников спора о месте и времени судебного заседания, предварительно проверяет явку лиц, участвующих в споре, осуществляет ознакомление с материалами дела и получение ими копий актов Суда, как правило, ведет и оформляет протокол судебного заседания, обеспечивая полноту и достоверность его содержания, осуществляет хранение материалов дела в ходе судебного разбирательства.",
                    subtitle_2: "",
                    duration: "Декабрь 2013 — Декабрь 2014 1 год 1 месяц",
                    image: "/images/exp/exp-2.jpg"
                },
                {
                    id: 3,
                    title: "ООО «Дилкушо»",
                    role: "Юрисконсульт",
                    subtitle_1: "Проверять проекты приказов, инструкций, положений, стандартов и других актов правового характера организации, а также участвовать в подготовке этих документов; менять или отменять внутренние правовые акты, изданные с нарушением законодательства; участвовать в подготовке и заключении договоров с контрагентами; консультировать сотрудников и готовить заключения по правовым вопросам, возникающим в организации; оказывать правовую помощь сотрудникам в работе с претензиями, готовить и передавать материалы в суд; представлять интересы организации в судах, в государственных и общественных организациях; анализировать результаты рассмотрения претензий, судебных и арбитражных дел; готовить материалы о хищениях, растратах, недостачах, выпуске недоброкачественной, нестандартной и некомплектной продукции, нарушении экологического законодательства и иных правонарушениях для передачи следственным и судебным органам, а также принимать меры по возмещению ущерба, который причинили организации; выявлять долги, требующие взыскания, и обеспечивать такое взыскание.",
                    subtitle_2: "",
                    duration: "Декабрь 2014 — Декабрь 2016 2 года 1 месяц",
                    image: "/images/exp/exp-3.jpg"
                },
                {
                    id: 4,
                    title: "Бухарский хлопкоперерабатывающий завод",
                    role: "Юрисконсульт",
                    subtitle_1: "Проверять проекты приказов, инструкций, положений, стандартов и других актов правового характера организации, а также участвовать в подготовке этих документов; менять или отменять внутренние правовые акты, изданные с нарушением законодательства; участвовать в подготовке и заключении договоров с контрагентами; консультировать сотрудников и готовить заключения по правовым вопросам, возникающим в организации; оказывать правовую помощь сотрудникам в работе с претензиями, готовить и передавать материалы в суд; представлять интересы организации в судах, в государственных и общественных организациях; анализировать результаты рассмотрения претензий, судебных и арбитражных дел; готовить материалы о хищениях, растратах, недостачах, выпуске недоброкачественной, нестандартной и некомплектной продукции, нарушении экологического законодательства и иных правонарушениях для передачи следственным и судебным органам, а также принимать меры по возмещению ущерба, который причинили организации; выявлять долги, требующие взыскания, и обеспечивать такое взыскание.",
                    subtitle_2: "",
                    duration: "Декабрь 2016 — Октябрь 2019 2 года 11 месяцев",
                    image: "/images/exp/exp-4.jpg"
                },
                {
                    id: 5,
                    title: "ООО Birrtek Global",
                    role: "Директор",
                    subtitle_1: "Директор",
                    subtitle_2: "",
                    duration: "Ноябрь 2019 — Октябрь 2021 2 года",
                    image: "/images/exp/exp-5.jpg"
                },
                {
                    id: 6,
                    title: "ООО Universal Packing Masters (Murat Building)",
                    role: "Юрисконсульт",
                    subtitle_1: "Проверять проекты приказов, инструкций, положений, стандартов и других актов правового характера организации, а также участвовать в подготовке этих документов; менять или отменять внутренние правовые акты, изданные с нарушением законодательства; участвовать в подготовке и заключении договоров с контрагентами; консультировать сотрудников и готовить заключения по правовым вопросам, возникающим в организации; оказывать правовую помощь сотрудникам в работе с претензиями, готовить и передавать материалы в суд; представлять интересы организации в судах, в государственных и общественных организациях; анализировать результаты рассмотрения претензий, судебных и арбитражных дел; готовить материалы о хищениях, растратах, недостачах, выпуске недоброкачественной, нестандартной и некомплектной продукции, нарушении экологического законодательства и иных правонарушениях для передачи следственным и судебным органам, а также принимать меры по возмещению ущерба, который причинили организации; выявлять долги, требующие взыскания, и обеспечивать такое взыскание.",
                    subtitle_2: "",
                    duration: "Март 2021 — Март 2022 1 год 1 месяц",
                    image: '/images/exp/exp-6.webp'
                },
                {
                    id: 7,
                    title: "ООО Discover invest",
                    role: "Юрисконсульт",
                    subtitle_1: "Проверять проекты приказов, инструкций, положений, стандартов и других актов правового характера организации, а также участвовать в подготовке этих документов; менять или отменять внутренние правовые акты, изданные с нарушением законодательства; участвовать в подготовке и заключении договоров с контрагентами; консультировать сотрудников и готовить заключения по правовым вопросам, возникающим в организации; оказывать правовую помощь сотрудникам в работе с претензиями, готовить и передавать материалы в суд; представлять интересы организации в судах, в государственных и общественных организациях; анализировать результаты рассмотрения претензий, судебных и арбитражных дел; готовить материалы о хищениях, растратах, недостачах, выпуске недоброкачественной, нестандартной и некомплектной продукции, нарушении экологического законодательства и иных правонарушениях для передачи следственным и судебным органам, а также принимать меры по возмещению ущерба, который причинили организации; выявлять долги, требующие взыскания, и обеспечивать такое взыскание.",
                    subtitle_2: "",
                    duration: "Июнь 2022 — Ноябрь 2023 1 год 6 месяцев",
                    image: '/images/exp/exp-7.webp'
                },
                {
                    id: 8,
                    title: "TLP Tillayev Law Partners адвокатское бюро",
                    role: "Адвокат",
                    subtitle_1: "Адвокатура – это профессия, требующая не только глубоких знаний законов, но и высоких моральных качеств. Должностные обязанности адвоката охватывают широкий спектр деятельности, начиная с предоставления юридических консультаций и заканчивая представлением интересов клиента в суде. Адвокаты выступают защитниками прав и интересов своих клиентов, будь то индивидуальные граждане или организации.",
                    subtitle_2: "Основой работы адвоката является принцип конфиденциальности и защиты интересов клиента. Это включает в себя не только предоставление квалифицированной юридической помощи, но и поддержание высоких стандартов профессиональной этики. Адвокаты должны постоянно совершенствовать свои знания, следуя требованиям Федеральной палаты адвокатов и соответствующих адвокатских палат субъектов.",
                    duration: "Февраль 2024 — настоящее время 1 год 3 месяца",
                    image: "/images/exp/exp-8.jpg"
                },
            ]
        },
    },
    uz: {
        translation: {
            EXP: [
                {
                    id: 1,
                    title: "Kagan Tumani Fuqarolik Ishlari Bo‘yicha Sud",
                    role: "Sudya Assistenti",
                    subtitle_1: "Ariza bo‘yicha ishlash jarayonida sudya assistenti ish materiallarini tuzadi, hujjatlar ro‘yxatini tayyorlaydi, tomonlarga va manfaatdor shaxslarga sud majlisining vaqti va joyi haqida xabar beradi, ishtirokchilarni ro‘yxatga oladi, ish materiallari bilan tanishtirishda yordam beradi va sud hujjatlarini nusxalarini taqdim etadi, odatda sud majlisi protokolini tayyorlaydi va uni to‘liq va aniq saqlashni ta'minlaydi, sud jarayonida ish materiallarini saqlaydi.",
                    subtitle_2: "",
                    duration: "2011 yil oktyabr — 2013 yil dekabr, 2 yil 3 oy",
                    image: "/images/exp/exp-1.jpg"
                },
                {
                    id: 2,
                    title: "Buxoro Viloyati Fuqarolik Ishlari Bo‘yicha Sud",
                    role: "Apellyatsiya Instansiyasining Sudya Assistenti",
                    subtitle_1: "Ariza bo‘yicha ishlash jarayonida sudya assistenti ish materiallarini tuzadi, hujjatlar ro‘yxatini tayyorlaydi, tomonlarga va manfaatdor shaxslarga sud majlisining vaqti va joyi haqida xabar beradi, ishtirokchilarni ro‘yxatga oladi, ish materiallari bilan tanishtirishda yordam beradi va sud hujjatlarini nusxalarini taqdim etadi, odatda sud majlisi protokolini tayyorlaydi va uni to‘liq va aniq saqlashni ta'minlaydi, sud jarayonida ish materiallarini saqlaydi.",
                    subtitle_2: "",
                    duration: "2013 yil dekabr — 2014 yil dekabr, 1 yil 1 oy",
                    image: "/images/exp/exp-2.jpg"
                },
                {
                    id: 3,
                    title: "Dilkusho MChJ",
                    role: "Yuridik Maslahatchi",
                    subtitle_1: "Tashkilotning buyruqlari, ko‘rsatmalari, me'yoriy hujjatlari, reglamentlari va boshqa hujjatlar loyihalarini tekshiradi, ularni tayyorlashda ishtirok etadi; qonunbuzarliklar bo‘yicha ichki huquqiy aktlarni o‘zgartiradi yoki bekor qiladi; shartnomalar tuzishda ishtirok etadi; xodimlarga yuridik maslahatlar beradi va yuzaga kelgan masalalar bo‘yicha yuridik xulosalar tayyorlaydi; xodimlarga da'volar bilan ishlashda yordam beradi, sudga hujjatlar yuboradi; tashkilotni sudlarda va davlat va jamoat tashkilotlarida vakillik qiladi; da'volar va sud ishlarining natijalarini tahlil qiladi; o‘g‘riliklar, talonchiliklar, yo‘qotishlar, nuqsonli yoki standartlarga javob bermaydigan mahsulotlarni chiqarish, ekologik qonunlarni buzish kabi holatlar bo‘yicha tergov va sud organlariga materiallar tayyorlaydi, tashkilotga yetkazilgan zararlarni undirish uchun chora-tadbirlar ko‘radi; yig‘ilgan qarzlarni aniqlaydi va ularni undirishni ta'minlaydi.",
                    subtitle_2: "",
                    duration: "2014 yil dekabr — 2016 yil dekabr, 2 yil 1 oy",
                    image: "/images/exp/exp-3.jpg"
                },
                {
                    id: 4,
                    title: "Buxoro Paxta Tozalash Zavodi",
                    role: "Yuridik Maslahatchi",
                    subtitle_1: "Tashkilotning buyruqlari, ko‘rsatmalari, me'yoriy hujjatlari, reglamentlari va boshqa hujjatlar loyihalarini tekshiradi, ularni tayyorlashda ishtirok etadi; qonunbuzarliklar bo‘yicha ichki huquqiy aktlarni o‘zgartiradi yoki bekor qiladi; shartnomalar tuzishda ishtirok etadi; xodimlarga yuridik maslahatlar beradi va yuzaga kelgan masalalar bo‘yicha yuridik xulosalar tayyorlaydi; xodimlarga da'volar bilan ishlashda yordam beradi, sudga hujjatlar yuboradi; tashkilotni sudlarda va davlat va jamoat tashkilotlarida vakillik qiladi; da'volar va sud ishlarining natijalarini tahlil qiladi; o‘g‘riliklar, talonchiliklar, yo‘qotishlar, nuqsonli yoki standartlarga javob bermaydigan mahsulotlarni chiqarish, ekologik qonunlarni buzish kabi holatlar bo‘yicha tergov va sud organlariga materiallar tayyorlaydi, tashkilotga yetkazilgan zararlarni undirish uchun chora-tadbirlar ko‘radi; yig‘ilgan qarzlarni aniqlaydi va ularni undirishni ta'minlaydi.",
                    subtitle_2: "",
                    duration: "2016 yil dekabr — 2019 yil oktyabr, 2 yil 11 oy",
                    image: "/images/exp/exp-4.jpg"
                },
                {
                    id: 5,
                    title: "Birrtek Global MChJ",
                    role: "Direktor",
                    subtitle_1: "Direktor",
                    subtitle_2: "",
                    duration: "2019 yil noyabr — 2021 yil oktyabr, 2 yil",
                    image: "/images/exp/exp-5.jpg"
                },
                {
                    id: 6,
                    title: "Universal Packing Masters MChJ (Murat Building)",
                    role: "Yuridik Maslahatchi",
                    subtitle_1: "Tashkilotning buyruqlari, ko‘rsatmalari, me'yoriy hujjatlari, reglamentlari va boshqa hujjatlar loyihalarini tekshiradi, ularni tayyorlashda ishtirok etadi; qonunbuzarliklar bo‘yicha ichki huquqiy aktlarni o‘zgartiradi yoki bekor qiladi; shartnomalar tuzishda ishtirok etadi; xodimlarga yuridik maslahatlar beradi va yuzaga kelgan masalalar bo‘yicha yuridik xulosalar tayyorlaydi; xodimlarga da'volar bilan ishlashda yordam beradi, sudga hujjatlar yuboradi; tashkilotni sudlarda va davlat va jamoat tashkilotlarida vakillik qiladi; da'volar va sud ishlarining natijalarini tahlil qiladi; o‘g‘riliklar, talonchiliklar, yo‘qotishlar, nuqsonli yoki standartlarga javob bermaydigan mahsulotlarni chiqarish, ekologik qonunlarni buzish kabi holatlar bo‘yicha tergov va sud organlariga materiallar tayyorlaydi, tashkilotga yetkazilgan zararlarni undirish uchun chora-tadbirlar ko‘radi; yig‘ilgan qarzlarni aniqlaydi va ularni undirishni ta'minlaydi.",
                    subtitle_2: "",
                    duration: "2021 yil mart — 2022 yil mart, 1 yil 1 oy",
                    image: '/images/exp/exp-6.webp'
                },
                {
                    id: 7,
                    title: "Discover Invest MChJ",
                    role: "Yuridik Maslahatchi",
                    subtitle_1: "Tashkilotning buyruqlari, ko‘rsatmalari, me'yoriy hujjatlari, reglamentlari va boshqa hujjatlar loyihalarini tekshiradi, ularni tayyorlashda ishtirok etadi; qonunbuzarliklar bo‘yicha ichki huquqiy aktlarni o‘zgartiradi yoki bekor qiladi; shartnomalar tuzishda ishtirok etadi; xodimlarga yuridik maslahatlar beradi va yuzaga kelgan masalalar bo‘yicha yuridik xulosalar tayyorlaydi; xodimlarga da'volar bilan ishlashda yordam beradi, sudga hujjatlar yuboradi; tashkilotni sudlarda va davlat va jamoat tashkilotlarida vakillik qiladi; da'volar va sud ishlarining natijalarini tahlil qiladi; o‘g‘riliklar, talonchiliklar, yo‘qotishlar, nuqsonli yoki standartlarga javob bermaydigan mahsulotlarni chiqarish, ekologik qonunlarni buzish kabi holatlar bo‘yicha tergov va sud organlariga materiallar tayyorlaydi, tashkilotga yetkazilgan zararlarni undirish uchun chora-tadbirlar ko‘radi; yig‘ilgan qarzlarni aniqlaydi va ularni undirishni ta'minlaydi.",
                    subtitle_2: "",
                    duration: "2022 yil iyun — 2023 yil noyabr, 1 yil 6 oy",
                    image: '/images/exp/exp-7.webp'
                },
                {
                    id: 8,
                    title: "TLP Tillayev Law Partners Yuridik Firmasi",
                    role: "Advokat",
                    subtitle_1: "Yuridik soha nafaqat qonunlarni chuqur bilishni, balki yuqori axloqiy fazilatlarni ham talab qiladi. Advokatning vazifalari keng qamrovli bo‘lib, ular yuridik maslahat berishdan tortib, mijozning manfaatlarini sudda himoya qilishgacha bo‘lgan faoliyatlarni o‘z ichiga oladi. Advokatlar mijozlarning, shaxsiy va yuridik shaxslarning huquq va manfaatlarini himoya qiladi.",
                    subtitle_2: "Advokatning ishining asosi maxfiylik va mijozning manfaatlarini himoya qilishdir. Bu nafaqat malakali yuridik yordam ko‘rsatishni, balki yuqori professional axloqiy me'yorlarni saqlashni ham o‘z ichiga oladi. Advokatlar o‘z bilimlarini doimiy ravishda rivojlantirishlari kerak, bu esa Federal Advokatlar Palatasi va tegishli hududiy advokatlar palatalari talablariga muvofiq amalga oshiriladi.",
                    duration: "2024 yil fevral — hozirgi kungacha, 1 yil 3 oy",
                    image: '/images/exp/exp-8.jpg'
                }
            ]            
        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem("language") || "ru",
    fallbackLng: "ru",
    interpolation: { escapeValue: false },
});

export default i18n;