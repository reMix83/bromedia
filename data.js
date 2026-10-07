/* ============================================================
   BRO MEDIA — ФАЙЛ КОНТЕНТА
   Здесь ты редактируешь весь текст и ссылки, не трогая вёрстку.
   Меняешь значение в кавычках — сайт обновляется.
   ============================================================ */

const BUILD = "9.2";   /* версия сборки — для сброса кэша */

const SITE = {

  /* ---------- Основные данные студии ---------- */
  studio: {
    name: "BRO MEDIA",
    tagline: "Продакшн-студия полного цикла",
    years: "5",                        // ← сколько лет на рынке
    // ↓ видео для шапки главной. Положи файл в assets/img/ и напиши путь.
    //   Пока пусто — покажется неоновая анимированная заглушка.
    heroVideo: "https://storage.yandexcloud.net/bromedia-video/Shapka.mp4",   // видео в шапке главной
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
    { name: "Elinar",  logo: "assets/img/clients/elinar.png" },
    { name: "MDM",     logo: "assets/img/clients/mdm.png" },
  ],

  /* ---------- Подпись под логотипами ---------- */
  clientsNote: "и многие другие...",

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
       {
         title:       "Название кейса",
         thumb:       "assets/img/works/1.jpg",     ← обложка (картинка)
         link:        "https://disk.yandex.ru/i/XXXX",  ← ссылка на видео с Яндекс.Диска
         description: "Наша работа для Сбер-Университет (монтаж и инфографика)"
       }
     Если link указан — карточка кликабельна и открывает видео в модальном окне.
     Если thumb не указан — покажется слот-заглушка "Скоро".                      */
  portfolio: [
    {
      id: "editing",
      title: "Видеомонтаж",
      categories: [
        { name: "Реклама",          works: [
          {
            title: "Реклама для соцсетей для бренда Nuovita",
            thumb: "assets/img/works/nuovita.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/nuovita.mp4",
            description: "Монтаж и моушн-дизайн"
          },
          {
            title: "Реклама для соцсетей и ТВ бренда chenglong",
            thumb: "assets/img/works/chenglong.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/chenglong.mp4",
            description: "Монтаж и моушн-дизайн"
          },
          {
            title: "Реклама МАП для ТВ Краснодар",
            thumb: "assets/img/works/mapTV.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/mapTV.mp4",
            description: "Монтаж, моушн-дизайн"
          }
        ] },
        { name: "Корпоративное видео", works: [
          {
            title: "Корпоративный ролик для Яндекс-такси",
            thumb: "assets/img/works/yandex.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/yandex.mp4",
            description: "Монтаж и титры"
          },
          {
            title: "Корпоративный ролик для Альфа-будущее",
            thumb: "assets/img/works/alpha.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/alpha.mp4",
            description: "Видеомонтаж, ИИ-Генерация, Моушн-дизайн"
          },
          {
            title: "Международная выставка AirVent",
            thumb: "assets/img/works/AirVent.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/AirVent.mp4",
            description: "Видеомонтаж"
          }
        ] },
        { name: "Клиповый монтаж",      works: [
          {
            title: "Ролик отчётник для Донецкой недели моды",
            thumb: "assets/img/works/donmod.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/Donmod.mp4",
            description: "Монтаж и титры"
          },
          {
            title: "Анонс к выступлению певца SHAMAN",
            thumb: "assets/img/works/SHAMAN.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/SHAMAN.mp4",
            description: "Видеомонтаж"
          },
          {
            title: "Студенческий фестиваль «Студвесна»",
            thumb: "assets/img/works/stud.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/studvesna.mp4",
            description: "Монтаж, моушн-дизайн"
          }
        ] },
        { name: "Видеоблоги",           works: [
          {
            title: "Видеоблог «Вилла-вино»",
            thumb: "assets/img/works/vv.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/vv.mp4",
            description: "Монтаж, моушн-дизайн"
          },
          {
            title: "Видеоблог компании Caleo",
            thumb: "assets/img/works/caleo.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/caleo.mp4",
            description: "Видеомонтаж, моушн-дизайн"
          },
          {
            title: "Видеоблог компании FinEx",
            thumb: "assets/img/works/FINEX.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/Finex.mp4",
            description: "Видеомонтаж, моушн-дизайн"
          }
        ] },
        { name: "Короткий формат",      works: [
          {
            title: "Презентация Телеграм канала для студии дизайна «DFLY DESIGN»",
            thumb: "assets/img/works/DFLYDESIGN.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/DFLY%20DESIGN.mp4",
            description: "Монтаж, моушн-дизайн",
            isVertical: true
          },
          {
            title: "Визитная карточка для агента недвижимости",
            thumb: "assets/img/works/Visit.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/Visit.mp4",
            description: "Монтаж, моушн-дизайн",
            isVertical: true
          },
          {
            title: "Видеоблог компании Церезит",
            thumb: "assets/img/works/ceresit.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/ceresit.mp4",
            description: "Видеомонтаж, ИИ-генерации, моушн-дизайн",
            isVertical: true
          },
          {
            title: "Рилс для дубайской компании недвижимости",
            thumb: "assets/img/works/Reels1.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/Reels1.mp4",
            description: "Монтаж, титры",
            isVertical: true
          },
          {
            title: "Обложка в инстаграм для сообщества GreenFamily",
            thumb: "assets/img/works/GF.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/GF.mp4",
            description: "Моушн-дизайн",
            isVertical: true
          },
          {
            title: "Шортс для компании ZavodShow",
            thumb: "assets/img/works/krug.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/krug.mp4",
            description: "Монтаж, моушн-дизайн",
            isVertical: true
          },
          {
            title: "Шортс об истории часов для канала",
            thumb: "assets/img/works/chasy.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/chasy.mp4",
            description: "Монтаж, моушн-дизайн",
            isVertical: true
          },
          {
            title: "Сторис в инстаграм для бизнескоуча",
            thumb: "assets/img/works/storis.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/storis.mp4",
            description: "Монтаж, моушн-дизайн",
            isVertical: true
          }
        ] },
        { name: "Репортажи",            works: [
          {
            title: "Репортаж для телеканала Москва 360",
            thumb: "assets/img/works/360.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/360%2B.mp4",
            description: "Выездной корреспондент, видеосъёмка, технический монтаж"
          },
          {
            title: "Клиповая репортажная съёмка чемпионата по вольной борьбе",
            thumb: "assets/img/works/volniki.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/volniki.mp4",
            description: "Видеосъёмка, видеомонтаж"
          },
          {
            title: "Конкурс журналистских работ",
            thumb: "assets/img/works/meropr1.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/meropr1.mp4",
            description: "Видеомонтаж"
          }
        ] },
        { name: "Видеокурсы",         works: [
          {
            title: "Видеокурс для Сбер-Университет",
            thumb: "assets/img/works/sber.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/sber.mp4",
            description: "Видеомонтаж, инфографика, саунд-дизайн"
          },
          {
            title: "Видео курс для Московской академии предпринимательства",
            thumb: "assets/img/works/mapkurs.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/mapkurs.mp4",
            description: "Видеомонтаж, моушн-дизайн"
          },
          {
            title: "Курс для университета Синергия",
            thumb: "assets/img/works/kursii.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/kursii.mp4",
            description: "Видеомонтаж, моушн-дизайн"
          }
        ] },
      ],
    },
    {
      id: "shooting",
      title: "Видеосъёмка",
      categories: [
        { name: "Репортажная съёмка",   works: [
          {
            title: "Баскетбольный турнир «Легенда улиц 2026»",
            thumb: "assets/img/works/legend.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/Legend.mp4",
            description: "Видеосъёмка, монтаж, титры"
          },
          {
            title: "Репортаж о женской хоккейной команде",
            thumb: "assets/img/works/led.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/led.mp4",
            description: "Видеосъёмка, монтаж, титры"
          },
          {
            title: "Финал «Ночной хоккейной лиги»",
            thumb: "assets/img/works/nxl.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/nxl.mp4",
            description: "Видеосъёмка, монтаж"
          }
        ],
          note: "Репортажная съёмка наш основной профиль, но коллеги по цеху из MONOLITH7 снимут что угодно: от рекламы - до кино",
          partner: {
            title: "Шоурил MONOLITH7",
            description: "Портфолио партнёров",
            thumb: "assets/img/works/showreelmono.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/showreel%20%D0%BC%D0%BE%D0%BD%D0%BE%D0%BB%D0%B8%D1%82.mp4"
          } },
      ],
    },
    {
      id: "motion",
      title: "Моушн-дизайн",
      categories: [
        { name: "Шейповая анимация и титры",works: [
          {
            title: "Видеоинструкция для курса по криптоторговле",
            thumb: "assets/img/works/instr.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/instr.mp4",
            description: "Шейповая анимация"
          },
          {
            title: "Промо для кинофестиваля «Свидание с Россией»",
            thumb: "assets/img/works/svid.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/svid.mp4",
            description: "Моушн-дизайн"
          },
          {
            title: "Промо для Президентской программы подготовки управленческих кадров",
            thumb: "assets/img/works/25let.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/25let.mp4",
            description: "Кинетические титры, анимация лого"
          }
        ] },
        { name: "Анимация логотипов",   works: [
          {
            title: "Интро компании DAVINCILAB",
            thumb: "assets/img/works/dll.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/lablogo.mp4",
            description: "Моушн-дизайн"
          },
          {
            title: "Создание интро для блога X-Cinema",
            thumb: "assets/img/works/X-CINEMA.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/X-CINEMA.mp4",
            description: "Моушн-дизайн"
          },
          {
            title: "Интро для Ночной хоккейной лиги",
            thumb: "assets/img/works/nxlscr.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/nxllogo.mp4",
            description: "Моушн-дизайн"
          },
          {
            title: "Интро для питомника растений Fixgarden",
            thumb: "assets/img/works/fgl.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/fixlogo.mp4",
            description: "Шаблонная анимация"
          },
          {
            title: "Интро компании Нархозстрой",
            thumb: "assets/img/works/nxzl.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/nxs.mp4",
            description: "Шаблонная анимация"
          },
          {
            title: "Интро компании Premama",
            thumb: "assets/img/works/premama.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/premama.mp4",
            description: "Анимация логотипа шейпами"
          }
        ] },
        { name: "Виртуальные студии",   works: [
          {
            title: "Создание 3d студии для телеканала «Мой дом»",
            thumb: "assets/img/works/3dstud.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/3dstud.mp4",
            description: "Видеосъёмка, кеинг, моушн-дизайн"
          },
          {
            title: "Виртуальная 3d-студия для телеканала «Мой дом»",
            thumb: "assets/img/works/virt2.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/virt2.mp4",
            description: "Полное графическое сопровождение телеканала"
          }
        ] },
        { name: "3D-интеграции",        works: [
          {
            title: "Графика для телепередачи «Легенды военной отечественной авиации»",
            thumb: "assets/img/works/SU27.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/SU27.mp4",
            description: "Моушн-дизайн с интеграцией 3d модели"
          },
          {
            title: "Видеоблог курорта Газпром",
            thumb: "assets/img/works/mult.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/Multpolana.mp4",
            description: "Моушн-дизайн и интеграция 3d-моделей"
          },
          {
            title: "Промышленное моделирование для компании ЭТЕК",
            thumb: "assets/img/works/etek.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/etek.mp4",
            description: "3d-моделирование, моушн-дизайн"
          }
        ] },
      ],
    },
    {
      id: "ai",
      title: "ИИ-генерации",
      categories: [
        { name: "AI-видео",             works: [
          {
            title: "Реклама на ТВ для МАП",
            thumb: "assets/img/works/mapAI.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/mapAI.mp4",
            description: "Генерация, видеомонтаж, саунд-дизайн"
          },
          {
            title: "Стори-теллинг ролик",
            thumb: "assets/img/works/ai2.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/Ai2.mp4",
            description: "Генерация, видеомонтаж, саунд-дизайн"
          },
          {
            title: "Перегенерация рекламного ролика Evergoy",
            thumb: "assets/img/works/Evergoy.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/Evergoy.mp4",
            description: "Генерация, видеомонтаж, саунд-дизайн"
          },
          {
            title: "Презентация компании ASNA",
            thumb: "assets/img/works/asnaii.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/asnaii.mp4",
            description: "Инфографика в ИИ"
          },
          {
            title: "Промо для Феерии вкуса",
            thumb: "assets/img/works/feeria.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/feeria.mp4",
            description: "ИИ-генерации"
          },
          {
            title: "ИИ-генерации",
            thumb: "assets/img/works/workii.jpg",
            link: "https://storage.yandexcloud.net/bromedia-video/IIwork.mp4",
            description: "Захват движения, липсинг, построение сцен"
          }
        ] },
        { name: "AI-фото",              works: [
          {
            title: "Предметная съёмка для маркетплейсов",
            description: "Генерация предметов на белом фоне и в среде",
            thumb: "assets/img/works/1.jpg",
            photo: true
          },
          {
            title: "Fashion-съёмка и лукбуки",
            description: "Генерация моделей и образов без съёмки",
            thumb: "assets/img/works/2.jpg",
            photo: true
          },
          {
            title: "Портреты и аватары для брендов",
            description: "Генерация лиц и портретов под задачу бренда",
            thumb: "assets/img/works/3.jpg",
            photo: true
          },
          {
            title: "Интерьеры и композитинг",
            description: "Генерация интерьеров и расстановки объектов",
            thumb: "assets/img/works/4.jpg",
            photo: true
          },
          {
            title: "Food-съёмка и фудстайлинг",
            description: "Генерация блюд и подачи для меню",
            thumb: "assets/img/works/5.jpg",
            photo: true
          },
          {
            title: "Реставрация архивных фото",
            description: "Восстановление и повышение детализации старых кадров",
            thumb: "assets/img/works/6.jpg",
            photo: true
          },
          {
            title: "Построение моделей для генерации",
            description: "Замена лиц в сюжете",
            thumb: "assets/img/works/7.jpg",
            photo: true
          },
          {
            title: "Постеры и обложки",
            description: "Генерация постеров и обложек под релиз",
            thumb: "assets/img/works/8.jpg",
            photo: true
          },
          {
            title: "Замена фона и окружения",
            description: "Замена фона и построение нового окружения",
            thumb: "assets/img/works/9.jpg",
            photo: true
          }
        ] },
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
