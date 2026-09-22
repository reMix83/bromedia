/* ============================================================
   BRO MEDIA — ФАЙЛ КОНТЕНТА
   Здесь ты редактируешь весь текст и ссылки, не трогая вёрстку.
   Меняешь значение в кавычках — сайт обновляется.
   ============================================================ */

const BUILD = "3.2";   /* версия сборки — для сброса кэша */

const SITE = {

  /* ---------- Основные данные студии ---------- */
  studio: {
    name: "BRO MEDIA",
    tagline: "Продакшн-студия полного цикла",
    years: "5",                        // ← сколько лет на рынке
    // ↓ видео для шапки главной. Положи файл в assets/img/ и напиши путь.
    //   Пока пусто — покажется неоновая анимированная заглушка.
    heroVideo: "assets/video/Shapka.mp4",   // видео в шапке главной
    heroPoster: "assets/img/og-preview.jpg",
  },

  /* ---------- Текст на главной ---------- */
  hero: {
    title: "Создаём видео, которое",
    titleAccent: "невозможно пролистать",
    subtitle: "Съёмка, монтаж, моушн-дизайн и ИИ-генерации. Полный цикл продакшна — от идеи до финального кадра.",
  },

  /* ---------- Цифры на главной ---------- */
  stats: [
    { num: "12+",   lbl: "лет работаем" },
    { num: "1000+", lbl: "проектов сдано" },
    { num: "100+",  lbl: "компаний-клиентов" },
  ],

  /* ---------- О студии ---------- */
  about: {
    title: "Студия, где картинка работает на результат",
    text: "BRO MEDIA — продакшн-студия полного цикла. Мы берём проект от идеи и сценария до финального рендера: снимаем, монтируем, собираем графику и подключаем нейросети там, где это ускоряет и усиливает результат. Съёмки проводим в Москве и Московской области, монтаж, графику и ИИ-генерации делаем удалённо — по всей России и за её пределами. Работаем с брендами, медиа, бизнесом и авторами.",
  },

  /* ---------- Как мы работаем ---------- */
  process: [
    { step: "01", title: "Заявка и брифинг",
      text: "Обсуждаем задачу, формат, площадку и дедлайн. Предлагаем решение и называем стоимость." },
    { step: "02", title: "Сценарий и подготовка",
      text: "Пишем сценарий, собираем раскадровку, подбираем референсы. Согласуем всё до съёмки." },
    { step: "03", title: "Съёмка",
      text: "Снимаем в Москве и области на профессиональную технику: свет, звук, дубли." },
    { step: "04", title: "Монтаж и графика",
      text: "Собираем историю: ритм, драматургия, звук. Добавляем моушн-дизайн и ИИ-генерации." },
    { step: "05", title: "Правки и сдача",
      text: "Вносим правки по вашим замечаниям и отдаём готовый мастер в нужных форматах." },
  ],

  /* ---------- Клиентские логотипы ----------
     Когда будут готовы логотипы компаний, добавь их так:
     { name: "Название", logo: "assets/img/clients/name.png" }
     Пока стоит placeholder: { name: "", logo: "" }                     */
      clients: [
    { name: "Газпром поляна", logo: "assets/img/clients/gazprom.png" },
    { name: "Сбер Университет", logo: "assets/img/clients/sber.png" },
    { name: "Яндекс Такси", logo: "assets/img/clients/yandex.png" },
    { name: "Роза Хутор", logo: "assets/img/clients/roza.png" },
    { name: "Додо Пицца", logo: "assets/img/clients/dodo.png" },
    { name: "Alpha", logo: "assets/img/clients/alpha.png" },
    { name: "Johnson", logo: "assets/img/clients/Johnson.png" },
    { name: "Janssen", logo: "assets/img/clients/janssen.png" },
    { name: "Synergy", logo: "assets/img/clients/synergy.png" },
    { name: "MAP", logo: "assets/img/clients/map.png" },
    { name: "First", logo: "assets/img/clients/first.png" },
    { name: "Ren", logo: "assets/img/clients/ren.png" },
    { name: "IZ", logo: "assets/img/clients/iz.png" },
    { name: "360", logo: "assets/img/clients/360.png" },
    { name: "78", logo: "assets/img/clients/78.png" },
    { name: "Asna", logo: "assets/img/clients/asna.png" },
    { name: "Biosensor", logo: "assets/img/clients/biosensor.png" },
    { name: "Davinche", logo: "assets/img/clients/davinche.png" },
    { name: "Farm", logo: "assets/img/clients/farm.png" },
    { name: "Idol", logo: "assets/img/clients/idol.png" },
    { name: "Chenglong", logo: "assets/img/clients/chenglong.png" },
    { name: "Cp", logo: "assets/img/clients/cp.png" },
    { name: "Nuovita", logo: "assets/img/clients/nuovita.png" },
    { name: "Invesper", logo: "assets/img/clients/invesper.png" },
    { name: "Pechat", logo: "assets/img/clients/pechat.png" },
    { name: "Accordtec", logo: "assets/img/clients/accordtec.png" },
    { name: "Etec", logo: "assets/img/clients/etec.png" },
    { name: "Izlk", logo: "assets/img/clients/izlk.png" },
    { name: "Tm", logo: "assets/img/clients/tm.png" },
    { name: "Narhozstroy", logo: "assets/img/clients/Narhozstroy.png" },
    { name: "Caleo", logo: "assets/img/clients/caleo.png" },
    { name: "Ceresit", logo: "assets/img/clients/ceresit.png" },
    { name: "Konsole", logo: "assets/img/clients/konsole.png" },
    { name: "Lvk", logo: "assets/img/clients/LVK.png" },
    { name: "Ncl", logo: "assets/img/clients/NCL.png" },
    { name: "Fg", logo: "assets/img/clients/FG.png" },
    { name: "Finex", logo: "assets/img/clients/finEx.png" },
    { name: "Rmp", logo: "assets/img/clients/RMP.png" },
    { name: "Fabrik", logo: "assets/img/clients/fabrik.png" },
    { name: "Kraspan", logo: "assets/img/clients/kraspan.png" },
    { name: "Jzuza", logo: "assets/img/clients/jzuza.png" },
    { name: "Night", logo: "assets/img/clients/night.png" },
    { name: "Prez", logo: "assets/img/clients/prez.png" },
    { name: "R5studio", logo: "assets/img/clients/R5Studio.png" },
    { name: "Svid", logo: "assets/img/clients/svid.png" },
    { name: "Ddsos", logo: "assets/img/clients/ddsos.png" },
    { name: "Save", logo: "assets/img/clients/save.png" },
    { name: "Soedinenie", logo: "assets/img/clients/soedinenie.png" },
  ],

  /* ---------- Услуги (направления) ---------- */
  services: [
{ icon: "camera", title: "Видеосъёмка",
      text: "Снимаем на профессиональную технику: репортаж, интервью, корпоратив, мероприятия.",
      tags: ["Репортаж", "Интервью", "Реклама", "Корпоратив", "Мероприятия", "Блоги"] },
{ icon: "scissors", title: "Видеомонтаж",
      text: "Собираем историю из материала: ритм, драматургия, звук. От новостного репортажа до рекламного ролика.",
      tags: ["Репортажи", "Клипы", "Реклама", "Видеокурсы", "Видеоблоги", "Short-формат"] },
    
    
    { icon: "motion", title: "Моушн-дизайн",
      text: "Оживляем графику: титры, анимация логотипов, виртуальные студии, 3D-сцены.",
      tags: ["Шейповая анимация", "Титры", "Логотипы", "Виртуальные студии", "3D-интеграции"] },
    { icon: "sparkle", title: "ИИ-генерации",
      text: "Используем нейросети для генерации видео и фото — там, где классическая съёмка невозможна или слишком дорога.",
      tags: ["AI-видео", "AI-фото", "Апскейл", "Оживление фото", "Концепт-арт"] },
  ],

  /* ---------- ПОРТФОЛИО ----------
     У каждого направления есть разделы (categories).
     Чтобы добавить работу — добавь объект в нужный раздел:
     { title: "Название кейса", thumb: "assets/img/works/1.jpg", link: "" }
     Пока массив пустой — на сайте показываются слоты-заглушки.          */
  portfolio: [
    {
      id: "editing",
      title: "Видеомонтаж",
      categories: [
        { name: "Репортажи",          works: [] },
        { name: "Клиповый монтаж",    works: [] },
        { name: "Реклама",            works: [] },
        { name: "Видеокурсы",         works: [] },
        { name: "Видеоблоги",         works: [] },
        { name: "Короткий формат",    works: [] },
      ],
    },
    {
      id: "shooting",
      title: "Видеосъёмка",
      categories: [
        { name: "Репортажная съёмка",  works: [] },
        { name: "Интервью",            works: [] },
        { name: "Реклама",             works: [] },
        { name: "Корпоративное видео", works: [] },
        { name: "Мероприятия",         works: [] },
        { name: "Видеоблоги",          works: [] },
      ],
    },
    {
      id: "motion",
      title: "Моушн-дизайн",
      categories: [
        { name: "Шейповая анимация и титры", works: [] },
        { name: "Анимация логотипов",        works: [] },
        { name: "Виртуальные студии",        works: [] },
        { name: "3D-интеграции",             works: [] },
      ],
    },
    {
      id: "ai",
      title: "ИИ-генерации",
      categories: [
        { name: "AI-видео",   works: [] },
        { name: "AI-фото",    works: [] },
      ],
    },
  ],

  /* ---------- Видеоуроки ---------- */
  lessons: {
    title: "Учим бесплатно",
    text: "Мы ведём видеоблог, где публикуем бесплатные видеоуроки по видеомонтажу, видеосъёмке и нейросетям. А ещё говорим о журналистике — как рассказывать истории, которые смотрят. Подписывайся на удобной платформе.",
    socials: [
      { name: "Telegram",      desc: "Канал @bromediaPRO",       url: "https://t.me/bromediaPRO",                                icon: "telegram" },
      { name: "Max",           desc: "Канал видеомейкера",       url: "https://max.ru/channel_videomake",                        icon: "max" },
      { name: "YouTube",       desc: "@Bro-MediaPro",             url: "https://www.youtube.com/@Bro-MediaPro",                   icon: "youtube" },
      { name: "ВКонтакте",     desc: "Видео ВК",                 url: "https://vkvideo.ru/@club229792636/all",                   icon: "vk" },
      { name: "Rutube",        desc: "Канал на Rutube",          url: "https://rutube.ru/channel/15513512/",                     icon: "rutube" },
      { name: "Яндекс Дзен",   desc: "Лонгриды и видео",         url: "https://dzen.ru/id/60856cd60e8b482bd5db2ec3?tab=longs",   icon: "dzen" },
    ],
  },

  /* ---------- Курсы ----------
     status: "soon"  → кнопка «купить» неактивна
     Когда курс готов — поменяй на status: "live" и добавь price + link  */
  courses: [
    { title: "Основы видеомонтажа в журналистике",
      text: "Как из отснятого материала собрать новостной сюжет, который держит внимание с первой секунды.",
      status: "soon", cover: "", price: "", link: "" },
    { title: "Adobe Premiere: с нуля до профи",
      text: "Полный путь: интерфейс, таймлайн, цветокоррекция, звук, экспорт под любые платформы.",
      status: "soon", cover: "", price: "", link: "" },
    { title: "Видеомонтаж коротких роликов",
      text: "Reels, Shorts, клипы: динамика, хуки, вертикальный кадр и алгоритмы соцсетей.",
      status: "soon", cover: "", price: "", link: "" },
    { title: "Основы DaVinci Resolve",
      text: "Профессиональная цветокоррекция и сборка проектов в бесплатном редакторе.",
      status: "soon", cover: "", price: "", link: "" },
    { title: "Основы After Effects: путь в моушн-дизайн",
      text: "Ключевые кадры, анимация, титры, композитинг — первый шаг в моушн-дизайн.",
      status: "soon", cover: "", price: "", link: "" },
  ],

  /* ---------- Поддержка при покупке курсов ---------- */
  courseSupport: {
    title: "Разные уровни поддержки",
    text: "При покупке наших курсов доступны разные уровни поддержки — от базового до люкс. В каждом уровне своя глубина менторства: от проверки домашних заданий до личных созвонов и разбора твоих проектов.",
    levels: [
      { name: "Базовый",      lux: false },
      { name: "Стандарт",     lux: false },
      { name: "Продвинутый",  lux: false },
      { name: "Люкс",         lux: true  },
    ],
  },

  /* ---------- Контакты ---------- */
  contacts: {
    title: "Связаться с нами",
    text: "Обсудим проект, рассчитаем сроки и стоимость. Отвечаем в течение рабочего дня.",
    items: [
      { type: "telegram", label: "Telegram", value: "@reMix83",                 url: "https://t.me/reMix83" },
      { type: "email",    label: "Почта",    value: "mediabronf@yandex.ru",      url: "mailto:mediabronf@yandex.ru" },
    ],
  },

  /* ---------- Подвал ---------- */
  footer: {
    copy: "© 2026 BRO MEDIA. Продакшн полного цикла.",
    note: "Сделано со вниманием к каждому кадру.",
  },
};
