var x2x = {};
x2x.x2y = {};
x2x.x2z = {};
x2x.x30 = {};
x2x.x31 = {};
x2x.x32 = {x33: "2", x34: "003", x35: "0", x36: function () {
  return this.x33 + "." + this.x34;
}};
x2x.x2y.x37 = function () {
  var x38;
  var x37 = {x39: {x3a: 0, x3b: 1, x3c: 2}, x3d: [["Sunday", "Воскресенье", "Недiля"], ["Monday", "Понедельник", "Понедiлок"], ["Tuesday", "Вторник", "Вiвторок"], ["Wednesday", "Среда", "Середа"], ["Thursday", "Четверг", "Четвер"], ["Friday", "Пятница", "П'ятниця"], ["Saturday", "Суббота", "Субота"]], x3e: [["January", "Января", "Сiчня"], ["February", "Февраля", "Лютого"], ["March", "Марта", "Березня"], ["April", "Апреля", "Квiтня"], ["May", "Мая", "Травня"], ["June", "Июня", "Червня"], ["July", "Июля", "Липня"], ["August", "Августа", "Серпня"], ["September", "Сентября", "Вересня"], ["October", "Октября", "Жовтня"], ["November", "Ноября", "Листопада"], ["December", "Декабря", "Грудня"]], x3f: {x3g: ["Options", "Настройки", "Налаштування"], x3h: ["Editing playlists", "Редактирование плейлистов", "Редагування плейлистів"], x3i: ["Add playlist", "Добавить плейлист", "Додати плейлист"], x3j: ["Delete playlist", "Удалить плейлист", "Видалити плейлист"], x3k: ["Login (e-mail/phone number)", "Логин (e-mail/тел.номер)", "Логiн (e-mail/номер тел.)"], x3l: ["Password", "Пароль", "Пароль"], x3m: ["App. language", "Язык интерфейса", "Мова iнтерфейсу"], x3n: ["Restore state", "Возобновлять состояние", "Вiдновлювати стан"], x3o: ["Navigation type", "Тип навигации", "Тип навiгацiї"], x3p: ["Time offset", "Смещение времени", "Змiщення часу"], x3q: ["Buffer control", "Управление буфером", "Керування буфером"], x3r: ["Total buffer", "Общий буфер", "Загальний буфер"], x3s: ["Buffer allocation", "Распределение буфера", "Розподiл буфера"], x3t: ["Clock in mediaplayer", "Часы в медиаплеере", "Годинник в медiаплеєрi"], x3u: ["Color theme", "Цветовая тема", "Тема оформлення"], x3v: ["Background", "Фоновый рисунок", "Фон"], x3w: ["'All' group", "Группа 'Все'", "Група 'Всi'"], x3x: ["Font size", "Размер шрифта", "Розмiр шрифта"], x3y: ["Items size", "Размер элементов", "Розмiр елементiв"], x3z: ["Parent key", "Родительский код", "Код батькiвського контролю"], x40: ["Remember parent key", "Запоминать код", "Запам'ятовувати код"], x41: ["Playing mode", "Режим воспроизведения", "Режим вiдтворення"], x42: ["Information", "Информация", "Iнформацiя"], x43: ["Reset options", "Сброс настроек", "Скидання налаштувань"], x44: ["PlayerType", "Тип плеера", "Тип плеєра"], x45: ["Videoplayer", "Видеоплеер", "Вiдеоплеєр"], x46: ["IPTV player", "IPTV плеер", "IPTV плеєр"], x47: ["HLS player", "HLS плеер", "HLS плеєр"], x48: ["HTML Aspect Ratio", "Соотношение сторон HTML", "Спiввiдношення сторiн HTML"], x49: ["Watch shift", "Сдвиг просмотра", "Змiщення перегляду"], x4a: ["Use direct links", "Исп. прямые ссылки", "Вик. прямi посилання"], x4b: ["Process HDMI events", "Обработка событий HDMI", "Обробка подiй HDMI"], x4c: ["Use UDP proxy", "Использовать UDP прокси", "Вик. UDP проксi"], x4d: ["UDP proxy address", "Адрес UDP прокси", "Адреса UDP проксi"], x4e: ["None", "Отсутствует", "Вiдсутнiй"], x4f: ["About", "О программе", "Про програму"], x4g: ["Blue", "Синяя", "Синя"], x4h: ["Green", "Зеленая", "Зелена"], x4i: ["Red", "Красная", "Червона"], x4j: ["Gray", "Серая", "Сiра"], x4k: ["Tune", "Настроить", "Налаштувати"], x4l: ["- Main hue", "- Основной оттенок", "- Головний вiдтiнок"], x4m: ["- Addition hue", "- Дополнительные оттенки", "- Додатковi вiдтiнки"], x4n: ["- Saturation", "- Насыщенность", "- Насиченiсть"], x4o: ["- Brightness", "- Яркость", "- Яскравiсть"], x4p: ["- Contrast", "- Контраст", "- Контраст"], x4q: ["- Opacity", "- Непрозрачность", "- Непрозорiсть"], x4r: ["Theme type", "Тип темы", "Тип теми"], x4s: ["Playlists", "Плейлисты", "Списки вiдтворення"], x4t: ["Favorites edit", "Редактирование Избранного", "Редагування Обраних"], x4u: ["Next: ", "Далее: ", "Далi: "], x4v: ["Cancel & Exit", "Выйти без сохр.", "Вийти без збер."], x4w: ["Save & Exit", "Сохр. и выйти", "Збер. та вих."], x4x: ["Select", "Выбор", "Вибiр"], x4y: ["Cancel", "Отмена", "Вiдмiна"], x4z: ["Apply", "Принять", "Прийняти "], x50: ["Return", "Возврат", "Назад"], x51: ["Exit", "Выход", "Вихiд"], x52: ["Save", "Сохранить", "Зберегти"], x53: ["Navigation", "Навигация", "Навiгацiя"], x54: ["Login/Refresh", "Авторизация/Обновить", "Авторизацiя/оновити"], x55: ["Hide/Return", "Скрыть/Возврат", "Сховати/Назад"], x56: ["Menu", "Меню", "Меню"], x57: ["Continue", "Продолжить", "Продовжити"], x58: ["Sort", "Сортировка", "Сортування"], x59: ["Audio lang.", "Зв. дорожка", "Зв. дорiжка"], x5a: ["PSize", "Размер изобр.", "Розмiр зобр."], x5b: ["For exit press ", "Для выхода нажмите ", "Для виходу натиснiть "], x5c: [" again", " еще раз", " ще раз"], x5d: ["Options updated", "Настройки обновлены", "Налаштування оновленi"], x5e: ["Autentification data not set", "Не заданы регистрационные данные в настройках", "Не заданi реєстрацiйнi данi в налаштуваннях"], x5f: ["Unknown stream link", "Неизвестный тип ссылки", "Невiдомий тип посилання"], x5g: ["Stream link not support on device", "Невозможно воспроизвести поток на этом устройстве", "Неможливо вiдтворити потiк на даному пристрої"], x5h: ["Failed to connect to server", "Не удалось подключиться к серверу", "З'єднання з сервером не вдалось"], x5i: ["Service temporary not available", "Сервис временно не доступен", "Сервiс тимчасово не доступний"], x5j: ["Try connect later", "Попробуйте подключиться позже", "Спробуйте пiдключитись пiзнiше"], x5k: ["Incorrect login or password", "Неверное имя или пароль", "Не правильний логiн або пароль"], x5l: ["The device is successfully registered", "Устройство успешно зарегистрировано", "Пристрiй вдало зареєстровано"], x5m: ["Playlist has an unknown data structure", "Неизвестный формат данных плейлиста", "Невiдомий формат даних плейлиста"], x5n: ["Error during device registration", "Ошибка при регистрации устройства", "Помилка реєстрацiї пристрою"], x5o: ["not registerred", "не зарегистрировано", "не зареєстровано"], x5p: ["Error connecting to stream", "Ошибка подключения к источнику потока", "Помилка пiдключення до джерела потоку"], x5q: ["No network connection", "Отсутствует подключение к сети", "Вiдсутнє пiдключення до мережi"], x5r: ["No network connection", "Нет соединения с сетью", "Вiдсутнє пiдключення до мережi"], x5s: ["No internet connection", "Нет подключения к интернет", "Вiдсутнє пiдключення до iнтернет"], x5t: ["Error stream playback", "Ошибка воспроизведения потока", "Помилка вiдтворення потоку"], x5u: ["Reconnect ...", "Восстановление подключения...", "Вiдновлення з'єднання..."], x5v: ["Connecting restored", "Подключение восстановлено", "З'єднання вiдновлено"], x5w: ["Could not play the stream", "Не удалось воспроизвести поток", "Не вдалось вiдтворити потiк"], x5x: ["Error on get data", "Ошибка получения данных", "Помилка отримання даних"], x5y: ["No data received from the requested address", "Данные с указанного адреса не получены", "Данi за вказаним посиланням не отримано"], x5z: ["No access to the requested address", "Нет доступа к запрашиваемому адресу", "Не отриманий доступ за вказаним посиланням"], x60: ["Playlist added", "Плейлист добавлен", "Плейлист додано"], x61: ["Unable to add playlist", "Не удалось добавить плейлист", "Не вдалось додати плейлист"], x62: ["Playlist deleted", "Плейлист удален", "Плейлист видалено"], x63: ["Playlist not selected", "Плейлист не выбран", "Плейлист не обрано"], x64: ["Channel not selected", "Канал не выбран", "Канал не обрано"], x65: ["Unable to delete playlist", "Не удалось удалить плейлист", "Не вдалось видалити плейлист"], x66: ["Data empty", "Данных не обнаружено", "Даних не знайдено"], x67: ["Unable to get the link to the video.", "Не удалось получить ссылку на видео.", "Не вдалось отримати посилання на вiдео"], x68: ["Application update", "Версия виджета обновлена", "Версiю додатку оновлено"], x69: ["Server connection lost", "Нет подключения к серверу", "Вiдсутнє пiдключения до сервера"], x6a: ["Not supported videocodec", "Не поддерживаемый видеокодек", "Вiдеокодек не пiдтримується"], x6b: ["Access denied", "Доступ запрещен", "Доступ заборонено"], x6c: ["Function not support", "Функция не поддерживается", "Функцiя не пiдтримєуться"], x6d: ["Function is disabled", "Функция отключена", "Функцiя вимкнена"], x6e: ["Playlist empty", "Пустой плейлист", "Пустий плейлист"], x6f: ["Not available to add", "Недоступно для добавления", "Неможливо додати"], x6g: ["Added", "Добавлено", "Додано"], x6h: ["Removed", "Удалено", "Видалено"], x6i: ["Renamed", "Переименовано", "Переiменовано"], x6j: ["Already present", "Уже присутствует", "Вже присутнє"], x6k: ["'Favorites' saved", "'Избранное' сохранилось", "Обране збережено"], x6l: ["File missing", "Отсутствует файл", "Вiдсутнiй файл"], x6m: ["Rewind or forward is not possible for this stream", "Перемотка этого потока не доступна", "Цей потiк не можливо перемотати"], x6n: ["Need a select action", "Нужно выбрать действие", "Необхiдно вибрати дiю"], x6o: ["Not available for current stream", "Недоступно для текущего потока", "Недоступнио для даного потоку"], x6p: ["Add to favorites", "Добавить в избранное", "Додати до обраного"], x6q: ["Remove", "Удалить", "Видалити"], x6r: ["Rename", "Переименовать", "Перейменувати"], x6s: ["Create group", "Создать группу", "Створити групу"], x6t: ["Channel EPG/Archive", "EPG/Архив канала", "EPG/Архiв каналу"], x6u: [" of ", " из ", " з "], x6v: ["Device registration/selection", "Регистрация/выбор устройства", "Реєстрацiя/вибiр пристрою"], x6w: ["New device", "Новое устройство", "Новий пристрiй"], x6x: ["Specify the name of the device:", "Задайте имя устройству просмотра:", "Задайте iм'я пристрою"], x6y: ["Specify the playlist link:", "Введите ссылку на плейлист", "Введiть посилання на плейлист"], x6z: ["Specify the playlist name:", "Введите имя плейлиста", "Введiть iм'я плейлиста"], x70: ["Device name: ", "Имя устройства: ", "Iм'я пристрою: "], x71: ["Loading...", "Загрузка...", "Завантаження..."], x72: ["Connecting ", "Подключение ", "Пiдключення "], x73: ["Buffering ", "Буферизация ", "Буферизацiя "], x74: ["Reconnecting...", "Восстановление...", "Вiдновлення..."], x75: ["Rewinding...", "Перемотка...", "Перемотування..."], x76: ["Paused", "Остановлено", "Зупинено"], x77: ["Error", "Ошибка", "Помилка"], x78: ["Stream not found", "Отсутствует поток", "Вiдсутнiй потiк"], x79: ["No connection", "Отсутствует подключение", "Вiдсутнє пiдключення"], x7a: ["Volume: ", "Громкость: ", "Гучнiсть"], x7b: ["off", "выкл.", "вимк."], x7c: ["Sound on", "Звук включен", "Звук вимк."], x7d: ["Audio stream: ", "Зв.дорожка: ", "Звук.дорiжка: "], x7e: ["Standard", "Стандартный", "Стандартний"], x7f: ["Zoom", "Увеличенный", "Збiльшений"], x7g: ["Optimal", "Оптимальный", "Оптимальний"], x7h: ["Wide Zoom", "Широк. увел.", "Широк. збiльш."], x7i: [" zoom", " увел.", " збiльш."], x7j: ["Wide", "Широкий", "Широкий"], x7k: ["User name: ", "Имя пользователя: ", "Користувач: "], x7l: ["All", "Все", "Всi"], x7m: ["Delete playlist?", "Удалить плейлист?", "Видалити плейлист?"], x7n: ["Delete stream?", "Удалить поток?", "Видалити потiк?"], x7o: ["Reset options?", "Сбросить настройки?", "Скинути налаштування?"], x7p: ["Close application?", "Закрыть приложение?", "Завершити роботу?"], x7q: ["Yes", "Да", "Так"], x7r: ["No", "Нет", "Нi"], x7s: ["Enter key:", "Введите код:", "Введiть код:"], x7t: ["Enter current key:", "Введите текущий код:", "Введiть поточний код:"], x7u: ["Enter new key:", "Введите новый код:", "Введiть новий код:"], x7v: ["Failed to get the EPG data", "Не удалось получить данные EPG", "Не вдалось отримати данi EPG"], x7w: ["Not set EPG", "Не задан EPG", "Не задано EPG"], x7x: ["EPG for the stream is not specified or not available", "EPG для потока не указан или не доступен", "EPG для потоку не вказаний або не доступний"], x7y: ["No information about the current program", "Нет информации о текущей программе", "Немає iнформацiї про поточну програму"], x7z: ["EPG information is outdated", "Информация EPG устарела", "Iнформацiя EPG застарiла"], x80: ["Broadcast", "Эфирные телеканалы", "Ефiрнi канали"], x81: ["Next page", "Следующая страница", "Наступна сторiнка"], x82: ["Favorites", "Избранное", "Обране"], x83: ["Enter group name", "Введите имя группы", "Введiть iм'я групи"], x84: ["Select subgroup name", "Выберите имя подгруппы", "Оберiть iм'я пiдгрупи"], x85: ["Archive", "Архив", "Архiв"], x86: ["No description", "Описание не доступно", "Опис вiдсутнiй"], x87: ["No information", "Информация отсутствует", "Iнформацiя вiдсутня"], x88: ["No TV program", "Нет телепрограммы", "Немає телепрограми"]}, x89: {x8a: [["Eng."], ["Рус."], ["Укр."]], x8b: [["Off", "Выкл.", "Вимк."], ["Top left", "Вверху слева", "Вгорi злiва"], ["Top right", "Вверху справа", "Вгорi справа"]], x8c: [["On", "Вкл.", "Увiмкн."], ["Off", "Выкл.", "Вимк."]], x8d: [["Dark", "Темная", "Темна"], ["Light", "Светлая", "Свiтла"]], x8e: [["List", "Список", "Список"], ["Tile", "Плитка", "Плитка"], ["List [c]", "Список [к]", "Список [к]"], ["Tile [c]", "Плитка [к]", "Плитка [к]"]], x8f: [["Small", "Уменьшенный", "Зменшений"], ["Normal", "Нормальный", "Нормальний"], ["Big", "Увеличенный", "Збiльшений"]], x8g: [["No", "Не запоминать", "Нi"], ["5 minutes", "5 минут", "5 хвилин"], ["30 minutes", "30 минут", "30 хвилин"], ["90 minutes", "90 минут", "90 хвилин"], ["Before restart", "До перезагр.", "До перезавант."]], x8h: [["None", "Нет", "Не створювати"], ["Load order", "В пор. загрузки", "В пор. завант."], ["Sort order", "В пор. сорт.", "В пор. сорт."], ["Alphabetical", "По алфавиту", "За алфавiтом"]], x8i: [["Sequentially", "Подряд", "Послiдовно"], ["Repeat one", "Повтор. один", "Повтор. один"], ["Repeat list", "Повтор. список", "Повтор. список"]], x8j: [["Autoselect", "Aвтовыбор", "Автовибiр"], ["Standard", "Стандартный", "Стандартний"], ["SEF player", "SEF плеер", "SEF плеєр"]]}, x8k: {x8l: ["Login. Use the same login as to access the site <span style='color:#0080d0;'>https://ottplayer.es</span>. This should be an email address or phone number.Case sensetive.", "Логин. Используйте тот же логин, что и для входа на сайт <span style='color:#0080d0;'>https://ottplayer.es</span>. Это должен быть адрес электронной почты, или номер телефона. Учитывайте регистр символов.", "Логiн. Використовуйте той самий логiн, що й для входу на сайт <span style='color:#0080d0;'>https://ottplayer.es</span>. Це повинна бути адреса електронної пошти, або номер телефону. Враховуйте регiстр символiв."], x8m: ["Password. Use the same password as to access the site <span style='color:#0080d0;'>https://ottplayer.es</span>. Case sensetive.", "Пароль. Используйте тот же пароль, что и для входа на сайт. <span style='color:#0080d0;'>https://ottplayer.es</span>. Учитывайте регистр символов.", "Пароль. Використовуйте той самий пароль, що й для входу на сайт <span style='color:#0080d0;'>https://ottplayer.es</span>. Враховуйте регiстр символiв."], x8n: ["Application language", "Язык интерфейса приложения", "Мова iнтерфейсу"], x8o: ["Type of main navigation interface", "Тип основного навигационного интерфейса", "Тип основного навiгацiйного iнтерфейсу"], x8p: ["The time offset in application time relative to the viewing device. It affects the display clock time and EPG events", "Смещение времени в приложении, относительно времени устройства просмотра. Влияет на отображаемое время часов и событий EPG", "Змiщення часу в додатку, вiдносно часу в пристрої. Впливає на вiдображення годинника та подiй в EPG"], x8q: ["Color design elements of the application interface", "Цветовое оформление элементов интерфейса приложения", "Кольорове оформлення елементiв iнтерфейсу додатку"], x8r: ["The background image of the user interface", "Фоновое изображение интерфейса пользователя", "Фонове зображення iнтерфейсу користувача"], x8s: ["Return to the last played video, or category, then restart the application.", "Возврат к последнему воспроизводимому видео, или категории, после перезапуска приложения.", "Повернення до вiдтворення останнього, перед вимкненням, вiдео або категорiї."], x8t: ["Clock, that can be output during playback of content.", "Часы, выводящиеся во время воспроизведения контента.", "Годинник, що виводиться пiд час вiдтворення контенту."], x8u: ["Manage the size of the buffer.", "Управление размером буфера.", "Керування розмiром буфера."], x8v: ["The total amount of memory allocated for data buffering. To use this option the buffer control must be enabled.", "Общий размер памяти, выделяемой под буферизацию данных. Чтобы эта настройка действовала, управление буфером должно быть включено.", "Загальний розмір пам'яті, виділеної під буферизацію даних. Щоб ця опцiя діяла, управління буфером має бути увiмкнено."], x8w: ["The aspect ratio of starting buffer (at which the playback starts filling) and pending buffer at percentage of the total size. To use this option the buffer control must be enabled.", "Соотношение размеров стартового буфера (при заполнении которого начинается воспроизведение) и буфера продолжения в процентах от общего размера. Чтобы эта настройка действовала, управление буфером должно быть включено.", "Співвідношення розмірів стартового буфера (при заповненні якого починається відтворення) та буфера продовження у відсотках від загального розміру. Щоб ця опцiя діяла, управління буфером має бути увiмкнено."], x8x: ["The access code to the content with age restrictions.If you enter an empty value code will not be requested. To change the value you must enter a valid code.", "Код доступа к контенту с возрастным ограничением.При вводе пустого значения код не будет запрашиваться. Для изменения значения нужно ввести действующий код.", "Код доступу до контенту з віковим обмеженням. При введенні порожнього значення обмеження буде знято. Для зміни значення потрібно ввести діючий код."], x8y: ["The time during which the application will not prompt the parent code repeated. To change the value you must enter a valid code.", "Время, на протяжении которого приложение не будет запрашивать родительский код повторно. Для изменения значения нужно ввести действующий код.", "Час, протягом якого додаток не буде запитувати батьківський код повторно. Для зміни значення потрібно ввести діючий код."], x8z: [["<center><span style='color:#12CC00;'>OttPlayer</span> - a service that allows you to collect all your IP-TV in one playlist, adjust the channel order, receive electronic program guide.</center>", "<br><center>To get started you need to:</center>", "<br>- register on the site of the project: <span style='color:#0080d0;'>https://ottplayer.es</span>", "<br>- registration data to access the site (e-mail or phone number and password) must be made in the settings and login to register your device", "<br>- upload to the site playlist previously downloaded from your source", "<br>- bind playlist to a device", "<br>- enjoy watching.", "<br><br>The project is constantly evolving and improving. Your feedback and suggestions you can send to the address <span style='color:#00ccff'>ottplayeriptv@gmail.com</span>", " or left on the project forum."].join(""), ["<center><span style='color:#12CC00;'>OttPlayer</span> - это сервис, который позволяет Вам собрать всё ваше IP-телевидение в одном плейлисте, настроить порядок каналов, получить электронную программу передач.</center>", "<br><center>Для начала работы необходимо:</center>", "<br>- зарегистрироваться на сайте проекта: <span style='color:#0080d0;'>https://ottplayer.es</span>", "<br>- регистрационные данные доступа к сайту (e-mail или номер телефона и пароль) нужно внести в настройках и выполнить вход для регистрации Вашего устройства", "<br>- закачать на сайт плейлист, предварительно скачанный из Вашего источника", "<br>- привязать плейлист к устройству ", "<br>- наслаждаться просмотром.", "<br><br>Проект постоянно развивается и совершенствуется. Ваши отзывы и предложения Вы можете направить по адресу <span style='color:#00ccff'>ottplayeriptv@gmail.com</span>,", " или оставить на форуме проекта."].join(""), ["<center><span style='color:#12CC00;'>OttPlayer</span> - це сервiс, який дозволяє Вам зiбрати все ваше IP-телебачення в одному плейлистi, налаштувати порядок каналiв, отримати электронну програму передач.</center>", "<br><center>Для початку роботи необхiдно:</center>", "<br>- зареєструватись на сайтi проекту: <span style='color:#0080d0;'>https://ottplayer.es</span>", "<br>- реєстрацiйнi данi доступу до сайту (e-mail або номер телефону та пароль) потрiбно внести в налаштування та виконати вхiд для реєстрацiї Вашого пристрою", "<br>- завантажити на сайт плейлист", "<br>- прив'язати плейлист до пристрою ", "<br>- насолоджуватись переглядом.", "<br><br>Проект постiйно розвивається і вдосконалюється. Ваші відгуки та пропозиції Ви можете надіслати на адресу <span style='color:#00ccff'>ottplayeriptv@gmail.com</span>,", " або залишити на форумi проекту."].join("")], x90: ["Specifies the need for formation and order of channels in the group 'All'", "Определяет необходимость формирования и порядок каналов в группе 'Все'", "Визначає необхідність формування і порядок каналів в групі 'Всi'"], x91: ["Playing mode", "Режим воспроизведения", "Режим вiдтворення"], x92: ["Reset options to default.<br><span style='color:#F66'>Attention! All previously made to your data will be irretrievably lost.</span>", "Сброс настроек к исходным значениям.<br><span style='color:#F66'>Внимание! Все ранее внесенные Вами данные будут безвозвратно утеряны.</span>", "Скидання налаштувань до початкових значень.<br><span style='color:#F66'>Увага! Всi ранiше внесенi Вами данi будут безповоротно втраченi.</span>"], x93: ["Type of player.In the standard player does not work to switch audio tracks, but perhaps less frequent buffering data.", "Тип плеера. В стандартном плеере не работает переключение звуковых дорожек, но возможна менее частая буферизация данных.", "Тип плеєра. У стандартному плеєрі не працює перемикання звукових доріжок, але можлива менш часта буферизация даних."], x94: ["Type of player for video playback", "Тип плеера для воспроизведения видеофайлов", "Тип плеєра для відтворення відеофайлів"], x95: ["Type of player to play IPTV", "Тип плеера для воспроизведения IPTV", "Тип плеєра для відтворення IPTV"], x96: ["Type of player to play HLS", "Тип плеера для воспроизведения HLS", "Тип плеєра для відтворення HLS"], x97: ["The method of changing the aspect ratio", "Метод изменения соотношения сторон", "Метод змiни спiввiдношення сторiн"], x98: ["Watch shift. Permanent shift viewing on all channels playlist. This option has an effect only with the support of an arbitrary choice of viewing time by the operator, by specifying a time stamp in the stream address.", "Сдвиг просмотра. Постоянный сдвиг просмотра по всем каналам плейлиста. Опция имеет эффект только при пoддержке оператором выбора произвольного времени просмотра, путем указания меток времени в адресе потока.", "Змiщення перегляду.Постійний зсув перегляду по всіх каналах плейлиста. Опція має ефект тільки за підтримки оператором вибору довільного часу перегляду, шляхом вказівки міток часу в адресі потоку."], x99: ["It enables the ability to add playlists by direct link. On some devices, the download is possible only if the http-header file access directive:<br><br><strong>Access-Control-Allow-Origin: http://widget.ottplayer.es</strong><br><br> or:<br><br><strong>Access-Control-Allow-Origin: *</strong><br><br>If your device is not working playlist download the direct link - send this information to a provider playlist.", "Включает возможность добавления плейлистов путем указания прямой ссылки. На некоторых устройствах загрузка возможна только при наличии в http-заголовке файла директивы доступа: <br><br><strong>Access-Control-Allow-Origin: http://widget.ottplayer.es</strong><br><br> либо:<br><br><strong>Access-Control-Allow-Origin: *</strong><br><br>Если на Вашем устройстве не работает загрузка плейлиста по прямой ссылке - передайте эту информацию провайдеру плейлиста.", "Вмикає можливість додавання плейлистів шляхом вказівки прямого посилання. На деяких пристроях, завантаження можливе тільки при наявності в http-заголовку файлу директиви доступу: <br><br><strong>Access-Control-Allow-Origin: http://widget.ottplayer.es</strong><br><br> або:<br><br><strong>Access-Control-Allow-Origin: *</strong><br><br>Якщо на вашому пристрої не працює завантаження плейлиста за прямим посиланням - передайте цю інформацію провайдеру плейлиста."], x9a: ["Enables consoles reaction to the events of HDMI, such as power on / off the TV, switch the TV to another source.", "Включает реакцию приставки на события HDMI, такие как включение ТВ, переключение ТВ на другой источник сигнала.", "Вмикає реакцію приставки на події HDMI, такі як включення телевiзора, перемикання телевiзора на інше джерело сигналу."], x9b: ["Performs conversion of addresses based on UDP proxy addresses", "Включает преобразование адресов, с учетом адреса UDP прокси", "Вмикає перетворення адрес, з урахуванням адреси UDP проксі"], x9c: ["Address of the UDP proxy. Format:<br> http://xxx.xxx.xxx.xxx:pppp<br> where xxx.xxx.xxx.xxx - IP address of the proxy;<br> pppp - port number.", "Адрес используемого UDP прокси в формате:<br> http://xxx.xxx.xxx.xxx:pppp<br> где xxx.xxx.xxx.xxx - IP адрес прокси;<br> pppp - номер порта.", "Адреса використовуваного UDP проксі в форматі:<br> http://xxx.xxx.xxx.xxx:pppp<br> де xxx.xxx.xxx.xxx - IP адреса проксi;<br> pppp - номер порта."]}, x9d: function (x9e) {
    var xz = x9e !== x38;
    x38 = x9e;
    return xz;
  }, x9f: function (x9g) {
    var xz, x9h = x9g || ["-"];
    if (x9h.length > x38) {
      xz = x9h[x38];
    } else xz = x9h[0];
    return xz;
  }, x9i: function (x9j) {
    return this.x3d[x9j][x38];
  }, x9k: function (x9l) {
    return this.x3e[x9l][x38];
  }};
  x37.x9d(x37.x39.x3b);
  return x37;
}();
var x9m, x9n, x9o, x9p, x9q, x9r, x9s, x9t, x9u, x9v, x9w, x9x, x9y, x9z, xa0, xa1, xa2, xa3, xa4, xa5, xa6, xa7, xa8, xa9, xaa = function (xab) {
  x9m = null;
  x9n = typeof xac;
  return xab;
}(this);
xa9 = function () {
  x9o = xaa.document;
  x9p = xaa.setTimeout;
  x9q = xaa.clearTimeout;
  x9r = xaa.setInterval;
  x9s = xaa.clearInterval;
  x9t = xaa.Image;
  x9u = xaa.JSON;
  x9v = xaa.Math;
  x9w = xaa.RegExp;
  x9x = xaa.decodeURIComponent;
  x9y = xaa.Common;
  x9z = xaa.curWidget;
  xa8 = function () {};
  xa0 = xaa.parseInt;
  xa1 = xaa.parseFloat;
  xa2 = xaa.eval;
  xa3 = xaa.navigator;
  xa4 = xaa.String;
  xa5 = xaa.history;
  if (xaa.JSTV) {
    xa6 = xaa.JSTV;
  }
  xa7 = xaa.tizen;
  return xaa.XDomainRequest || xaa.XMLHttpRequest;
}();
xaa.xad = new function () {
  if (typeof console === "object" && typeof console.log === "function") {
    this.xae = function (xaf) {
      console.log(xaf);
    };
  } else {
    this.xae = function (xaf) {
      alert(xaf);
    };
  }
};
x2x.x2z.xag = function () {
  var _xg = xaa._xg, x37 = x2x.x2y.x37, xah = this, xai = 0, xaj = 0, xak = false, xal = false, xam = false, xan = 0, xao = 0, xap = 5;
  this.xaq = xaa.Date;
  this.xar = 6e4;
  this.xas = this.xar * 60;
  this.xat = 0 * xah.xar;
  this.xau = function (xav) {
    var xaw = new xah.xaq(xav.getTime() + xai);
    return xaw;
  };
  this.xax = function (xay) {
    var xaw = new xah.xaq(xay + xai);
    return xaw;
  };
  this.xaz = function (xb0) {
    var xb1 = xb0 / 60;
    xai = xb1 * xah.xas;
  };
  this.xb2 = function (x5) {
    if (!xak) {
      xak = true;
      var xb3 = xah.xaq.now();
      x9p(function () {
        x2x.x30.xb4.xb5(function (xb6, xb7) {
          if (xb6 === x2x.x30.xb4.xb8.xb9) {
            var xba = xah.xaq.now();
            xao = (new xah.xaq).getTimezoneOffset() * xah.xar;
            var xbb = xba - xb3;
            var xbc = xb7.getTime() - xba;
            xaj = xbc + xa0(xbb / 2, 10);
            xad.xae("server time is = " + xb7.toString());
            xad.xae("local time is = " + xah.xaq());
            xad.xae("local timezone offset: " + xao);
            if (x9v.abs(xaj) > xah.xas * 24) {
              if (--xap > 0) {
                xam = true;
                xad.xae("need resync time later");
              } else {
                xam = false;
                xad.xbd("resync time limit");
              }
            } else {
              xam = false;
            }
            xad.xae("syncDelta=" + xbc + "; syncLag=" + xbb + ";correction=" + xaj);
          }
          xak = false;
          x5();
        });
      }, 0);
    }
  };
  this.xbe = function () {
    return xaj;
  };
  xah.xaz(0);
  var xbf = xah.xaq.now();
  this.xbg = function (xbh) {
    var xba = xah.xaq.now(), result = xba + xaj;
    if (xam) {
      if (!xal) {
        if (x9v.abs(xba - xbf > xah.xas)) {
          xal = true;
          xad.xae("Resync tyme...");
          xah.xb2(function () {
            if (!xam) {
              xad.xae("Resync time complete");
            }
            xal = false;
          });
        }
      } else {
        result = xbf + xaj;
      }
    } else {
      xbf = xba;
    }
    return result;
  };
  this.xbi = function (xbh) {
    return new xah.xaq(xah.xbg(xbh));
  };
  var xbj = {xbk: 0, xbl: 1, xbm: 2, xbn: 3, xbo: 4, xbp: 5, xbq: 6};
  function xbr(xbs) {
    return xbs < 10 ? "0" + xbs : xbs;
  }
  function xbt(xay, xbu) {
    var xbv = "--:--", xbw = xah.xax(xay);
    switch (xbu) {
      case xbj.xbl:
        xbv = [xbr(xbw.getHours()), ":", xbr(xbw.getMinutes()), ":", xbr(xbw.getSeconds())].join("");
        break;
      case xbj.xbn:
        var xbx = xbw.getDay();
        xbv = [x37.x9i(xbw.getDay()), " ", xbw.getDate(), " ", x37.x9k(xbw.getMonth())].join("");
        break;
      case xbj.xbk:
        xbv = [xbr(xbw.getHours()), ":", xbr(xbw.getMinutes())].join("");
        break;
      case xbj.xbm:
        xbv = [xbr(xbw.getHours()), xbr(xbw.getMinutes()), xbr(xbw.getSeconds())].join("");
        break;
      case xbj.xbo:
        xbv = [xbw.getDate(), " ", x37.x9k(xbw.getMonth())].join("");
        break;
      case xbj.xbp:
        var x13 = xbw.getYear();
        if (x13 < 1900) {
          x13 += 1900;
        }
        xbv = [xbw.getDate(), "/", xbr(xbw.getMonth() + 1), "/", x13].join("");
        break;
      case xbj.xbq:
        xbv = [xbw.getDate(), " ", x37.x9k(xbw.getMonth()), " ", xbr(xbw.getHours()), ":", xbr(xbw.getMinutes())].join("");
        break;
    }
    return xbv;
  }
  this.xby = function (xay) {
    return xbt(xay, xbj.xbk);
  };
  this.xbz = function (xay) {
    return xbt(xay, xbj.xbl);
  };
  this.xc0 = function (xay) {
    return xbt(xay, xbj.xbm);
  };
  this.xc1 = function (xay) {
    return xbt(xay, xbj.xbn);
  };
  this.xc2 = function (xay) {
    return xbt(xay, xbj.xbo);
  };
  this.xc3 = function (xay) {
    return xbt(xay, xbj.xbp);
  };
  this.xc4 = function (xc5, xc6) {
    return [xbt(xc5, xbj.xbk), "-", xbt(xc6, xbj.xbk)].join("");
  };
  this.xc7 = function (xc8) {
    return xah.xc9(xc8 / 1e3 >> 0);
  };
  this.xca = function (xc8) {
    return xah.xcb(xc8 / 1e3 >> 0);
  };
  this.xcc = function (xc8) {
    return xah.xc7(xc8);
  };
  this.xc9 = function (xcd) {
    var xce = "", xcf, xcg, xb0;
    if (xcd < 0) {
      xcd = x9v.abs(xcd);
      xce = "-";
    }
    xcf = xcd / 3600 >> 0, xcg = xcd - xcf * 3600, xb0 = xcg / 60 >> 0;
    xcd = xcg - xb0 * 60 >> 0;
    if (xcf < 10) xcf = ["0", xcf].join("");
    if (xb0 < 10) xb0 = ["0", xb0].join("");
    if (xcd < 10) xcd = ["0", xcd].join("");
    return [xce, xcf, ":", xb0, ":", xcd].join("");
  };
  this.xcb = function (xcd) {
    var xce = "", xcf, xcg, xb0;
    if (xcd < 0) {
      xcd = x9v.abs(xcd);
      xce = "-";
    }
    xcf = xcd / 3600 >> 0, xcg = xcd - xcf * 3600, xb0 = xcg / 60 >> 0;
    if (xb0 < 10) xb0 = ["0", xb0].join("");
    return [xce, xcf, ":", xb0].join("");
  };
};
x2x.x2z.xch = new x2x.x2z.xag;
var xci = {name: "OTTPlayer", version: x2x.x32.x36()};
function xcj(xck) {
  var xcl = /^\s+|\s+$|\r\n$/gm;
  return xck.replace(xcl, "");
}
function xcn(data, xco, xcp) {
  var xz = "", xcq = data.indexOf(xco);
  if (xcq > -1) {
    xcq += xco.length;
    var xcr = data.indexOf(xcp, xcq);
    xz = data.substr(xcq, xcr - xcq);
  }
  return xz;
}
var xcs = false, xct = "OTTPlayer back " + x2x.x2z.xch.xbg(), xcu = 5e3, xcv = false;
function xcw(xcx, xcy, key) {
  xad.xae("Global exit handler. force:" + xcx + ";key:" + key + "; p:" + xt.xu);
  if (xcs || xcx) {
    if (typeof xcy === "function") {
      xcy();
    }
    if (xcz.xd0(xcz.xd1.xd2)) {
      x2x.x30.xd3.xd4();
      xcz.xd5();
    }
    xcz.xd6();
    x2x.x30.xd3.xd7(true, true);
    xd8.xd9();
    var xy = xa4(xaa.location);
    xy = xy.toLowerCase();
    if (xt.xu === xf.xh) {
      if (key === x2x.x2y.xda.KEY_EXIT) {
        xdb.sendExitEvent();
      } else {
        xdb.sendReturnEvent();
      }
    } else if (xt.xu === xf.xm) {
      if (key === x2x.x2y.xda.KEY_EXIT) {
        xa7.application.getCurrentApplication().exit();
      } else {
        xa7.application.getCurrentApplication().exit();
      }
    } else if (xt.xu === xf.xl) {
      if (x9o.referrer) {
        xaa.location = x9o.referrer;
      } else {
        xaa.location = "file:///home/web/services.html";
      }
    } else if (xt.xu === xf.xi) {
      if (xy.indexOf("forkstore") > 0) {
        x9o.location.href = "http://smart.obovse.ru";
      } else {
        if (key === x2x.x2y.xda.KEY_EXIT) {
          xad.xae("[NetCast] EXIT");
          if (xaa.NetCastExit) {
            xaa.NetCastExit();
          }
        } else {
          xad.xae("[NetCast] RETURN");
          if (xaa.NetCastBack) {
            xaa.NetCastBack();
          }
        }
      }
    } else if (xt.xu === xf.xj) {
      if (xy.indexOf("forkstore") > 0) {
        x9o.location.href = "http://smart.obovse.ru";
      } else {
        if (key === x2x.x2y.xda.KEY_EXIT) {
          xaa.close();
        } else {
          if (xaa.NetCastExit) {
            xa5.back();
          }
        }
      }
    } else {
      if (xy.indexOf("forkstore") > 0) {
        x9o.location.href = "http://smart.obovse.ru";
      } else {
        xaa.close();
        if (xaa.OTTAPI) {
          xad.xae("Android exit");
          xaa.OTTAPI.close();
        } else {
          xad.xae("not found Android api");
        }
      }
    }
  } else {
    xcs = true;
    var xdc = "EXIT";
    if (typeof key !== x9n) {
      if (key === x2x.x2y.xda.KEY_RETURN) xdc = "RETURN";
    }
    x2x.x31.xdd.xde(x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x5b) + xdc + x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x5c), xcu);
    var xdf = x9p(function () {
      xcs = false;
      xad.xae("history push:" + xct);
      xa5.pushState({data: xct}, "");
      x9q(xdf);
    }, xcu);
  }
}
var xdg = {xb9: 0, xdh: 1};
var xdi = {xdj: 0, xdk: 1};
function xdl(xdm) {
  if (xdm === x9m || typeof xdm !== "object") return xdm;
  var xdn = new xdm.constructor;
  for (var key in xdm) xdn[key] = xdl(xdm[key]);
  return xdn;
}
function xdo(xdp) {
  var xdq = xdp.replace(/<.*?>/gm, "");
  return xdq.length;
}
var xdr = x2x.x32.x35 !== "0", xds = false, xdt = false;
var xdu = {};
xaa.xdu = xdu;
(function xdv() {
  if (!xdr || true) {
    var xy = xaa.location, xdw = "", xdx = "";
    if (xy.search) {
      xdw = xy.search;
    }
    if (xdw.charAt(0) === "?") xdw = xdw.substring(1);
    if (xdw.length > 0) {
      xdw = xdw.replace(/\+/g, " ");
      var xdy = xdw.split(/[&;]/g);
      for (var xd = 0; xd < xdy.length; xd++) {
        var xdz = xdy[xd].split("="), key = x9x(xdz[0]), value;
        if (xdz.length > 1) {
          value = x9x(xdz[1]);
        } else value = "";
        xdu[key] = value;
      }
    }
    if (xy.hash) {
      xdx = xy.hash;
    }
    var xe0 = xdx.split("#")[1];
    if (xe0 && xe0.indexOf("wgtopt=") === 0) {
      xe0 = xe0.split("=")[1];
    }
    var xe1 = xe0 || xdu.wgtopt;
    if (xe1) {
      var xe2 = xe1.split("|");
      if (xe2.length < 4) {
        xe2 = xe1.split("/");
      }
      var xe3 = false;
      var key = "";
      for (var xd = 0; xd < xe2.length; xd++) {
        if (!xe3) {
          key = xe2[xd];
        } else {
          xdu[key] = xe2[xd];
        }
        xe3 = !xe3;
      }
    }
    if (xdu.mode) {
      var xe4 = xa0(xdu.mode, 10);
      switch (xe4) {
        case 1:
          xdr = true;
          break;
        case 2:
          xdr = true;
          xdt = xdr;
          break;
        case 3:
          xdr = true;
          xds = xdr;
          break;
      }
    }
    if (xdu.forcelog === "") {
      xdt = true;
    }
    if (xdu.forceui) {
      xaa.xe5 = xa0(xdu.forceui, 10);
    }
  } else {
    xds = xdr;
  }
}());
var ntp = {setMostVisitedPages: function () {}};
function xe6(xdm, xe7, xe8) {
  var xd = 0;
  for (var key in xdm) {
    if (xe7 + xd >= 0 && xd <= xe8) {
      xad.xae(xd + "k: " + key + " = " + xdm[key]);
    }
    xd++;
  }
  xe7 += xe8;
  if (xe7 > xd + xe8) xe7 = 0;
  xad.xae("keys printed:" + xd);
  return xe7;
}
xaa.xe9 = 3e4;
x2x.x30.xea = function (xeb) {
  this.xec = xeb;
  this.xed = 0;
  this.xee = {};
};
x2x.x30.xea.prototype.xef = function (xeg) {
  var xeh = this.xee[xeg];
  var xei = x9v.ceil(this.xec.length / xeh.xej) * xeh.xej - xeh.xek;
  if (xei < 0) {
    xei = 0;
  }
  var xel = (this.xed / xeh.xej >> 0) * xeh.xej;
  if (xel > xei) {
    xel = xei;
  }
  var xem = x9v.ceil((this.xed + 1) / xeh.xej) * xeh.xej - xeh.xek;
  if (xem < 0) {
    xem = 0;
  }
  xeh.xen = x9v.ceil(xeh.xen / xeh.xej) * xeh.xej;
  if (xeh.xen < xem) {
    xeh.xen = xem;
  }
  if (xeh.xen > xel) {
    xeh.xen = xel;
  }
};
x2x.x30.xea.prototype.xeo = function () {
  return this.xec.length;
};
x2x.x30.xea.prototype.xep = function () {
  return this.xec.length === 0;
};
x2x.x30.xea.prototype.xeq = function () {
  return this.xec[this.xed];
};
x2x.x30.xea.prototype.xer = function () {
  return this.xed;
};
x2x.x30.xea.prototype.xes = function () {
  return this.xed === 0;
};
x2x.x30.xea.prototype.xet = function () {
  return this.xed === this.xec.length - 1;
};
x2x.x30.xea.prototype.xeu = function (xev) {
  var xew = {}, xeh = this.xee[xev.xex], xey = x9v.ceil(this.xec.length / xev.xez);
  xew.top = xeh.xen / xev.xez / xey;
  xew.height = xev.xex / xev.xez / xey;
  if (xew.height > 1) xew.height = 0;
  if (xew.top + xew.height > 1) {
    xew.top = 1 - xew.height;
  }
  return xew;
};
x2x.x30.xea.prototype.xf0 = function (xev) {
  if (!this.xee[xev.xex]) {
    this.xee[xev.xex] = {xen: 0, xek: xev.xex, xej: xev.xez};
    this.xef(xev.xex);
  }
  var xeh = this.xee[xev.xex];
  return xeh.xen < xev.xez;
};
x2x.x30.xea.prototype.xf1 = function (xev) {
  if (!this.xee[xev.xex]) {
    this.xee[xev.xex] = {xen: 0, xek: xev.xex, xej: xev.xez};
    this.xef(xev.xex);
  }
  var xeh = this.xee[xev.xex];
  return this.xec.length <= xev.xex || xeh.xen + 1 > this.xec.length - xev.xex;
};
x2x.x30.xea.prototype.xf2 = function (xev) {
  if (!this.xee[xev.xex]) {
    this.xee[xev.xex] = {xen: 0, xek: xev.xex, xej: xev.xez};
    this.xef(xev.xex);
  }
  var xeh = this.xee[xev.xex];
  return xeh.xen + xev.xf3 === this.xed;
};
x2x.x30.xea.prototype.xf4 = function (xev) {
  if (!this.xee[xev.xex]) {
    this.xee[xev.xex] = {xen: 0, xek: xev.xex, xej: xev.xez};
    this.xef(xev.xex);
  }
  var xeh = this.xee[xev.xex];
  return this.xec[xeh.xen + xev.xf3];
};
x2x.x30.xea.prototype.xeu = function (xev) {
  if (!this.xee[xev.xex]) {
    this.xee[xev.xex] = {xen: 0, xek: xev.xex, xej: xev.xez};
  }
  var xeh = this.xee[xev.xex];
  var xew = {}, xey = x9v.ceil(this.xec.length / xev.xez);
  xew.top = xeh.xen / xev.xez / xey;
  xew.height = xev.xex / xev.xez / xey;
  if (xew.height > 1) xew.height = 0;
  if (xew.top + xew.height > 1) {
    xew.top = 1 - xew.height;
  }
  return xew;
};
x2x.x30.xea.prototype.xf5 = function (xf6) {
  if (this.xec.length > 0 && xf6 < this.xec.length && this.xed !== xf6) {
    this.xed = xf6;
    for (var xeg in this.xee) {
      this.xef(xeg);
    }
  }
  return this.xed;
};
x2x.x30.xea.prototype.xf7 = function (xev) {
  if (!this.xee[xev.xex]) {
    this.xee[xev.xex] = {xen: 0, xek: xev.xex, xej: xev.xez};
  }
  var xeh = this.xee[xev.xex], xen = xeh.xen + xev.xf3, xf8 = xen - this.xed;
  if (xen !== this.xed) {
    this.xed = xen;
    for (var xeg in this.xee) {
      this.xef(xeg);
    }
  }
  var xf9 = {xfa: 0, xen: xf8};
  return xf9;
};
x2x.x30.xea.prototype.xfb = function (xev) {
  var xfc = xev.xex / 2 >> 0;
  if (!this.xee[xev.xex]) {
    this.xee[xev.xex] = {xen: 0, xek: xev.xex, xej: xev.xez};
  }
  var xeh = this.xee[xev.xex];
  xeh.xen = this.xed - xfc;
  for (var xeg in this.xee) {
    this.xef(xeg);
  }
};
x2x.x30.xea.prototype.xfd = function (xev, xfe) {
  if (!this.xee[xev.xex]) {
    this.xee[xev.xex] = {xen: 0, xek: xev.xex, xej: xev.xez};
    this.xef(xev.xex);
  }
  var xeh = this.xee[xev.xex];
  return xfe(this.xec[xeh.xen + xev.xf3]);
};
x2x.x30.xea.prototype.xff = function (xev, xfe) {
  if (!this.xee[xev.xex]) {
    this.xee[xev.xex] = {xen: 0, xek: xev.xex, xej: xev.xez};
    this.xef(xev.xex);
  }
  var xeh = this.xee[xev.xex], result = [], xfg;
  for (var xf3 = 0; xf3 < xev.xex; xf3++) {
    xfg = xeh.xen + xf3;
    result.push(xfe(xf3, this.xec[xfg], xfg === this.xed));
  }
  return result;
};
x2x.x30.xea.prototype.xfh = function (xfi) {
  for (var xd = 0; xd < this.xec.length; xd++) {
    if (xfi(this.xec[xd])) {
      this.xf5(xd);
      break;
    }
  }
};
x2x.x30.xea.prototype.xfj = function (xev) {
  if (!this.xee[xev.xex]) {
    this.xee[xev.xex] = {xen: 0, xek: xev.xex, xej: xev.xez};
  }
  var xfk = this.xec.length, xen = this.xed, xeh = this.xee[xev.xex], xfl = xeh.xen, xfm = xen - xeh.xen, xfn, xfo = xev.xfo;
  if (xev.xfp < xeh.xek) {
    xfn = xeh.xej;
  } else {
    xfn = xeh.xek;
  }
  if (xev.xfp) {
    xen += xev.xfp;
    if (xen >= xfk) {
      var xfq = x9v.ceil(xfk / xeh.xej) * xeh.xej;
      if (xev.xfp > 1 && xen < xfq) {
        xen = xfk - 1;
      } else {
        if (xfo) {
          xen = 0;
          xfl = 0;
        } else {
          xen = xfk - 1;
        }
      }
    }
    if (xen - xfl >= xev.xex || xev.xfr) {
      xfl += xfn;
      var xfs = xfk - xev.xex;
      var xcg = xfk % xev.xez;
      if (xcg) {
        xfs += xev.xez - xcg;
      }
      if (xfs < 0) xfs = 0;
      if (xfl > xfs) {
        xfl = xfs;
        xen = xfl + xfm;
      }
    }
  }
  var xf9 = {xfa: xfl - xeh.xen, xen: xen - this.xed};
  xeh.xen = xfl;
  this.xed = xen;
  for (var xeg in this.xee) {
    if (xeg != xev.xex) {
      this.xef(xeg);
    }
  }
  return xf9;
};
x2x.x30.xea.prototype.xft = function (xev) {
  if (!this.xee[xev.xex]) {
    this.xee[xev.xex] = {xen: 0, xek: xev.xex, xej: xev.xez};
  }
  var xen = this.xed, xfk = this.xec.length, xeh = this.xee[xev.xex], xfl = xeh.xen, xfn, xfo = xev.xfo;
  if (xev.xfp < xev.xex) {
    xfn = xev.xez;
  } else {
    xfn = xev.xex;
  }
  if (xev.xfp) {
    xen -= xev.xfp;
    if (xen < 0) {
      if (xfo) {
        xen = this.xfu.length - 1;
        var xfs = xfk - xev.xex;
        var xcg = xfk % xev.xez;
        if (xcg) {
          xfs += xev.xez - xcg;
        }
        if (xfs < 0) xfs = 0;
        xfl = xfs;
      } else {
        xen = 0;
      }
    }
    if (xen < xfl || xev.xfr) {
      xfl -= xfn;
      if (xfl < 0) xfl = 0;
    }
  }
  if (xev.xfr && xfl - xeh.xen === 0) {
    xen = this.xed;
  }
  var xf9 = {xfa: xfl - xeh.xen, xen: xen - this.xed};
  xeh.xen = xfl;
  this.xed = xen;
  for (var xeg in this.xee) {
    if (xeg != xev.xex) {
      this.xef(xeg);
    }
  }
  return xf9;
};
x2x.x30.xea.prototype.xfv = function (xev) {
  if (!this.xee[xev.xex]) {
    this.xee[xev.xex] = {xen: 0, xek: xev.xex, xej: xev.xez};
  }
  var xen = this.xed, xfk = this.xec.length, xeh = this.xee[xev.xex], xfl = xeh.xen;
  this.xed = 0;
  for (var xeg in this.xee) {
    this.xef(xeg);
  }
  var xf9 = {xfa: xfl - xeh.xen, xen: xen - this.xed};
  return xf9;
};
x2x.x30.xea.prototype.xfw = function (xev) {
  xad.xae("[datanavigator] navigate to last");
  if (!this.xee[xev.xex]) {
    this.xee[xev.xex] = {xen: 0, xek: xev.xex, xej: xev.xez};
  }
  var xen = this.xed, xfk = this.xec.length, xeh = this.xee[xev.xex], xfl = xeh.xen;
  this.xed = xfk - 1;
  for (var xeg in this.xee) {
    this.xef(xeg);
  }
  var xf9 = {xfa: xfl - xeh.xen, xen: xen - this.xed};
  return xf9;
};
x2x.x30.xea.prototype.xfx = function (xev) {
  if (!this.xee[xev.xex]) {
    this.xee[xev.xex] = {xen: 0, xek: xev.xex, xej: xev.xez};
  }
  for (var xeg in this.xee) {
    this.xef(xeg);
  }
};
x2x.x30.xea.prototype.xfy = function () {
  if (this.xed > this.xec.length - 1) {
    this.xed = this.xec.length - 1;
    if (this.xed < 0) {
      this.xed = 0;
    }
    for (var xeg in this.xee) {
      this.xef(xeg);
    }
  }
};
x2x.x30.xea.prototype.xfz = function () {
  this.xee = {};
  this.xed = 0;
};
x2x.x30.xea.prototype.xg0 = function () {
  var state = {xen: this.xed, xeh: {}};
  for (var xeg in this.xee) {
    state.xeh[xeg] = {};
    state.xeh[xeg].xek = this.xee[xeg].xek;
    state.xeh[xeg].xej = this.xee[xeg].xej;
    state.xeh[xeg].xen = this.xee[xeg].xen;
  }
  return state;
};
x2x.x30.xea.prototype.xg1 = function (state) {
  this.xed = state.xen;
  for (var xeg in state.xeh) {
    this.xee[xeg].xek = state.xeh[xeg].xek;
    this.xee[xeg].xej = state.xeh[xeg].xej;
    this.xee[xeg].xen = state.xeh[xeg].xen;
  }
};
x2x.x30.xea.prototype.xg2 = function (xeb) {
  this.xec = xeb;
  this.xfy();
};
x2x.xg3 = function (xg4) {
  this.xg5 = xg4;
  this.xg6 = [];
  this.xg7 = 0;
};
x2x.xg3.prototype.xg8 = function (xg9, xga) {
  for (var xd = 0; xd < this.xg6.length; xd++) {
    var xgb = this.xg6[xd];
    if (xgb && xgb.xg9 === xg9 && xgb.xga === xga) {
      this.xg6.splice(xd, 1);
      this.xg7 = this.xg6.length;
    }
  }
};
x2x.xg3.prototype.xgc = function (xg9, xga) {
  var xgd = {xg9: xg9, xga: xga};
  this.xg6.push(xgd);
  this.xg7 = this.xg6.length;
};
x2x.xg3.prototype.xge = function (data) {
  for (var xd = 0; xd < this.xg7; xd++) {
    this.xg6[xd].xg9(this.xg5, data);
  }
};
x2x.xgf = function (xgg, xgh, xgi, name, xgj) {
  this.name = name;
  this.xgj = "[" + xgj + "]" || "";
  this.xgk = xgg;
  this.xgl = [];
  this.xgm = xgh;
  this.xgn = xgi;
};
x2x.xgf.prototype.xgo = function (state, xgp) {
  this.xgl.push({state: state, xgq: xgp});
};
x2x.xgf.prototype.xgr = function (xgs) {
  for (var xd = 0; xd < xgs.length; xd++) {
    this.xgl.push({state: xgs[xd]});
  }
};
x2x.xgf.prototype.xgt = function (xgu, xgv, xgw) {
  if (xgu === this) {
    this.xgn(xgv);
    xad.xae(this.xgj + " state =====[" + this.name + "]===== update");
    return this;
  }
  for (var xd = 0; xd < this.xgl.length; xd++) {
    if (xgu === this.xgl[xd].state) {
      if (this.xgm()) {
        if (this.xgl[xd].xgq) {
          this.xgl[xd].xgq(xgw);
        }
        xgu.xgk(xgv);
        xad.xae(this.xgj + " state =====[" + this.name + "->" + xgu.name + "]=====");
        return xgu;
      } else {
        xad.xae(this.xgj + " state =====[" + this.name + "]===== busy");
        return this;
      }
    }
  }
  xad.xae(this.xgj + " illegal state transaction !!! [" + this.name + "->" + xgu.name + "]");
  return this;
};
x2x.xgx = function (xgy) {
  var xgz = xgy, xh0 = [];
  xh0.push(xgy);
  this.xgu = function (state) {
    var xh1 = xgz;
    xgz = xgz.xgt(state);
    if (xh1 !== xgz) {
      xh0.push(xgz);
    }
  };
  this.xh2 = function () {
    if (xh0.length > 1) {
      var xh2 = xh0[xh0.length - 1], xh1 = xgz;
      xgz = xgz.xgt(xh2);
      if (xgz !== xh1) {
        xh0.pop();
      } else {
        xad.xae("error on back state");
      }
    }
  };
};
var xh3 = "";
function xh4(xh5) {
  if (xa3) {
    var plugins = xa3.plugins;
    if (plugins) {
      xad.xae("plugins count:" + plugins.length);
      for (var xd = 0; xd < plugins.length; xd++) {
        var xh6 = plugins[xd];
        console.log(xh6);
        xad.xae("Plugin:" + xh6.name);
        for (var xh7 = 0; xh7 < xh6.length; xh7++) {
          xad.xae("Plugin type:" + xh6[xh7].type);
        }
        console.log(xaa[xh6.name]);
      }
    } else {
      xad.xae("plugins not found");
    }
  }
  return false;
}
function xh8() {
  var xh9 = x9o.body;
  if (xh9) {
    if (typeof xh9.onselectstart !== x9n) {
      xh9.onselectstart = function () {
        return false;
      };
    }
  }
  xt.cssEffects = true;
  xt.localStorage = xaa.localStorage;
  xt.xha = function () {
    return false;
  };
  xt.xhb = function (x5) {
    x5([]);
  };
  xt.xhc = false;
  xt.xhd = 30;
  xt.xhe = {xhf: true, xhg: true};
  xt.xhh = function () {
    var xhi = {xhf: true, xhg: true};
    return xhi;
  };
  xt.xhj = false;
  xaa.xhk = xa8;
  xt.xhl = function (xfe) {
    xaa.xhk = xfe;
  };
  if (xt.xu !== xf.xh) {
    xaa.xhm = function (xhn) {
      xaa.console.log(xhn);
    };
    xaa.xho = function (xhp) {
      if (xt.xu === xf.xg && (xhp.keyCode === 122 || xhp.keyCode === 123)) {
        return false;
      }
      if (xhp.preventDefault) xhp.preventDefault();
      if (xhp.stopPropagation) xhp.stopPropagation();
      xhp.cancelBubble = true;
      return true;
    };
  }
  switch (xt.xu) {
    case xf.xh:
      if (!xaa.console) {
        xaa.console = {};
        xaa.console.log = xa8;
      }
      xaa.xhq = 2010;
      xaa.xhr = 2011;
      xaa.xhs = 2012;
      if (typeof x9y !== x9n) {
        xaa.xdb = new x9y.API.Widget;
        xaa.xht = new x9y.API.Plugin;
      }
      try {
        xci.name = x9z.id;
      } catch (x12) {}
      xaa.xhu = x9o.getElementById("pluginSef");
      xaa.xhm = xaa.alert;
      xaa.xho = function (xhp) {
        var key = xhp.keyCode;
        if (key === x2x.x2y.xda.KEY_EXIT || key === x2x.x2y.xda.KEY_RETURN) {
          xaa.xdb.blockNavigation(xhp);
        }
        if (xhp.preventDefault) xhp.preventDefault();
        return true;
      };
      try {
        xaa.xhv = new FileSystem;
      } catch (x12) {}
      x9z.onWidgetEvent = function () {
        xhw();
      };
      x2x.x30.xhx.xhy(18e4);
      if (xt.xv >= 2011) {
        xt.xhc = true;
        xt.xhd = 8;
        xt.xhh = function () {
          var xhi = {xhf: true, xhg: true};
          var xhz = document.getElementById("pluginObjectNetwork");
          if (xhz) {
            var xi0 = xhz.GetActiveType();
            var xi1 = xhz.CheckPhysicalConnection(xi0);
            xhi.xhf = xi1 === 1;
            var xi2 = xhz.CheckPhysicalConnection(xi0);
            xhi.xhg = xi2 === 1;
          }
          return xhi;
        };
      }
      break;
    case xf.xl:
      xi3 = xaa.gSTB;
      xaa.xi4 = xaa.localStorage;
      var xi5 = {};
      xi5.setItem = function (name, data) {
        if (typeof data === "object") {
          data = x9u.stringify(data);
        }
        xi3.SaveUserData(name, data);
      };
      xi5.getItem = function (name) {
        var xi6 = xi3.LoadUserData(name);
        if (xi6 === "NaN") {
          xi6 = 0;
        }
        return xi6;
      };
      xi5.removeItem = function (name) {
        xi3.SaveUserData(name, x9m);
      };
      xaa.localStorage = xi5;
      xt.localStorage = xi5;
      xi3.EnableVKButton(false);
      x2x.x30.xhx.xhy(18e4);
      xt.cssEffects = false;
      var xi7 = {};
      xi7.varList = ["tvsystem", "graphicres", "audio_initial_volume"];
      xt.xi8 = xi3.GetEnv(x9u.stringify(xi7));
      try {
        xt.xi8 = x9u.parse(xt.xi8);
        if (xt.xi8.errCode === 0) {
          xt.xi8 = xt.xi8.result;
          var xi9 = xt.xi8.audio_initial_volume;
          if (xi9 > 0) {
            xi3.SetVolume(xi9);
          }
        } else {
          xad.xb6(xt.xi8.errMsg);
        }
      } catch (x12) {
        delete xt.xi8;
      }
      break;
    case xf.xm:
      xaa.xia = [];
      xaa.xib = [];
      xaa.xic = function (xfe) {
        xaa.xia.push(xfe);
      };
      xaa.xid = function (xfe) {
        xaa.xib.push(xfe);
      };
      x9o.addEventListener("visibilitychange", function () {
        if (x9o.hidden) {
          xad.xie("app suspend");
          xt.xhj = true;
          for (var xd = 0; xd < xaa.xia.length; xd++) {
            xaa.xia[xd]();
          }
        } else {
          xad.xie("app restore");
          xt.xhj = false;
          for (var xd = 0; xd < xaa.xib.length; xd++) {
            xaa.xib[xd]();
          }
        }
      });
      x2x.x30.xhx.xhy(6e5);
      var xif;
      try {
        xif = xaa.webapis.network;
      } catch (x12) {}
      if (xif) {
        var xig = {0: "", 1: "LAN_CABLE_ATTACHED", 2: "LAN_CABLE_DETACHED", 3: "LAN_CABLE_STATE_UNKNOWN", 4: "GATEWAY_CONNECTED", 5: "GATEWAY_DISCONNECTED", 6: "WIFI_MODULE_STATE_ATTACHED", 7: "WIFI_MODULE_STATE_DETACHED", 8: "WIFI_MODULE_STATE_UNKNOWN"}, xih, xii = function (xij) {
          xad.xae("------ network ststus change ------ " + xig[xij]);
          var xhi = {xhf: true, xhg: true};
          if (xij === 5) {
            xhi.xhf = false;
          }
          xaa.xhk(xhi);
        };
        try {
          xih = xif.addNetworkStateChangeListener(xii);
          xad.xae("networkChangeListener set");
        } catch (x12) {
          xad.xb6("addNetworkStateChangeListener exception [" + x12.xik + "] name: " + x12.name + " message: " + x12.message);
        }
      }
      xt.xhh = function () {
        var xhi = {xhf: true, xhg: true};
        if (xa3.onLine) {
          xad.xae("online");
        } else {
          xad.xae("offline");
        }
        return xhi;
      };
      xt.xha = function () {
        if (!xdr) return false;
        return true;
      };
      xt.xhb = function (x5) {
        function xil(xim) {
          xad.xae("Channels:" + xim.length);
          var xin = [];
          for (var xd = 0; xd < xim.length; xd++) {
            xin.push({title: xim[xd].channelName, url: "bst|" + xim[xd].major + "|" + xim[xd].minor});
          }
          x5(xin);
        }
        function xio() {
          x5([]);
        }
        try {
          xa7.tvchannel.getChannelList(xil, xio, "ALL");
        } catch (error) {
          xad.xb6("Error name = " + error.name + ", Error message = " + error.message);
        }
      };
      break;
    case xf.xj:
      x2x.x30.xhx.xhy(18e4);
      xt.xha = function () {
        return false;
      };
      break;
    case xf.xi:
      x2x.x30.xhx.xhy(12e4);
      xt.cssEffects = false;
      break;
    case xf.xn:
      x2x.x30.xhx.xhy(0);
      xt.cssEffects = false;
      break;
    default:
      x2x.x30.xhx.xhy(9e4);
  }
}
x2x.x2y.xda = {};
x2x.x2y.xda.xip = 1e3, x2x.x2y.xda.xiq = 2e3, x2x.x2y.xda.xir = 4e3, x2x.x2y.xda.xis = 1e4;
var xit = [];
var xiu = {xiv: 0, xiw: 1, xix: 2, xiy: 3, xiz: 4, xj0: 5};
var xj1 = [["KEY_LEFT", "VK_LEFT", 37], ["KEY_UP", "VK_UP", 38], ["KEY_RIGHT", "VK_RIGHT", 39], ["KEY_DOWN", "VK_DOWN", 40], ["KEY_ENTER", "VK_ENTER", 13], ["KEY_RETURN", "VK_BACK_SPACE", 8], ["KEY_RED", "VK_RED", 113], ["KEY_GREEN", "VK_GREEN", 114], ["KEY_YELLOW", "VK_YELLOW", 115], ["KEY_BLUE", "VK_BLUE", 112], ["KEY_RW", "VK_REWIND", 0], ["KEY_STOP", "VK_STOP", 0], ["KEY_PLAY", "VK_PLAY", 0], ["KEY_PAUSE", "VK_PAUSE", 0], ["KEY_FF", "VK_FAST_FWD", 0], ["KEY_0", "VK_0", 48], ["KEY_1", "VK_1", 49], ["KEY_2", "VK_2", 50], ["KEY_3", "VK_3", 51], ["KEY_4", "VK_4", 52], ["KEY_5", "VK_5", 53], ["KEY_6", "VK_6", 54], ["KEY_7", "VK_7", 55], ["KEY_8", "VK_8", 56], ["KEY_9", "VK_9", 57], ["KEY_CH_UP", "VK_CH_UP", 427], ["KEY_CH_DOWN", "VK_CH_DOWN", 428], ["KEY_INFO", "VK_INFO", 457], ["KEY_GUIDE", "VK_GUIDE", 458], ["KEY_PROG_GUIDE", "VK_PROG_GUIDE", 458]];
function xj2() {
  for (var xd = 0; xd < xj1.length; xd++) {
    xad.xae(xj1[xd][xiu.xiv] + "=" + x2x.x2y.xda[xj1[xd][xiu.xiv]]);
  }
}
function xj3() {
  var xda = x2x.x2y.xda;
  xda.KEY_LEFT = 37, xda.KEY_UP = 38, xda.KEY_RIGHT = 39, xda.KEY_DOWN = 40, xda.KEY_ENTER = 13, xda.KEY_RETURN = 8, xda.KEY_EXIT = 27, xda.KEY_0 = 48, xda.KEY_1 = 49, xda.KEY_2 = 50, xda.KEY_3 = 51, xda.KEY_4 = 52, xda.KEY_5 = 53, xda.KEY_6 = 54, xda.KEY_7 = 55, xda.KEY_8 = 56, xda.KEY_9 = 57, xda.KEY_VOL_UP = xda.KEY_UP + xda.xip;
  xda.KEY_VOL_DOWN = xda.KEY_DOWN + xda.xip;
  xda.KEY_GUIDE = 999999;
  xda.xj4 = 999998;
  xda.KEY_INFO = 73 + xda.xip;
  xt.xj5 = false;
  function xj6(xj7) {
    for (var xd = 0; xd < xj1.length; xd++) {
      try {
        if (xaa[xj1[xd][xiu.xiw]]) {
          xda[xj1[xd][xiu.xiv]] = xaa[xj1[xd][xiu.xiw]];
        } else {
          if (xj7) {
            xda[xj1[xd][xiu.xiv]] = xj1[xd][xiu.xix];
          }
        }
      } catch (x12) {
        xda[xj1[xd][xiu.xiv]] = xj1[xd][xiu.xix];
      }
    }
  }
  switch (xt.xu) {
    case xf.xh:
      if (typeof x9y !== x9n) {
        x2x.x2y.xda = new x9y.API.TVKeyValue;
      }
      break;
    case xf.xm:
      xj8();
      xda.KEY_RETURN = 10009;
      xda.KEY_EXIT = 10182;
      xda.KEY_RED = 403;
      xda.KEY_GREEN = 404;
      xda.KEY_YELLOW = 405;
      xda.KEY_BLUE = 406;
      xda.KEY_RW = 412;
      xda.KEY_STOP = 413;
      xda.KEY_PLAY = 415;
      xda.KEY_PAUSE = 19;
      xda.xj4 = 10252;
      xda.KEY_FF = 417;
      xda.KEY_CH_UP = 427;
      xda.KEY_CH_DOWN = 428;
      xda.KEY_INFO = 457;
      xda.KEY_GUIDE = 458;
      break;
    case xf.xj:
    case xf.xi:
      xda.KEY_RETURN = 461;
      xda.KEY_RED = 403;
      xda.KEY_GREEN = 404;
      xda.KEY_YELLOW = 405;
      xda.KEY_BLUE = 406;
      xda.KEY_RW = 412;
      xda.KEY_STOP = 413;
      xda.KEY_PLAY = 415;
      xda.KEY_PAUSE = 19;
      xda.KEY_FF = 417;
      xda.KEY_CH_UP = 33;
      xda.KEY_CH_DOWN = 34;
      xda.KEY_INFO = 457;
      xda.KEY_GUIDE = 458;
      if (xt.xu === xf.xi) {
        xda.KEY_ASPECT = 445;
      }
      break;
    case xf.xl:
      xda.KEY_RED = 112 + xda.xir;
      xda.KEY_GREEN = 113 + xda.xir;
      xda.KEY_YELLOW = 114 + xda.xir;
      xda.KEY_BLUE = 115 + xda.xir;
      xda.KEY_RW = 66 + xda.xip;
      xda.KEY_STOP = 83 + xda.xip;
      xda.xj4 = 82 + xda.xip;
      xda.KEY_FF = 70 + xda.xip;
      xda.KEY_CH_UP = 9;
      xda.KEY_CH_DOWN = 9 + xda.xiq;
      xda.KEY_INFO = 89 + xda.xip;
      xda.KEY_ASPECT = 117 + xda.xir;
      xda.KEY_POWER = 85 + xda.xip;
      xda.KEY_MUTE = 192 + xda.xip;
      xda.KEY_VOL_UP = 107;
      xda.KEY_VOL_DOWN = 109;
      break;
    case xf.xk:
      xt.xj5 = true;
      xda.KEY_RED = 112;
      xda.KEY_GREEN = 113;
      xda.KEY_YELLOW = 114;
      xda.KEY_BLUE = 115;
      xj6(false);
      xda.KEY_CH_UP = xaa.VK_PAGE_UP;
      xda.KEY_CH_DOWN = xaa.VK_PAGE_DOWN;
      break;
    case xf.xn:
      xda.KEY_RETURN = 117;
      xda.KEY_RED = 112;
      xda.KEY_GREEN = 113;
      xda.KEY_YELLOW = 114;
      xda.KEY_BLUE = 115;
      xda.KEY_RW = 70;
      xda.KEY_STOP = 10;
      xda.KEY_PLAY = 80;
      xda.KEY_PAUSE = 66;
      xda.KEY_FF = 65;
      xda.KEY_CH_UP = 7;
      xda.KEY_CH_DOWN = 8;
      xda.KEY_INFO = 116;
      xda.KEY_VOL_UP = 77;
      xda.KEY_VOL_DOWN = 76;
      break;
    case xf.xo:
      xt.xj5 = true;
      xj6(true);
      xit.F1 = xda.KEY_BLUE;
      xit.F2 = xda.KEY_RED;
      xit.F3 = xda.KEY_GREEN;
      xit.F4 = xda.KEY_YELLOW;
      xit.Г = xda.KEY_RED;
      xit.Д = xda.KEY_GREEN;
      xit.Е = xda.KEY_YELLOW;
      xit.Ж = xda.KEY_BLUE;
      break;
    case xf.xq:
      xda.KEY_RETURN = 461;
      xda.KEY_RED = 403;
      xda.KEY_GREEN = 404;
      xda.KEY_YELLOW = 405;
      xda.KEY_BLUE = 406;
      xda.KEY_RW = 412;
      xda.KEY_STOP = 413;
      xda.KEY_PLAY = 415;
      xda.KEY_PAUSE = 19;
      xda.KEY_FF = 417;
      xda.KEY_INFO = 457;
      if (xaa.VK_ENTER) {
        xj6(false);
      }
      xda.KEY_RETURN = xaa.VK_BACK_SPACE || 8;
      xt.xj5 = true;
      break;
    default:
      xda.KEY_RED = 112;
      xda.KEY_GREEN = 113;
      xda.KEY_YELLOW = 114;
      xda.KEY_BLUE = 115;
      xda.KEY_RW = 116;
      xda.KEY_STOP = 32;
      xda.xj4 = 80;
      xda.KEY_FF = 117;
      xda.KEY_CH_UP = 33;
      xda.KEY_CH_DOWN = 34;
      xda.KEY_GUIDE = 118;
      xj6(false);
      xt.xj5 = true;
      if (xt.xu === xf.xp) {
        xda.KEY_UP = 131;
        xda.KEY_DOWN = 132;
      }
  }
}
function xj9() {
  xaa.xja = 1.25;
  var xjb = 0.625;
  switch (xt.xu) {
    case xf.xh:
      xaa.xja = 0.625;
      if (xaa.innerWidth > 1275) {
        xaa.xja = 0.83334;
      }
      if (xaa.innerWidth > 1915) {
        xaa.xja = 1.25;
      }
      break;
    case xf.xm:
      xaa.xja = 1.25;
      if (xaa.innerWidth < 1915) {
        xaa.xja = 0.83334;
      }
      break;
    case xf.xj:
      var xjc = 1.25;
      if (xaa.innerWidth === 1280) xjc = 0.83334;
      xaa.xja = xjc;
      break;
    case xf.xi:
      xaa.xja = 0.83334;
      break;
    case xf.xk:
      xaa.xja = 0.83334;
      if (xaa.innerWidth < 1e3) xaa.xja = 0.625;
      if (xaa.innerWidth > 1400) xaa.xja = 1.25;
      break;
    case xf.xn:
      xaa.xja = 0.83334;
      break;
    case xf.xl:
      var xjd = xa4(xi3.RDir("gmode"));
      var xje = xa4(xi3.RDir("vmode"));
      var xjc = 0.83334;
      if (xt.xi8 && xt.xi8.graphicres == "1920" || xjd == "1920" || xjd === "tvsystem_res" && (xje === "1080i" || xje === "1080p")) {
        xaa.moveTo(0, 0);
        if (xaa.innerWidth === 1280) {
          xjc = 0.83334;
          xaa.resizeTo(1280, 720);
        } else {
          xjc = 1.25;
          xaa.resizeTo(1920, 1080);
        }
      } else if (xjd == "1280" || xjd === "tvsystem_res" && (xje === "720i" || xje === "720p")) {
        xjc = 0.83334;
        xaa.moveTo(0, 0);
        xaa.resizeTo(1280, 720);
      } else if (xjd == "720" && xje !== "480i" || xjd === "tvsystem_res" && (xje === "576i" || xje === "576p")) {
        xaa.moveTo(0, 0);
        xaa.resizeTo(720, 576);
        var xjf = x9o.getElementById("css3");
        xjf.style.top = "85px";
        xjf.style.transform = "scale(0.95,1.34)";
        xjf.style.WebkitTransform = "scale(0.95,1.34)";
        xjc = 0.469;
      } else if (xjd == "720" && xje === "480i" || xjd === "tvsystem_res" && xje === "480i") {
        xaa.moveTo(0, 0);
        xaa.resizeTo(720, 480);
        var xjf = x9o.getElementById("css3");
        xjf.style.top = "38px";
        xjf.style.transform = "scale(0.93,1.11)";
        xjf.style.WebkitTransform = "scale(0.93,1.11)";
        xjc = 0.469;
      }
      xaa.xja = xjc;
      break;
    case xf.xp:
    default:
      var xjg = function () {
        var xjh = 1920, xji = 1080, xjj = 1.25, xjk = 0.3, xjl = xaa.innerWidth / xjh, xjm = xaa.innerHeight / xji, xjn = 1, xjf = x9o.getElementById("css3");
        if (xjl < xjm) {
          xjn = xjl;
          xjf.style.left = "0px";
          xjf.style.top = (xaa.innerHeight - xji * xjl) / 2 + "px";
        } else {
          xjn = xjm;
          xjf.style.left = (xaa.innerWidth - xjh * xjm) / 2 + "px";
          xjf.style.top = "0px";
        }
        var xjo = xjj * xjn;
        if (xjo < xjk) xjo = xjk;
        return xjo;
      };
      xaa.xja = xjg();
  }
  var xh9 = x9o.body;
  if (xh9) {
    if (xt.xu !== xf.xh && xt.xu !== xf.xi && xt.xu !== xf.xl) {
      xh9.style.background = "#000003";
    }
  }
  var xjp = xh9;
  if (xjp) {
    if (xt.xu === xf.xg || xt.xu === xf.xq || xt.xu === xf.xp) {
      xaa.onresize = function () {
        xaa.xja = xjg();
        xaa.xjq = xaa.xja / xjb;
        xjp.style.fontSize = xaa.xja + "em";
      };
      xaa.xja = xjg();
    }
    xjp.style.fontSize = xaa.xja + "em";
  }
  xaa.xjq = xaa.xja / xjb;
}
function xjr() {
  xh8();
  xj3();
  xj9();
}
function xjs() {
  switch (xt.xu) {
    case xf.xh:
      break;
    case xf.xj:
      break;
    case xf.xo:
      break;
  }
}
var xjt = {xju: 0, xjv: 1, xjw: 2, xjx: 3, xjy: 4, xjz: 5, xk0: 6, xk1: 7, xk2: 8};
function xk3() {
  var xy = "";
  if (xa3) {
    if (xa3.language) {
      xy = xa3.language;
    } else if (xa3.browserLanguage) {
      xy = xa3.browserLanguage;
    } else if (xa3.systemLanguage) {
      xy = xa3.systemLanguage;
    } else if (xa3.userLanguage) {
      xy = xa3.userLanguage;
    }
  }
  xy = xy.toLowerCase();
  return xy;
}
function xk4() {
  xt.xk5 = "000000000000";
  xt.xk6 = "0000000000";
  xt.xk7 = "unknown";
  xt.modelName = "unknown";
  xt.x11 = "---";
  xt.xk8 = "unknown";
  xt.xjt = xjt.xju;
  xt.xk9 = false;
  xt.x37 = xk3();
  switch (xt.xu) {
    case xf.xh:
      xt.xk7 = "samsung";
      xt.xk8 = "Samsung-TV1";
      xt.xjt = xjt.xjv;
      xt.xv = 2010;
      var x10 = x9o.getElementById("pluginObjectNNavi");
      var x11;
      try {
        x11 = x10.GetFirmware();
      } catch (x12) {
        x11 = "xxx-2010";
      }
      xt.x11 = x11;
      x11 = x11.split("-");
      if (x11[1]) {
        for (var x13 = 2010; x13 < 2017; x13++) {
          if (x11[1].indexOf(xa4(x13)) !== -1) {
            xt.xv = x13;
            break;
          }
        }
      }
      try {
        xt.modelName = x10.GetModelCode();
      } catch (x12) {}
      try {
        xt.xk5 = xa4(x9o.getElementById("pluginObjectNetwork").GetMAC());
      } catch (x12) {}
      break;
    case xf.xm:
      xt.xk7 = "tizen-tv";
      xt.xk8 = "Tizen-TV1";
      xt.xjt = xjt.xk2;
      try {
        xt.xk5 = xaa.webapis.network.getMac();
      } catch (x12) {}
      try {
        xt.modelName = xaa.webapis.productinfo.getRealModel();
      } catch (x12) {}
      try {
        xt.x11 = xaa.webapis.productinfo.getFirmware();
      } catch (x12) {}
      try {
        xt.xk6 = xaa.webapis.productinfo.getDuid();
      } catch (x12) {}
      var xka = "";
      xt.xv = 2015;
      try {
        xka = xaa.webapis.productinfo.getModelCode();
      } catch (x12) {
        xka = "15";
      }
      if (xka.indexOf("16") === 0) {
        xt.xv = 2016;
      }
      if (xka.indexOf("17") === 0) {
        xt.xv = 2017;
      }
      break;
    case xf.xi:
      xt.xk7 = "lg-netcast";
      xt.xk8 = "LG-NetCast-TV1";
      xt.xjt = xjt.xjw;
      var xx = xa3.userAgent.toLowerCase();
      xt.xv = 2016;
      if (xx.indexOf("tv-2016") > 0) {
        xt.xv = 2016;
      } else if (xx.indexOf("tv-2015") > 0 || xx.indexOf("netcast.media-2015") > 0) {
        xt.xv = 2015;
      } else if (xx.indexOf("tv-2014") > 0 || xx.indexOf("netcast.media-2014") > 0) {
        xt.xv = 2014;
      } else if (xx.indexOf("tv-2013") > 0 || xx.indexOf("netcast.media-2013") > 0) {
        xt.xv = 2013;
      } else if (xx.indexOf("tv-2012") > 0 || xx.indexOf("netcast.media-2012") > 0) {
        xt.xv = 2012;
      } else if (xx.indexOf("tv-2011") > 0 || xx.indexOf("netcast.media-2011") > 0) {
        xt.xv = 2011;
      } else if (xx.indexOf("netcast-2010") > 0) {
        xt.xv = 2010;
      }
      var xkb = xx.indexOf("lg browser");
      if (xkb > 0) {
        var xkc = xx.indexOf("(", xkb);
        var xkd = xx.indexOf(")", xkb);
        if (xkc > xkb) {
          var x3f = xx.substring(xkc + 1, xkd);
          xkc = x3f.indexOf("(");
          if (xkc > 0) {
            x3f = x3f.substring(xkc + 1);
          }
          var xke = x3f.split(";", 6);
          if (xke.length > 3) {
            xt.modelName = xke[xke.length - 1 - 2];
            xt.x11 = xke[xke.length - 1 - 1];
          }
        }
      }
      var xkf = x9o.getElementById("netcast_device"), xkg;
      try {
        xkg = xkf.net_macAddress;
      } catch (x12) {}
      if (typeof xkg !== x9n) xt.xk5 = xkg;
      break;
    case xf.xj:
      xt.xk7 = "lg-webos";
      xt.xk8 = "LG-webOS-TV1";
      xt.xv = 2014;
      var xx = xa3.userAgent.toLowerCase();
      if (xx.indexOf("538.2") > 0) {
        xt.xv = 2015;
      }
      if (xx.indexOf("537.36") > 0) {
        xt.xv = 2016;
      }
      xt.xjt = xjt.xjx;
      var xkh = {};
      xkh.method = "getSystemInfo";
      xkh.parameters = {};
      xkh.parameters.keys = ["modelName", "firmwareVersion", "serialNumber"];
      xkh.onComplete = function (xki) {
        try {
          var xkj = xki.returnValue;
          if (xkj) {
            xt.modelName = xki.modelName;
            xt.x11 = xki.firmwareVersion;
            xt.xk6 = xki.serialNumber;
          } else {
            return;
          }
        } catch (x12) {}
      };
      try {
        xaa.webOS.service.request("luna://com.webos.service.tv.systemproperty", xkh);
      } catch (xb6) {}
      break;
    case xf.xl:
      xt.xk7 = "mag";
      xt.xk8 = "STB1";
      xt.xjt = xjt.xjy;
      try {
        xt.modelName = xi3.GetDeviceVendor() + " - " + xi3.GetDeviceModel();
      } catch (x12) {}
      try {
        xt.x11 = xi3.GetDeviceImageVersion();
      } catch (x12) {}
      try {
        xt.xk5 = xi3.GetDeviceMacAddress();
      } catch (x12) {}
      try {
        xt.xk6 = xi3.xkk();
      } catch (x12) {}
      break;
    case xf.xk:
      var xx = xa3.userAgent.toLowerCase();
      if (xx.indexOf("nettv/5") > 0) {
        xt.xv = 2014;
      } else if (xx.indexOf("nettv/4.3") > 0) {
        xt.xv = 2013;
      } else if (xx.indexOf("nettv/4") > 0) {
        xt.xv = 2012;
      } else if (xx.indexOf("nettv/3") > 0) {
        xt.xv = 2011;
      } else if (xx.indexOf("nettv/2") > 0) {
        xt.xv = 2010;
      } else if (xx.indexOf("nettv/1") > 0) {
        xt.xv = 2009;
      }
      xt.xk7 = "nettv";
      xt.xk8 = "NetTV-1";
      xt.modelName = "NetTV";
      break;
    case xf.xn:
      xt.xk7 = "spark";
      xt.xk8 = "Spark-STB1";
      break;
    case xf.xo:
      var xx = xa3.userAgent.toLowerCase();
      xt.xk7 = "opera-tv";
      xt.xk8 = "OperaTV-1";
      xt.xjt = xjt.xk0;
      if (xx.indexOf("inettvbrowser") > 0) {
        xt.xk9 = true;
        xt.xjt = xjt.xk1;
        xt.xk8 = "OperaTV-browser-1";
      }
      var xkb = xx.indexOf("model/");
      if (xkb > 0) {
        xkb = xkb + 6;
        var xkc = xx.indexOf(" ", xkb);
        if (xkc < 0) {
          xkc = xx.length;
        }
        if (xkc > xkb) {
          var x3f = xx.substring(xkb, xkc);
          xt.modelName = x3f;
        }
      }
      break;
    case xf.xp:
      xt.xk7 = "jstv-box";
      xt.xk8 = "STB1";
      try {
        xt.modelName = xa6.System.GetSystemModel();
        xt.x11 = xa6.System.GetSoftwareVersion();
        xt.xk5 = xa6.Network.GetMacAddress();
        xt.xk6 = xa6.System.GetSerialNumber();
      } catch (x12) {}
      break;
    case xf.xq:
      xt.xk7 = "viera";
      xt.xk8 = "Panasonic-TV1";
      xt.xjt = xjt.xju;
      var xx = xa3.userAgent.toLowerCase();
      if (xx.indexOf("viera/3") > 0) {
        xt.xv = 3;
      } else if (xx.indexOf("viera/2") > 0) {
        xt.xv = 2;
      } else if (xx.indexOf("viera/1") > 0) {
        xt.xv = 1;
      }
      break;
    case xf.xr:
      xt.xk7 = "sonyps";
      xt.xk8 = "Playstation";
      xt.xjt = xjt.xju;
      break;
  }
  xt.xk5 = xt.xk5.replace(/:/g, "");
  if (xt.xk5 === "") xt.xk5 = "002F76015683";
  if (xaa.xe5) {
    xt.xjt = xaa.xe5;
  }
}
var xkl = false;
function xkm() {
  xad.xae("toggle standby " + xkl);
  if (xt.xu === xf.xl) {
    if (!xkl) {
      xad.xae("standby on");
      xkn.xko(true);
      xi3.StandBy(true);
      xkl = true;
      xi3.ExecAction("front_panel led-on");
      xad.xie("standby");
    } else {
      xad.xae("standby off");
      xi3.StandBy(false);
      xkl = false;
      xi3.ExecAction("front_panel led-off");
      xad.xie("wakeup");
    }
  }
}
function xkp() {
  if (xt.xu === xf.xi) {
    if (xaa.NetCastLaunchQMENU) {
      xad.xae("launch Settings");
      xaa.NetCastLaunchQMENU();
    }
  }
}
function xkq(xkr) {
  if (typeof xkr !== x9n) {
    xaa.xht.unregistKey(xkr);
  }
}
function xks(xkr) {
  if (typeof xkr !== x9n) {
    xaa.xht.registKey(xkr);
  }
}
function xhw() {
  if (xt.xu === xf.xh) {
    var x10 = x9o.getElementById("pluginObjectNNavi");
    x10.SetBannerState(1);
    var xkt = ["KEY_UP", "KEY_DOWN", "KEY_LEFT", "KEY_RIGHT", "KEY_ENTER", "KEY_RETURN", "KEY_EXIT", "KEY_RED", "KEY_GREEN", "KEY_YELLOW", "KEY_BLUE", "KEY_RW", "KEY_STOP", "KEY_PLAY", "KEY_PAUSE", "KEY_FF", "KEY_0", "KEY_1", "KEY_2", "KEY_3", "KEY_4", "KEY_5", "KEY_6", "KEY_7", "KEY_8", "KEY_9", "KEY_CH_UP", "KEY_CH_DOWN", "KEY_INFO", "KEY_GUIDE"];
    var xku = ["KEY_VOL_UP", "KEY_VOL_DOWN", "KEY_MUTE", "KEY_PANEL_VOL_UP", "KEY_PANEL_VOL_DOWN", "KEY_TOOLS"];
    for (var xd = 0; xd < xkt.length; xd++) {
      var xkr = x2x.x2y.xda[xkt[xd]];
      if (typeof xkr !== x9n) {
        try {
          xaa.xht.registKey(xkr);
        } catch (x12) {}
      }
    }
    for (var xd = 0; xd < xku.length; xd++) {
      var xkr = x2x.x2y.xda[xku[xd]];
      if (typeof xkr !== x9n) {
        try {
          xaa.xht.unregistKey(xkr);
        } catch (x12) {}
      }
    }
  }
}
function xj8() {
  if (xt.xu === xf.xm) {
    var xkv = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "Return", "Exit", "ColorF0Red", "ColorF1Green", "ColorF2Yellow", "ColorF3Blue", "ChannelUp", "ChannelDown", "MediaRewind", "MediaStop", "MediaPlay", "MediaPause", "MediaPlayPause", "MediaFastForward", "Info", "Guide", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (var xd = 0; xd < xkv.length; xd++) {
      try {
        xa7.tvinputdevice.registerKey(xkv[xd]);
      } catch (x12) {}
    }
  }
}
function xkw() {
  var d = x2x.x2z.xch.xaq.now(), xkx = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  xkx = xkx.replace(new x9w("[xy]", "g"), function (xky) {
    var r = (d + x9v.random() * 16) % 16 | 0;
    d = x9v.floor(d / 16);
    return (xky === "x" ? r : r & 3 | 8).toString(16);
  });
  return xkx;
}
function xbr(xkz, xl0) {
  var xl1 = xa4(xkz), xl2 = xl1.length;
  if (xl2 < xl0) {
    xl2 = xl0 - xl1.length;
  } else xl2 = 0;
  for (var xd = 0; xd < xl2; xd++) {
    xl1 = "0" + xl1;
  }
  return xl1;
}
var xl3 = function () {
  var xah = this, xl4 = true, xl5 = 0, xl6 = false, xl7 = 0, xl8 = 0;
  this.xl9 = false;
  var xla, xlb, xlc, xld, xle;
  var xlf = function () {
    var xlg = false;
    this.xlh = function () {
      xlg = true;
    };
    this.xli = function () {
      return xlg;
    };
    var xlj = "https://www.google-analytics.com/collect";
    this.xlm = function (xln) {
      var data = "v=1&tid=" + xla + "&cid=" + xlb + "&t=pageview" + "&dp=" + xln + ("&dl=" + xaa.location + "&dt=OTTPlayer" + "&cd1=" + xlc + "&cd2=" + xld + "&cd3=" + xle);
      x2x.x30.xlo.xlp(xlj, data, "text/plain", xa8);
    };
    this.xlq = function (xlr, xls, xlt) {
      var data = "v=1&tid=" + xla + "&cid=" + xlb + "&t=event" + "&ec=" + xlr + "&ea=" + xls + ("&dl=" + xaa.location + "&dt=OTTPlayer" + "&cd1=" + xlc + "&cd2=" + xld + "&cd3=" + xle);
      if (xlt) {
        if (typeof xlt.metric1 !== x9n) {
          data += "&cm1=" + xlt.metric1;
        }
        if (typeof xlt.metric2 !== x9n) {
          data += "&cm2=" + xlt.metric2;
        }
      }
      x2x.x30.xlo.xlp(xlj, data, "text/plain", xa8);
    };
  };
  var xlu = new xlf;
  this.xlv = function (xlw) {
    if (xdr) {
      xl4 = false;
    }
    if (!xl4) return;
    xaa.xlx = {xly: true};
    xla = "UA-60475508-";
    if (x0.indexOf("/test/") > 0) {
      xla += "2";
    } else xla += "1";
    xad.xae("analytics key " + xla);
    var xlz = "auto";
    var xy = xaa.location.href.toLowerCase();
    if (xy.indexOf("file") === 0 || xy.indexOf("http") !== 0) {
      xlz = {};
      xlz.storage = "none";
      xlz.clientId = xkw();
      var xm0 = true;
      if (typeof xt.localStorage !== x9n) {
        try {
          xlb = xt.localStorage.getItem("_ga_");
          if (typeof xlb !== x9n && xlb !== x9m && xlb !== "") {
            xlz.clientId = xlb;
            xm0 = false;
            xad.xae("ga id readed");
          }
        } catch (xb6) {}
      }
      if (xt.xu === xf.xj) {
        xlz.checkStorageTask = x9m;
        xlz.checkProtocolTask = x9m;
        xlz.legacyHistoryImport = false;
      }
      xad.xae(x9u.stringify(xlz));
      ga("create", xla, xlz);
      ga("set", "checkStorageTask", function () {});
      ga("set", "checkProtocolTask", function (data) {});
      ga(function (xm1) {
        if (!xm1) {
          xad.xbd("no ga tracker set");
          xlu.xlh();
        } else {
          xlb = xm1.get("clientId");
        }
        if (xm0) {
          xad.xae("ga id created");
          if (typeof xt.localStorage !== x9n) {
            try {
              xt.localStorage.setItem("_ga_", xlb);
            } catch (x12) {}
          }
        }
      });
    } else {
      ga("create", xla, xlz);
    }
    xlc = xlw.xm2;
    xld = xlw.xm3;
    xle = xlw.version;
    ga("set", "dimension1", xlc);
    ga("set", "dimension2", xld);
    ga("set", "dimension3", xle);
    xl5 = x2x.x2z.xch.xaq.now();
  };
  this.xm4 = function () {
    xl7++;
  };
  this.xlm = function () {
    if (!xl4) return;
    var xln = xaa.location.pathname + xaa.location.search;
    if (xlu.xli()) {
      xlu.xlm(xln);
      return;
    }
    var xm5 = {};
    xm5.hitCallback = function () {
      xad.xae("analytics send done");
    };
    try {
      ga("send", "pageview", xln, xm5);
      xad.xae("analytics pageview");
    } catch (xb6) {}
  };
  this.xm6 = function (version) {
    if (!xl4) return;
    try {
      if (xlu.xli()) {
        xlu.xlq("application", "install-" + version);
        return;
      }
      ga("send", "event", "application", "install-" + version);
    } catch (xb6) {}
  };
  this.xm7 = function (xm8, xm9) {
    if (!xl4) return;
    if (xlu.xli()) {
      xlu.xlq("application", "update" + xm8 + "-" + xm9);
      return;
    }
    try {
      ga("send", "event", "application", "update" + xm8 + "-" + xm9);
    } catch (xb6) {}
  };
  this.xma = function (xmb) {
    if (!xl4) return;
    var xl1 = xbr(xmb, 4), xls = "duration" + xl1;
    var xlt = {};
    xlt.metric1 = xmb;
    xlt.metric2 = xl7;
    if (xlu.xli()) {
      xlu.xlq("work", xls, xlt);
      return;
    }
    try {
      ga("send", "event", "work", xls, xlt);
    } catch (xb6) {}
  };
  this.xmc = {xmd: 0, xme: 1};
  var xmf = [];
  xmf[xah.xmc.xmd] = false;
  xmf[xah.xmc.xme] = false;
  var xmg = [];
  xmg[xah.xmc.xmd] = "epgpanel";
  xmg[xah.xmc.xme] = "channelepg";
  this.xmh = function (xmi) {
    if (!xl4) return;
    if (!xmf[xmi]) {
      if (xlu.xli()) {
        xlu.xlq("use", xmg[xmi]);
        return;
      }
      try {
        ga("send", "event", "use", xmg[xmi]);
      } catch (xb6) {}
      xmf[xmi] = true;
    }
  };
  this.xd9 = function () {
    if (!xl4) return;
    if (xl6) return;
    var duration = (x2x.x2z.xch.xaq.now() - xl5) / x2x.x2z.xch.xar >> 0;
    var xlt = {};
    xlt.metric1 = duration;
    xlt.metric2 = xl7;
    if (xlu.xli()) {
      xlu.xlq("work", "close", xlt);
      return;
    }
    try {
      ga("send", "event", "work", "close", xlt);
      xl6 = true;
    } catch (xb6) {}
  };
  var xmj = 0;
  this.xmk = function () {
    if (!xl4) return;
    var xm5 = {};
    xm5.hitCallback = function () {
      xad.xae("analytic test sended");
    };
    try {
      xad.xae("analytic test sending...");
      ga("send", "event", "test", "test" + xmj++, "", xm5);
      xad.xae("...");
    } catch (x12) {
      xad.xbd("analytic test error");
    }
  };
};
var xd8 = new xl3;
x2x.xml = function () {
  var xmm = 1e3, xmn = {xmo: new x2x.xg3(this)}, xmp;
  function xmq() {
    xmn.xmo.xge();
    xmp = x9p(xmq, xmm);
  }
  function xmr() {
    xmq();
    xms.xmr = xa8;
  }
  var xms = {xmn: xmn, xmr: xmr};
  return xms;
}();
x2x.x30.xmt = function () {
  var _xg = xaa._xg, xah = this, xmu = xaa.xe9;
  this.xb8 = {xb9: 0, xmv: 1, xmw: 2, xmx: 3, xmy: 4, xmz: 5, xn0: 6, xn1: 7, xn2: 8};
  var xn3 = {xb9: 0, xmv: 1, xn2: 2, xn4: 3};
  function xn5(xn6) {
    xn6 = xcj(xn6);
    if (xn6.toLowerCase().indexOf("http") !== 0) {
      xn6 = "http://" + xn6;
    }
    return xn6;
  }
  this.xd0 = function (xn6, x5) {
    xn6 = xn5(xn6);
    xad.xae("get " + xn6);
    var xn7 = new xa9, xn8, xn9 = xn3.xb9;
    xn7.onreadystatechange = function () {
      if (xn7.readyState === 4) {
        x9q(xn8);
        if (xn7.status === 200) {
          x5(xah.xb8.xb9, xn7.responseText);
          if (xn7.destroy) xn7.destroy();
        } else if ((xn7.status === 302 || xn7.status === 303) && xn7.getResponseHeader("Location") !== x9m) {
          xn6 = xn7.getResponseHeader("Location");
          xah.xd0(xn6, x5);
          if (xn7.destroy) xn7.destroy();
        } else {
          xna(xn7.status, xn7.statusText);
        }
      }
    };
    function xna(xnb, xnc) {
      var xnd, xne = true;
      switch (xnb) {
        case 1002:
          xad.xb6("[GET] Error on network connection");
          xnd = xah.xb8.xmw;
          break;
        case 403:
          xad.xb6("[GET] Access error");
          xnd = xah.xb8.xmy;
          break;
        case 404:
          xad.xb6("[GET] Not found");
          xnd = xah.xb8.xmx;
          break;
        case 502:
          xad.xb6("[GET] Bad gateway");
          xnd = xah.xb8.xmz;
          break;
        case 0:
          switch (xn9) {
            case xn3.xn2:
            case xn3.xmv:
              xne = false;
              break;
            default:
              xad.xb6("[GET] Error (" + xnc + ")");
              xnd = xah.xb8.xn0;
          }
          break;
        case -1:
          switch (xn9) {
            case xn3.xn2:
              xad.xb6("[GET] Error timeout");
              xnd = xah.xb8.xn2;
              break;
            default:
              xnd = xah.xb8.xmv;
          }
          break;
        default:
          xnd = xah.xb8.xmv;
          xad.xb6("[GET] XHR error: " + xnb + "; " + xnc);
      }
      if (xne) {
        x5(xnd);
        if (xn7.destroy) xn7.destroy();
      }
    }
    function xnf() {
      xn7.abort();
      xna(-2, "manual abort");
    }
    try {
      xn7.open("GET", xn6, true);
      var xng = function () {
        xn9 = xn3.xn2;
        xn7.abort();
        xna(-1, "");
      };
      xn8 = x9p(xng, xmu);
      xn7.xnh = xmu + 2e3;
      xn7.send("");
    } catch (xb6) {
      xad.xbd("[GET] XHR error:" + xb6.name);
      x9q(xn8);
      xad.xb6("[GET] " + xb6.name + ":" + xb6.message + ":" + xaa.location);
      xn9 = xn3.xmv;
      xn7.abort();
      xna(-1, "");
    }
  };
  this.xni = function (xn6, x5) {
    this.xd0("../SmartTV/api/proxy.php?url=" + xn6, x5);
  };
  this.xlp = function (xn6, xnj, xnk, x5) {
    xn6 = xn5(xn6);
    var xn7 = new xa9, xn8, xn9 = xn3.xb9, xnl = function () {
      if (xn7.readyState === 4) {
        x9q(xn8);
        switch (xn7.status) {
          case 200:
            x5(xah.xb8.xb9, xn7.responseText);
            if (xn7.destroy) xn7.destroy();
            break;
          case 202:
            x5(xah.xb8.xb9);
            if (xn7.destroy) xn7.destroy();
            break;
          default:
            xna(xn7.status, xn7.statusText + ":" + x9o.domain + ":" + xaa.location);
        }
      }
    };
    xn7.onreadystatechange = xnl;
    var xna = function (xnb, xnc) {
      var xnd, xne = true;
      switch (xnb) {
        case 1002:
          xad.xb6("[POST] Error on network connection");
          xnd = xah.xb8.xmw;
          break;
        case 404:
          xad.xb6("[POST] Service not found");
          xnd = xah.xb8.xmx;
          break;
        case 406:
          xad.xb6("[POST] Service Not Acceptable");
          xnd = xah.xb8.xn1;
          break;
        case 502:
          xad.xb6("[POST] Bad gateway");
          xnd = xah.xb8.xmz;
          break;
        case 0:
          switch (xn9) {
            case xn3.xn2:
            case xn3.xmv:
              xne = false;
              break;
            default:
              xad.xb6("[POST] Error (" + xnc + ")");
              xnd = xah.xb8.xn0;
          }
          break;
        case -1:
          switch (xn9) {
            case xn3.xn2:
              xad.xb6("[POST] Error timeout");
              xnd = xah.xb8.xn2;
              break;
            default:
              xnd = xah.xb8.xmv;
          }
          break;
        default:
          xad.xb6("[POST] XHR error: " + xnb + "; " + xnc);
          xnd = xah.xb8.xmv;
      }
      if (xne) {
        x5(xnd);
        if (xn7.destroy) xn7.destroy();
      }
    };
    try {
      xn7.open("POST", xn6, true);
      if (xnk) {
        xn7.setRequestHeader("Content-Type", xnk);
      }
      var xnm = function () {
        xn9 = xn3.xn2;
        xn7.abort();
        xna(-1, "");
      };
      xn8 = x9p(xnm, xmu);
      xn7.xnh = xmu + 2e3;
      xn7.send(xnj);
    } catch (xb6) {
      xad.xbd("[POST] error:" + xb6.name);
      x9q(xn8);
      xad.xb6("[POST] " + xb6.name + ":" + xb6.message + ":" + x9o.domain + ":" + xaa.location);
      xn9 = xn3.xmv;
      xn7.abort();
      xna(-1, "");
    }
  };
  this.xnn = function (xn6, xno, xnp, xnq, x5) {
    var xnr = "----WebKitFormBoundary" + x2x.x2z.xch.xbg(), xnk = "multipart/form-data; boundary=" + xnr, xns = xa4.fromCharCode(13) + xa4.fromCharCode(10), xnt = ["--", xnr + xns, "Content-Disposition: form-data; name='", xno, "'; filename='", xnp, "'", xns, "Content-Type: text/plain", xns + xns, xnq + xns, "--", xnr, "--"].join("");
    xah.xlp(xn6, xnt, xnk, x5);
  };
};
x2x.x30.API = function (xnu) {
  var _xg = xaa._xg, x37 = x2x.x2y.x37, xch = x2x.x2z.xch, xde = x2x.x31.xdd.xde, xah = this, xlo = xnu, xnv = ["https://api.ottplayer.tv:9000/api/v1.0/", "http://api.ottplayer.tv:9001/api/v1.0/"], xnw = 0;
  if (xt.xu === xf.xk || xt.xu === xf.xi) {
    xnv.push(x0 + "api.php");
  }
  if (xdr) {
    xnv.push(x0 + "api");
  }
  var xnx = xnv.length * 2, xny = xnx, xb8 = {xb9: 0, xnz: 1, xo0: 2, xo1: 3, xo2: 4, xn1: 5};
  this.xb8 = xb8;
  if (xds) {
    xnv.push(x0 + "api");
    xnw = xnv.length - 1;
    xad.xae("API:" + xnv.length + "|" + xnx);
  }
  function xo3() {
    xad.xae("switch api service " + xny);
    var xo4 = false;
    if (--xny > 0) {
      if (++xnw >= xnv.length) {
        xnw = 0;
      }
      xo4 = true;
    } else {
      xnw = 0;
      xny = xnx;
      xo4 = false;
    }
    return xo4;
  }
  var xo5 = "application/json", xo6 = {xo7: {xo8: "login"}, xo9: {xo8: "logout"}, xoa: {xo8: "register_device", xob: 2}, xoc: {xo8: "chk_device"}, xod: {xo8: "set_devopt"}, xoe: {xo8: "get_devopt"}, xof: {xo8: "get_devices", xob: 1}, xog: {xo8: "get_groups", xob: 0}, xoh: {xo8: "get_playlists", xob: 0}, xoi: {xo8: "get_channels", xob: 0}, xoj: {xo8: "get_upload_hash", xob: 0}, xok: {xo8: "delete_playlist", xob: 1}, xb5: {xo8: "get_time", xol: true, xom: true}, xon: {xo8: "find_epg2", xol: true, xom: true}, xoo: {xo8: "get_epg2", xol: true, xom: true}, xop: {xo8: "get_epg_group", xol: true, xom: true}};
  var xoq = function () {
    var xor = 0;
    this.xd0 = function () {
      return xor++;
    };
  }, xos = new xoq, xot = function () {
    var xou = "";
    this.xov = function () {
      return xou !== "";
    };
    this.xow = function (id) {
      xou = id;
    };
    this.xox = function () {
      xou = "";
    };
    this.xoy = function () {
      return xou;
    };
  }, xoz = new xot;
  function xp0() {
    xad.xb6("Service temporary not available");
    xde(x37.x9f(x37.x3f.x5h));
    xde(x37.x9f(x37.x3f.x5i), 6e3);
    xde(x37.x9f(x37.x3f.x5j), 6e3);
  }
  function xp1(xnj, x5, xom, xp2, xp3) {
    xnj.id = xos.xd0();
    var xp4 = x9u.stringify(xnj);
    if (typeof xp2 === x9n) {
      xp2 = 0;
      xp3 = xnw;
    }
    var xp5 = xnv[xp3];
    function xp6(xp7, xp8) {
      if (xp7 === xlo.xb8.xb9) {
        xnw = xp3;
        var xp9 = {}, xb6 = xb8.xb9;
        try {
          xp9 = x9u.parse(xp8);
        } catch (x12) {
          xb6 = xb8.xo1;
          xad.xb6("error data parsing");
          xad.xae("rcv:'" + xp8 + "'");
        }
        x5(xb6, xp9);
        return;
      }
      switch (xp7) {
        case xlo.xb8.xn0:
          xad.xb6("[API " + xp3 + "] access error");
          break;
        default:
          xad.xb6("[API " + xp3 + "] error " + xp7);
      }
      if (++xp2 < xnx) {
        if (++xp3 >= xnv.length) {
          xp3 = 0;
        }
        xad.xae("switch request api service " + xp2);
        x9p(function () {
          xp1(xnj, x5, xom, xp2, xp3);
        }, 50);
      } else {
        if (!xom) {
          xp0();
        }
        x5(xb8.xo0);
      }
    }
    xlo.xlp(xp5, xp4, xo5, xp6);
  }
  var xpa = 0;
  function xo7(x5) {
    var method = xo6.xo7;
    if (!xoz.xov()) {
      var xpb = xcz.xd0(xcz.xd1.xpc), xpd = xcz.xd0(xcz.xd1.xpe), xm2 = xcz.xpf(), xpg = {};
      xpg.method = method.xo8;
      xpg.params = [xpb, xpd, xm2.id];
      var xph = function (xb6, xp8) {
        switch (xb6) {
          case xb8.xb9:
            if (xp8.error === x9m) {
              if (xpa++ === 0) {
                xad.xie("Login ok");
              }
              xoz.xow(xp8.result);
              x5(xb8.xb9);
            } else {
              xad.xae("Login error: " + xp8.error);
              if (xp8.error === "Login failed") {
                xpa = 0;
                x5(xb8.xo2);
              } else {
                x5(xb8.xnz);
              }
            }
            break;
          default:
            x5(xb6);
        }
      };
      xp1(xpg, xph);
    } else {
      x5(xb8.xb9);
    }
  }
  var xpi = 6e3, xpj = x9m;
  function xpk() {
    if (xnv[xnw].indexOf("https") !== 0) {
      x9q(xpj);
      var xpl = function () {
        xah.xo9();
      };
      var xpm = x9p(xpl, xpi);
      xpj = xpm;
    }
  }
  function xpn(xnj, xpo, x5) {
    x9q(xpj);
    function xph(xb6, xp8) {
      if (xb6 === xb8.xb9) {
        if (xp8.error === x9m) {
          x5(xb8.xb9, xp8);
          xpk();
        } else {
          xad.xae("API error: " + xp8.error);
          if (xp8.error === "Session invalid") {
            xoz.xox();
            xad.xae("Restore session...");
            var xpp = function (xb6) {
              if (xb6 === xb8.xb9) {
                xnj.params[xpo] = xoz.xoy();
                var xpq = function (xb6, xp8) {
                  if (xb6 === xb8.xb9) {
                    if (xp8.error === x9m) {
                      x5(xb8.xb9, xp8);
                      xpk();
                    } else {
                      x5(xb8.xnz);
                    }
                  } else x5(xb8.xnz);
                };
                xp1(xnj, xpq);
              } else {
                x5(xb6);
              }
            };
            xo7(xpp);
          } else {
            x5(xb8.xnz);
          }
        }
      } else {
        x5(xb8.xnz);
      }
    }
    xp1(xnj, xph);
  }
  function xpr(method, params, x5) {
    if (!method.xol) {
      var xpp = function (xb6) {
        if (xb6 === xb8.xb9) {
          var xnj = {};
          xnj.method = method.xo8;
          if (params) {
            xnj.params = params;
          }
          xnj.params[method.xob] = xoz.xoy();
          var xps = function (xb6, xp8) {
            if (xb6 === xb8.xb9) {
              x5(xb8.xb9, xp8);
            } else {
              xad.xb6("Error on exec command");
              x5(xb8.xnz);
            }
          };
          xpn(xnj, method.xob, xps);
        } else {
          if (!method.xom) {
            xad.xb6("Error on login");
            if (xb6 === xb8.xo2) {
              xde(x37.x9f(x37.x3f.x5k), 3500);
              xad.xie("Login failed");
            }
          }
          x5(xb8.xnz);
        }
      };
      xo7(xpp);
    } else {
      var request = {};
      request.method = method.xo8;
      if (params) {
        request.params = params;
      }
      xp1(request, function (xb6, xp8) {
        if (!xb6) {
          if (xp8.error === x9m) {
            x5(xb8.xb9, xp8);
          } else {
            x5(xb8.xnz);
          }
        } else {
          x5(xb8.xnz);
        }
      }, method.xom);
    }
  }
  function xoj(x5) {
    xpr(xo6.xoj, [xt.xk7], function (xb6, xp8) {
      var xpt;
      if (xb6 === xb8.xb9) {
        xpt = xp8.result;
      }
      x5(xb6, xpt);
    });
  }
  this.xo9 = function (x5) {
    var method = xo6.xo9;
    x9q(xpj);
    function xph(xb6, xp8) {
      if (typeof x5 !== x9n) {
        x5();
      }
    }
    if (xoz.xov()) {
      var xnj = {};
      xnj.method = method.xo8;
      xnj.params = [xoz.xoy()];
      xp1(xnj, xph);
      xoz.xox();
    } else {
      xad.xae("session not open");
      xph();
    }
  };
  this.xof = function (x5) {
    xpr(xo6.xof, [xt.xk7], function (xb6, xp8) {
      var xpu = [];
      if (xb6 === xb8.xb9) {
        xpu = xp8.result;
      }
      x5(xb6, xpu);
    });
  };
  this.xpv = function (xpw, x5) {
    xpr(xo6.xoa, [xpw, xt.xk7], function (xb6, xp8) {
      if (xb6 === xb8.xb9 && xp8.error === x9m) {
        var xpx = xp8.result;
        x5(xb8.xb9, xpx);
      } else {
        x5(xb8.xnz);
      }
    });
  };
  this.xoh = function (x5) {
    xpr(xo6.xoh, [], function (xb6, xp8) {
      var xpy = [];
      if (xb6 === xb8.xb9) {
        xpy = xp8.result;
      }
      x5(xb6, xpy);
    });
  };
  this.xog = function (x5) {
    xpr(xo6.xog, [], function (xb6, xp8) {
      var xpz = [];
      if (xb6 === xb8.xb9) {
        xpz = xp8.result;
      }
      x5(xb6, xpz);
    });
  };
  this.xoi = function (xq0, x5) {
    xpr(xo6.xoi, [x9m, xq0.id], function (xb6, xp8) {
      if (xb6 === xb8.xb9) {
        xq0.xim = xp8.result;
      }
      x5(xb6, xq0);
    });
  };
  this.xq1 = function (name, data, x5) {
    function xq2(xb6, xpt) {
      if (xb6 === xb8.xb9) {
        var xq3 = "https://ottplayer.tv/upload/playlist/" + xpt + "/" + name;
        var xq4 = function (xb6) {
          switch (xb6) {
            case xlo.xb8.xb9:
              x5(xb8.xb9);
              break;
            case xlo.xb8.xn1:
              x5(xb8.xn1);
              break;
            default:
              x5(xb8.xnz);
          }
        };
        xlo.xnn(xq3, "inplaylist", "p.m3u", data, xq4);
      } else {
        x5(xb8.xnz);
      }
    }
    xoj(xq2);
  };
  this.xq5 = function (xq6, x5) {
    xpr(xo6.xok, [xq6], function (xb6, xp8) {
      x5(xb6);
    });
  };
  var xq7 = "GMT+0300";
  this.xb5 = function (x5) {
    function xp6(xb6, xp8) {
      if (xb6 === xb8.xb9) {
        var xz = xp8.result.Result, xq8 = xz.replace(/(\d{4})(\d{2})(\d{2}).(\d{2})(\d{2})(\d{2})/, "$2/$3/$1 $4:$5:$6 " + xq7), xq9;
        if (xq8 !== xz) {
          xq9 = new xch.xaq(xq8);
        } else {
          xq9 = new xch.xaq;
          xad.xb6("Error interpreting server date");
        }
        x5(xb8.xb9, xq9);
      } else {
        xad.xb6("Protocol error: 7");
        x5(xb8.xnz);
      }
    }
    xpr(xo6.xb5, [], xp6);
  };
  this.xqa = function (xqb, x5) {
    xpr(xo6.xon, [xqb], function (xb6, xp8) {
      var data;
      if (xb6 === xb8.xb9) {
        data = xp8.result;
      }
      x5(xb6, data);
    });
  };
  this.xqc = function (epg_id, xqd, xqe, x5) {
    xpr(xo6.xoo, [epg_id, xqe, xqd], function (xb6, xp8) {
      var data;
      if (xb6 === xb8.xb9) {
        data = xp8.result;
      }
      x5(xb6, data);
    });
  };
  this.xop = function (xqf, xqd, xqe, x5) {
    xpr(xo6.xop, [xqf.join(xa4.fromCharCode(44)), xqe, xqd], function (xb6, xp8) {
      var data;
      if (xb6 === xb8.xb9) {
        data = xp8.result;
      }
      x5(xb6, data);
    });
  };
};
var xqg = function (xqh) {
  var _xg = xaa._xg, x37 = xaa.x2x.x2y.x37, xah = this, xpz = [], xqi = [], xpy = [], xb4 = xqh;
  this.xb8 = {xb9: 0, xqj: 1};
  function xqk(xql, xqm) {
    if (xql.order > xqm.order) return 1;
    if (xql.order < xqm.order) return -1;
    return 0;
  }
  function xqn(xqo) {
    if (xqo.length > 0 && typeof xqo[0].order !== x9n) {
      xqo.sort(xqk);
    }
  }
  function xqp(x5) {
    function xqq(xb6, xqr) {
      if (xb6 === xb4.xb8.xb9) {
        xpy = xqr;
        xqn(xpy);
        x5(xah.xb8.xb9);
      } else {
        x5(xah.xb8.xqj);
      }
    }
    xb4.xoh(xqq);
  }
  function xqs(x5) {
    if (xpz.length > 0) {
      x5(xah.xb8.xb9);
    } else {
      var xqt = function (xb6, xqu) {
        if (xb6 === xb4.xb8.xb9) {
          xpz = xqu;
          xqn(xpz);
          for (var xd = 0; xd < xpz.length; xd++) {
            xqi[xpz[xd].id] = xd;
          }
          x5(xah.xb8.xb9);
        } else {
          x5(xah.xb8.xqj);
        }
      };
      xb4.xog(xqt);
    }
  }
  function xqv(xq0, x5) {
    if (typeof xq0.xim !== x9n) {
      x5(xah.xb8.xb9, xq0.xim);
    } else {
      var xqw = function (xb6, xq0) {
        if (xb6 === xb4.xb8.xb9) {
          x5(xah.xb8.xb9, xq0.xim);
        } else {
          x5(xah.xb8.xqj);
        }
      };
      xb4.xoi(xq0, xqw);
    }
  }
  this.clear = function () {
    xpz = [];
    xqi = [];
    xpy = [];
  };
  this.xqx = function (x5) {
    if (xpy.length === 0) {
      var xqy = function (xb6) {
        if (xb6 === xb4.xb8.xb9) {
          x5(xah.xb8.xb9, xpy);
        } else {
          x5(xah.xb8.xqj);
        }
      };
      xqp(xqy);
    } else {
      x5(xah.xb8.xb9, xpy);
    }
  };
  this.xqz = function (xq0, x5) {
    if (typeof xq0.xpz === x9n) {
      var xr0 = function (xb6) {
        if (xb6 === xah.xb8.xb9) {
          var xr1 = function (xb6, xim) {
            if (xb6 === xah.xb8.xb9) {
              var xr2 = [];
              for (var xr3 = 0; xr3 < xpz.length; xr3++) {
                xr2[xr3] = {xr4: xpz[xr3], xim: []};
              }
              for (var xr5 = 0; xr5 < xq0.xim.length; xr5++) {
                xq0.xim[xr5].xr6 = xr5;
                if (typeof xqi[xq0.xim[xr5].group_id] !== x9n) {
                  xr2[xqi[xq0.xim[xr5].group_id]].xim.push(xq0.xim[xr5]);
                }
              }
              var xr7 = [];
              for (var xr3 = 0; xr3 < xr2.length; xr3++) {
                if (xr2[xr3].xim.length > 0) {
                  xr7.push(xr2[xr3]);
                }
              }
              for (var xr3 = 0; xr3 < xr7.length; xr3++) {
                if (xr7[xr3].xim) {
                  xqn(xr7[xr3].xim);
                }
              }
              var xr8 = xcz.xd0(xcz.xd1.xr9);
              if (xr7.length > 1 && xr8 !== xcz.xra.xb9) {
                var xrb = {xr4: {id: -2, title: x37.x9f(x37.x3f.x7l), xrc: x37.x3f.x7l}, xim: []};
                var xrd = 0;
                for (var xr3 = 0; xr3 < xr7.length; xr3++) {
                  for (var xr5 = 0; xr5 < xr7[xr3].xim.length; xr5++) {
                    xrb.xim.push(xr7[xr3].xim[xr5]);
                    xrd++;
                  }
                }
                if (xrb.xim.length > 0) {
                  if (xr8 === xcz.xra.xre) {
                    var xrf = function (xql, xqm) {
                      if (xql.xr6 > xqm.xr6) return 1;
                      if (xql.xr6 < xqm.xr6) return -1;
                      return 0;
                    };
                    xrb.xim.sort(xrf);
                  } else if (xr8 === xcz.xra.xrg) {
                    var xrh = function (xql, xqm) {
                      if (xql.title > xqm.title) return 1;
                      if (xql.title < xqm.title) return -1;
                      return 0;
                    };
                    xrb.xim.sort(xrh);
                  }
                  xr7.unshift(xrb);
                }
              }
              xq0.xpz = xr7;
              xr2 = x9m;
              delete xq0.xim;
              x5(xah.xb8.xb9, xq0);
            } else {
              x5(xah.xb8.xqj);
            }
          };
          xqv(xq0, xr1);
        } else {
          x5(xah.xb8.xqj);
        }
      };
      xqs(xr0);
    } else {
      x5(xah.xb8.xb9, xq0);
    }
  };
};
x2x.x30.xri = function () {
  var _xg = xaa._xg, x37 = x2x.x2y.x37, xlo = x2x.x30.xlo, xhx = x2x.x30.xhx, xah = this;
  this.xb8 = {xb9: 0};
  function xrl(xrk) {
    var xrm = xrk.length;
    return xrk.indexOf("streamtype=vod", 0) === xrm - 14 || xrk.indexOf(".flv", 0) === xrm - 4 || xrk.indexOf(".avi", 0) === xrm - 4 || xrk.indexOf(".mkv", 0) === xrm - 4 || xrk.indexOf(".mpg", 0) === xrm - 4 || xrk.indexOf(".mp4", 0) === xrm - 4 || xrk.indexOf(".ogv", 0) === xrm - 4 || xrk.indexOf(".webm", 0) === xrm - 5 || xrk.indexOf(".mov", 0) === xrm - 4 || xrk.indexOf("#vod", 0) === xrm - 4;
  }
  var xrn = new x9w("(?:[0-9]{1,3}" + xa4.fromCharCode(92) + ".){3}[0-9]{1,3}" + xa4.fromCharCode(92) + ":[0-9]{1,5}([/][^/]*){0,1}$", "g");
  var xro = new x9w("[/]{2}(?:[a-z0-9]{1,10}" + xa4.fromCharCode(92) + ".){1,4}[a-z0-9]{1,4}" + xa4.fromCharCode(92) + ":[0-9]{1,5}[/]*$", "g");
  function xrp(xrk) {
    var xrm = xrk.length;
    return xrk.indexOf("streamtype=live", 0) > 0 || xrk.indexOf("/channel", 0) > 0 || xrk.indexOf("/iptv", 0) > 0 || xrk.indexOf("/tv/", 0) > 0 || xrk.indexOf("/stream/", 0) > 0 || xrk.indexOf("/live", 0) > 0 || xrk.indexOf("/rtmp.", 0) > 0 || xrk.indexOf(".stream.", 0) > 0 || xrn.test(xrk) || xro.test(xrk) || xrk.indexOf("#live", 0) === xrm - 5 && xrk.length >= 5;
  }
  var xrs = new x9w(xa4.fromCharCode(92) + "W((FM)|(fm)|((R|r)adio)|(mp3))(" + xa4.fromCharCode(92) + "W)", "g");
  function xrt(xrk) {
    var xhi = xrs.test(xrk);
    if (xhi) {
      xad.xae("is FM stream:" + xrk);
    }
    return xhi;
  }
  var xru = new x9w("\\\\([0-9]{4}\\\\)", "g");
  this.xrv = function (xrw) {
    var xo4 = {type: xhx.xrx.xg, xry: xhx.xrz.xg, xs0: false};
    var xs1 = xrw.href.toLowerCase();
    if (!xrw.broadcast && xs1.indexOf("bst|") === 0) {
      xrw.broadcast = true;
    }
    if (xrw.broadcast) {
      xo4.type = xhx.xrx.xs2;
      return xo4;
    }
    if (xs1.indexOf("youtube") > 0 || xs1.indexOf("youtu.be") > 0) {
      xo4.type = xhx.xrx.xs3;
      return xo4;
    }
    var xs4 = xcj(xrw.xs5()).toLowerCase();
    var xs6 = xrw.title.toLowerCase();
    if (xs4.indexOf("http://", 0) === 0 || xs4.indexOf("https://", 0) === 0) {
      xo4.type = xhx.xrx.xs3;
      xo4.xry = xhx.xrz.xs7;
      if (xrt(xs4) || xrt(xs6)) {
        xo4.type = xhx.xrx.xs8;
        if (xs4.indexOf(".m3u8", 0) > 0) {
          xo4.xry = xhx.xrz.xs9;
        }
        return xo4;
      }
      if (xs4.indexOf(".m3u8", 0) > 0) {
        xo4.type = xhx.xrx.xsa;
        xo4.xry = xhx.xrz.xs9;
        if (typeof xrw.epg_id === x9n || xrw.epg_id === 0 && !xrw.xsb) {
          if (xs4.indexOf("streamtype=vod", 0) > 0 || xs4.indexOf(".flv", 0) > 0 || xs4.indexOf(".avi", 0) > 0 || xs4.indexOf(".mkv", 0) > 0 || xs4.indexOf(".mpg", 0) > 0 || xs4.indexOf(".mp4", 0) > 0 || xs4.indexOf(".ogv", 0) > 0 || xs4.indexOf(".webm", 0) > 0 || xs4.indexOf(".mov", 0) > 0 || xs4.indexOf("/vod/", 0) > 0 || xs4.indexOf(".ex.ua/get/", 0) > 0 || xs4.indexOf(".ex.ua/load/", 0) > 0 || xs4.indexOf("#vod", 0) === xs4.length - 4 && xs4.length >= 4 || (xs6.indexOf("streamtype=vod", 0) > 0 || xs6.indexOf(".flv", 0) > 0 || xs6.indexOf(".avi", 0) > 0 || xs6.indexOf(".mkv", 0) > 0 || xs6.indexOf(".mpg", 0) > 0 || xs6.indexOf(".mp4", 0) > 0 || xs6.indexOf(".ogv", 0) > 0 || xs6.indexOf(".webm", 0) > 0 || xs6.indexOf(".mov", 0) > 0 || xs6.indexOf("/vod/", 0) > 0 || xs6.indexOf(".ex.ua/get/", 0) > 0 || xs6.indexOf(".ex.ua/load/", 0) > 0 || xs6.indexOf("#vod", 0) === xs6.length - 4 && xs6.length >= 4) || xs6.indexOf("смотреть") === 0) {
            xo4.type = xhx.xrx.xs3;
          } else {
            var xsc = xs6.replace(/\(.*?\)/gm, "");
            var xsd = xsc.split(" "), xse = xsd.length;
            if (xsd[xse - 1] === "hd") {
              xse--;
            }
            if (xse >= 4) {
              xo4.type = xhx.xrx.xs3;
            } else {
              var xsf = xs6.search(xru);
              if (xsf > -1) {
                xo4.type = xhx.xrx.xs3;
              } else {
                xad.xae("----?LIVE?-----" + xs6 + "[" + xsd.length + "]");
              }
            }
          }
        }
      } else if (xrw.xsb || xrp(xs4)) {
        xo4.type = xhx.xrx.xsa;
        if (xrl(xs4)) {
          xo4.type = xhx.xrx.xs3;
        }
      } else if (xs4.indexOf("/udp/", 0) > 0) {
        xo4.type = xhx.xrx.xsa;
        xo4.xry = xhx.xrz.xsg;
      } else if (xs4.indexOf(".mp3", 0) > 0 || xs4.indexOf(".ogg", 0) > 0) {
        xo4.type = xhx.xrx.xsh;
      } else if (xs4.indexOf(".jpg", 0) > 0 || xs4.indexOf(".gif", 0) > 0 || xs4.indexOf(".png", 0) > 0 || xs4.indexOf(".bmp", 0) > 0 || xs4.indexOf(".jpeg", 0) > 0) {
        xo4.type = xhx.xrx.xsi;
      }
    } else if (xs4.indexOf("rtp://", 0) === 0) {
      xo4.type = xhx.xrx.xsa;
      xo4.xry = xhx.xrz.xsj;
      if (xs4.indexOf("rtp://@") === 0) {
        xo4.xry = xhx.xrz.xsk;
      }
    } else if (xs4.indexOf("rtmp://", 0) === 0 || xs4.indexOf("rtmpe://", 0) === 0) {
      xo4.type = xhx.xrx.xsa;
      xo4.xry = xhx.xrz.xsl;
    } else if (xs4.indexOf("rtsp://", 0) === 0) {
      xo4.type = xhx.xrx.xsa;
      xo4.xry = xhx.xrz.xsm;
    } else if (xs4.indexOf("udp://", 0) === 0) {
      xo4.type = xhx.xrx.xsa;
      xo4.xry = xhx.xrz.xsn;
      if (xs4.indexOf("udp://@") === 0) {
        xo4.xry = xhx.xrz.xso;
      }
    } else if (xs4.indexOf("mms://", 0) === 0) {
      xo4.type = xhx.xrx.xsa;
      xo4.xry = xhx.xrz.xsp;
    } else if (xs4.indexOf("mmsh://", 0) === 0) {
      xo4.type = xhx.xrx.xsa;
      xo4.xry = xhx.xrz.xsq;
    }
    return xo4;
  };
  var xsr = [{xss: 38, xst: "MP4 Original (HD)"}, {xss: 37, xst: "MP4 1080p (HD)"}, {xss: 22, xst: "MP4 720p (HD)"}, {xss: 18, xst: "MP4 360p"}, {xss: 36, xst: "FLV 480p"}, {xss: 34, xst: "FLV 360p"}];
  function xsu(data) {
    var xz = {xb6: xah.xb8.xb9, xsv: ""};
    if (data.indexOf("url_encoded_fmt_stream_map") > 0 || data.indexOf("fmt_url_map") > 0) {
      var xsw = data.split("&");
      var params = {}, xsx;
      for (var xd = 0; xd < xsw.length; xd++) {
        xsx = xsw[xd].split("=");
        params[xsx[0]] = x9x(xsx[1]);
      }
      var xsy;
      if ("url_encoded_fmt_stream_map" in params) {
        xsy = params.url_encoded_fmt_stream_map.split(",");
      } else {
        xsy = params.fmt_url_map.split(",");
      }
      var xsz = [];
      for (var xd = 0; xd < xsy.length; xd++) {
        var xbu = {};
        var xt0 = xsy[xd].split("&");
        for (var xh7 = 0; xh7 < xt0.length; xh7++) {
          xsx = xt0[xh7].split("=");
          xbu[xsx[0]] = x9x(xsx[1]);
        }
        xsz.push(xbu);
      }
      var xt1 = false;
      for (var xd = 0; xd < xsz.length; xd++) {
        for (var xt2 = 0; xt2 < xsr.length; xt2++) {
          if (xa0(xsz[xd].itag, 10) === xsr[xt2].xss) {
            xz.xsv = xsz[xd].url || "";
            xt1 = true;
            xad.xae("url format:" + xsr[xt2].xst);
            break;
          }
        }
        if (xt1) break;
      }
      if (!xt1) {
        xad.xb6("not found supported link");
        xz.xsv = xsz[0].url || "";
      }
    } else {
      var xsw = data.split("&");
      var params = {}, xsx;
      for (var xd = 0; xd < xsw.length; xd++) {
        xsx = xsw[xd].split("=");
        params[xsx[0]] = x9x(xsx[1]);
        xad.xae(xsx[0] + "='" + params[xsx[0]] + "'");
      }
      if (params.xt3) {
        xad.xb6(params.xt3);
      } else {
        xad.xb6("not support youtube info format");
      }
      xz.xb6 = xah.xb8.xt4;
    }
    return xz;
  }
  function xt5(xt6, x5) {
    var xt7 = ["youtube.com/watch?v=", "youtu.be/", "youtube.com/embed/", "youtube.com/video/"];
    xad.xae("=== parse youtube : " + xt6);
    var xt8 = false;
    for (var xjn = 0; xjn < xt7.length; xjn++) {
      var xt9 = xt6.indexOf(xt7[xjn]);
      if (xt9 > 0) {
        xt9 += xt7[xjn].length;
        var id = xt6.substr(xt9, xt6.length - xt9);
        xad.xae("youtube video id = " + id);
        var xta = function (xb6, data) {
          if (xb6 === xlo.xb8.xb9) {
            var xtb = xsu(data);
            if (xtb.xb6 !== xah.xb8.xb9) {
              xtb.xsv = xt6;
            }
            x5(xah.xb8.xb9, xtb.xsv);
          } else {
            xad.xb6("youtube video info not get");
            x5(xah.xb8.xb9, xt6);
          }
        };
        xlo.xd0("http://www.youtube.com/get_video_info?video_id=" + id, xta);
        xt8 = true;
        break;
      }
    }
    if (!xt8) {
      xad.xb6("not supported youtube link");
      x5(xah.xb8.xb9, xt6);
    }
  }
  function xtc(xtd, x5) {
    xad.xae("=== parse vk : " + xtd);
    var xte = function (xb6, data) {
      var xsv = xtd;
      if (xb6 === xlo.xb8.xb9) {
        var xtf = xcn(data, "video_no_flv = ", ";");
        var xtg = xcn(data, "var video_max_hd = '", "'");
        if (xtf === "1") {
          var xth = 0;
          var xti = "";
          var xtj = [];
          switch (xtg) {
            case "0":
              xti = "240";
              xth = 1;
              break;
            case "1":
              xti = "360";
              xth = 2;
              break;
            case "2":
              xti = "480";
              xth = 3;
              break;
            case "3":
              xti = "720";
              xth = 4;
              break;
          }
          for (var xf6 = 0; xf6 < xth; xf6++) {
            switch (xf6) {
              case 0:
                xti = "240";
                break;
              case 1:
                xti = "360";
                break;
              case 2:
                xti = "480";
                break;
              case 3:
                xti = "720";
                break;
            }
            var xtk;
            try {
              xtk = xcn(data, "cache" + xti + "=", "&");
              if (xtd.indexOf("video_ext.php") > 0) xtk = xcn(data, "url" + xti + xa4.fromCharCode(34) + ":" + xa4.fromCharCode(34), xa4.fromCharCode(34)).replace(/\\/g, "");
            } catch (x12) {
              xtk = "";
            }
            if (xtk.indexOf("ttp") > 0) {
              var xtl = Array(xti + "p", xtk);
              xtj.push(xtl);
              xad.xae(xtl[1]);
            }
          }
          xsv = xtj[xtj.length - 1][1];
        } else {
          var xtm = ["240", "360", "480", "720"];
          var xtn = [];
          for (var xto = xtm.length - 1; xto > 0; xto--) {
            var url = xcn(data, xa4.fromCharCode(34) + "url" + xtm[xto] + xa4.fromCharCode(34) + ":" + xa4.fromCharCode(34), xa4.fromCharCode(34));
            if (url.length > 9) {
              xtn.push(url);
              xad.xae("finded " + xtm[xto] + " VK link");
              break;
            }
          }
          if (xtn.length > 0) {
            xsv = xtn[xtn.length - 1].replace(/\\/g, "");
          } else {
            xad.xb6(x37.x9f(x37.x3f.x67));
            var xtp = xcn(data, "video_ext_msg" + xa4.fromCharCode(34) + ">", "</div>");
            if (xtp !== "") {
              xad.xb6("VK:" + xtp);
            }
          }
        }
        x5(xah.xb8.xb9, xsv);
      } else {
        xad.xb6("error on get vk link data");
        if (xsv.toLowerCase().indexOf("https") === 0) {
          xsv = "http" + xsv.substring(5);
          xtc(xsv, x5);
        } else {
          x5(xah.xb8.xb9, xsv);
        }
      }
    };
    xlo.xd0(xtd, xte);
  }
  function xtr(xts, xtt) {
    var xtu = xcj(xtt).replace(new x9w("&amp;", "g"), "&");
    if (xcz.xd0(xcz.xd1.xtv)) {
      if (xts.xry === xhx.xrz.xso) {
        var xtw = xcz.xd0(xcz.xd1.xtx);
        xtu = xtw + "/udp/" + xtu.substring(7);
        xad.xie("proxied link:" + xtu);
      } else if (xts.xry === xhx.xrz.xsk) {
        var xtw = xcz.xd0(xcz.xd1.xtx);
        xtu = xtw + "/rtp/" + xtu.substring(7);
        xad.xie("proxied link:" + xtu);
      }
    }
    return xtu;
  }
  var xty = "youtu", xtz = "vk.com", xu0 = "md5hash";
  this.xu1 = function (xu2, xu3, x5) {
    if (xu2.indexOf(xu0) >= 0) {
      if (typeof xu3 !== x9n && xu3 !== "") {
        xad.xae("==========parser: " + xu3 + " ==============");
        var xu4 = xu3.split("|");
        if (xu4.length === 3) {
          xad.xae("link:" + xu4[0]);
          xad.xae("start:" + xu4[1]);
          xad.xae("end:" + xu4[2]);
          var xu5 = function (xb6, data) {
            if (xb6 === xlo.xb8.xb9) {
              if (data.length > 0) {
                var xsv = xcn(data, xu4[1], xu4[2]);
                xsv = xu2.replace(xu0, xsv);
                xad.xae("parsed link:'" + xsv + "'");
                x5(xah.xb8.xb9, xsv);
              }
            } else {
              xad.xb6("error[1] on get stream link");
              x5(xah.xb8.xb9, xu2);
            }
          };
          xlo.xd0(xu4[0], xu5);
        } else {
          xad.xae("parser type 2 (" + xu4.length + ")");
          var xu6 = function (xb6, data) {
            if (xb6 === xlo.xb8.xb9 && data.length > 0) {
              var xsv = data;
              xad.xae("parsed link:'" + xsv + "'");
              x5(xah.xb8.xb9, xsv);
            } else {
              xad.xb6("error[2] on get stream link");
              x5(xah.xb8.xb9, xu2);
            }
          };
          var xn6 = xu3;
          if (xu4.length > 0) xn6 = xu4[0];
          xlo.xd0(xn6, xu6);
        }
      } else {
        x5(xah.xb8.xb9, xu2);
      }
    } else {
      x5(xah.xb8.xb9, xu2);
    }
  };
  this.xu7 = function (xrw, x5) {
    xad.xae("=== parse stream url: " + xrw.href);
    function xu8(xb6, xsv) {
      x5(xb6, xtr(xrw.xu9(), xsv));
    }
    if (xrw.href.indexOf(xty) >= 0) {
      xt5(xrw.href, xu8);
    } else if (xrw.href.indexOf(xtz) > 0) {
      xtc(xrw.href, xu8);
    } else {
      xah.xu1(xrw.href, xrw.xu3, xu8);
    }
  };
};
x2x.x30.xhx = function (data) {
  this.title = data.title;
  this.id = data.id;
  if (data.xua) {
    this.xua = data.xua;
  }
  this.pict = data.pict;
  this.href = data.href;
  this.adult = data.adult;
  this.epg_id = data.epg_id;
  this.order = data.order;
  if (data.xu3) {
    this.xu3 = data.xu3;
  }
  if (data.xub) {
    this.xub = data.xub;
  }
  if (data.broadcast) {
    this.broadcast = data.broadcast;
  }
  this.xuc = 0;
  this.xud = 0;
  this.xue = 0;
};
x2x.x30.xhx.xuf = {value: 0};
x2x.x30.xhx.prototype.xuf = x2x.x30.xhx.xuf;
x2x.x30.xhx.xug = function (xuh) {
  this.xuf.value = xuh * x2x.x2z.xch.xar;
};
x2x.x30.xhx.xui = function () {
  return x2x.x30.xhx.xuf.value;
};
x2x.x30.xhx.xuj = {value: 18e4};
x2x.x30.xhx.prototype.xuj = x2x.x30.xhx.xuj;
x2x.x30.xhx.xhy = function (xuk) {
  this.xuj.value = xuk;
};
x2x.x30.xhx.xul = {value: 1e4};
x2x.x30.xhx.prototype.xul = x2x.x30.xhx.xul;
x2x.x30.xhx.xrx = {xg: 0, xsa: 1, xs3: 2, xs8: 3, xsh: 4, xsi: 5, xs2: 6};
x2x.x30.xhx.prototype.xrx = x2x.x30.xhx.xrx;
x2x.x30.xhx.xrz = {xg: 0, xs9: 1, xs7: 2, xsj: 3, xsk: 4, xsl: 5, xsm: 6, xsn: 7, xso: 8, xsg: 9, xsp: 10, xsq: 11, xs3: 12};
x2x.x30.xhx.prototype.xrz = x2x.x30.xhx.xrz;
x2x.x30.xhx.prototype.xu9 = function () {
  var xts = this.xum;
  if (!xts || xts.type === this.xrx.xg) {
    xts = x2x.x30.xun.xrv(this);
    this.xum = xts;
  }
  return this.xum;
};
x2x.x30.xhx.prototype.xuo = function (xup) {
  var type = this.xu9();
  this.xum.type = xup;
};
x2x.x30.xhx.prototype.parse = function (x5) {
  var xah = this;
  x2x.x30.xun.xu7(this, function (xb6, url) {
    xah.xuq = url;
    x5();
  });
};
x2x.x30.xhx.prototype.xs5 = function () {
  return this.xuq || this.href;
};
x2x.x30.xhx.prototype.xur = function () {
  return this.adult === 1 || this.adult === true;
};
x2x.x30.xhx.prototype.xus = function (xrw) {
  return this.xuq === xrw.xs5();
};
x2x.x30.xhx.prototype.xut = function () {
  return this.xsb;
};
x2x.x30.xhx.prototype.xuu = function (xuv, x5) {
  if (this.xuw && (xuv || this.xuw.xuv() === xuv) && this.xuw.xux()) {
    x5(this.xuw);
  } else {
    var xah = this;
    x2x.x30.xuy.xuz(xah, xuv, function (xv0) {
      x5(xah.xuw);
    });
  }
};
x2x.x30.xhx.prototype.xuz = function (xv1) {
  this.xuw = xv1;
};
x2x.x30.xhx.prototype.xv2 = function () {
  return typeof this.xuw !== x9n;
};
x2x.x30.xhx.prototype.xv3 = function () {
  if (this.xsb) {
    var xv4 = x2x.x2z.xch.xbg(), xv5 = xv4 + this.xuf.value;
    if (this.xuc !== 0) {
      xad.xae("Now playing archive. ts=" + this.xuc);
      xv5 = xv4 + this.xuc;
      this.xv6();
    }
    this.xv7(xv5);
  } else {
    xkn.xv8(this);
  }
};
x2x.x30.xhx.prototype.xv6 = function () {
  this.xuc = 0;
  this.xud = 0;
  this.xue = 0;
};
x2x.x30.xhx.prototype.xv9 = function () {
  this.xv6();
  xkn.xko();
};
x2x.x30.xhx.prototype.xva = function () {
  this.xud = x2x.x2z.xch.xbg();
  if (this.xue !== 0) {
    this.xud += this.xue;
  }
  xad.xae("Stream pause at:" + x2x.x2z.xch.xbz(x2x.x2z.xch.xbg() + this.xuc));
};
x2x.x30.xhx.prototype.xvb = function () {
  if (xkn.pause()) {
    this.xva();
  }
};
x2x.x30.xhx.prototype.xvc = function () {
  this.xue = this.xud - x2x.x2z.xch.xbg();
  xad.xae("Stream resume. Pause time=" + this.xue * -1 + "ms/" + this.xuj.value + "ms");
  this.xud = 0;
  if (this.xue < -1 * this.xuj.value) {
    xad.xae("Stream need force resume!!!");
    return false;
  }
  return true;
};
x2x.x30.xhx.prototype.xvd = function () {
  if (this.xvc()) {
    xkn.xve();
  } else {
    if (this.xsb) {
      var xvf = x2x.x2z.xch.xbg() + (this.xuc + this.xue - this.xul.value);
      this.xv6();
      this.xv7(xvf);
    } else {
      xkn.xve();
    }
  }
};
x2x.x30.xhx.prototype.xvg = function () {
  if (!xkn.xvh()) {
    this.xva();
    xkn.xvi();
  } else {
    if (this.xvc()) {
      xkn.xvi();
    } else {
      var xvf = x2x.x2z.xch.xbg() + (this.xuc + this.xue - this.xul.value);
      this.xv6();
      this.xv7(xvf);
      if (xkn.xvh()) {
        xad.xbd("PAUSE ON RESUME");
      }
    }
  }
};
x2x.x30.xhx.prototype.xv7 = function (xvj) {
  if (this.xsb) {
    var url = this.href, xvk = xvj / 1e3 >> 0, xvl = x2x.x2z.xch.xbg() / 1e3 >> 0;
    this.xuc = (xvk - xvl) * 1e3;
    if (this.xuc >= 0) {
      this.xuc = 0;
    } else {
      xad.xae("Watch time is: " + x2x.x2z.xch.xbz(xvj));
      var xvm = "";
      if (url.toLowerCase().indexOf("?") >= 0) {
        xvm = "&";
      } else {
        xvm = "?";
      }
      url += xvm + "utc=" + xvk + "&lutc=" + xvl;
    }
    this.xuq = url;
  }
  xkn.xv8(this);
};
x2x.x30.xhx.prototype.xvn = function (event) {
  xad.xae("Watch event");
  var xvo = this.xvp();
  var xvq = this.xuw.xvr(1, 0)[0];
  if (xvq === event) {
    xad.xae("--> selected liveEvent");
    if (xvo !== xvq) {
      this.xuq = "";
      this.xuc = 0;
      xkn.xv8(this);
      return;
    }
    if (this.xuc === 0) {
      xkn.xv8(this);
      return;
    }
  }
  var xvf = event.start;
  if (xvo === event) {
    xad.xae("--> selected current event, continue ....");
    xvf = x2x.x2z.xch.xbg() + this.xuc;
  } else {
    xad.xae("--> selected event from start");
  }
  this.xuc = 0;
  this.xv7(xvf);
};
x2x.x30.xhx.prototype.xvs = function (xvt, x5) {
  var type = this.xu9();
  if (type.type === this.xrx.xs3 || type.type === this.xrx.xsh) {
    xkn.xvu(xvt);
    x5(true);
  } else {
    this.xud = 0;
    this.xue = 0;
    if (this.xsb) {
      var xah = this;
      this.xuu(true, function (xv0) {
        if (xv0) {
          var xvo = xv0.xvv(xah.xuc), xvf = xvo.start + xvo.duration * xvt;
          xah.xv7(xvf);
          x5(true);
        } else {
          x5(false);
        }
      });
    } else {
      this.xuc = 0;
      xkn.xv8(this);
      x5(false);
    }
  }
};
x2x.x30.xhx.prototype.xvp = function (xvw) {
  var xvx = 0;
  if (this.xud !== 0) {
    this.xue = this.xud - x2x.x2z.xch.xbg();
  }
  if (this.xsb) {
    if (!xvw) {
      xvx = this.xuc + this.xue;
    }
    if (!xvx) {
      xvx = this.xuf.value;
    }
  }
  if (!this.xuw) {
    return;
  }
  return this.xuw.xvv(xvx);
};
x2x.x30.xhx.prototype.xvy = function (xvz, xvw) {
  var xvx = 0;
  if (this.xud !== 0) {
    this.xue = this.xud - x2x.x2z.xch.xbg();
  }
  if (this.xsb) {
    if (xvw) {
      xvx = this.xuf.value;
    } else {
      xvx = this.xuc + this.xue;
    }
  }
  if (!this.xuw) {
    return [];
  }
  return this.xuw.xvr(xvz, xvx);
};
x2x.x30.xhx.prototype.xw0 = function (xvw) {
  var xvx = 0;
  if (this.xud !== 0) {
    this.xue = this.xud - x2x.x2z.xch.xbg();
  }
  if (this.xsb) {
    if (!xvw) {
      xvx = this.xuc + this.xue;
    }
    if (!xvx) {
      xvx = this.xuf.value;
    }
  }
  var xw1 = x2x.x2z.xch.xbg() + xvx;
  return xw1;
};
x2x.x30.xhx.prototype.xw2 = function (event, xvw) {
  var xvx = 0;
  if (this.xud !== 0) {
    this.xue = this.xud - x2x.x2z.xch.xbg();
  }
  if (this.xsb) {
    if (!xvw) {
      xvx = this.xuc + this.xue;
    }
    if (!xvx) {
      xvx = this.xuf.value;
    }
  }
  var xw1 = x2x.x2z.xch.xbg() + xvx;
  return event.xw3(xw1);
};
x2x.x30.xhx.prototype.xw4 = function () {
  return this.xue;
};
x2x.x30.xhx.prototype.xw5 = function (xw6, xw7) {
  if (this.xsb) {
    xw6 += this.xuf.value;
    xw7 += this.xuf.value;
  }
  return this.xuw.xw8(xw6, xw7);
};
x2x.x30.xhx.prototype.xw9 = function (xw6, xw7) {
  return this.xuw.xw8(xw6, xw7);
};
x2x.x30.xhx.prototype.xwa = function () {
  return this.xuw.xwb();
};
x2x.x30.xhx.prototype.xwc = function (xuk, xwd) {
  var xw6 = x2x.x2z.xch.xbg(), xw7 = xw6 + x2x.x2z.xch.xas * 24;
  if (this.xsb) {
    xw6 += this.xuf.value;
    xw7 += this.xuf.value;
  }
  return this.xuw.xw8(xw6, xw7, xuk, xwd);
};
var xwe = function () {
  var xah = this, x37 = xaa.x2x.x2y.x37, xwf = 3e4;
  this.xwg = 0;
  this.xwh = false;
  this.xwi = [];
  this.load = function () {
    xcz.xwj();
    var xwk = xcz.xd0(xcz.xd1.xwl);
    if (xah.xwi.length < 1) {
      try {
        xah.xwi = x9u.parse(xwk);
      } catch (x12) {
        xah.xwi = [];
      }
    }
    return xah.xwi;
  };
  this.xwm = function (xwn, xwo, xom) {
    x9q(xah.xwg);
    function xwm(xwp) {
      var xwq = x9u.stringify(xwn);
      xcz.xwr(xcz.xd1.xwl, xwq);
      xcz.xd7();
      if (!xwp) {
        x2x.x31.xdd.xde(x37.x9f(x37.x3f.x6k));
      }
      xah.xwh = false;
    }
    if (xah.xwh) {
      xah.xwi = xwn.slice();
      if (xwo) {
        xwm(xom);
      } else {
        xah.xwg = x9p(function () {
          xwm(true);
        }, xwf);
      }
    }
  };
  this.xws = function () {
    xah.xwh = true;
  };
};
x2x.x30.xwt = function (xwu, xwv, xww) {
  this.xwx = xwu || this;
  this.xwy = xwv;
  this.data = xww;
  if (xwu && (xwu.xwy === this.xwz.xx0 || xwu.xwy === this.xwz.xx1 || xwu.xwy === this.xwz.xwl)) {
    if (!this.data.xsb) {
      this.data.xsb = xwu.data.xsb;
      if (this.data.xsb && xwv === this.xwz.xx2) {
        if (this.data.xu9().type !== x2x.x30.xhx.xrx.xsa) {
          this.data.xsb = false;
        }
      }
    }
  }
  if (xwv < this.xwz.xx2) {
    this.xfu = [];
    this.navigator = new x2x.x30.xea(this.xfu);
  }
  this.xx3 = this.xx4.xx5;
};
x2x.x30.xwt.xwz = {xx6: 0, xx0: 1, xx1: 2, xx7: 3, xx8: 4, xx9: 5, xwl: 6, xxa: 7, xxb: 8, xx2: 100, xxc: 110, xxd: 200, xxe: 301, xxf: 302, xg: 99999};
x2x.x30.xwt.prototype.xwz = x2x.x30.xwt.xwz;
x2x.x30.xwt.xx4 = {xx5: 0, xxg: 1, xxh: 2};
x2x.x30.xwt.prototype.xg0 = function () {
  return this.navigator.xg0();
};
x2x.x30.xwt.prototype.xg1 = function (state) {
  this.navigator.xg1(state);
};
x2x.x30.xwt.prototype.xx4 = x2x.x30.xwt.xx4;
x2x.x30.xwt.prototype.xxi = function () {
  this.xw1 = x2x.x2z.xch.xbg();
};
x2x.x30.xwt.prototype.xxj = function () {
  this.xw1 = 0;
};
x2x.x30.xwt.prototype.xxk = function (xxl) {
  if (!this.xw1) {
    this.xxi();
    return false;
  } else {
    return (x2x.x2z.xch.xbg() - this.xw1) / 1e3 <= xxl;
  }
};
x2x.x30.xwt.prototype.xxm = function (xxn) {
  if (!xxn.data.pict || xxn.data.pict === "") {
    var xxo;
    switch (xxn.xwy) {
      case this.xwz.xx2:
        xxo = "stream.png";
        break;
      case this.xwz.xx0:
        xxo = "playlist.png";
        break;
      case this.xwz.xx8:
        xxo = "folderWeb.png";
        break;
      case this.xwz.xx9:
        xxo = "m3u.png";
        break;
      case this.xwz.xxb:
        xxo = "broadcast.png";
        break;
      case this.xwz.xx1:
        xxo = "groups.png";
        break;
      case this.xwz.xx7:
        xxo = "search.png";
        break;
      case this.xwz.xxd:
        xxo = "info.png";
        break;
      case this.xwz.xwl:
        xxo = "favorites.png";
        break;
      default:
        xxo = "unknown.png";
    }
    xxn.data.pict = [x0, "img/items/", xxo].join("");
  }
};
x2x.x30.xwt.prototype.xxp = function (xxn, xxq) {
  var xxr;
  if (typeof xxq === x9n || xxq > this.xfu.length || xxq < 0) {
    this.xfu.push(xxn);
    xxr = this.xfu.length - 1;
  } else {
    this.xfu.splice(xxq, 0, xxn);
    xxr = xxq;
  }
  xxn.xxs = xxr;
  xxn.xxt = xxr;
  xxn.xwx = this;
  if (xxn.xxu()) {
    this.xxv = true;
  }
  this.xxm(xxn);
  return xxn;
};
x2x.x30.xwt.prototype.xxw = function (xxx, xev) {};
x2x.x30.xwt.prototype.xeu = function (xev) {
  return this.navigator.xeu(xev);
};
x2x.x30.xwt.prototype.xxy = function () {
  return this.navigator.xes();
};
x2x.x30.xwt.prototype.xxz = function () {
  return this.navigator.xet();
};
x2x.x30.xwt.prototype.xf0 = function (xev) {
  return this.navigator.xf0(xev);
};
x2x.x30.xwt.prototype.xf1 = function (xev) {
  return this.navigator.xf1(xev);
};
x2x.x30.xwt.prototype.xoy = function () {
  return this.xxt;
};
x2x.x30.xwt.prototype.xy0 = function (xwy, xww) {
  var xy1 = new x2x.x30.xwt(this, xwy, xww);
  return this.xxp(xy1);
};
x2x.x30.xwt.prototype.xy2 = function (xf6) {
  if (this.xfu.length > xf6) {
    this.xfu.splice(xf6, 1);
    this.navigator.xfy();
    return true;
  }
  return false;
};
x2x.x30.xwt.prototype.xdl = function () {
  var xy3 = new x2x.x30.xwt(x9m, this.xwy, {});
  for (var key in this.data) {
    xy3.data[key] = this.data[key];
  }
  return xy3;
};
x2x.x30.xwt.prototype.xy4 = function () {
  if (this.xfu.length > 0) {
    this.xfu.splice(this.navigator.xer(), 1);
    this.navigator.xfy();
  }
};
x2x.x30.xwt.prototype.xy5 = function () {
  this.xfu.splice(0, this.xfu.length);
  this.navigator.xfz();
  this.xx3 = this.xx4.xx5;
};
x2x.x30.xwt.prototype.xy6 = function (xf6) {
  return this.xfu[xf6];
};
x2x.x30.xwt.prototype.xy7 = function () {
  if (this.xfu.length > 0) return this.navigator.xeq();
  return this.xwx;
};
x2x.x30.xwt.prototype.xy8 = function () {
  return this.navigator.xer();
};
x2x.x30.xwt.prototype.xy9 = function (xya) {
  return this.navigator.xf5(xya);
};
x2x.x30.xwt.prototype.xyb = function () {
  return this.xwx;
};
x2x.x30.xwt.prototype.xyc = function (xev) {
  return this.navigator.xf4(xev);
};
x2x.x30.xwt.prototype.xyd = function (xev) {
  return this.navigator.xf7(xev);
};
x2x.x30.xwt.prototype.xye = function (xev, xyf) {
  for (var xd = 0; xd < this.xfu.length; xd++) {
    if (this.xfu[xd].xwy === this.xwz.xx2 && this.xfu[xd].data.id === xyf) {
      this.navigator.xf5(xd);
      return true;
    }
  }
  return false;
};
x2x.x30.xwt.prototype.xyg = function (xev) {
  return this.navigator.xf2(xev);
};
x2x.x30.xwt.prototype.xyh = function () {
  return this.xwy === this.xwz.xx6;
};
x2x.x30.xwt.prototype.xxu = function () {
  return this.xwy === this.xwz.xx2;
};
x2x.x30.xwt.prototype.xyi = function () {
  return this.xxv;
};
x2x.x30.xwt.prototype.xur = function () {
  var xyj = false;
  if (this.xyh()) {
    return xyj;
  }
  var xyk = /18[\s]*\+/g;
  if (!this.xyl) {
    if (this.xxu()) {
      return this.data.xur();
    } else {
      if (this.data.title) {
        var xym = this.data.title.toLowerCase();
        xyj = xym.indexOf("xxx") >= 0 || xym.indexOf("эротика") >= 0 || xym.indexOf("для взрослых") >= 0 || xym.indexOf("порно") >= 0 || xym.indexOf("porn") >= 0 || xyk.test(xym);
        if (xyj) {
          this.xyl = xyj;
        }
      }
    }
  } else {
    xyj = true;
  }
  return xyj;
};
x2x.x30.xwt.prototype.xyn = function (xyo, xev) {
  var xyp = this.navigator.xeq();
  if (!xyp) return;
  var xyq = xyp.xxs, xah = this;
  if (this.xfu.length === 0) return;
  function xrh(xql, xqm) {
    if (xql.data.title > xqm.data.title) return 1;
    if (xql.data.title < xqm.data.title) return -1;
    return 0;
  }
  function xyr(xql, xqm) {
    if (xql.xxs > xqm.xxs) return 1;
    if (xql.xxs < xqm.xxs) return -1;
    return 0;
  }
  if (this.xx3 !== xyo) {
    switch (xyo) {
      case this.xx4.xxh:
        this.xfu.sort(xrh);
        break;
      default:
        this.xfu.sort(xyr);
    }
    this.xx3 = xyo;
    if (xyq !== x9n) {
      for (var xd = this.xfu.length - 1; xd >= 0; xd--) {
        this.xfu[xd].xxt = xd;
      }
      this.navigator.xfh(function (xy1) {
        return xy1.xxs === xyq;
      });
    } else {
      this.navigator.xf5(0);
    }
  }
};
x2x.x30.xwt.prototype.xys = function (xev) {
  var xyo;
  if (this.xx3 === this.xx4.xxg) {
    xyo = this.xx4.xxh;
  } else {
    xyo = this.xx4.xxg;
  }
  this.xyn(xyo, xev);
};
x2x.x30.xwt.prototype.xyt = function () {
  return this.xx3;
};
x2x.x30.xwt.prototype.xyu = function (xev) {
  var xyv = this.navigator.xfj(xev);
  return xyv;
};
x2x.x30.xwt.prototype.xyw = function (xev) {
  var xyv = this.navigator.xft(xev);
  return xyv;
};
x2x.x30.xwt.prototype.xyx = function (xev) {
  var xy1 = this.navigator.xeq();
  if (xy1 && xy1.xfu && (xy1.xfu.length > 0 || xy1.xwy === this.xwz.xwl)) {
    if (xy1.navigator) {
      xy1.navigator.xfx(xev);
    }
    return xy1;
  } else {
    x2x.x31.xdd.xde("Empty");
    return this;
  }
};
x2x.x30.xwt.prototype.xyy = function (xev) {
  var xy1 = this.xwx;
  if (xy1 && xy1.xfu) {
    if (xy1.navigator) {
      xy1.navigator.xfx(xev);
    }
  }
  return xy1;
};
x2x.x30.xwt.prototype.xyz = function (xev) {
  if (this.navigator) {
    this.navigator.xfv(xev);
  }
};
x2x.x30.xwt.prototype.xz0 = function (xev) {
  if (this.navigator) {
    this.navigator.xfw(xev);
  }
};
x2x.x30.xz1 = function (xqh) {
  var xmn = {xz2: new x2x.xg3(this), xz3: new x2x.xg3(this), xz4: new x2x.xg3(this), xz5: new x2x.xg3(this), xz6: new x2x.xg3(this), xz7: new x2x.xg3(this), xz8: new x2x.xg3(this), xz9: new x2x.xg3(this), xza: new x2x.xg3(this), xzb: new x2x.xg3(this), xzc: new x2x.xg3(this), xzd: new x2x.xg3(this), xze: new x2x.xg3(this), xzf: new x2x.xg3(this), xzg: new x2x.xg3(this)}, xb8 = {xb9: 0, xzh: 1, xt4: 2, xzi: 3, xzj: 4, xzk: 5};
  this.xmn = xmn;
  this.xb8 = xb8;
  var _xg = xaa._xg, x37 = x2x.x2y.x37, xwt = x2x.x30.xwt, xhx = x2x.x30.xhx, xch = x2x.x2z.xch, xun = x2x.x30.xun, xlo = x2x.x30.xlo, xde = x2x.x31.xdd.xde, xah = this, xzl = new xqg(xqh), xb4 = xqh, xzm = new xwt(x9m, xwt.xwz.xx6, {id: -1, title: "root"}), xyp = xzm, xzn = xzo(), xzp = xyp, xzq = xzp.xg0(), xzr = xzp.xyb().xg0(), xzs = [], xzt = x9m, xzu, xz2 = false;
  function xzv() {
    xz2 = true;
    xmn.xz2.xge();
  }
  function xzw() {
    xz2 = false;
    xmn.xz3.xge();
  }
  this.xzx = function () {
    return xz2;
  };
  function xzo() {
    return {xy1: xyp, xzy: xyp.xg0(), xzz: xyp.xyb().xg0()};
  }
  function x100(xzn) {
    xyp = xzn.xy1;
    xyp.xg1(xzn.xzy);
    xyp.xyb().xg1(xzn.xzz);
  }
  this.x101 = xzo;
  this.x102 = x100;
  this.x103 = function () {
    xad.xae("[datatree] hold state");
    xzn = xzo();
  };
  this.x104 = function (x105) {
    xad.xae("[datatree] restore state");
    var x106 = xyp !== xzn.xy1;
    x100(xzn);
    if (x106 && x105) {
      xmn.xz4.xge();
    }
  };
  function clear() {
    xzm.xy5();
    xyp = xzm;
    xzl.clear();
    xzs = [];
  }
  function x107() {
    var x108 = xcz.xd0(xcz.xd1.x109), x10a = [];
    try {
      x10a = x9u.parse(x108);
    } catch (x12) {
      xad.xb6("error parsing user playlists");
    }
    for (var xd = 0; xd < x10a.length; xd++) {
      if (x10a[xd].type === "api") {
        xzm.xy0(xwt.xwz.xxa, {id: xd, title: x10a[xd].name, xub: ["<br><div style='word-wrap:break-word;'>", x10a[xd].url, "</div>"].join(""), xd0: x10a[xd].url});
      } else {
        var x10b;
        if (x10a[xd].type === "xml") {
          x10b = xwt.xwz.xx8;
        } else if (x10a[xd].type === "m3u") {
          x10b = xwt.xwz.xx9;
        } else if (x10a[xd].type === "app") {
          x10b = xwt.xwz.xxf;
        }
        xzm.xy0(x10b, {title: x10a[xd].name, href: x10a[xd].url, id: xd, xub: ["<br><div style='word-wrap:break-word;'>", x10a[xd].url, "</div>"].join("")});
      }
    }
  }
  function x10c() {}
  function x10d(x5) {
    if (!xt.xha()) {
      x5();
      return;
    }
    xt.xhb(function (xin) {
      var xvz = xin.length;
      if (xvz > 0) {
        var x10e = xzm.xy0(xwt.xwz.xx0, {title: x37.x9f(x37.x3f.x80), xrc: x37.x3f.x80, x10f: 0, id: "bcast", xsb: false});
        xzs.push(x10e);
        for (var xd = 0; xd < xvz; xd++) {
          var x10g = xin[xd];
          var x10h = x10e.xy0(xwt.xwz.xx2, new xhx({title: x10g.title, href: x10g.url, broadcast: true, pict: x0 + "img/items/bstream.png", adult: false, epg: 0, epg_id: 0, id: xd, xua: "b" + xd}));
        }
      }
      x5();
    });
  }
  xzu = new xwe;
  function x10i() {
    xzt = xzm.xy0(xwt.xwz.xwl, {title: x37.x9f(x37.x3f.x82), xrc: x37.x3f.x82, x10f: 0, id: "fav", xsb: true});
    xzs.push(xzt);
    var xwn = xzu.load(), xd, x10g;
    for (xd = 0; xd < xwn.length; xd++) {
      x10g = xwn[xd];
      if (x10g.type === "str") {
        var x10j = xzt;
        var x10h = x10j.xy0(xwt.xwz.xx2, new xhx({title: x10g.title, href: x10g.url, pict: x10g.logo, adult: x10g.adult, epg: x10g.epg, epg_id: x10g.epg_id, id: xd, xua: "f" + xd}));
        if (x10g.parser) {
          x10h.data.xu3 = x10g.parser;
        }
      }
    }
  }
  this.xd7 = function (xwo, xom) {
    var x10k = [];
    for (var xd = 0; xd < xzt.xfu.length; xd++) {
      var xy1 = xzt.xfu[xd], x10l = {};
      switch (xy1.xwy) {
        case xwt.xwz.xx2:
          x10l.type = "str";
          x10l.title = xy1.data.title;
          x10l.url = xy1.data.href;
          x10l.logo = xy1.data.pict;
          x10l.adult = xy1.data.adult;
          x10l.epg = xy1.data.epg;
          x10l.epg_id = xy1.data.epg_id;
          if (xy1.data.xu3) {
            x10l.parser = xy1.data.xu3;
          }
          x10k.push(x10l);
          break;
        case xwt.xwz.xx1:
          x10l.type = "gr";
          x10l.title = xy1.data.title;
          x10l.id = xy1.data.id;
          x10k.push(x10l);
          for (var xr3 = 0; xr3 < xy1.xfu.length; xr3++) {
            var xxn = xy1.xfu[xr3];
            if (xxn.xwy === xwt.xwz.xx2) {
              x10l = {};
              x10l.type = "str";
              x10l.title = xxn.data.title;
              x10l.url = xxn.data.href;
              x10l.logo = xxn.data.pict;
              x10l.adult = xxn.data.adult;
              x10l.epg = xxn.data.epg;
              x10l.epg_id = xxn.data.epg_id;
              x10l.gid = xy1.data.id;
              x10k.push(x10l);
            }
          }
          break;
      }
    }
    xzu.xws();
    xzu.xwm(x10k, xwo, xom);
  };
  this.x10m = function (x5) {
    xad.xae("[datatree] add to fav");
    var xy1 = xah.x10n();
    if (xy1.xwy !== xwt.xwz.xx2) {
      xde(x37.x9f(x37.x3f.x6f));
      x5();
      return;
    }
    if (xzt.data.x10f > 0) {
      var xpz = [];
      for (var xd = 0; xd < xzt.xfu.length; xd++) {
        if (xzt.xfu[xd].xwy === xwt.xwz.xx1) {
          xpz.push({title: xzt.data.title + "/" + xzt.xfu[xd].data.title, x10o: xzt.xfu[xd].data.title});
        }
      }
      xpz.push({title: xzt.data.title, x10o: ""});
      var x10p = function (x10q) {
        x10r(xpz[x10q].x10o);
        x5();
      };
      x10s.x10t(x37.x9f(x37.x3f.x84), xpz, xpz.length - 1, x10p);
    } else {
      x10r();
      x5();
    }
    function x10r(x10u) {
      var x10v = xy1.xdl(), x10j = xzt, xd;
      if (x10u && x10u !== "") {
        for (xd = 0; xd < xzt.xfu.length; xd++) {
          if (xzt.xfu[xd].xwy === xwt.xwz.xx1) {
            if (xzt.xfu[xd].data.title === x10u) {
              x10j = xzt.xfu[xd];
              break;
            }
          }
        }
      }
      var x10w = false;
      for (xd = 0; xd < x10j.xfu.length; xd++) {
        if (x10j.xfu[xd].xwy === xwt.xwz.xx2) {
          x10w = x10j.xfu[xd].data.href === xy1.data.href;
          if (x10w) break;
        }
      }
      if (!x10w) {
        x10v.data.id = x10j.xfu.length;
        x10v.data.group_id = x10j.data.id;
        x10j.xxp(x10v);
        xah.xd7(false);
        xde(x37.x9f(x37.x3f.x6g));
      } else {
        xde(x37.x9f(x37.x3f.x6j));
      }
    }
  };
  function x10x(xrw) {
    for (var xd = 0; xd < xzt.xfu.length; xd++) {
      if (xrw.href === xzt.xfu[xd].data.href) {
        return xd;
      }
    }
    return -1;
  }
  this.x10y = function (xrw) {
    for (var xd = 0; xd < xzt.xfu.length; xd++) {
      if (xrw.href === xzt.xfu[xd].data.href) {
        return true;
      }
    }
    return false;
  };
  this.x10z = function (xy1) {
    if (xy1.xxu()) {
      if (!xah.x10y(xy1.data)) {
        var x10v = xy1.xdl();
        xzt.xxp(x10v);
      } else {
        var x110 = x10x(xy1.data);
        if (x110 >= 0) {
          if (xzt.xy2(x110)) {
            xad.xae("[datatree] stream removed");
          } else {
            xad.xb6("stream remove error");
          }
        }
      }
    }
  };
  function x111(x5) {
    var x112 = function (xb6, xpy) {
      x10i();
      if (xb6 === xzl.xb8.xb9) {
        for (var xd = 0; xd < xpy.length; xd++) {
          if (xpy[xd].have_archive) {
            delete xpy[xd].have_archive;
            xpy[xd].xsb = true;
          }
          xzm.xy0(xwt.xwz.xx0, xpy[xd]);
        }
      }
      x10d(function () {
        x107();
        x10c();
        x5();
      });
    };
    xzl.xqx(x112);
  }
  function x113(x5) {
    xad.xae("[datatree] init default");
    clear();
    x10i();
    x10d(function () {
      x107();
      x10c();
      x5();
    });
  }
  function x114(x115, x5) {
    if (x115.xfu.length === 0) {
      var x116 = xa4(x115.data.id);
      if (x116.length > 4) {
        x116 = x116.substr(-4);
      }
      var x117 = function (xb6, xq0) {
        if (xb6 === xzl.xb8.xb9) {
          var x118 = xq0.xpz.length, x119;
          if (x118 > 1) {
            var x11a = 1;
            for (var xr3 = 0; xr3 < x118; xr3 += 1) {
              x119 = xq0.xpz[xr3];
              var x11b = x119.xim.length;
              if (x11b > 0) {
                var x11c = x115.xy0(xwt.xwz.xx1, x119.xr4);
                if (x11c.data.xrc) {
                  xzs.push(x11c);
                }
                for (var xr5 = 0; xr5 < x11b; xr5 += 1) {
                  x119.xim[xr5].xua = x116 + "_" + x119.xim[xr5].id;
                  x11c.xy0(xwt.xwz.xx2, new xhx(x119.xim[xr5]));
                }
                x11c.xyn(xwt.xx4.xxg, 0, 0);
                x11a++;
                delete x119.xim;
              }
            }
          } else {
            if (x118 > 0) {
              x119 = xq0.xpz[0];
              if (x119.xim.length > 0) {
                for (var xr5 = 0; xr5 < x119.xim.length; xr5++) {
                  x119.xim[xr5].xua = x116 + "_" + x119.xim[xr5].id;
                  x115.xy0(xwt.xwz.xx2, new xhx(x119.xim[xr5]));
                }
              }
            }
          }
          x115.xyn(xwt.xx4.xxg, 0, 0);
          delete x115.data.xim;
          x5();
        } else {
          x5();
        }
      };
      xzl.xqz(x115.data, x117);
    } else {
      x5();
    }
  }
  function x11f(x11g, x11h, x11i) {
    var value = "";
    var x11j = x11g.getElementsByTagName(x11h);
    if (x11j.length > 0) {
      var x11k = x11j[0].firstChild;
      if (x11k !== x9m) {
        value = x11k.nodeValue;
      }
    }
    x11i[x11h] = value;
  }
  function x11l(x11g, x11h, x11m) {
    var value = x9m;
    var x11j = x11g.getElementsByTagName(x11h);
    if (x11j.length > 0) {
      var x11k = x11j[0];
      if (x11k !== x9m) {
        value = x11k.getAttribute(x11m);
      }
    }
    return value;
  }
  var x11n = ["title", "description", "playlist_url", "stream_url", "logo_30x30", "logo", "search_on", "parser", "category_id"];
  function x11o(x11p) {
    var x11q = {}, x11r = false, x11s;
    try {
      x11q = x9u.parse(x11p);
      x11r = true;
    } catch (x12) {
      xad.xbd("Error on dinamic playlist parsing (json). Try parse xml.");
      x11q.playlist_name = "";
      x11q.next_page_url = "";
      x11q.prev_page_url = "";
      x11q.channels = [];
      x11q.categories = [];
    }
    if (!x11r) {
      try {
        var xu3 = new DOMParser;
        x11p = x11p.replace(/^\s+/g, "");
        x11p = x11p.replace(/[\n]/g, "");
        x11p = x11p.replace(/>\s+<!\[/g, "><![");
        x11p = x11p.replace(/\]\]>\s+</g, "]]><");
        x11s = xu3.parseFromString(x11p, "text/xml");
        x11r = true;
      } catch (x12) {
        xad.xbd("Error on dinamic playlist parsing (DOMParser)");
      }
      if (x11r) {
        try {
          x11f(x11s, "playlist_name", x11q);
          x11f(x11s, "next_page_url", x11q);
          var x11t = x11l(x11s, "next_page_url", "text");
          x11q.next_page_url_title = x11t;
          x11f(x11s, "prev_page_url", x11q);
          var x11u = x11s.getElementsByTagName("items");
          if (x11u.length > 0) {
            var x11v = x11u[0].getElementsByTagName("category"), x11w, xd;
            for (xd = 0; xd < x11v.length; xd++) {
              x11w = {};
              x11f(x11v[xd], "category_id", x11w);
              x11f(x11v[xd], "category_title", x11w);
              x11q.categories.push(x11w);
            }
            var xim = x11u[0].getElementsByTagName("channel");
            for (xd = 0; xd < xim.length; xd++) {
              x11w = {};
              for (var x11x = 0; x11x < x11n.length; x11x++) {
                x11f(xim[xd], x11n[x11x], x11w);
              }
              x11w.title = x11w.title.replace(/\\/g, "");
              if (x11w.playlist_url !== "ScanUSB") {
                x11q.channels.push(x11w);
              }
            }
          }
          x11r = true;
        } catch (x12) {
          xad.xbd("Error on xml dinamic playlist parsing. " + x11p);
        }
      }
    }
    if (!x11r) {
      xde("Error on dinamic playlist parsing");
    }
    return x11q;
  }
  function x11y(x11z, x120, x121) {
    var xz = xb8.xb9;
    if (x121.indexOf("#EXTM3U") === 0) {
      xz = x122(x120, x121);
    } else {
      var x123;
      if (typeof x11z.data.href !== x9n) {
        x123 = x11z.data.href;
      } else x123 = "";
      var x124 = x11o(x121);
      x120.xy5();
      var x125 = function (x126, xy1, x11v) {
        var x127 = [];
        if (x11v) {
          x127 = x11v.split(",");
        }
        var x128 = false;
        if (x127.length > 0) {
          for (var xd = 0; xd < x127.length; xd++) {
            if (x129[x127[xd]]) {
              x129[x127[xd]].xy0(x126, xy1);
              x128 = true;
            }
          }
        }
        if (!x128) {
          x120.xy0(x126, xy1);
        }
      };
      if (x124.list && x124.list.length > 0) {
        xad.xae("new api detected");
        for (var xd = 0; xd < x124.list.length; xd++) {
          var x10g = x124.list[xd];
          switch (x10g.type) {
            case 0:
              var x12a = {title: x10g.title || "---", href: x10g.url, id: xd};
              x125(xwt.xwz.xx2, new xhx(x12a), x9m);
              break;
            case 1:
              var x12a = {title: x10g.title || "---", href: x10g.get, id: xd};
              x125(xwt.xwz.xx8, x12a, x9m);
              break;
          }
        }
      } else {
        if (x124.channels && x124.channels.length > 0) {
          var x129 = [];
          for (var xd = 0; xd < x124.channels.length; xd++) {
            if (x124.channels[xd].playlist_url && x124.channels[xd].playlist_url !== "") {
              if (x124.channels[xd].playlist_url !== x123 || x124.channels[xd].search_on !== "" && x124.channels[xd].search_on !== "") {
                var x126 = xwt.xwz.xx8;
                if (x124.channels[xd].playlist_url.indexOf(".m3u") === x124.channels[xd].playlist_url.length - 4) {
                  x126 = xwt.xwz.xx9;
                }
                if (x124.channels[xd].search_on) {
                  x126 = xwt.xwz.xx7;
                }
                var xy1 = {title: x124.channels[xd].title || "---", href: x124.channels[xd].playlist_url || "", xu3: x124.channels[xd].parser || "", pict: x124.channels[xd].logo || x124.channels[xd].logo_30x30, xub: x124.channels[xd].description || "", id: xd};
                x125(x126, xy1, x124.channels[xd].category_id);
              } else {
                xad.xae("skip dublicate navigation");
              }
            } else if (x124.channels[xd].stream_url && x124.channels[xd].stream_url !== "") {
              var xy1 = {title: x124.channels[xd].title || "---", href: x124.channels[xd].stream_url || "", xu3: x124.channels[xd].parser || "", pict: x124.channels[xd].logo || x124.channels[xd].logo_30x30, xub: x124.channels[xd].description || "", id: xd};
              x125(xwt.xwz.xx2, new xhx(xy1), x124.channels[xd].category_id);
            } else if (x124.channels[xd].description && x124.channels[xd].description !== "") {
              var xy1 = {title: x124.channels[xd].title || "---", pict: x124.channels[xd].logo || x124.channels[xd].logo_30x30, xub: x124.channels[xd].description || "", id: xd};
              x125(xwt.xwz.xxd, xy1, x124.channels[xd].category_id);
            } else {
              xad.xae("[datatree]  ====== not supported node =======-");
              xad.xae("[datatree] title:" + x124.channels[xd].title);
            }
          }
        }
        if (x124.next_page_url && x124.next_page_url !== "") {
          var x12b = {title: x124.next_page_url_title || x37.x9f(x37.x3f.x81), pict: x0 + "img/items/next.png", xub: "", href: x124.next_page_url};
          x120.xy0(xwt.xwz.xx8, x12b);
        } else {
          if (!x124.channels || x124.channels.length === 0) {
            xz = xb8.xzh;
          }
        }
      }
    }
    return xz;
  }
  function x12c(x12d, x12e) {
    for (var xd = 0; xd < x12d.length; xd++) {
      if (x12d[xd] === x12e) {
        return true;
      }
    }
    return false;
  }
  function x12f(x12d, x12e) {
    for (var xd = 0; xd < x12d.length; xd++) {
      if (x12d[xd] === x12e) {
        return xd;
      }
    }
    return -1;
  }
  function x122(x120, x12g) {
    var xz = xb8.xb9, x12h = x12g.split(xa4.fromCharCode(10)), x12i = false;
    xad.xae("[datatree] strings in playlist:" + x12h.length);
    if (x12h.length > 0) {
      x120.xy5();
      var x12j = false, x12k = "", x12l = "", x12m = "", x12n = 0, x12o = "", x12p = 0, x12q = 0, x12r = 0, x12s = 0, x12t = "", x12u = "", x12v = 0, xpz = [], x12w = [];
      for (var xf6 = 0, x12x = x12h.length; xf6 < x12x; xf6++) {
        var x12y = x12h[xf6];
        if (x12y.indexOf("#") === 0) {
          if (x12y.indexOf("#EXTINF:") > -1) {
            var x12z = x12y.indexOf(xa4.fromCharCode(44));
            if (x12z > 0 && x12y.length > x12z + 1) {
              x12k = x12y.substring(x12z + 1, x12y.length);
            } else {
              x12k = "Stream" + x12v;
            }
            x12l = xcn(x12y, "group-title=" + xa4.fromCharCode(34), xa4.fromCharCode(34)) || xcn(x12y, "group-title=", " ");
            x12m = xcn(x12y, "logo=" + xa4.fromCharCode(34), xa4.fromCharCode(34)) || xcn(x12y, "logo=", " ") || xcn(x12y, "tvg-logo=" + xa4.fromCharCode(34), xa4.fromCharCode(34)) || xcn(x12y, "tvg-logo=", " ");
            x12t = xcn(x12y, "audio-track=" + xa4.fromCharCode(34), xa4.fromCharCode(34)) || xcn(x12y, "audio-track=", " ");
            x12r = xcn(x12y, "aspect-ratio=" + xa4.fromCharCode(34), xa4.fromCharCode(34)) || xcn(x12y, "aspect-ratio=", " ");
            if (x12i) {
              x12n = xcn(x12y, "tvg-id=" + xa4.fromCharCode(34), xa4.fromCharCode(34)) || xcn(x12y, "tvg-id=", " ");
              x12o = xcn(x12y, "tvg-name=" + xa4.fromCharCode(34), xa4.fromCharCode(34)) || xcn(x12y, "tvg-name=", " ");
              x12p = xcn(x12y, "tvg-shift=" + xa4.fromCharCode(34), xa4.fromCharCode(34)) || xcn(x12y, "tvg-shift=", " ");
            }
            x12j = true;
          } else if (x12y.indexOf("#EXT-X-STREAM-INF:") > -1) {
            var x130 = x12y.split(",");
            x12k = "Stream" + x12v;
            if (x130.length > 0) {
              x12k += " " + x130[x130.length - 1];
            }
            x12j = true;
          } else if (x12y.indexOf("#EXTGRP:") > -1) {
            var x131 = x12y.indexOf(":");
            x12l = x12y.substring(x131 + 1, x12y.length);
          } else if (x12y.indexOf("#EXTM3U") > -1) {
            var x132 = xcn(x12y, "url-tvg=" + xa4.fromCharCode(34), xa4.fromCharCode(34)) || xcn(x12y, "url-tvg=", " ");
            if (x132.toLowerCase().indexOf("ottplayer") === 0) {
              x12i = true;
              x12q = xa0(xcn(x12y, "tvg-shift=" + xa4.fromCharCode(34), xa4.fromCharCode(34)) || xcn(x12y, "tvg-shift=", " "), 10) || 0;
              x12u = xcn(x12y, "audio-track=" + xa4.fromCharCode(34), xa4.fromCharCode(34)) || xcn(x12y, "audio-track=", " ");
              x12s = xa0(xcn(x12y, "aspect-ratio=" + xa4.fromCharCode(34), xa4.fromCharCode(34)) || xcn(x12y, "aspect-ratio=", " "), 10) || 0;
            }
          }
        } else {
          if (x12j) {
            x12v++;
            var x133 = {title: x12k, href: x12y, xu3: "", pict: x12m, id: x12v};
            if (x12i) {
              x133.epg_id = xa0(x12n || x12o, 10) || 0;
              x133.x134 = xa0(x12p || 0, 10) || x12q;
            }
            if (x12t) {
              x133.x135 = x12t;
            }
            if (x12r) {
              x133.x136 = x12r;
            }
            if (x12l !== "") {
              if (!x12c(x12w, x12l)) {
                var x137 = new xwt(x9m, xwt.xwz.xx1, {title: x12l, id: xpz.length});
                x12w.push(x12l);
                xpz.push(x137);
              }
              var x138 = x12f(x12w, x12l);
              xpz[x138].xy0(xwt.xwz.xx2, new xhx(x133));
            } else {
              x120.xy0(xwt.xwz.xx2, new xhx(x133));
            }
            x12j = false;
          }
        }
      }
      if (xpz.length > 1) {
        for (var xd = 0; xd < xpz.length; xd++) {
          x120.xxp(xpz[xd]);
        }
      } else {
        if (xpz.length > 0) {
          for (var xd = 0; xd < xpz[0].xfu.length; xd++) {
            x120.xxp(xpz[0].xfu[xd]);
          }
        }
      }
    } else {
      xz = xb8.xzh;
    }
    return xz;
  }
  function x139(xn6) {
    if (xn6.indexOf("/smartpal/") > 0) {
      xn6 += "1";
    }
    return xn6;
  }
  function x13a(xn6) {
    if (xn6.toLowerCase().indexOf("?") >= 0) {
      xn6 += "&";
    } else {
      xn6 += "?";
    }
    if (xt.xu === xf.xj) {
      xn6 += "box_mac=sn" + xt.xk6 + "&box_id=" + xt.xk6;
    } else {
      xn6 += "box_mac=" + xt.xk5;
    }
    var x13b = xci.name + xci.version;
    xn6 += "&box_client=" + x13b;
    return xn6;
  }
  function x13c(xn6) {
    if (xn6.toLowerCase().indexOf("?") >= 0) {
      xn6 += "&";
    } else {
      xn6 += "?";
    }
    xn6 += "rts" + xch.xaq.now();
    return xn6;
  }
  function x13d(xn6, x13e) {
    if (xn6.toLowerCase().indexOf("?") >= 0) {
      xn6 += "&";
    } else {
      xn6 += "?";
    }
    xn6 += "id=search";
    xn6 += "&search=" + x13e;
    return xn6;
  }
  this.x13f = function (xy1) {
    return xy1.xur();
  };
  this.x13g = function () {
    return !xyp.xxz();
  };
  this.x13h = function () {
    return !xyp.xxy();
  };
  this.xyu = function (xev) {
    if (!xz2) {
      var xf9 = xyp.xyu(xev);
      if (xf9.xen !== 0) {
        xmn.xz4.xge(xf9);
      }
    } else {
      xzv();
    }
  };
  this.xyw = function (xev) {
    if (!xz2) {
      var xf9 = xyp.xyw(xev);
      if (xf9.xen !== 0) {
        xmn.xz4.xge(xf9);
      }
    } else {
      xzv();
    }
  };
  this.x13i = function (xev) {
    if (!xz2) {
      var xf9 = xyp.xyd(xev);
      xmn.xz4.xge(xf9);
      return xf9;
    } else {
      xzv();
    }
    return 0;
  };
  this.x13j = function (xev) {
    if (!xz2) {
      var xf9 = xyp.xyb().xyu(xev);
      if (xf9.xen !== 0) {
        xyp = xyp.xyb().xy7();
        xmn.xz4.xge(xf9);
      }
    } else {
      xzv();
    }
  };
  this.x13k = function (xev) {
    if (!xz2) {
      var xf9 = xyp.xyb().xyw(xev);
      if (xf9.xen !== 0) {
        xyp = xyp.xyb().xy7();
        xmn.xz4.xge(xf9);
      }
    } else {
      xzv();
    }
  };
  this.x13l = function (xev) {
    if (!xz2) {
      xyp.xyb().xyd(xev);
      var xy1 = xyp.xyb().xyc(xev);
      if (xy1 !== xyp) {
        xyp = xy1;
        xmn.xz4.xge();
      }
    } else {
      xzv();
    }
  };
  this.x13m = function (xev) {
    var xf9 = xyp.xz0(xev);
    xmn.xz4.xge(xf9);
  };
  this.x13n = function (xev) {
    var xf9 = xyp.xyz(xev);
    xmn.xz4.xge(xf9);
  };
  var x13o = 0;
  function x13p(xy1, x5) {
    xad.xae("[datatree] checking node access");
    if (xy1.xur()) {
      var x13q = function (x13r) {
        x5(x13r);
      };
      xmn.xzb.xge({x5: x13q});
    } else {
      x5(true);
    }
  }
  this.xyx = function (xev, x5) {
    if (!xz2) {
      xad.xae("[datatree] node enter");
      if (xyp.xyh() && xyp.xfu.length === 0) {
        x111(function () {
          if (x5) {
            x5(xb8.xb9);
          } else {
            xmn.xz4.xge();
          }
        });
      } else {
        var x120 = xyp.xy7();
        if (typeof x120 !== x9n) {
          switch (x120.xwy) {
            case xwt.xwz.xwl:
              xyp = xyp.xyx(xev);
              if (x5) {
                x5(xb8.xb9);
              } else {
                xmn.xz4.xge();
              }
              break;
            case xwt.xwz.xx0:
              xzv();
              var x13s = function (xb6) {
                xyp = xyp.xyx(xev);
                xzw();
                if (x5) {
                  x5(xb8.xb9);
                } else {
                  xmn.xz4.xge();
                }
              };
              x114(x120, x13s);
              break;
            case xwt.xwz.xx1:
              xyp = xyp.xyx(xev);
              if (x5) {
                x5(xb8.xb9);
              } else {
                xmn.xz4.xge();
              }
              break;
            case xwt.xwz.xx2:
              xmn.xz9.xge(x120.data);
              break;
            case xwt.xwz.xx8:
              xad.xae(x120.data.href);
              var xn6 = x120.data.href;
              if (!x120.xxk(180) || x120.xfu.length === 0) {
                xn6 = x139(xn6);
                xn6 = x13a(xn6);
                xn6 = x13c(xn6);
                var x117 = function (xb6, x11p) {
                  xzw();
                  var x13t = xb8.xb9;
                  if (xb6 === xlo.xb8.xb9) {
                    xad.xae("[datatree] onGetPlaylistData " + x11p.length);
                    x13t = x11y(xyp, x120, x11p);
                    if (x13t === xb8.xb9) {
                      x120.xxi();
                      xyp = xyp.xyx(xev);
                    } else {
                      x120.xxj();
                    }
                  } else {
                    x120.xxj();
                    xad.xb6("Error on get dynamic data");
                    if (xb6 === xlo.xb8.xn0) {
                      xde(x37.x9f(x37.x3f.x5z));
                      x13t = xb8.xzj;
                    } else {
                      xde(x37.x9f(x37.x3f.x5y));
                      x13t = xb8.xzk;
                    }
                  }
                  xzw();
                  if (x5) {
                    x5(x13t);
                  } else {
                    xmn.xz4.xge();
                  }
                };
                var x13u = function (xb6, xn6) {
                  xlo.xd0(xn6, x117);
                };
                xzv();
                x13p(x120, function (x13r) {
                  if (x13r) {
                    xun.xu1(xn6, x120.data.xu3, x13u);
                  } else {
                    xad.xae("playlist access denied");
                    xzw();
                  }
                });
              } else {
                xad.xae("[datatree] from cache. nodes:" + x120.xfu.length);
                xyp = xyp.xyx(xev);
                if (x5) {
                  x5(xb8.xb9);
                } else {
                  xmn.xz4.xge();
                }
              }
              break;
            case xwt.xwz.xx9:
              xzv();
              xad.xae(x120.data.href);
              var xn6 = x120.data.href;
              xn6 = x139(xn6);
              xn6 = x13a(xn6);
              xn6 = x13c(xn6);
              if (!x120.xxk(300) || x120.xfu.length === 0) {
                var x13v = function (xb6, data) {
                  var x13t = xb8.xb9;
                  if (xb6 === xlo.xb8.xb9) {
                    xad.xae("[datatree] onGetPlaylistData " + data.length);
                    x13t = x122(x120, data);
                    if (x13t === xb8.xb9) {
                      x120.xxi();
                      xyp = xyp.xyx(xev);
                    } else {
                      x120.xxj();
                    }
                  } else {
                    x120.xxj();
                    xad.xb6("Error on get dynamic m3u");
                    if (xb6 === xlo.xb8.xn0) {
                      xde(x37.x9f(x37.x3f.x5z));
                      x13t = xb8.xzj;
                    } else {
                      xde(x37.x9f(x37.x3f.x5y));
                      x13t = xb8.xzk;
                    }
                  }
                  xzw();
                  if (x5) {
                    x5(x13t);
                  } else {
                    xmn.xz4.xge();
                  }
                };
                xun.xu1(xn6, x120.data.xu3, function (xb6, xn6) {
                  xlo.xd0(xn6, x13v);
                });
              } else {
                xyp = xyp.xyx(xev);
                xad.xae("[datatree] from cache");
                xzw();
                if (x5) {
                  x5(xb8.xb9);
                } else {
                  xmn.xz4.xge();
                }
              }
              break;
            case xwt.xwz.xx7:
              xmn.xzf.xge({title: x120.data.title, value: "", x13w: false, x5: function (x13x) {
                if (x13x.x13y) {
                  var xn6 = x120.data.href;
                  xn6 = x139(xn6);
                  xn6 = x13d(xn6, x13x.value);
                  xn6 = x13a(xn6);
                  xn6 = x13c(xn6);
                  xad.xae("search " + xn6);
                  var x117 = function (xb6, x11p) {
                    var x13t = xb8.xb9;
                    if (xb6 === xlo.xb8.xb9) {
                      xad.xae("onGetPlaylistData " + x11p.length);
                      x13t = x11y(xyp, x120, x11p);
                      if (x13t === xb8.xb9) {
                        xyp = xyp.xyx(xev);
                      }
                    } else {
                      xad.xb6("Error on get data");
                      if (xb6 === xlo.xb8.xn0) {
                        xde(x37.x9f(x37.x3f.x5z));
                      } else {
                        xde(x37.x9f(x37.x3f.x5y));
                      }
                    }
                    xzw();
                    xmn.xz4.xge();
                  };
                  xzv();
                  xun.xu1(xn6, x120.data.xu3, function (xb6, xn6) {
                    xlo.xd0(xn6, x117);
                  });
                } else {
                  xmn.xz4.xge();
                }
              }});
              break;
            case xwt.xwz.xxd:
              xmn.xza.xge(x120.data);
              break;
            case xwt.xwz.xxf:
              var xn6 = x120.data.href;
              x9o.location.href = xn6;
              break;
            default:
              xad.xae("[datatree] not support node " + x120.xwy);
              if (x5) {
                x5(xb8.xt4);
              } else {
                xmn.xz4.xge();
              }
          }
        } else {
          if (x5) {
            x5(xb8.x13z);
          } else {
            xmn.xz4.xge();
          }
        }
      }
    } else {
      xad.xae("[datatree] busy");
      if (x5) {
        x5(xb8.xzh);
      } else {
        xmn.xz4.xge();
      }
    }
  };
  this.xyy = function (xev) {
    if (!xyp.xyh()) {
      xyp = xyp.xyy(xev);
      xmn.xz4.xge();
      return true;
    } else {
      return false;
    }
  };
  this.x140 = function () {};
  this.x141 = function () {};
  this.x142 = function (xf6) {
    xyp.xy9(xf6);
  };
  function x143(id) {
    var x144 = -1;
    for (var xd = 0; xd < xyp.xfu.length; xd++) {
      if (typeof xyp.xfu[xd].data.id !== x9n && xyp.xfu[xd].data.id === id) {
        x144 = xd;
        break;
      }
    }
    return x144;
  }
  function x145(x146, xev, x5) {
    xad.xae("[datatree] goto");
    xyp = xzm;
    var x147 = 0;
    function x148(xb6) {
      x147++;
      if (x147 < x146.length) {
        var x149 = x143(x146[x147]);
        if (x149 > -1) {
          xyp.xy9(x149);
          xah.xyx(xev, x148);
        } else {
          xad.xae("[datatree] node " + x146[x147] + " not found");
          x5(false);
        }
      } else {
        x5(true);
      }
    }
    xah.xyx(xev, x148);
  }
  this.x14a = function (x14b) {
    xad.xae("[datatree] get node path");
    var xy1 = x14b;
    var x146 = [];
    x146.unshift(xy1.data.id);
    while (xy1.xwy !== xwt.xwz.xx6) {
      xy1 = xy1.xwx;
      x146.unshift(xy1.data.id);
    }
    return x146;
  };
  this.x14c = function () {
    return xyp.xyh();
  };
  this.x14d = function () {
    return xyp;
  };
  this.x10n = function () {
    return xyp.xy7();
  };
  this.xd4 = function () {
    var x14e = xah.x14a(xah.x14d()), x14f = x9u.stringify(x14e);
    if (xcz.xd0(xcz.xd1.xd2)) {
      if (xcz.xd0(xcz.xd1.x14g) !== x14f) {
        xcz.xwr(xcz.xd1.x14g, x14f);
        xad.xae(x14f);
      }
    }
  };
  this.x14h = function () {
    for (var xd = 0; xd < xzs.length; xd++) {
      if (xzs[xd] && xzs[xd].data) {
        xzs[xd].data.title = x37.x9f(xzs[xd].data.xrc);
      }
    }
  };
  function x14i(x5) {
    if (xcz.xd0(xcz.xd1.xpc) === "" || xcz.xd0(xcz.xd1.xpe) === "") {
      x113(function () {
        xmn.xz8.xge();
        xmn.xz4.xge();
      });
    } else {
      var x14j = function (xb6, xpu) {
        xzw();
        if (xb6 === xb4.xb8.xb9) {
          var x14k = false;
          var xm2 = xcz.xpf();
          var x14l = xaa.xdu.dev;
          if (x14l) {
            for (var xd = 0; xd < xpu.length; xd++) {
              if (x14l === xpu[xd].name) {
                xm2.name = x14l;
                xm2.id = xpu[xd].key;
                xcz.x14m(xm2);
                x14k = true;
                break;
              }
            }
          } else {
            for (var xd = 0; xd < xpu.length; xd++) {
              if (xm2.id === xpu[xd].key) {
                x14k = true;
                if (xm2.name !== xpu[xd].name) {
                  xm2.name = xpu[xd].name;
                  xcz.x14m(xm2);
                }
                break;
              }
            }
          }
          if (x14k) {
            x5(xdg.xb9);
          } else {
            var x14n = [];
            x14n[0] = {title: x37.x9f(x37.x3f.x6w), xhn: -1};
            for (var xd = 0; xd < xpu.length; xd++) {
              x14n[xd + 1] = {title: xpu[xd].name, xhn: xpu[xd].key};
            }
            var x14o = function (x14p) {
              if (x14p === 0) {
                var x14q = function (xpw) {
                  var x14r = function (xb6, x14s) {
                    xzw();
                    if (xb6 === xb4.xb8.xb9) {
                      xcz.x14m({name: xpw, id: x14s});
                      xad.xie(x37.x9f(x37.x3f.x5l));
                      xb4.xo9();
                      xmn.xze.xge(true);
                      x5(xdg.xb9);
                    } else {
                      xad.xb6(x37.x9f(x37.x3f.x5n));
                      xmn.xze.xge(false);
                      x5(xdg.xdh);
                    }
                  };
                  xzv();
                  xb4.xpv(xpw, x14r);
                };
                var x14t = function (x13x) {
                  if (x13x.x13y) {
                    xm2.name = x13x.value.replace(/^\s+|\s+$/gm, "");
                    x14q(xm2.name);
                  } else {
                    xmn.xzc.xge({x14u: x14n, x5: x14o});
                  }
                };
                xmn.xzd.xge({x14v: xt.xk8, x5: x14t});
              } else {
                xm2.id = xpu[x14p - 1].key;
                xm2.name = xpu[x14p - 1].name;
                xcz.x14m(xm2);
                xb4.xo9();
                xmn.xz4.xge();
                x5(xdg.xb9);
              }
            };
            xmn.xzc.xge({x14u: x14n, x5: x14o});
          }
        } else {
          x5(xdg.xdh);
        }
      };
      xzv();
      xb4.xof(x14j);
    }
  }
  function x14w(xb6) {
    if (xb6 === xb8.xb9) {
      var x146 = [-1];
      var x14x = xcz.xd0(xcz.xd1.xd2);
      if (x14x) {
        xad.xae("[datatree] Restore last state");
        x146 = xcz.xd0(xcz.xd1.x14g);
        try {
          x146 = x9u.parse(x146);
        } catch (x12) {}
      }
      var xev = {xex: 5, xez: 1};
      x145(x146, xev, function (result) {
        var xyf = xa0(xcz.xd0(xcz.xd1.x14y), 10);
        var x14z = false;
        if (result && x14x && xyf !== -1) {
          if (xyp.xye(xev, xyf)) {
            x14z = true;
            xah.x103();
          }
        }
        xmn.xz4.xge({x150: true});
        if (x14z) {
          xmn.xz9.xge(xyp.xy7().data);
        }
      });
    } else {
      x113(function () {
        xmn.xz4.xge();
      });
    }
  }
  this.xmr = function () {
    if (xz2) {
      xzv();
      return;
    }
    var x151 = xt.xhh();
    if (!x151.xhf) {
      xad.xb6(x37.x9f(x37.x3f.x5r));
      x113(function () {
        xmn.xz6.xge();
      });
    } else if (!x151.xhg) {
      xad.xb6(x37.x9f(x37.x3f.x5s));
      x113(function () {
        xmn.xz7.xge();
      });
    } else {
      xzv();
      xb4.xo9(function () {
        xzw();
        clear();
        xad.xae("[datatree] check registration");
        x14i(x14w);
      });
    }
  };
  this.x152 = function (x153) {
    if (xz2) {
      xzv();
      return;
    }
    var x154 = {url: x153, data: "", name: "", type: xwt.xwz.xg};
    var x155 = [{x156: "#API", type: xwt.xwz.xxa, x157: "api"}, {x156: "#.XML", type: xwt.xwz.xx8, x157: "xml"}, {x156: "#.M3U", type: xwt.xwz.xx9, x157: "m3u"}, {x156: "#APPLINK", type: xwt.xwz.xxf, x157: "app"}];
    function x158(xq0) {
      xq0.type = xwt.xwz.xx0;
      for (var xd = 0; xd < x155.length; xd++) {
        if (x159(xq0.url, x155[xd].x156)) {
          xq0.url = xq0.url.substring(0, xq0.url.length - x155[xd].x156.length);
          xq0.type = x155[xd].type;
          xq0.x157 = x155[xd].x157;
          break;
        }
      }
      xq0.name = x15a(xq0.url);
      return xq0;
    }
    function x15b(result) {
      if (!result.x13y) {
        xmn.xz4.xge();
      } else {
        xad.xae("[datatree] playlist name:" + result.value);
        x154.name = result.value;
        if (x154.type === x2x.x30.xwt.xwz.xx0) {
          xzv();
          xb4.xq1(x154.name, x154.data, x15c);
        } else {
          var x108 = xcz.xd0(xcz.xd1.x109);
          var x10a = [];
          try {
            x10a = x9u.parse(x108);
          } catch (x12) {}
          var x15d = {name: x154.name, url: x154.url, type: x154.x157};
          x10a.push(x15d);
          xcz.xwr(xcz.xd1.x109, x9u.stringify(x10a));
          xcz.x15e();
          xde(x37.x9f(x37.x3f.x60));
          xah.xd4();
          xah.xmr();
        }
      }
    }
    function x15c(xb6) {
      xzw();
      switch (xb6) {
        case xb4.xb8.xb9:
          xde(x37.x9f(x37.x3f.x60), 2500);
          xah.xd4();
          xah.xmr();
          return;
          break;
        case xb4.xb8.xn1:
          xde(x37.x9f(x37.x3f.x5m), 4e3);
          break;
        default:
          xde(x37.x9f(x37.x3f.x61));
      }
      xmn.xz4.xge();
    }
    function x15a(x153) {
      var x15f = "", x15g = x153.indexOf("://") + 3, x15h = x153.indexOf("/", x15g);
      if (x15h < 0) x15h = x153.length;
      if (x15g > 0 && x15g < x153.length - 1 && x15g < x15h) {
        x15f = x153.substring(x15g, x15h);
        x15f = x15f.replace(/\./g, "_");
      } else x15f = "new_playlist";
      x15f += xch.xc0(xch.xbg(true));
      return x15f;
    }
    function x15i(xb6, data) {
      xzw();
      if (xb6 === x2x.x30.xlo.xb8.xb9) {
        x154.data = data;
        xmn.xzf.xge({title: x37.x9f(x37.x3f.x6z), value: x154.name, x5: x15b});
      } else {
        xad.xb6("Error on get data");
        if (xb6 === x2x.x30.xlo.xb8.xn0) {
          xde(x37.x9f(x37.x3f.x5z), 4e3);
        } else {
          xde(x37.x9f(x37.x3f.x5y), 4e3);
        }
        xmn.xz4.xge();
      }
    }
    function x159(url, x156) {
      var xkb = url.indexOf(x156);
      return xkb >= 0 && xkb === url.length - x156.length;
    }
    x154 = x158(x154);
    if (x154.type === xwt.xwz.xx0) {
      xzv();
      x2x.x30.xlo.xd0(x154.url, x15i);
    } else {
      xmn.xzf.xge({title: x37.x9f(x37.x3f.x6z), value: x154.name, x5: x15b});
    }
  };
  this.xq5 = function (xy1) {
    if (xy1.xwx.data.id === -1) {
      if (xy1.xwy === xwt.xwz.xxa || xy1.xwy === xwt.xwz.xx8 || xy1.xwy === xwt.xwz.xx9 || xy1.xwy === xwt.xwz.xxf) {
        xmn.xzg.xge({x15j: x37.x3f.x7m, title: xy1.data.title, x5: function (x13y) {
          if (x13y) {
            var x108 = xcz.xd0(xcz.xd1.x109), x10a = [];
            try {
              x10a = x9u.parse(x108);
            } catch (x12) {}
            x10a.splice(xy1.data.id, 1);
            xcz.xwr(xcz.xd1.x109, x9u.stringify(x10a));
            xcz.x15e();
            xde(x37.x9f(x37.x3f.x62));
            xah.xd4();
            xah.xmr();
          } else {
            xmn.xz4.xge();
          }
        }});
      } else if (xy1.xwy === xwt.xwz.xx0) {
        xmn.xzg.xge({x15j: x37.x3f.x7m, title: xy1.data.title, x5: function (x13y) {
          if (x13y) {
            xzv();
            xb4.xq5(xy1.data.id, function (xb6) {
              xzw();
              if (xb6 === xb4.xb8.xb9) {
                xde(x37.x9f(x37.x3f.x62));
              } else {
                xde(x37.x9f(x37.x3f.x65));
              }
              xah.xd4();
              xah.xmr();
            });
          } else {
            xmn.xz4.xge();
          }
        }});
      } else {
        xde(x37.x9f(x37.x3f.x63));
        xmn.xz4.xge();
      }
    } else {
      xmn.xz4.xge();
    }
  };
  this.x15k = function (xev) {
    if (!xz2) {
      xyp.xys(xev);
      xmn.xz4.xge();
    }
  };
  this.x15l = function () {
    console.log(xzm);
  };
};
x2x.x30.x15m = function (type, data) {
  if (type === "api") {
    this.start = new x2x.x2z.xch.xaq(data.start.replace(this.x15n, this.x15o)).getTime();
    this.end = new x2x.x2z.xch.xaq(data.stop.replace(this.x15n, this.x15o)).getTime();
    this.duration = this.end - this.start;
    this.name = data.title;
    this.x8k = data.desc;
  } else {
    this.start = data.start;
    this.end = data.end;
    this.duration = data.duration;
    this.x15p = true;
  }
};
x2x.x30.x15m.prototype.x15n = /(\d+)-(\d+)-(\d+)\s(\d+):(\d+):(\d+)/;
x2x.x30.x15m.prototype.x15o = "$2/$3/$1 $4:$5:$6 GMT+0000";
x2x.x30.x15m.prototype.xw3 = function (x15q) {
  this.x15r = x15q - this.start;
  this.xcg = this.duration - this.x15r;
  this.xkb = this.duration > 0 ? this.x15r / this.duration : 0;
  return this;
};
x2x.x30.x15m.prototype.x15s = function (x15t) {
  var currentTime = x2x.x2z.xch.xbg() + (x15t || 0);
  return this.start <= currentTime && this.end > currentTime;
};
x2x.x30.x15m.prototype.x15u = function () {
  return this.x15p;
};
x2x.x30.x15v = function (xmn, x15w) {
  this.x15x(xmn, x15w);
};
x2x.x30.x15v.prototype.x15x = function (xmn, x15w) {
  this.x15y = xmn;
  this.x15z = x15w;
  this.x160 = false;
  this.x161 = x2x.x2z.xch.xaq.now();
  this.x15y.sort(this.x162);
  this.x163();
};
x2x.x30.x15v.x164 = 30 * x2x.x2z.xch.xar;
x2x.x30.x15v.prototype.x164 = x2x.x30.x15v.x164;
x2x.x30.x15v.x165 = x2x.x30.x15v.x164 * 2;
x2x.x30.x15v.prototype.x165 = x2x.x30.x15v.x165;
x2x.x30.x15v.x166 = 5;
x2x.x30.x15v.x167 = 5;
x2x.x30.x15v.prototype.x166 = x2x.x30.x15v.x166;
x2x.x30.x15v.prototype.x167 = x2x.x30.x15v.x167;
x2x.x30.x15v.x168 = 3 * x2x.x2z.xch.xas;
x2x.x30.x15v.prototype.x168 = x2x.x30.x15v.x168;
x2x.x30.x15v.prototype.x162 = function (xql, xqm) {
  if (xql.start > xqm.start) return 1;
  if (xql.start < xqm.start) return -1;
  if (xql.end > xqm.end) return 1;
  if (xql.end < xqm.end) return -1;
  return 0;
};
x2x.x30.x15v.prototype.x163 = function () {
  var x12x = this.x15y.length;
  for (var xd = 1; xd < x12x;) {
    if (this.x15y[xd].start === this.x15y[xd - 1].start && this.x15y[xd - 1].end !== this.x15y[xd].start) {
      if (this.x15y[xd + 1] && this.x15y[xd].end === this.x15y[xd + 1].start) {
        if (xd > 1) {
          this.x15y.splice(xd - 1, 1);
          x12x--;
          xd--;
        }
      } else {
        if (xd > 1) {
          this.x15y.splice(xd, 1);
          x12x--;
          xd--;
        }
      }
    }
    xd++;
  }
};
x2x.x30.x15v.prototype.xux = function () {
  return x2x.x2z.xch.xaq.now() - this.x161 < this.x168;
};
x2x.x30.x15v.prototype.x169 = function () {
  this.x15y = [];
  this.x161 = 0;
};
x2x.x30.x15v.prototype.x16a = function () {
  if (!this.x160) {
    var xv4 = x2x.x2z.xch.xbg(true), x16b = xv4 - x2x.x2z.xch.xas * 17, x16c = xv4 + x2x.x2z.xch.xas * 24;
    var x16d = [], x12x = this.x15y.length;
    for (var xd = 0; xd < x12x; xd++) {
      if (this.x15y[xd].start > x16b && this.x15y[xd].end <= x16c) {
        x16d.push(this.x15y[xd]);
      }
    }
    this.x15y = x16d;
    this.x15z = true;
    this.x160 = true;
    xad.xae("minimized");
  } else {
    xad.xae("already minimized");
  }
};
x2x.x30.x15v.prototype.xuv = function () {
  return this.x15z;
};
x2x.x30.x15v.prototype.x16e = function () {
  return this.x15y.length;
};
x2x.x30.x15v.prototype.xw8 = function (x16f, x16g, x16h, xwd) {
  var x16i = [], x16j = x16f, x16k = false, x16l = false, x16m = -1;
  x16g = x9v.ceil(x16g / this.x165) * this.x165;
  function x16n(x16o) {
    x16i.push(x16o);
    x16j = x16o.end;
  }
  var x16p = this.x15y.length;
  for (var xd = 0; xd < x16p; xd += 1) {
    var x16q = this.x15y[xd];
    if (x16q.start < x16g) {
      if (x16q.end > x16f) {
        for (var x16r = x16q.start - x16j; x16r > 0; x16r = x16q.start - x16j) {
          var x16s = x16j;
          if (x16i.length === 0) {
            x16s = (x16s / this.x165 >> 0) * this.x165;
          }
          var x16t = x16r < this.x165 ? x16r : this.x165;
          x16n(new x2x.x30.x15m("dummy", {start: x16s, end: x16s + x16t, duration: x16t}));
        }
        x16n(x16q);
        if (x16m === -1) {
          x16m = xd;
        }
        if (x16h && x16i.length >= x16h) break;
      }
    } else {
      if (xd === 0) {
        x16k = true;
      }
      break;
    }
  }
  if (x16i.length === 0 && x16p > 0) {
    x16l = true;
  }
  if (!x16h || x16i.length < x16h) {
    if (x16i.length === 0) {
      x16j = (x16j / this.x165 >> 0) * this.x165;
    }
    var xv4 = x2x.x2z.xch.xbg();
    for (var xd = 0; x16j < x16g; xd++) {
      var x16s = x16j, x16t = x16g - x16s;
      if (x16s > xv4) break;
      if (x16t > this.x165) {
        x16t = this.x165;
      }
      var x16u = x16s + x16t;
      if (xd === 0) {
        var x16v = (x16u / this.x165 >> 0) * this.x165;
        if (x16v < x16u) {
          x16t = x16v - x16s;
          x16u = x16s + x16t;
        }
      }
      x16n(new x2x.x30.x15m("dummy", {start: x16s, end: x16u, duration: x16t}));
      if (x16h && x16i.length >= x16h) break;
    }
  }
  if (xwd) {
    for (; xwd > 0; xwd--) {
      if (--x16m >= 0) {
        x16i.unshift(this.x15y[x16m]);
      } else {
        var x16w = ((x16i[0].start - this.x165) / this.x165 >> 0) * this.x165;
        x16i.unshift(new x2x.x30.x15m("dummy", {start: x16w, end: x16i[0].start, duration: x16i[0].start - x16w}));
      }
    }
  }
  if (x16i.length === 1 && x16i[0].duration === 0) {
    x16i[0].duration = this.x165;
    x16i[0].end = x16i[0].start + this.x165;
  }
  return x16i;
};
x2x.x30.x15v.prototype.xvv = function (x15t) {
  var x15q = x2x.x2z.xch.xbg();
  x15q += x15t || 0;
  return this.xw8(x15q, x15q, 1, 0)[0];
};
x2x.x30.x15v.prototype.xvr = function (xvz, x15t) {
  var x15q = x2x.x2z.xch.xbg();
  x15q += x15t || 0;
  return this.xw8(x15q, x15q + x2x.x2z.xch.xas * 24, xvz, 0);
};
x2x.x30.x15v.prototype.xwb = function () {
  return this.x15y;
};
x2x.x30.x15v.prototype.xw2 = function (x16x, x15t) {
  var x15q = x2x.x2z.xch.xbg();
  x15q += x15t || 0;
  x16x.xw3(x15q);
  return x16x;
};
var x16y = function () {
  var x16z = [], x170 = {}, x171 = 32, x172 = 4;
  this.x173 = function (xrw, x174, x5) {
    var x175 = false;
    if (!x170[xrw.title]) {
      x170[xrw.title] = [];
      x16z.push({xrw: xrw, x174: x174});
      x175 = true;
      if (x16z.length > x171) {
        var x3 = x16z.shift();
        delete x170[x3.xrw.title];
      }
    }
    if (x170[xrw.title].length >= x172) {
      var x176 = x170[xrw.title].shift();
    }
    x170[xrw.title].push(x5);
    return x175;
  };
  this.x177 = function () {
    var x3 = x16z.pop(), x178 = {xrw: x3.xrw, x174: x3.x174, x170: x170[x3.xrw.title]};
    delete x170[x3.xrw.title];
    return x178;
  };
  this.x179 = function () {
    var x3 = x16z[x16z.length - 1];
    return {xrw: x3.xrw, x174: x3.x174, x170: x170[x3.xrw.title]};
  };
  this.xep = function () {
    return x16z.length === 0;
  };
  this.x15l = function () {
    console.log(x16z);
    console.log(x170);
  };
};
x2x.x30.x17a = function (xqh) {
  var _xg = xaa._xg, x15v = x2x.x30.x15v, x15m = x2x.x30.x15m, xch = x2x.x2z.xch, xad = xaa.xad, xah = this, x17b = -1, x17c = -2, x17d = -3, x17e = 0.6667, x17f = {}, x17g = new x16y, x17h = 0, x17i = 2, x17j = 1, x17k = 4, x17l = 3, x17m = true, x17n = [], x17o = 0, x17p = 0, x17q = 350, x17r = [], x17s = 0, x17t = 0, x17u = 150, xb4 = xqh;
  x17f[x17b] = new x15v([], false);
  x17f[x17c] = new x15v([], false);
  x17f[x17d] = new x15v([], false);
  switch (xt.xu) {
    case xf.xn:
      x17q = 80;
      x17u = 10;
      x17k = 1;
      x17l = 1;
      break;
    case xf.xi:
      x17k = 2;
      x17l = 2;
      if (xt.xv <= 2011) {
        x17q = 40;
        x17u = 8;
        x17k = 1;
        x17l = 1;
      } else if (xt.xv <= 2012) {
        x17q = 80;
        x17u = 10;
      } else if (xt.xv <= 2013) {
        x17q = 120;
        x17u = 20;
      }
      break;
    case xf.xh:
      if (xt.xv <= 2011) {
        x17k = 2;
        x17l = 2;
        x17q = 120;
        x17u = 20;
      }
      break;
    case xf.xl:
    case xf.xo:
      x17k = 1;
      x17l = 2;
      break;
    case xf.xk:
      if (xt.xv <= 2011) {
        x17k = 1;
        x17l = 2;
        x17q = 80;
        x17u = 10;
      } else if (xt.xv <= 2012) {
        x17k = 2;
        x17l = 2;
        x17q = 100;
        x17u = 10;
      }
      break;
  }
  this.xb8 = {xb9: 0, xmv: 1, xmx: 2, x17v: 3};
  this.x164 = x15v.x165;
  function x17w(x17x, xmc, x15w) {
    var x17y = true;
    if (!x17f[x17x]) {
      x17f[x17x] = new x15v(xmc, x15w);
    } else {
      x17y = x17f[x17x].x16e() === 0;
      x17f[x17x].x15x(xmc, x15w);
    }
    if (x17m && x17y) {
      if (!x15w) {
        x17r[x17t] = x17x;
        x17t++;
        if (x17t >= x17u) {
          x17t = 0;
        }
        if (x17s < x17u) {
          x17s++;
        } else {
          x17f[x17r[x17t]].x16a();
        }
      }
      x17n[x17p] = x17x;
      x17p++;
      if (x17p >= x17q) {
        x17p = 0;
      }
      if (x17o < x17q) {
        x17o++;
      } else {
        x17f[x17n[x17p]].x169();
      }
    }
  }
  function x17z(data, x15w) {
    var xmc = [], x180 = data.length, xv4 = xch.xbg(true), x16b = xv4 - ((x15w ? x17j : x15v.x166) * xch.xas * 24 + xch.xas), x16c = xv4 + ((x15w ? x17i : x15v.x167) * xch.xas * 24 + xch.xas);
    for (var xd = x180; xd--;) {
      var event = new x15m("api", data[xd]);
      if (event.start > x16b && event.end <= x16c) {
        xmc.push(event);
      }
    }
    return xmc;
  }
  function x181(data) {
    var xmc = [], x180 = data.length, x16b = xch.xbg(true) - (x15v.x166 * xch.xas * 24 + xch.xas);
    for (var xd = x180; xd--;) {
      if (!xmc[data[xd].id]) {
        xmc[data[xd].id] = [];
      }
      var event = new x15m("api", data[xd]);
      if (event.start > x16b) {
        xmc[data[xd].id].push(event);
      }
    }
    return xmc;
  }
  function x182(xb6, x178) {
    var x12x = x178.x170.length;
    for (; x12x--;) {
      var x176 = x178.x170[x12x];
      x176(xb6, x178.xrw);
    }
    x183();
  }
  var xrn = /<(?:.|\n)*?>/gm, xro = /(\([^\(\)]*\))/gm, x184 = /(\[[^\[\]]*\])/gm;
  function x185(x3f) {
    x3f = x3f.replace(xrn, "");
    x3f = x3f.replace(xro, "");
    x3f = x3f.replace(x184, "");
    x3f = x3f.replace(/^\s+|\s+$/gm, "");
    return x3f;
  }
  function x186(x17g) {
    if (x17g.length === 1) {
      var x187 = function (xb6, data) {
        if (xb6 === xb4.xb8.xb9) {
          var xmc = x17z(data, x17g[0].x174.x15w);
          x17g[0].xrw.x17x = x17g[0].xrw.epg_id;
          x17w(x17g[0].xrw.x17x, xmc, x17g[0].x174.x15w);
          x17h--;
          x182(xah.xb8.xb9, x17g[0]);
        } else {
          xad.xae("error on get epg for " + x17g[0].xrw.epg_id);
          x17h--;
          x182(xah.xb8.xmv, x17g[0]);
        }
      };
      xb4.xqc(x17g[0].xrw.epg_id, x17g[0].x174.x15w ? x17j : x15v.x166, x17g[0].x174.x15w ? x17i : x15v.x167, x187);
    } else {
      xad.xae("get multi epg:" + x17g.length);
      var x188 = [];
      for (var xd = 0; xd < x17g.length; xd++) {
        x188.push(x17g[xd].xrw.epg_id);
      }
      var x189 = function (xb6, data) {
        x17h--;
        if (xb6 === xb4.xb8.xb9) {
          var x18a = [], x12x = data.length;
          for (var xd = 0; xd < x12x; xd++) {
            var x18b = data[xd].id;
            if (!x18a[x18b]) {
              x18a[x18b] = [];
            }
            x18a[x18b].push(data[xd]);
          }
          for (var xd = 0; xd < x17g.length; xd++) {
            var xmc;
            if (x18a[x17g[xd].xrw.epg_id]) {
              xmc = x17z(x18a[x17g[xd].xrw.epg_id], x17g[0].x174.x15w);
            } else {
              xmc = [];
            }
            x17g[xd].xrw.x17x = x17g[xd].xrw.epg_id;
            x17w(x17g[xd].xrw.x17x, xmc, x17g[xd].x174.x15w);
            x182(xah.xb8.xb9, x17g[xd]);
          }
        } else {
          for (var xd = 0; xd < x17g.length; xd++) {
            xad.xae("error on get epg for " + x17g[xd].xrw.epg_id);
            x182(xah.xb8.xmv, x17g[xd]);
          }
        }
      };
      xb4.xop(x188, x17g[0].x174.x15w ? x17j : x15v.x166, x17g[0].x174.x15w ? x17i : x15v.x167, x189);
    }
  }
  function x18c(x178, x18d) {
    xad.xae("get epg data for '" + x178.xrw.title + "'");
    if (x17f[x18d.id]) {
      x178.xrw.x17x = x18d.id;
      x17h--;
      x182(xah.xb8.xb9, x178);
    } else {
      x178.xrw.epg_id = x18d.id;
      x186([x178]);
    }
  }
  function x18e(x178, x18f, data) {
    if (data.length > 0) {
      if (data[0].weight >= x17e || data[0].name.toLowerCase() === x18f) {
        x18c(x178, data[0]);
      } else {
        x178.xrw.x17x = x17b;
        x17h--;
        x182(xah.xb8.xmx, x178);
      }
    } else {
      x178.xrw.x17x = x17b;
      x17h--;
      x182(xah.xb8.xmx, x178);
    }
  }
  function x18g(x178) {
    var x18f = x185(x178.xrw.title);
    if (x17f[x18f]) {
      x178.xrw.x17x = x18f;
      x17h--;
      x182(xah.xb8.xb9, x178);
      return;
    }
    xb4.xqa(x18f, function (xb6, data) {
      if (xb6 === xb4.xb8.xb9) {
        x18e(x178, x18f, data);
      } else {
        x17h--;
        x182(xah.xb8.xmv, x178);
      }
    });
  }
  function x183() {
    var x18h = x9p(function x18i() {
      if (!x17g.xep() && x17h < x17k) {
        x17h++;
        var x18j = [];
        x18j.push(x17g.x177());
        if (x18j[0].xrw.epg_id) {
          while (!x17g.xep() && x17g.x179().xrw.epg_id && x17g.x179().x174.x15w === x18j[0].x174.x15w && x18j.length < x17l) {
            x18j.push(x17g.x177());
          }
        }
        if (x18j.length > 0 && x18j[0].xrw.epg_id) {
          x186(x18j);
        } else {
          if (x18j[0].xrw.epg_id === 0) {
            x18j[0].xrw.x17x = x17c;
            x17h--;
            x182(xah.xb8.x17v, x18j[0]);
          } else {
            x18g(x18j[0]);
          }
        }
      }
      x9q(x18h);
    }, 0);
  }
  function x18k(xrw, x15w, x5) {
    var x18l;
    if (xrw.x17x) {
      if (xrw.x17x === x17b) {
        x5(xah.xb8.xmx, xrw);
        return;
      }
      if (xrw.x17x === x17c) {
        x5(xah.xb8.x17v, xrw);
        return;
      }
      x18l = xrw.x17x;
    } else {
      x18l = xrw.epg_id;
    }
    if (typeof x18l !== x9n && x17f[x18l]) {
      if (!x17f[x18l].xux() || !x15w && x17f[x18l].xuv()) {
        xad.xae("updating epg cache record");
      } else {
        if (!xrw.x17x) xrw.x17x = x18l;
        x5(xah.xb8.xb9, xrw);
        return;
      }
    }
    if (typeof xrw.epg_id === x9n) {
      var xts = xrw.xu9();
      if (xts.type !== x2x.x30.xhx.xrx.xsa) {
        xad.xae("--- skip finding epg '" + xrw.title + "' (NOT LIVE)");
        xrw.x17x = x17c;
        x5(xah.xb8.x17v, xrw);
        return;
      }
    }
    var x175 = x17g.x173(xrw, {x15w: x15w}, x5);
    if (x175) {
      x183();
    }
  }
  this.xuz = function (xrw, x15w, x5) {
    x18k(xrw, x15w, function (xb6, xrw) {
      if (!xb6) {
        xrw.xuz(x17f[xrw.x17x]);
        x5(x17f[xrw.x17x]);
      } else {
        x5(x17f[x17d]);
      }
    });
  };
  this.x18m = function (xrw, x5) {
    x18k(xrw, false, function (xb6) {
      x5(xb6, x17f[xrw.x17x]);
    });
  };
  this.x18n = function (xrw, x5) {
    x18k(xrw, true, function (xb6) {
      x5(xb6, x17f[xrw.x17x]);
    });
  };
  this.x18o = function () {
    console.log(x17f);
    x17g.x15l();
    console.log(x17n);
    var x18p = 0;
    try {
      for (var xd = 0; xd < x17n.length; xd++) {
        for (var x12 = 0; x12 < x17f[x17n[xd]].xmn.length; x12++) {
          x18p += x17f[x17n[xd]].xmn[x12].name.length;
          x18p += x17f[x17n[xd]].xmn[x12].x8k.length;
        }
      }
    } catch (xb6) {}
    console.log(x17h + " " + x17p + "/" + x17o + "/" + x18p);
  };
};
x2x.x31.x18q = {x18r: 0, x18s: 1, x18t: 2, x18u: 3, x18v: 4};
x2x.x31.x18w = {x18x: -1, x18y: 0, x18z: 1};
x2x.x31.x190 = function (x191, x192, x193) {
  var x3 = x9o.getElementById(x191);
  if (x3) {
    x3.style.width = x192;
    x3.style.height = x193;
  }
};
x2x.x31.x194 = function (x191, x195, x196) {
  var x3 = x9o.getElementById(x191) || x9o.getElementsByClassName(x191)[0];
  if (x3) {
    x3.style.left = x195;
    x3.style.top = x196;
  }
};
x2x.x31.x197 = {x198: 960, x199: 540, x19a: 1, x19b: 1, x19c: 0, x19d: 0, x19e: 0, x19f: 0, x19g: false, x19h: false};
x2x.x31.x19i = function (x19j) {
  var x19k = x2x.x31.x197;
  if (!x19k.x19g) {
    x19k.x198 = xaa.innerWidth;
    x19k.x199 = xaa.innerHeight;
    var x19l = x19j, x19m = x19k.x198, x19n = x19k.x199;
    if (x19l) {
      x19m = x19l.clientWidth;
      x19n = x19l.clientHeight;
    }
    if (x19k.x198 !== x19m) {
      x19k.x19h = true;
    }
    if (xt.xu === xf.xg || xt.xu === xf.xh || xt.xu === xf.xi || xt.xu === xf.xj || xt.xu === xf.xl) {
      x19k.x19h = false;
    }
    if (x19k.x19h) {
      x19k.x19a = x19k.x198 / x19m;
      x19k.x19b = x19k.x199 / x19n;
      x19k.x19c = x19k.x198 - x19m;
      x19k.x19d = x19k.x199 - x19n;
      x19k.x19e = xa0(x19k.x19c / 2, 10);
      x19k.x19f = xa0(x19k.x19d / 2, 10);
    }
    x19k.x19g = true;
  }
};
function x19o(x19p, x18b) {
  var x3 = x9o.createElement(x19p);
  if (typeof x18b !== x9n && x18b !== "") {
    x3.id = x18b;
  }
  return x3;
}
function x19q(x19p, x19r) {
  var x3 = x9o.createElement(x19p);
  if (typeof x19r !== x9n && x19r !== "") {
    x3.className = x19r;
  }
  return x3;
}
function x1a4(x3, x1a5, x1a6) {
  x3.style.backgroundImage = "url('" + x1a5 + "')";
}
function x1a7(x3, x1a8) {
  x3.innerHTML = x1a8;
}
function x1a9(x1aa, x1ab) {
  var x3f = x1aa[x1ab], xhn = xa1(x3f.substr(0, x3f.length - 2)), x1ac = x3f.substr(-2);
  return {xhn: xhn, x1ad: x1ac};
}
function x1ae(x1af, x1ag, x1ah, x1ai) {
  var x1aj = x1ag.x1ak / x1ag.x1al, x1am = x1ai / x1ah;
  if (x1am < x1aj) {
    var x1an = x1ag.x1ak * x1am / x1aj, x1ao = x1ag.x1ap + (x1ag.x1ak - x1an) / 2;
    x1af.style.height = x1an + "em";
    x1af.style.width = x1ag.x1al + "em";
    x1af.style.top = x1ao + "em";
    x1af.style.left = x1ag.x1aq + "em";
  } else {
    var x1ar = x1ag.x1al * x1aj / x1am, x1as = x1ag.x1aq + (x1ag.x1al - x1ar) / 2;
    x1af.style.height = x1ag.x1ak + "em";
    x1af.style.width = x1ar + "em";
    x1af.style.top = x1ag.x1ap + "em";
    x1af.style.left = x1as + "em";
  }
}
var x1at = [];
function x1au(x1af, x1ag, x1a5, x1a6) {
  var x1av = "";
  if (typeof x1a5 !== x9n && x1a5 !== "") {
    x1av = x1a5;
  } else x1av = x1a6;
  if (x1av === "") {
    x1af.style.display = "none";
    x1af.src = "";
    x1af.x1aw = "";
    return;
  }
  if (x1af.src === x1av) {
    x1af.x1aw = "";
    x1af.style.display = "block";
    return;
  }
  if (x1af.x1aw !== x1av) {
    x1af.x1aw = x1av;
    x1af.style.display = "none";
    var x1ax = x9o.createElement("img");
    var x1ay = function () {
      if (x1af.x1aw === x1ax.x1az) {
        x1ae(x1af, x1ag, x1ax.width, x1ax.height);
        x1af.src = x1ax.src;
        x1af.style.display = "block";
      }
      x1ax = x9m;
    }, x1b0 = function (x12) {
      if (x1af.x1aw === x1ax.x1az) {
        if (x1a6 !== "") {
          x1af.x1aw = x1a6;
          x1ax.x1az = x1a6;
          x1ax.src = x1a6;
          x1a6 = "";
        } else {
          x1af.style.display = "none";
          x1af.x1aw = "";
          x1af.src = "";
        }
      }
    };
    x1ax.onerror = x1b0;
    x1ax.onload = x1ay;
    x1ax.x1az = x1av;
    x1ax.src = x1av;
  }
}
function x1b1(x1af, x1ag, x1a5, x1a6) {
  var x1av = "";
  if (typeof x1a5 !== x9n && x1a5 !== "") {
    x1av = x1a5;
  } else x1av = x1a6;
  if (x1av === "") {
    x1af.style.display = "none";
    x1af.src = "";
    x1af.x1aw = "";
    return;
  }
  if (x1af.src === x1av) {
    x1af.x1aw = "";
    x1af.style.display = "block";
    return;
  }
  if (x1af.x1aw !== x1av) {
    x1af.x1aw = x1av;
    x1af.style.display = "none";
    var x1ax = x9o.createElement("img"), x1ay = function () {
      if (x1af.x1aw === x1ax.x1az) {
        x1af.src = x1ax.src;
        x1af.style.display = "block";
      }
      x1ax = x9m;
    }, x1b0 = function (x12) {
      if (x1af.x1aw === x1ax.x1az) {
        if (x1a6 !== "") {
          x1af.x1aw = x1a6;
          x1ax.x1az = x1a6;
          x1ax.src = x1a6;
          x1a6 = "";
        } else {
          x1af.style.display = "none";
          x1af.x1aw = "";
          x1af.src = "";
        }
      }
    };
    x1ax.onerror = x1b0;
    x1ax.onload = x1ay;
    x1ax.x1az = x1av;
    x1ax.src = x1av;
  }
}
x2x.x31.x1b2 = function (x19t) {
  var xah = this, xda = x2x.x2y.xda, xch = x2x.x2z.xch, x1b3 = x19t, x1b4 = false, x1b5 = false, currentTime, x1b6, x19j, x1b7, x1b8, x1b9, x1ba = {}, x1bb = {}, x1bc = {}, x1bd = {}, x11u = [], x1be, x1bf = 5, x1bg = 0.8, x1bh = 0.5, cssEffects = xt.cssEffects, x1bi = {x1ak: 5, x1al: 8.8, x1aq: 0, x1ap: 0}, xmn = {x1bj: new x2x.xg3(this), x1bk: new x2x.xg3(this), xgq: new x2x.xg3(this), x174: new x2x.xg3(this), epg: new x2x.xg3(this), back: new x2x.xg3(this), x1bl: new x2x.xg3(this), x1bm: new x2x.xg3(this), x1bn: new x2x.xg3(this), x1bo: new x2x.xg3(this), x1bp: new x2x.xg3(this), x1bq: new x2x.xg3(this), x1br: new x2x.xg3(this), xq0: new x2x.xg3(this), x1bs: new x2x.xg3(this), x1bt: new x2x.xg3(this), x1bu: new x2x.xg3(this), sort: new x2x.xg3(this)}, x1bv = {x1bw: 0, xq0: 1, xr4: 2, x174: 3, x1bx: 4, back: 5, x1by: 6, x1bp: 7, x1bz: 8, x1bs: 9}, x1c0 = {x1c1: {x1c2: "#f00", key: xda.KEY_RED}, x1c3: {x1c2: "#0f0", key: xda.KEY_GREEN}, x1c4: {x1c2: "#ff0", key: xda.KEY_YELLOW}, x1c5: {x1c2: "#00f", key: xda.KEY_BLUE}}, x1c6 = {x1c7: "goback", xgq: xmn.back}, x1c8 = {x1c7: "close", xgq: xmn.x1bn}, x1c9 = {x1c7: "edit", xgq: xmn.x1bp, x1ca: x1c0.x1c3}, x1cb = {x1c7: "add", xgq: xmn.x1bq, x1ca: x1c0.x1c3}, x1cc = {x1c7: "delete", xgq: xmn.x1br, x1ca: x1c0.x1c1}, x1cd = {x1c7: "submit", xgq: xmn.x1bl}, x1ce = {x1c7: "reload", xgq: xmn.x1bo, x1ca: x1c0.x1c1}, x1cf = {x1c7: "options", xgq: xmn.x174}, x1cg = {x1c7: "epg", xgq: xmn.epg, x1ca: x1c0.x1c1}, x1ch = {x1c7: "favorites", xgq: xmn.x1bs, x1ca: x1c0.x1c3}, x1ci = {x1c7: "playlist", xgq: xmn.xq0}, x1cj = {x1c7: "aspectratio", xgq: xmn.x1bt, x1ca: x1c0.x1c4}, x1ck = {x1c7: "language", xgq: xmn.x1bu, x1ca: x1c0.x1c3}, x1cl = {x1c7: "sort", xgq: xmn.sort, x1ca: x1c0.x1c4}, x1cm = [], x1cn = [], x1co, x1cp = 0;
  if (xt.xu === xf.xo && xt.xk9) {
    x1cj.x1ca = x1c0.x1c3;
    x1ck.x1ca = x9m;
  }
  x1cm[x1bv.x1bw] = [x1cf, x1c9, x1ce];
  if (xt.xjt !== xjt.xjx) {
    x1cm[x1bv.x1bw].unshift(x1c8);
  }
  x1cm[x1bv.xq0] = [x1c6];
  x1cm[x1bv.xr4] = [x1c6, x1cl, x1ch];
  x1cm[x1bv.xr4].push(x1cg);
  x1cm[x1bv.x1bs] = [x1c6, x1c9, x1cl];
  x1cm[x1bv.x174] = [x1c6];
  x1cm[x1bv.x1bx] = [x1c6];
  switch (xt.xjt) {
    case xjt.xjw:
    case xjt.xjv:
    case xjt.xjy:
    case xjt.xju:
    case xjt.xk0:
    case xjt.xk2:
    case xjt.xk1:
      x1cm[x1bv.x1bx].push(x1cj);
      break;
  }
  switch (xt.xjt) {
    case xjt.xjw:
    case xjt.xjv:
    case xjt.xjy:
    case xjt.xju:
    case xjt.xk0:
    case xjt.xk1:
      x1cm[x1bv.x1bx].push(x1ck);
      break;
  }
  if (xt.xjt === xjt.xk2) {
    x1cm[x1bv.x1bx].push(x1ck);
  }
  if (xt.xjt === xjt.xjx) {
    x1cm[x1bv.x1bx].push(x1ck);
  }
  x1cm[x1bv.x1bx].push(x1cg);
  x1cm[x1bv.back] = [x1c6];
  x1cm[x1bv.x1by] = [x1cd];
  x1cm[x1bv.x1bp] = [x1c6, x1cb, x1cc];
  x1cm[x1bv.x1bz] = [x1c6, x1cd];
  this.xmn = xmn;
  this.x1bv = x1bv;
  function x1cq(xf6) {
    x1cp = xf6;
    x11u[xf6].x1cr.style.background = x2x.x31.x1cs.x1ct;
    if (cssEffects) {
      x11u[xf6].x11k.style.transform = "scale(1.07)";
      x11u[xf6].x11k.style.WebkitTransform = "scale(1.07)";
    }
  }
  function x1cu(xf6) {
    x11u[xf6].x1cr.style.background = "transparent";
    if (cssEffects) {
      x11u[xf6].x11k.style.transform = "scale(1)";
      x11u[xf6].x11k.style.WebkitTransform = "scale(1)";
    }
  }
  function x1cv() {
    if (!x1b5) {
      xmn.x1bj.xge();
    }
    x1cu(x1cp);
    x1cp = this.x1cw;
    x1cq(x1cp);
  }
  function x1cx() {}
  function x1cy() {
    x1cp = this.x1cw;
    x1cz();
  }
  function x1d0() {
    x19j.style.background = x2x.x31.x1cs.x1d1;
    x1ba.x8k.style.color = x2x.x31.x1cs.x1d2;
    x1b8.style.color = x2x.x31.x1cs.x1d2;
    x1b9.style.color = x2x.x31.x1cs.x1d2;
    x1bb.title.style.color = x2x.x31.x1cs.x1d2;
    x1bb.xub.style.color = x2x.x31.x1cs.x1d2;
    x1bb.x1d3.style.color = x2x.x31.x1cs.x1d4;
  }
  this.x1d0 = x1d0;
  var x1d5 = "em";
  this.x1d6 = function (xjn) {
    x1ba.x8k.style.fontSize = 1.8 * xjn + x1d5;
    x1b8.style.fontSize = 1.6 * xjn + x1d5;
    x1b9.style.fontSize = 1.6 * xjn + x1d5;
    x1bb.title.style.fontSize = 1.8 * xjn + x1d5;
    x1bb.xub.style.fontSize = 1.5 * xjn + x1d5;
    x1bb.x1d3.style.fontSize = 1.3 * xjn + x1d5;
    x1bc.x1d7.style.fontSize = 1.3 * xjn + x1d5;
    var x1d8 = 29.7 * xjn;
    if (x1d8 > 33) x1d8 = 33;
    x1b7.style.width = x1d8 + x1d5;
  };
  function x1d9(xf6) {
    if (!x1cn[xf6]) {
      var x1da = x19j.appendChild(x19q("div", "cssj")), x1db = x1da.appendChild(x19q("div", "cssk")), x1dc = x1da.appendChild(x19q("img", "cssl")), x1dd = x1da.appendChild(x19q("div", "cssm"));
      x1cn[xf6] = {x11k: x1da, x1cr: x1db, x1c7: x1dc, x1de: x1dd};
      x1da.onmouseover = x1cv;
      x1da.onmouseout = x1cx;
      x1da.onclick = x1cy;
    }
    return x1cn[xf6];
  }
  function x1df() {
    x1be = x1cm[x1co].length;
    for (var xd = 0; xd < x1be; xd++) {
      x11u[xd].x11k.style.display = "none";
    }
  }
  function x1dg() {
    x1be = x1cm[x1co].length;
    x1cp = 0;
    for (var xd = 0; xd < x1be; xd++) {
      var x10g = x1d9(xd);
      x10g.x11k.x1cw = xd;
      x10g.x11k.style.right = x1bg + (x1bh + x1bf) * xd + "em";
      if (x1cm[x1co][xd].x1c7) {
        x10g.x1c7.src = x0 + "img/tp/" + x1cm[x1co][xd].x1c7 + ".png";
      }
      if (x1cm[x1co][xd].x1ca) {
        x10g.x1de.style.background = x1cm[x1co][xd].x1ca.x1c2;
      } else {
        x10g.x1de.style.background = "gray";
      }
      x10g.x11k.style.display = "";
      x11u[xd] = x10g;
      x1cu(xd);
    }
  }
  function x1dh() {
    x19j = x19o("div", "cssd");
    x1b7 = x19j.appendChild(x19o("hr", "csse"));
    x1b8 = x19j.appendChild(x19o("div", "cssf")).appendChild(x19o("div", "cssg"));
    x1b9 = x19j.appendChild(x19o("div", "cssh")).appendChild(x19o("div", "cssi"));
    x1ba.x11k = x19j.appendChild(x19o("div", "cssn"));
    x1ba.x8k = x1ba.x11k.appendChild(x19o("div", "csso"));
    x1bb.x11k = x19j.appendChild(x19o("div", "cssp"));
    x1bb.title = x1bb.x11k.appendChild(x19o("div", "cssq"));
    x1bb.xub = x1bb.x11k.appendChild(x19o("div", "csss"));
    x1bb.x1d3 = x1bb.x11k.appendChild(x19o("div", "csst"));
    x1bb.x1c7 = x1bb.x11k.appendChild(x19o("img", "cssr"));
    x1bc.x11k = x19j.appendChild(x19o("div", "cssu"));
    x1bc.x1d7 = x1bc.x11k.appendChild(x19o("div", "cssv"));
    x1bd.x11k = x19j.appendChild(x19o("div", "cssw"));
    x1bd.title = x1bd.x11k.appendChild(x19o("div", "cssx"));
    x1bd.value = x1bd.x11k.appendChild(x19o("div", "cssy")).appendChild(x19o("span", "cssz"));
    x1co = x1bv.x1bw;
    x1dg();
    x1d0();
  }
  this.x1di = function () {
    if (!x1b4) {
      x1b3.appendChild(x19j);
      x1b4 = true;
    }
  };
  this.x1dj = function () {
    if (x1b4) {
      var xql = x1b3.removeChild(x19j);
      x1b4 = false;
    }
  };
  function x1dk(x1dl) {
    if (x1co !== x1dl) {
      x1df();
      x1co = x1dl;
      x1dg();
      if (x1b5) {
        x1cq(x1cp);
      }
    }
  }
  this.x1dk = x1dk;
  var x1dm;
  this.x1dn = function (xrw) {
    x1dm = xrw;
    x1ba.x11k.style.display = "none";
    x1bd.x11k.style.display = "none";
    x1bb.title.innerHTML = xrw.title;
    x1au(x1bb.x1c7, x1bi, xrw.pict, "");
    x1bb.x11k.style.display = "";
    xrw.xuu(true, function (xv1) {
      if (x1dm === xrw) {
        var x1do = xrw.xvy(2);
        if (x1do[0] && x1do[0].name) {
          x1bb.xub.innerHTML = (x1do[0].name || " ") + " " + (x1do[0].x8k || " ");
        } else {
          x1bb.xub.innerHTML = "--";
        }
        if (x1do[1] && x1do[1].name) {
          x1bb.x1d3.innerHTML = x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x4u) + x1do[1].name + " " + (x1do[1].x8k || " ");
        } else {
          x1bb.x1d3.innerHTML = " ";
        }
      }
    });
  };
  this.x1dp = function (data) {
    if (data && data.xck > 0) {
      x1bc.x1d7.innerHTML = data.xck + "x" + data.x1dq;
      x1bc.x11k.style.display = "";
    } else x1bc.x11k.style.display = "none";
  };
  var x1dr = " ";
  this.x1ds = function (title) {
    x1bb.x11k.style.display = "none";
    x1bc.x11k.style.display = "none";
    x1bd.x11k.style.display = "none";
    if (typeof title === "array" || typeof title === "object") {
      x1ba.x8k.innerHTML = x2x.x2y.x37.x9f(title);
    } else {
      x1ba.x8k.innerHTML = title;
    }
    x1dr = title;
    x1ba.x11k.style.display = "";
  };
  this.x1dt = function (x174) {
    x1ba.x11k.style.display = "none";
    x1bc.x11k.style.display = "none";
    x1bb.x11k.style.display = "none";
    x1bd.title.innerHTML = x174.title;
    x1bd.x11k.style.display = "";
  };
  this.x1du = function () {
    return x1bd.value;
  };
  this.x1dv = function () {
    if (typeof x1dr === "array" || typeof x1dr === "object") {
      x1ba.x8k.innerHTML = x2x.x2y.x37.x9f(x1dr);
    }
  };
  this.x15x = function () {
    if (x1b4) {
      currentTime = xch.xbg();
      x1b6 = xch.xbz(currentTime);
      x1b9.innerHTML = x1b6;
      x1b8.innerHTML = xch.xc1(currentTime);
    }
  };
  function xyu() {
    xmn.xgq.xge();
    if (x1cp > 0) {
      x1cp--;
      x1dw();
    } else {
      xmn.x1bk.xge(x2x.x31.x18q.x18r);
    }
  }
  function xyw() {
    xmn.xgq.xge();
    if (x1cp < x1be - 1) {
      x1cp++;
      x1dw();
    } else {
      xmn.x1bk.xge(x2x.x31.x18q.x18s);
    }
  }
  function x1dw() {
    for (var xd = 0; xd < x1be; xd++) {
      if (xd === x1cp) {
        x1cq(xd);
      } else {
        x1cu(xd);
      }
    }
  }
  function x1cz() {
    xmn.xgq.xge();
    x1cm[x1co][x1cp].xgq.xge(x1co);
  }
  function x1dx() {
    xad.xae("[toppanel] cancel");
    x1c6.xgq.xge();
  }
  function x1dy(x1dz) {
    switch (x1dz) {
      case xda.KEY_RIGHT:
      case xda.xiq + xda.KEY_RIGHT:
        xyu();
        break;
      case xda.KEY_LEFT:
      case xda.xiq + xda.KEY_LEFT:
        xyw();
        break;
      case xda.KEY_ENTER:
      case xda.xiq + xda.KEY_ENTER:
        x1cz();
        break;
      case xda.KEY_RETURN:
        x1dx();
        break;
      case xda.KEY_DOWN:
      case xda.xiq + xda.KEY_DOWN:
        xmn.x1bk.xge(x2x.x31.x18q.x18u);
        break;
      case xda.KEY_UP:
      case xda.xiq + xda.KEY_UP:
        xmn.x1bk.xge(x2x.x31.x18q.x18t);
        break;
      default:
        return false;
    }
    return true;
  }
  function focus(x18q) {
    xad.xae("[toppanel] focus");
    x1b5 = true;
    x1cp = 0;
    if (x18q === x2x.x31.x18q.x18r) {
      x1cp = x1be - 1;
    }
    x1cq(x1cp);
  }
  function x1e0() {
    xad.xae("[toppanel] unfocus");
    x1cu(x1cp);
    x1b5 = false;
  }
  this.x1e1 = {x1dy: x1dy, x1dx: x1dx, focus: focus, x1e0: x1e0};
  x1dh();
};
x2x.x31.x1e2 = function (x19t, x1e3, x1e4) {
  var x1b3 = x19t, xah = this, x1cs = x2x.x31.x1cs, xda = x2x.x2y.xda, x1b4 = false, x1b5 = false, x1e5 = x1e3, x1d5 = "em", x1e6 = 96, x1e7 = 0.25, x1e8 = -1, x1e9 = 4, x1ea = 17.7, x1eb = x1e4, cssEffects = xt.cssEffects, x1ec = 18, x19j = x19q("div", "css10"), x11u = [], x1ed = -1, x1ee, x1ef, x1eg, x1eh, x1ei, xmn = {x1bj: new x2x.xg3(this), x1bk: new x2x.xg3(this), xyu: new x2x.xg3(this), xyw: new x2x.xg3(this), xyx: new x2x.xg3(this), xyy: new x2x.xg3(this), x13i: new x2x.xg3(this), x1ej: new x2x.xg3(this), x1ek: new x2x.xg3(this)};
  this.xmn = xmn;
  var x1cp = 0, x1el = 0;
  function x1cv() {
    if (!x1b5) {
      xad.xae("[line] captureinput");
      xmn.x1bj.xge();
    }
    if (this.x1cw !== x1cp) {
      xmn.x13i.xge({xex: x1e5, xez: 1, xf3: this.x1cw});
    } else {
      x1cq(x1cp);
    }
  }
  function x1cx(x12) {}
  function x1cy() {
    if (this.x1cw !== x1cp) {
      xmn.x13i.xge({xex: x1e5, xez: 1, xf3: this.x1cw});
    }
    xmn.xyx.xge({xex: x1e5, xez: 1});
  }
  function x1cq(x1cw) {
    if (x1ed !== x1cw) {
      if (!x1eb) {
        x11u[x1cw].x1cr.style.background = x1cs.x1ct;
        x11u[x1cw].x1em.style.color = x1cs.x1en;
        if (cssEffects) {
          x11u[x1cw].x1cr.style.transform = "skew(-20deg) scale(1.015)";
          x11u[x1cw].x1cr.style.WebkitTransform = "skew(-20deg) scale(1.015)";
        }
      } else {
        x1cu(x1cw);
      }
      if (x11u[x1cw].data.length > x1ec) {
        x11u[x1cw].x1em.innerHTML = "<marquee behavior='alternate' scrollamount='1' loop='2'>" + x11u[x1cw].data + "</marquee>";
      }
      x1ed = x1cw;
    }
  }
  function x1cu(x1cw) {
    x11u[x1cw].x1cr.style.background = x1cs.x1eo;
    x11u[x1cw].x1em.style.color = x1cs.x1d2;
    if (x1ed === x1cw) {
      x1ed = -1;
    } else {
      x11u[x1cw].x1em.innerHTML = x11u[x1cw].data;
    }
  }
  function x1ep(x1cw) {
    x11u[x1cw].x1cr.style.background = x1cs.x1d1;
    x11u[x1cw].x1em.style.color = x1cs.x1d2;
    if (cssEffects) {
      x11u[x1cw].x1cr.style.transform = "skew(-20deg) scale(1)";
      x11u[x1cw].x1cr.style.WebkitTransform = "skew(-20deg) scale(1)";
    }
    if (x1ed === x1cw) {
      x1ed = -1;
      x11u[x1cw].x1em.innerHTML = x11u[x1cw].data;
    }
  }
  function x1eq() {
    xmn.x1ek.xge({xex: x1e5, xez: 1, xfr: true, xfp: 1});
  }
  function x1er() {
    xmn.x1ej.xge({xex: x1e5, xez: 1, xfr: true, xfp: 1});
  }
  var x1es;
  function x1et() {
    x9q(x1es);
    var x1eu = x9p(function () {
      x1er();
      x1et();
    }, 200);
    x1es = x1eu;
  }
  function x1ev() {
    x9q(x1es);
    var x1eu = x9p(function () {
      x1eq();
      x1ev();
    }, 200);
    x1es = x1eu;
  }
  function x1ew() {
    x9q(x1es);
  }
  function x1ex(x16o) {
    if (x16o.deltaY > 0) {
      x1er();
    } else {
      x1eq();
    }
  }
  function x1ey(x16o) {
    if (x16o.wheelDelta < 0) {
      x1er();
    } else {
      x1eq();
    }
  }
  var x1ez = 0;
  function x1f0(x16o) {
    x16o.preventDefault();
    x16o.stopPropagation();
    var left = x16o.touches[0].pageX, xf9 = x1ez - left;
    x1ez = left;
    if (x1ez > 0) {
      if (xf9 > 15) {
        x1er();
      } else if (xf9 < 0 && xf9 < -15) {
        x1eq();
      }
    }
  }
  function x1d0() {
    x1ee.style.background = x1cs.x1d1;
    x1ei.style.background = x1cs.x1d1;
    x1eh.style.background = x1cs.x1d1;
  }
  this.x1d0 = x1d0;
  var x1f1 = 1.8, x1f2 = "em";
  function x1d6(xjn) {
    for (var x1cw = 0; x1cw < x1e5; x1cw++) {
      x11u[x1cw].x1em.style.fontSize = x1f1 * xjn + x1f2;
    }
    x1ec = 18 / xjn;
  }
  this.x1d6 = x1d6;
  var x1f3 = true;
  function x1f4() {
    if (x1f3) {
      x1eg.style.width = 0 + x1d5;
      x11u[0].x11k.style.width = x1e9 + x1e7 + x1ea + x1d5;
      x11u[0].x11k.style.left = x1e8 + x1d5;
      x1f3 = false;
    }
  }
  function x1f5() {
    if (!x1f3) {
      x1eg.style.width = x1e9 + x1d5;
      x11u[0].x11k.style.width = x1ea + x1d5;
      x11u[0].x11k.style.left = x1e8 + (x1e9 + x1e7) + x1d5;
      x1f3 = true;
    }
  }
  var x1f6 = true;
  function x1f7() {
    if (x1f6) {
      x1ef.style.width = 0 + x1d5;
      var x1cw = x1e5 - 1;
      x11u[x1cw].x11k.style.width = x1ea + x1e7 + x1e9 + x1d5;
      x1f6 = false;
    }
  }
  function x1f8() {
    if (!x1f6) {
      x1ef.style.width = x1e9 + x1d5;
      var x1cw = x1e5 - 1;
      x11u[x1cw].x11k.style.width = x1ea + x1d5;
      x1f6 = true;
    }
  }
  function x1f9(x12) {
    switch (x12.target) {
      case x1ef:
      case x1eh:
        x1et();
        break;
      case x1eg:
      case x1ei:
        x1ev();
        break;
    }
  }
  function x1fa(x12) {
    x1ew();
  }
  function x1fb(x12) {
    switch (x12.target) {
      case x1ef:
      case x1eh:
        x1er();
        break;
      case x1eg:
      case x1ei:
        x1eq();
        break;
    }
  }
  function x1dh() {
    if (x2x.x31.x197.x19h) {
      x1d5 = "px";
      x1e6 = x2x.x31.x197.x198;
      x1ea = x1ea / 96 * x2x.x31.x197.x198;
      x1e7 = x1e7 / 96 * x2x.x31.x197.x198;
      x1e8 = x1e8 / 96 * x2x.x31.x197.x198;
      x1e9 = x1e9 / 96 * x2x.x31.x197.x198;
    }
    if (cssEffects) {
      x19j.style.transition = "bottom 0.35s ease 0s";
      x19j.style.OTransition = "bottom 0.35s ease 0s";
    }
    for (var x1cw = 0; x1cw < x1e5; x1cw++) {
      var x10g = {data: ""};
      x10g.x11k = x19j.appendChild(x19q("div", "css11"));
      x10g.x11k.style.width = x1ea + x1d5;
      x10g.x11k.style.left = x1e8 + (x1e9 + x1e7) + (x1ea + x1e7) * x1cw + x1d5;
      x10g.x1cr = x10g.x11k.appendChild(x19q("div", "css12"));
      x10g.x1em = x10g.x11k.appendChild(x19q("span", "css13"));
      x10g.x11k.x1cw = x1cw;
      x10g.x11k.onmouseover = x1cv;
      x10g.x11k.onmouseout = x1cx;
      x10g.x11k.onclick = x1cy;
      x11u.push(x10g);
      if (cssEffects) {
        x10g.x1cr.style.transition = "background-color 0.2s ease 0s";
        x10g.x1cr.style.OTransition = "background-color 0.2s ease 0s";
      }
    }
    x1ee = x19j.appendChild(x19q("div", "css12"));
    x1eg = x19j.appendChild(x19q("div", "css11"));
    x1eg.style.width = x1e9 + x1d5;
    x1eg.style.left = x1e8 + x1d5;
    x1ei = x1eg.appendChild(x19q("div", "css12"));
    x1ef = x19j.appendChild(x19q("div", "css11"));
    x1ef.style.width = x1e9 + x1d5;
    x1ef.style.right = x1e8 + x1d5;
    x1eh = x1ef.appendChild(x19q("div", "css12"));
    x19j.onwheel = x1ex;
    x19j.onmousewheel = x1ey;
    x19j.ontouchmove = x1f0;
    x1eh.onmouseover = x1f9;
    x1ei.onmouseover = x1f9;
    x1eh.onmouseout = x1fa;
    x1ei.onmouseout = x1fa;
    x1ef.onclick = x1fb;
    x1eg.onclick = x1fb;
    x1b3.appendChild(x19j);
    x19j.style.bottom = "-9.5%";
  }
  this.x1di = function () {
    if (!x1b4) {
      x19j.style.bottom = "0%";
      x1b4 = true;
    }
  };
  this.x1dj = function () {
    if (x1b4) {
      x19j.style.bottom = "-9.5%";
      x1b4 = false;
    }
  };
  this.x1fc = function (xy1) {
    if (xy1.xfu.length >= x1e5) {
      x1ee.style.display = "none";
    } else {
      var left = x1e8 + (x1ea + x1e7) * xy1.xfu.length, width = x1e6 - left - x1e8;
      if (xy1.xfu.length > 0) {
        left += x1e9 + x1e7;
      }
      x1ee.style.left = left + x1d5;
      x1ee.style.width = width + x1d5;
      x1ee.style.display = "";
    }
    for (var x1cw = 0; x1cw < x1e5; x1cw++) {
      var x1fd = xy1.xyc({xex: x1e5, xez: 1, xf3: x1cw});
      if (x1fd) {
        x11u[x1cw].data = x1fd.data.title;
        x11u[x1cw].x1em.innerHTML = x11u[x1cw].data;
        if (xy1.xyg({xex: x1e5, xez: 1, xf3: x1cw})) {
          x1cp = x1cw;
          if (x1b5) {
            x1cq(x1cw);
          } else {
            x1cu(x1cw);
          }
        } else {
          x1ep(x1cw);
        }
        x11u[x1cw].x11k.style.display = "";
      } else {
        x11u[x1cw].x11k.style.display = "none";
      }
    }
    if (xy1.xf0({xex: x1e5, xez: 1})) {
      x1f4();
    } else x1f5();
    if (xy1.xf1({xex: x1e5, xez: 1})) {
      x1f7();
    } else x1f8();
  };
  this.x1fe = function (x1cw, xi6, x15s) {
    x11u[x1cw].data = xi6;
    x11u[x1cw].x1em.innerHTML = x11u[x1cw].data;
    if (x15s) {
      x1cp = x1cw;
      if (x1b5) {
        x1cq(x1cw);
      } else {
        x1cu(x1cw);
      }
    } else {
      x1ep(x1cw);
    }
    x11u[x1cw].x11k.style.display = "";
    x1el = x1cw;
  };
  this.x1ff = function (x1fg) {
    for (var x1cw = x1el + 1; x1cw < x1e5; x1cw++) {
      x11u[x1cw].x11k.style.display = "none";
    }
    if (x1el + 1 === x1e5) {
      x1ee.style.display = "none";
    } else {
      var left = x1e8 + (x1ea + x1e7) * (x1el + 1), width = x1e6 - left - x1e8;
      x1ee.style.left = left + x1d5;
      x1ee.style.width = width + x1d5;
      x1ee.style.display = "";
    }
    if (x1fg.xf0({xex: x1e5, xez: 1})) {
      x1f4();
    } else x1f5();
    if (x1fg.xf1({xex: x1e5, xez: 1})) {
      x1f7();
    } else x1f8();
  };
  this.xz2 = function () {
    for (var xd = 0; xd < x1e5; xd++) {
      x11u[xd].x11k.style.display = "none";
    }
    x1ee.style.left = x1e8 + x1d5;
    x1ee.style.width = x1e6 + 2 + x1d5;
    x1ee.style.display = "";
  };
  function x1dx() {
    xmn.xyy.xge({xex: x1e5, xez: 1});
  }
  function focus() {
    xad.xae("[line] focus");
    x1b5 = true;
    x1cq(x1cp);
  }
  function x1e0() {
    xad.xae("[line] unfocus");
    x1cu(x1cp);
    x1b5 = false;
  }
  function x1dy(x1dz) {
    switch (x1dz) {
      case xda.KEY_RIGHT:
      case xda.xiq + xda.KEY_RIGHT:
        xmn.xyu.xge({xex: x1e5, xez: 1, xfp: 1});
        break;
      case xda.KEY_LEFT:
      case xda.xiq + xda.KEY_LEFT:
        xmn.xyw.xge({xex: x1e5, xez: 1, xfp: 1});
        break;
      case xda.KEY_ENTER:
      case xda.xiq + xda.KEY_ENTER:
        xmn.xyx.xge({xex: x1e5, xez: 1});
        break;
      case xda.KEY_RETURN:
        x1dx();
        break;
      case xda.KEY_UP:
      case xda.xiq + xda.KEY_UP:
        xmn.x1bk.xge(x2x.x31.x18q.x18t);
        break;
      case xda.KEY_DOWN:
      case xda.xiq + xda.KEY_DOWN:
        xmn.x1bk.xge(x2x.x31.x18q.x18u);
        break;
      default:
        return false;
    }
    return true;
  }
  this.x1e1 = {x1dy: x1dy, x1dx: x1dx, focus: focus, x1e0: x1e0};
  this.x1fh = {xex: x1e5, xez: 1};
  x1dh();
};
x2x.x31.x1fi = function (x19t, x1fj, x1fk, x1fl) {
  var x1fm, x1fn, x1fo, x1fp, x1fq, x1cs = x2x.x31.x1cs, x1fr = x1fj, x1fs = -1, x1ft = -1, xmn = {x1bj: new x2x.xg3(this), xyu: new x2x.xg3(this), xyw: new x2x.xg3(this)};
  this.xmn = xmn;
  function x1dh(x19t) {
    if (!x1fr) {
      x1fq = x19t.appendChild(x19q("div", "css14"));
      x1fo = x1fq.appendChild(x19q("img", "css17"));
      x1fm = x1fq.appendChild(x19q("div", "css15"));
      x1fn = x1fm.appendChild(x19q("div", "css16"));
      x1fp = x1fq.appendChild(x19q("img", "css17"));
      x1fo.style.right = "0em";
      x1fo.style.top = "0.2em";
      x1fo.src = x0 + "img/arrowUp.png";
      x1fp.style.right = "0em";
      x1fp.style.bottom = "0.2em";
      x1fp.src = x0 + "img/arrowDown.png";
    } else {
      x1fq = x19t.appendChild(x19q("div", "css18"));
      x1fo = x1fq.appendChild(x19q("img", "css1b"));
      x1fm = x1fq.appendChild(x19q("div", "css19"));
      x1fn = x1fm.appendChild(x19q("div", "css1a"));
      x1fp = x1fq.appendChild(x19q("img", "css1b"));
      x1fo.src = x0 + "img/arrowLeft.png";
      x1fp.src = x0 + "img/arrowRight.png";
      if (x1fk) {
        x1fo.style.bottom = x1fk + "em";
        x1fp.style.bottom = x1fk + "em";
      }
      if (!x1fl) {
        x1fl = 0;
      }
      x1fo.style.left = x1fl + "em";
      x1fp.style.right = x1fl + "em";
    }
    x1fo.onmouseover = x1f9;
    x1fo.onmouseout = x1fa;
    x1fo.style.display = "none";
    x1fp.onmouseover = x1f9;
    x1fp.onmouseout = x1fa;
    x1fp.style.display = "none";
    x1fo.onclick = function () {
      xmn.xyw.xge();
    };
    x1fp.onclick = function () {
      xmn.xyu.xge();
    };
    x1fq.onmouseover = function () {
      x1fo.style.display = "";
      x1fp.style.display = "";
    };
    x1fq.onmouseout = function () {
      x1fo.style.display = "none";
      x1fp.style.display = "none";
    };
    x1d0();
  }
  function x1d0() {
    x1fo.style.background = "transparent";
    x1fp.style.background = "transparent";
    x1fm.style.background = x1cs.x1fu;
    x1fn.style.background = x1cs.x1fv;
  }
  this.x1dw = function (xew) {
    if (!x1fr) {
      if (x1fs !== xew.top) {
        x1fn.style.top = xew.top * 100 + "%";
        x1fs = xew.top;
      }
      if (x1ft !== xew.height) {
        x1fn.style.height = xew.height * 100 + "%";
        x1ft = xew.height;
      }
    } else {
      if (x1fs !== xew.top) {
        x1fn.style.left = xew.top * 100 + "%";
        x1fs = xew.top;
      }
      if (x1ft !== xew.height) {
        x1fn.style.width = xew.height * 100 + "%";
        x1ft = xew.height;
      }
    }
  };
  function x1fw(x1fx) {
    x1fx.style.background = x1cs.x1fy;
  }
  function x1fz(x1fx) {
    x1fx.style.background = "transparent";
  }
  function x1f9() {
    x1fw(this);
    xmn.x1bj.xge();
  }
  function x1fa() {
    x1fz(this);
  }
  this.x1d0 = x1d0;
  x1dh(x19t);
};
x2x.x31.x1g0 = function (x19t) {
  var _xg = xaa._xg, x1cs = x2x.x31.x1cs, xda = x2x.x2y.xda, xch = x2x.x2z.xch, xah = this, x1b3 = x19t, x1b4 = false, x1b5 = false, x19j, x1g1, x1g2, x1g3, x1g4, x1g5 = 2, x1g6 = 14, x1g7 = x1g6, x1g8 = x1g5 + x1g7, x11u = [], x1g9 = 8, x1ga = 0.8, x1gb = 45.4 / x1g9, x1gc = 0.02 * x1gb, x1gd = x1gb - x1gc * 2, x1ge = x1gd / 16 * 9, x1gf = {x1ak: x1ge, x1al: x1gd, x1aq: x1ga, x1ap: (x1gb - x1ge) / 2}, cssEffects = xt.cssEffects, xmn = {x1bj: new x2x.xg3(this), x1bk: new x2x.xg3(this), xyu: new x2x.xg3(this), xyw: new x2x.xg3(this), xyx: new x2x.xg3(this), xyy: new x2x.xg3(this), x13i: new x2x.xg3(this), x1gg: new x2x.xg3(this), x1gh: new x2x.xg3(this), x1ej: new x2x.xg3(this), x1ek: new x2x.xg3(this), x1gi: new x2x.xg3(this)}, x1fn, x1cp = -1, x1ec = 30;
  this.xmn = xmn;
  function x1cq(xf6, x1gj) {
    var x10g = x11u[xf6];
    if (!x10g.x1gk || !x10g.x1gl || x1gj) {
      x10g.title.style.color = x1cs.x1gm;
      x10g.x1cr.style.background = x1cs.x1gn;
      if (xdo(x10g.x1go.data.title) > x1ec) {
        x10g.title.innerHTML = "<marquee behavior='alternate' scrollamount='1' loop='2'>" + x10g.x1go.data.title + "</marquee>";
      }
      if (cssEffects) {
        x10g.x11k.style.transform = "scale(1.02)";
        x10g.x11k.style.WebkitTransform = "scale(1.02)";
      }
      x10g.x1gl = x10g.x1gk = true;
    }
  }
  function x1cu(xf6) {
    var x10g = x11u[xf6];
    if (x10g.x1gl) {
      x10g.title.style.color = x1cs.x1gm;
      x10g.x1cr.style.background = "transparent";
      if (xdo(x10g.x1go.data.title) > x1ec) {
        x10g.title.innerHTML = x10g.x1go.data.title;
      }
      if (cssEffects) {
        x10g.x11k.style.transform = "scale(1.02)";
        x10g.x11k.style.WebkitTransform = "scale(1.02)";
      }
      x10g.x1gl = !x10g.x1gl;
    }
  }
  function x1ep(xf6) {
    var x10g = x11u[xf6];
    if (x10g.x1gk) {
      x10g.title.style.color = x1cs.x1gp;
      x10g.x1cr.style.background = "transparent";
      if (cssEffects) {
        x10g.x11k.style.transform = "scale(1)";
        x10g.x11k.style.WebkitTransform = "scale(1)";
      }
      if (x10g.x1gl) {
        if (xdo(x10g.x1go.data.title) > x1ec) {
          x10g.title.innerHTML = x10g.x1go.data.title;
        }
      }
      x10g.x1gk = !x10g.x1gk;
    }
  }
  function x1cv() {
    if (!x1b5) {
      xad.xae("[streamlist] captureinput");
      xmn.x1bj.xge();
    } else {
      if (this.x1cw !== x1cp) {
        xmn.x13i.xge({xex: x1g9, xez: 1, xf3: this.x1cw});
      } else {
        x1cq(this.x1cw);
      }
    }
  }
  function x1cx(x12) {}
  function x1cy() {
    if (x1b5) {
      if (this.x1cw !== x1cp) {
        xmn.x13i.xge({xex: x1g9, xez: 1, xf3: this.x1cw});
      }
      xmn.xyx.xge({xex: x1g9, xez: 1});
    } else {
      xmn.x1bj.xge();
    }
  }
  function x1gq() {
    if (x1b5) {
      xmn.x1ek.xge({xex: x1g9, xez: 1, xfr: true, xfp: 1});
    }
  }
  function x1gr() {
    if (x1b5) {
      xmn.x1ej.xge({xex: x1g9, xez: 1, xfr: true, xfp: 1});
    }
  }
  function x1ex(x16o) {
    if (x16o.deltaY > 0) {
      x1gr();
    } else {
      x1gq();
    }
  }
  function x1ey(x16o) {
    if (x16o.wheelDelta < 0) {
      x1gr();
    } else {
      x1gq();
    }
  }
  var x1gs = 0;
  function x1f0(x16o) {
    x16o.preventDefault();
    x16o.stopPropagation();
    var top = x16o.touches[0].pageY, xf9 = x1gs - top;
    x1gs = top;
    if (x1gs > 0) {
      if (xf9 > 15) {
        x1gr();
      } else if (xf9 < 0 && xf9 < -15) {
        x1gq();
      }
    }
  }
  function x1d0() {
    x1g1.style.background = x1cs.x1gt;
    x1g2.style.background = x1cs.x1gt;
    x1g3.style.color = x1cs.x1gp;
    var x1gu = x1cs.x1gv + " 1px 0 0px, " + x1cs.x1gv + " 0 1px 0px, " + x1cs.x1gv + " -1px 0 0px, " + x1cs.x1gv + " 0 -1px 0px";
    for (var x1cw = 0; x1cw < x1g9; x1cw++) {
      x11u[x1cw].x1gl = x11u[x1cw].x1gk = true;
      x11u[x1cw].xub.style.color = x1cs.x1gw;
      x11u[x1cw].x1gx.style.background = x1cs.x1gy;
      x11u[x1cw].x1gz.style.background = x1cs.x1h0;
      x11u[x1cw].x1h1.style.color = x1cs.x1h2;
      x11u[x1cw].x1h3.style.color = x1cs.x1h4;
      x11u[x1cw].x1h3.style.textShadow = x1gu;
    }
    for (var xd = 0; xd < x1g5 + x1g6; xd++) {
      x1g4.x11u[xd].x1h5.style.color = x1cs.x1gp;
      x1g4.x11u[xd].x1h6.style.color = x1cs.x1gw;
      x1g4.x11u[xd].x1h7.style.color = x1cs.x1h2;
    }
    x1g4.xv4.x1h1.style.color = x1cs.x1gp;
    x1g4.xv4.name.style.color = x1cs.x1gm;
    x1g4.xv4.x15r.style.color = x1cs.x1h2;
    x1g4.xv4.duration.style.background = x1cs.x1gy;
    x1g4.xv4.x1gz.style.background = x1cs.x1h0;
    x1g4.xzm.style.color = x1cs.x1gw;
    x1fn.x1d0();
  }
  this.x1d0 = x1d0;
  var x1h8 = 1.8, x1h9 = 1.4, x1ha = 1.2, x1hb = 0.1, x1hc = 0.4, x1hd = 0.3, x1he = 2, x1hf = 1.6, x1hg = 1.4, x1d5 = "em", x1hh = 1;
  function x1d6(xjn) {
    x1hh = xjn;
    var x1hi = 1;
    switch (x1g9) {
      case 8:
        x1hi = 0.9;
        break;
      case 9:
        x1hi = 0.7;
        break;
      case 10:
        x1hi = 0.64;
        break;
      case 12:
        x1hi = 0.51;
        break;
    }
    xjn = xjn * x1hi;
    var xjl = xjn;
    if (xjl < 1) {
      xjl = 1;
    }
    var x10g;
    var x1hj = x1h8 * xjn, x1hk = x1h9 * xjn, x1hl = x1ha * xjn, x1hm = x1hc + x1hd + x1hb, x1hn = x1hm + x1hl + x1hb, x1ho = (x1gb - (x1hn + x1hk + x1hb * 2) - x1hj) / 2, x1hp = (x1gb - x1hm - x1hj) / 2;
    for (var xd = 0; xd < x1g9; xd++) {
      x10g = x11u[xd];
      x10g.title.style.fontSize = x1hj + x1d5;
      x10g.xub.style.fontSize = x1hk + x1d5;
      x10g.x1h1.style.fontSize = x1hl + x1d5;
      x10g.x1hq.style.bottom = x1hm + x1d5;
      x10g.x1hr.style.bottom = x1hn + x1d5;
      x10g.x1hs = x1hp;
      x10g.x1ht = x1ho;
      if (x10g.x1go && x10g.x1go.xxu()) {
        x10g.x1hu.style.top = x1ho + x1d5;
      } else {
        x10g.x1hu.style.top = x1hp + x1d5;
      }
    }
    x1ec = 30 / xjn;
    x1g7 = (x1g6 / xjn >> 0) - 1;
    if (x1g7 > x1g6) {
      x1g7 = x1g6;
    }
    x1g8 = x1g5 + x1g7;
    for (var xd = 0; xd < x1g8; xd++) {
      x10g = x1g4.x11u[xd];
      x10g.x1h5.style.fontSize = x1hf * xjn + x1d5;
      x10g.x1h6.style.fontSize = x1hf * xjn + x1d5;
      x10g.x1h7.style.fontSize = x1hg * xjn + x1d5;
      x10g.x11k.style.height = x1he * xjn + x1d5;
    }
    for (var xd = x1g7; xd < x1g5 + x1g6; xd++) {
      x1hv(x1g4.x11u[xd], [" ", " ", " "]);
    }
    x1g4.xv4.x1h1.style.fontSize = x1h8 * xjn + x1d5;
    x1g4.xv4.name.style.fontSize = x1h8 * xjn + x1d5;
    x1g4.xv4.x8k.style.fontSize = x1hf * xjn + x1d5;
    x1g4.xv4.duration.style.right = 12 * xjn + x1d5;
    x1g4.xv4.x15r.style.fontSize = x1hf * xjn + x1d5;
    x1g3.style.fontSize = 1.4 * xjn + x1d5;
  }
  this.x1d6 = x1d6;
  function x1hw(x1hx) {
    xad.xae("list apply size " + x1hx);
    x1hy();
    switch (x1hx) {
      case x2x.x31.x18w.x18z:
        x1hx = 6;
        break;
      case x2x.x31.x18w.x18x:
        x1hx = 10;
        break;
      default:
        x1hx = 8;
        break;
    }
    x1g9 = x1hx;
    x1ga = 0.8;
    x1gb = 45.4 / x1g9;
    x1gc = 0.02 * x1gb;
    x1gd = x1gb - x1gc * 2;
    x1ge = x1gd / 16 * 9;
    x1hc = 2.4000000000000004 / x1hx;
    x1hd = 1.7999999999999998 / x1hx;
    x1gf = {x1ak: x1ge, x1al: x1gd, x1aq: x1ga, x1ap: (x1gb - x1ge) / 2};
    x1hz(x1hx);
    x1d6(x1hh);
    x1d0();
  }
  this.x1hw = x1hw;
  function x1hy() {
    for (var xd = 0; xd < x1g9; xd++) {
      var x10g = x11u[xd];
      if (x10g) {
        x1g1.removeChild(x10g.x11k);
        x1au(x10g.x1c7, x1gf, "", "");
        x10g.x1go = x9m;
      }
    }
  }
  function x1hz(x1i0) {
    for (var x1cw = 0; x1cw < x1i0; x1cw++) {
      var x10g = x11u[x1cw];
      if (!x10g) {
        x10g = {};
        x10g.x11k = x19q("div", "css1v");
        x10g.x1cr = x10g.x11k.appendChild(x19q("div", "css1w"));
        x10g.x1c7 = x10g.x11k.appendChild(x19q("img", "css20"));
        x10g.x1h3 = x10g.x11k.appendChild(x19q("span", "css1x"));
        x10g.x1i1 = x10g.x11k.appendChild(x19q("img", "css1y"));
        x10g.x1i2 = x10g.x11k.appendChild(x19q("img", "css1z"));
        x10g.x1hu = x10g.x11k.appendChild(x19q("div", "css21"));
        x10g.title = x10g.x1hu.appendChild(x19q("div", "css22"));
        x10g.x1hr = x10g.x11k.appendChild(x19q("div", "css23"));
        x10g.xub = x10g.x1hr.appendChild(x19q("div", "css24"));
        x10g.x1gx = x10g.x11k.appendChild(x19q("div", "css25"));
        x10g.x1gz = x10g.x1gx.appendChild(x19q("div", "css26"));
        x10g.x1hq = x10g.x11k.appendChild(x19q("div", "css27"));
        x10g.x1h1 = x10g.x1hq.appendChild(x19q("span", "css28"));
        if (cssEffects) {
          x10g.x1cr.style.transition = "background-color 0.2s ease 0s";
          x10g.x1cr.style.OTransition = "border-color 0.2s ease 0s";
        }
        x10g.x1i1.src = x0 + "img/favorites.png";
        x10g.x1i2.src = x0 + "img/lock.png";
        x10g.x11k.x1cw = x1cw;
        x10g.x11k.onmouseover = x1cv;
        x10g.x11k.onmouseout = x1cx;
        x10g.x11k.onclick = x1cy;
        x10g.x1gl = x10g.x1gk = true;
        x11u[x1cw] = x10g;
      }
      x10g.x11k.style.top = x1gb * x1cw + x1d5;
      x10g.x11k.style.height = x1gb + x1d5;
      x10g.x1hu.style.left = x1ga + x1gd + 0.3 + x1d5;
      x10g.x1hr.style.left = x1ga + x1gd + 0.3 + x1d5;
      x10g.x1gx.style.bottom = x1hc + x1d5;
      x10g.x1gx.style.height = x1hd + x1d5;
      x1g1.appendChild(x10g.x11k);
    }
  }
  function x1dh() {
    x19j = x19o("div", "css1c");
    x1g1 = x19j.appendChild(x19o("div", "css1d"));
    x1g2 = x19j.appendChild(x19o("div", "css1e"));
    x1g3 = x1g2.appendChild(x19o("div", "css1f"));
    x1fn = new x2x.x31.x1fi(x1g1);
    x1fn.xmn.x1bj.xgc(function () {
      if (!x1b5) {
        xmn.x1bj.xge();
      }
    }, this);
    x1fn.xmn.xyw.xgc(x1i3, this);
    x1fn.xmn.xyu.xgc(x1i4, this);
    x1hz(x1g9);
    x1g1.onwheel = x1ex;
    x1g1.onmousewheel = x1ey;
    x1g1.ontouchmove = x1f0;
    x1g4 = {x1i5: {}, xv4: {}, x1i6: {}, x11u: []};
    x1g4.xzm = x1g2.appendChild(x19o("div", "css1g"));
    x1g4.x1i5.xzm = x1g4.xzm.appendChild(x19o("div", "css1o"));
    x1g4.xv4.xzm = x1g4.xzm.appendChild(x19o("div", "css1h"));
    x1g4.x1i6.xzm = x1g4.xzm.appendChild(x19o("div", "css1p"));
    x1g4.xv4.name = x1g4.xv4.xzm.appendChild(x19o("div", "css1j"));
    x1g4.xv4.x8k = x1g4.xv4.xzm.appendChild(x19o("span", "css1k"));
    x1g4.xv4.x1h1 = x1g4.xv4.xzm.appendChild(x19o("span", "css1i"));
    x1g4.xv4.duration = x1g4.xv4.xzm.appendChild(x19o("div", "css1l"));
    x1g4.xv4.x1gz = x1g4.xv4.duration.appendChild(x19o("div", "css1m"));
    x1g4.xv4.x15r = x1g4.xv4.xzm.appendChild(x19o("span", "css1n"));
    for (var xd = 0; xd < x1g8; xd++) {
      var x1i7;
      if (xd < x1g5) {
        x1i7 = x1g4.x1i5.xzm;
      } else {
        x1i7 = x1g4.x1i6.xzm;
      }
      var x10g = {};
      x10g.x11k = x1i7.appendChild(x19q("div", "css1q"));
      x10g.x1h5 = x10g.x11k.appendChild(x19q("span", "css1r"));
      x10g.x1h6 = x10g.x11k.appendChild(x19q("div", "css1t"));
      x10g.x1h7 = x10g.x11k.appendChild(x19q("span", "css1s"));
      x1g4.x11u[xd] = x10g;
    }
    x1d0();
  }
  this.x1di = function () {
    if (!x1b4) {
      x1b3.appendChild(x19j);
      x1b4 = true;
    }
  };
  this.x1dj = function () {
    if (x1b4) {
      var xql = x1b3.removeChild(x19j);
      x1b4 = false;
    }
  };
  function x1i8(xy1) {
    x1fn.x1dw(xy1.xeu({xex: x1g9, xez: 1}));
  }
  var x1i9 = false;
  function x1ia(x1ib) {
    if (!x1i9) {
      x1g4.x1i5.xzm.style.display = "none";
      x1g4.xv4.xzm.style.display = "none";
      x1g4.x1i6.xzm.style.display = "none";
      x1i9 = true;
    }
    x1g4.xrw = x9m;
    x1g3.style.display = "none";
    x1g4.xzm.style.display = "";
  }
  function x1hv(x10g, x12h) {
    x10g.x1h5.innerHTML = x12h[0];
    x10g.x1h7.innerHTML = x12h[1];
    x10g.x1h6.innerHTML = x12h[2] || "--";
  }
  function x1ic(xrw) {
    var xmn = xrw.xwc(x1g8, x1g5);
    var xbx;
    var x1id = x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x88);
    for (var x1cw = 0, x1ie = 0; x1cw < x1g8; x1ie++) {
      var x16q = xmn[x1ie], x1if = x1g4.x11u[x1cw];
      if (x1ie === x1g5) {
        xbx = xch.xax(x16q.start).getDay();
        x16q = xrw.xw2(x16q, true);
        if (x16q.name) {
          x1g4.xv4.name.innerHTML = x16q.name || x1id;
          x1g4.xv4.x8k.innerHTML = x16q.x8k || x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x86);
        } else {
          x1g4.xv4.name.innerHTML = x1id;
          x1g4.xv4.x8k.innerHTML = " ";
        }
        x1g4.xv4.x1h1.innerHTML = xch.xby(x16q.start);
        x1g4.xv4.x15r.innerHTML = xch.xca(x16q.x15r) + x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x6u) + xch.xca(x16q.duration);
        var x1ig = x16q.xkb <= 1 ? x16q.xkb : 0;
        x1g4.xv4.x1gz.style.width = x1ig * 100 + "%";
      } else {
        if (typeof x16q !== x9n) {
          var x1ih = xch.xax(x16q.start).getDay();
          if (x1cw > x1g5 - 1 && x1ih !== xbx) {
            xbx = x1ih;
            if (x1cw !== x1g8 - 1) {
              x1hv(x1if, [" ", " ", [" - - - - ", xch.xc1(x16q.start), " - - - - "].join("")]);
              x1cw++;
              x1if = x1g4.x11u[x1cw];
            }
          }
          if (x1cw < x1g8) {
            x1hv(x1if, [xch.xby(x16q.start), xch.xca(x16q.duration), (x16q.name || x1id) + " " + (x16q.x8k || " ")]);
          }
          x1if.x11k.style.borderBottom = "solid 1px " + x1cs.x1ii;
        } else {
          x1hv(x1if, [" ", " ", " "]);
          x1if.x11k.style.borderBottom = "";
        }
        x1cw++;
      }
    }
    x1g4.xzm.style.display = "";
    if (x1i9) {
      x1g4.x1i5.xzm.style.display = "";
      x1g4.xv4.xzm.style.display = "";
      x1g4.x1i6.xzm.style.display = "";
      x1i9 = false;
    }
  }
  var x1ij;
  function x1ik(x10g, xrw, x1il) {
    var x1im = xrw.xvp(true);
    if (typeof x1im !== x9n) {
      x10g.xub.innerHTML = x1im.name || "--";
      x1im = xrw.xw2(x1im, true);
      x10g.x1gz.style.width = x1im.xkb * 100 + "%";
      if (!x1im.x15u()) {
        x10g.x1h1.innerHTML = xch.xca(x1im.x15r) + x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x6u) + xch.xca(x1im.duration);
      } else {
        x10g.x1h1.innerHTML = " ";
      }
      if (x1il) {
        x9q(x1ij);
        var x1in = x9p(function () {
          if (x1g4.xrw === xrw) {
            x1ic(xrw);
          }
        }, 260);
        x1ij = x1in;
      }
    }
  }
  function x1io(x1cw, x1fd, x1il) {
    var x10g = x11u[x1cw], x1ip = false;
    if (x10g.x1go !== x1fd) {
      x10g.x1go = x1fd;
      x10g.x1iq = x1fd.xxu();
      if (x10g.x1iq) {
        x10g.x1hu.style.top = x10g.x1ht + x1d5;
      } else {
        x10g.x1hu.style.top = x10g.x1hs + x1d5;
      }
      x1ip = true;
      x10g.x1h3.innerHTML = x1fd.xoy() + 1;
      x10g.title.innerHTML = x1fd.data.title;
      x1au(x10g.x1c7, x1gf, x1fd.data.pict, "");
      if (x10g.x1iq && x1fd.data.xur() || x1fd.xur()) {
        x10g.x1i2.style.display = "";
      } else {
        x10g.x1i2.style.display = "none";
      }
      if (x10g.x1iq) {
        x10g.xub.innerHTML = "...";
        x10g.x1gz.style.width = "0%";
        x10g.x1h1.innerHTML = " ";
      } else {
        x10g.xub.innerHTML = " ";
        x10g.x1gz.style.width = "0%";
        x10g.x1h1.innerHTML = " ";
        x10g.x1i1.style.display = "none";
      }
    }
    if (x1il) {
      x1cp = x1cw;
      if (x1b5) {
        x1cq(x1cw, x1ip);
      } else {
        x1cu(x1cw);
      }
    } else {
      x1ep(x1cw);
    }
    if (x10g.x1iq) {
      var xrw = x1fd.data;
      if (x2x.x30.xd3.x10y(xrw)) {
        x10g.x1i1.style.display = "";
      } else x10g.x1i1.style.display = "none";
      if (x1il) {
        x1g3.style.display = "none";
        x1g3.innerHTML = " ";
        if (x1g4.xrw !== xrw) {
          x1ia();
          x1g4.xrw = xrw;
        }
      }
      xrw.xuu(true, function (xv1) {
        if (x10g.x1iq && x10g.x1go.data === xrw) {
          if (xv1) {
            x1ik(x10g, xrw, x1il);
          } else {
            if (x1il) {
              x1g3.innerHTML = x1fd.data.xub || x1fd.data.title || " ";
              x1g4.xzm.style.display = "none";
              x1g3.style.display = "";
            }
          }
        }
      });
    } else {
      if (x1il) {
        x1g3.innerHTML = x1fd.data.xub || x1fd.data.title || " ";
        x1g4.xzm.style.display = "none";
        x1g3.style.display = "";
      }
    }
    x10g.x11k.style.display = "";
  }
  this.x1dw = function (xy1) {
    var x1ir = false;
    for (var x1cw = 0; x1cw < x1g9; x1cw++) {
      var x1fd = xy1.xyc({xex: x1g9, xez: 1, xf3: x1cw});
      if (x1fd) {
        x1io(x1cw, x1fd, xy1.xyg({xex: x1g9, xez: 1, xf3: x1cw}));
      } else {
        if (x1cw === 0) {
          x1ir = true;
        }
        x11u[x1cw].x11k.style.display = "none";
      }
    }
    x1i8(xy1);
    if (x1ir) {
      x1g3.innerHTML = " ";
      x1g4.xzm.style.display = "none";
      x1g3.style.display = "";
    }
  };
  this.xz2 = function () {};
  function x1dx() {
    xmn.xyy.xge();
  }
  function x1i3() {
    if (x1b5) {
      xmn.x1gh.xge({xfp: x1g9, xex: x1g9, xez: 1});
    }
  }
  function x1i4() {
    if (x1b5) {
      xmn.x1gg.xge({xfp: x1g9, xex: x1g9, xez: 1});
    }
  }
  function x1dy(x1dz) {
    switch (x1dz) {
      case xda.KEY_RIGHT:
      case xda.xiq + xda.KEY_RIGHT:
        x1i4();
        break;
      case xda.KEY_LEFT:
      case xda.xiq + xda.KEY_LEFT:
        x1i3();
        break;
      case xda.KEY_ENTER:
      case xda.xiq + xda.KEY_ENTER:
        xmn.xyx.xge({xex: x1g9, xez: 1});
        break;
      case xda.KEY_RETURN:
        x1dx();
        break;
      case xda.KEY_UP:
      case xda.xiq + xda.KEY_UP:
        xmn.xyw.xge({xfp: 1, xex: x1g9, xez: 1});
        break;
      case xda.KEY_DOWN:
      case xda.xiq + xda.KEY_DOWN:
        xmn.xyu.xge({xfp: 1, xex: x1g9, xez: 1});
        break;
      default:
        return false;
    }
    return true;
  }
  function focus(x1is) {
    x1b5 = true;
    if (x1cp >= 0) {
      x1cq(x1cp);
    }
    xad.xae("[streamlist] focus " + x1is);
  }
  function x1e0() {
    xad.xae("[streamlist] unfocus");
    if (x1cp >= 0) {
      x1cu(x1cp);
    }
    x1b5 = false;
  }
  this.x1e1 = {x1dy: x1dy, x1dx: x1dx, focus: focus, x1e0: x1e0};
  this.x1fh = {xex: x1g9, xez: 1};
  this.x15x = function () {
    if (x1b4) {}
  };
  x1dh();
};
x2x.x31.x1it = function (x19t) {
  var x1iu = 5, x1iv = new x2x.x31.x1g0(x19t), x1iw = new x2x.x31.x1ix(x19t), x1iy = new x2x.x31.x1e2(x19t, x1iu), x1iz = new x2x.x31.x1j0(x19t), xda = x2x.x2y.xda, x1j1 = x1iv, x1j2 = x1iy, activeElement = x1j2, x1j3 = 10, xah = this, x1b4 = false, x1b5 = false;
  function x1j4(x1j5, x18q) {
    if (activeElement !== x1j5) {
      if (x1b5) {
        activeElement.x1e1.x1e0();
      }
      activeElement = x1j5;
      if (x1b5) {
        activeElement.x1e1.focus(x18q);
      }
    }
  }
  var x1j6 = {x1j7: 0, x1j8: 1, x1j9: 3, x1ja: 4};
  this.x1jb = x1j6;
  var x1jc = false;
  this.x1jd = function (x1je) {
    switch (x1je) {
      case x1j6.x1j7:
        x1j1 = x1iv;
        x1jc = false;
        break;
      case x1j6.x1j8:
        x1j1 = x1iw;
        x1jc = false;
        break;
      case x1j6.x1j9:
        x1j1 = x1iv;
        x1jc = true;
        break;
      case x1j6.x1ja:
        x1j1 = x1iw;
        x1jc = true;
        break;
      default:
        x1j1 = x1iv;
        x1jc = false;
    }
    if (x1j2 !== x1iy || x1jc) {
      x1j2 = x1j1;
      x1j4(x1j2);
    }
  };
  var xmn = {x1bj: new x2x.xg3(this), x1bk: new x2x.xg3(this), xyu: new x2x.xg3(this), xyw: new x2x.xg3(this), xyx: new x2x.xg3(this), xyy: new x2x.xg3(this), x13i: new x2x.xg3(this), x1gg: new x2x.xg3(this), x1gh: new x2x.xg3(this), x1ej: new x2x.xg3(this), x1ek: new x2x.xg3(this), x13m: new x2x.xg3(this), x13n: new x2x.xg3(this)};
  this.xmn = xmn;
  function x1jf(xg4, x1is) {
    if (x1b5) {
      switch (xg4) {
        case x1iy:
          switch (x1is) {
            case x2x.x31.x18q.x18t:
              xad.xae("[navigator] leave focus");
              xmn.x1bk.xge(x1is);
              break;
            case x2x.x31.x18q.x18u:
              break;
          }
          break;
        default:
          xad.xae("[navigator] try leave focus");
      }
    }
  }
  function x1jg(xg4) {
    if (!x1b5 && xg4 === x1j2) {
      xad.xae("[navigator] captureinput");
      xmn.x1bj.xge();
    }
  }
  function x1jh(xg4, params) {
    xmn.xyu.xge(params);
  }
  function x1ji(xg4, params) {
    xmn.xyw.xge(params);
  }
  function x1jj(xg4, params) {
    var xyp = x2x.x30.xd3.x14d(), x120 = xyp.xy7();
    var xev;
    if (xyp.xwy === x2x.x30.xwt.xwz.xx0 && x120.xwy === x2x.x30.xwt.xwz.xx1) {
      xev = x1j1.x1fh;
    } else {
      xev = params;
    }
    xmn.xyx.xge(xev);
  }
  function x1jk() {
    x1dx();
  }
  function x1jl(xg4, params) {
    if (xg4 === x1j2) {
      xmn.x13i.xge(params);
    }
  }
  function x1jm(xg4, params) {
    xmn.x1ej.xge(params);
  }
  function x1jn(xg4, params) {
    xmn.x1ek.xge(params);
  }
  function x1jo(xg4, params) {
    xmn.x1gg.xge(params);
  }
  function x1jp(xg4, params) {
    xmn.x1gh.xge(params);
  }
  this.x1jq = function () {
    return x1j2.x1fh;
  };
  x1iy.xmn.x1bk.xgc(x1jf);
  x1iy.xmn.x1bj.xgc(x1jg);
  x1iy.xmn.xyu.xgc(x1jh);
  x1iy.xmn.xyw.xgc(x1ji);
  x1iy.xmn.xyx.xgc(x1jj);
  x1iy.xmn.xyy.xgc(x1jk);
  x1iy.xmn.x13i.xgc(x1jl);
  x1iy.xmn.x1ej.xgc(x1jm);
  x1iy.xmn.x1ek.xgc(x1jn);
  x1iv.xmn.x1bk.xgc(x1jf);
  x1iv.xmn.x1bj.xgc(x1jg);
  x1iv.xmn.xyu.xgc(x1jh);
  x1iv.xmn.xyw.xgc(x1ji);
  x1iv.xmn.xyx.xgc(x1jj);
  x1iv.xmn.x13i.xgc(x1jl);
  x1iv.xmn.x1ej.xgc(x1jm);
  x1iv.xmn.x1ek.xgc(x1jn);
  x1iv.xmn.x1gg.xgc(x1jo);
  x1iv.xmn.x1gh.xgc(x1jp);
  x1iw.xmn.x1bk.xgc(x1jf);
  x1iw.xmn.x1bj.xgc(x1jg);
  x1iw.xmn.xyu.xgc(x1jh);
  x1iw.xmn.xyw.xgc(x1ji);
  x1iw.xmn.xyx.xgc(x1jj);
  x1iw.xmn.x13i.xgc(x1jl);
  x1iw.xmn.x1ej.xgc(x1jm);
  x1iw.xmn.x1ek.xgc(x1jn);
  x1iw.xmn.x1gg.xgc(x1jo);
  x1iw.xmn.x1gh.xgc(x1jp);
  function x1jr(x1dz) {
    switch (x1dz) {
      case xda.KEY_RETURN:
        x1dx();
        break;
      default:
        return activeElement.x1e1.x1dy(x1dz);
    }
    return true;
  }
  function x1dx() {
    var xev;
    var x1js = x2x.x30.xd3.x14d().xyb().xwy;
    if (x1js === x2x.x30.xwt.xwz.xx6 || x1js === x2x.x30.xwt.xwz.xx0 || x1jc) {
      xev = x1iy.x1fh;
    } else {
      xev = x1j1.x1fh;
    }
    xmn.xyy.xge(xev);
  }
  this.x1jt = function () {
    if (x1j2 === x1j1) {
      xad.xae("[navigator] focus next");
      xmn.x1bk.xge(x2x.x31.x18q.x18u);
    }
  };
  this.x1ju = function () {
    if (x1j2 === x1j1) {
      xad.xae("[navigator] focus previous");
      xmn.x1bk.xge(x2x.x31.x18q.x18t);
    }
  };
  function focus(x1is) {
    xad.xae("[navigator] focus " + x1is);
    if (activeElement === x1j1) {
      var xyp = x2x.x30.xd3.x14d();
      switch (x1is) {
        case x2x.x31.x18q.x18t:
          if (xyp.xxy()) {
            xmn.x13m.xge(x1j1.x1fh);
          }
          break;
        case x2x.x31.x18q.x18u:
          if (xyp.xxz()) {
            xmn.x13n.xge(x1j1.x1fh);
          }
          break;
      }
    }
    x1b5 = true;
    activeElement.x1e1.focus(x1is);
  }
  function x1e0() {
    x1b5 = false;
    activeElement.x1e1.x1e0();
    xad.xae("[navigator] unfocus");
  }
  this.x1d0 = function () {
    x1iv.x1d0();
    x1iw.x1d0();
    x1iy.x1d0();
  };
  this.x1d6 = function (xjn) {
    x1iv.x1d6(xjn);
    x1iw.x1d6(xjn);
    x1iy.x1d6(xjn);
  };
  this.x1hw = function (x1hx) {
    x1iv.x1hw(x1hx);
    x1iw.x1hw(x1hx);
  };
  this.x1e1 = {x1dy: x1jr, x1dx: x1dx, focus: focus, x1e0: x1e0};
  this.x1di = function () {
    if (!x1b4) {
      x1dw();
      x1b4 = true;
    }
  };
  this.x1dj = function () {
    if (x1b4) {
      x1iy.x1dj();
      x1j1.x1dj();
      x1iz.x1dj();
      x1b4 = false;
    }
  };
  this.xz2 = function () {};
  function x1dw() {
    var x1jv = x2x.x30.xd3.x14d();
    if (x1jc) {
      x1j1.x1dw(x1jv);
      x1j1.x1di();
      x1j2 = x1j1;
      x1j4(x1j2);
      x1iy.x1dj();
      x1jw = x1j3;
    } else {
      if (x1jv.xwy === x2x.x30.xwt.xwz.xx6) {
        x1iy.x1fc(x1jv);
        x1j2 = x1iy;
        x1j4(x1j2);
        x1j1.x1dj();
        x1iy.x1di();
      } else if ((x1jv.xwy === x2x.x30.xwt.xwz.xx0 || x1jv.xwy === x2x.x30.xwt.xwz.xx9) && x1jv.xy7().xwy === x2x.x30.xwt.xwz.xx1) {
        x1iy.x1fc(x1jv);
        x1j2 = x1iy;
        x1j4(x1j2);
        x1iy.x1di();
        x1j1.x1dw(x1jv.xy7());
        x1j1.x1di();
      } else {
        x1j1.x1dw(x1jv);
        x1j1.x1di();
        x1j2 = x1j1;
        x1j4(x1j2);
        x1iy.x1dj();
        x1jw = x1j3;
      }
    }
  }
  this.x1dw = x1dw;
  var x1jw = x1j3;
  this.x15x = function () {
    if (x1b4) {
      if (!--x1jw) {
        x1jw = x1j3;
        x1dw();
        x1j1.x15x();
      }
    }
  };
};
x2x.x31.x1ix = function (x19t) {
  var _xg = xaa._xg, xah = this, x1cs = x2x.x31.x1cs, xda = x2x.x2y.xda, xch = x2x.x2z.xch, xd3, x1b3 = x19t, x1b4 = false, x1b5 = false, x19j = x19o("div", "css29"), x1fn, x1d5 = "em", x1jx = 6, x1jy = 3, x1ea = 90.6 / x1jx, x1gb = 42 / x1jy, x1bh = 0.4, x1jz = 0, x1bg = 0.4, x1k0 = [], x11u = [], x1k1 = {x1ak: (x1ea - 0.8) / 16 * 9, x1al: x1ea - 0.8, x1aq: 0.4, x1ap: 0.2}, cssEffects = xt.cssEffects, xmn = {x1bj: new x2x.xg3(this), x1bk: new x2x.xg3(this), xyu: new x2x.xg3(this), xyw: new x2x.xg3(this), xyx: new x2x.xg3(this), xyy: new x2x.xg3(this), x13i: new x2x.xg3(this), x1gg: new x2x.xg3(this), x1gh: new x2x.xg3(this), x1ej: new x2x.xg3(this), x1ek: new x2x.xg3(this), x1gi: new x2x.xg3(this)}, x1cp = -1, x1ec = 19, x1hh = 1;
  this.xmn = xmn;
  this.x1di = function () {
    if (!x1b4) {
      x1b3.appendChild(x19j);
      x1b4 = true;
    }
  };
  this.x1dj = function () {
    if (x1b4) {
      var xql = x1b3.removeChild(x19j);
      x1b4 = false;
    }
  };
  function x1cq(x10g, x1gj) {
    if (!x10g.x1gl || !x10g.x1gk || x1gj) {
      x10g.title.style.color = x1cs.x1gm;
      x10g.x1cr.style.background = x1cs.x1gn;
      if (cssEffects) {
        x10g.x11k.style.transform = "scale(1.03)";
        x10g.x11k.style.WebkitTransform = "scale(1.03)";
      }
      if (xdo(x10g.x1go.data.title) > x1ec) {
        x10g.title.innerHTML = "<marquee behavior='alternate' scrollamount='1' loop='2'>" + x10g.x1go.data.title + "</marquee>";
      }
      x10g.x1gl = x10g.x1gk = true;
    }
  }
  function x1cu(x10g) {
    if (x10g.x1gl) {
      x10g.title.style.color = x1cs.x1gm;
      x10g.x1cr.style.background = x1cs.x1gt;
      if (cssEffects) {
        x10g.x11k.style.transform = "scale(1.03)";
        x10g.x11k.style.WebkitTransform = "scale(1.03)";
      }
      if (xdo(x10g.x1go.data.title) > x1ec) {
        x10g.title.innerHTML = x10g.x1go.data.title;
      }
      x10g.x1gl = !x10g.x1gl;
    }
  }
  function x1ep(x10g) {
    if (x10g.x1gk) {
      x1cu(x10g);
      x10g.title.style.color = x1cs.x1gp;
      x10g.x1cr.style.background = x1cs.x1gt;
      if (cssEffects) {
        x10g.x11k.style.transform = "scale(1)";
        x10g.x11k.style.WebkitTransform = "scale(1)";
      }
      x10g.x1gk = !x10g.x1gk;
    }
  }
  function x1cv() {
    if (!x1b5) {
      xmn.x1bj.xge();
    } else {
      if (this.x1cw !== x1cp) {
        xmn.x13i.xge({xex: x1jx * x1jy, xez: x1jx, xf3: this.x1cw});
      } else {
        x1cq(x11u[this.x1cw]);
      }
    }
  }
  function x1cx() {}
  function x1k2() {
    if (x1b5) {
      if (this.x1cw !== x1cp) {
        xmn.x13i.xge({xex: x1jx * x1jy, xez: x1jx, xf3: this.x1cw});
      }
      xmn.xyx.xge({xex: x1jx * x1jy, xez: x1jx});
    } else {
      xmn.x1bj.xge();
    }
  }
  function x1gq() {
    if (x1b5) {
      xmn.x1ek.xge({xex: x1jx * x1jy, xez: x1jx, xfr: true, xfp: x1jx});
    }
  }
  function x1gr() {
    if (x1b5) {
      xmn.x1ej.xge({xex: x1jx * x1jy, xez: x1jx, xfr: true, xfp: x1jx});
    }
  }
  function x1ex(x16o) {
    if (x16o.deltaY > 0) {
      x1gr();
    } else {
      x1gq();
    }
  }
  function x1ey(x16o) {
    if (x16o.wheelDelta < 0) {
      x1gr();
    } else {
      x1gq();
    }
  }
  var x1gs = 0;
  function x1f0(x16o) {
    x16o.preventDefault();
    x16o.stopPropagation();
    var top = x16o.touches[0].pageY, xf9 = x1gs - top;
    x1gs = top;
    if (x1gs > 0) {
      if (xf9 > 15) {
        x1gr();
      } else if (xf9 < 0 && xf9 < -15) {
        x1gq();
      }
    }
  }
  function x1hw(x1hx) {
    xad.xae("grid apply size " + x1hx);
    x1hy();
    switch (x1hx) {
      case x2x.x31.x18w.x18x:
        x1jx = 7;
        x1jy = 4;
        break;
      case x2x.x31.x18w.x18z:
        x1jx = 5;
        x1jy = 3;
        break;
      default:
        x1jx = 6;
        x1jy = 3;
    }
    x1ea = 90.6 / x1jx;
    x1gb = 42 / x1jy;
    x1dg();
    x1d6(x1hh);
    x1d0();
  }
  this.x1hw = x1hw;
  function x1hy() {
    for (var x1k3 = 0; x1k3 < x1jy; x1k3++) {
      var x1k4 = x1k0[x1k3];
      for (var x1k5 = 0; x1k5 < x1jx; x1k5++) {
        var x10g = x11u[x1k3 * x1jx + x1k5];
        x1au(x10g.x1c7, x1k1, "", "");
        x10g.x1go = x9m;
        x1k4.removeChild(x11u[x1k3 * x1jx + x1k5].x11k);
      }
    }
  }
  function x1dg() {
    if (x2x.x31.x197.x19h) {
      x1bg = 1;
    }
    for (var x1k3 = 0; x1k3 < x1jy; x1k3++) {
      var x1k4 = x1k0[x1k3];
      if (!x1k4) {
        x1k4 = x19q("div", "css2a");
        x1k0[x1k3] = x1k4;
      }
      x1k4.style.top = x1jz + x1k3 * (x1gb + x1bh) + x1d5;
      for (var x1k5 = 0; x1k5 < x1jx; x1k5++) {
        var x1cw = x1k3 * x1jx + x1k5, x10g = x11u[x1cw];
        if (!x10g) {
          x10g = {};
          x10g.x11k = x19q("div", "css2b");
          x10g.x1cr = x10g.x11k.appendChild(x19q("div", "css2c"));
          x10g.x1c7 = x10g.x11k.appendChild(x19q("img", "css2d"));
          x10g.duration = x10g.x11k.appendChild(x19q("div", "css2l"));
          x10g.x1gz = x10g.duration.appendChild(x19q("div", "css2m"));
          x10g.x1h3 = x10g.x11k.appendChild(x19q("span", "css2e"));
          x10g.x1i1 = x10g.x11k.appendChild(x19q("img", "css2f"));
          x10g.x1i2 = x10g.x11k.appendChild(x19q("img", "css2g"));
          x10g.x1hu = x10g.x11k.appendChild(x19q("div", "css2h"));
          x10g.title = x10g.x1hu.appendChild(x19q("div", "css2i"));
          x10g.x1hr = x10g.x11k.appendChild(x19q("div", "css2j"));
          x10g.xub = x10g.x1hr.appendChild(x19q("div", "css2k"));
          x10g.x1hq = x10g.x11k.appendChild(x19q("div", "css2n"));
          x10g.x1h1 = x10g.x1hq.appendChild(x19q("span", "css2o"));
          x10g.x1i1.src = x0 + "img/favorites.png";
          x10g.x1i2.src = x0 + "img/lock.png";
          x10g.x11k.x1cw = x1k3 * x1jx + x1k5;
          x11u[x1cw] = x10g;
          x10g.x11k.onmouseover = x1cv;
          x10g.x11k.onclick = x1k2;
          if (cssEffects) {
            x10g.x1cr.style.transition = "background-color 0.2s ease 0s";
            x10g.x1cr.style.OTransition = "background-color 0.2s ease 0s";
          }
        }
        x10g.x11k.style.left = x1bg + x1k5 * (x1ea + x1bh) + x1d5;
        x10g.x11k.style.width = x1ea + x1d5;
        x10g.x11k.style.height = x1gb + x1d5;
        x10g.x1gl = x10g.x1gk = true;
        x1k4.appendChild(x10g.x11k);
      }
      x19j.appendChild(x1k4);
    }
  }
  function x1d0() {
    var x1gu = x1cs.x1gv + " 1px 0 0px, " + x1cs.x1gv + " 0 1px 0px, " + x1cs.x1gv + " -1px 0 0px, " + x1cs.x1gv + " 0 -1px 0px";
    for (var x1cw = 0; x1cw < x1jy * x1jx; x1cw++) {
      x11u[x1cw].x1gl = x11u[x1cw].x1gk = true;
      x11u[x1cw].x1cr.style.background = x1cs.x1gt;
      x11u[x1cw].xub.style.color = x1cs.x1gw;
      x11u[x1cw].x1h1.style.color = x1cs.x1h2;
      x11u[x1cw].duration.style.background = x1cs.x1gy;
      x11u[x1cw].x1gz.style.background = x1cs.x1h0;
      x11u[x1cw].x1h3.style.color = x1cs.x1h4;
      x11u[x1cw].x1h3.style.textShadow = x1gu;
    }
    x1fn.x1d0();
  }
  this.x1d0 = x1d0;
  var x1h8 = 1.5, x1h9 = 1.2, x1ha = 1.2, x1k6 = 0.4, x1hb = 0.1, x1k7 = 0.5;
  function x1d6(xjn) {
    x1hh = xjn;
    var x1hl = x1ha * xjn, x1hk = x1h9 * xjn, x1hj = x1h8 * xjn, x1hn = x1k6 + x1hl + x1hb, x1k8 = x1hn + x1hk + x1hb, x1k9 = x1k8 + x1hj + x1hb;
    for (var x1cw = 0; x1cw < x1jy * x1jx; x1cw++) {
      x11u[x1cw].title.style.fontSize = x1hj + x1d5;
      x11u[x1cw].xub.style.fontSize = x1hk + x1d5;
      x11u[x1cw].x1h1.style.fontSize = x1hl + x1d5;
      x11u[x1cw].x1hr.style.bottom = x1hn + x1d5;
      x11u[x1cw].x1hu.style.bottom = x1k8 + x1d5;
      x11u[x1cw].x1i1.style.bottom = x1k9 + x1d5;
    }
    if (xjn < 1) {
      xjn = 1;
    }
    var x1ka = x1gb - (x1k6 + x1ha * xjn + x1hb + x1h9 * xjn + x1hb + x1h8 * xjn + x1k7) - 0.2, x1kb = x1ka / 9 * 16;
    if (x1kb >= x1ea) {
      x1kb = x1ea - 0.2;
      x1ka = x1kb / 16 * 9;
    }
    x1k1 = {x1ak: x1ka, x1al: x1kb, x1aq: (x1ea - x1kb) / 2, x1ap: 0.2};
    x1ec = 18 / xjn;
  }
  this.x1d6 = x1d6;
  function x1dh() {
    x1dg();
    x1fn = new x2x.x31.x1fi(x19j);
    x1fn.xmn.x1bj.xgc(function () {
      if (!x1b5) {
        xmn.x1bj.xge();
      }
    }, this);
    x1fn.xmn.xyw.xgc(x1i3, this);
    x1fn.xmn.xyu.xgc(x1i4, this);
    x19j.onwheel = x1ex;
    x19j.onmousewheel = x1ey;
    x19j.ontouchmove = x1f0;
    x1d0();
  }
  function x1ik(x10g, xrw) {
    var x1im = xrw.xvp(true);
    if (typeof x1im !== x9n) {
      x10g.xub.innerHTML = x1im.name || "--";
      x1im = xrw.xw2(x1im, true);
      x10g.x1gz.style.width = x1im.xkb * 100 + "%";
      if (!x1im.x15u()) {
        x10g.x1h1.innerHTML = xch.xca(x1im.x15r) + x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x6u) + xch.xca(x1im.duration);
      } else {
        x10g.x1h1.innerHTML = " ";
      }
    }
  }
  function x1io(x1cw, x1fd, x1il) {
    var x10g = x11u[x1cw], x1ip = false;
    if (x10g.x1go !== x1fd) {
      x10g.x1go = x1fd;
      x1ip = true;
      x10g.x1h3.innerHTML = x1fd.xoy() + 1;
      if (x1fd.data) {
        x10g.title.innerHTML = x1fd.data.title || "---";
        x1au(x10g.x1c7, x1k1, x1fd.data.pict, "");
      } else {
        x10g.title.innerHTML = "---";
        x10g.x1c7.src = "";
      }
      if (x1fd.xxu() && x1fd.data.xur() || x1fd.xur()) {
        x10g.x1i2.style.display = "";
      } else {
        x10g.x1i2.style.display = "none";
      }
      if (x1fd.xxu()) {
        x10g.xub.innerHTML = "...";
        x10g.x1h1.innerHTML = "--";
        x10g.x1gz.style.width = "0%";
        x10g.x1h1.innerHTML = " ";
      } else {
        x10g.xub.innerHTML = " ";
        x10g.x1gz.style.width = "0%";
        x10g.x1h1.innerHTML = " ";
        x10g.x1i1.style.display = "none";
      }
    }
    if (x1fd.xxu()) {
      var xrw = x1fd.data;
      if (x2x.x30.xd3.x10y(xrw)) {
        x10g.x1i1.style.display = "";
      } else x10g.x1i1.style.display = "none";
      xrw.xuu(true, function (xv1) {
        if (!x10g.x1go) return;
        if (x10g.x1go.xxu() && x10g.x1go.data === xrw) {
          x1ik(x10g, xrw);
        }
      });
    }
    if (x1il) {
      if (x1b5) {
        x1cq(x10g, x1ip);
      } else {
        x1cu(x10g);
      }
      x1cp = x1cw;
    } else {
      x1ep(x10g);
    }
    x10g.x11k.style.display = "";
  }
  function x1kc(x1k3, xy1) {
    var xfc = x1k3 * x1jx;
    for (var x1k5 = 0; x1k5 < x1jx; x1k5++) {
      var x1cw = xfc + x1k5, x1fd = xy1.xyc({xex: x1jx * x1jy, xez: x1jx, xf3: x1cw});
      if (x1fd) {
        x1io(x1cw, x1fd, xy1.xyg({xex: x1jx * x1jy, xez: x1jx, xf3: x1cw}));
      } else {
        x11u[x1cw].x11k.style.display = "none";
      }
    }
  }
  function x1i8(xy1) {
    x1fn.x1dw(xy1.xeu({xex: x1jx * x1jy, xez: x1jx}));
  }
  this.x1dw = function (xy1) {
    for (var x1k3 = 0; x1k3 < x1jy; x1k3++) {
      x1kc(x1k3, xy1);
    }
    x1i8(xy1);
  };
  this.xz2 = function () {};
  function x1dx() {
    xmn.xyy.xge({xex: x1jx * x1jy, xez: x1jx});
  }
  function x1i3() {
    if (x1b5) {
      xmn.x1gh.xge({xfp: x1jx * x1jy, xex: x1jx * x1jy, xez: x1jx});
    }
  }
  function x1i4() {
    if (x1b5) {
      xmn.x1gg.xge({xfp: x1jx * x1jy, xex: x1jx * x1jy, xez: x1jx});
    }
  }
  function x1dy(x1dz) {
    switch (x1dz) {
      case xda.KEY_RIGHT:
      case xda.xiq + xda.KEY_RIGHT:
        xmn.xyu.xge({xfp: 1, xex: x1jx * x1jy, xez: x1jx});
        break;
      case xda.KEY_LEFT:
      case xda.xiq + xda.KEY_LEFT:
        xmn.xyw.xge({xfp: 1, xex: x1jx * x1jy, xez: x1jx});
        break;
      case xda.KEY_UP:
      case xda.xiq + xda.KEY_UP:
        xmn.xyw.xge({xfp: x1jx, xex: x1jx * x1jy, xez: x1jx});
        break;
      case xda.KEY_DOWN:
      case xda.xiq + xda.KEY_DOWN:
        xmn.xyu.xge({xfp: x1jx, xex: x1jx * x1jy, xez: x1jx});
        break;
      case xda.KEY_ENTER:
      case xda.xiq + xda.KEY_ENTER:
        xmn.xyx.xge({xex: x1jx * x1jy, xez: x1jx});
        break;
      case xda.KEY_RETURN:
        x1dx();
        break;
      default:
        return false;
    }
    return true;
  }
  function focus() {
    x1b5 = true;
    if (x1cp >= 0) {
      x1cq(x11u[x1cp]);
    }
  }
  function x1e0() {
    if (x1cp >= 0) {
      x1cu(x11u[x1cp]);
    }
    x1b5 = false;
  }
  this.x1e1 = {x1dy: x1dy, x1dx: x1dx, focus: focus, x1e0: x1e0};
  this.x1fh = {xex: x1jx * x1jy, xez: x1jx};
  this.x15x = function () {
    if (x1b4) {}
  };
  x1dh();
};
x2x.x31.x1kd = function (x19t) {
  var x1b3 = x19t, xah = this, x1cs = x2x.x31.x1cs, xda = x2x.x2y.xda, xch = x2x.x2z.xch, x1b4 = false, x1b5 = false, x1d5 = "em", x1e8 = -1, x1e6 = 96, x1ke = 42, x1bh = 0.2, x1kf = xdr ? 6 : 6, x1kg = 30, x1kh = 180, x1ki = x1kf, x1kj = 10, x1kk = 20, x1kl = x1kj, x1dm, x1km, x1kn = 700, x19j = x19o("div", "css2p"), x1ko = x19o("div", "css36"), x1kp = false, x1kq, x1kr, x11u = [], x1cp = 0, x1ee, x1ks, x1gz, x1kt, navigator, xmn = {x1bj: new x2x.xg3(this), x1bk: new x2x.xg3(this), x1ku: new x2x.xg3(this), play: new x2x.xg3(this), pause: new x2x.xg3(this), x1kv: new x2x.xg3(this), stop: new x2x.xg3(this), x1kw: new x2x.xg3(this), x1kx: new x2x.xg3(this), x1ky: new x2x.xg3(this), x1kz: new x2x.xg3(this), x1l0: new x2x.xg3(this), x1bu: new x2x.xg3(this), x1l1: new x2x.xg3(this), x1l2: new x2x.xg3(this)}, x1l3 = {x1em: "[]", xgq: xmn.stop}, x1l4 = {x1em: ">||", x1c7: "playpause", xgq: xmn.x1kv}, x1l5 = {x1em: "\\<\\<", x1c7: "rw", xgq: xmn.x1l0}, x1l6 = {x1em: ">>", x1c7: "fw", xgq: xmn.x1kz}, x1ci = {x1em: "=", x1c7: "playlist", xgq: xmn.x1ku}, x1l7 = [x1ci, x1l4], x1co = x1l7, x1be, x1cn = [], xgs = {}, state;
  xgs.xb9 = new x2x.xgf(xa8, function () {
    return true;
  }, xa8, "NONE", "MC");
  xgs.x1l8 = new x2x.xgf(function () {
    x1b3.appendChild(x1ko);
    xmn.x1l2.xge(this);
  }, function () {
    x1ko = x1b3.removeChild(x1ko);
    return true;
  }, function () {}, "IDLE", "MC");
  xgs.x1l9 = new x2x.xgf(function () {
    x1ki = x1kf;
    x1la(x1dm);
    x1kr.style.bottom = "0em";
    if (x1b5) {
      if (x11u.length > x1cp) {
        x1cq(x1cp);
      } else {
        x1gz.focus();
      }
    }
    xmn.x1l2.xge(this);
  }, function () {
    if (x11u.length > x1cp) {
      x1cu(x1cp);
    } else {
      if (x1gz.x1il()) {
        x1gz.x1lb(false);
      }
      x1gz.x1e0();
    }
    x1kr.style.bottom = "-5.2em";
    x1kt.x1dj();
    return true;
  }, function () {
    x1ki = x1kf;
  }, "ACTIVE", "MC");
  xgs.x1lc = new x2x.xgf(function () {
    x1ki = x1kg;
    if (x1gz.x1il()) {
      x1gz.x1lb(false);
    }
    x1kt.x1di(x1dm);
    x1kt.focus();
    xmn.x1l2.xge(this);
  }, function () {
    x1kt.x1e0();
    x1kt.x1dj();
    return true;
  }, function () {
    x1ki = x1kg;
    x1kt.x1di(x1dm);
    return true;
  }, "EVENTDETAIL", "MC");
  xgs.x1ld = new x2x.xgf(function () {
    x1ki = x1kh;
    navigator.x1di(x1dm);
    navigator.x1e1.focus(x2x.x31.x18q.x18v);
    xmn.x1l2.xge(this);
  }, function () {
    navigator.x1e1.x1e0();
    navigator.x1dj();
    return true;
  }, function () {
    x1ki = x1kh;
    return true;
  }, "NAVIGATOR", "MC");
  xgs.xb9.xgo(xgs.x1l9);
  xgs.x1l9.xgo(xgs.x1l8);
  xgs.x1l9.xgo(xgs.x1lc);
  xgs.x1l9.xgo(xgs.x1ld);
  xgs.x1l8.xgo(xgs.x1l9);
  xgs.x1l8.xgo(xgs.x1ld);
  xgs.x1lc.xgo(xgs.x1l8);
  xgs.x1lc.xgo(xgs.x1l9);
  xgs.x1ld.xgo(xgs.x1l9);
  xgs.x1ld.xgo(xgs.x1l8);
  xgs.x1l8.xgo(xgs.xb9);
  state = xgs.xb9;
  this.xmn = xmn;
  this.xgs = xgs;
  this.xmn.x1ku.xgc(function () {
    state = state.xgt(xgs.x1ld);
  }, this);
  var x1le = function (x19t) {
    var duration = x19t.appendChild(x19o("div", "css2w")), x1gz = duration.appendChild(x19o("div", "css2y")), x1lf = duration.appendChild(x19o("div", "css30")), x1lg = x19t.appendChild(x19o("div", "css2z")), x1lh = duration.appendChild(x19o("div", "css32")), x1li = x1lh.appendChild(x19o("div", "css33")), x1lj = x1lh.appendChild(x19o("div", "css34")), x1lk = x1lj.appendChild(x19o("span", "css35")), x1ll = x19t.appendChild(x19o("div", "css2v")), x1gl = false, x1gk = false, x1lm, x1ln, x1lo = 0, x1lp = 1.7, x1lq = 1, xmn = {x1bj: new x2x.xg3(this), x1bk: new x2x.xg3(this), x1lr: new x2x.xg3(this), x1ky: new x2x.xg3(this)};
    x1lh.style.display = "none";
    x1li.style.backgroundImage = "url(" + x0 + "img/mc/cursort.png)";
    this.xmn = xmn;
    x1lf.style.display = "none";
    function x1ls() {
      x1lh.style.left = x1ln - x1lp + "%";
      x1lk.innerHTML = xch.xc9(x1ln * x1lo / 100 >> 0);
      x1lh.style.display = "";
      xmn.x1lr.xge();
    }
    function x1lt() {
      if (!x1gk) {
        x1lh.style.display = "none";
      }
    }
    function x1lu(x1lv) {
      xmn.x1bj.xge();
    }
    function x1lw(x1lv) {
      xmn.x1bk.xge();
    }
    function x1lx(x1lv) {
      if (x1gk) {
        var x1ly = typeof x1lv.offsetX === x9n ? x1lv.layerX : x1lv.offsetX;
        var x1lz = x1ll.offsetWidth;
        if (x1ly < 0) x1ly = 0;
        if (x1ly > x1lz) x1ly = x1lz;
        x1ln = x1ly / x1lz * 100;
        x1ls();
        x1lf.style.left = x1ln - x1lp + "%";
      }
    }
    function x1m0(x1lv) {
      var x1m1 = typeof x1lv.offsetX === x9n ? x1lv.layerX : x1lv.offsetX, x1ln = x1m1 / x1ll.offsetWidth, x1m2 = x9v.abs(x1ln * 100 - x1lm);
      if (x1m2 >= x1lq) {
        xmn.x1ky.xge({xrw: x1dm, position: x1ln});
      }
    }
    x1ll.onclick = x1m0;
    x1ll.onmouseover = x1lu;
    x1ll.onmouseout = x1lw;
    x1ll.onmousemove = x1lx;
    this.x1d0 = function () {
      duration.style.background = x1cs.x1gy;
      x1gz.style.background = x1cs.x1h0;
      x1lf.style.background = x1cs.x1ct;
      navigator.x1d0();
    };
    this.x1d6 = function (xjn) {
      x1lg.style.fontSize = 1.6 * xjn + "em";
      x1lg.style.top = 1.7 - xjn * 1.6 / 2 + "em";
      x1lk.style.fontSize = 1.6 * xjn + "em";
      x1lj.style.height = 1.8 * xjn + "em";
      x1lj.style.width = 7 * xjn + "em";
      navigator.x1d6(xjn);
      x1kt.x1d6(xjn);
    };
    this.x1di = function () {};
    this.x1dj = function () {};
    this.x1m3 = function () {
      return x1gl;
    };
    this.x1il = function () {
      return x1gk;
    };
    this.focus = function (x1is) {
      x1gl = true;
      x1lf.style.left = x1lm - x1lp + "%";
      x1lf.style.display = "";
    };
    this.x1e0 = function () {
      x1gl = false;
      x1gk = false;
      x1lf.style.display = "none";
      x1lt();
    };
    this.x1lb = function (x1m4) {
      if (!x1gk) {
        x1gk = true;
        duration.id = "css2x";
        x1ln = x1lm;
        x1lf.style.left = x1ln - x1lp + "%";
        x1ls();
      } else {
        x1gk = false;
        x1lf.style.left = x1lm - x1lp + "%";
        duration.id = "css2w";
        x1lt();
        if (x1m4) {
          x1m5();
          var x1m2 = x9v.abs(x1ln - x1lm);
          if (x1m2 >= x1lq / 3) {
            xad.xae("seek from :" + x1lm + " to:" + x1ln);
            x1lm = x1ln;
            if (x1lm > 100) {
              x1lm = 100;
            }
            if (x1lm < 0) {
              x1lm = 0;
            }
            x1gz.style.width = x1lm + "%";
            xmn.x1ky.xge({xrw: x1dm, position: x1ln / 100});
          }
        }
      }
    };
    function x1m6() {
      if (x1lo) {
        if (x1lo > 180) {
          x1lq = 30 / x1lo * 100;
        } else {
          x1lq = 10 / x1lo * 100;
        }
      } else {
        x1lq = 0;
      }
    }
    var x1m7;
    function x1m8() {
      x1m7 = x1ln;
      if (x1m7 > 100) {
        x1m7 = 100;
      }
      if (x1m7 < 0) {
        x1m7 = 0;
      }
      x1lf.style.left = x1m7 - x1lp + "%";
      x1lh.style.left = x1m7 - x1lp + "%";
      x1lk.innerHTML = xch.xc9(x1ln * x1lo / 100 >> 0);
    }
    var x1m9, x1ma = 0, x1mb, x1m5 = function () {
      x1m9 = x1ma = 0;
    }, x1mc = x1kn + 300;
    this.x1md = function () {
      x1m6();
      x1m9++;
      x1ma = 0;
      var x1me = x1lq;
      if (x1m9 >= 20) {
        x1me = x1lq * 4;
      } else if (x1m9 >= 10) {
        x1me = x1lq * 2;
      }
      x9q(x1mb);
      var x1mf = x9p(x1m5, x1mc);
      x1mb = x1mf;
      x1ln += x1me;
      if (x1ln > 99.9) {
        if (!x1dm.xut()) {
          x1ln = 99.9;
        } else {
          if (x1ln > 100 + x1lq * 6) {
            x1ln = 100 + x1lq * 6;
          }
        }
      }
      x1m8(x1m7);
    };
    this.x1mg = function () {
      x1m6();
      x1ma++;
      x1m9 = 0;
      var x1me = x1lq;
      if (x1ma >= 20) {
        x1me = x1lq * 4;
      } else if (x1ma >= 10) {
        x1me = x1lq * 2;
      }
      x9q(x1mb);
      var x1mf = x9p(x1m5, x1mc);
      x1mb = x1mf;
      x1ln -= x1me;
      if (x1ln < 0) {
        if (!x1dm.xut()) {
          x1ln = 0;
        } else if (x1ln < -1 * x1lq * 6) {
          x1ln = -1 * x1lq * 6;
        }
      }
      x1m8(x1m7);
    };
    this.clear = function () {
      x1m5();
      x1gz.style.width = "0%";
      x1lg.innerHTML = "--";
      x1lo = 0;
      x1lm = 0;
      x1lf.style.left = 0 - x1lp + "%";
    };
    this.x1mh = function (x1mi) {
      x1lo = x1mi.x1mj;
      x1lm = x1mi.x1mk / x1mi.x1mj * 100;
      if (x1lm > 100) {
        x1lm = 100;
      }
      x1gz.style.width = x1lm + "%";
      x1lg.innerHTML = [xch.xc9(x1mi.x1mk), "/", xch.xc9(x1mi.x1mj)].join("");
      if (x1gl && !x1gk) {
        x1lf.style.left = x1lm - 1 + "%";
      }
    };
    this.x1ml = function (duration, x15r) {
      x1lo = duration / 1e3;
      x1lm = x15r / duration * 100;
      if (x1lm > 100) {
        x1lm = 100;
      }
      x1gz.style.width = x1lm + "%";
      x1lg.innerHTML = [xch.xcb(x15r / 1e3), x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x6u), xch.xcb(x1lo)].join("");
      if (x1gl && !x1gk) {
        x1lf.style.left = x1lm - 1 + "%";
      }
    };
  };
  function x1d9(xf6) {
    if (!x1cn[xf6]) {
      var x1da = x19q("div", "css2r"), x1db = x1da.appendChild(x19q("div", "css2s")), x1mm = x1da.appendChild(x19q("span", "css2t")), x1dc = x1da.appendChild(x19q("img", "css2u"));
      x1cn[xf6] = {x11k: x1da, x1cr: x1db, x1em: x1mm, x1c7: x1dc};
      x1da.onmouseover = x1cv;
      x1da.onmouseout = x1cx;
      x1da.onclick = x1cy;
    }
    return x1cn[xf6];
  }
  this.x1d0 = function () {
    for (var xf6 = 0; xf6 < x1co.length; xf6++) {
      x11u[xf6].x1cr.style.background = x1cs.x1d1;
      if (xf6 === x1cp) {
        x11u[xf6].x1cr.style.background = x1cs.x1eo;
      }
    }
    x1ks.style.background = "rgba(51,51,51,0.6)";
    x1gz.x1d0();
    navigator.x1d0();
  };
  this.x1hw = function (x1hx) {
    navigator.x1hw(x1hx);
  };
  this.x1d6 = function (xjn) {
    x1gz.x1d6(xjn);
  };
  function x1dg() {
    x1be = x1co.length;
    x1cp = 0;
    var x1mn = x1ke / x1be - x1bh;
    for (var xd = 0; xd < x1be; xd++) {
      var x1mo = x1d9(xd);
      x1mo.x11k.x1cw = xd;
      x1mo.x11k.style.width = x1mn + x1d5;
      x1mo.x11k.style.left = x1e8 + (x1mn + x1bh) * xd + x1d5;
      if (x1co[xd].x1c7) {
        x1mo.x1c7.src = x0 + "img/mc/" + x1co[xd].x1c7 + ".png";
        x1mo.x1em.style.display = "none";
        x1mo.x1c7.style.display = "";
      } else {
        x1mo.x1em.innerHTML = x1co[xd].x1em;
        x1mo.x1em.style.display = "";
        x1mo.x1c7.style.display = "none";
      }
      x1mo.x1em.innerHTML = x1co[xd].x1em;
      x11u.push(x1mo);
      x1kr.appendChild(x1mo.x11k);
    }
  }
  function x1mp() {
    x1ee = x1kr.appendChild(x19q("div", "css2r"));
    x1ks = x1ee.appendChild(x19q("div", "css2s"));
    x1ee.style.left = x1e8 + x1ke + x1d5;
    x1ee.style.width = x1e6 - x1ke - 2 * x1e8 + x1d5;
    x1gz = new x1le(x1ee);
    x1gz.xmn.x1ky.xgc(function (xg4, position) {
      xmn.x1ky.xge(position);
    });
    x1gz.xmn.x1bj.xgc(function () {
      xmn.x1bj.xge();
      if (!x1gz.x1m3()) {
        x1ep(x1cp);
        x1cp = x1be;
        x1gz.focus();
      }
      if (!x1gz.x1il()) {
        x1gz.x1lb(false);
      }
    });
    x1gz.xmn.x1bk.xgc(function () {
      if (x1gz.x1il()) {
        x1gz.x1lb(false);
      }
    });
    x1gz.xmn.x1lr.xgc(function () {
      state = state.xgt(state);
    });
    if (x2x.x31.x197.x19h) {
      x1ee.style.width = x1e6 - x1ke - 2 * x1e8 + 3 + x1d5;
    }
  }
  function x1dh() {
    x1kr = x19j.appendChild(x19o("div", "css2q"));
    x1dg();
    x1mp();
    x1kt = new x2x.x31.x1mq(x19j);
    navigator = new x2x.x31.x1mr(x19j);
    navigator.xmn.x1ms.xgc(function () {
      state = state.xgt(xgs.x1l9);
    }, this);
    navigator.xmn.x1bl.xgc(function () {
      state = state.xgt(xgs.x1l9);
    }, this);
    navigator.xmn.x1mt.xgc(function (xg4, data) {
      x1dm = data.xrw;
      state = state.xgt(xgs.x1l9);
    }, this);
    navigator.xmn.x1bj.xgc(function () {
      xmn.x1bj.xge();
    }, this);
    navigator.xmn.x1bk.xgc(function (xg4, x1is) {
      xmn.x1bk.xge(x2x.x31.x18q.x18t);
    });
    function x1mu() {
      if (state === xgs.x1ld) {
        state = state.xgt(state);
      }
    }
    navigator.xmn.xyu.xgc(x1mu, this);
    navigator.xmn.xyw.xgc(x1mu, this);
    navigator.xmn.x13j.xgc(x1mu, this);
    navigator.xmn.x13k.xgc(x1mu, this);
    navigator.xmn.x13i.xgc(x1mu, this);
    navigator.xmn.x13l.xgc(x1mu, this);
    navigator.xmn.x1ej.xgc(x1mu, this);
    navigator.xmn.x1ek.xgc(x1mu, this);
    xah.x1mv = navigator.xmn;
    x1kq = x1ko.appendChild(x19o("div", "css37"));
    x1ko.onmousemove = x1mw;
    x1ko.onclick = x1mx;
    x1ko.onwheel = x1ex;
    x1ko.onmousewheel = x1ey;
    x19j.onwheel = x1ex;
    x19j.onmousewheel = x1ey;
  }
  function x1mw(x1lv) {
    var x1my = (typeof x1lv.offsetY === x9n ? x1lv.layerY : x1lv.offsetY) + 1, x1mz = x1my / x1ko.offsetHeight;
    if (x1mz < 0.19 || x1mz > 0.9) {
      state = state.xgt(xgs.x1l9);
    }
  }
  function x1mx(x1lv) {
    state = state.xgt(xgs.x1l9);
  }
  function x1ex(x16o) {
    if (x1b5) {
      switch (state) {
        case xgs.x1l8:
          state = state.xgt(xgs.x1l9);
          state = state.xgt(xgs.x1ld);
          break;
        case xgs.x1l9:
          state = state.xgt(xgs.x1ld);
          break;
      }
    } else {
      xmn.x1bj.xge();
    }
  }
  function x1ey(x16o) {
    if (x1b5) {
      switch (state) {
        case xgs.x1l8:
          state = state.xgt(xgs.x1l9);
          state = state.xgt(xgs.x1ld);
          break;
        case xgs.x1l9:
          state = state.xgt(xgs.x1ld);
          break;
      }
    } else {
      xmn.x1bj.xge();
    }
  }
  function x1cq(xf6) {
    if (x11u[xf6]) {
      x11u[xf6].x1cr.style.background = x1cs.x1ct;
    }
  }
  function x1cu(xf6) {
    if (x11u[xf6]) {
      x11u[xf6].x1cr.style.background = x1cs.x1eo;
    }
  }
  function x1ep(xf6) {
    if (x11u[xf6]) {
      x11u[xf6].x1cr.style.background = x1cs.x1d1;
    }
  }
  function x1cv() {
    if (!x1b5) {
      xmn.x1bj.xge();
    }
    x1cq(this.x1cw);
    if (this.x1cw !== x1cp || x1gz.x1m3()) {
      state = state.xgt(state);
      x1cp = this.x1cw;
      if (x1gz.x1il()) {
        x1gz.x1lb(false);
      }
      if (x1gz.x1m3()) {
        x1gz.x1e0();
      }
      x1dw();
    }
  }
  function x1cx() {}
  function x1cy() {
    if (this.x1cw !== x1cp) {
      x1cp = this.x1cw;
      x1dw();
    }
    x1cz();
  }
  this.x1di = function (xrw) {
    if (x1dm !== xrw) {
      xad.xae("-- stream in mc changed --");
      x1gz.clear();
      x1dm = xrw;
    }
    if (!x1b4) {
      var x1n0 = xcz.xd0(xcz.xd1.x1n1);
      switch (x1n0) {
        case xcz.x1n2.x1n3:
          x1kq.id = "css37";
          x1kp = true;
          break;
        case xcz.x1n2.x1n4:
          x1kq.id = "css38";
          x1kp = true;
          break;
        default:
          x1kq.id = "css39";
          x1kp = false;
      }
      x1b3.appendChild(x19j);
      state = state.xgt(xgs.x1l9);
      x1dw();
      x1b4 = true;
    }
    x1la(x1dm);
  };
  this.x1dj = function () {
    if (x1b4) {
      state = state.xgt(xgs.x1l8);
      state = state.xgt(xgs.xb9);
      x19j = x1b3.removeChild(x19j);
      x1b4 = false;
    }
  };
  this.x1n5 = function (x1mi) {
    x1gz.x1mh(x1mi);
  };
  this.x1n6 = function () {
    return state === xgs.x1ld;
  };
  this.x1n7 = function () {
    if (state === xgs.x1ld) {
      navigator.x1dw();
    }
  };
  function x1dw() {
    for (var xd = 0; xd < x1be; xd++) {
      if (xd === x1cp) {
        if (x1b5) {
          x1cq(xd);
        } else {
          x1cu(xd);
        }
      } else {
        x1ep(xd);
      }
    }
  }
  function x1la(xrw) {
    x1kl = x1kj;
    if (xrw.xu9().type === x2x.x30.xhx.xrx.xsa) {
      xrw.xuu(true, function (xv0) {
        if (xv0) {
          var event = xrw.xvp();
          if (event) {
            event = xrw.xw2(event);
            x1gz.x1ml(event.duration, event.x15r);
          }
        } else {
          x1gz.clear();
        }
      });
    }
  }
  function x1dx() {
    switch (state) {
      case xgs.x1lc:
        state = state.xgt(xgs.x1l9);
        break;
      case xgs.x1ld:
        navigator.x1e1.x1dx();
        break;
      default:
        if (x1gz.x1il()) {
          x1gz.x1lb(false);
        } else {
          xmn.stop.xge(x1dm);
          x1gz.x1e0();
        }
    }
  }
  function x1n8() {
    xmn.x1kw.xge();
  }
  function x1n9() {
    xmn.x1kx.xge();
  }
  function xyu() {
    if (!x1gz.x1m3()) {
      if (++x1cp >= x1be) {
        x1gz.focus();
      }
    } else {
      if (x1gz.x1il()) {
        x1gz.x1md();
      } else {
        xmn.x1bk.xge(x2x.x31.x18q.x18r);
      }
    }
  }
  function xyw() {
    if (x1gz.x1m3()) {
      if (!x1gz.x1il()) {
        x1gz.x1e0();
        x1cp = x1be - 1;
      } else {
        x1gz.x1mg();
      }
    } else {
      if (--x1cp < 0) {
        x1cp = 0;
        xmn.x1bk.xge(x2x.x31.x18q.x18s);
      }
    }
  }
  function x1na() {
    switch (state) {
      case xgs.x1l9:
        xyw();
        x1dw();
        break;
    }
  }
  function x1nb() {
    switch (state) {
      case xgs.x1l9:
        xyu();
        x1dw();
        break;
    }
  }
  function x1nc() {
    switch (state) {
      case xgs.x1l8:
        state = state.xgt(xgs.x1l9);
        state = state.xgt(xgs.x1ld);
        break;
      case xgs.x1l9:
        state = state.xgt(xgs.x1lc);
        break;
      case xgs.x1lc:
        x1kt.x1e0();
        xmn.x1bk.xge(x2x.x31.x18q.x18t);
        break;
    }
  }
  function x1nd() {
    switch (state) {
      case xgs.x1l8:
        state = state.xgt(xgs.x1l9);
        state = state.xgt(xgs.x1ld);
        break;
      case xgs.x1lc:
        state = state.xgt(xgs.x1l9);
        break;
    }
  }
  function x1cz() {
    switch (state) {
      case xgs.x1l8:
        state = state.xgt(xgs.x1l9);
        state = state.xgt(xgs.x1ld);
        break;
      case xgs.x1l9:
        if (!x1gz.x1m3()) {
          x1co[x1cp].xgq.xge(x1dm);
        } else {
          x1gz.x1lb(true);
        }
        break;
    }
  }
  function x1jr(x1dz) {
    switch (state) {
      case xgs.x1ld:
        if (!navigator.x1e1.x1dy(x1dz)) {
          switch (x1dz) {
            case xda.KEY_RED:
            case xda.KEY_GREEN:
            case xda.KEY_YELLOW:
            case xda.KEY_BLUE:
              return x1dy(x1dz);
            default:
              return false;
          }
        }
        return true;
      default:
        return x1dy(x1dz);
    }
  }
  function x1ne() {
    if (!x1gz.x1m3()) {
      x1gz.focus();
    }
    x1la(x1dm);
    if (!x1gz.x1il()) {
      x1gz.x1lb(false);
    }
    x1gz.x1md();
    x9q(x1km);
    var x1nf = x9p(function () {
      x1gz.x1lb(true);
      x1gz.x1e0();
    }, x1kn);
    x1km = x1nf;
  }
  function x1ng() {
    if (!x1gz.x1m3()) {
      x1gz.focus();
    }
    x1la(x1dm);
    if (!x1gz.x1il()) {
      x1gz.x1lb(false);
    }
    x1gz.x1mg();
    x9q(x1km);
    var x1nf = x9p(function () {
      x1gz.x1lb(true);
      x1gz.x1e0();
    }, x1kn);
    x1km = x1nf;
  }
  function x1dy(x1dz) {
    var xom = false;
    switch (x1dz) {
      case xda.KEY_RIGHT:
      case xda.xiq + xda.KEY_RIGHT:
        x1nb();
        break;
      case xda.KEY_LEFT:
      case xda.xiq + xda.KEY_LEFT:
        x1na();
        break;
      case xda.KEY_ENTER:
      case xda.xiq + xda.KEY_ENTER:
        x1cz();
        break;
      case xda.KEY_RETURN:
        x1dx();
        break;
      case xda.KEY_UP:
      case xda.xiq + xda.KEY_UP:
        x1nc();
        break;
      case xda.KEY_DOWN:
      case xda.xiq + xda.KEY_DOWN:
        x1nd();
        break;
      case xda.KEY_CH_UP:
        x1n8();
        break;
      case xda.KEY_CH_DOWN:
        x1n9();
        break;
      case xda.KEY_PLAY:
        xom = true;
        xmn.play.xge(x1dm);
        break;
      case xda.KEY_PAUSE:
        xom = true;
        xmn.pause.xge(x1dm);
        break;
      case xda.xj4:
        xom = true;
        xmn.x1kv.xge(x1dm);
        break;
      case xda.KEY_STOP:
        xom = true;
        xmn.stop.xge(x1dm);
        break;
      case xda.KEY_FF:
        x1ne();
        break;
      case xda.KEY_RW:
        x1ng();
        break;
      case xda.KEY_INFO:
        if (state === xgs.x1l9) {
          xom = true;
          state = state.xgt(xgs.x1l8);
        }
        break;
      case xda.KEY_1:
        xmn.x1l1.xge(1);
        break;
      case xda.KEY_2:
        xmn.x1l1.xge(2);
        break;
      case xda.KEY_3:
        xmn.x1l1.xge(3);
        break;
      case xda.KEY_4:
        xmn.x1l1.xge(4);
        break;
      case xda.KEY_5:
        xmn.x1l1.xge(5);
        break;
      case xda.KEY_6:
        xmn.x1l1.xge(6);
        break;
      case xda.KEY_7:
        xmn.x1l1.xge(7);
        break;
      case xda.KEY_8:
        xmn.x1l1.xge(8);
        break;
      case xda.KEY_9:
        xmn.x1l1.xge(9);
        break;
      case xda.KEY_0:
        xmn.x1l1.xge(0);
        break;
      default:
        return false;
    }
    if (!xom) {
      if (state === xgs.x1l8) {
        state = state.xgt(xgs.x1l9);
      } else {
        state = state.xgt(state);
      }
    }
    return true;
  }
  function focus(x1is) {
    xad.xae("[mc] focus");
    x1b5 = true;
    switch (state) {
      case xgs.x1ld:
        navigator.x1e1.focus(x1is);
        break;
      case xgs.x1lc:
        x1kt.focus();
        break;
      default:
        if (x1is === x2x.x31.x18q.x18r) {
          x1cp = 0;
        }
        if (x1is === x2x.x31.x18q.x18s) {
          x1cp = x1be;
        }
        if (x1cp < x1be) {
          x1cq(x1cp);
        } else {
          x1gz.focus();
        }
    }
  }
  function x1e0() {
    xad.xae("[mc] unfocus");
    switch (state) {
      case xgs.x1ld:
        navigator.x1e1.x1e0();
        break;
      case xgs.x1l9:
        if (x1gz.x1il()) {
          x1gz.x1lb(false);
        }
        if (x1gz.x1m3()) {
          x1gz.x1e0();
        } else {
          x1cu(x1cp);
        }
        break;
    }
    x1b5 = false;
  }
  this.x1e1 = {x1dy: x1jr, x1dx: x1dx, x1e0: x1e0, focus: focus};
  this.x15x = function () {
    switch (state) {
      case xgs.x1l9:
      case xgs.x1lc:
        if (--x1ki <= 0) {
          state = state.xgt(xgs.x1l8);
        } else {
          if (--x1kl <= 0) {
            x1la(x1dm);
          }
        }
        break;
      case xgs.x1ld:
        if (--x1ki <= 0) {
          navigator.x1e1.x1dx();
        } else {
          if (--x1kl <= 0) {
            navigator.x15x();
            x1kl = x1kk;
          }
        }
        break;
      case xgs.x1l8:
        if (x1kp) {
          x1kq.innerHTML = xch.xby(xch.xbg(true));
        }
        break;
    }
  };
  this.x1nh = function () {
    x1la(x1dm);
  };
  this.x1ni = function () {
    state = state.xgt(state);
  };
  x1dh();
};
x2x.x31.x1nj = function (x19t) {
  var x1cs = x2x.x31.x1cs, xda = x2x.x2y.xda, xch = x2x.x2z.xch, xah = this, x1b3 = x19t, x1b5 = false, x1b4 = false, x1gl = false, x1nk = false, x19j, x11u = [], x1fn, x1nl = 5, x1nm = [], x1nn = new x2x.x30.xea(x1nm), x1no = 0, x1np = 0, x1g9 = 6, x1gb = 40 / x1g9, x1d5 = "em", x1nq, x1nr, x1iy, x1dm, xmn = {x1bj: new x2x.xg3(this), x1bk: new x2x.xg3(this), x1ns: new x2x.xg3(this), x1nt: new x2x.xg3(this), x1nu: new x2x.xg3(this)};
  this.xmn = xmn;
  function x1dh() {
    x19j = x19o("div", "css3z");
    for (var xd = 0; xd < x1g9; xd++) {
      var x10g = {};
      x10g.x11k = x19j.appendChild(x19q("div", "css40"));
      x10g.x1cr = x10g.x11k.appendChild(x19q("div", "css41"));
      x10g.x1h1 = x10g.x11k.appendChild(x19q("div", "css42"));
      x10g.duration = x10g.x11k.appendChild(x19q("div", "css43"));
      x10g.xce = x10g.x11k.appendChild(x19q("div", "css44"));
      x10g.name = x10g.x11k.appendChild(x19q("div", "css45"));
      x10g.x8k = x10g.x11k.appendChild(x19q("div", "css46"));
      x10g.x11k.appendChild(x19q("div", "css47"));
      x11u.push(x10g);
      x10g.x11k.style.top = x1gb * xd + x1d5;
      x10g.x11k.style.height = x1gb + x1d5;
      x10g.x11k.x1cw = xd;
      x10g.x11k.onmouseover = x1cv;
      x10g.x11k.onmouseout = x1cx;
      x10g.x11k.onclick = x1cy;
    }
    x19j.onwheel = x1ex;
    x19j.onmousewheel = x1ey;
    x19j.ontouchmove = x1f0;
    x1fn = new x2x.x31.x1fi(x19j);
    x1fn.xmn.xyu.xgc(x1nv);
    x1fn.xmn.xyw.xgc(x1nw);
    x1fn.xmn.x1bj.xgc(function () {
      xmn.x1bj.xge();
    });
    x1iy = new x2x.x31.x1e2(x1b3, x1nl, true);
    x1iy.xz2();
    x1iy.xmn.xyu.xgc(x1nx, this);
    x1iy.xmn.xyw.xgc(x1ny, this);
    x1iy.xmn.x13i.xgc(x1nz, this);
    x1iy.xmn.x1ej.xgc(x1o0, this);
    x1iy.xmn.x1ek.xgc(x1o1, this);
    x1iy.xmn.x1bj.xgc(function () {
      if (!x1gl) {
        xmn.x1bj.xge();
        x1dw();
      }
    }, this);
  }
  function x1cv() {
    x1nn.xf7({xex: x1g9, xez: 1, xf3: this.x1cw});
    if (!x1gl) {
      xmn.x1bj.xge();
    }
    x1dw();
  }
  function x1cx() {}
  function x1cy() {
    x1o2();
  }
  function x1nx() {
    x1nr.xfj({xex: x1nl, xez: 1, xfp: 1});
    x1dw();
  }
  function x1ny() {
    x1nr.xft({xex: x1nl, xez: 1, xfp: 1});
    x1dw();
  }
  function x1nz(xg4, xev) {
    x1nr.xf7(xev);
    x1dw();
  }
  function x1o0() {
    x1nr.xfj({xex: x1nl, xez: 1, xfp: 1, xfr: true});
    x1dw();
  }
  function x1o1() {
    x1nr.xft({xex: x1nl, xez: 1, xfp: 1, xfr: true});
    x1dw();
  }
  function x1nv() {
    x1nn.xfj({xex: x1g9, xez: 1, xfp: 1});
    x1dw();
  }
  function x1nw() {
    if (!x1nn.xes()) {
      x1nn.xft({xex: x1g9, xez: 1, xfp: 1});
      x1dw();
    } else {
      xmn.x1bk.xge(x2x.x31.x18q.x18t);
    }
  }
  function x1o2() {
    var xv4 = xch.xbg();
    var event = x1nn.xeq();
    if (event.end < xv4) {
      xad.xae("selected arc event");
      xmn.x1ns.xge({x13y: true, xrw: x1dm, event: event});
    } else if (event.start > xv4) {
      xad.xae("selected future event");
      xmn.x1ns.xge({x13y: false});
    } else {
      xad.xae("selected now event");
      xmn.x1ns.xge({x13y: true, xrw: x1dm, event: event});
    }
  }
  function x1gq() {
    x1nn.xft({xex: x1g9, xez: 1, xfr: true, xfp: 1});
    x1dw();
  }
  function x1gr() {
    x1nn.xfj({xex: x1g9, xez: 1, xfr: true, xfp: 1});
    x1dw();
  }
  function x1ex(x16o) {
    if (x16o.deltaY > 0) {
      x1gr();
    } else {
      x1gq();
    }
  }
  function x1ey(x16o) {
    if (x16o.wheelDelta < 0) {
      x1gr();
    } else {
      x1gq();
    }
  }
  var x1gs = 0;
  function x1f0(x16o) {
    x16o.preventDefault();
    x16o.stopPropagation();
    var top = x16o.touches[0].pageY, xf9 = x1gs - top;
    x1gs = top;
    if (x1gs > 0) {
      if (xf9 > 15) {
        x1gr();
      } else if (xf9 < 0 && xf9 < 15) {
        x1gq();
      }
    }
  }
  function x1cq(x10g) {
    x10g.name.style.color = x1cs.x1gm;
    x10g.x1cr.style.background = x1cs.x1gn;
  }
  function x1cu(x10g) {
    x10g.x1cr.style.background = "transparent";
  }
  function x1ep(x10g) {
    x10g.x1cr.style.background = "transparent";
  }
  function x1o3() {
    x1nr.xff({xex: x1nl, xez: 1}, function (xf6, x3) {
      x1iy.x1fe(xf6, x3.x3f, x1nr.xf2({xex: x1nl, xez: 1, xf3: xf6}));
    });
    x1iy.x1ff(x1nr);
  }
  function x1o4(x10g, event, x1il, x1o5, x1o6) {
    if (x1il) {
      if (x1gl) {
        x1cq(x10g);
      } else {
        x1cu(x10g);
      }
    } else {
      x1ep(x10g);
    }
    if (x1o5) {
      if (x1o6) {
        x10g.name.style.color = x1cs.x1gp;
        x10g.name.innerHTML = event.name || x1id;
        x10g.xce.innerHTML = "<span style='color:yellowgreen'>L</span>";
      } else {
        x10g.name.style.color = x1cs.x1gw;
        x10g.name.innerHTML = event.name || x1id;
        x10g.xce.innerHTML = "<span style='color:red'>R</span>";
      }
    } else {
      x10g.name.style.color = x1cs.x1gp;
      x10g.name.innerHTML = event.name || x1id;
      x10g.xce.innerHTML = " ";
    }
    if (event.name) {
      x10g.x8k.innerHTML = event.x8k || x1o7;
    } else {
      x10g.x8k.innerHTML = " ";
    }
    x10g.x1h1.innerHTML = xch.xby(event.start);
    x10g.duration.innerHTML = xch.xca(event.duration);
  }
  function x1o8() {
    var x1o9 = x1nr.xeq(), x1oa = xch.xbg();
    if (x1dm.xv2()) {
      x1nm = x1dm.xw5(x1o9.x1ob, x1o9.x1oc);
      x1nn.xg2(x1nm);
    }
    function x1od(xf6, event, x1il) {
      var x1o5, x1o6;
      if (event) {
        if (event.start <= x1oa) {
          if (event.end > x1oa) {
            x1o6 = true;
            x1o5 = true;
          } else {
            x1o5 = x1dm.xsb;
            x1o6 = false;
          }
        } else {
          x1o5 = false;
          x1o6 = false;
        }
        x1o4(x11u[xf6], event, x1il, x1o5, x1o6);
        return true;
      } else {
        return false;
      }
    }
    var x1oe = x1nn.xff({xex: x1g9, xez: 1}, x1od);
    for (var xd = 0; xd < x1g9; xd++) {
      if (x1oe[xd]) {
        x11u[xd].x11k.style.display = "";
      } else {
        x11u[xd].x11k.style.display = "none";
      }
    }
  }
  function x1dw() {
    x1dm.xuu(false, function (xv0) {
      x1o3();
      x1o8();
      var xew = x1nn.xeu({xex: x1g9, xez: 1});
      x1fn.x1dw(xew);
    });
  }
  function x1of(x5) {
    x1dm.xuu(false, function (xv0) {
      if (!x1dm.xv2()) {
        x9p(function () {
          xmn.x1ns.xge({x13y: false, x1og: true});
        }, 0);
        return;
      }
      var xv4 = xch.xbg();
      var x1oh = x1dm.xw0(false);
      x1nq = [];
      var x1oi = 0;
      for (var xd = -1 * x2x.x30.x15v.x166; xd < x2x.x30.x15v.x167; xd++) {
        var x1oj = xv4 + xd * xch.xas * 24;
        var xbx = new xch.xaq(x1oj);
        var x3 = {x1ob: xbx.setHours(0, 0, 0, 0), x1oc: xbx.setHours(23, 59, 59, 999)};
        x3.x3f = xch.xc2(x3.x1ob);
        x1nq.push(x3);
        if (x3.x1ob <= x1oh && x3.x1oc > x1oh) {
          x1oi = x1nq.length - 1;
        }
      }
      x1nr = new x2x.x30.xea(x1nq);
      x1nr.xf5(x1oi);
      x1nr.xfb({xex: x1nl, xez: 1});
      var x1o9 = x1nr.xeq();
      x1nm = x1dm.xw5(x1o9.x1ob, x1o9.x1oc);
      x1nn.xg2(x1nm);
      for (var xd = 0; xd < x1nm.length; xd++) {
        if (x1nm[xd].start <= x1oh && x1nm[xd].end > x1oh) {
          x1np = xd;
          break;
        }
      }
      x1nn.xf5(x1np);
      x5();
    });
  }
  var x1id, x1o7;
  this.x1di = function (xrw) {
    x1b5 = true;
    if (!x1b4) {
      x1id = x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x88);
      x1o7 = x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x86);
      x1dm = xrw;
      for (var xd = 0; xd < x1g9; xd++) {
        x11u[xd].x11k.style.display = "none";
      }
      xmn.x1nt.xge();
      x1of(function () {
        xmn.x1nu.xge();
        if (x1b5) {
          x1b3.appendChild(x19j);
          x1iy.x1di();
          x1b4 = true;
          x1dw();
        }
      });
      xd8.xmh(xd8.xmc.xme);
    }
  };
  this.x1dj = function () {
    x1b5 = false;
    xmn.x1nu.xge();
    if (x1b4) {
      var xql = x1b3.removeChild(x19j);
      x1iy.x1dj();
      x1b4 = false;
    }
  };
  function x1d0() {
    x19j.style.background = x1cs.x1gt;
    for (var xd = 0; xd < x1g9; xd++) {
      x11u[xd].x1h1.style.color = x1cs.x1gp;
      x11u[xd].name.style.color = x1cs.x1gp;
      x11u[xd].duration.style.color = x1cs.x1h2;
      x11u[xd].x8k.style.color = x1cs.x1gw;
    }
    x1iy.x1d0();
    x1fn.x1d0();
  }
  this.x1d0 = x1d0;
  this.x1d6 = function (xjn) {
    x1iy.x1d6(xjn);
    for (var xd = 0; xd < x1g9; xd++) {
      x11u[xd].x1h1.style.fontSize = 1.8 * xjn + x1d5;
      x11u[xd].x1h1.style.top = 1 - 1.8 * xjn / 2 + x1d5;
      x11u[xd].duration.style.fontSize = 1.4 * xjn + x1d5;
      x11u[xd].duration.style.top = 1.6 / xjn + x1d5;
      x11u[xd].xce.style.fontSize = 1.4 * xjn + x1d5;
      x11u[xd].xce.style.top = 2.8 / xjn + x1d5;
      x11u[xd].name.style.fontSize = 1.8 * xjn + x1d5;
      x11u[xd].name.style.top = 1 - 1.8 * xjn / 2 + x1d5;
      x11u[xd].x8k.style.fontSize = 1.4 * xjn + x1d5;
      x11u[xd].x8k.style.top = 1.4 / xjn + x1d5;
    }
  };
  function x1dy(x1dz) {
    switch (x1dz) {
      case xda.KEY_LEFT:
      case xda.xiq + xda.KEY_LEFT:
      case xda.KEY_RIGHT:
      case xda.xiq + xda.KEY_RIGHT:
        return x1iy.x1e1.x1dy(x1dz);
      case xda.KEY_UP:
      case xda.xiq + xda.KEY_UP:
        x1nw();
        break;
      case xda.KEY_DOWN:
      case xda.xiq + xda.KEY_DOWN:
        x1nv();
        break;
      case xda.KEY_RETURN:
        x1dx();
        break;
      case xda.KEY_ENTER:
        x1o2();
        break;
      default:
        return false;
    }
    return true;
  }
  function x1dx() {
    xmn.x1ns.xge({x13y: false});
  }
  function focus() {
    xad.xae("[epglist] focus");
    x1gl = true;
    if (x1b4) x1dw();
  }
  function x1e0() {
    xad.xae("[epglist] unfocus");
    x1gl = false;
    if (x1b4) x1dw();
  }
  this.x1e1 = {x1dy: x1dy, x1dx: x1dx, focus: focus, x1e0: x1e0};
  x1dh();
};
x2x.x31.x1ok = function (x19t) {
  var _xg = xaa._xg, x1cs = x2x.x31.x1cs, xda = x2x.x2y.xda, xch = x2x.x2z.xch, x1b3 = x19t, xmn = {x1bj: new x2x.xg3(this), x1bk: new x2x.xg3(this), x1ns: new x2x.xg3(this), xyu: new x2x.xg3(this), xyw: new x2x.xg3(this), x13i: new x2x.xg3(this), x1gh: new x2x.xg3(this), x1gg: new x2x.xg3(this), x1ej: new x2x.xg3(this), x1ek: new x2x.xg3(this), x1nt: new x2x.xg3(this), x1nu: new x2x.xg3(this)}, x1b5 = false, x1gl = false, x1g9 = 5, x1gb = 5.5, x1ga = 0.5, x1gc = 0.2, x1gd = x1gb - x1gc * 2, x1ge = x1gd / 16 * 9, x1gf = {x1ak: x1ge, x1al: x1gd, x1aq: x1ga, x1ap: (x1gb - x1ge) / 2}, x1cp = 0, x1ol = 4, x1om = x2x.x30.x15v.x164, x1on = x1ol * x1om, x1oo = x1om * x1ol, x1op = x2x.x30.x15v.x167 * 24 * xch.xas, x1oq = x2x.x30.x15v.x166 * 24 * xch.xas, x1or = x9v.floor(x1op / x1om), x1os = x9v.floor(x1oq / x1om), x1ot = x1oq + x1op, x1ou = 100 / x1on, x1ov, x1ow = 90, x1ox;
  this.xmn = xmn;
  var x19j, x1oy, x1oz, x1p0, x1p1, x1p2, x1p3, x1p4, x1p5, x1p6, x1p7, x1p8, x1p9, x1pa = [], x11u = [], x1pb, x1pc, x1pd, x1pe, x1pf;
  function x1bj(x1pg) {
    if (!x1gl) {
      xmn.x1bj.xge();
    }
  }
  function x1ph() {
    var x1cw = this.xf6;
    if (x1gl) {
      if (x1cp !== x1cw) {
        xmn.x13i.xge({xex: x1g9, xez: 1, xf3: x1cw});
      }
    } else {
      x1bj(x1cw);
    }
  }
  function x1pi() {
    xmn.x1ns.xge({x13y: true, event: x9m});
  }
  function x1pj() {
    if (!x1gl) {
      x1bj(x1cp);
    }
    if (!this.x1il) {
      this.style.background = x1cs.x1fy;
    }
  }
  function x1pk() {
    if (!this.x1il) {
      this.style.background = "transparent";
    }
  }
  function x1pl() {
    xad.xae("event: " + this.x1pm + " " + this.xfc);
    if (!this.x1il) {
      x1pn = x1po + this.xfc * x1on / 100;
      if (x1cp !== this.x1pm) {
        xmn.x13i.xge({xex: x1g9, xez: 1, xf3: this.x1pm});
      } else {
        x1dw();
      }
    } else {
      x1pp();
    }
  }
  function x1ex(x16o) {
    if (x16o.deltaY > 0) {
      x1pq();
    } else {
      x1pr();
    }
  }
  function x1ey(x16o) {
    if (x16o.wheelDelta < 0) {
      x1pq();
    } else {
      x1pr();
    }
  }
  function x1f0() {}
  function x1dh() {
    x19j = x19o("div", "css4b");
    x1p3 = x19j.appendChild(x19o("div", "css4c"));
    x1p4 = x1p3.appendChild(x19o("div", "css4u"));
    x1p5 = x1p3.appendChild(x19o("div", "css4v"));
    x1p6 = x1p3.appendChild(x19o("div", "css4w"));
    x1p7 = x1p3.appendChild(x19o("div", "css4x"));
    x1oy = x19j.appendChild(x19o("div", "css4d"));
    x1oz = x19j.appendChild(x19o("div", "css4f"));
    var x1ps = x1oz.appendChild(x19o("div", "css4m")), x1pt = x1ps.appendChild(x19o("div", "css4n"));
    x1p9 = x1oy.appendChild(x19o("span", "css4e"));
    for (var x1cw = 0; x1cw < x1ol; x1cw++) {
      var x11k = x1pt.appendChild(x19q("div", "css4o"));
      x11k.style.left = 100 / x1ol * x1cw + "%";
      x11k.style.width = 100 / x1ol + "%";
      x1pa[x1cw] = x11k.appendChild(x19q("span", "css4p"));
    }
    x1p0 = new x2x.x31.x1fi(x1oz, true, 0.4);
    var x1p8 = x19j.appendChild(x19o("div", "css4g"));
    x1p8.onwheel = x1ex;
    x1p8.onmousewheel = x1ey;
    x1p8.ontouchmove = x1f0;
    x1p1 = x1p8.appendChild(x19o("div", "css4r"));
    for (var x1cw = 0; x1cw < x1g9; x1cw++) {
      var x1pu = {xf6: x1cw, x11k: x1p8.appendChild(x19q("div", "css4h"))};
      x1pu.x1pv = x1pu.x11k.appendChild(x19q("div", "css4i"));
      x1pu.x1pw = x1pu.x11k.appendChild(x19q("div", "css4j"));
      x1pu.x1c7 = x1pu.x1pv.appendChild(x19q("img", "css4s"));
      x1pu.title = x1pu.x1pv.appendChild(x19q("div", "css4t"));
      x1pu.x1pw.xf6 = x1cw;
      x1pu.x1pv.xf6 = x1cw;
      x1pu.x1il = false;
      x11u[x1cw] = x1pu;
      x1pu.x11k.style.height = x1gb + "em";
      x1pu.x11k.style.top = x1cw * (x1gb + 0.1) + "em";
      x1pu.x1pv.onmouseover = x1ph;
      x1pu.x1pv.onclick = x1pi;
    }
    x1p1.style.height = (x1gb + 0.1) * x1g9 + "em";
    x1p2 = new x2x.x31.x1fi(x1p1);
    x1pb = x1pt.appendChild(x19q("div", "css4q"));
    if (xdr) {
      x1pd = x1pt.appendChild(x19q("div", "css4q"));
      x1pd.style.borderColor = "yellowgreen";
      x1pe = x1pt.appendChild(x19q("div", "css4q"));
      x1pe.style.borderColor = "rgba(180,180,250,0.5)";
      x1pe.style.borderWidth = "1px";
      x1pe.style.top = "0%";
      x1pf = x1pt.appendChild(x19q("div", "css4q"));
      x1pf.style.borderColor = "rgba(180,180,250,0.5)";
      x1pf.style.borderWidth = "1px";
      x1pf.style.top = "0%";
    }
    x1p2.xmn.x1bj.xgc(x1bj, this);
    x1p0.xmn.x1bj.xgc(x1bj, this);
    x1p2.xmn.xyu.xgc(x1i4, this);
    x1p2.xmn.xyw.xgc(x1i3, this);
    x1p0.xmn.xyu.xgc(x1nb, this);
    x1p0.xmn.xyw.xgc(x1na, this);
  }
  x1dh();
  function x1cq(xf6) {
    x11u[xf6].title.style.color = x1cs.x1gm;
    x11u[xf6].x1pv.style.background = x1cs.x1gn;
  }
  function x1cu(xf6) {
    x11u[xf6].title.style.color = x1cs.x1gm;
    x11u[xf6].x1pv.style.background = x1cs.x1gt;
  }
  function x1ep(xf6) {
    x11u[xf6].title.style.color = x1cs.x1gp;
    x11u[xf6].x1pv.style.background = x1cs.x1gt;
  }
  var x1px;
  function x1py() {
    if (x1px) {
      x1px.style.background = "transparent";
    }
  }
  function x1pz() {
    if (x1px) {
      if (x1gl) {
        x1px.style.background = x1cs.x1gn;
      }
      x1px.style.color = x1cs.x1gm;
    }
  }
  function x1i8(xy1) {
    x1p2.x1dw(xy1.xeu({xex: x1g9, xez: 1}));
  }
  var x1q0, x1po, x1pn, x1q1, x1q2, x1q3, x1q4, x1q5, x1q6;
  function x1q7() {
    x1p4.innerHTML = "--:--";
    x1p5.innerHTML = "--:--";
    x1p6.innerHTML = "--";
    x1p7.innerHTML = "--";
    x1ox = x9m;
  }
  function x1q8(event) {
    x1p4.innerHTML = xch.xby(event.start);
    x1p5.innerHTML = xch.xca(event.duration);
    x1p6.innerHTML = event.x15p ? x1id : event.name || x1q9;
    x1p7.innerHTML = event.x8k || x1o7;
    x1ox = event;
  }
  function x1qa(x1qb) {
    x1p4.innerHTML = " ";
    x1p5.innerHTML = " ";
    x1p6.innerHTML = x1qb;
    x1p7.innerHTML = " ";
  }
  function x1qc(x19t, x1pm, left, width, x8k, x1qd) {
    var x1qe = x19q("div", "css4k");
    x1qe.x1pm = x1pm;
    if (left < 0) {
      width += left;
      left = 0;
    }
    x1qe.xfc = left;
    x1qe.style.borderColor = x1cs.x1ii;
    x1qe.style.left = left + "%";
    x1qe.style.right = 100 - (left + width) + "%";
    x1qe.style.borderRightWidth = "1px";
    x1qe.style.borderLeftWidth = "1px";
    var x1qf = x1qe.appendChild(x19q("div", "css4l"));
    x1qf.style.fontSize = 1.4 * x1ov + "em";
    x1qf.style.height = x1ow + "%";
    if (x1qd) {
      x1qe.x1il = true;
      x1px = x1qe;
      x1pz();
    } else {
      x1qe.style.color = x1cs.x1gw;
      x1qe.x1il = false;
    }
    if (width > 2.9) {
      x1qf.innerHTML = x8k;
    } else {
      x1qf.innerHTML = ".";
    }
    x1qe.onmouseover = x1pj;
    x1qe.onmouseout = x1pk;
    x1qe.onclick = x1pl;
    x19t.appendChild(x1qe);
  }
  function x1qg(x10g, x1qh, x1qi) {
    for (var x1qj = x1qh, xf6 = 0; x1qj < x1qi; xf6++) {
      var x1qk = false;
      var x1ql = x1qj + x1oo;
      if (xf6 === 0) {
        x1ql = (x1ql / x1om >> 0) * x1om;
      }
      if (x1ql > x1qi) {
        x1ql = x1qi;
      }
      if (x10g.x15s) {
        if (x1pn >= x1qj && x1pn < x1ql) {
          x1qk = true;
          x1q5 = x1ql - x1pn;
          if (x1pn + x1q5 > x1po + x1on) {
            x1q5 = x1po + x1on - x1pn;
          }
          x1q5 += 100;
          x1q6 = x1pn - x1qj;
          if (x1pn - x1q6 < x1po) {
            x1q6 = x1pn - x1po;
          }
          x1q6 += 100;
          if (xdr) {
            x1qm(x1pe, x1pn + x1q5 - x1po);
            x1qm(x1pf, x1pn - x1q6 - x1po);
          }
        }
      }
      x1qc(x10g.x1pw, x10g.xf6, (x1qj - x1po) * x1ou, (x1ql - x1qj) * x1ou, x1id, x1qk);
      if (x10g.x15s) {
        if (x1pn >= x1qj && x1pn < x1ql) {
          x1qk = true;
          x1qa(x1id);
        }
      }
      x1qj = x1ql;
      if (xf6 > 30) break;
    }
    return x1qj;
  }
  function x1qn(x10g, xrw) {
    x1qc(x10g.x1pw, x10g.xf6, 0, 100, "[" + xrw.title + "]", x10g.x15s);
    if (x10g.x15s) {
      x1qa(xrw.title);
    }
  }
  function x1qo(x10g, xrw) {
    var xw6 = x1po, xw7 = xw6 + x1on;
    var xmn = xrw.xw9(xw6, xw7);
    x10g.x1pw.innerHTML = "";
    var x1qp = 0, x1qq, x1qr = x1po;
    for (var x1ie = 0; x1ie < xmn.length; x1ie++) {
      var event = xmn[x1ie], x1qk = false;
      x1qr = event.end;
      x1qq = x1ou * event.duration;
      if (x1ie === 0) {
        x1qp = x1ou * (event.start - x1po);
        if (x1qp < 0) {
          x1qq += x1qp;
          x1qp = 0;
        }
      }
      if (x1qp + x1qq > 100) {
        x1qq = 100 - x1qp;
      }
      if (x10g.x15s) {
        if (x1pn >= event.start && x1pn < event.end) {
          x1qk = true;
          x1q5 = event.end - x1pn;
          if (x1pn + x1q5 > x1po + x1on) {
            x1q5 = x1po + x1on - x1pn;
          }
          x1q5 += 100;
          x1q6 = x1pn - event.start;
          if (x1pn - x1q6 < x1po) {
            x1q6 = x1pn - x1po;
          }
          x1q6 += 100;
          x1q8(event);
          if (xdr) {
            x1qm(x1pe, x1pn + x1q5 - x1po);
            x1qm(x1pf, x1pn - x1q6 - x1po);
          }
        }
      }
      x1qc(x10g.x1pw, x10g.xf6, x1qp, x1qq, event.name || x1q9, x1qk);
      x1qp += x1qq;
    }
    if (x1qp < 99.999) {
      x1qg(x10g, x1qr, x1po + x1on);
    }
  }
  function x1qs(x1cw, xrw, x15s) {
    var x10g = x11u[x1cw];
    x10g.title.innerHTML = xrw.title;
    x1au(x10g.x1c7, x1gf, xrw.pict, "");
    if (x15s) {
      x1cp = x1cw;
      x1cq(x1cw);
    } else {
      x1ep(x1cw);
    }
    x10g.x11k.style.display = "";
    x10g.x1qt = xrw;
    x10g.xmn = [];
    x10g.x15s = x15s;
    x10g.x1pw.innerHTML = "";
    x1qc(x10g.x1pw, x10g.xf6, 0, 100, x1qu, false);
    xrw.xuu(false, function (xv1) {
      if (x10g.x1qt === xrw) {
        if (xv1) {
          x1qo(x10g, xrw);
        } else {
          x10g.x1pw.innerHTML = "";
          if (xrw.xu9().type === x2x.x30.xhx.xrx.xsa) {
            x1qg(x10g, x1po, x1po + x1on);
          } else {
            x1qn(x10g, xrw);
          }
        }
      }
    });
  }
  function x1qv() {
    x1q3 = (x1pn / x1om >> 0) * x1om;
    x1q0 = xch.xbg();
    if (x1q3 - x1po >= x1on) {
      x1po = x1q3 - x1on + x1om;
    }
    if (x1po > x1pn) {
      x1po = x1q3;
    }
    x1q4 = (x1q0 / x1om >> 0) * x1om;
    x1q1 = x1q4 + x1op;
    x1q2 = x1q4 - x1oq;
  }
  function x1qw() {
    for (var x1cw = 0; x1cw < x1ol; x1cw++) {
      var x1qx = x1po + x1om * x1cw;
      x1pa[x1cw].innerHTML = xch.xby(x1qx);
      if (x1cw === 0) x1p9.innerHTML = xch.xc1(x1qx);
    }
    var x1qy = x1on / x1ot, x1qz = (x1po - (x1q0 - x1oq)) / x1ot;
    x1p0.x1dw({height: x1qy, top: x1qz});
  }
  function x1qm(x1r0, x15t) {
    if (x15t >= 0 && x15t <= x1on) {
      x1r0.style.left = 100 * x15t / x1on + "%";
      x1r0.style.display = "";
    } else {
      x1r0.style.display = "none";
    }
  }
  function x1r1() {
    x1qm(x1pb, x1q0 - x1po);
    if (xdr) {
      x1qm(x1pd, x1pn - x1po);
    }
  }
  function x1dw() {
    x1r2 = 0;
    x1qv();
    x1qw();
    x1r1();
    var xy1 = x2x.x30.xd3.x14d(), x1ir = false;
    x1q7();
    for (var x1cw = 0; x1cw < x1g9; x1cw++) {
      var x1fd = xy1.xyc({xex: x1g9, xez: 1, xf3: x1cw});
      if (x1fd) {
        x1qs(x1cw, x1fd.data, xy1.xyg({xex: x1g9, xez: 1, xf3: x1cw}));
      } else {
        if (x1cw === 0) {
          x1ir = true;
        }
        x11u[x1cw].x11k.style.display = "none";
      }
    }
    x1i8(xy1);
  }
  this.x1dw = x1dw;
  var x1id, x1q9, x1o7, x1qu, x1r3;
  this.x1di = function () {
    if (!x1b5) {
      x1qu = x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x71);
      x1id = x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x88);
      x1q9 = x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x87);
      x1o7 = x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x86);
      x1b3.appendChild(x19j);
      x1b5 = true;
    }
    x1r3 = x2x.x30.xhx.xui();
    x1pn = xch.xbg();
    if (x2x.x30.xd3.x14d().data.xsb) {
      x1pn += x1r3;
    }
    x1po = (x1pn / x1om >> 0) * x1om;
    x1q5 = x1q6 = x1om;
    if (xdr) {
      x1qm(x1pe, x1pn + x1q5 - x1po);
      x1qm(x1pf, x1pn - x1q6 - x1po);
    }
    x1dw();
    xd8.xmh(xd8.xmc.xmd);
  };
  this.x1dj = function () {
    if (x1b5) {
      x1b3.removeChild(x19j);
      x1b5 = false;
    }
  };
  function focus() {
    if (!x1gl) {
      xad.xae("[epgpanel] focus");
      x1gl = !x1gl;
      x1cq(x1cp);
      x1pz();
    }
  }
  function x1e0() {
    if (x1gl) {
      xad.xae("[epgpanel] unfocus");
      x1cu(x1cp);
      x1py();
      x1gl = !x1gl;
    }
  }
  this.x1ju = function () {
    xmn.x1bk.xge(x2x.x31.x18q.x18t);
  };
  this.x1jt = function () {
    xmn.x1bk.xge(x2x.x31.x18q.x18u);
  };
  function x1nb() {
    if (x1pn + x1q5 < x1q1) {
      x1pn += x1q5;
      x1dw();
    }
  }
  function x1na() {
    if (x1pn - x1q6 > x1q2) {
      x1pn -= x1q6;
      x1dw();
    }
  }
  function x1nc() {
    xmn.xyw.xge({xfp: 1, xex: x1g9, xez: 1});
  }
  function x1nd() {
    xmn.xyu.xge({xfp: 1, xex: x1g9, xez: 1});
  }
  function x1pq() {
    xmn.x1ej.xge({xfp: 1, xex: x1g9, xez: 1, xfr: true});
  }
  function x1pr() {
    xmn.x1ek.xge({xfp: 1, xex: x1g9, xez: 1, xfr: true});
  }
  function x1i3() {
    if (x1b5) {
      xmn.x1gh.xge({xfp: x1g9, xex: x1g9, xez: 1});
    }
  }
  function x1i4() {
    if (x1b5) {
      xmn.x1gg.xge({xfp: x1g9, xex: x1g9, xez: 1});
    }
  }
  function x1pp() {
    if (x1ox) {
      var xv4 = xch.xbg();
      if (x1ox.end < xv4) {
        xad.xae("selected arc event");
        xmn.x1ns.xge({x13y: true, event: x1ox});
      } else if (x1ox.start > xv4) {
        xad.xae("selected future event");
        xmn.x1ns.xge({x13y: true, event: x9m});
      } else {
        xad.xae("selected now event");
        xmn.x1ns.xge({x13y: true, event: x9m});
      }
    } else {
      xmn.x1ns.xge({x13y: true, event: x9m});
    }
  }
  function x1dy(x1dz) {
    switch (x1dz) {
      case xda.KEY_UP:
      case xda.xiq + xda.KEY_UP:
        x1nc();
        break;
      case xda.KEY_DOWN:
      case xda.xiq + xda.KEY_DOWN:
        x1nd();
        break;
      case xda.KEY_RIGHT:
      case xda.xiq + xda.KEY_RIGHT:
        x1nb();
        break;
      case xda.KEY_LEFT:
      case xda.xiq + xda.KEY_LEFT:
        x1na();
        break;
      case xda.KEY_RETURN:
        x1dx();
        break;
      case xda.KEY_ENTER:
        x1pp();
        break;
      default:
        return false;
    }
    return true;
  }
  function x1dx() {
    xmn.x1ns.xge({x13y: false});
  }
  this.x1e1 = {x1dy: x1dy, x1dx: x1dx, focus: focus, x1e0: x1e0};
  this.x1d0 = function () {
    x1p0.x1d0();
    x1p2.x1d0();
    x1p3.style.background = x1cs.x1gt;
    x1p4.style.color = x1cs.x1gp;
    x1p5.style.color = x1cs.x1h2;
    x1p3.style.color = x1cs.x1gw;
    x1oy.style.background = x1cs.x1d1;
    x1oy.style.color = x1cs.x1d2;
    x1oz.style.background = x1cs.x1d1;
    x1p1.style.background = x1cs.x1gt;
    for (var x1cw = 0; x1cw < x1g9; x1cw++) {
      x11u[x1cw].x1pw.style.background = x1cs.x1r4;
      x11u[x1cw].x1pw.style.outlineColor = x1cs.x1ii;
      x11u[x1cw].x1pv.style.outlineColor = x1cs.x1ii;
    }
  };
  this.x1d6 = function (xjn) {
    x1ov = xjn;
    for (var x1cw = 0; x1cw < x1g9; x1cw++) {
      x11u[x1cw].title.style.fontSize = 1.5 * x1ov + "em";
      x11u[x1cw].title.style.left = 3.8 / x1ov + "em";
    }
    if (x1ov === 1) {
      x1ow = 90;
    } else if (x1ov === 0.9) {
      x1ow = 83;
    } else if (x1ov === 1.1) {
      x1ow = 90;
    } else if (x1ov === 1.2) {
      x1ow = 72;
    } else if (x1ov === 1.3) {
      x1ow = 72;
    }
  };
  var x1r5 = 10, x1r2 = 0;
  this.x15x = function () {
    if (x1b5 && ++x1r2 >= x1r5) {
      if (x1gl) {
        x1dw();
      }
    }
  };
};
x2x.x31.x1mq = function (x19t) {
  var x1b3 = x19t, x19j, x1r6 = {}, x1b4 = false;
  function x1d0() {
    x1r6.x1cr.style.background = "rgba(32,32,32,0.85)";
  }
  this.x1d0 = x1d0;
  this.x1d6 = function (xjn) {
    x1r6.name.style.fontSize = 1.8 * xjn + "em";
    x1r6.x8k.style.fontSize = 1.6 * xjn + "em";
  };
  function x1dh() {
    x19j = x19o("div", "css5g");
    x1r6.x1cr = x19j.appendChild(x19o("div", "css5h"));
    x1r6.name = x19j.appendChild(x19o("div", "css5i"));
    x1r6.x8k = x19j.appendChild(x19o("div", "css5j"));
    x1d0();
  }
  var x1dm;
  this.x1di = function (xrw) {
    x1dm = xrw;
    if (xrw.xu9().type === x2x.x30.xhx.xrx.xsa) {
      x1r6.name.innerHTML = "...";
      x1r6.x8k.innerHTML = "...";
      xrw.xuu(true, function () {
        if (xrw === x1dm) {
          var x16x = xrw.xvp();
          if (x16x) {
            x1r6.name.innerHTML = x16x.name || x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x88);
            x1r6.x8k.innerHTML = x16x.x8k || x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x86);
          } else {
            x1r6.name.innerHTML = xrw.title;
            x1r6.x8k.innerHTML = x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x86);
          }
        }
      });
    } else {
      x1r6.name.innerHTML = xrw.title || "--";
      x1r6.x8k.innerHTML = xrw.xub || x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x86);
    }
    if (!x1b4) {
      x1b3.appendChild(x19j);
      x1b4 = !x1b4;
    }
  };
  this.focus = function () {
    x1r6.name.style.borderBottomColor = x2x.x31.x1cs.x1ct;
  };
  this.x1e0 = function () {
    x1r6.name.style.borderBottomColor = x2x.x31.x1cs.x1eo;
  };
  this.x1dj = function () {
    x1dm = x9m;
    if (x1b4) {
      x19j = x1b3.removeChild(x19j);
      x1b4 = !x1b4;
    }
  };
  x1dh();
};
x2x.x31.x1mr = function (x19t) {
  var x1b3 = x19t, xah = this, _xg = xaa._xg, xda = x2x.x2y.xda, x1cs = x2x.x31.x1cs, x19j, x1b4 = false, x1b5 = false, x1r7, x1r8, x1r9, x1ra, x1rb, xmn = {x1bj: new x2x.xg3(this), x1bk: new x2x.xg3(this), x18v: new x2x.xg3(this), x1ms: new x2x.xg3(this), x1bl: new x2x.xg3(this), x1mt: new x2x.xg3(this), xyu: new x2x.xg3(this), xyw: new x2x.xg3(this), x1gg: new x2x.xg3(this), x1gh: new x2x.xg3(this), x13i: new x2x.xg3(this), xyx: new x2x.xg3(this), xyy: new x2x.xg3(this), x1ej: new x2x.xg3(this), x1ek: new x2x.xg3(this), x13j: new x2x.xg3(this), x13k: new x2x.xg3(this), x13l: new x2x.xg3(this), x13m: new x2x.xg3(this), x13n: new x2x.xg3(this)};
  this.xmn = xmn;
  var x1rc = function (x19t) {
    var x1rd = 45.4, x11u = [], x1be, x1re, x1rf, x1rg, x19j, x1fn, x1hh = 1, x1cp = -1, x1b5 = false, x1rh = 0.2, x1ri = 0.1, x1rj = 1.6, x1rk = 0.9, x1ec = 28, x1gf = {x1ak: x1rk, x1al: x1rj, x1aq: x1rh, x1ap: x1ri}, xmn = {xyu: new x2x.xg3(this), xyw: new x2x.xg3(this), x13i: new x2x.xg3(this), x1gg: new x2x.xg3(this), x1gh: new x2x.xg3(this), xyx: new x2x.xg3(this), xyy: new x2x.xg3(this), x1rl: new x2x.xg3(this), x1ej: new x2x.xg3(this), x1ek: new x2x.xg3(this), x1bj: new x2x.xg3(this)};
    this.xmn = xmn;
    this.x1jq = function () {
      return {xex: x1be, xez: 1};
    };
    function x1cq(xf6, x1gj) {
      var x10g = x11u[xf6];
      if (!x10g.x1gk || !x10g.x1gl || x1gj) {
        x10g.title.style.color = x1cs.x1gm;
        x10g.x11k.style.background = x1cs.x1gn;
        if (xdo(x10g.x1go.data.title) > x1ec) {
          x10g.title.innerHTML = "<marquee behavior='alternate' scrollamount='1' loop='2'>" + x10g.x1go.data.title + "</marquee>";
        }
        x10g.x1gl = x10g.x1gk = true;
      }
    }
    function x1cu(xf6) {
      var x10g = x11u[xf6];
      if (x10g.x1gl) {
        x10g.title.style.color = x1cs.x1gm;
        x10g.x11k.style.background = "transparent";
        if (xdo(x10g.x1go.data.title) > x1ec) {
          x10g.title.innerHTML = x10g.x1go.data.title;
        }
        x10g.x1gl = !x10g.x1gl;
      }
    }
    function x1ep(xf6) {
      var x10g = x11u[xf6];
      if (x10g.x1gk) {
        x10g.title.style.color = x1cs.x1gp;
        x10g.x11k.style.background = "transparent";
        if (x10g.x1gl) {
          if (xdo(x10g.x1go.data.title) > x1ec) {
            x10g.title.innerHTML = x10g.x1go.data.title;
          }
        }
        x10g.x1gk = !x10g.x1gk;
      }
    }
    function x1cv() {
      if (!x1b5) {
        xad.xae("[treelist] captureinput");
        xmn.x1bj.xge();
      } else {
        if (this.x1cw !== x1cp) {
          xmn.x13i.xge({xex: x1be, xez: 1, xf3: this.x1cw});
        } else {
          x1cq(this.x1cw);
        }
      }
    }
    function x1cx() {}
    function x1cy() {
      if (x1b5) {
        xmn.xyx.xge({xex: x1be, xez: 1});
      } else {
        xmn.x1bj.xge();
      }
    }
    function x1rm(x1cw) {
      var x10g = {};
      x10g.xf6 = x1cw;
      x10g.x11k = x19q("div", "css5o");
      x10g.x1hu = x10g.x11k.appendChild(x19q("div", "css5r"));
      x10g.title = x10g.x1hu.appendChild(x19q("div", "css5s"));
      x10g.x1hr = x10g.x11k.appendChild(x19q("div", "css5t"));
      x10g.xub = x10g.x1hr.appendChild(x19q("div", "css5u"));
      x10g.x1c7 = x10g.x11k.appendChild(x19q("img", "css5p"));
      x10g.x1h3 = x10g.x11k.appendChild(x19q("span", "css5q"));
      x10g.duration = x10g.x11k.appendChild(x19q("div", "css5v"));
      x10g.x1gz = x10g.duration.appendChild(x19q("div", "css5w"));
      x10g.x11k.onmouseover = x1cv;
      x10g.x11k.onmouseout = x1cx;
      x10g.x11k.onclick = x1cy;
      x10g.x11k.x1cw = x1cw;
      return x10g;
    }
    function x1rn(x10g) {
      x10g.x11k.style.height = x1re + "em";
      x10g.x11k.style.top = x1re * x10g.xf6 + "em";
      x10g.x1hu.style.left = x1rh + x1rj + 0.2 + "em";
      x10g.x1hr.style.left = x1rh + x1rj + 0.2 + "em";
      x10g.duration.style.bottom = x1rf + "em";
      x10g.duration.style.height = x1rg + "em";
    }
    function x1ik(x10g, xrw) {
      var x1im = xrw.xvp();
      if (typeof x1im !== x9n) {
        x10g.xub.innerHTML = x1im.name || "--";
        x1im = xrw.xw2(x1im, true);
        x10g.x1gz.style.width = x1im.xkb * 100 + "%";
      }
    }
    function x1ro(x10g, xy1, x15s) {
      x1au(x10g.x1c7, x1gf, xy1.data.pict, "");
      x10g.title.innerHTML = xy1.data.title || "--";
      x10g.x1gz.style.width = "0%";
      x10g.x1h3.innerHTML = xy1.xoy() + 1;
      x10g.x1go = xy1;
      if (xy1.xxu()) {
        var xrw = xy1.data;
        x10g.x1iq = true;
        x10g.xub.innerHTML = "...";
        x10g.x1hu.style.top = x10g.x1ht + "em";
        xrw.xuu(true, function (xv1) {
          if (x10g.x1iq && x10g.x1go.data === xrw) {
            if (xv1) {
              x1ik(x10g, xrw);
            }
          }
        });
      } else {
        x10g.x1hu.style.top = x10g.x1hs + "em";
        x10g.xub.innerHTML = " ";
      }
      if (x15s) {
        if (x1b5) {
          x1cq(x10g.xf6);
        } else {
          x1cu(x10g.xf6);
        }
        x1cp = x10g.xf6;
      } else {
        x1ep(x10g.xf6);
      }
      x10g.x11k.style.display = "";
    }
    this.x1dw = function () {
      var xy1 = x2x.x30.xd3.x14d();
      for (var x1cw = 0; x1cw < x1be; x1cw++) {
        var x1fd = xy1.xyc({xex: x1be, xez: 1, xf3: x1cw});
        if (x1fd) {
          var x15s = xy1.xyg({xex: x1be, xez: 1, xf3: x1cw});
          x1ro(x11u[x1cw], x1fd, x15s);
        } else {
          x11u[x1cw].x11k.style.display = "none";
        }
      }
      x1fn.x1dw(xy1.xeu({xex: x1be, xez: 1}));
    };
    function x1hz() {
      for (var x1cw = 0; x1cw < x1be; x1cw++) {
        var x10g = x11u[x1cw];
        if (!x10g) {
          x10g = x1rm(x1cw);
          x11u[x1cw] = x10g;
        }
        x1rn(x10g);
        x19j.appendChild(x10g.x11k);
      }
    }
    function x1hy() {
      for (var xd = 0; xd < x1be; xd++) {
        var x10g = x11u[xd];
        if (x10g) {
          x19j.removeChild(x10g.x11k);
          x1au(x10g.x1c7, x1gf, "", "");
        }
      }
    }
    function x1rp(x1dz) {
      switch (x1dz) {
        case xda.KEY_UP:
        case xda.xiq + xda.KEY_UP:
          xmn.xyw.xge({xex: x1be, xez: 1, xfp: 1});
          break;
        case xda.KEY_DOWN:
        case xda.xiq + xda.KEY_DOWN:
          xmn.xyu.xge({xex: x1be, xez: 1, xfp: 1});
          break;
        case xda.KEY_LEFT:
        case xda.xiq + xda.KEY_LEFT:
          xmn.xyy.xge({xex: x1be, xez: 1});
          break;
        case xda.KEY_RIGHT:
        case xda.xiq + xda.KEY_RIGHT:
          xmn.x1rl.xge({xex: x1be, xez: 1});
          break;
        case xda.KEY_ENTER:
        case xda.xiq + xda.KEY_ENTER:
          xmn.xyx.xge({xex: x1be, xez: 1});
          break;
        default:
          return false;
      }
      return true;
    }
    function x1dx() {}
    function x1e0() {
      if (x1b5) {
        x1cu(x1cp);
        x1b5 = false;
      }
    }
    function focus() {
      if (!x1b5) {
        x1b5 = true;
        if (x1cp > -1) {
          x1cq(x1cp);
        }
      }
    }
    this.x1e1 = {x1dy: x1rp, x1dx: x1dx, x1e0: x1e0, focus: focus};
    function x1d0() {
      x19j.style.background = x1cs.x1gt;
      var x1gu = x1cs.x1gv + " 1px 0 0px, " + x1cs.x1gv + " 0 1px 0px, " + x1cs.x1gv + " -1px 0 0px, " + x1cs.x1gv + " 0 -1px 0px";
      for (var x1cw = x11u.length; x1cw--;) {
        x11u[x1cw].title.style.color = x1cs.x1gp;
        x11u[x1cw].xub.style.color = x1cs.x1gw;
        x11u[x1cw].duration.style.background = x1cs.x1gy;
        x11u[x1cw].x1gz.style.background = x1cs.x1h0;
        x11u[x1cw].x1h3.style.color = x1cs.x1h4;
        x11u[x1cw].x1h3.style.textShadow = x1gu;
      }
      x1fn.x1d0();
    }
    this.x1d0 = x1d0;
    this.x1hw = function (xfk) {
      x1hy();
      x1be = xfk;
      x1re = x1rd / x1be;
      x1rf = 1.2000000000000002 / xfk;
      x1rg = 1.7999999999999998 / xfk;
      x1rh = 0.1;
      x1ri = 0.02 * x1re;
      x1rj = x1re - x1ri * 2;
      x1rk = x1rj / 16 * 9;
      x1ri = (x1re - x1rk) / 2;
      x1gf.x1ak = x1rk;
      x1gf.x1al = x1rj;
      x1gf.x1aq = x1rh;
      x1gf.x1ap = x1ri;
      x1hz();
      x1d0();
      x1d6(x1hh);
    };
    function x1d6(xjn) {
      x1hh = xjn;
      x1ec = 28 / xjn;
      var x1hj = 1.5 * xjn, x1hp = (x1re - x1hj * 1.25) / 2, x1ho = 0.1;
      for (var x1cw = x11u.length; x1cw--;) {
        var x10g = x11u[x1cw];
        x10g.title.style.fontSize = x1hj + "em";
        x10g.xub.style.fontSize = xjn * 1.3 + "em";
        x10g.x1hs = x1hp;
        x10g.x1ht = x1ho;
      }
    }
    this.x1d6 = x1d6;
    function x1i3() {
      xmn.x1gh.xge({xex: x1be, xez: 1, xfp: x1be});
    }
    function x1i4() {
      xmn.x1gg.xge({xex: x1be, xez: 1, xfp: x1be});
    }
    function x1gq() {
      xmn.x1ek.xge({xex: x1be, xez: 1, xfr: true, xfp: 1});
    }
    function x1gr() {
      xmn.x1ej.xge({xex: x1be, xez: 1, xfr: true, xfp: 1});
    }
    function x1ex(x16o) {
      if (x16o.deltaY > 0) {
        x1gr();
      } else {
        x1gq();
      }
    }
    function x1ey(x16o) {
      if (x16o.wheelDelta < 0) {
        x1gr();
      } else {
        x1gq();
      }
    }
    function x1dh(x19t) {
      x19j = x19t.appendChild(x19o("div", "css5n"));
      x19j.onwheel = x1ex;
      x19j.onmousewheel = x1ey;
      x1fn = new x2x.x31.x1fi(x19j);
      x1fn.xmn.xyw.xgc(x1i3, this);
      x1fn.xmn.xyu.xgc(x1i4, this);
      x1fn.xmn.x1bj.xgc(function () {
        if (!x1b5) {
          xmn.x1bj.xge();
        }
      }, this);
    }
    x1dh(x19t);
  };
  var x1rq = function (x19t) {
    var x1rd = 45.4, xah = this, x11u = [], x1be, x1re, x1b3 = x19t, x19j, x1fn, x1rr, x1rs, x1rt, x1b4 = false, x1ru = false, x1hh = 1, x1cp = -1, x1rv = 1, x1b5 = false, x1nt = false, x1ec = 49, x1rw = 864e5, x1id, x1q9, xyp, x1rx = new x2x.x30.xea([]), xmn = {x1nt: new x2x.xg3(this), x1nu: new x2x.xg3(this), xyu: new x2x.xg3(this), xyw: new x2x.xg3(this), xyx: new x2x.xg3(this), xyy: new x2x.xg3(this), x1rl: new x2x.xg3(this), x1bj: new x2x.xg3(this), x1bk: new x2x.xg3(this)};
    this.xmn = xmn;
    function x1cq(xf6, x1gj) {
      var x10g = x11u[xf6];
      if (!x10g.x1gk || !x10g.x1gl || x1gj) {
        x10g.name.style.color = x1cs.x1gm;
        x10g.name.style.background = x1cs.x1gn;
        if (x10g.event.name && xdo(x10g.event.name) > x1ec) {
          x10g.name.innerHTML = "<marquee behavior='alternate' scrollamount='1' loop='2'>" + x10g.event.name + "</marquee>";
        }
        x1rs.innerHTML = x2x.x2z.xch.xc3(x10g.event.start);
        x1rr.style.display = "";
        x10g.x1gl = x10g.x1gk = true;
      }
      x1cp = xf6;
    }
    function x1cu(xf6) {
      var x10g = x11u[xf6];
      if (x10g.x1gl) {
        x10g.name.style.color = x1cs.x1gm;
        x10g.name.style.background = "transparent";
        if (x10g.event.name && xdo(x10g.event.name) > x1ec) {
          x10g.name.innerHTML = x10g.event.name || x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x87);
        }
        x10g.x1gl = !x10g.x1gl;
      }
      x1cp = xf6;
    }
    function x1ep(xf6) {
      var x10g = x11u[xf6];
      if (x10g.x1gk) {
        x10g.name.style.color = x1cs.x1gp;
        x10g.name.style.background = "transparent";
        if (x10g.x1gl) {
          if (x10g.event.name && xdo(x10g.event.name) > x1ec) {
            x10g.name.innerHTML = x10g.event.name || x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x87);
          }
        }
        x10g.x1gk = !x10g.x1gk;
      }
    }
    function x1cv() {
      if (!x1b5) {
        xmn.x1bj.xge();
      } else {
        var xf6 = this.x1cw;
        if (x1cp !== xf6) {
          x1ep(x1cp);
          x1rx.xf7({xex: x1be, xez: 1, xf3: xf6});
          x1cq(xf6);
        }
      }
    }
    function x1cx() {}
    function x1cy() {
      x1o2();
    }
    function x1rm(x1cw) {
      var x10g = {};
      x10g.xf6 = x1cw;
      x10g.x11k = x19q("div", "css61");
      x10g.xce = x10g.x11k.appendChild(x19q("div", "css62"));
      x10g.x1h1 = x10g.x11k.appendChild(x19q("div", "css63"));
      x10g.name = x10g.x11k.appendChild(x19q("div", "css64"));
      x10g.x11k.onmouseover = x1cv;
      x10g.x11k.onmouseout = x1cx;
      x10g.x11k.onclick = x1cy;
      x10g.x11k.x1cw = x1cw;
      return x10g;
    }
    function x1rn(x10g) {
      x10g.x11k.style.height = x1re + "em";
      x10g.x11k.style.top = x1re * x10g.xf6 + "em";
      return x10g;
    }
    function x1hz(x1i0) {
      x1be = x1i0;
      x1re = x1rd / x1be;
      for (var x1cw = 0; x1cw < x1be; x1cw++) {
        var x10g = x11u[x1cw];
        if (!x10g) {
          x10g = x1rm(x1cw);
          x11u[x1cw] = x10g;
        }
        x19j.appendChild(x10g.x11k);
        x1rn(x10g);
      }
    }
    function x1hy() {
      for (var xd = 0; xd < x1be; xd++) {
        var x10g = x11u[xd];
        if (x10g) {
          x19j.removeChild(x10g.x11k);
        }
      }
    }
    function x1o4(x10g, event, x1il, x1o6, x1ry, x15s) {
      if (x10g.event !== event) {
        x10g.event = event;
        x10g.x1h1.innerHTML = x2x.x2z.xch.xby(event.start);
        x10g.name.innerHTML = event.x15p ? x1id : event.name || x1q9;
      }
      if (x1il) {
        if (x1b5) {
          x1cq(x10g.xf6);
        } else {
          x1cq(x10g.xf6);
          x1cu(x10g.xf6);
        }
      } else {
        x1ep(x10g.xf6);
      }
      var x1rz = " ";
      if (x1ry) {
        x1rz = "<span style='color:red'>R</span>";
      } else if (x1o6) {
        x1rz = "<span style='color:yellowgreen'>L</span>";
      }
      x10g.xce.innerHTML = x1rz;
      if (x15s) {
        x10g.x1h1.style.background = x1cs.x1fy;
      } else {
        x10g.x1h1.style.background = "";
      }
    }
    function x1s0() {
      var xv4 = x2x.x2z.xch.xbg(), x1oh = xyp.data.xw0();
      function x1s1(xf6, event) {
        if (event) {
          var x1il = x1rx.xf2({xex: x1be, xez: 1, xf3: xf6}), x1o6 = event.end > xv4 && event.start <= xv4, x1ry = xyp.data.xsb && event.end < xv4, x15s = event.end > x1oh && event.start <= x1oh;
          x1o4(x11u[xf6], event, x1il, x1o6, x1ry, x15s);
          x11u[xf6].x11k.style.display = "";
          if (x1il) {
            x1rs.innerHTML = x2x.x2z.xch.xc3(event.start);
            x1rr.style.display = "";
          }
        } else {
          x11u[xf6].x11k.style.display = "none";
        }
      }
      x1rx.xff({xex: x1be, xez: 1}, x1s1);
      x1fn.x1dw(x1rx.xeu({xex: x1be, xez: 1}));
    }
    function x1df() {
      for (var x1cw = 0; x1cw < x1be; x1cw++) {
        x11u[x1cw].x11k.style.display = "none";
        x11u[x1cw].event = x9m;
      }
    }
    function x1s2() {
      var x1cw = x1rv;
      x11u[x1cw].xce.innerHTML = " ";
      x11u[x1cw].x1h1.innerHTML = " ";
      x11u[x1cw].name.innerHTML = x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x71);
      x11u[x1cw].name.style.color = x1cs.x1gp;
      x11u[x1cw].x1gk = x11u[x1cw].x1gl = false;
      x11u[x1cw].x11k.style.display = "";
      x1cp = x1rv;
      x1b3.appendChild(x19j);
      x1ru = true;
    }
    function x1s3() {
      var x1cw = x1rv;
      x11u[x1cw].xce.innerHTML = " ";
      x11u[x1cw].x1h1.innerHTML = " ";
      x11u[x1cw].name.innerHTML = x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x87);
      x11u[x1cw].name.style.color = x1cs.x1gp;
      x11u[x1cw].x1gk = x11u[x1cw].x1gl = false;
      x11u[x1cw].x11k.style.display = "";
      x1cp = x1rv;
    }
    function x1dw() {
      if (!x1b4) return;
      x1rr.style.display = "none";
      xyp = x2x.x30.xd3.x10n();
      var x1s4 = xyp.data;
      if (x1ru) {
        x19j = x1b3.removeChild(x19j);
        x1ru = false;
      }
      if (xyp.xxu()) {
        x1df();
        x1fn.x1dw({top: 0, height: 0});
        x1s2();
        x1nt = true;
        x1rx.xg2([]);
        xyp.data.xuu(false, function (xv0) {
          if (x1s4 === xyp.data) {
            x1nt = false;
            if (xv0) {
              var xv4 = x2x.x2z.xch.xbg();
              var x1s5 = xyp.data.xw5(xv4 - x1rw * x2x.x30.x15v.x166, xv4 + x1rw * x2x.x30.x15v.x167);
              x1rx.xg2(x1s5);
              var x1oh = xyp.data.xw0(false);
              var x1ie = x1s5.length;
              for (; x1ie--;) {
                if (x1s5[x1ie].start <= x1oh && x1s5[x1ie].end > x1oh) {
                  break;
                }
              }
              x1rx.xf5(x1ie);
              x1rx.xfb({xex: x1be, xez: 1});
              if (x1cp >= 0) {
                x1ep(x1cp);
              }
              x1cp = 1;
              x1s0();
              x1b3.appendChild(x19j);
              x1ru = true;
            } else {
              xad.xbd("stream not have epg");
              x1s3();
            }
          }
        });
      }
    }
    this.x1di = function () {
      if (!x1b4) {
        x1id = x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x88);
        x1q9 = x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x87);
        x1b4 = !x1b4;
        x1ru = true;
        x1b3.appendChild(x19j);
        x1dw();
      }
    };
    this.x1dw = x1dw;
    this.x1dj = function () {
      if (x1b4) {
        if (x1ru) {
          x19j = x1b3.removeChild(x19j);
          x1ru = false;
        }
        x1b4 = !x1b4;
      }
    };
    this.x1d0 = function () {
      x19j.style.background = x1cs.x1s6;
      x1rr.style.background = x1cs.x1s6;
      for (var x1cw = x11u.length; x1cw--;) {
        x11u[x1cw].x1h1.style.color = x1cs.x1gw;
        x11u[x1cw].name.style.color = x1cs.x1gp;
      }
      x1rs.style.color = x1cs.x1gp;
      x1fn.x1d0();
    };
    this.x1hw = function (x16p) {
      x1hy();
      x1hz(x16p);
      x1rt.style.borderWidth = x1re / 2 + "em";
      x1d6(x1hh);
    };
    function x1d6(xjn) {
      x1hh = xjn;
      x1ec = 49 / xjn;
      var x1s7 = xjn * 1.4, x1s8 = 2 - 0.5 * (xjn - 0.9) * 2.5;
      for (var x1cw = x11u.length; x1cw--;) {
        x11u[x1cw].xce.style.fontSize = x1s7 + "em";
        x11u[x1cw].x1h1.style.fontSize = x1s7 + "em";
        x11u[x1cw].name.style.fontSize = x1s7 + "em";
        x11u[x1cw].xce.style.lineHeight = x1s8;
        x11u[x1cw].x1h1.style.lineHeight = x1s8;
        x11u[x1cw].name.style.lineHeight = x1s8;
      }
      x1rs.style.fontSize = xjn * 1.8 + "em";
    }
    this.x1d6 = x1d6;
    function x1ex(x16o) {
      if (x16o.deltaY > 0) {
        x1gr();
      } else {
        x1gq();
      }
    }
    function x1ey(x16o) {
      if (x16o.wheelDelta < 0) {
        x1gr();
      } else {
        x1gq();
      }
    }
    function x1dh() {
      x19j = x19o("div", "css5x");
      x19j.onwheel = x1ex;
      x19j.onmousewheel = x1ey;
      x1rt = x19j.appendChild(x19o("div", "css60"));
      x1rt.style.display = "none";
      x1fn = new x2x.x31.x1fi(x19j);
      x1fn.xmn.xyw.xgc(x1i3, this);
      x1fn.xmn.xyu.xgc(x1i4, this);
      x1fn.xmn.x1bj.xgc(function () {
        if (!x1b5) {
          xmn.x1bj.xge();
        }
      }, this);
      x1rr = x19j.appendChild(x19o("div", "css5y"));
      x1rs = x1rr.appendChild(x19o("div", "css5z"));
    }
    function x1o2() {
      if (x1rx.xep()) {
        return;
      }
      var xv4 = x2x.x2z.xch.xbg(), event = x1rx.xeq();
      if (event.end < xv4) {
        xad.xae("selected arc event");
        xmn.xyx.xge({x13y: true, xrw: x2x.x30.xd3.x10n().data, event: event});
      } else if (event.start > xv4) {
        xad.xae("selected future event");
        xmn.xyx.xge({x13y: false});
      } else {
        xad.xae("selected now event");
        xmn.xyx.xge({x13y: true, xrw: x2x.x30.xd3.x10n().data, event: event});
      }
    }
    function x1nc() {
      if (!x1nt && !x1rx.xep()) {
        x1rx.xft({xex: x1be, xez: 1, xfp: 1});
        x1s0();
      }
    }
    function x1nd() {
      if (!x1nt && !x1rx.xep()) {
        x1rx.xfj({xex: x1be, xez: 1, xfp: 1});
        x1s0();
      }
    }
    function x1i3() {
      if (!x1nt && !x1rx.xep()) {
        x1rx.xft({xex: x1be, xez: 1, xfp: x1be});
        x1s0();
      }
    }
    function x1i4() {
      if (!x1nt && !x1rx.xep()) {
        x1rx.xfj({xex: x1be, xez: 1, xfp: x1be});
        x1s0();
      }
    }
    function x1gq() {
      if (!x1nt && !x1rx.xep()) {
        x1rx.xft({xex: x1be, xez: 1, xfr: true, xfp: 1});
        x1s0();
      }
    }
    function x1gr() {
      if (!x1nt && !x1rx.xep()) {
        x1rx.xfj({xex: x1be, xez: 1, xfr: true, xfp: 1});
        x1s0();
      }
    }
    function x1rp(x1dz) {
      switch (x1dz) {
        case xda.KEY_UP:
        case xda.xiq + xda.KEY_UP:
          x1nc();
          break;
        case xda.KEY_DOWN:
        case xda.xiq + xda.KEY_DOWN:
          x1nd();
          break;
        case xda.KEY_LEFT:
        case xda.xiq + xda.KEY_LEFT:
          xmn.xyy.xge({xex: x1be, xez: 1});
          break;
        case xda.KEY_RIGHT:
        case xda.xiq + xda.KEY_RIGHT:
          xmn.x1bk.xge(x2x.x31.x18q.x18r);
          break;
        case xda.KEY_ENTER:
        case xda.xiq + xda.KEY_ENTER:
          x1o2();
          break;
        default:
          return false;
      }
      return true;
    }
    function x1dx() {}
    function x1e0() {
      if (x1b5) {
        if (x1cp >= 0) {
          x1cu(x1cp);
        }
        x1b5 = false;
      }
    }
    function focus() {
      if (!x1b5) {
        if (!x1nt && !x1rx.xep() && x1cp >= 0) {
          x1cq(x1cp);
        }
        x1b5 = true;
      }
    }
    this.x1e1 = {x1dy: x1rp, x1dx: x1dx, x1e0: x1e0, focus: focus};
    x1dh();
  };
  function x1s9() {
    this.style.background = x1cs.x1fy;
  }
  function x1sa() {
    this.style.background = x1cs.x1gt;
  }
  function x1sb() {
    if (!x2x.x30.xd3.x14d().xy7().xxu()) {
      xmn.xyx.xge(x1r9.x1jq());
    } else {
      x1rb.style.display = "none";
      x1r7.x1e1.x1e0();
      x1r7 = x1ra;
      x1r7.x1e1.focus();
      x1ra.x1di();
    }
  }
  function x1sc() {
    if (!x2x.x30.xd3.x14c()) {
      xmn.xyy.xge(x1r9.x1jq());
    }
    if (!x2x.x30.xd3.x14d().xyi()) {
      x1ra.x1dj();
      x1rb.style.display = "";
    }
  }
  function x1dh() {
    x19j = x19o("div", "css5k");
    x1r8 = x19j.appendChild(x19q("div", "css5l"));
    var x1sd = x1r8.appendChild(x19q("img", "css5m"));
    x1sd.src = x0 + "img/arrowLeft.png";
    x1r9 = new x1rc(x19j);
    x1rb = x19j.appendChild(x19q("div", "css5l"));
    var x1se = x1rb.appendChild(x19q("img", "css5m"));
    x1se.src = x0 + "img/arrowRight.png";
    x1rb.style.left = "34.8em";
    x1ra = new x1rq(x19j);
    x1r7 = x1r9;
    x1r7.x1e1.focus();
    x1r8.onmouseover = x1s9;
    x1r8.onmouseout = x1sa;
    x1r8.onclick = x1sc;
    x1rb.onmouseover = x1s9;
    x1rb.onmouseout = x1sa;
    x1rb.onclick = x1sb;
    x1r9.xmn.xyu.xgc(function (xg4, data) {
      xmn.xyu.xge(data);
    }, this);
    x1r9.xmn.xyw.xgc(function (xg4, data) {
      xmn.xyw.xge(data);
    }, this);
    xmn.x13i = x1r9.xmn.x13i;
    xmn.x1gg = x1r9.xmn.x1gg;
    xmn.x1gh = x1r9.xmn.x1gh;
    x1r9.xmn.xyy.xgc(function (xg4, data) {
      x1sc();
    }, this);
    x1r9.xmn.x1rl.xgc(function (xg4, data) {
      x1sb();
    }, this);
    x1r9.xmn.x1ej.xgc(function (xg4, data) {
      xmn.x1ej.xge(data);
    }, this);
    x1r9.xmn.x1ek.xgc(function (xg4, data) {
      xmn.x1ek.xge(data);
    }, this);
    x1r9.xmn.xyx.xgc(function (xg4, data) {
      if (x2x.x30.xd3.x10n().xxu()) {
        xmn.x1bl.xge(x1r9.x1jq());
      } else {
        xmn.xyx.xge(x1r9.x1jq());
      }
    }, this);
    function x1jg(xg4, data) {
      if (x1r7 !== xg4) {
        x1r7.x1e1.x1e0();
        x1r7 = xg4;
      }
      if (!x1b5) {
        xmn.x1bj.xge();
      } else {
        x1r7.x1e1.focus();
      }
    }
    x1r9.xmn.x1bj.xgc(x1jg, this);
    x1ra.xmn.xyy.xgc(function (xg4, data) {
      x1r7.x1e1.x1e0();
      x1r7 = x1r9;
      x1r7.x1e1.focus();
    }, this);
    x1ra.xmn.x1bj.xgc(x1jg, this);
    x1ra.xmn.x1bk.xgc(function (xg4, x1is) {
      switch (x1is) {
        case x2x.x31.x18q.x18r:
          xmn.x1bk.xge();
          break;
        default:
          x1r7.x1e1.x1e0();
          x1r7 = x1r9;
          x1r7.x1e1.focus();
          x1rb.style.display = "";
      }
    }, this);
    x1ra.xmn.xyx.xgc(function (xg4, data) {
      if (data.x13y) {
        if (!data.event || !data.xrw) {
          xmn.x1bl.xge(x1r9.x1jq());
        } else {
          xmn.x1mt.xge(data);
        }
      }
    }, this);
  }
  function x1jr(x1dz) {
    if (x1r7.x1e1.x1dy(x1dz)) {
      return true;
    }
    switch (x1dz) {
      case xda.KEY_RETURN:
        x1dx();
        break;
      default:
        return false;
    }
    return true;
  }
  function x1dx() {
    xmn.x1ms.xge();
  }
  function x1e0() {
    if (x1b5) {
      x1r7.x1e1.x1e0();
      x1b5 = false;
    }
  }
  function focus(x1is) {
    if (!x1b5) {
      switch (x1is) {
        case x2x.x31.x18q.x18t:
          if (x1r7 === x1r9) {
            var xyp = x2x.x30.xd3.x14d();
            if (xyp.xxy()) {
              var xev = x1r9.x1jq();
              xev.xfp = 1;
              xmn.x13m.xge(xev);
            }
          }
          x1r7.x1e1.focus();
          break;
        case x2x.x31.x18q.x18u:
          if (x1r7 === x1r9) {
            var xyp = x2x.x30.xd3.x14d();
            if (xyp.xxz()) {
              var xev = x1r9.x1jq();
              xev.xfp = 1;
              xmn.x13n.xge(xev);
            }
          }
          x1r7.x1e1.focus();
          break;
        case x2x.x31.x18q.x18r:
          x1r7.x1e1.x1e0();
          x1r7 = x1r9;
          x1r7.x1e1.focus();
          break;
        case x2x.x31.x18q.x18s:
          x1r7.x1e1.x1e0();
          x1r7 = x1ra;
          x1r7.x1e1.focus();
          break;
        default:
          x1r7.x1e1.focus();
      }
      x1b5 = true;
    }
  }
  this.x1dw = function () {
    if (x1b4) {
      x1r9.x1dw();
      x1ra.x1dw();
    }
  };
  this.x1di = function () {
    if (!x1b4) {
      x1b4 = !x1b4;
      xah.x1dw();
      x1b3.appendChild(x19j);
    }
  };
  this.x1dj = function () {
    if (x1b4) {
      x19j = x1b3.removeChild(x19j);
      x1b4 = !x1b4;
    }
  };
  this.x15x = function () {};
  this.x1d0 = function () {
    x1r8.style.background = x1cs.x1gt;
    x1rb.style.background = x1cs.x1gt;
    x1r9.x1d0();
    x1ra.x1d0();
  };
  this.x1d6 = function (xjn) {
    x1r9.x1d6(xjn);
    x1ra.x1d6(xjn);
  };
  this.x1hw = function (x1hx) {
    var xfk, x16p;
    switch (x1hx) {
      case x2x.x31.x18w.x18z:
        xfk = 6;
        x16p = 14;
        break;
      case x2x.x31.x18w.x18x:
        xfk = 10;
        x16p = 22;
        break;
      default:
        xfk = 8;
        x16p = 18;
        break;
    }
    x1r9.x1hw(xfk);
    x1ra.x1hw(x16p);
  };
  this.x1jt = function () {
    xad.xae("[snavigator] focus next");
    xmn.x1bk.xge(x2x.x31.x18q.x18u);
  };
  this.x1ju = function () {
    xad.xae("[snavigator] focus previous");
    xmn.x1bk.xge(x2x.x31.x18q.x18t);
  };
  this.x1e1 = {x1dy: x1jr, x1dx: x1dx, x1e0: x1e0, focus: focus};
  x1dh();
};
x2x.x31.x1sf = function (x19t) {
  var x19j = x19o("div", "css52"), x1b3 = x19t, x1b5 = false;
  var x1sg = x19j.appendChild(x19o("span", "css53"));
  x1sg.innerHTML = "Loading...";
  var x1sh = x19j.appendChild(x19o("img", "css54"));
  x1sh.src = x0 + "img/spinner.gif";
  this.x1di = function (data, x1si) {
    if (!x1b5) {
      x1b3.appendChild(x19j);
      x1b5 = true;
    }
    x1sg.innerHTML = data || " ";
    if (!x1si) {
      x1sh.style.display = "none";
    } else {
      x1sh.style.display = "";
    }
  };
  this.x1dj = function () {
    if (x1b5) {
      x19j = x1b3.removeChild(x19j);
      x1b5 = false;
    }
  };
};
x2x.x31.x1sj = function (x19t) {
  var x19j = x19o("div", "css55"), x1b3 = x19t, x1b5 = false, x1cs = x2x.x31.x1cs, x1sh = x19j.appendChild(x19o("img", "css57")), x1sg = x19j.appendChild(x19o("span", "css56"));
  x1sh.src = x0 + "img/esperar.gif";
  this.x1di = function (data) {
    if (!x1b5) {
      x1b3.appendChild(x19j);
      x1b5 = true;
    }
    x1sg.innerHTML = data || "";
  };
  this.x1dj = function () {
    if (x1b5) {
      x19j = x1b3.removeChild(x19j);
      x1b5 = false;
    }
  };
  this.x1d0 = function () {
    x19j.style.background = x1cs.x1d1;
    x1sg.style.color = x1cs.x1d2;
  };
  this.x1d6 = function (xjn) {
    x1sg.style.fontSize = 1.4 * xjn + "em";
    x1sg.style.top = 1.32 - 1.4 * xjn / 2 + "em";
    x19j.style.width = 15.4 * xjn + "em";
  };
};
x2x.x31.x1j0 = function (x19t) {
  var x19j = x19o("div", "css66"), x1b3 = x19t, x1b4 = false;
  this.x1di = function (x1em) {
    x19j.innerHTML = "<center>" + x1em + "</center>";
    if (!x1b4) {
      x1b3.appendChild(x19j);
      x1b4 = true;
    }
  };
  this.x1dj = function () {
    if (x1b4) {
      var x11x = x1b3.removeChild(x19j);
      x1b4 = false;
    }
  };
  function x1dx() {}
  this.x1e1 = {x1dy: x1dy, x1dx: x1dx};
};
x2x.x31.x1sk = function () {
  var xjf = x9o.getElementById("css3"), x31 = x2x.x31;
  function x1sl() {
    x31.x19i(xjf);
    if (x31.x197.x19h) {
      xad.xae("correct ui");
      x31.x190("css3", x31.x197.x198 + "px", x31.x197.x199 + "px");
      x31.x194("css6", x31.x197.x19e + "px", x31.x197.x19f + 3.8 * xaa.xjq * 10 / x31.x197.x19b + "px");
    }
  }
  this.x1d0 = function () {
    x31.x1sm.x1d0();
    x31.xdd.x1d0();
    x31.x1sn.x1d0();
    x31.navigator.x1d0();
    x31.x1so.x1d0();
    x31.x1sp.x1d0();
    x31.x1sq.x1d0();
    x31.x1sr.x1d0();
    x31.x1ss.x1d0();
    x31.x1st.x1d0();
    x31.x1su.x1d0();
    x31.x1sv.x1d0();
    x31.x1sw.x1d0();
    x31.x1sx.x1d0();
  };
  this.x1d6 = function (xjn) {
    var x1sy = xjn / 100;
    x31.x1sn.x1d6(x1sy);
    x31.navigator.x1d6(x1sy);
    x31.x1st.x1d6(x1sy);
    x31.x1su.x1d6(x1sy);
    x31.x1so.x1d6(x1sy);
    x31.x1sv.x1d6(x1sy);
    x31.xdd.x1d6(x1sy);
    x31.x1sx.x1d6(x1sy);
  };
  this.x1hw = function (x1hx) {
    x31.navigator.x1hw(x1hx);
    x31.x1so.x1hw(x1hx);
  };
  this.xmr = function () {
    xjf.style.width = "96em";
    xjf.style.height = "54em";
    x1sl();
    x31.x1sm = new x31.x1sz(xjf, xad);
    x31.xdd = new x31.x1t0(xjf);
    x31.x1sn = new x31.x1b2(xjf);
    x31.navigator = new x31.x1it(xjf);
    x31.x1so = new x31.x1kd(xjf);
    x31.x1sp = new x31.x1t1(xjf);
    x31.x1sq = new x31.x1t2(xjf);
    x31.x1sr = new x31.x1t3(xjf);
    x31.x1ss = new x31.x1t4(xjf);
    x31.x1st = new x31.x1nj(xjf);
    x31.x1su = new x31.x1ok(xjf);
    x31.x1t5 = new x31.x1sf(xjf);
    x31.x1sv = new x31.x1sj(xjf);
    x31.x1t6 = new x31.x1t7(xjf);
    x31.x1t8 = new x31.x1t9(xjf);
    x31.x1sw = new x31.x1ta(xjf);
    x31.x1sx = new x31.x1tb(xjf);
    this.x1d0();
  };
  this.x1tc = function () {
    return xjf;
  };
};
x2x.x31.x1td = function () {
  var xah = this, x1te = true, x1tf = -2, x1tg = [0, 1, 2, 3], x1th = 4, x1ti = {x1tj: [x2x.x2y.x37.x3f.x4g, x2x.x2y.x37.x3f.x4h, x2x.x2y.x37.x3f.x4i, x2x.x2y.x37.x3f.x4j], x1tk: [["#000003", "#000003"], ["#000300", "#000300"], ["#030000", "#030000"], ["#030303", "#030303"]], x1d1: [["rgba(45, 113, 170, 0.85)", "rgba(0, 0, 80, 0.8)"], ["rgba( 21, 135, 131, 0.85)", "rgba(10, 43, 40, 0.8)"], ["rgba( 149,  35,  65, 0.85)", "rgba(40, 17, 18, 0.70)"], ["rgba( 70,  70,  70, 0.85)", "rgba(22, 22, 22, 0.8)"]], x1eo: [["rgb(50, 43, 119)", "rgb(65, 58, 138)"], ["rgb( 22,  90,  92)", ""], ["rgb( 131,  32, 142)", "rgba(114, 18, 86, 0.9)"], ["rgb( 33,  33,  33)", "rgb(59, 72, 90)"]], x1ct: [["rgba(245,  74,  65, 0.85)", "rgb(0,80,180)"], ["rgba(196,  113,  94, 0.95)", "rgb(28,115,111)"], ["rgba( 67,  117, 209, 0.9)", "rgb(148, 43, 72)"], ["rgb(143, 146, 150)", "rgb(115, 122, 131)"]], x1d2: [["white", "rgb(230,230,230)"], ["white", "rgb(230,230,230)"], ["white", "rgb(230,230,230)"], ["white", "rgb(230,230,230)"]], x1d4: [["rgb(205,205,205)", "rgb(200,200,200)"], ["rgb(220,220,220)", "rgb(200,200,200)"], ["silver", "rgb(200,200,200)"], ["silver", "rgb(200,200,200)"]], x1en: [["white", ""], ["white", ""], ["white", ""], ["white", ""]], x1gt: [["rgba(255, 255, 255, 0.9)", "rgba(0, 0, 100, 0.7)"], ["rgba(255, 255, 255, 0.9)", "rgba(15, 66, 60, 0.7)"], ["rgba(255, 255, 255, 0.9)", "rgba(49, 23, 30, 0.7)"], ["rgba(255, 255, 255, 0.9)", "rgba(33, 33, 33, 0.7)"]], x1gn: [["rgb( 244, 204, 220)", "rgb(0,80,180)"], ["rgb( 228, 197, 195)", "rgb(35,130,126)"], ["rgb( 170, 212,  255)", "rgb(148, 43, 72)"], ["rgb(177, 182, 187)", "rgb(115, 122, 131)"]], x1fy: [["rgb( 214, 174, 190)", "rgb(20,72,155)"], ["rgb( 198, 167, 165)", "rgb(55,150,146)"], ["rgb( 150, 182,  225)", "rgb(118, 30, 58)"], ["rgb( 158,  158,  158)", "rgb( 84,  84,  84)"]], x1r4: [["rgba(240, 240, 240, 0.9)", "rgba(44, 44, 44, 0.9)"], ["rgba(240, 240, 240, 0.9)", "rgba(44, 44, 44, 0.9)"], ["rgba(240, 240, 240, 0.9)", "rgba(44, 44, 44, 0.9)"], ["rgba(240, 240, 240, 0.9)", "rgba(44, 44, 44, 0.9)"]], x1s6: [["rgba(225, 225, 225, 0.9)", "rgba(44, 44, 44, 0.9)"], ["rgba(225, 225, 225, 0.9)", "rgba(44, 44, 44, 0.9)"], ["rgba(225, 225, 225, 0.9)", "rgba(44, 44, 44, 0.9)"], ["rgba(240, 240, 240, 0.9)", "rgba(44, 44, 44, 0.9)"]], x1gp: [["rgb(  18, 78, 131)", "rgb(230,230,230)"], ["rgb(  112,  72,  31)", "rgb(230,230,230)"], ["rgb(  40,  17,  18)", "rgb(230,230,230)"], ["rgb(106, 104, 124)", "rgb(200,200,200)"]], x1tl: [["rgb(  41, 113, 175)", "#218ae5"], ["rgb( 55, 159, 131)", "rgb( 72, 217, 178)"], ["rgba( 40,  17,  18, 0.7)", "rgb( 255, 46, 55)"], ["rgb(56, 51, 99)", "rgb( 250, 250, 255)"]], x1gw: [["rgb(  0, 0, 0)", "rgb(190,190,190)"], ["rgba( 10,  43,  40, 0.8)", "rgb(200,200,200)"], ["rgba( 40,  17,  18, 0.7)", "rgb(200,200,200)"], ["rgb( 96,  96,  96)", "rgb(200,200,200)"]], x1h2: [["rgb(  80, 80, 80)", "yellowgreen"], ["rgba( 10,  43,  40, 0.8)", "rgb(230,242,72)"], ["rgba( 40,  17,  18, 0.7)", "rgb(84,205,100)"], ["rgb( 22,  22,  22)", "rgb(238,233,233)"]], x1gm: [["red", "#ffaf59"], ["red", "#ffaf59"], ["blue", "rgb(255,241,135)"], ["black", "rgb(250,255,250)"]], x1h4: [["black", "#E0E0E0"], ["black", "#E0E0E0"], ["black", "#E0E0E0"], ["black", "#E0E0E0"]], x1gv: [["#E0E0E0", "black"], ["#E0E0E0", "black"], ["#E0E0E0", "black"], ["#E0E0E0", "black"]], x1gy: [["#ccc", "rgb(10, 10, 110)"], ["#ccc", "rgb( 15,  66,  60)"], ["#ccc", "rgb(59,19,30)"], ["#ccc", "rgb(33, 33, 33)"]], x1h0: [["#74a6cc", ""], ["rgb( 15,  66,  60)", "rgb(202, 229, 151)"], ["rgb( 49,  23,  30)", "rgb(233,154,125)"], ["rgb( 33,  33,  33)", "#ccc"]], x1fu: [["#ccc", "rgb(0, 0, 80)"], ["#ccc", "rgb( 15,  66,  60)"], ["#ccc", "rgb(59,19,30)"], ["#ccc", "rgb(33, 33, 33)"]], x1fv: [["#4b83b4", ""], ["rgb( 15,  66,  60)", "rgb(202, 229, 151)"], ["#4b83b4", "rgb(233,154,125)"], ["#343366", "#ccc"]], x1ii: [["rgb(190,190,190)", "rgb(56, 56, 153)"], ["rgb(190,190,190)", "rgb(36,116,80)"], ["rgb(190,190,190)", "rgb(151,69,69)"], ["rgb(190,190,190)", "black"]]}, x1tm = ["img/bg.jpg", "img/wallpapers/001.jpg", "img/wallpapers/002.jpg", "img/wallpapers/003.jpg"];
  var x1tn = x9o.getElementById("css2");
  this.x1to = function () {
    var xd1 = [];
    for (var xd = 0; xd < x1tg.length; xd++) {
      xd1.push(x1ti.x1tj[x1tg[xd]]);
    }
    return xd1;
  };
  this.x1tp = function () {
    return x1tg;
  };
  this.x1tq = function () {
    return x1tm.length;
  };
  this.x1tr = function (x1ts, x1tt, x1tu, x1tv, x1tw, x1tx, x1ty, x1tz) {
    if (x1ts > x1tg.length) x1ts = 0;
    xah.x1u0(x1tt, x1tu, x1tv, x1tw, x1tx, x1ty, x1tz);
    var x1u1 = 0;
    if (x1tz) {
      x1u1 = 1;
    }
    for (var x1u2 in x1ti) {
      var x1u3 = x1ti[x1u2][x1ts];
      if (x1u3) {
        xah[x1u2] = x1u3[x1u1] || x1u3[0];
      } else xah[x1u2] = x1ti[x1u2][x1u1] || x1ti[x1u2][0];
    }
    x1tn.style.background = xah.x1tk;
  };
  var x1u4 = {x1u5: [{x1u6: -0.5, x1u7: -0.5}, {x1u6: 1, x1u7: -0.7}], x1u8: [{x1u6: -0.5, x1u7: 0.9}, {x1u6: -0.85, x1u7: 1}], xd0: function (xql, xqm) {
    var xky = [];
    return xky.push({x1u6: this.x1u5[0].x1u6 * xql, x1u7: this.x1u5[0].x1u7 * xql}), xky.push({x1u6: this.x1u5[1].x1u6 * xql, x1u7: this.x1u5[1].x1u7 * xql}), xky.push({x1u6: this.x1u8[0].x1u6 * xqm, x1u7: this.x1u8[0].x1u7 * xqm}), xky.push({x1u6: this.x1u8[1].x1u6 * xqm, x1u7: this.x1u8[1].x1u7 * xqm}), xky;
  }};
  function x12(xql, xqm, xky) {
    return xky === -1 ? xql : xql + (xqm - xql) / (1 + xky);
  }
  function x1u9(xql, xqm, xky) {
    return xky === -1 ? xqm : xqm + (xql - xqm) / (1 + xky);
  }
  function x1ua(xql, xqm, xky) {
    this.xwr = function (xql, xqm, xky) {
      this.x1ub = xql;
      this.x1uc = xqm;
      this.x1ud = xky;
    };
    this.x1ue = function () {
      return new x1ua(this.x1ub, this.x1uc, this.x1ud);
    };
    this.xwr(xql, xqm, xky);
  }
  function x1uf(r, g, xqm) {
    this.xwr = function (r, g, xqm) {
      this.x1ug = x9v.round(r);
      this.x1uh = x9v.round(g);
      this.x1ui = x9v.round(xqm);
    };
    this.x1ue = function () {
      return new x1uf(this.x1ug, this.x1uh, this.x1ui);
    };
    this.x1uj = function () {
      this.x1ug = 51 * x9v.round(this.x1ug / 51);
      this.x1uh = 51 * x9v.round(this.x1uh / 51);
      this.x1ui = 51 * x9v.round(this.x1ui / 51);
    };
    this.x1uk = function () {
      this.x1ug = this.x1uh = this.x1ui = x9v.round((0.299 * this.x1ug + 0.587 * this.x1uh + 0.114 * this.x1ui) / 255 * 255);
    };
    this.x1ul = function (x1um) {
      if (x1um) {
        return "rgba(" + this.x1ug + xa4.fromCharCode(44) + this.x1uh + xa4.fromCharCode(44) + this.x1ui + xa4.fromCharCode(44) + x1um + ")";
      }
      return "rgb(" + this.x1ug + xa4.fromCharCode(44) + this.x1uh + xa4.fromCharCode(44) + this.x1ui + ")";
    };
    this.xwr(r, g, xqm);
  }
  var xt2 = {x1ug: {x1un: new x1uf(255, 0, 0), x1uo: new x1ua(0, 1, 1)}, x1up: {x1un: new x1uf(255, 255, 0), x1uo: new x1ua(120, 1, 1)}, x1uh: {x1un: new x1uf(0, 255, 0), x1uo: new x1ua(180, 1, 0.8)}, x1uq: {x1un: new x1uf(0, 255, 255), x1uo: new x1ua(210, 1, 0.6)}, x1ui: {x1un: new x1uf(0, 0, 255), x1uo: new x1ua(255, 0.85, 0.7)}, x1ur: {x1un: new x1uf(255, 0, 255), x1uo: new x1ua(315, 1, 0.65)}};
  var n = {x1us: function (xql) {
    return xql < 120 ? this.x1ut : xql < 180 ? this.x1uu : xql < 210 ? this.x1uv : xql < 255 ? this.x1uw : xql < 315 ? this.x1ux : this.x1uy;
  }, x1ut: {xql: xt2.x1ug, xqm: xt2.x1up, x1u9: function (xql) {
    return 0 === xql ? -1 : 0.5 * x9v.tan((120 - xql) / 120 * x9v.PI / 2);
  }, x1uz: function (xql) {
    return xql === -1 ? 0 : 120 - 120 * x9v.atan(xql / 0.5) / x9v.PI * 2;
  }, g: x12, x1v0: function (xql, xqm, xky) {
    return new x1uf(xql, xqm, xky);
  }}, x1uu: {xql: xt2.x1up, xqm: xt2.x1uh, x1u9: function (xql) {
    return 180 === xql ? -1 : 0.5 * x9v.tan((xql - 120) / 60 * x9v.PI / 2);
  }, x1uz: function (xql) {
    return xql === -1 ? 180 : 120 + 60 * x9v.atan(xql / 0.5) / x9v.PI * 2;
  }, g: x1u9, x1v0: function (xql, xqm, xky) {
    return new x1uf(xqm, xql, xky);
  }}, x1uv: {xql: xt2.x1uh, xqm: xt2.x1uq, x1u9: function (xql) {
    return 180 === xql ? -1 : 0.75 * x9v.tan((210 - xql) / 30 * x9v.PI / 2);
  }, x1uz: function (xql) {
    return xql === -1 ? 180 : 210 - 30 * x9v.atan(xql / 0.75) / x9v.PI * 2;
  }, g: x12, x1v0: function (xql, xqm, xky) {
    return new x1uf(xky, xql, xqm);
  }}, x1uw: {xql: xt2.x1uq, xqm: xt2.x1ui, x1u9: function (xql) {
    return 255 === xql ? -1 : 1.33 * x9v.tan((xql - 210) / 45 * x9v.PI / 2);
  }, x1uz: function (xql) {
    return xql === -1 ? 255 : 210 + 45 * x9v.atan(xql / 1.33) / x9v.PI * 2;
  }, g: x1u9, x1v0: function (xql, xqm, xky) {
    return new x1uf(xky, xqm, xql);
  }}, x1ux: {xql: xt2.x1ui, xqm: xt2.x1ur, x1u9: function (xql) {
    return 255 === xql ? -1 : 1.33 * x9v.tan((315 - xql) / 60 * x9v.PI / 2);
  }, x1uz: function (xql) {
    return xql === -1 ? 255 : 315 - 60 * x9v.atan(xql / 1.33) / x9v.PI * 2;
  }, g: x12, x1v0: function (xql, xqm, xky) {
    return new x1uf(xqm, xky, xql);
  }}, x1uy: {xql: xt2.x1ur, xqm: xt2.x1ug, x1u9: function (xql) {
    return 0 === xql ? -1 : 1.33 * x9v.tan((xql - 315) / 45 * x9v.PI / 2);
  }, x1uz: function (xql) {
    return xql === -1 ? 0 : 315 + 45 * x9v.atan(xql / 1.33) / x9v.PI * 2;
  }, g: x1u9, x1v0: function (xql, xqm, xky) {
    return new x1uf(xql, xky, xqm);
  }}, x1v1: function (xql) {
    var xqm, xky, d, x12;
    return xql %= 360, x12 = this.x1us(xql), d = x12.x1u9(xql), xky = x12.g(x12.xql.x1uo.x1ud, x12.xqm.x1uo.x1ud, d), xqm = x12.g(x12.xql.x1uo.x1uc, x12.xqm.x1uo.x1uc, d), {x1uo: new x1ua(xql, xqm, xky), x1un: this.x1v2(xql, xqm, xky, x12, d)};
  }, x1v3: function (xql, xqm, xky) {
    var d, x12;
    return d = this.x1us(xql), x12 = d.x1u9(xql), this.x1v2(xql, xqm, xky, d, x12);
  }, x1v2: function (xql, xqm, xky, d, x12) {
    return xql = d.xql.x1un, xql = x9v.max(xql.x1ug, x9v.max(xql.x1uh, xql.x1ui)), xql *= xky, xqm = xql * (1 - xqm), d.x1v0(xql, x12 === -1 ? xqm : (xql + xqm * x12) / (1 + x12), xqm);
  }, x1v4: function (xql) {
    var xqm, xky, d;
    return xql.x1ug === xql.x1ui && xql.x1ug === xql.x1uh ? (xky = xqm = 0, d = (0.299 * xql.x1ug + 0.587 * xql.x1uh + 0.114 * xql.x1ui) / 255) : (d = x9v.max(xql.x1ug, x9v.max(xql.x1uh, xql.x1ui)), xky = x9v.min(xql.x1ug, x9v.min(xql.x1uh, xql.x1ui)), d === xql.x1ug ? xky === xql.x1ui ? (xql = xql.x1uh, xqm = this.x1ut) : (xql = xql.x1ui, xqm = this.x1uy) : d === xql.x1uh ? xky === xql.x1ug ? (xql = xql.x1ui, xqm = this.x1uv) : (xql = xql.x1ug, xqm = this.x1uu) : xky === xql.x1ug ? (xql = xql.x1uh, xqm = this.x1uw) : (xql = xql.x1ug, xqm = this.x1ux), xql = xql === xky ? -1 : (d - xql) / (xql - xky), xqm = xqm.x1uz(xql), xky = (d - xky) / d, d /= 255), new x1ua(xqm, xky, d);
  }};
  function xh7(xql, xqm, xky, d, x12) {
    for (this.x1v5 = function (xql, xqm, xky) {
      return xql = new x1ua(xql.x1ub, xqm <= 0 ? xql.x1uc * (xqm + 1) : xql.x1uc + (1 - xql.x1uc) * xqm, xky <= 0 ? xql.x1ud * (xky + 1) : xql.x1ud + (1 - xql.x1ud) * xky), xqm = n.x1v3(xql.x1ub, xql.x1uc, xql.x1ud), {x1uo: xql, x1un: xqm};
    }, this.x1v6 = function (xql, xqm, xky) {
      return xql = new x1ua(xql.x1ub, xqm, xky), xqm = n.x1v3(xql.x1ub, xql.x1uc, xql.x1ud), {x1uo: xql, x1un: xqm};
    }, this.x1v7 = function (xql) {
      return this.x1v8[xql].x1uo;
    }, this.x1v9 = function (xql) {
      return this.x1v8[xql].x1un;
    }, this.x1ub = xql, this.x1va = n.x1v1(xql), this.x1vb = this.x1v5(this.x1va.x1uo, xqm, xky), this.x1v8 = [], x12[0] ? this.x1v8.push(this.x1v6(this.x1va.x1uo, x12[0][0], x12[0][1])) : this.x1v8.push(this.x1vb), xql = 0, xqm = d.length; xql < xqm; xql++) this.x1v8[xql + 1] = x12[xql + 1] ? this.x1v6(this.x1va.x1uo, x12[xql + 1][0], x12[xql + 1][1]) : this.x1v5(this.x1vb.x1uo, d[xql].x1u6, d[xql].x1u7);
  }
  function x1vc(x1tu, x1tv, x1tw, x1tx) {
    x1tv = -0.01 * (100 - x1tv);
    x1tw = -0.01 * (100 - x1tw);
    x1tx = 0.01 * x1tx;
    var x1u6 = x1tv, x1u7 = x1tw, x1vd = x1tx, x1ve = x1tx;
    return new xh7(x1tu, x1u6, x1u7, x1u4.xd0(x1vd, x1ve), []);
  }
  var x1vf, x1vg, x1vh, x1vi = {x1vj: 0, x1vk: 1, x1vl: 2, x1u8: 3, x1vm: 4}, x1vn = [x1vi.x1vl, x1vi.x1vk, x1vi.x1vj, x1vi.x1u8, x1vi.x1vm];
  var x1vo = new x1uf(255, 255, 255), x1vp = new x1uf(240, 240, 240), x1vq = new x1uf(180, 180, 180), x1vr = new x1uf(150, 150, 150), x1vs = new x1uf(80, 80, 80), x1vt = new x1uf(50, 50, 50), x1vu = new x1uf(0, 0, 0);
  this.x1u0 = function (x1vv, x1vw, x1tv, x1tw, x1tx, x1ty, x1tz) {
    var x1vx = x1ty / 100, x1vy = x1vx + 0.05;
    if (x1vy > 1) {
      x1vy = 1;
    }
    var x1tu = x1vv, x1vz = 180 - x1vw, x1w0 = x1tu + x1vz, x1w1 = x1tu - x1vz;
    if (x1w0 > 360) x1w0 -= 360;
    if (x1w1 < 0) x1w1 += 360;
    x1vf = x1vc(x1tu, x1tv, x1tw, x1tx);
    x1vg = x1vc(x1w0, x1tv, x1tw, x1tx);
    x1vh = x1vc(x1w1, x1tv, x1tw, x1tx);
    x1ti.x1tk[x1th] = [x1vu.x1ul()];
    x1ti.x1d1[x1th] = [x1vf.x1v8[x1vi.x1vj].x1un.x1ul(x1vx)];
    x1ti.x1eo[x1th] = [x1vf.x1v8[x1vi.x1vl].x1un.x1ul(x1vy)];
    x1ti.x1ct[x1th] = [x1vg.x1v8[x1vi.x1vj].x1un.x1ul()];
    x1ti.x1d2[x1th] = [x1vo.x1ul()];
    x1ti.x1d4[x1th] = [x1vp.x1ul()];
    x1ti.x1en[x1th] = [x1vo.x1ul()];
    x1ti.x1gt[x1th] = [x1vo.x1ul(x1vy), x1vf.x1v8[x1vi.x1vk].x1un.x1ul(x1vx)];
    x1ti.x1gn[x1th] = [x1vg.x1v8[x1vi.x1vm].x1un.x1ul(x1vy), x1vg.x1v8[x1vi.x1vj].x1un.x1ul(x1vy)];
    x1ti.x1fy[x1th] = [x1vg.x1v8[x1vi.x1u8].x1un.x1ul(x1vy)];
    x1ti.x1r4[x1th] = [x1vp.x1ul(x1vy), x1vs.x1ul(x1vy)];
    x1ti.x1s6[x1th] = [x1vp.x1ul(x1vy), x1vt.x1ul(x1vy)];
    x1ti.x1gp[x1th] = [x1vf.x1v8[x1vi.x1vl].x1un.x1ul(), x1vo.x1ul()];
    x1ti.x1gm[x1th] = [x1vg.x1v8[x1vi.x1vj].x1un.x1ul(), x1vh.x1v8[x1vi.x1u8].x1un.x1ul()];
    x1ti.x1gw[x1th] = [x1vf.x1v8[x1vi.x1vk].x1un.x1ul(), x1vp.x1ul()];
    x1ti.x1h2[x1th] = [x1vh.x1v8[x1vi.x1vk].x1un.x1ul(), x1vg.x1v8[x1vi.x1u8].x1un.x1ul()];
    x1ti.x1tl[x1th] = [x1vg.x1v8[x1vi.x1vl].x1un.x1ul(), x1vg.x1v8[x1vi.x1vm].x1un.x1ul()];
    x1ti.x1h0[x1th] = [x1vf.x1v8[x1vi.x1vj].x1un.x1ul(), x1vf.x1v8[x1vi.x1u8].x1un.x1ul()];
    x1ti.x1gy[x1th] = ["#ccc", x1vf.x1v8[x1vi.x1vk].x1un.x1ul()];
    x1ti.x1fv[x1th] = [x1vf.x1v8[x1vi.x1vj].x1un.x1ul(), x1vf.x1v8[x1vi.x1u8].x1un.x1ul()];
    x1ti.x1fu[x1th] = ["#ccc", x1vf.x1v8[x1vi.x1vj].x1un.x1ul()];
    x1ti.x1ii[x1th] = [x1vf.x1v8[x1vi.x1vm].x1un.x1ul(), x1vf.x1v8[x1vi.x1vl].x1un.x1ul()];
    x1ti.x1h4[x1th] = [x1vu.x1ul(), x1vp.x1ul()];
    x1ti.x1gv[x1th] = [x1vp.x1ul(), x1vu.x1ul()];
    if (x1tv <= 25) {
      if (x1tw > 50) {
        x1ti.x1en[x1th][1] = x1vt.x1ul();
      }
      x1ti.x1gm[x1th][1] = x1vo.x1ul();
      x1ti.x1tl[x1th][1] = x1vo.x1ul();
    }
  };
  var x1w2 = 26;
  this.x1w6 = function () {
    var x1w7 = "", x1w8 = 11, x1w9 = 1.6, xf6, x1wa = x1w2 / 5;
    for (xf6 = 0; xf6 < 5; xf6++) {
      x1w7 += ["<div class='css7' style='background:", x1vf.x1v8[x1vn[xf6]].x1un.x1ul(), ";left:", xf6 * x1wa, "em;top:", x1w8, "em;width:", x1wa, "em;height:", x1w9, "em;'></div>"].join("");
    }
    for (xf6 = 0; xf6 < 5; xf6++) {
      x1w7 += ["<div class='css7' style='background:", x1vg.x1v8[x1vn[xf6]].x1un.x1ul(), ";left:", xf6 * x1wa, "em;top:", x1w8 + x1w9, "em;width:", x1wa, "em;height:", x1w9, "em;'></div>"].join("");
    }
    for (xf6 = 0; xf6 < 5; xf6++) {
      x1w7 += ["<div class='css7' style='background:", x1vh.x1v8[x1vn[xf6]].x1un.x1ul(), ";left:", xf6 * x1wa, "em;top:", x1w8 + x1w9 * 2, "em;width:", x1wa, "em;height:", x1w9, "em;'></div>"].join("");
    }
    x1wa = x1w2 / 7;
    x1w7 += ["<div class='css7' style='background:", x1vu.x1ul(), ";left:", 0, "em;top:", x1w8 + x1w9 * 3, "em;width:", x1wa, "em;height:", x1w9, "em;'></div>"].join("");
    x1w7 += ["<div class='css7' style='background:", x1vt.x1ul(), ";left:", 1 * x1wa, "em;top:", x1w8 + x1w9 * 3, "em;width:", x1wa, "em;height:", x1w9, "em;'></div>"].join("");
    x1w7 += ["<div class='css7' style='background:", x1vs.x1ul(), ";left:", 2 * x1wa, "em;top:", x1w8 + x1w9 * 3, "em;width:", x1wa, "em;height:", x1w9, "em;'></div>"].join("");
    x1w7 += ["<div class='css7' style='background:", x1vr.x1ul(), ";left:", 3 * x1wa, "em;top:", x1w8 + x1w9 * 3, "em;width:", x1wa, "em;height:", x1w9, "em;'></div>"].join("");
    x1w7 += ["<div class='css7' style='background:", x1vq.x1ul(), ";left:", 4 * x1wa, "em;top:", x1w8 + x1w9 * 3, "em;width:", x1wa, "em;height:", x1w9, "em;'></div>"].join("");
    x1w7 += ["<div class='css7' style='background:", x1vp.x1ul(), ";left:", 5 * x1wa, "em;top:", x1w8 + x1w9 * 3, "em;width:", x1wa, "em;height:", x1w9, "em;'></div>"].join("");
    x1w7 += ["<div class='css7' style='background:", x1vo.x1ul(), ";left:", 6 * x1wa, "em;top:", x1w8 + x1w9 * 3, "em;width:", x1wa, "em;height:", x1w9, "em;'></div>"].join("");
    return x1w7;
  };
  this.x1wd = function () {
    var x1we = "", x1w9 = 1.25, x1w8 = 3, x1wa;
    x1wa = x1w2 / 2;
    x1we += "<div class='css7' style='background:" + this.x1d1 + ";color:" + this.x1d2 + ";left:" + 0 + "em;top:" + x1w8 + "em;width:" + x1wa + "em;height:" + x1w9 + "em;'>" + "CP#1" + "</div>";
    x1we += "<div class='css7' style='background:" + this.x1d1 + ";color:" + this.x1d4 + ";left:" + x1wa + "em;top:" + x1w8 + "em;width:" + x1wa + "em;height:" + x1w9 + "em;'>" + "CP#2" + "</div>";
    x1wa = x1w2 / 4;
    x1we += "<div class='css7' style='background:" + this.x1gt + ";color:" + this.x1gp + ";left:" + 0 + "em;top:" + (x1w8 + x1w9) + "em;width:" + x1wa + "em;height:" + x1w9 + "em;'>" + "CS#1" + "</div>";
    x1we += "<div class='css7' style='background:" + this.x1gt + ";color:" + this.x1gw + ";left:" + x1wa + "em;top:" + (x1w8 + x1w9) + "em;width:" + x1wa + "em;height:" + x1w9 + "em;'>" + "CS#2" + "</div>";
    x1we += "<div class='css7' style='background:" + this.x1gt + ";color:" + this.x1h2 + ";left:" + x1wa * 2 + "em;top:" + (x1w8 + x1w9) + "em;width:" + x1wa + "em;height:" + x1w9 + "em;'>" + "CS#3" + "</div>";
    x1we += "<div class='css7' style='background:" + this.x1gt + ";color:" + this.x1tl + ";left:" + x1wa * 3 + "em;top:" + (x1w8 + x1w9) + "em;width:" + x1wa + "em;height:" + x1w9 + "em;'>" + "CS#4" + "</div>";
    x1we += "<div class='css7' style='background:" + this.x1gt + ";color:" + this.x1gm + ";left:" + 0 + "em;top:" + (x1w8 + x1w9 * 2) + "em;width:" + x1wa + "em;height:" + x1w9 + "em;'>" + "CS#1s" + "</div>";
    x1we += "<div class='css7' style='background:" + this.x1gt + ";color:" + this.x1gw + ";left:" + x1wa + "em;top:" + (x1w8 + x1w9 * 2) + "em;width:" + x1wa + "em;height:" + x1w9 + "em;'>" + "CS#2" + "</div>";
    x1we += "<div class='css7' style='background:" + this.x1gt + ";color:" + this.x1h2 + ";left:" + x1wa * 2 + "em;top:" + (x1w8 + x1w9 * 2) + "em;width:" + x1wa + "em;height:" + x1w9 + "em;'>" + "CS#3" + "</div>";
    x1we += "<div class='css7' style='background:" + this.x1gt + ";color:" + this.x1tl + ";left:" + x1wa * 3 + "em;top:" + (x1w8 + x1w9 * 2) + "em;width:" + x1wa + "em;height:" + x1w9 + "em;'>" + "CS#4" + "</div>";
    x1we += "<div class='css7' style='background:" + this.x1gn + ";color:" + this.x1gm + ";left:" + 0 + "em;top:" + (x1w8 + x1w9 * 3) + "em;width:" + x1wa + "em;height:" + x1w9 + "em;'>" + "CS#1s" + "</div>";
    x1we += "<div class='css7' style='background:" + this.x1gn + ";color:" + this.x1gw + ";left:" + x1wa + "em;top:" + (x1w8 + x1w9 * 3) + "em;width:" + x1wa + "em;height:" + x1w9 + "em;'>" + "CS#2" + "</div>";
    x1we += "<div class='css7' style='background:" + this.x1gn + ";color:" + this.x1h2 + ";left:" + x1wa * 2 + "em;top:" + (x1w8 + x1w9 * 3) + "em;width:" + x1wa + "em;height:" + x1w9 + "em;'>" + "CS#3" + "</div>";
    x1we += "<div class='css7' style='background:" + this.x1gn + ";color:" + this.x1tl + ";left:" + x1wa * 3 + "em;top:" + (x1w8 + x1w9 * 3) + "em;width:" + x1wa + "em;height:" + x1w9 + "em;'>" + "CS#4" + "</div>";
    x1wa = x1w2 / 3;
    x1we += "<div class='css7' style='background:" + this.x1d1 + ";color:" + this.x1d2 + ";left:" + 0 + "em;top:" + (x1w8 + x1w9 * 4) + "em;width:" + x1wa + "em;height:" + x1w9 + "em;'>" + "CP#1" + "</div>";
    x1we += "<div class='css7' style='background:" + this.x1eo + ";color:" + this.x1d2 + ";left:" + x1wa + "em;top:" + (x1w8 + x1w9 * 4) + "em;width:" + x1wa + "em;height:" + x1w9 + "em;'>" + "CP#1" + "</div>";
    x1we += "<div class='css7' style='background:" + this.x1ct + ";color:" + this.x1d2 + ";left:" + x1wa * 2 + "em;top:" + (x1w8 + x1w9 * 4) + "em;width:" + x1wa + "em;height:" + x1w9 + "em;'>" + "CP#1" + "</div>";
    return x1we;
  };
  this.x1wf = function () {
    if (!x1te && x1tf >= 0) {
      x1tn.style.display = "";
      x1te = true;
    }
  };
  this.x1wg = function () {
    if (x1te) {
      x1tn.style.display = "none";
      x1te = false;
    }
  };
  this.x1wh = function (x1wi) {
    if (x1wi > x1tm.length) x1wi = 0;
    if (x1wi !== x1tf) {
      var x1wj = "";
      xah.x1wg();
      if (x1wi >= 0) {
        x1wj = x0 + x1tm[x1wi];
      }
      x1tf = x1wi;
      if (x1wi >= 0) {
        if (x1wj) {
          xah.x1wf();
        }
        x1tn.src = x1wj;
      }
    }
  };
  var x1wk = 4;
  x1tg.push(4);
  x1ti.x1tj[x1wk] = x2x.x2y.x37.x3f.x4k;
};
x2x.x31.x1cs = new x2x.x31.x1td;
x2x.x1wl = function () {
  var xah = this, x31 = x2x.x31, x37 = x2x.x2y.x37, xd3 = x2x.x30.xd3, xuy = x2x.x30.xuy, xhx = x2x.x30.xhx, xda = x2x.x2y.xda, x1wm = xkn, xcz = xaa.xcz, x1wn = x9o.body, x1wo = {x1dy: function () {
    return false;
  }, x1dx: xa8, focus: xa8, x1e0: xa8}, x1wp = this, x1wq = xa8, x1wr, x1ws, x1wt, x1wu = 500, x103, xgs = {}, x1wv = {x1ww: 0, x1z: 1}, x1wx = x1wv.x1ww;
  function x1wy(x1j5, x18q, x1wz) {
    if (x1wo !== x1j5.x1e1) {
      x1wo.x1e0();
      x1wo = x1j5.x1e1;
      x1wo.focus(x18q);
    } else if (x1wz) {
      x1wo.focus(x18q);
    }
  }
  xgs.xb9 = new x2x.xgf(xa8, function () {
    return true;
  }, xa8, "NONE", "CTRL");
  xgs.x1x0 = new x2x.xgf(function () {
    x31.x1cs.x1wf();
    x1wx = x1wv.x1ww;
    var xyp = xd3.x14d();
    switch (xyp.xwy) {
      case x2x.x30.xwt.xwz.xx6:
        x31.x1sn.x1dk(x31.x1sn.x1bv.x1bw);
        x31.x1sn.x1ds(x37.x3f.x4s);
        break;
      default:
        if (xyp.xyi()) {
          x31.x1sn.x1dk(x31.x1sn.x1bv.xr4);
          x31.x1sn.x1ds(xd3.x14d().data.title);
        } else {
          x31.x1sn.x1dk(x31.x1sn.x1bv.back);
          x31.x1sn.x1ds(xd3.x14d().data.title);
        }
    }
    x31.navigator.x1di();
    x1wy(x31.navigator);
    if (!xd3.xzx()) {
      x31.navigator.x1dw();
    } else {
      x31.navigator.xz2();
    }
    x31.x1sn.x1di();
  }, function () {
    x31.navigator.x1dj();
    return true;
  }, function () {
    var xyp = xd3.x14d();
    switch (xyp.xwy) {
      case x2x.x30.xwt.xwz.xx6:
        x31.x1sn.x1dk(x31.x1sn.x1bv.x1bw);
        x31.x1sn.x1ds(x37.x3f.x4s);
        break;
      default:
        if (xyp.xyi()) {
          x31.x1sn.x1dk(x31.x1sn.x1bv.xr4);
          x31.x1sn.x1ds(xd3.x14d().data.title);
        } else {
          x31.x1sn.x1dk(x31.x1sn.x1bv.back);
          x31.x1sn.x1ds(xd3.x14d().data.title);
        }
    }
    x31.navigator.x1dw();
    x1wy(x31.navigator);
  }, "NAVIGATION", "CTRL");
  xgs.x1x1 = new x2x.xgf(function () {
    x31.x1sn.x1dk(x31.x1sn.x1bv.back);
    x31.x1sn.x1ds(x37.x3f.x4t);
    x1wx = x1wv.x1z;
    x31.navigator.x1di();
    x1wy(x31.navigator);
  }, function () {
    x31.navigator.x1dj();
    xd3.xd7(true, true);
    return true;
  }, function () {}, "FAVORITESEDIT", "CTRL");
  xgs.x1x2 = new x2x.xgf(function () {
    x31.x1sn.x1dk(x31.x1sn.x1bv.x1bp);
    x31.x1sn.x1ds(x37.x3f.x3h);
    x1wx = x1wv.x1z;
    x31.navigator.x1di();
    x1wy(x31.x1sn, x31.x18q.x18v, true);
  }, function () {
    x31.navigator.x1dj();
    return true;
  }, function () {
    x31.navigator.x1dw();
  }, "PLAYLISTEDIT", "CTRL");
  xgs.x1x3 = new x2x.xgf(function () {
    xcz.x1di();
    x31.x1sn.x1dk(x31.x1sn.x1bv.x174);
    x31.x1sn.x1ds(x37.x3f.x3g);
    x31.x1sn.x1di();
    x1wy(xcz);
  }, function () {
    xcz.x1dj();
    return true;
  }, function () {}, "OPTIONS", "CTRL");
  var x1x4;
  xgs.x1x5 = new x2x.xgf(function (xrw) {
    x1x4 = xrw;
    x31.x1cs.x1wg();
    x31.x1sn.x1dk(x31.x1sn.x1bv.x1bx);
    x31.x1sn.x1dn(xrw);
    x31.x1sn.x1dp();
    x31.x1sn.x1di();
    x31.x1so.x1di(xrw);
    x31.x1so.x15x();
    x1wy(x31.x1so, x31.x18q.x18v);
  }, function () {
    if (x31.x1so.x1n6()) {
      x1ms();
    }
    x31.x1so.x1dj();
    x31.x1t6.x1dj();
    x31.x1sw.x1dj();
    return true;
  }, function (xrw) {
    x1x4 = xrw;
    x31.x1sn.x1dn(xrw);
    x31.x1so.x1di(xrw);
    x31.x1so.x15x();
  }, "MEDIACONTROLLER", "CTRL");
  xgs.x1x6 = new x2x.xgf(function (x174) {
    x31.x1sn.x1dk(x31.x1sn.x1bv.back, x174);
    x31.x1sn.x1dt(x174);
    x31.x1sn.x1di();
    x31.x1sp.x1di({x1x7: x31.x1sn.x1du(), x1x8: x174.value, x13w: x174.x13w});
    x1wy(x31.x1sp);
  }, function () {
    x31.x1sp.x1dj();
    return true;
  }, function (x174) {
    x31.x1sn.x1dt(x174);
    x31.x1sp.x1di({x1x7: x31.x1sn.x1du(), x1x8: x174.value, x13w: x174.x13w});
    x1wy(x31.x1sp);
  }, "INPUT", "CTRL");
  xgs.x1x9 = new x2x.xgf(function (x174) {
    x31.x1sn.x1dk(x31.x1sn.x1bv.back, x174);
    x31.x1sn.x1dt({title: x174.title});
    x31.x1sn.x1di();
    x31.x1sq.x1di({x1x7: x31.x1sn.x1du(), x1x8: "", x13w: true});
    x1wy(x31.x1sq);
    if (x174.x1wg) {
      x31.x1cs.x1wg();
    }
  }, function () {
    x31.x1sq.x1dj();
    return true;
  }, function (x174) {
    x31.x1sn.x1dt(x174);
    x31.x1sq.x1di({x1x7: x31.x1sn.x1du(), x1x8: x174.value, x13w: true});
    x1wy(x31.x1sq);
  }, "DINPUT", "CTRL");
  xgs.x1xa = new x2x.xgf(function (x174) {
    x31.x1sn.x1dk(x31.x1sn.x1bv.x1by);
    x31.x1sn.x1ds(x174.title);
    x31.x1sn.x1di();
    x31.x1sr.x1di(x174.x14u, 0);
    x1wy(x31.x1sr);
  }, function () {
    x31.x1sr.x1dj();
    return true;
  }, function () {}, "SELECT", "CTRL");
  xgs.x1xb = new x2x.xgf(function (xrw) {
    x31.x1cs.x1wg();
    x31.x1sn.x1dk(x31.x1sn.x1bv.back);
    x31.x1sn.x1dn(xrw);
    x31.x1sn.x1di();
    x31.x1st.x1di(xrw);
    x1wy(x31.x1st);
  }, function () {
    x31.x1st.x1dj();
    x31.x1cs.x1wf();
    return true;
  }, function () {}, "EPGLIST", "CTRL");
  xgs.x1xc = new x2x.xgf(function () {
    x31.x1sn.x1dk(x31.x1sn.x1bv.back);
    x31.x1sn.x1di();
    x31.x1su.x1di();
    x1wy(x31.x1su);
  }, function () {
    x31.x1su.x1dj();
    return true;
  }, function () {}, "EPGPANEL", "CTRL");
  xgs.x1xd = new x2x.xgf(function (x174) {
    x31.x1sn.x1dk(x31.x1sn.x1bv.back);
    x31.x1sn.x1ds(x174.title || "");
    x31.x1sn.x1di();
    x31.x1ss.x1di(x37.x9f(x174.x15j) || "");
    x1wy(x31.x1ss);
  }, function () {
    x31.x1ss.x1dj();
    return true;
  }, function () {}, "CONFIRM", "CTRL");
  xgs.xxd = new x2x.xgf(function (x174) {
    x1wy(x31.x1sn);
    x31.x1sx.x18v(x174);
  }, function () {
    x31.x1sx.x1ns();
    return true;
  }, function () {}, "INFORM", "CTRL");
  xgs.xb9.xgo(xgs.x1x0);
  xgs.x1x0.xgr([xgs.x1x5, xgs.x1xc, xgs.x1x9, xgs.x1x3, xgs.x1xa, xgs.x1x6, xgs.x1xd, xgs.x1x2, xgs.x1x1, xgs.xxd]);
  xgs.x1x3.xgr([xgs.x1x0, xgs.x1x6, xgs.x1x9, xgs.x1xd]);
  xgs.x1x5.xgo(xgs.x1x0);
  xgs.x1x5.xgr([xgs.x1xb, xgs.x1x9]);
  xgs.x1x6.xgr([xgs.x1x3, xgs.x1xa, xgs.x1x0]);
  xgs.x1xb.xgr([xgs.x1x5, xgs.x1x9]);
  xgs.x1xc.xgr([xgs.x1x0, xgs.x1x5, xgs.x1x9]);
  xgs.x1xa.xgr([xgs.x1x0, xgs.x1x6]);
  xgs.x1xd.xgr([xgs.x1x0, xgs.x1x1, xgs.x1x2, xgs.x1x3]);
  xgs.x1x2.xgr([xgs.x1x0, xgs.x1xd, xgs.x1x6]);
  xgs.x1x1.xgr([xgs.x1x0, xgs.x1xd]);
  xgs.x1x9.xgr([xgs.x1x5, xgs.x1x0, xgs.x1x3, xgs.x1xc, xgs.x1xb]);
  xgs.xxd.xgo(xgs.x1x0);
  var state = xgs.xb9;
  function x1xe(x1xf) {
    var x1xg = {x1dz: x1xf.keyCode, key: x1xf.key, x1xh: true};
    if (x1xg.x1dz === 0) {
      if (xt.xu === xf.xp) {
        x1xg.x1dz = x1xf.which;
      }
    }
    if (xt.xu !== xf.xo) {
      if (x1xf.shiftKey) {
        x1xg.x1dz += xda.xiq;
      }
      if (x1xf.altKey) {
        x1xg.x1dz += xda.xip;
      }
      if (x1xf.ctrlKey) {
        x1xg.x1dz += xda.xir;
      }
    }
    if (xt.xu === xf.xo) {
      x1xg.x1dz = x1xg.x1dz || x1xf.which;
      var x1xi = "---";
      if (x1xf.key) {
        x1xi = x1xf.key.charCodeAt(0);
        var x1xj = x1xg.x1dz;
        if (x1xg.x1dz === 231) {
          x1xj = x1xi;
        } else {
          var x1xk = xit[x1xf.key] || x1xg.x1dz;
          x1xj = x1xk;
        }
        x1xg.x1dz = x1xj;
      }
    }
    x1xg.x1xh = xho(x1xf);
    return x1xg;
  }
  function x1xl(x1dz) {
    switch (x1dz) {
      case xda.KEY_BLUE:
        x31.x1sm.x1xm(true);
        break;
      case xda.KEY_RED:
        switch (state) {
          case xgs.x1x5:
            if (!x31.x1so.x1n6()) {
              x1xn();
            }
            break;
          case xgs.x1x0:
            if (xd3.x14c()) {
              x1xo();
            } else if (xd3.x14d().xyi()) {
              x1xn();
            }
            break;
          case xgs.x1x2:
            x1xp();
            break;
        }
        break;
      case xda.KEY_GUIDE:
        switch (state) {
          case xgs.x1x5:
            x1xn();
        }
        break;
      case xda.KEY_ASPECT:
        switch (state) {
          case xgs.x1x5:
            x1xq();
            break;
        }
        break;
      case xda.KEY_GREEN:
        switch (state) {
          case xgs.x1x0:
            if (xd3.x14d().xyi()) {
              x1xr();
            } else {
              if (xd3.x14c()) {
                x1xs();
              }
            }
            break;
          case xgs.x1x2:
            x1xt();
            break;
          case xgs.x1x5:
            if (xt.xu === xf.xo && xt.xk9) {
              x1xq();
            } else {
              x1xu();
            }
            break;
        }
        break;
      case xda.KEY_YELLOW:
        switch (state) {
          case xgs.x1x0:
            if (xd3.x14d().xyi()) {
              x1xv();
            }
            break;
          case xgs.x1x5:
            x1xq();
            break;
        }
        break;
      case xda.KEY_VOL_UP:
        x1xw();
        break;
      case xda.KEY_VOL_DOWN:
        x1xx();
        break;
      case xda.KEY_MUTE:
        x1xy();
        break;
      case xda.KEY_EXIT:
        xcw(false, xa8, xda.KEY_EXIT);
        break;
      case xda.KEY_POWER:
        xkm();
        break;
      case xda.KEY_INFOLINK:
      case xda.KEY_CONTENT:
        xcw(true, xa8, xda.KEY_RETURN);
        break;
      case xda.KEY_SETTINGS:
        xkp();
        break;
      case xda.KEY_3:
        if (xt.xu === xf.xp) {
          x31.x1sm.x1xm(true);
          break;
        }
      default:
        xad.xae("Key: " + x1dz + " unsupported");
        return true;
    }
    return false;
  }
  var x1xz = function (x16o) {
    var x1xg = x1xe(x16o);
    if (!x1xg.x1xh) {
      return true;
    }
    if (!x1wo.x1dy(x1xg.x1dz, x1xg.key)) {
      if (xt.xu === xf.xl && x1xg.x1dz === 0) {
        return false;
      }
      if (xt.xj5) {
        xad.xie("Key code :" + x1xg.x1dz);
      }
      return x1xl(x1xg.x1dz);
    }
    return false;
  };
  x1wn.onkeydown = x1xz;
  function x1y0() {
    x9p(function () {
      x1wn.focus();
    }, 0);
  }
  x1wn.onblur = function () {
    x1y0();
  };
  xaa.onfocus = function () {
    x1y0();
  };
  x1wn.focus();
  function x1bo() {
    xd3.xmr();
  }
  function x1ms() {
    xad.xae("ui cancel");
    x1wo.x1dx();
  }
  function x1y1() {
    if (xd8.xl9) {
      xd8.xl9 = false;
      return;
    }
    {
      {
        x1ms();
      }
    }
    if (!xcs) {
      xa5.pushState({data: xct}, "");
    }
  }
  function x1jd() {
    var x1je = xcz.xd0(xcz.xd1.x1y2);
    x31.navigator.x1jd(x1je);
  }
  function x1y3() {
    xad.xae("onDataTreeBusy");
    if (state === xgs.x1x6) {
      state = state.xgt(xgs.x1x0);
    }
    x31.navigator.xz2();
    x31.x1sv.x1di(x37.x9f(x37.x3f.x71));
  }
  function x1y4() {
    x31.x1sv.x1dj();
  }
  function x1y5(source, x174) {
    x1wt = x174.x5;
    state = state.xgt(xgs.x1xa, {title: x37.x9f(x37.x3f.x6v), x14u: x174.x14u});
  }
  function x1y6(source, x174) {
    x1wr = x174.x5;
    state = state.xgt(xgs.x1x6, {value: x174.x14v, title: x37.x9f(x37.x3f.x70)});
  }
  function x1y7(source, result) {
    if (result) {
      x31.xdd.xde(x37.x9f(x37.x3f.x5l));
    } else {
      x31.xdd.xde(x37.x9f(x37.x3f.x5n));
    }
  }
  function x1y8() {
    x31.xdd.xde(x37.x9f(x37.x3f.x5r), 3e3);
    xad.xae("onDataTreeNetworkLost");
  }
  function x1y9() {
    x31.xdd.xde(x37.x9f(x37.x3f.x5s), 3e3);
    xad.xae("onDataTreeInternetLost");
  }
  function x1ya() {
    xad.xae("onDataTreeNotSetUserData");
    x31.xdd.xde(x37.x9f(x37.x3f.x5e), 5e3);
  }
  var x1yb;
  function x1yc(xg4, x174) {
    xad.xae("onDataTreeChange " + (x174 ? x174.xen ? x174.xen + " " + x174.xfa : "" : ""));
    if (x174) {}
    switch (state) {
      case xgs.x1x0:
      case xgs.x1xa:
      case xgs.x1x6:
        state = state.xgt(xgs.x1x0);
        break;
      case xgs.x1x5:
        if (!x31.x1so.x1n6() && xd3.x10n().xxu()) {
          xd3.xyx(x31.navigator.x1jq());
        } else {
          x31.x1so.x1n7();
        }
        break;
      case xgs.x1xc:
        x31.x1su.x1dw();
        break;
      case xgs.x1x1:
      case xgs.x1x2:
        x31.navigator.x1dw();
        break;
    }
    x31.x1sv.x1dj();
  }
  function x1yd() {
    xad.xae("onDataTreeRestorePlay");
  }
  function x1ye(xga, xrw) {
    var xzn = state;
    x1yf(xrw, function (x13r) {
      if (x13r) {
        xd3.x103();
        state = state.xgt(xgs.x1x5, xrw);
        x31.x1t8.x1yg(xd3.x10n().xoy() + 1);
        x31.x1sn.x1dp();
        x31.x1sv.x1di(x37.x9f(x37.x3f.x71));
        xrw.parse(function () {
          x31.x1sv.x1dj();
          if (state === xgs.x1x5) {
            x9q(x1yb);
            var x1yh = x9p(function () {
              var x1yi = x1wm.x1yj();
              if (x1yi && x1yi !== xrw) {
                x1yi.xv6();
              }
              x31.x1so.x15x();
              xrw.xv3();
              state = state.xgt(xgs.x1x5, xrw);
              xcz.xwr(xcz.xd1.x14y, xrw.id);
            }, x1wu);
            x1yb = x1yh;
          }
        });
      } else {
        xad.xae("access denied");
        if (xzn === xgs.x1x5) {
          x1wm.xko();
        }
      }
    });
  }
  function x1yk(xga, x1yl) {
    state = state.xgt(xgs.xxd, x1yl.xub);
  }
  function x1ym() {
    if (state === xgs.x1x5) {
      x31.x1t5.x1di(x37.x9f(x37.x3f.x72), true);
    }
  }
  function x1yn() {
    x31.x1t5.x1dj();
    if (state === xgs.x1x5) {
      if (x1wm.xvh()) {
        x31.x1t5.x1di(x37.x9f(x37.x3f.x76));
      }
    }
    xad.xae("onPlayStart");
  }
  function x1yo() {
    xad.xae("onPlayStop");
    x31.x1t5.x1dj();
    state = state.xgt(xgs.x1x0);
  }
  function x1yp() {
    xad.xae("onPlayFinish");
    var x1yq = xcz.xd0(xcz.xd1.x1yr);
    if (state === xgs.x1x5) {
      xad.xae("playing mode:" + x1yq);
      switch (x1yq) {
        case xcz.x1ys.x1yt:
          xad.xie("[sequentially] autoplay next stream...");
          x1yu();
          break;
        case xcz.x1ys.x1yv:
          xad.xie("[repeat list] autoplay next stream...");
          x1yu();
          break;
        case xcz.x1ys.x1yw:
          xad.xie("reprat current stream...");
          xd3.xyx();
          break;
        default:
          state = state.xgt(xgs.x1x0);
      }
    } else {
      state = state.xgt(xgs.x1x0);
    }
  }
  function x1yx(xg4, x1gz) {
    x31.x1so.x1n5(x1gz);
  }
  function x1yy() {
    if (state === xgs.x1x5) {
      x31.x1t5.x1di(x37.x9f(x37.x3f.x77));
    }
    xad.xae("onPlayError");
  }
  function x1yz() {
    if (state === xgs.x1x5) {
      x31.x1t5.x1di(x37.x9f(x37.x3f.x73) + "...", true);
    }
  }
  function x1z0(xg4, x1gz) {
    if (state === xgs.x1x5) {
      x31.x1t5.x1di(x37.x9f(x37.x3f.x73) + x1gz, true);
    }
  }
  function x1z1() {
    x31.x1t5.x1dj();
    if (state === xgs.x1x5 && x1wm.xvh()) {
      x31.x1t5.x1di(x37.x9f(x37.x3f.x76));
    }
  }
  function x1z2() {
    if (state === xgs.x1x5) {
      x31.x1t5.x1di(x37.x9f(x37.x3f.x76));
    }
  }
  function x1z3() {
    x31.x1t5.x1dj();
  }
  function x1z4() {
    if (state === xgs.x1x5) {
      x31.x1t5.x1di(x37.x9f(x37.x3f.x75), true);
    }
  }
  function x1z5() {
    if (state === xgs.x1x5) {
      x31.x1t5.x1di(x37.x9f(x37.x3f.x74), true);
    }
  }
  function x1z6() {
    x31.x1t5.x1dj();
  }
  function x1z7(xg4, xts) {}
  function x1z8(xg4, data) {
    if (state === xgs.x1x5) {
      x31.x1sn.x1dp(data);
    }
  }
  function x1z9(xg4, params) {
    if (params.xrw.xua) {
      try {
        if (params.x1za !== params.x1zb) {
          xcz.x1zc[params.xrw.xua] = [params.x1za];
        } else {
          if (xcz.x1zc[params.xrw.xua]) {
            delete xcz.x1zc[params.xrw.xua];
          }
        }
      } catch (x12) {}
    }
    if (params.x1za !== params.x1zd) {
      switch (params.x1za) {
        case x1ze.x1zf:
          x31.x1t6.x1di(x37.x9f(x37.x3f.x7e));
          break;
        case x1ze.x1zg:
          x31.x1t6.x1di(x37.x9f(x37.x3f.x7f));
          break;
        case x1ze.x1zh:
          x31.x1t6.x1di(x37.x9f(x37.x3f.x7h));
          break;
        case x1ze.x1zi:
          x31.x1t6.x1di("16x9" + x37.x9f(x37.x3f.x7i));
          break;
        case x1ze.x1zj:
          x31.x1t6.x1di("16x9");
          break;
        case x1ze.x1zk:
          x31.x1t6.x1di("4x3");
          break;
        case x1ze.x1zl:
          x31.x1t6.x1di(x37.x9f(x37.x3f.x7j));
          break;
        case x1ze.x1zm:
          x31.x1t6.x1di(x37.x9f(x37.x3f.x7j) + " 1");
          break;
        case x1ze.x1zn:
          x31.x1t6.x1di(x37.x9f(x37.x3f.x7j) + " 2");
          break;
        case x1ze.x1zo:
          x31.x1t6.x1di("4x3" + x37.x9f(x37.x3f.x7i));
          break;
        case x1ze.x1zp:
          x31.x1t6.x1di(x37.x9f(x37.x3f.x7h));
          break;
        case x1ze.x1zq:
          x31.x1t6.x1di("16x9" + x37.x9f(x37.x3f.x7i));
          break;
        case x1ze.x1zr:
          x31.x1t6.x1di(x37.x9f(x37.x3f.x7f));
          break;
        case x1ze.x1zs:
          x31.x1t6.x1di(x37.x9f(x37.x3f.x7g));
          break;
        case x1ze.x1zt:
          x31.x1t6.x1di("FULL_SCREEN");
          break;
        case x1ze.x1zu:
          x31.x1t6.x1di("LETTER_BOX");
          break;
        case x1ze.x1zv:
          x31.x1t6.x1di("ORIGIN_SIZE");
          break;
        case x1ze.x1zw:
          x31.x1t6.x1di("CROPPED_FULL");
          break;
        case x1ze.x1zx:
          x31.x1t6.x1di("ZOOM_HALF");
          break;
        case x1ze.x1zy:
          x31.x1t6.x1di("ZOOM_THREE_QUARTERS");
          break;
        case x1ze.x1zz:
          x31.x1t6.x1di("ORIGIN_OR_LETTER");
          break;
        case x1ze.x200:
          x31.x1t6.x1di("DST_ROI");
          break;
        case x1ze.x201:
          x31.x1t6.x1di("ZOOM_16_9");
          break;
        case x1ze.x202:
          x31.x1t6.x1di("ZOOM");
          break;
        case x1ze.x203:
          x31.x1t6.x1di("ZOOM_CUSTOM");
          break;
        default:
          x31.x1t6.x1di("AR:" + params.x1za);
      }
    }
  }
  function x204(xg4, xsx) {
    if (xsx.x205 > 0) {
      x31.x1t6.x1di(x37.x9f(x37.x3f.x7d) + (xsx.x206 + 1) + "/" + xsx.x205);
    } else {
      if (xt.xu !== xf.xj) {
        x31.xdd.xde(x37.x9f(x37.x3f.x6c));
      }
    }
  }
  function x207(xg4, xrw) {
    if (xrw) {
      xrw.xv9();
    }
    x31.xdd.xde(x37.x9f(x37.x3f.x5f));
  }
  function x208(xg4, xrw) {
    xad.x209("unsupported stream type");
  }
  function x1jh(xg4, xev) {
    if (xd3.x13g()) {
      xd3.xyu(xev);
    } else {
      if (xg4.x1jt) {
        xg4.x1jt();
      }
    }
  }
  function x1ji(xg4, xev) {
    if (xd3.x13h()) {
      xd3.xyw(xev);
    } else {
      if (xg4.x1ju) {
        xg4.x1ju();
      }
    }
  }
  function x1jj(xg4, xev) {
    if (x1wx === x1wv.x1ww) {
      if (state === xgs.x1x0) {
        xd3.x103();
      }
      xd3.xyx(xev);
    } else {
      switch (state) {
        case xgs.x1x2:
          x31.xdd.xde(x37.x9f(x37.x3f.x6n));
          x1wy(x31.x1sn, x31.x18q.x18t);
          break;
        case xgs.x1x1:
          if (xd3.x14d().xwy !== x2x.x30.xwt.xwz.xwl) {
            xd3.x10z(xd3.x10n());
            x31.navigator.x1dw();
          } else {
            x1ws = function (result) {
              if (result) {
                xd3.x10z(xd3.x10n());
                x31.navigator.x1dw();
              }
              state = state.xgt(xgs.x1x1);
            };
            state = state.xgt(xgs.x1xd, {x15j: x37.x3f.x7n, title: xd3.x10n().data.title});
          }
          break;
      }
    }
  }
  function x1jk(xg4, xev) {
    if (x1wx === x1wv.x1ww) {
      if (xd3.x14c()) {
        xcw(false, xa8, xda.KEY_RETURN);
      } else {
        xd3.xyy(xev);
      }
    } else {
      switch (state) {
        case xgs.x1x1:
        case xgs.x1x2:
          state = state.xgt(xgs.x1x0);
          break;
      }
    }
  }
  function x1jo(xg4, xev) {
    xd3.xyu(xev);
  }
  function x1jp(xg4, xev) {
    xd3.xyw(xev);
  }
  function x1jn(xg4, xev) {
    xd3.xyw(xev);
  }
  function x1jm(xg4, xev) {
    xd3.xyu(xev);
  }
  function x1jl(xg4, xev) {
    xd3.x13i(xev);
  }
  function x20a(xg4, xev) {
    if (xd3.x14d().xwy === x2x.x30.xwt.xwz.xx1) {
      xd3.x13j(xev);
    }
  }
  function x20b(xg4, xev) {
    if (xd3.x14d().xwy === x2x.x30.xwt.xwz.xx1) {
      xd3.x13k(xev);
    }
  }
  function x20c(xg4, xev) {
    if (xd3.x14d().xwy === x2x.x30.xwt.xwz.xx1) {
      xd3.x13l(xev);
    }
  }
  function x20d(xg4, xev) {
    xd3.x13m(xev);
  }
  function x20e(xg4, xev) {
    xd3.x13n(xev);
  }
  function x20f(xg4) {
    x1wy(xg4);
  }
  function x20g(xg4, x174) {
    if (xg4 === xcz) {
      x1wr = function (x13x) {
        x174.x5(x13x);
        state = state.xgt(xgs.x1x3);
      };
    } else {
      x1wr = x174.x5;
    }
    xad.xae("input " + x174.title);
    state = state.xgt(xgs.x1x6, x174);
  }
  function x20h(xg4, x174) {
    var x20i = state;
    x1ws = function (result) {
      switch (x20i) {
        case xgs.x1x0:
          state = state.xgt(x20i, xd3.x10n().data);
          break;
        default:
          state = state.xgt(x20i);
      }
      x174.x5(result);
      if (result) {}
    };
    state = state.xgt(xgs.x1xd, x174);
  }
  function x20j(xg4, x174) {
    x1wr = function (result) {
      state = state.xgt(xgs.x1x3);
      x174.x5(result);
    };
    state = state.xgt(xgs.x1x9, x174);
  }
  function x1jf(xg4, x1is) {
    switch (xg4) {
      case x31.navigator:
        if (x1is === x31.x18q.x18t || x1is === x31.x18q.x18u) {
          x1wy(x31.x1sn, x1is);
        }
        break;
      case x31.x1sn:
        switch (state) {
          case xgs.x1x0:
          case xgs.x1x1:
          case xgs.x1x2:
            x1wy(x31.navigator, x1is);
            break;
          case xgs.x1x5:
            x1wy(x31.x1so, x1is);
            break;
          case xgs.x1xb:
            x1wy(x31.x1st, x1is);
            break;
          case xgs.x1xc:
            x1wy(x31.x1su, x1is);
            break;
          case xgs.x1x3:
            x1wy(xcz);
            break;
          case xgs.x1x6:
            x1wy(x31.x1sp);
            break;
          case xgs.x1x9:
            x1wy(x31.x1sq);
            break;
          case xgs.x1xa:
            x1wy(x31.x1sr);
            break;
          case xgs.x1xd:
            x1wy(x31.x1ss);
            break;
          default:
            x1wy(x31.x1sn);
        }
        break;
    }
  }
  function x1yf(xrw, x5) {
    if (xrw.xur()) {
      x20k(this, {x5: x5});
    } else {
      x5(true);
    }
  }
  var x13o = 0;
  function x20k(xg4, x174) {
    if (!x174.title) {
      x174.title = x37.x9f(x37.x3f.x7s);
    }
    var x20l = true, x20m = xcz.xd0(xcz.xd1.x20n), x20o = xcz.xd0(xcz.xd1.x20p);
    if (!x20l) {
      x13o = 0;
    }
    if (x20m === "") {
      x174.x5(true);
    } else {
      var x20q = 2592e6;
      if (x13o !== 0) {
        x20q = x2x.x2z.xch.xbg() - x13o;
      }
      if (x20o * 60 * 1e3 >= x20q || x20o >= 1400 && x13o !== 0) {
        x174.x5(true);
      } else {
        x103 = state;
        x1wr = function (x20r) {
          if (x103 !== xgs.x1x5) {
            if (x103 === xgs.x1xb) {
              state = state.xgt(xgs.x1x5, xd3.x10n().data);
            } else {
              state = state.xgt(x103);
            }
          }
          if (x20r.x13y && x20r.value === x20m) {
            if (!x20l) {
              x13o = 0;
            } else {
              x13o = x2x.x2z.xch.xbg();
            }
            x174.x5(true);
          } else {
            x31.xdd.xde(x37.x9f(x37.x3f.x6b));
            if (xg4 === x2x.x30.xd3) {
              xd3.x104(true);
              if (x103 !== xgs.x1x5) {
                state = state.xgt(x103);
              } else {
                state = state.xgt(x103, xd3.x10n().data);
              }
            }
            x174.x5(false);
          }
        };
        if (state === xgs.x1xb) {
          x174.x1wg = true;
        }
        state = state.xgt(xgs.x1x9, x174);
      }
    }
  }
  function x20s(xg4, request) {
    xuy.xvr(request.xrw, 1, 0, request.x5);
  }
  function x20t() {
    switch (state) {
      case xgs.x1x5:
        x31.x1so.x1ni();
        break;
    }
  }
  function x20u() {
    state = state.xgt(xgs.x1x3);
  }
  function x20v(xg4, xwr) {
    switch (state) {
      case xgs.x1x3:
        xcz.x1e1.x1dx();
        break;
      case xgs.x1x0:
        x31.navigator.x1e1.x1dx();
        break;
      case xgs.x1x6:
        x31.x1sp.x1e1.x1dx();
        break;
      case xgs.x1x9:
        x31.x1sp.x1e1.x1dx();
        break;
      case xgs.x1x5:
        x31.x1so.x1e1.x1dx();
        break;
      case xgs.x1xb:
        x31.x1st.x1e1.x1dx();
        break;
      case xgs.x1xd:
        x1ws(false);
        break;
      case xgs.x1x1:
        state = state.xgt(xgs.x1x0);
        break;
      case xgs.x1x2:
        state = state.xgt(xgs.x1x0);
        break;
      case xgs.x1xc:
        x31.x1su.x1e1.x1dx();
        break;
      case xgs.xxd:
        state = state.xgt(xgs.x1x0);
        break;
    }
  }
  function x20w() {
    switch (state) {
      case xgs.x1xa:
        x31.x1sr.x1bl();
        break;
    }
  }
  function x1xo() {
    x1bo();
  }
  var x20x;
  function x1xn(source) {
    xad.xae("open epg");
    if (state === xgs.x1x5) {
      x20x = xd3.x101();
      state = state.xgt(xgs.x1xb, xd3.x10n().data);
    } else if (state === xgs.x1x0) {
      state = state.xgt(xgs.x1xc);
    }
  }
  function x1xs(xg4) {
    if (xd3.x14c()) {
      state = state.xgt(xgs.x1x2);
    } else {
      state = state.xgt(xgs.x1x1);
    }
  }
  function x20y(xg4) {
    switch (state) {
      case xgs.x1x0:
        x1ws = function (x20z) {
          if (x20z) {
            xcw(true);
          } else {
            state = state.xgt(xgs.x1x0);
          }
        };
        state = state.xgt(xgs.x1xd, {x15j: x37.x3f.x7p, title: x37.x9f(x37.x3f.x51)});
        break;
      case xgs.x1x2:
        state = state.xgt(xgs.x1x0);
        break;
    }
  }
  function x1xt() {
    xad.xae("add playlist");
    x1wr = function (result) {
      if (result.x13y) {
        xad.xae("address:" + result.value);
        xd3.x152(result.value, function () {
          xad.xae("ret callback");
        });
      } else {
        state = state.xgt(xgs.x1x0);
      }
    };
    var x210 = "http://";
    state = state.xgt(xgs.x1x6, {title: x37.x9f(x37.x3f.x6y), value: x210});
  }
  function x1xp() {
    xad.xae("delete playlist");
    xd3.xq5(xd3.x10n());
  }
  function x1xr() {
    state = state.xgt(xgs.x1x1);
  }
  function x211(xg4, xrw) {
    xcz.xwr(xcz.xd1.x14y, -1);
    state = state.xgt(xgs.x1x0);
    xrw.xv9();
  }
  function x212(xg4, xrw) {
    xrw.xvd();
  }
  function x213(xg4, xrw) {
    xrw.xvb();
  }
  function x214(xg4, xrw) {
    xrw.xvg();
  }
  function x215(xg4, x174) {
    x174.xrw.xvs(x174.position, function (x216) {
      if (!x216) {
        x31.xdd.xde(x37.x9f(x37.x3f.x6m));
      }
      x31.x1so.x1nh();
      x31.x1sn.x1dn(x1x4);
    });
  }
  function x1xw() {
    if (x1wm.x217()) {
      x1wm.x218();
    }
    var x219 = x1wm.x21a();
    if (x219 !== -1) {
      x31.x1sw.x1di(x219, x1wm.x217());
    }
  }
  function x1xx() {
    if (x1wm.x217()) {
      x1wm.x218();
    }
    var x219 = x1wm.x21b();
    if (x219 !== -1) {
      x31.x1sw.x1di(x219, x1wm.x217());
    }
  }
  function x1xy() {
    var x21c = x1wm.x218();
    if (x21c !== x1wm.x21d) {
      x31.x1sw.x1di(x1wm.x21e(), x21c);
    }
  }
  function x1yu() {
    xad.xae("play next");
    xd3.x103();
    var xev = x31.navigator.x1jq();
    if (xd3.x14d().xxz()) {
      xd3.x13n({xfp: 1, xfr: false, xex: xev.xex, xez: xev.xez});
    } else {
      xd3.xyu({xfp: 1, xfr: false, xex: xev.xex, xez: xev.xez});
    }
  }
  function x21f() {
    xad.xae("play prev");
    xd3.x103();
    var xev = x31.navigator.x1jq();
    if (xd3.x14d().xxy()) {
      xd3.x13m({xfp: 1, xfr: false, xex: xev.xex, xez: xev.xez});
    } else {
      xd3.xyw({xfp: 1, xfr: false, xex: xev.xex, xez: xev.xez});
    }
  }
  function x1xq() {
    x1wm.x1xq();
  }
  function x1xu() {
    x1wm.x21g();
  }
  function x1xv() {
    xad.xae("sort");
    if (xd3.x14d().xyi()) {
      xd3.x15k(x31.navigator.x1jq());
    }
  }
  function x21h(xg4, x21i) {
    x31.x1t8.x21j(x21i);
  }
  function x21k(xg4, x18q) {
    x1wy(x31.x1sn, x18q);
  }
  function x21l(xg4, state) {
    switch (state) {
      case x31.x1so.xgs.x1l9:
        x31.x1sn.x1dk(x31.x1sn.x1bv.x1bx);
        x31.x1sn.x1dn(x1x4);
        x31.x1sn.x1di();
        break;
      case x31.x1so.xgs.x1l8:
        x31.x1sn.x1dj();
        x1wy(x31.x1so);
        break;
      case x31.x1so.xgs.x1ld:
        x31.x1sn.x1dk(x31.x1sn.x1bv.back);
        break;
      default:
        x31.x1sw.x1dj();
    }
  }
  function x21m() {
    xd3.x103();
  }
  function x21n() {
    xd3.x104(false);
  }
  function x21o() {
    xd3.xyx();
    xd3.x103();
  }
  function x21p(xg4, data) {
    x1yf(data.xrw, function (x13r) {
      if (x13r) {
        x1x4 = data.xrw;
        x1x4.xvn(data.event);
        xd3.x103();
        x31.x1sn.x1dn(x1x4);
      } else {
        xad.xae("access denied");
      }
      state = state.xgt(xgs.x1x5, x1x4);
    });
  }
  function x21q() {
    xd3.xd4();
    state = state.xgt(xgs.x1x0);
  }
  function x21r() {
    xad.xae("navigation change");
    x1jd();
  }
  function x21s() {
    var x1ts = xcz.xd0(xcz.xd1.x21t);
    x31.x1cs.x1tr(xcz.xd0(xcz.xd1.x21t), xcz.xd0(xcz.xd1.x21u), xcz.xd0(xcz.xd1.x21v), xcz.xd0(xcz.xd1.x21w), xcz.xd0(xcz.xd1.x21x), xcz.xd0(xcz.xd1.x21y), xcz.xd0(xcz.xd1.x21z), xcz.xd0(xcz.xd1.x220));
    x31.x30.x1d0();
  }
  function x221() {
    xad.xae("change ui language");
    x31.x1sn.x1dv();
    xd3.x14h();
  }
  function x222() {
    var x1sy = xcz.xd0(xcz.xd1.x223);
    x31.x30.x1d6(x1sy);
    xcz.x1d6(x1sy);
  }
  function x224() {
    var x225 = xcz.xd0(xcz.xd1.x226);
    x31.x30.x1hw(x225);
  }
  function x227() {
    x1wy(x31.x1sn);
  }
  function x228() {
    x1wy(x31.x1sn);
  }
  function x229(source, x13x) {
    x1wr(x13x);
  }
  function x22a() {
    x1wy(x31.x1sn);
  }
  function x22b(source, x22c) {
    xad.xae("selected " + x22c);
    x1wt(x22c);
    x1wt = xa8;
  }
  function x22d(source, result) {
    xad.xae("Cofirm result:" + result.x13y);
    state = state.xgt(xgs.x1x0);
    x1ws(result.x13y);
  }
  function x22e(xg4, x1is) {
    if (x1is === x31.x18q.x18t) {
      x1wy(x31.x1sn, x1is);
    }
  }
  function x22f(source, result) {
    var xrw = xd3.x10n().data;
    if (!result.x13y) {
      if (source === x31.x1su) {
        state = state.xgt(xgs.x1x0);
      } else {
        state = state.xgt(xgs.x1x5, xrw);
      }
      if (result.x1og) {
        x31.xdd.xde(x37.x9f(x37.x3f.x6o));
      }
    } else {
      x1yf(xrw, function (x13r) {
        if (x13r) {
          if (source === x31.x1su) {
            state = state.xgt(xgs.x1x5, xrw);
            if (result.event) {
              xrw.xvn(result.event);
            } else {
              xrw.xv3();
            }
            x31.x1sn.x1dn(xrw);
            x31.x1so.x1nh();
          } else {
            xd3.x102(x20x);
            state = state.xgt(xgs.x1x5, result.xrw);
            result.xrw.xvn(result.event);
            x31.x1sn.x1dn(result.xrw);
            x31.x1so.x1nh();
          }
        } else {
          xad.xae("access denied");
        }
      });
    }
  }
  function x22g() {
    x31.x1sv.x1di(x37.x9f(x37.x3f.x71));
  }
  function x22h() {
    x31.x1sv.x1dj();
  }
  function x22i(xg4, x1is) {
    if (x1is === x31.x18q.x18t) {
      x1wy(x31.x1sn, x1is);
    }
  }
  function x22j(xg4, x1h3) {
    x1h3 = x1h3 - 1;
    if (x1h3 >= 0) {
      if (state === xgs.x1x5) {
        var x22k = xd3.x14d().xy9();
        var x120 = xd3.x14d().xy9(x1h3);
        if (x120 !== x22k) {
          xd3.xyx(x31.navigator.x1jq());
        }
      }
    }
  }
  var x22l = new x2x.xg3(this), x22m;
  function x22n(xg4, data) {
    x22m = data;
    if (!x22m.xhf) {
      xad.xb6(x37.x9f(x37.x3f.x5r));
      if (!xt.xhj) {
        x31.xdd.xde(x37.x9f(x37.x3f.x5r), 7e3);
      }
    } else if (!x22m.xhg) {
      xad.xb6(x37.x9f(x37.x3f.x5s));
      if (!xt.xhj) {
        x31.xdd.xde(x37.x9f(x37.x3f.x5s), 7e3);
      }
    }
  }
  this.xmr = function () {
    x2x.xml.xmr();
    if (xt.xu === xf.xj || xt.xu === xf.x22o || xt.xu === xf.xo || xt.xu === xf.xq || xt.xu === xf.xg) {
      xaa.onpopstate = x1y1;
      xa5.pushState({data: xct}, "");
    }
    xd3.xmn.xz8.xgc(x1ya, this);
    xd3.xmn.xz6.xgc(x1y8, this);
    xd3.xmn.xz7.xgc(x1y9, this);
    xd3.xmn.xz2.xgc(x1y3, this);
    xd3.xmn.xz3.xgc(x1y4, this);
    xd3.xmn.xz4.xgc(x1yc, this);
    xd3.xmn.xz9.xgc(x1ye, this);
    xd3.xmn.xza.xgc(x1yk, this);
    xd3.xmn.xzc.xgc(x1y5, this);
    xd3.xmn.xzd.xgc(x1y6, this);
    xd3.xmn.xze.xgc(x1y7, this);
    xd3.xmn.xzf.xgc(x20g, this);
    xd3.xmn.xzg.xgc(x20h, this);
    xd3.xmn.xzb.xgc(x20k, this);
    x1wm.xmn.x22p.xgc(x1ym, this);
    x1wm.xmn.x22q.xgc(x1yn, this);
    x1wm.xmn.x22r.xgc(x1yo, this);
    x1wm.xmn.x22s.xgc(x1yp, this);
    x1wm.xmn.x22t.xgc(x1yx, this);
    x1wm.xmn.x22u.xgc(x1yy, this);
    x1wm.xmn.x22v.xgc(x1yz, this);
    x1wm.xmn.bufferingProgress.xgc(x1z0, this);
    x1wm.xmn.x22w.xgc(x1z1, this);
    x1wm.xmn.x22x.xgc(x1z2, this);
    x1wm.xmn.xve.xgc(x1z3, this);
    x1wm.xmn.seek.xgc(x1z4, this);
    x1wm.xmn.x150.xgc(x1z5, this);
    x1wm.xmn.x22y.xgc(x1z6, this);
    x1wm.xmn.x22z.xgc(x1z7, this);
    x1wm.xmn.x230.xgc(x1z8, this);
    x1wm.xmn.x231.xgc(x1z9, this);
    x1wm.xmn.x232.xgc(x204, this);
    x1wm.xmn.x233.xgc(x207, this);
    x1wm.xmn.x234.xgc(x208, this);
    x31.x1sn.xmn.x1bj.xgc(x20f, this);
    x31.x1sn.xmn.x1bk.xgc(x1jf, this);
    x31.x1sn.xmn.xgq.xgc(x20t, this);
    x31.x1sn.xmn.x174.xgc(x20u, this);
    x31.x1sn.xmn.back.xgc(x20v, this);
    x31.x1sn.xmn.x1bn.xgc(x20y, this);
    x31.x1sn.xmn.x1bl.xgc(x20w, this);
    x31.x1sn.xmn.x1bo.xgc(x1xo, this);
    x31.x1sn.xmn.epg.xgc(x1xn, this);
    x31.x1sn.xmn.x1bp.xgc(x1xs, this);
    x31.x1sn.xmn.x1bq.xgc(x1xt, this);
    x31.x1sn.xmn.x1br.xgc(x1xp, this);
    x31.x1sn.xmn.x1bs.xgc(x1xr, this);
    x31.x1sn.xmn.x1bt.xgc(x1xq, this);
    x31.x1sn.xmn.x1bu.xgc(x1xu, this);
    x31.x1sn.xmn.sort.xgc(x1xv, this);
    x31.navigator.xmn.x1bj.xgc(x20f, this);
    x31.navigator.xmn.x1bk.xgc(x1jf, this);
    x31.navigator.xmn.xyu.xgc(x1jh, this);
    x31.navigator.xmn.xyw.xgc(x1ji, this);
    x31.navigator.xmn.xyx.xgc(x1jj, this);
    x31.navigator.xmn.xyy.xgc(x1jk, this);
    x31.navigator.xmn.x13i.xgc(x1jl, this);
    x31.navigator.xmn.x1ej.xgc(x1jm, this);
    x31.navigator.xmn.x1ek.xgc(x1jn, this);
    x31.navigator.xmn.x1gg.xgc(x1jo, this);
    x31.navigator.xmn.x1gh.xgc(x1jp, this);
    x31.navigator.xmn.x13m.xgc(x20d, this);
    x31.navigator.xmn.x13n.xgc(x20e, this);
    x1jd();
    x31.x1so.xmn.x1bj.xgc(x20f, this);
    x31.x1so.xmn.x1bk.xgc(x21k, this);
    x31.x1so.xmn.x1l2.xgc(x21l, this);
    x31.x1so.xmn.x1l1.xgc(x21h, this);
    x31.x1so.xmn.stop.xgc(x211, this);
    x31.x1so.xmn.play.xgc(x212, this);
    x31.x1so.xmn.pause.xgc(x213, this);
    x31.x1so.xmn.x1kv.xgc(x214, this);
    x31.x1so.xmn.x1kw.xgc(x1yu, this);
    x31.x1so.xmn.x1kx.xgc(x21f, this);
    x31.x1so.xmn.x1ky.xgc(x215, this);
    x31.x1so.x1mv.x18v.xgc(x21m, this);
    x31.x1so.x1mv.x1ms.xgc(x21n, this);
    x31.x1so.x1mv.x1bl.xgc(x21o, this);
    x31.x1so.x1mv.x1mt.xgc(x21p, this);
    x31.x1so.x1mv.xyu.xgc(x1jh, this);
    x31.x1so.x1mv.xyw.xgc(x1ji, this);
    x31.x1so.x1mv.x1gg.xgc(x1jo, this);
    x31.x1so.x1mv.x1gh.xgc(x1jp, this);
    x31.x1so.x1mv.x13j.xgc(x20a, this);
    x31.x1so.x1mv.x13k.xgc(x20b, this);
    x31.x1so.x1mv.x13i.xgc(x1jl, this);
    x31.x1so.x1mv.x13l.xgc(x20c, this);
    x31.x1so.x1mv.x1ej.xgc(x1jm, this);
    x31.x1so.x1mv.x1ek.xgc(x1jn, this);
    x31.x1so.x1mv.x13m.xgc(x20d, this);
    x31.x1so.x1mv.x13n.xgc(x20e, this);
    x31.x1so.x1mv.xyx.xgc(x1jj, this);
    x31.x1so.x1mv.xyy.xgc(x1jk, this);
    xcz.xmn.x1bj.xgc(x20f, this);
    xcz.xmn.x1bk.xgc(x227, this);
    xcz.xmn.xzf.xgc(x20g, this);
    xcz.xmn.xzg.xgc(x20h, this);
    xcz.xmn.x235.xgc(x20j, this);
    xcz.xmn.xzb.xgc(x20k, this);
    xcz.xmn.x236.xgc(x21q, this);
    xcz.xmn.x237.xgc(x21r, this);
    xcz.xmn.x238.xgc(x21s, this);
    xcz.xmn.x239.xgc(x221, this);
    xcz.xmn.x23a.xgc(x222, this);
    xcz.xmn.x23b.xgc(x224, this);
    x31.x1sp.xmn.x1bj.xgc(x20f, this);
    x31.x1sp.xmn.x1bk.xgc(x228, this);
    x31.x1sp.xmn.x23c.xgc(x229, this);
    x31.x1sq.xmn.x1bj.xgc(x20f, this);
    x31.x1sq.xmn.x1bk.xgc(x228, this);
    x31.x1sq.xmn.x23c.xgc(x229, this);
    x31.x1sr.xmn.x1bj.xgc(x20f, this);
    x31.x1sr.xmn.x1bk.xgc(x22a, this);
    x31.x1sr.xmn.x1bl.xgc(x22b, this);
    x31.x1ss.xmn.x23c.xgc(x22d, this);
    x31.x1ss.xmn.x1bj.xgc(x20f, this);
    x31.x1ss.xmn.x1bk.xgc(x22e, this);
    x31.x1st.xmn.x1bj.xgc(x20f, this);
    x31.x1st.xmn.x1bk.xgc(x22i, this);
    x31.x1st.xmn.x1ns.xgc(x22f, this);
    x31.x1st.xmn.x1nt.xgc(x22g, this);
    x31.x1st.xmn.x1nu.xgc(x22h, this);
    x31.x1su.xmn.x1bj.xgc(x20f, this);
    x31.x1su.xmn.x1bk.xgc(x22i, this);
    x31.x1su.xmn.x1ns.xgc(x22f, this);
    x31.x1su.xmn.xyu.xgc(x1jh, this);
    x31.x1su.xmn.xyw.xgc(x1ji, this);
    x31.x1su.xmn.x13i.xgc(x1jl, this);
    x31.x1su.xmn.x1gg.xgc(x1jo, this);
    x31.x1su.xmn.x1gh.xgc(x1jp, this);
    x31.x1su.xmn.x1ej.xgc(x1jm, this);
    x31.x1su.xmn.x1ek.xgc(x1jn, this);
    x31.x1t8.xmn.x1bl.xgc(x22j, this);
    x2x.xml.xmn.xmo.xgc(x31.x1sn.x15x, this);
    x2x.xml.xmn.xmo.xgc(x31.x1so.x15x, this);
    x2x.xml.xmn.xmo.xgc(function () {
      x31.navigator.x15x();
    }, this);
    x2x.xml.xmn.xmo.xgc(x31.x1su.x15x, this);
    x22m = xt.xhh();
    if (xt.xhc) {
      var x23d = xt.xhd, x23e = x23d * 2;
      x2x.xml.xmn.xmo.xgc(function () {
        if (--x23e <= 0) {
          x23e = x23d;
          var x151 = xt.xhh();
          if (x151.xhf !== x22m.xhf || x151.xhg !== x22m.xhg || !x151.xhf) {
            x22l.xge(x151);
          }
        }
      }, this);
    } else {
      xt.xhl(function (x151) {
        x22l.xge(x151);
      });
    }
    x22l.xgc(x22n, this);
    if (xt.xu === xf.xm) {
      xaa.xid(function () {
        var x151 = xt.xhh();
        x22l.xge(x151);
      });
    }
    state = state.xgt(xgs.x1x0);
    x1bo();
  };
};
x2x.x31.x1sz = function (x23f, x23g) {
  var x31 = x2x.x31, xch = x2x.x2z.xch, x1b3 = x23f, xah = this, xad = x23g, x23h = [], x23i = 38, x23j = 0, x23k = 0, x1b4 = false, x23l = false, x23m = 0, x23n, x19j = x19o("div", "css8");
  function x23o() {
    var x23p;
    if (x23k < x23j) {
      x23p = x23h[x23k++];
    } else {
      if (x23j < x23i) {
        x23p = x9o.createElement("div");
        x23h.push(x23p);
        x23j++;
        x23k++;
        x19j.appendChild(x23p);
      } else {
        x23p = x23h.shift();
        x23h.push(x23p);
        x19j.appendChild(x23p);
      }
    }
    return x23p;
  }
  function x23q() {
    for (var xd = 0; xd < x23j; xd++) {
      x23h[xd].innerHTML = " ";
    }
    x23k = 0;
  }
  function x23r(x23p, x23s) {
    switch (x23s.type) {
      case xad.x23t.xxd:
        x23p.className = "cssa";
        break;
      case xad.x23t.x23u:
        x23p.className = "cssb";
        break;
      case xad.x23t.x23v:
        x23p.className = "cssc";
        break;
      default:
        x23p.className = "css9";
    }
    x23p.innerHTML = "[" + xch.xbz(x23s.x1h1) + "]" + "[" + x23s.xf6 + "]" + x23s.data;
  }
  function x23w() {
    if (!x1b4) {
      x23q();
      var x23x = xad.x23y(x23i);
      for (var xd = 0; xd < x23x.length; xd++) {
        x23r(x23o(), x23x[xd]);
      }
      x1b3.appendChild(x19j);
      x1b4 = true;
    }
  }
  function x23z() {
    if (x1b4) {
      x19j = x1b3.removeChild(x19j);
      x1b4 = false;
    }
  }
  function x240() {
    x23m = 0;
  }
  this.x241 = function () {
    x23l = true;
    xad.xmn.xz4.xgc(x242, xah);
  };
  function x242() {
    if (x1b4) {
      var x23x = xad.x23y(1);
      if (x23x[0]) {
        x23r(x23o(), x23x[0]);
      }
    }
  }
  this.x1xm = function (x243) {
    if (!x1b4) {
      if (x23l) {
        x23w();
      } else {
        if (x243) {
          x23m++;
          x9q(x23n);
          var x244 = x9p(x240, 500);
          x23n = x244;
          if (x23m === 5) {
            x9q(x23n);
            xah.x241();
            x23w();
          }
        }
      }
    } else {
      x23z();
    }
  };
  this.x1d0 = function () {};
};
x2x.x31.x1t4 = function (x19t) {
  var _xg = xaa._xg, x37 = x2x.x2y.x37, x1cs = x2x.x31.x1cs, xda = x2x.x2y.xda, xah = this, x1b5 = false, x1gl = false, x1b3 = x19t, x5 = xa8, x245 = false, x246 = {x247: 0, x248: 1}, x249 = 2, x24a = x246.x248, x19j, x24b, x24c = [], x24d = {x24e: 0, x24f: 1}, xmn = {x1bj: new x2x.xg3(this), x1bk: new x2x.xg3(this), x23c: new x2x.xg3(this)};
  this.xmn = xmn;
  function x1dh() {
    if (x245) return;
    x19j = x19o("div", "css3w"), x24b = x19j.appendChild(x19q("div", "css3x"));
    x24c[x246.x247] = x19j.appendChild(x19q("div", "css3y"));
    x24c[x246.x247].style.left = "2.5em";
    x24c[x246.x247].xt3 = x24d.x24f;
    x24c[x246.x247].x24g = x246.x247;
    x24c[x246.x248] = x19j.appendChild(x19q("div", "css3y"));
    x24c[x246.x248].style.right = "2.5em";
    x24c[x246.x248].xt3 = x24d.x24e;
    x24c[x246.x248].x24g = x246.x248;
    for (var xd = 0; xd < x24c.length; xd++) {
      x24c[xd].onmouseover = x1f9;
      x24c[xd].onclick = x1fb;
    }
    x245 = true;
    x1d0();
  }
  function x24h() {
    x1dx();
  }
  function x1di(x24i) {
    if (!x1b5) {
      x1dh();
      x24c[x246.x247].innerHTML = x37.x9f(x37.x3f.x7q);
      x24c[x246.x248].innerHTML = x37.x9f(x37.x3f.x7r);
      x24b.innerHTML = x24i;
      x24j(x24c[x24a]);
      x24k(x24c[x246.x248]);
      x1b3.appendChild(x19j);
      x1b5 = true;
    }
  }
  function x1dj() {
    if (x1b5) {
      x19j = x1b3.removeChild(x19j);
      x1b5 = false;
    }
  }
  this.x1di = x1di;
  this.x1dj = x1dj;
  function x23c() {
    xmn.x23c.xge({x13y: x24c[x24a].xt3 === x24d.x24f});
  }
  function x1dx() {
    if (x1b5) {
      x24a = x246.x248;
      x23c();
    }
  }
  function xfj() {
    x24j(x24c[x24a]);
    x24a++;
    if (x24a >= x249) {
      x24a = 0;
    }
    x24k(x24c[x24a]);
  }
  function x1dy(x1dz) {
    switch (x1dz) {
      case xda.KEY_ENTER:
      case xda.xiq + xda.KEY_ENTER:
        x23c();
        break;
      case xda.KEY_LEFT:
      case xda.KEY_RIGHT:
      case xda.xiq + xda.KEY_LEFT:
      case xda.xiq + xda.KEY_RIGHT:
        xfj();
        break;
      case xda.KEY_UP:
      case xda.xiq + xda.KEY_UP:
        xmn.x1bk.xge(x2x.x31.x18q.x18t);
        break;
      case xda.KEY_DOWN:
      case xda.xiq + xda.KEY_DOWN:
        xmn.x1bk.xge(x2x.x31.x18q.x18u);
        break;
      case xda.KEY_RETURN:
        x24h();
        break;
      default:
        return false;
    }
    return true;
  }
  function x1fw(x1fx) {
    x1fx.style.background = x1cs.x1gn;
    x1fx.style.color = x1cs.x1gm;
  }
  function x24l(x1fx) {
    x1fx.style.background = "transparent";
  }
  function x24j(x1fx) {
    x24l(x1fx);
    x1fx.style.color = x1cs.x1gp;
  }
  function x24k(x1fx) {
    x24a = x1fx.x24g;
    x1fw(x1fx);
  }
  function x1f9() {
    if (!x1gl) {
      x24j(x24c[x24a]);
      x24a = this.x24g;
      xmn.x1bj.xge();
    } else {
      x24j(x24c[x24a]);
      x24k(this);
    }
  }
  function x1fb() {
    x24k(this);
    x23c();
  }
  function x1d0() {
    if (!x245) return;
    x19j.style.background = x1cs.x1gt;
    x24b.style.color = x1cs.x1gp;
    for (var xd = 0; xd < x24c.length; xd++) {
      x24c[xd].style.color = x1cs.x1gp;
      x24c[xd].style.background = "transparent";
    }
    x1fw(x24c[x24a]);
  }
  this.x1d0 = x1d0;
  function focus() {
    x1gl = true;
    x24k(x24c[x24a]);
    xad.xae("[userconfirm] focus");
  }
  function x1e0() {
    x24l(x24c[x24a]);
    x1gl = false;
    xad.xae("[userconfirm] unfocus");
  }
  this.x1e1 = {x1dy: x1dy, x1dx: x1dx, focus: focus, x1e0: x1e0};
};
x2x.x31.x1t3 = function (x19t) {
  var _xg = xaa._xg, x1cs = x2x.x31.x1cs, xda = x2x.x2y.xda, x22c = 0, x1b5 = false, x1b3 = x19t, x14u = x9m, x245 = false, x19j, x24m, x24n, x24o, xmn = {x1bj: new x2x.xg3(this), x1bk: new x2x.xg3(this), x1bl: new x2x.xg3(this)};
  this.xmn = xmn;
  function x1dh() {
    if (x245) return;
    x19j = x19o("div", "css3r");
    x24m = x19j.appendChild(x19o("div", "css3t"));
    x24n = x19j.appendChild(x19o("div", "css3u"));
    x24o = x19j.appendChild(x19o("div", "css3v"));
    x24n.innerHTML = "< ";
    x24n.onmouseover = x24p;
    x24n.onmouseout = x24q;
    x24n.onclick = x24r;
    x24o.innerHTML = " >";
    x24o.onmouseover = x24p;
    x24o.onmouseout = x24q;
    x24o.onclick = x24s;
    x245 = true;
    x1d0();
  }
  function x1d0() {
    if (!x245) return;
    x19j.style.background = x1cs.x1gt;
    x24n.style.color = x1cs.x1tl;
    x24o.style.color = x1cs.x1tl;
    x24m.style.color = x1cs.x1gw;
  }
  this.x1d0 = x1d0;
  function x24r() {
    if (x1b5) {
      x141();
    }
  }
  function x24s() {
    if (x1b5) {
      x140();
    }
  }
  function x24p() {
    xmn.x1bj.xge();
    this.style.background = x1cs.x1gn;
  }
  function x24q() {
    this.style.background = "transparent";
  }
  this.x1di = function (x24t, x10q) {
    x1dh();
    x14u = x24t;
    x22c = x10q;
    x24m.innerHTML = x14u[x22c].title;
    x1b3.appendChild(x19j);
    x1b5 = true;
  };
  this.x1dj = function () {
    x1b5 = false;
    x19j = x1b3.removeChild(x19j);
  };
  function x1bl() {
    xmn.x1bl.xge(x22c);
  }
  this.x1bl = x1bl;
  function x140() {
    x22c++;
    if (x22c >= x14u.length) x22c = 0;
    x24m.innerHTML = x14u[x22c].title;
  }
  function x141() {
    x22c--;
    if (x22c < 0) x22c = x14u.length - 1;
    x24m.innerHTML = x14u[x22c].title;
  }
  function x1dy(x1dz) {
    switch (x1dz) {
      case xda.KEY_ENTER:
      case xda.xiq + xda.KEY_ENTER:
        x1bl();
        break;
      case xda.KEY_LEFT:
      case xda.xiq + xda.KEY_LEFT:
        x141();
        break;
      case xda.KEY_RIGHT:
      case xda.xiq + xda.KEY_RIGHT:
        x140();
        break;
      case xda.KEY_UP:
      case xda.xiq + xda.KEY_UP:
        xmn.x1bk.xge();
        break;
      default:
        return false;
    }
    return true;
  }
  function x1dx() {}
  function focus() {}
  function x1e0() {}
  this.x1e1 = {x1dy: x1dy, x1dx: x1dx, focus: focus, x1e0: x1e0};
};
x2x.x31.x1t7 = function (x19t) {
  var _xg = xaa._xg, x1b3 = x19t, x24u = 1500, x24v = 0, x19j = x19o("div", "css58"), x24w = x19j.appendChild(x19q("div", "css59")), x1b4 = false;
  this.x1di = function (x24x) {
    x24w.innerHTML = x24x;
    if (!x1b4) {
      x1b3.appendChild(x19j);
      x1b4 = !x1b4;
    }
    x9q(x24v);
    var x24y = x9p(x1dj, x24u);
    x24v = x24y;
  };
  function x1dj() {
    if (x1b4) {
      x19j = x1b3.removeChild(x19j);
      x1b4 = !x1b4;
    }
  }
  this.x1dj = x1dj;
};
x2x.x31.x1ta = function (x19t) {
  var _xg = xaa._xg, x37 = x2x.x2y.x37, xah = this, x245 = false, x1b3 = x19t, x24z = 10, x24u = 1500, x250 = false, x1b4 = false, x24v = 0, x19j, x251, x252, x253;
  function x1dh() {
    if (x245) return;
    x19j = x19o("div", "css5a");
    x251 = x19j.appendChild(x19o("img", "css5b"));
    x252 = x19j.appendChild(x19q("div", "css5d"));
    x253 = x19j.appendChild(x19q("div", "css5c"));
    x251.src = x0 + "img/volume.png";
    x245 = true;
    x1d0();
  }
  this.x1di = function (value, x254) {
    x1dh();
    x253.innerHTML = value;
    x252.style.width = x24z * value / 100 + "em";
    if (value === 0) x254 = true;
    if (x250 !== x254) {
      var x255;
      switch (x254) {
        case true:
          x255 = x0 + "img/mute.png";
          break;
        default:
          x255 = x0 + "img/volume.png";
      }
      x251.src = x255;
      x250 = x254;
    }
    switch (x254) {
      case true:
        x253.innerHTML = x37.x9f(x37.x3f.x7b);
        break;
      default:
        x253.innerHTML = value;
    }
    x1b3.appendChild(x19j);
    x1b4 = true;
    x9q(x24v);
    if (!x250) {
      var x24y = x9p(x1dj, x24u);
      x24v = x24y;
    } else {
      if (xt.xu === xf.xh) {
        x1dj();
      }
    }
  };
  function x1dj() {
    if (x1b4) {
      var xql = x1b3.removeChild(x19j);
      x1b4 = false;
    }
  }
  this.x1dj = x1dj;
  function x1d0() {
    if (!x245) return;
    x19j.style.background = x2x.x31.x1cs.x1d1;
    x252.style.background = x2x.x31.x1cs.x1ct;
  }
  this.x1d0 = x1d0;
};
x2x.x31.x1t0 = function (x19t) {
  var _xg = xaa._xg, x1b3 = x19t, x16z = [], x256 = 0, xn8 = 0, x257 = 1e3, x258 = 100, x259 = [], x25a = 3, x25b = 0, x25c = 3, x25d = false, x25e = false, x1gb = 1.4, x25f = {x25g: 0, x25h: 1, x25i: 2, x25j: 3}, x25k = {x25l: 0, x25m: 1}, x19j = x19o("div", "css3p");
  for (var xd = 0; xd < x25a; xd++) {
    x259[xd] = {};
    x259[xd].x10g = x19q("div", "css3q");
    x259[xd].state = x25f.x25g;
  }
  this.xde = function (x25n, x25o) {
    var x25p = false;
    for (var xd = 0; xd < x25a; xd++) {
      if (x259[xd].state !== x25f.x25g && x259[xd].xaf.x8k === x25n) {
        x25p = true;
        break;
      }
    }
    for (var xd = 0; xd < x16z.length; xd++) {
      if (x16z[xd].x8k === x25n) {
        x25p = true;
        break;
      }
    }
    if (!x25p) {
      if (typeof x25o === x9n) x25o = x257;
      var xaf = {x8k: x25n, x25q: x256++, x25o: x25o};
      x16z.push(xaf);
    }
    if (!x25d) {
      x25d = true;
      x25r();
    }
  };
  this.x25s = function () {
    x16z = [];
    x9q(xn8);
    for (var xd = 0; xd < x25a; xd++) {
      if (typeof x259[xd].xaf !== x9n) {
        x259[xd].xaf.x25o = 0;
      }
    }
    for (var xd = 0; xd < x25a * x25c; xd++) {
      x25r();
    }
  };
  function x25t(x10g, x1is) {
    var x1gz = (x10g.x25u + 1) / x25c;
    if (x1is === x25k.x25m) {
      x1gz = 1 - x1gz;
    }
    x10g.x10g.style.height = x1gb * x1gz + "em";
    x10g.x25u++;
    if (x10g.x25u >= x25c) {
      return true;
    } else return false;
  }
  function x25r() {
    for (var xd = 0; xd < x25a; xd++) {
      if (x259[xd].state === x25f.x25j) {
        x259[xd].xaf.x25o -= x258;
        if (x259[xd].xaf.x25o <= 0) {
          x259[xd].state = x25f.x25i;
          x259[xd].x25u = 0;
        }
      }
      if (x259[xd].state === x25f.x25i) {
        if (x25t(x259[xd], x25k.x25m)) {
          x259[xd].x10g = x19j.removeChild(x259[xd].x10g);
          x259[xd].state = x25f.x25g;
          x25b--;
        }
      }
      if (x259[xd].state === x25f.x25g) {
        if (x16z.length > 0) {
          var xaf = x16z[0];
          x16z.shift();
          x259[xd].x10g.innerHTML = xaf.x8k;
          x19j.appendChild(x259[xd].x10g);
          x259[xd].state = x25f.x25h;
          x259[xd].x25u = 0;
          x259[xd].xaf = xaf;
          x25b++;
          if (!x25e) {
            x1b3.appendChild(x19j);
            x25e = true;
          }
        }
      }
      if (x259[xd].state === x25f.x25h) {
        if (x25t(x259[xd], x25k.x25l)) {
          x259[xd].state = x25f.x25j;
        }
      }
    }
    if (x25b > 0) {
      x9q(xn8);
      var x25v = x9p(x25r, x258);
      xn8 = x25v;
    } else {
      x25d = false;
      if (x25e) {
        x19j = x1b3.removeChild(x19j);
        x25e = false;
      }
    }
  }
  this.x1d0 = function () {
    for (var xd = 0; xd < x25a; xd++) {
      x259[xd].x10g.style.background = x2x.x31.x1cs.x1gt;
      x259[xd].x10g.style.color = x2x.x31.x1cs.x1gp;
    }
  };
  this.x1d6 = function (xjn) {
    x19j.style.left = 26 / xjn + "em";
    x19j.style.right = 26 / xjn + "em";
    for (var xd = 0; xd < x25a; xd++) {
      x259[xd].x10g.style.fontSize = 1.6 * xjn + "em";
    }
  };
};
x2x.x31.x1t9 = function (x19t) {
  var _xg = xaa._xg, x1pp = xa8, x25w = 4, x25x = 2e3, x25y = 800, x25z = 2e3, x260 = "", x24v = x9m, x261 = false, x1b4 = false, x1b3 = x19t, x19j = x19o("div", "css5e"), x262 = x19j.appendChild(x19o("span", "css5f")), xmn = {x1bl: new x2x.xg3(this)};
  this.xmn = xmn;
  function x1di() {
    if (!x1b4) {
      x1b3.appendChild(x19j);
      x1b4 = true;
    }
  }
  function x1dj() {
    if (x1b4) {
      x19j = x1b3.removeChild(x19j);
      x1b4 = false;
    }
  }
  function x1bl() {
    var x24y = x9p(function () {
      x1dj();
      x261 = false;
    }, x25y);
    x24v = x24y;
    xmn.x1bl.xge(xa0(x260, 10));
    x260 = "";
  }
  this.x21j = function (x263) {
    if (!x261) {
      x9q(x24v);
      x260 += "" + x263;
      var x264 = x260;
      x262.innerHTML = x264;
      x1di();
      if (x260.length === x25w) {
        x261 = true;
        x1bl();
      } else {
        var x24y = x9p(x1bl, x25x);
        x24v = x24y;
      }
    }
  };
  this.x1yg = function (x1h3) {
    x261 = false;
    x9q(x24v);
    x262.innerHTML = x1h3;
    x1di();
    var x24y = x9p(x1dj, x25z);
    x24v = x24y;
  };
};
x2x.x31.x1tb = function (x19t) {
  var _xg = xaa._xg, x1b4 = false, x245 = false, x265 = 1, x1b3 = x19t, x19j, x266;
  function x1dh() {
    if (x245) return;
    x19j = x19o("div", "css67");
    x266 = x19j.appendChild(x19o("div", "css68"));
    x245 = true;
    x1d0();
    x1d6(x265);
  }
  function x1di() {
    if (!x1b4) {
      x1b3.appendChild(x19j);
      x1b4 = true;
    }
  }
  function x1dj() {
    if (x1b4) {
      x19j = x1b3.removeChild(x19j);
      x1b4 = false;
    }
  }
  this.x18v = function (x267) {
    x1dh();
    x266.innerHTML = x267;
    x1di();
  };
  this.x1ns = function () {
    xad.xae("[IP] leave");
    x1dj();
  };
  function x1d0() {
    if (!x245) return;
    x19j.style.background = x2x.x31.x1cs.x1gt;
  }
  this.x1d0 = x1d0;
  function x1d6(xjn) {
    x265 = xjn;
    if (!x245) return;
    x266.style.fontSize = 1.6 * xjn + "em";
  }
  this.x1d6 = x1d6;
};
x2x.x31.x1t1 = function (x19t) {
  var _xg = xaa._xg, xah = this, x1b3 = x19t, xda = x2x.x2y.xda, x1cs = x2x.x31.x1cs, x1b5 = false, x268 = 1.9, x269 = 2.2, x1bh = 0, x26a = 0.6, x26b = 0.5, x26c = 0.6, x26d = 4, x26e = 13, x245 = false, x3a = "`1234567890-_<qwertyuiop[]>asdfghjkl;'@{}zxcvbnm,./\\", x26f = "~!:#$%^&*()=+", x3b = "ё1234567890-_<йцукенгшщзхъ>фывапролджэ@{}ячсмитьбю.\\", x26g = "Ё!,#$%|?*()=+", x3c = "ґ1234567890-_<йцукенгшщзхї>фівапролджє'{}ячсмитьбю.\\", x26h = "Ґ!,#$%|?*()=+", x26i = 0, x26j = 0, x26k = false, x26l = {x26m: 100001, x26n: 100002, x26o: 100003, x26p: 100004, x26q: 100005}, x26r = [{value: x26l.x26q, x8k: "caps", xek: 2}, {value: x26l.x26m, x8k: "lang", xek: 2}, {value: x26l.x26n, x8k: "space", xek: 5}, {value: x26l.x26o, x8k: "<-", xek: 2}, {value: x26l.x26p, x8k: "ok", xek: 2}], x26s = [{x1bw: x3a, x26r: x26f}, {x1bw: x3b, x26r: x26g}, {x1bw: x3c, x26r: x26h}], x26t = {xck: 0, x1dq: 0}, x26u = x9m, x26v, value, x26w, x19j, x26x, x26y, keys = [], xmn = {x1bj: new x2x.xg3(this), x1bk: new x2x.xg3(this), x23c: new x2x.xg3(this)};
  this.xmn = xmn;
  function x26z(key) {
    key.style.background = "transparent";
  }
  function x270(key) {
    key.style.background = x1cs.x1gn;
  }
  function x271(key) {
    key.style.color = x1cs.x1gm;
  }
  function x272(key) {
    key.style.background = "transparent";
    key.style.color = x1cs.x1gw;
  }
  function x273(x16o) {
    if (!x1b5) {
      xmn.x1bj.xge();
    }
    x272(keys[x26t.x1dq][x26t.xck].key);
    x26t.x1dq = x16o.target.x274;
    x26t.xck = x16o.target.x275;
    x270(keys[x26t.x1dq][x26t.xck].key);
    x271(keys[x26t.x1dq][x26t.xck].key);
    if (x26t.x1dq !== keys.length - 1) {
      x26i = x26t.xck;
    }
  }
  function x276(x16o) {}
  function x277(x16o) {
    x278();
  }
  function x1dh(xcl) {
    if (x245) return false;
    x19j = x9o.createElement("div");
    x26x = x19j.appendChild(x19o("div", "css3l"));
    x26x.style.width = x26a * 2 + (x268 + x1bh) * x26e + "em";
    x26x.style.height = x26b * 2 + (x26c + x269 + x1bh) * (x26d + 1) + "em";
    x26y = x19q("div", "css3n");
    x19j.style.position = "absolute";
    if (x2x.x31.x197.x19h) {
      x26x.style.fontSize = "1.75em";
    }
    for (var x279 = 0; x279 < x26d; x279++) {
      keys[x279] = [];
      var xfc = x279 * x26e;
      for (var x27a = 0; x27a < x26e; x27a++) {
        var key = x19j.appendChild(x19q("div", "css3m"));
        key.innerHTML = [xcl.x1bw[xfc + x27a], " "].join("");
        keys[x279][x27a] = {key: key, value: xcl.x1bw[xfc + x27a]};
        key.style.width = x268 + "em";
        key.style.height = x269 + "em";
        key.style.paddingTop = x26c + "em";
        key.style.top = x26b + x279 * (x26c + x269 + x1bh) + "em";
        key.style.left = x26a + x27a * (x268 + x1bh) + "em";
        if (x2x.x31.x197.x19h) {
          key.style.fontSize = "1.75em";
        }
        key.onmouseover = x273;
        key.onmouseout = x276;
        key.onclick = x277;
        key.x274 = x279;
        key.x275 = x27a;
      }
    }
    keys[x26d] = [];
    var xfc = 0;
    for (var x27b = 0; x27b < x26r.length; x27b++) {
      var key = x19j.appendChild(x19q("div", "css3m"));
      key.innerHTML = x26r[x27b].x8k;
      key.style.width = x26r[x27b].xek * x268 + (x26r[x27b].xek - 1) * x1bh + "em";
      key.style.height = x269 + "em";
      key.style.paddingTop = x26c + "em";
      key.style.top = x26b + x26d * (x26c + x269 + x1bh) + "em";
      key.style.left = x26a + xfc * (x268 + x1bh) + "em";
      xfc += x26r[x27b].xek;
      if (x2x.x31.x197.x19h) {
        key.style.fontSize = "1.75em";
      }
      keys[x26d][x27b] = {key: key, value: x26r[x27b].value};
      key.onmouseover = x273;
      key.onmouseout = x276;
      key.onclick = x277;
      key.x274 = x26d;
      key.x275 = x27b;
    }
    x270(keys[x26t.x1dq][x26t.xck].key);
    x271(keys[x26t.x1dq][x26t.xck].key);
    x245 = true;
    x27c(24, 21);
    x1d0();
    return true;
  }
  function x27d(xcl) {
    for (var x279 = 0; x279 < x26d; x279++) {
      for (var x27e = 0; x27e < x26e; x27e++) {
        var key = xcl.x1bw[x279 * x26e + x27e];
        if (x26k) {
          if (x279 === 0) {
            key = xcl.x26r[x27e];
          } else {
            key = key.toUpperCase();
          }
        }
        keys[x279][x27e].key.innerHTML = key + " ";
        keys[x279][x27e].value = key;
      }
    }
  }
  function x1d0() {
    if (!x245) return;
    x26x.style.background = x1cs.x1gt;
    for (var x279 = 0; x279 < x26d; x279++) {
      for (var x27a = 0; x27a < x26e; x27a++) {
        x272(keys[x279][x27a].key);
      }
    }
    for (var x27b = 0; x27b < x26r.length; x27b++) {
      x272(keys[x26d][x27b].key);
    }
    if (x1b5) {
      x270(keys[x26t.x1dq][x26t.xck].key);
    }
    x271(keys[x26t.x1dq][x26t.xck].key);
  }
  this.x1d0 = x1d0;
  function x27c(xck, x1dq) {
    if (x2x.x31.x197.x19h) {
      x19j.style.top = x1dq + 1.5 + "em";
      x19j.style.left = xck + 1.5 + "em";
    } else {
      x19j.style.top = x1dq + "em";
      x19j.style.left = xck + "em";
    }
  }
  function x27f(x27g) {
    var x27h = "";
    for (var xd = 0; xd < x27g.length; xd++) {
      x27h += "*";
    }
    return x27h;
  }
  this.x1di = function (x27i) {
    x1dh(x26s[x26j]);
    x1b3.appendChild(x19j);
    x26u = x27i;
    value = x26u.x1x8;
    x26w = "";
    x26v = x26u.x1x7;
    if (x26u.x13w) {
      x26w = x27f(value);
    }
    x26v.innerHTML = x26u.x13w ? x26w : value;
    x26v.parentNode.appendChild(x26y);
    x27j();
    x27k();
    x270(keys[x26t.x1dq][x26t.xck].key);
  };
  this.x1dj = function () {
    var xql = x1b3.removeChild(x19j), xqm = x26v.parentNode.removeChild(x26y);
  };
  function x27l(x13y) {
    xmn.x23c.xge({x13y: x13y, value: value});
  }
  this.x1bl = function () {
    x27l(true);
  };
  function x1dx() {
    x27l(false);
  }
  var x27m = 2, x27n, x27o, x27p = false;
  function x27j() {
    if (!x27p) {
      x27n = x26y.clientWidth;
      x27p = true;
    }
    x27o = x26v.parentNode.clientWidth;
  }
  function x27k() {
    var x27q = x26v.clientWidth, x27r = x27m + x27q + x27m + x27n + x27m;
    if (x27r > x27o) {
      x26y.style.left = x27o - x27m - x27n;
      x26v.style.left = x26y.offsetLeft - x27m - x27q + "px";
    } else {
      x26v.style.left = x27m + "px";
      x26y.style.left = x27m + x27q + x27m + "px";
    }
  }
  function x27s(key) {
    value = value + key;
    if (x26u.x13w) {
      x26w += "*";
      x26v.innerHTML = x26w;
    } else x26v.innerHTML = value;
    x27k();
  }
  function x27t() {
    value = value.substr(0, value.length - 1);
    if (x26u.x13w) {
      x26w = x26w.substr(0, x26w.length - 1);
      x26v.innerHTML = x26w;
    } else x26v.innerHTML = value;
    x27k();
  }
  function x278() {
    var key = keys[x26t.x1dq][x26t.xck].value;
    switch (key) {
      case x26l.x26m:
        x26j++;
        if (x26j >= x26s.length) x26j = 0;
        x27d(x26s[x26j]);
        break;
      case x26l.x26p:
        x27l(true);
        break;
      case x26l.x26n:
        x27s(" ");
        break;
      case x26l.x26o:
        x27t();
        break;
      case x26l.x26q:
        x26k = !x26k;
        x27d(x26s[x26j]);
        break;
      default:
        x27s(key);
    }
  }
  function x27u() {
    x272(keys[x26t.x1dq][x26t.xck].key);
    if (x26t.x1dq !== keys.length - 1) {
      x26i = x26t.xck;
    }
    x26t.x1dq++;
    if (x26t.x1dq === keys.length - 1) {
      switch (x26t.xck) {
        case 0:
        case 1:
          x26t.xck = 0;
          break;
        case 2:
        case 3:
          x26t.xck = 1;
          break;
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
          x26t.xck = 2;
          break;
        case 9:
        case 10:
          x26t.xck = 3;
          break;
        case 11:
        case 12:
          x26t.xck = 4;
          break;
      }
    }
    if (x26t.x1dq >= keys.length) {
      x26t.x1dq = keys.length - 1;
    }
    if (x26t.x1dq !== keys.length - 1) {
      x26t.xck = x26i;
    }
    if (x26t.xck >= keys[x26t.x1dq].length) x26t.xck = keys[x26t.x1dq].length - 1;
    x270(keys[x26t.x1dq][x26t.xck].key);
    x271(keys[x26t.x1dq][x26t.xck].key);
  }
  function x27v() {
    var x27w = keys[x26t.x1dq][x26t.xck].key;
    if (x26t.x1dq !== keys.length - 1) {
      x26i = x26t.xck;
    }
    x26t.x1dq--;
    if (x26t.x1dq === keys.length - 2) {
      switch (x26t.xck) {
        case 0:
          x26t.xck = 0;
          break;
        case 1:
          x26t.xck = 2;
          break;
        case 2:
          x26t.xck = 6;
          break;
        case 3:
          x26t.xck = 9;
          break;
        case 4:
          x26t.xck = 11;
          break;
      }
    }
    if (x26t.x1dq < 0) {
      x26t.x1dq = 0;
      xmn.x1bk.xge(x2x.x31.x18q.x18t);
    } else {
      if (x26t.x1dq !== keys.length - 1) {
        x26t.xck = x26i;
      }
      if (x26t.xck >= keys[x26t.x1dq].length) x26t.xck = keys[x26t.x1dq].length - 1;
      var x27x = keys[x26t.x1dq][x26t.xck].key;
      x272(x27w);
      x270(x27x);
      x271(x27x);
    }
  }
  function x27y() {
    x272(keys[x26t.x1dq][x26t.xck].key);
    x26t.xck++;
    if (x26t.xck >= keys[x26t.x1dq].length) {
      x26t.xck = 0;
    }
    x270(keys[x26t.x1dq][x26t.xck].key);
    x271(keys[x26t.x1dq][x26t.xck].key);
    if (x26t.x1dq === keys.length - 1) {
      switch (x26t.xck) {
        case 0:
          x26i = 0;
          break;
        case 1:
          x26i = 2;
          break;
        case 2:
          x26i = 6;
          break;
        case 3:
          x26i = 9;
          break;
        case 4:
          x26i = 11;
          break;
      }
    }
  }
  function x27z() {
    x272(keys[x26t.x1dq][x26t.xck].key);
    x26t.xck--;
    if (x26t.xck < 0) {
      x26t.xck = keys[x26t.x1dq].length - 1;
    }
    x270(keys[x26t.x1dq][x26t.xck].key);
    x271(keys[x26t.x1dq][x26t.xck].key);
    if (x26t.x1dq === keys.length - 1) {
      switch (x26t.xck) {
        case 0:
          x26i = 0;
          break;
        case 1:
          x26i = 2;
          break;
        case 2:
          x26i = 6;
          break;
        case 3:
          x26i = 9;
          break;
        case 4:
          x26i = 11;
          break;
      }
    }
  }
  function x1dy(x1dz, key) {
    switch (x1dz) {
      case xda.KEY_DOWN:
      case xda.xiq + xda.KEY_DOWN:
        x27u();
        break;
      case xda.KEY_RIGHT:
      case xda.xiq + xda.KEY_RIGHT:
        x27y();
        break;
      case xda.KEY_UP:
      case xda.xiq + xda.KEY_UP:
        x27v();
        break;
      case xda.KEY_LEFT:
      case xda.xiq + xda.KEY_LEFT:
        x27z();
        break;
      case xda.KEY_RETURN:
        if (xt.xu === xf.xg) {
          x27t();
        } else {
          x1dx();
        }
        break;
      case xda.KEY_ENTER:
      case xda.xiq + xda.KEY_ENTER:
        x278();
        break;
      case xda.KEY_1:
        x27s("1");
        break;
      case xda.KEY_2:
        x27s("2");
        break;
      case xda.KEY_3:
        x27s("3");
        break;
      case xda.KEY_4:
        x27s("4");
        break;
      case xda.KEY_5:
        x27s("5");
        break;
      case xda.KEY_6:
        x27s("6");
        break;
      case xda.KEY_7:
        x27s("7");
        break;
      case xda.KEY_8:
        x27s("8");
        break;
      case xda.KEY_9:
        x27s("9");
        break;
      case xda.KEY_0:
        x27s("0");
        break;
      case xda.x280:
        x27t();
        break;
      case xda.KEY_RED:
        x27l(true);
        break;
      default:
        if (xt.xu === xf.xg) {
          var x281 = x1dz;
          if (x281 >= xda.xiq + 48 && x281 <= xda.xiq + 222) {
            x281 -= xda.xiq;
          }
          if (x281 >= 48 && x281 <= 57 || x281 >= 65 && x281 <= 90 || x281 >= 96 && x281 <= 105 || x281 >= 186 && x281 <= 192 || x281 >= 219 && x281 <= 222 || x281 === 32) {
            x27s(key);
            return true;
          }
          if (x281 === 46) {
            x27t();
            return true;
          }
          if (x281 === 27) {
            x1dx();
            return true;
          }
        }
        return false;
    }
    return true;
  }
  function focus() {
    xad.xae("[kb] focus");
    x270(keys[x26t.x1dq][x26t.xck].key);
    x271(keys[x26t.x1dq][x26t.xck].key);
  }
  function x1e0() {
    xad.xae("[kb] unfocus");
    x26z(keys[x26t.x1dq][x26t.xck].key);
  }
  this.x1e1 = {x1dy: x1dy, x1dx: x1dx, focus: focus, x1e0: x1e0};
};
x2x.x31.x1t2 = function (x19t) {
  this.x26l = {x26o: 100003, x26p: 100004};
  var _xg = xaa._xg, xah = this, x1b3 = x19t, x1cs = x2x.x31.x1cs, xda = x2x.x2y.xda, x1b5 = false, keys = [], x26t = {xck: 0, x1dq: 0}, x268 = 2.6, x269 = 2.2, x1bh = 0, x26a = 0.6, x26b = 0.5, x26c = 0.6, x282 = 4, x26e = 3, x245 = false, xcl = "123456789b0o", x283 = x9m, x26u = x9m, x26v, value, x26w, x19j, x26x, x26y, xmn = {x1bj: new x2x.xg3(this), x1bk: new x2x.xg3(this), x23c: new x2x.xg3(this)};
  this.xmn = xmn;
  function x1d0() {
    if (!x245) return;
    x26x.style.background = x1cs.x1gt;
    for (var x279 = 0; x279 < x282; x279++) {
      for (var x27a = 0; x27a < x26e; x27a++) {
        x272(keys[x279][x27a].key);
      }
    }
    x271(keys[x26t.x1dq][x26t.xck].key);
  }
  this.x1d0 = x1d0;
  function x26z(key) {
    key.style.background = "transparent";
  }
  function x270(key) {
    key.style.background = x1cs.x1gn;
  }
  function x271(key) {
    key.style.color = x1cs.x1gm;
  }
  function x272(key) {
    key.style.background = "transparent";
    key.style.color = x1cs.x1gw;
  }
  function x273(x16o) {
    if (!x1b5) {
      xmn.x1bj.xge();
    }
    x272(keys[x26t.x1dq][x26t.xck].key);
    x26t.x1dq = x16o.target.x274;
    x26t.xck = x16o.target.x275;
    x270(keys[x26t.x1dq][x26t.xck].key);
    x271(keys[x26t.x1dq][x26t.xck].key);
  }
  function x276(x16o) {}
  function x277(x16o) {
    x278();
  }
  function x1dh() {
    if (x245) return false;
    x19j = x9o.createElement("div"), x26x = x19j.appendChild(x19o("div", "dcss3l"));
    x26x.style.width = x26a * 2 + (x268 + x1bh) * x26e + "em";
    x26x.style.height = x26b * 2 + (x26c + x269 + x1bh) * x282 + "em";
    x19j.style.position = "absolute";
    x26y = x19q("div", "css3n");
    for (var x279 = 0; x279 < x282; x279++) {
      keys[x279] = [];
      var xfc = x279 * x26e;
      for (var x27a = 0; x27a < x26e; x27a++) {
        var key = x19j.appendChild(x19q("div", "css3m"));
        var x284 = xcl[xfc + x27a] + " ";
        var xhn = xcl[xfc + x27a];
        if (xcl[xfc + x27a] === "b") {
          x284 = "<-";
          xhn = xah.x26l.x26o;
        } else if (xcl[xfc + x27a] === "o") {
          x284 = "OK";
          xhn = xah.x26l.x26p;
        }
        key.style.width = x268 + "em";
        key.style.height = x269 + "em";
        key.style.paddingTop = x26c + "em";
        key.style.top = x26b + x279 * (x26c + x269 + x1bh) + "em";
        key.style.left = x26a + x27a * (x268 + x1bh) + "em";
        key.innerHTML = x284;
        keys[x279][x27a] = {key: key, value: xhn};
        key.onmouseover = x273;
        key.onmouseout = x276;
        key.onclick = x277;
        key.x274 = x279;
        key.x275 = x27a;
      }
    }
    x245 = true;
    x27c(39.9, 21);
    x1d0();
    return true;
  }
  var x27m = 2, x27n, x27o, x27p = false;
  function x27j() {
    if (!x27p) {
      x27n = x26y.clientWidth;
      x27p = true;
    }
    x27o = x26v.parentNode.clientWidth;
  }
  function x27k() {
    var x27q = x26v.clientWidth, x27r = x27m + x27q + x27m + x27n + x27m;
    if (x27r > x27o) {
      x26y.style.left = x27o - x27m - x27n;
      x26v.style.left = x26y.offsetLeft - x27m - x27q + "px";
    } else {
      x26v.style.left = x27m + "px";
      x26y.style.left = x27m + x27q + x27m + "px";
    }
  }
  function x27f(x27g) {
    var x27h = "";
    for (var xd = 0; xd < x27g.length; xd++) {
      x27h += "*";
    }
    return x27h;
  }
  this.x1di = function (x27i) {
    x1dh();
    x1b3.appendChild(x19j);
    x26u = x27i;
    x26v = x26u.x1x7;
    value = x26u.x1x8 || "";
    if (x26u.x13w) {
      x26w = x27f(value);
    }
    x26v.innerHTML = x26u.x13w ? x26w : value;
    x26v.parentNode.appendChild(x26y);
    x27j();
    x27k();
    x270(keys[x26t.x1dq][x26t.xck].key);
  };
  this.x1dj = function () {
    x19j = x1b3.removeChild(x19j);
    x26y = x26v.parentNode.removeChild(x26y);
  };
  function x27l(x13y) {
    xmn.x23c.xge({x13y: x13y, value: value});
  }
  this.x1ms = function () {
    x1dx();
  };
  this.x1bl = function () {
    x27l(true);
  };
  function x27c(xck, x1dq) {
    x1dh();
    if (x2x.x31.x197.x19h) {
      x19j.style.top = x1dq + "em";
      x19j.style.left = xck + 1.5 + "em";
    } else {
      x19j.style.top = x1dq + "em";
      x19j.style.left = xck + "em";
    }
  }
  function x27s(key) {
    value = value + key;
    if (x26u.x13w) {
      x26w += "*";
      x26v.innerHTML = x26w;
    } else x26v.innerHTML = value;
    x27k();
  }
  function x27t() {
    value = value.substr(0, value.length - 1);
    if (x26u.x13w) {
      x26w = x26w.substr(0, x26w.length - 1);
      x26v.innerHTML = x26w;
    } else x26v.innerHTML = value;
    x27k();
  }
  function x278() {
    var key = keys[x26t.x1dq][x26t.xck].value;
    switch (key) {
      case xah.x26l.x26p:
        x27l(true);
        break;
      case xah.x26l.x26o:
        x27t();
        break;
      default:
        x27s(key);
    }
  }
  function x1dy(x1dz) {
    switch (x1dz) {
      case xda.KEY_DOWN:
      case xda.xiq + xda.KEY_DOWN:
        x272(keys[x26t.x1dq][x26t.xck].key);
        if (x26t.x1dq < keys.length - 1) {
          x26t.x1dq++;
        }
        x270(keys[x26t.x1dq][x26t.xck].key);
        x271(keys[x26t.x1dq][x26t.xck].key);
        break;
      case xda.KEY_RIGHT:
      case xda.xiq + xda.KEY_RIGHT:
        x272(keys[x26t.x1dq][x26t.xck].key);
        if (x26t.xck < keys[x26t.x1dq].length - 1) {
          x26t.xck++;
        }
        x270(keys[x26t.x1dq][x26t.xck].key);
        x271(keys[x26t.x1dq][x26t.xck].key);
        break;
      case xda.KEY_UP:
      case xda.xiq + xda.KEY_UP:
        if (x26t.x1dq > 0) {
          x272(keys[x26t.x1dq][x26t.xck].key);
          x26t.x1dq--;
          x270(keys[x26t.x1dq][x26t.xck].key);
          x271(keys[x26t.x1dq][x26t.xck].key);
        } else {
          xmn.x1bk.xge(x2x.x31.x18q.x18t);
        }
        break;
      case xda.KEY_LEFT:
      case xda.xiq + xda.KEY_LEFT:
        x272(keys[x26t.x1dq][x26t.xck].key);
        if (x26t.xck > 0) {
          x26t.xck--;
        }
        x270(keys[x26t.x1dq][x26t.xck].key);
        x271(keys[x26t.x1dq][x26t.xck].key);
        break;
      case xda.KEY_RETURN:
        x1dx();
        break;
      case xda.KEY_ENTER:
      case xda.xiq + xda.KEY_ENTER:
        x278();
        break;
      case xda.KEY_1:
        x27s("1");
        break;
      case xda.KEY_2:
        x27s("2");
        break;
      case xda.KEY_3:
        x27s("3");
        break;
      case xda.KEY_4:
        x27s("4");
        break;
      case xda.KEY_5:
        x27s("5");
        break;
      case xda.KEY_6:
        x27s("6");
        break;
      case xda.KEY_7:
        x27s("7");
        break;
      case xda.KEY_8:
        x27s("8");
        break;
      case xda.KEY_9:
        x27s("9");
        break;
      case xda.KEY_0:
        x27s("0");
        break;
      case xda.x280:
        x27t();
        break;
      case xda.KEY_RED:
        x1bl();
        break;
      default:
        return false;
    }
    return true;
  }
  function focus() {
    x1b5 = true;
    x270(keys[x26t.x1dq][x26t.xck].key);
    x271(keys[x26t.x1dq][x26t.xck].key);
  }
  function x1e0() {
    x1b5 = false;
    x26z(keys[x26t.x1dq][x26t.xck].key);
  }
  function x1dx() {
    x27l(false);
  }
  this.x1e1 = {x1dy: x1dy, x1dx: x1dx, focus: focus, x1e0: x1e0};
};
var x285 = {x1x6: 0, x286: 1, x287: 3, x288: 4, x289: 5};
var x28a = {x28b: 0, xpe: 1, x28c: 2, x28d: 3, x28e: 4, x28f: 5, x28g: 99};
var x28h = function (x28i) {
  var _xg = xaa._xg, x1cs = x2x.x31.x1cs, x37 = x2x.x2y.x37, xah = this, x28j = x28i, x283, x28k = x28j.x28l, x28m = x28k, x28n, x22c = 0, x14u = [], x28o, x28p, x28q, x28r, x28s, x28t, x28u, x245 = false, x1gk = false, x1gl = false, x106 = false, x28v, x28w, x28x, x28y, x28z, x290;
  this.name = x28j.name;
  if (x28j.x291 === x285.x286) {
    if (x28j.x24t.x292) {
      x22c = x28j.x24t.x293(x28k);
      x28m = x28j.x24t.x292(x22c);
    } else {
      for (var xd = 0; xd < x28j.x24t.x294.length; xd++) {
        x14u[xd] = {title: x37.x9f(x28j.x24t.x294[xd]), value: x28j.x24t.x14u[xd]};
      }
      x22c = x295(x28k);
      x28m = x14u[x22c].value;
    }
  }
  function x295(xhn) {
    var xf6 = 0;
    for (var xd = 0; xd < x14u.length; xd++) {
      if (x14u[xd].value === xhn) {
        xf6 = xd;
        break;
      }
    }
    return xf6;
  }
  function x27f(x27g) {
    var x27h = "";
    for (var xd = 0; xd < x27g.length; xd++) {
      x27h += "*";
    }
    return x27h;
  }
  this.x296 = function () {
    return x28j.xub;
  };
  this.xu9 = function () {
    return x28j.x291;
  };
  this.x297 = function () {
    return x28j.x298;
  };
  this.x299 = function () {
    xah.x29a(x28k);
    if (typeof x28j.x29b === "function") {
      x28j.x29b();
    }
  };
  this.x292 = function () {
    if (x28j.x291 === x285.x1x6) {
      return x28m;
    } else if (x28j.x291 === x285.x286) {
      if (x28j.x24t.x292) {
        return x28j.x24t.x292(x22c).value;
      } else {
        return x14u[x22c].value;
      }
    }
  };
  function x29c(x19j) {
    x28s = x19j.appendChild(x19q("div", "css3g"));
    x28t = x19j.appendChild(x19q("div", "css3g"));
    x28s.innerHTML = "< ";
    x28s.style.right = "36%";
    x28s.onclick = x290;
    x28s.onmouseover = x29d;
    x28s.onmouseout = x29e;
    x28t.innerHTML = "> ";
    x28t.style.right = "0.5%";
    x28t.onclick = x28z;
    x28t.onmouseover = x29f;
    x28t.onmouseout = x29g;
  }
  function x29h() {
    if (x245) return;
    x28o = x19q("div", "css3f");
    x28p = x28o.appendChild(x19q("div", "css3h"));
    if (x2x.x31.x197.x19h) {
      x28o.style.borderWidth = "0.19em";
    }
    x245 = true;
    switch (x28j.x291) {
      case x285.x1x6:
        x28q = x28o.appendChild(x19q("div", "css3i"));
        x28r = x28q.appendChild(x19q("div", "css3k"));
        x29i();
        break;
      case x285.x286:
        x28r = x28o.appendChild(x19q("div", "css3j"));
        x29c(x28o);
        x29j();
        break;
    }
    x28o.x28v = x28v;
    x28o.onmouseover = x28w;
    x28o.onmouseout = x28x;
    x28o.onclick = x28y;
    xah.x1d0();
    xah.x1d6(x1sy);
    xah.x14h();
  }
  this.x14h = function () {
    if (!x245) return;
    var xst = xah.x296();
    x28p.innerHTML = x37.x9f(xst.title);
    if (x28j.x291 === x285.x286) {
      if (x28j.x24t.x292) {
        x14u = x28j.x24t;
      } else {
        x14u = [];
        var x29k = x28j.x24t;
        for (var xd = 0; xd < x29k.x294.length; xd++) {
          x14u[xd] = {title: x37.x9f(x29k.x294[xd]), value: x29k.x14u[xd]};
        }
      }
      x29j();
    }
  };
  this.x29l = function () {
    x29h();
    return x28o;
  };
  this.x29m = function (x29n, x29o, x29p, x29q, x29r, x29s) {
    x28v = x29n;
    x28w = x29o;
    x28x = x29p;
    x28y = x29q;
    x28z = x29r;
    x290 = x29s;
  };
  this.x1d0 = function () {
    if (x245) {
      x28p.style.color = x1cs.x1gw;
      if (x1gk) {
        x1gk = false;
        xah.x1by();
      }
      if (x28j.x291 === x285.x286) {
        x28s.style.color = x1cs.x1tl;
        x28t.style.color = x1cs.x1tl;
        x28r.style.color = x1cs.x1gw;
        if (x29t) {
          x29u(x28s);
        }
        if (x29v) {
          x29u(x28t);
        }
      }
      if (x28j.x291 === x285.x1x6) {
        x28r.style.color = x1cs.x1tl;
      }
    }
  };
  var x1sy = 1;
  this.x1d6 = function (xjn) {
    if (x245) {
      x28p.style.fontSize = 1.6 * xjn + "em";
      x28p.style.top = 1.47 - xjn * 1.6 / 2 + "em";
      if (x28r) {
        x28r.style.fontSize = 1.6 * xjn + "em";
        x28r.style.top = 1.47 - xjn * 1.6 / 2 + "em";
      }
    } else {
      x1sy = xjn;
    }
  };
  this.x1by = function () {
    if (!x1gk || !x1gl) {
      x1gk = true;
      x1gl = true;
      if (x245) {
        x28o.style.background = x2x.x31.x1cs.x1gn;
        x28p.style.color = x1cs.x1gm;
      }
    }
  };
  this.x1e0 = function () {
    if (x1gl) {
      x1gl = false;
      x28o.style.background = "transparent";
    }
  };
  this.x1ns = function () {
    if (x1gk) {
      xah.x1e0();
      x1gk = false;
      x28p.style.color = x1cs.x1gw;
      if (x28j.x291 === x285.x286) {}
    }
  };
  this.x29w = function () {
    if (x28j.x291 === x285.x286) {
      x29x(x28s);
      x29x(x28t);
    }
  };
  function x29u(key) {
    key.style.background = x1cs.x1fy;
    x28u = key;
  }
  function x29x(key) {
    key.style.background = "transparent";
  }
  var x29t = false, x29v = false;
  function x29d() {
    x29u(this);
    x29t = true;
  }
  function x29e() {
    x29x(this);
    x29t = false;
  }
  function x29f() {
    x29u(this);
    x29v = true;
  }
  function x29g() {
    x29x(this);
    x29v = false;
  }
  this.x29y = function () {
    var x27g = xah.x292(), xo4 = {};
    xo4.value = x27g;
    xo4.x29z = x106;
    xo4.x2a0 = x28j.x2a1;
    xo4.xwy = x28j.x298;
    xah.x2a2();
    return xo4;
  };
  this.x2a2 = function () {
    x106 = false;
  };
  this.x2a3 = function (x27g) {
    xah.x29a(x27g);
    xah.x2a2();
  };
  function x29i() {
    if (!x245) return;
    if (x28j.x298 === x28a.xpe || x28j.x298 === x28a.x28c) {
      var x2a4 = x27f(x28m);
      x28r.innerHTML = x2a4;
    } else {
      x28r.innerHTML = x28m;
    }
  }
  function x29j() {
    if (!x245) return;
    var x2a5;
    if (x28j.x24t.x292) {
      x2a5 = x28j.x24t.x292(x22c);
    } else {
      x2a5 = x14u[x22c];
    }
    x28r.innerHTML = x2a5.title;
  }
  this.x29a = function (x27g) {
    if (x28j.x291 === x285.x1x6) {
      x106 = x28m !== x27g;
      x28m = x27g;
      x29i();
    } else if (x28j.x291 === x285.x286) {
      var x2a6 = x27g;
      switch (x28j.x298) {
        case x28a.x28d:
          x2a6 = xa0(x2a6, 10);
          break;
        case x28a.x28f:
          if (xa4(x2a6).toLowerCase() === "true") {
            x2a6 = true;
          } else {
            x2a6 = false;
          }
          break;
      }
      var x2a7;
      if (x28j.x24t.x293) {
        x2a7 = x28j.x24t.x293(x2a6);
      } else {
        x2a7 = x295(x2a6);
      }
      x106 = x22c !== x2a7;
      x22c = x2a7;
      if (x28j.x24t.x292) {
        x28m = x28j.x24t.x292(x22c).value;
      } else {
        x28m = x14u[x22c].value;
      }
      x29j();
    }
  };
  this.x1bl = function () {
    if (x28j.x291 === x285.x1x6) {
      x106 = x28m !== x28n;
    } else if (x28j.x291 === x285.x286) {
      var value;
      if (x28j.x24t.x292) {
        value = x28j.x24t.x292(x22c).value;
      } else {
        value = x14u[x22c].value;
      }
      x106 = x28m !== value;
      x28m = value;
    }
    x283();
  };
  function x2a8() {
    x22c++;
    if (x22c >= x14u.length) {
      x22c = 0;
    }
    x106 = true;
    x29j();
    if (typeof x28j.x29b === "function") {
      x28j.x29b();
    }
  }
  this.x2a8 = x2a8;
  function x2a9() {
    x22c--;
    if (x22c < 0) {
      x22c = x14u.length - 1;
    }
    x106 = true;
    x29j();
    if (typeof x28j.x29b === "function") {
      x28j.x29b();
    }
  }
  this.x2a9 = x2a9;
};
var x2aa = function (x2ab, x2a1, x2ac) {
  var xah = this, x2a0 = x2a1, x28k = x2ac, x28m = x28k, x106 = false;
  this.name = x2ab;
  this.x292 = function () {
    return x28m;
  };
  this.x29y = function () {
    var x27g = xah.x292(), xo4 = {};
    xo4.value = x27g;
    xo4.x29z = x106;
    xo4.x2a0 = x2a1;
    xah.x2a2();
    return xo4;
  };
  this.x29a = function (x27g) {
    x106 = x27g !== x28m;
    x28m = x27g;
  };
  this.x299 = function () {
    xah.x29a(x28k);
  };
  this.x2a2 = function () {
    x106 = false;
  };
  this.x2a3 = function (x27g) {
    xah.x29a(x27g);
    xah.x2a2();
  };
};
x2x.x2ad = function (x19t, x5) {
  var _xg = xaa._xg, x37 = x2x.x2y.x37, x3f = x37.x3f, x89 = x37.x89, x8k = x37.x8k, xda = x2x.x2y.xda, x1cs = x2x.x31.x1cs, xch = x2x.x2z.xch, xah = this, x1b3 = x19t, x2ae = xci.name, x2af = xa8, x2ag = xa8, x2ah = xa8, x1b5 = false, x2ai = false, x2aj = false, x2ak = {x2al: "r", x2am: "w"}, x2an = {xb9: 0, x2ao: 1, x2ap: 2, x2aq: 3}, x2ar = {x2as: 0, x2ao: 1, x2at: 2, x2aq: 3, x2au: 4, xwl: 5, x2av: 6}, x2aw = [], x2ax = [], xmn = {x1bj: new x2x.xg3(this), x1bk: new x2x.xg3(this), xzf: new x2x.xg3(this), x235: new x2x.xg3(this), xzg: new x2x.xg3(this), xzb: new x2x.xg3(this), x237: new x2x.xg3(this), x238: new x2x.xg3(this), x23a: new x2x.xg3(this), x23b: new x2x.xg3(this), x239: new x2x.xg3(this), x236: new x2x.xg3(this)};
  this.xmn = xmn;
  this.x1zc = {};
  var xd1 = {xpc: "user_login", xpe: "user_password", x2ay: "app_language", xd2: "restore_state", x2az: "rtmp_player", x2b0: "buffer_set", x2b1: "buffer_total", x2b2: "buffer_percent", x2b3: "buffer_initial", x2b4: "buffer_pending", x20n: "parent_password", x20p: "parent_password_live", x1y2: "navigator_type", x2b5: "time_offset", x1n1: "mediacontroller_clock", x109: "$user_playlists$", x21t: "$color_theme$", x21u: "$ut_hue$", x21v: "$ut_angle$", x21w: "$ut_saturation$", x21x: "$ut_brightness$", x21y: "$ut_contrast$", x21z: "$ut_alpha$", x220: "$ut_dark$", x2b6: "$widget_wallpaper$", xr9: "$allgroup_type$", x1yr: "$playing_mode$", x2b7: "dbg_playvideo", x2b8: "$device_id$", x2b9: "$device_name$", x2ba: "$devices$", x2bb: "$current_version$", x14g: "$current_path$", x14y: "$current_stream$", xwl: "$favorites$", x2av: "$streamsopt$", x2bc: "$vodplayer$", x2bd: "$iptvplayer$", x2be: "$player$", x2bf: "$hlsplayer$", x2bg: "$htmlarmethod$", x2bh: "$phdmie$", xtv: "$useudpproxy$", xtx: "$udpproxy$", x2bi: "$reset$", x2bj: "$information$", x2bk: "$about$", xat: "$watch_shift$", x223: "$font_size$", x226: "$ui_size$"}, x2bl = {};
  x2bl[xd1.xpc] = "login";
  x2bl[xd1.xpe] = "password";
  x2bl[xd1.x2ay] = "applng";
  x2bl[xd1.x21t] = "theme";
  x2bl[xd1.x2b6] = "wpp";
  x2bl[xd1.x1y2] = "nav";
  this.xd1 = xd1;
  this.x2bl = x2bl;
  x2ax[x2ar.x2as] = "user";
  x2ax[x2ar.x2ao] = "device";
  x2ax[x2ar.x2at] = "state";
  x2ax[x2ar.x2aq] = "common";
  x2ax[x2ar.x2au] = "playlists";
  x2ax[x2ar.xwl] = "favorites";
  x2ax[x2ar.x2av] = "streamsopt";
  this.x2bm = function (xfe) {
    x2af = xfe;
  };
  this.x2bn = function (xfe) {
    x2ag = xfe;
  };
  this.x2bo = function (xfe) {
    x2ah = xfe;
  };
  var x19j = x19o("div", "css3a"), x2bp = x19j.appendChild(x19o("div", "css3b")), x1fn = new x2x.x31.x1fi(x2bp), xub = x19j.appendChild(x19q("div", "css3c")), x2bq = xub.appendChild(x19q("div", "css3d"));
  x1fn.xmn.x1bj.xgc(function () {
    xmn.x1bj.xge();
  }, this);
  x1fn.xmn.xyw.xgc(function () {
    x11u.x141();
  }, this);
  x1fn.xmn.xyu.xgc(function () {
    x11u.x140();
  }, this);
  x2bq.style.display = "none";
  function x2br(xsx) {
    x1b5 = true;
    x2bs.x1wy(x1dy, x1dx);
    x11u.x1mk().x1by();
    if (x11u.x1mk().xu9() === x285.x1x6) {
      xub.style.display = "";
    }
    if (x11u.x1mk().xu9() === x285.x287) {
      if (xsx) {
        x2bt();
      }
    }
  }
  function x2bu() {
    var xst = x11u.x1mk().x296().x8k;
    if (!xst) {
      x2bq.style.display = "none";
    } else {
      if (typeof xst === "function") {
        x2bq.innerHTML = xst();
      } else x2bq.innerHTML = x37.x9f(xst);
      x2bq.style.display = "";
    }
  }
  var x2bv = function (x19t) {
    var xah = this, x2bw = 10, x2bx = 0, xfl = 0, x2by = xfl, x2bz = x2bx, x1b3 = x19t, x2c0 = false, xd1 = [];
    xd1[x2ar.x2as] = [];
    xd1[x2ar.x2ao] = [];
    xd1[x2ar.x2at] = [];
    xd1[x2ar.x2aq] = [];
    xd1[x2ar.x2au] = [];
    xd1[x2ar.xwl] = [];
    xd1[x2ar.x2av] = [];
    this.x14h = function () {
      for (var xd = 0; xd < xd1[x2ar.x2as].length; xd++) {
        xah[xd1[x2ar.x2as][xd]].x14h();
      }
    };
    this.x1d0 = function () {
      for (var xd = 0; xd < xd1[x2ar.x2as].length; xd++) {
        xah[xd1[x2ar.x2as][xd]].x1d0();
      }
    };
    this.x1d6 = function (xjn) {
      for (var xd = 0; xd < xd1[x2ar.x2as].length; xd++) {
        xah[xd1[x2ar.x2as][xd]].x1d6(xjn);
      }
    };
    this.x2c1 = function (x1cw) {
      x2bx = x1cw;
    };
    this.x1cu = function (x1cw) {
      xah[xd1[x2ar.x2as][x1cw]].x1e0();
    };
    function x2c2() {
      var xfp = 1 / xd1[x2ar.x2as].length, x2c3 = xfl * xfp, x2c4 = x2bw * xfp;
      if (x2c4 > 1) x2c4 = 0;
      x1fn.x1dw({top: x2c3, height: x2c4});
    }
    this.x1bq = function (xr4, x10g) {
      xd1[xr4].push(x10g.name);
      xah[x10g.name] = x10g;
      switch (xr4) {
        case x2ar.x2as:
          x10g.x29m(xd1[xr4].length - 1, x1cv, x1cx, x1cy, x2c5, x2c6);
          break;
      }
    };
    this.x1mk = function () {
      return xah[xd1[x2ar.x2as][x2bx]];
    };
    this.x2c7 = function () {
      return x2c0;
    };
    this.x1dw = function (x2c8) {
      var x2c9 = xfl - x2by, x2ca = x9v.abs(x2c9), x2a6;
      if (x2ca >= x2bw) x2c8 = true;
      xah[xd1[x2ar.x2as][x2bz]].x29l();
      xah[xd1[x2ar.x2as][x2bz]].x1ns();
      if (x2c8) {
        var xvz = x2bw;
        if (xvz > xd1[x2ar.x2as].length) {
          xvz = xd1[x2ar.x2as].length;
        }
        if (x2c0) {
          for (var xd = x2by; xd < x2by + xvz; xd++) {
            x2a6 = x1b3.removeChild(xah[xd1[x2ar.x2as][xd]].x29l());
          }
        }
        for (var xd = 0; xd < xvz; xd++) {
          var x1cw = xfl + xd;
          x1b3.appendChild(xah[xd1[x2ar.x2as][x1cw]].x29l());
        }
        x2c0 = true;
      } else {
        if (x2c9 > 0) {
          for (var xd = 0; xd < x2c9; xd++) {
            x2a6 = x1b3.removeChild(xah[xd1[x2ar.x2as][x2by + xd]].x29l());
            x1b3.appendChild(xah[xd1[x2ar.x2as][x2by + x2bw + xd]].x29l());
          }
        } else if (x2c9 < 0) {
          for (var xd = 0; xd < x2ca; xd++) {
            x2a6 = x1b3.removeChild(xah[xd1[x2ar.x2as][x2by + x2bw - 1 - xd]].x29l());
            x1b3.insertBefore(xah[xd1[x2ar.x2as][x2by - xd - 1]].x29l(), xah[xd1[x2ar.x2as][x2by - xd]].x29l());
          }
        }
      }
      xah[xd1[x2ar.x2as][x2bx]].x1by();
      x2bu();
      x2c2();
      x2by = xfl;
      x2bz = x2bx;
    };
    this.x2cb = function () {
      if (xfl + x2bw + 1 <= xd1[x2ar.x2as].length) {
        xfl++;
        x2bx++;
        xah.x1dw(false);
      }
    };
    this.x2cc = function () {
      if (xfl - 1 >= 0) {
        xfl--;
        x2bx--;
        xah.x1dw(false);
      }
    };
    this.x140 = function () {
      if (x2bx < xd1[x2ar.x2as].length - 1) {
        x2bx++;
        if (x2bx - xfl >= x2bw) {
          xfl++;
        }
        xah.x1dw(false);
      }
    };
    this.x141 = function () {
      if (x2bx > 0) {
        x2bx--;
        if (x2bx < xfl) {
          xfl = x2bx;
        }
        xah.x1dw(false);
      } else {
        xmn.x1bk.xge();
      }
    };
    this.x292 = function (x2ab) {
      if (typeof xah[x2ab] !== x9n) {
        return xah[x2ab].x292();
      } else return x9m;
    };
    this.xu9 = function (x2ab) {
      if (typeof xah[x2ab] !== x9n && typeof xah[x2ab].xu9 !== x9n) {
        return xah[x2ab].xu9();
      } else return x9m;
    };
    this.x29y = function (name) {
      if (typeof xah[name] !== x9n) {
        return xah[name].x29y();
      } else return x9m;
    };
    this.x29a = function (x2ab, x27g) {
      if (typeof xah[x2ab] !== x9n) {
        xah[x2ab].x29a(x27g);
      }
    };
    this.x2a3 = function (x2ab, x27g) {
      if (typeof xah[x2ab] !== x9n) {
        xah[x2ab].x2a3(x27g);
      }
    };
    this.x2cd = function (x2ab) {
      xah[x2ab].x299();
    };
    this.x2ce = function (xr4) {
      return xd1[xr4];
    };
    this.x2cf = function () {
      console.log(xah);
    };
    this.x14h();
  };
  function x13p(x5, x2cg) {
    if (!x2cg) {
      if (x11u.x1mk().name === xd1.x20n || x11u.x1mk().name === xd1.x20p) {
        var x13q = function (x13r) {
          x2aj = x13r;
          x5(x13r);
        };
        xmn.xzb.xge({title: x37.x9f(x37.x3f.x7t), x5: x13q});
      } else {
        x5(true);
      }
    } else {
      x5(true);
    }
  }
  function x2ch(x2ci) {
    function x2cj(x2ck) {
      if (x2ck) {
        var x2cl = x11u.x1mk().xu9();
        switch (x2cl) {
          case x285.x289:
            return;
          case x285.x288:
            if (xt.xu === xf.xl) {
              xad.xie("------ device info ------");
              xad.xie(typeof xi3.RDir + "|" + typeof xi3.SaveUserData + "|" + typeof xi3.LoadUserData);
              try {
                var xjd = xa4(xi3.RDir("gmode")), xje = xa4(xi3.RDir("vmode"));
                xad.xie(xjd + "|" + xje);
              } catch (x12) {}
              xad.xie(typeof xi3.InitPlayer + "|" + typeof xi3.SetViewport + "|" + typeof xi3.Play + "|" + typeof xi3.Stop);
              xad.xie(typeof xaa.xi4);
            }
            return;
          case x285.x1x6:
            var x2cm = x11u.x1mk();
            if (x2cm.name === xd1.x20n) {
              xmn.x235.xge({title: x37.x9f(x37.x3f.x7u), x13w: true, x5: function (x13x) {
                if (x13x.x13y) {
                  x2cm.x29a(x13x.value);
                }
              }});
            } else {
              xmn.xzf.xge({title: x37.x9f(x2cm.x296().title), value: x2cm.x292(), x13w: x2cm.x297() === x28a.xpe, x5: function (x13x) {
                if (x13x.x13y) {
                  x2cm.x29a(x13x.value);
                }
              }});
            }
            break;
          case x285.x287:
            xmn.xzg.xge({x15j: x37.x3f.x7o, title: x11u.x1mk().x296().title, x5: function (x2cn) {
              if (x2cn) {
                x2bt();
              }
            }});
            break;
          case x285.x286:
            break;
          default:
            return;
        }
      }
    }
    if (x11u.x1mk().xu9() === x285.x1x6) {
      x13p(x2cj, x2ci);
    } else {
      x2cj(true);
    }
  }
  function x2c5() {
    if (x11u.x1mk().xu9() !== x285.x286) return;
    x13p(function (x2ck) {
      if (x2ck) {
        x11u.x1mk().x2a8();
      }
    }, x2aj);
  }
  function x2c6() {
    if (x11u.x1mk().xu9() !== x285.x286) return;
    x13p(function (x2ck) {
      if (x2ck) {
        x11u.x1mk().x2a9();
      }
    }, x2aj);
  }
  function x1cv() {
    xmn.x1bj.xge();
    x11u.x2c1(this.x28v);
    x11u.x1dw(false);
  }
  function x1cx() {}
  function x1cy() {
    x11u.x2c1(this.x28v);
    x2ch();
  }
  var x2co;
  var x2cp;
  var x11u = new x2bv(x2bp);
  function x2cq() {
    var x2cr = {x294: x89.x8c, x14u: [true, false]};
    var x2cs = {x291: x285.x1x6, x298: x28a.x28b, x2a1: x2an.x2ao, name: xd1.xpc, xub: {title: x3f.x3k, x8k: x8k.x8l}, x2ct: x2cp, x28l: "", x24t: []};
    var x2cu = new x28h(x2cs);
    x11u.x1bq(x2ar.x2as, x2cu);
    var x2cv = {x291: x285.x1x6, x298: x28a.xpe, x2a1: x2an.x2ao, name: xd1.xpe, xub: {title: x3f.x3l, x8k: x8k.x8m}, x2ct: x2cp, x28l: "", x24t: {}};
    var x2cw = new x28h(x2cv);
    x11u.x1bq(x2ar.x2as, x2cw);
    var x2cx = x37.x39.x3a;
    if (xt.x37 === "ru" || xt.x37 === "ru-ru") {
      x2cx = x37.x39.x3b;
    } else if (xt.x37 === "ua" || xt.x37 === "ru-ua") {
      x2cx = x37.x39.x3c;
    }
    var x2cy = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.x2ap, name: xd1.x2ay, xub: {title: x3f.x3m, x8k: x8k.x8n}, x2ct: x2co, x28l: x2cx, x24t: {x294: x89.x8a, x14u: [x37.x39.x3a, x37.x39.x3b, x37.x39.x3c]}, x29b: function () {
      x37.x9d(xah.xd0(xd1.x2ay));
      xah.x14h();
      xmn.x239.xge();
    }};
    var x2cz = new x28h(x2cy);
    x11u.x1bq(x2ar.x2as, x2cz);
    var x2d0 = {x291: x285.x286, x298: x28a.x28f, x2a1: x2an.xb9, name: xd1.xd2, xub: {title: x3f.x3n, x8k: x8k.x8s}, x2ct: x2co, x28l: false, x24t: x2cr};
    var x2d1 = new x28h(x2d0);
    x11u.x1bq(x2ar.x2as, x2d1);
    xah.x2d2 = {x1j7: 0, x1j8: 1, x1j9: 3, x1ja: 4};
    var x2d3 = {x294: x89.x8e, x14u: [xah.x2d2.x1j7, xah.x2d2.x1j8, xah.x2d2.x1j9, xah.x2d2.x1ja]};
    var x2d4 = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.x2ap, name: xd1.x1y2, xub: {title: x3f.x3o, x8k: x8k.x8o}, x2ct: x2co, x28l: xah.x2d2.x1j8, x24t: x2d3, x29b: function () {
      xmn.x237.xge();
    }};
    var x2d5 = new x28h(x2d4);
    x11u.x1bq(x2ar.x2as, x2d5);
    var x2d6 = {x294: [["-12"], ["-11"], ["-10"], ["-9"], ["-8"], ["-7"], ["-6"], ["-5"], ["-4"], ["-3"], ["-2"], ["-1"], ["0"], ["+1"], ["+2"], ["+3"], ["+4"], ["+5"], ["+6"], ["+7"], ["+8"], ["+9"], ["+10"], ["+11"], ["+12"]], x14u: [-720, -660, -600, -540, -480, -420, -360, -300, -240, -180, -120, -60, 0, 60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720]};
    var x2d7 = 0;
    var x2d8 = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.x2ap, name: xd1.x2b5, xub: {title: x3f.x3p, x8k: x8k.x8p}, x2ct: x2co, x28l: x2d7, x24t: x2d6, x29b: function () {
      x2x.x2z.xch.xaz(xah.xd0(xd1.x2b5));
    }};
    var x2d9 = new x28h(x2d8);
    x11u.x1bq(x2ar.x2as, x2d9);
    xah.x2da = {x2db: 0, x2dc: 1, x2dd: 2, x2de: 3, x2df: 4, x2dg: 5};
    if (xt.xjt === xjt.xju || xt.xjt === xjt.xjw || xt.xjt === xjt.xk2 || xdr && xt.xjt === xjt.xjx) {
      var x2dh, x2di;
      if (xt.xjt === xjt.xk2) {
        x2dh = {x294: [["AVPlayer"], ["HTML5 player"]], x14u: [xah.x2da.x2df, xah.x2da.x2dc]};
        x2di = xah.x2da.x2df;
      } else {
        x2dh = {x294: [["HTML5 player"], ["Mediaplayer"]], x14u: [xah.x2da.x2dc, xah.x2da.x2dd]};
        x2di = xah.x2da.x2dc;
        if (xt.xu === xf.xi) {
          x2di = xah.x2da.x2dd;
        }
      }
      var x2dj = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.xb9, name: xd1.x2bc, xub: {title: x3f.x45, x8k: x8k.x94}, x2ct: x2co, x28l: x2di, x24t: x2dh};
      var x2dk = new x28h(x2dj);
      x11u.x1bq(x2ar.x2as, x2dk);
      var x2dl = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.xb9, name: xd1.x2bd, xub: {title: x3f.x46, x8k: x8k.x95}, x2ct: x2co, x28l: x2di, x24t: x2dh};
      var x2dm = new x28h(x2dl);
      x11u.x1bq(x2ar.x2as, x2dm);
    }
    if (xt.xu === xf.xg && xt.xjt === xjt.xju) {
      xah.x2dn = {x2db: 0, x2do: 1, x2de: 2, x2dp: 3, x2dc: 4};
      var x2dq = {x294: [["FLASH player"], ["JS player"], ["Default"]], x14u: [xah.x2dn.x2de, xah.x2dn.x2dp, xah.x2dn.x2do]};
      var x2dr = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.xb9, name: xd1.x2bf, xub: {title: x3f.x47, x8k: x8k.x96}, x2ct: x2co, x28l: xah.x2dn.x2de, x24t: x2dq};
      var x2ds = new x28h(x2dr);
      x11u.x1bq(x2ar.x2as, x2ds);
    }
    if (xt.xu === xf.xg && xt.xjt === xjt.xju || xt.xu === xf.xo || xt.xu === xf.xq) {
      xah.x2dt = {x2du: 0, x2dv: 1, x2dw: 2};
      var x2dx = {x294: [["Transform"], ["Size"]], x14u: [xah.x2dt.x2dw, xah.x2dt.x2dv]};
      var x2dy = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.xb9, name: xd1.x2bg, xub: {title: x3f.x48, x8k: x8k.x97}, x2ct: x2co, x28l: xah.x2dt.x2dw, x24t: x2dx};
      var x2dz = new x28h(x2dy);
      x11u.x1bq(x2ar.x2as, x2dz);
    }
    if (xt.xjt === xjt.xjv || xt.xjt === xjt.xk2) {
      xah.x2e0 = {x2du: 0, x2e1: 1, x2e2: 2};
      if (xt.xjt === xjt.xjv && xt.xv >= xaa.xhr) {
        var x2e3 = {x294: x89.x8j, x14u: [xah.x2e0.x2du, xah.x2e0.x2e1, xah.x2e0.x2e2]};
        var x2e4 = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.xb9, name: xd1.x2be, xub: {title: x3f.x44, x8k: x8k.x93}, x2ct: x2co, x28l: xah.x2e0.x2du, x24t: x2e3};
        var x2e5 = new x28h(x2e4);
        x11u.x1bq(x2ar.x2as, x2e5);
      }
      var x2e6 = {x291: x285.x286, x298: x28a.x28f, x2a1: x2an.xb9, name: xd1.x2b0, xub: {title: x3f.x3q, x8k: x8k.x8u}, x2ct: x2co, x28l: false, x24t: x2cr};
      var x2e7 = new x28h(x2e6);
      x11u.x1bq(x2ar.x2as, x2e7);
      var x2e8 = 1024;
      var x2e9 = 1024 * x2e8;
      var x2ea = {x294: [["128 Kb"], ["256 Kb"], ["512 Kb"], ["1 Мb"], ["2 Мb"], ["4 Мb"], ["6 Мb"], ["8 Мb"], ["10 Мb"], ["12 Мb"], ["14 Мb"], ["16 Мb"], ["18 Мb"], ["20 Мb"]], x14u: [128 * x2e8, 256 * x2e8, 512 * x2e8, 1 * x2e9, 2 * x2e9, 4 * x2e9, 6 * x2e9, 8 * x2e9, 10 * x2e9, 12 * x2e9, 14 * x2e9, 16 * x2e9, 18 * x2e9, 20 * x2e9]}, x2eb = 8 * x2e9;
      if (xt.xu === xf.xm) {
        x2ea.x294.push(["32 Mb"]);
        x2ea.x14u.push(32 * x2e9);
        x2ea.x294.push(["64 Mb"]);
        x2ea.x14u.push(64 * x2e9);
        x2ea.x294.push(["128 Mb"]);
        x2ea.x14u.push(128 * x2e9);
        x2ea.x294.push(["256 Mb"]);
        x2ea.x14u.push(256 * x2e9);
        x2eb = 32 * x2e9;
      }
      var x2ec = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.xb9, name: xd1.x2b1, xub: {title: x3f.x3r, x8k: x8k.x8v}, x2ct: x2co, x28l: x2eb, x24t: x2ea};
      var x2ed = new x28h(x2ec);
      x11u.x1bq(x2ar.x2as, x2ed);
      if (xt.xjt !== xjt.xk2) {
        var x2ee = {x294: [["1%/99%"], ["2%/98%"], ["5%/95%"], ["10%/90%"], ["15%/85%"], ["20%/80%"], ["25%/75%"], ["30%/70%"], ["35%/65%"], ["40%/60%"], ["45%/55%"], ["50%/50%"]], x14u: [1, 2, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]};
        var x2ef = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.xb9, name: xd1.x2b2, xub: {title: x3f.x3s, x8k: x8k.x8w}, x2ct: x2co, x28l: 25, x24t: x2ee};
        var x2eg = new x28h(x2ef);
        x11u.x1bq(x2ar.x2as, x2eg);
      }
    } else if (xt.xu === xf.xl) {}
    xah.x1n2 = {xb9: 0, x1n3: 1, x1n4: 2};
    var x2eh = {x294: x89.x8b, x14u: [xah.x1n2.xb9, xah.x1n2.x1n3, xah.x1n2.x1n4]};
    var x2ei = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.xb9, name: xd1.x1n1, xub: {title: x3f.x3t, x8k: x8k.x8t}, x2ct: x2co, x28l: xah.x1n2.xb9, x24t: x2eh};
    var x2ej = new x28h(x2ei);
    x11u.x1bq(x2ar.x2as, x2ej);
    var x2ek = {x294: [["90%"], ["100%"], ["110%"], ["120%"], ["130%"]], x14u: [90, 100, 110, 120, 130]};
    var x2el = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.x2ap, name: xd1.x223, xub: {title: x3f.x3x, x8k: x3f.x3x}, x2ct: x2co, x28l: 100, x24t: x2ek, x29b: function () {
      xmn.x23a.xge();
    }};
    var x2em = new x28h(x2el);
    x11u.x1bq(x2ar.x2as, x2em);
    var x2en = {x294: x89.x8f, x14u: [x2x.x31.x18w.x18x, x2x.x31.x18w.x18y, x2x.x31.x18w.x18z]};
    var x2eo = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.x2ap, name: xd1.x226, xub: {title: x3f.x3y, x8k: x3f.x3y}, x2ct: x2co, x28l: x2x.x31.x18w.x18y, x24t: x2en, x29b: function () {
      xmn.x23b.xge();
    }};
    var x2ep = new x28h(x2eo);
    x11u.x1bq(x2ar.x2as, x2ep);
    var x2eq = {x294: x2x.x31.x1cs.x1to(), x14u: x2x.x31.x1cs.x1tp()};
    var x2er = function () {
      var xst = [];
      xst[0] = x37.x9f(x8k.x8q) + "<br>";
      xst[0] += x2x.x31.x1cs.x1wd();
      return xst;
    };
    var x2es = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.x2ap, name: xd1.x21t, xub: {title: x3f.x3u, x8k: x2er}, x2ct: x2co, x28l: 0, x24t: x2eq, x29b: function () {
      xmn.x238.xge();
      x1d0();
      x2bu();
    }};
    var x2et = new x28h(x2es);
    x11u.x1bq(x2ar.x2as, x2et);
    var x2eu = function () {
      xmn.x238.xge();
      x1d0();
      x2bu();
    };
    var x2ev = function () {
      var xst = [];
      xst[0] = [x37.x9f(x8k.x8q), "<br>", x2x.x31.x1cs.x1w6(), x2x.x31.x1cs.x1wd()].join("");
      return xst;
    };
    var x2ew = {x294: x89.x8d, x14u: [true, false]};
    var x2ex = {x291: x285.x286, x298: x28a.x28f, x2a1: x2an.x2ap, name: xd1.x220, xub: {title: x3f.x4r, x8k: x2ev}, x2ct: x2co, x28l: true, x24t: x2ew, x29b: x2eu};
    var x2ey = new x28h(x2ex);
    x11u.x1bq(x2ar.x2as, x2ey);
    var x2ez = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.x2ap, name: xd1.x21u, xub: {title: x3f.x4l, x8k: x2ev}, x2ct: x2co, x28l: 223, x24t: {length: 360, x292: function (xf6) {
      return {title: xf6 * 1, value: xf6 * 1};
    }, x293: function (value) {
      return value * 1;
    }}, x29b: x2eu};
    var x2f0 = new x28h(x2ez);
    x11u.x1bq(x2ar.x2as, x2f0);
    var x2f1 = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.x2ap, name: xd1.x21v, xub: {title: x3f.x4m, x8k: x2ev}, x2ct: x2co, x28l: 42, x24t: {length: 160, x292: function (xf6) {
      return {title: (xf6 - 80) * 2, value: (xf6 - 80) * 2};
    }, x293: function (value) {
      return (value / 2 >> 0) + 80;
    }}, x29b: x2eu};
    var x2f2 = new x28h(x2f1);
    x11u.x1bq(x2ar.x2as, x2f2);
    var x2f3 = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.x2ap, name: xd1.x21w, xub: {title: x3f.x4n, x8k: x2ev}, x2ct: x2co, x28l: 100, x24t: {length: 20, x292: function (xf6) {
      return {title: (xf6 + 1) * 5 + "%", value: (xf6 + 1) * 5};
    }, x293: function (value) {
      return (value / 5 >> 0) - 1;
    }}, x29b: x2eu};
    var x2f4 = new x28h(x2f3);
    x11u.x1bq(x2ar.x2as, x2f4);
    var x2f5 = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.x2ap, name: xd1.x21x, xub: {title: x3f.x4o, x8k: x2ev}, x2ct: x2co, x28l: 100, x24t: {length: 20, x292: function (xf6) {
      return {title: (xf6 + 1) * 5 + "%", value: (xf6 + 1) * 5};
    }, x293: function (value) {
      return (value / 5 >> 0) - 1;
    }}, x29b: x2eu};
    var x2f6 = new x28h(x2f5);
    x11u.x1bq(x2ar.x2as, x2f6);
    var x2f7 = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.x2ap, name: xd1.x21y, xub: {title: x3f.x4p, x8k: x2ev}, x2ct: x2co, x28l: 75, x24t: {length: 20, x292: function (xf6) {
      return {title: (xf6 + 1) * 5 + "%", value: (xf6 + 1) * 5};
    }, x293: function (value) {
      return (value / 5 >> 0) - 1;
    }}, x29b: x2eu};
    var x2f8 = new x28h(x2f7);
    x11u.x1bq(x2ar.x2as, x2f8);
    var x2f9 = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.x2ap, name: xd1.x21z, xub: {title: x3f.x4q, x8k: x2ev}, x2ct: x2co, x28l: 85, x24t: {length: 11, x292: function (xf6) {
      return {title: 45 + (xf6 + 1) * 5 + "%", value: 45 + (xf6 + 1) * 5};
    }, x293: function (value) {
      return ((value - 45) / 5 >> 0) - 1;
    }}, x29b: x2eu};
    var x2fa = new x28h(x2f9);
    x11u.x1bq(x2ar.x2as, x2fa);
    var x2fb = {x294: [], x14u: []};
    x2fb.x294.push(x3f.x4e);
    x2fb.x14u.push(-1);
    var x2fc = x2x.x31.x1cs.x1tq();
    for (var xd = 0; xd < x2fc; xd++) {
      x2fb.x294.push(xa4(xd));
      x2fb.x14u.push(xd);
    }
    var x2fd = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.x2ap, name: xd1.x2b6, xub: {title: x3f.x3v, x8k: x8k.x8r}, x2ct: x2co, x28l: -1, x24t: x2fb, x29b: function () {
      var x2fe = xah.xd0(xd1.x2b6);
      x2x.x31.x1cs.x1wh(x2fe);
    }};
    var x2ff = new x28h(x2fd);
    x11u.x1bq(x2ar.x2as, x2ff);
    var x2fg = {x291: x285.x1x6, x298: x28a.x28c, x2a1: x2an.xb9, name: xd1.x20n, xub: {title: x3f.x3z, x8k: x8k.x8x}, x2ct: x2cp, x28l: "0000", x24t: {}};
    var x2fh = new x28h(x2fg);
    x11u.x1bq(x2ar.x2as, x2fh);
    var x2fi = {x294: x89.x8g, x14u: [0, 5, 30, 90, 1440]};
    var x2fj = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.xb9, name: xd1.x20p, xub: {title: x3f.x40, x8k: x8k.x8y}, x2ct: x2co, x28l: 1, x24t: x2fi};
    var x2fk = new x28h(x2fj);
    x11u.x1bq(x2ar.x2as, x2fk);
    xah.xra = {xb9: 0, xre: 1, x2fl: 2, xrg: 3};
    var x2fm = {x294: x89.x8h, x14u: [xah.xra.xb9, xah.xra.xre, xah.xra.x2fl, xah.xra.xrg]};
    var x2fn = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.x2ao, name: xd1.xr9, xub: {title: x3f.x3w, x8k: x8k.x90}, x2ct: x2co, x28l: xah.xra.xre, x24t: x2fm};
    var x2fo = new x28h(x2fn);
    x11u.x1bq(x2ar.x2as, x2fo);
    xah.x1ys = {x1yt: 0, x1yw: 1, x1yv: 2};
    var x2fp = {x294: x89.x8i, x14u: [xah.x1ys.x1yt, xah.x1ys.x1yw, xah.x1ys.x1yv]};
    var x2fq = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.xb9, name: xd1.x1yr, xub: {title: x3f.x41, x8k: x8k.x91}, x2ct: x2co, x28l: xah.x1ys.x1yt, x24t: x2fp};
    var x2fr = new x28h(x2fq);
    x11u.x1bq(x2ar.x2as, x2fr);
    var x2fs = {x294: [], x14u: []};
    for (var x1ua = 0; x1ua < 12; x1ua++) {
      for (var xt2 = 0; xt2 < 60; xt2 += 5) {
        var x2ft = xt2;
        if (x2ft < 10) {
          x2ft = "0" + x2ft;
        }
        x2fs.x294.push([x1ua + ":" + x2ft]);
        x2fs.x14u.push(-1 * (60 * x1ua + xt2));
      }
    }
    x2fs.x294.push(["12:00"]);
    x2fs.x14u.push(-720);
    var x2fu = {x291: x285.x286, x298: x28a.x28d, x2a1: x2an.x2aq, name: xd1.xat, xub: {title: x3f.x49, x8k: x8k.x98}, x2ct: x2co, x28l: 0, x24t: x2fs};
    var x2fv = new x28h(x2fu);
    x11u.x1bq(x2ar.x2as, x2fv);
    if (xt.xjt === xjt.xjy) {
      var x2fw = {x291: x285.x286, x298: x28a.x28f, x2a1: x2an.xb9, name: xd1.x2bh, xub: {title: x3f.x4b, x8k: x8k.x9a}, x2ct: x2co, x28l: true, x24t: x2cr};
      var x2fx = new x28h(x2fw);
      x11u.x1bq(x2ar.x2as, x2fx);
    }
    var x2fy = {x291: x285.x286, x298: x28a.x28f, x2a1: x2an.xb9, name: xd1.xtv, xub: {title: x3f.x4c, x8k: x8k.x9b}, x2ct: x2co, x28l: false, x24t: x2cr};
    var x2fz = new x28h(x2fy);
    x11u.x1bq(x2ar.x2as, x2fz);
    var x2g0 = {x291: x285.x1x6, x298: x28a.x28b, x2a1: x2an.xb9, name: xd1.xtx, xub: {title: x3f.x4d, x8k: x8k.x9c}, x2ct: x2cp, x28l: "http://", x24t: []};
    var x2g1 = new x28h(x2g0);
    x11u.x1bq(x2ar.x2as, x2g1);
    var x2g2 = function () {
      var result = [];
      var xm2 = xah.xpf(), x2g3 = xm2.name;
      if (!x2g3) {
        x2g3 = x37.x9f(x37.x3f.x5o);
      }
      result[0] = "<strong>Version: </strong>" + x2x.x32.x36();
      result[0] += "<br><strong>Device name: </strong>" + x2g3;
      result[0] += "<br><strong>Platform: </strong>" + xa3.platform + "[" + xt.xk7 + "]" + "[" + xt.xv + "]";
      result[0] += "<br><strong>Device model: </strong>" + xt.modelName;
      result[0] += "<br><strong>Firmware: </strong>" + xt.x11;
      if (xt.xu === xf.xj) {
        result[0] += "<br><strong>Serial: </strong>" + xt.xk6;
      } else if (xt.xu === xf.xm && xt.xk5 === "000000000000") {
        result[0] += "<br><strong>DUID: </strong>" + xt.xk6;
      } else {
        result[0] += "<br><strong>MAC: </strong>" + xt.xk5;
      }
      result[0] += "<br><div style='word-wrap:break-word;'><strong>User-Agent: </strong>" + xa3.userAgent + "</div>";
      result[0] += "<br><div><strong>Locale: </strong>" + xt.x37 + "; <strong>Td: </strong>" + xch.xbe() + "</div>";
      result[0] += "<div style='word-wrap:break-word;'><strong>Location: </strong>" + xaa.location + "</div>";
      if (x9o.referrer) {
        result[0] += "<div style='word-wrap:break-word;'><strong>Referrer: </strong>" + x9o.referrer + "</div>";
      }
      result[0] += "<strong>UI size: </strong>" + xaa.innerWidth + "x" + xaa.innerHeight + "[" + x2x.x31.x197.x19a.toFixed(3) + ";" + x2x.x31.x197.x19b.toFixed(3) + "]";
      if (xaa.devicePixelRatio) {
        result[0] += "dpr:" + xaa.devicePixelRatio.toFixed(6);
      }
      if (xaa.xja) {
        result[0] += " ff:" + xaa.xja.toFixed(4);
      }
      result[0] += "<br><strong>Storage:</strong>" + typeof xaa.localStorage + "|" + typeof xaa.openDatabase;
      if (typeof xaa.localStorage !== x9n) {
        try {
          result[0] += "|" + typeof xaa.localStorage.setItem + "|" + typeof xaa.localStorage.getItem;
        } catch (x12) {
          result[0] += "|--|--";
        }
      }
      if (xt.xu === xf.xq || xt.xu === xf.xg || xt.xu === xf.xo) {
        result[0] += "<br><strong>VK:</strong>" + xaa.VK_RED + "|" + xaa.VK_ENTER + "|" + xaa.VK_BACK_SPACE;
      }
      if (xdr) {
        result[0] += "<br><span style='font-weight:400'>[W1]</span><span style='font-weight:600'>[W2]</span>";
      }
      return result;
    };
    var x2g4 = {x291: x285.x288, x298: x28a.x28g, x2a1: x2an.xb9, name: xd1.x2bj, xub: {title: x3f.x42, x8k: x2g2}, x2ct: x2co, x28l: x9m, x24t: {x294: [], x14u: []}};
    var x2g5 = new x28h(x2g4);
    x11u.x1bq(x2ar.x2as, x2g5);
    var x2g6 = {x291: x285.x289, x298: x28a.x28g, x2a1: x2an.xb9, name: xd1.x2bk, xub: {title: x3f.x4f, x8k: x8k.x8z}, x2ct: x2co, x28l: x9m, x24t: {x294: [], x14u: []}};
    var x2g7 = new x28h(x2g6);
    x11u.x1bq(x2ar.x2as, x2g7);
    var x2g8 = {x291: x285.x287, x298: x28a.x28g, x2a1: x2an.x2ao, name: xd1.x2bi, xub: {title: x3f.x43, x8k: x8k.x92}, x2ct: x2co, x28l: x9m, x24t: {x294: [], x14u: []}};
    var x2g9 = new x28h(x2g8);
    x11u.x1bq(x2ar.x2as, x2g9);
    if (xdr) {
      if (xt.xu === xf.xh) {
        var x2ga = {x291: x285.x286, x298: x28a.x28f, x2a1: x2an.xb9, name: xd1.x2b7, xub: {title: [xd1.x2b7, xd1.x2b7]}, x2ct: x2co, x28l: true, x24t: x2cr};
        var x2gb = new x28h(x2ga);
        x11u.x1bq(x2ar.x2as, x2gb);
      }
    }
    var x2gc = new x2aa(xd1.x2b8, x2an.xb9, "");
    x11u.x1bq(x2ar.x2ao, x2gc);
    var x2gd = new x2aa(xd1.x2b9, x2an.xb9, "");
    x11u.x1bq(x2ar.x2ao, x2gd);
    var x2ge = new x2aa(xd1.x2ba, x2an.xb9, x9u.stringify({}));
    x11u.x1bq(x2ar.x2ao, x2ge);
    var x2gf = new x2aa(xd1.x14g, x2an.xb9, x9u.stringify([-1]));
    x11u.x1bq(x2ar.x2at, x2gf);
    var x2gg = new x2aa(xd1.x14y, x2an.xb9, "-1");
    x11u.x1bq(x2ar.x2at, x2gg);
    var x2gh = new x2aa(xd1.x2bb, x2an.xb9, x2x.x32.x36());
    x11u.x1bq(x2ar.x2aq, x2gh);
    var x2gi = new x2aa(xd1.x109, x2an.xb9, x9u.stringify([]));
    x11u.x1bq(x2ar.x2au, x2gi);
    var x2gj = new x2aa(xd1.xwl, x2an.xb9, x9u.stringify([]));
    x11u.x1bq(x2ar.xwl, x2gj);
    var x2gk = new x2aa(xd1.x2av, x2an.xb9, x9u.stringify({}));
    x11u.x1bq(x2ar.x2av, x2gk);
  }
  this.x14h = function () {
    x11u.x14h();
    x2bu();
  };
  function x1d0() {
    x2bp.style.background = x1cs.x1gt;
    xub.style.background = x1cs.x1gt;
    x2bq.style.color = x1cs.x1gw;
    x11u.x1d0();
    x1fn.x1d0();
  }
  this.x1d0 = x1d0;
  this.x1d6 = function (xjn) {
    var x1sy = xjn / 100;
    x11u.x1d6(x1sy);
    var x1hk = 1.4 * x1sy;
    if (x1hk > 1.73) x1hk = 1.73;
    x2bq.style.fontSize = x1hk + "em";
  };
  this.xd0 = function (x2ab) {
    var x2a6 = x11u.x292(x2ab);
    if (xah.x2bl[x2ab] && xaa.xdu[xah.x2bl[x2ab]]) {
      x2a6 = xaa.xdu[xah.x2bl[x2ab]];
      if (x2a6 === "0") x2a6 = 0;
    }
    return x2a6;
  };
  this.xwr = function (x2ab, x27g) {
    x11u.x29a(x2ab, x27g);
  };
  function x2gl(x2gm, xe4) {
    var x2gn = x9m;
    if (typeof xhv !== x9n) {
      var x1y = x2ae + "/" + x2gm;
      var x2go = xhv.isValidCommonPath(x2ae);
      if (!x2go) {
        xad.xae("Create common dir");
        x2go = xhv.createCommonDir(x2ae);
        if (!x2go) {
          xad.xb6("Error on create common dir");
        }
      }
      x2gn = xhv.openCommonFile(x1y, xe4);
    } else {
      xad.xb6("Invalid filesystem Object");
    }
    return x2gn;
  }
  function x2gp(x2gn) {
    var x2go = xhv.closeCommonFile(x2gn);
    if (!x2go) xad.xbd("Error on close common file");
  }
  function x2gq(xr4) {
    var x2gr = false;
    if (typeof xhv !== x9n) {
      var x2gs = x2ax[xr4] + ".txt";
      var x2gn = x2gl(x2gs, x2ak.x2am);
      if (x2gn !== x9m) {
        var x2gt = x11u.x2ce(xr4);
        for (var xd = 0; xd < x2gt.length; xd++) {
          if (x2gt[xd] !== x9m) {
            var x2cl = x11u.xu9(x2gt[xd]);
            if (x2cl !== x285.x288 && x2cl !== x285.x287 && x2cl !== x285.x289) {
              var x2gu = x11u.x29y(x2gt[xd]);
              x2aw[x2gu.x2a0] |= x2gu.x29z;
              var x1z = x2gt[xd] + "=" + x2gu.value;
              x2gn.writeLine(x1z);
            }
          }
        }
        x2gp(x2gn);
      }
    } else {
      if (typeof xt.localStorage !== x9n && !xaa.xdu.cookiestorage) {
        var x2gt = x11u.x2ce(xr4);
        for (var xd = 0; xd < x2gt.length; xd++) {
          var x2cl = x11u.xu9(x2gt[xd]);
          if (x2cl !== x285.x288 && x2cl !== x285.x287 && x2cl !== x285.x289) {
            var x2gu = x11u.x29y(x2gt[xd]);
            x2aw[x2gu.x2a0] |= x2gu.x29z;
            if (x2gt[xd] !== x9m) {
              try {
                var x2gv = xt.localStorage.getItem(x2gt[xd]);
                if (x2gv != x2gu.value) {
                  xt.localStorage.setItem(x2gt[xd], x2gu.value);
                  xad.xae(x2gt[xd] + " set new value------------ '" + x2gv + "'(" + typeof x2gv + ")->'" + x2gu.value + "'(" + typeof x2gu.value + ")");
                }
              } catch (x12) {
                try {
                  xt.localStorage[x2gt[xd]] = x2gu.value;
                  xad.xb6("[S]Error on set option item." + x12);
                } catch (x2gw) {
                  xad.xb6("[S]Error on save option item." + x12);
                  x2gr = true;
                }
              }
            }
          }
        }
      } else {
        x2gr = true;
      }
      if (!x2gr) return;
      if (xa3.cookieEnabled) {
        var x2gt = x11u.x2ce(xr4);
        var x10g = {};
        for (var xd = 0; xd < x2gt.length; xd++) {
          var x2cl = x11u.xu9(x2gt[xd]);
          if (x2cl !== x285.x288 && x2cl !== x285.x287 && x2cl !== x285.x289) {
            var x2gu = x11u.x29y(x2gt[xd]);
            x2aw[x2gu.x2a0] |= x2gu.x29z;
            if (x2gt[xd] !== x9m) {
              x10g[x2gt[xd]] = x2gu.value;
            }
          }
        }
        var xav = new xch.xaq((new xch.xaq).getTime() + 5256e3 * xch.xar);
        try {
          x9o.cookie = x2ax[xr4] + "=" + x9u.stringify(x10g) + "; expires=" + xav.toUTCString();
        } catch (x12) {
          xad.xb6("[C]Error on save option item." + x12);
        }
      } else {
        xad.xb6("Error on save data");
      }
    }
  }
  function x2gx() {
    xad.xae("Save options...");
    x2gy();
    xah.x2gz();
    xah.xd5();
    xah.x2h0();
    xah.x15e();
    xmn.x236.xge();
  }
  function x2gy() {
    x2gq(x2ar.x2as);
  }
  this.xd5 = function () {
    x2gq(x2ar.x2at);
  };
  this.xpf = function () {
    var xpb = xah.xd0(xd1.xpc), xpu = xah.xd0(xd1.x2ba), x14s = "", xpw = "";
    try {
      xpu = x9u.parse(xpu);
      if (!xpu[xpb]) {
        xpu[xpb] = [];
      }
      x14s = xpu[xpb][0] || "";
      xpw = xpu[xpb][1] || "";
    } catch (x12) {
      xad.xae("old style device id");
      x14s = "";
      xpw = "";
    }
    x14s = x14s || xah.xd0(xd1.x2b8);
    xpw = xpw || xah.xd0(xd1.x2b9);
    return {id: x14s, name: xpw};
  };
  this.x14m = function (xm2) {
    var xpb = xah.xd0(xd1.xpc), xpu = xah.xd0(xd1.x2ba);
    try {
      xpu = x9u.parse(xpu);
    } catch (x12) {
      xpu = {};
    }
    if (!xpu[xpb]) {
      xpu[xpb] = [];
    }
    xpu[xpb][0] = xm2.id;
    xpu[xpb][1] = xm2.name;
    xah.xwr(xd1.x2ba, x9u.stringify(xpu));
    x2gq(x2ar.x2ao);
  };
  this.x2gz = function () {
    x2gq(x2ar.x2ao);
  };
  this.x2h0 = function () {
    x2gq(x2ar.x2aq);
  };
  this.x15e = function () {
    x2gq(x2ar.x2au);
  };
  this.xd7 = function () {
    x2gq(x2ar.xwl);
  };
  this.xd6 = function () {
    if (typeof xhv !== x9n || typeof xt.localStorage !== x9n) {
      this.xwr(xd1.x2av, x9u.stringify(this.x1zc));
      x2gq(x2ar.x2av);
    }
  };
  function x2h1(name) {
    var x2h2 = x9o.cookie.match(new x9w("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return x2h2 ? x9x(x2h2[1]) : x9n;
  }
  function x2h3(x2h4, x2h5, x5) {
    var xhn;
    try {
      xhn = xt.localStorage.getItem(x2h5);
    } catch (x12) {
      try {
        xhn = xt.localStorage[x2h5];
        xad.xb6("Error on get option item.");
      } catch (x2gw) {
        xad.xb6("Error on read option item.");
      }
    }
    x5(x2h5, xhn);
  }
  function x2h6(xr4, x5) {
    var x2h7 = true;
    if (typeof xhv !== x9n) {
      var x2gs = x2ax[xr4] + ".txt", x2gn = x2gl(x2gs, x2ak.x2al);
      if (x2gn !== x9m) {
        var xuk = 256;
        for (var xd = 0; xd < xuk; xd++) {
          var x1z = x2gn.readLine();
          if (typeof x1z !== x9n && x1z !== x9m) {
            var x1u4 = x1z.indexOf("="), x2h8 = x1z.substring(0, x1u4), x2cl = x11u.xu9(x2h8);
            if (x2cl !== x285.x288 && x2cl !== x285.x287 && x2cl !== x285.x289) {
              var x2h9 = x1z.substring(x1u4 + 1);
              x11u.x2a3(x2h8, x2h9);
            }
          } else break;
        }
        x2gp(x2gn);
      } else {
        x2h7 = false;
        x2gq(xr4);
      }
      x5(x2h7);
    } else {
      var x2ha = false;
      if (xt.xu === xf.xq) {
        var x2hb;
        try {
          x2hb = typeof xt.localStorage.setItem + "|" + typeof xt.localStorage.getItem;
        } catch (x12) {
          x2ha = true;
        }
      }
      if (typeof xt.localStorage !== x9n && !xaa.xdu.cookiestorage && !x2ha) {
        var x2hc = 0, x2hd = 0, x2gt = x11u.x2ce(xr4), x2he = x2gt.length, x2hf = function (data) {
          if (--x2he === 0) {
            if (x2hc > 0) {
              xad.xae("not found " + x2hc + "/" + x2hd + " options");
              if (x2hc === x2hd) {
                x2h7 = false;
              }
              x2gq(xr4);
            }
            x5(x2h7);
          }
        };
        var x2hg = function (x2h5, x2hh) {
          var x2cl = x11u.xu9(x2h5);
          if (x2cl !== x285.x288 && x2cl !== x285.x287 && x2cl !== x285.x289) {
            x2hd++;
            if (typeof x2hh !== x9n && x2hh !== x9m) {
              x11u.x2a3(x2h5, x2hh);
            } else {
              xad.xae(x2h5 + " not found");
              x2hc++;
            }
          }
          x2hf(x2h5);
        };
        for (var xd = 0; xd < x2gt.length; xd++) {
          x2h3(x2ax[xr4], x2gt[xd], x2hg);
        }
      } else if (xa3.cookieEnabled) {
        var x2hi = x2h1(x2ax[xr4]);
        if (typeof x2hi === x9n) {
          x2gq(xr4);
        } else {
          var x10g = {};
          try {
            x10g = x9u.parse(x2hi);
          } catch (x12) {}
          var x2hc = 0, x2gt = x11u.x2ce(xr4);
          for (var xd = 0; xd < x2gt.length; xd++) {
            var xhn = x10g[x2gt[xd]];
            var x2cl = x11u.xu9(x2gt[xd]);
            if (x2cl !== x285.x288 && x2cl !== x285.x287 && x2cl !== x285.x289) {
              if (typeof xhn !== x9n && xhn !== x9m) {
                x11u.x2a3(x2gt[xd], xhn);
              } else {
                x2hc++;
              }
            }
          }
          if (x2hc > 0) {
            if (x2hc === x2gt.length) {
              x2h7 = false;
            }
            x2gq(xr4);
          }
        }
        x5(x2h7);
      } else {
        xad.xb6("Error on data read");
        x2h7 = false;
        x5(x2h7);
      }
    }
  }
  function x2hj(x5) {
    xad.xae("Read options...");
    var x2he = 0, x2hf = function () {
      if (++x2he === 5) {
        x5();
      }
    };
    x2h6(x2ar.x2as, function (x2h7) {
      if (!x2h7) {
        xad.xie("First run detected");
        x9p(function () {
          xd8.xm6(x2x.x32.x36());
        }, 1e4);
      }
      x2hf();
    });
    x2h6(x2ar.x2ao, x2hf);
    x2h6(x2ar.x2at, x2hf);
    x2h6(x2ar.x2aq, x2hf);
    x2h6(x2ar.x2au, x2hf);
  }
  this.xwj = function (x5) {
    x2h6(x2ar.xwl, function () {
      if (x5) {
        x5();
      }
    });
  };
  this.x2hk = function (x5) {
    x2h6(x2ar.x2av, function () {
      xah.x1zc = xah.xd0(xd1.x2av);
      try {
        xah.x1zc = x9u.parse(xah.x1zc);
      } catch (x12) {}
      if (typeof xah.x1zc !== "object") {
        xah.x1zc = {};
      }
      if (x5) {
        x5();
      }
    });
  };
  function x2bt() {
    xad.xae("reset all");
    x2hl(x2ar.x2as);
    x2hl(x2ar.x2ao);
    x2hl(x2ar.x2at);
    x2hl(x2ar.x2aq);
    x2hl(x2ar.x2au);
    x2hl(x2ar.x2av);
    xah.x1zc = {};
  }
  function x2hl(xr4) {
    var x2gt = x11u.x2ce(xr4);
    for (var xd = 0; xd < x2gt.length; xd++) {
      if (x2gt[xd] !== x9m) {
        x11u.x2cd(x2gt[xd]);
      }
    }
  }
  function x2hm() {
    if (!x2ai && x2x.x31.x197.x19h) {
      x2x.x31.x194("css3a", x2x.x31.x197.x19e + "px", x2x.x31.x197.x19f + 10 * xaa.xjq * 10 / x2x.x31.x197.x19b + "px");
      x2ai = true;
    }
  }
  this.x1di = function () {
    x1b3.appendChild(x19j);
    if (!x11u.x2c7()) {
      x11u.x1dw(true);
    }
    x2aj = false;
  };
  this.x1dj = function () {
    x19j = x1b3.removeChild(x19j);
  };
  function x1dx() {
    x1bl();
  }
  function x1bl() {
    x2aw[x2an.x2ao] = false;
    x2aw[x2an.x2ap] = false;
    x2aw[x2an.x2aq] = false;
    x2gx();
    if (x2aw[x2an.x2ap]) {
      x2ag();
    }
    if (x2aw[x2an.x2ao]) {
      x2af();
    }
    if (x2aw[x2an.x2aq]) {
      x2ah();
    }
  }
  x2bp.onwheel = function (x16o) {
    if (x16o.deltaY > 0) x11u.x2cb(); else x11u.x2cc();
  };
  x2bp.onmousewheel = function (x16o) {
    if (x16o.wheelDelta < 0) x11u.x2cb(); else x11u.x2cc();
  };
  function x1dy(x1dz) {
    switch (x1dz) {
      case xda.KEY_DOWN:
      case xda.xiq + xda.KEY_DOWN:
        x11u.x140();
        break;
      case xda.KEY_UP:
      case xda.xiq + xda.KEY_UP:
        x11u.x141();
        break;
      case xda.KEY_LEFT:
      case xda.xiq + xda.KEY_LEFT:
        x2c6();
        break;
      case xda.KEY_RIGHT:
      case xda.xiq + xda.KEY_RIGHT:
        x2c5();
        break;
      case xda.KEY_ENTER:
      case xda.xiq + xda.KEY_ENTER:
        x2ch();
        break;
      case xda.KEY_RETURN:
        x1dx();
        break;
      case xda.KEY_RED:
        x1bl();
        break;
      case xda.KEY_0:
        if (xt.xu === xf.xp) {
          x1bl();
        }
        break;
      default:
        return false;
    }
    return true;
  }
  function focus() {
    xad.xae("focusunput options");
    x11u.x1mk().x1by();
  }
  function x1e0() {
    x11u.x1mk().x1e0();
  }
  this.x1e1 = {x1dy: x1dy, x1dx: x1dx, focus: focus, x1e0: x1e0};
  x2cq();
  x11u.x1mk().x1by();
  x2bu();
  this.x14h();
  x2hj(function () {
    xah.x2hk();
    x5(xah);
  });
};
var x1e = {};
function x2hn() {
  if (xt.xu === xf.xg) {
    if (xdt) {
      var x3c = xa3.userAgent;
      if (x3c.length > 80) {
        var x2ho = x3c.substring(0, 80);
        xad.xie(" UA(" + x3c.length + "): " + x2ho);
        var x2hp = x3c.substring(80);
        xad.xie(" UA1: " + x2hp);
      } else xad.xie(" UA: " + x3c);
      xad.xie(xa3.platform + " [" + xt.xk7 + "]");
      xad.xie(" ls: " + typeof xaa.localStorage);
    }
  }
}
function x2hq() {
  if (xt.modelName !== "unknown") {
    xad.xie("Device: [" + xt.xk7 + "] " + xt.modelName);
    xad.xie("Firmware: " + xt.x11);
    if (xt.xu === xf.xj) {
      xad.xie("Serial: " + xt.xk6);
    } else {
      xad.xie("MAC: " + xt.xk5);
    }
    xad.xae("windowWidth:" + xaa.innerWidth);
  } else {
    xad.xae(xa3.userAgent);
    xad.xae(xa3.platform + " [" + xt.xk7 + "]");
    xad.xae();
  }
}
function x2hr() {
  x2x.x30.xlo = new x2x.x30.xmt;
  x2x.x30.xb4 = new x2x.x30.API(x2x.x30.xlo);
  x2x.x30.xuy = new x2x.x30.x17a(x2x.x30.xb4);
  x2x.x30.xun = new x2x.x30.xri;
  x2x.x30.xd3 = new x2x.x30.xz1(x2x.x30.xb4);
}
x1e.onLoad = function () {
  xaa.xad = new x2x.x2z.x2hs;
  xjr();
  if (xdu.remotelog) {
    xad.x2ht(xdu.remotelog);
  }
  xk4();
  if (xt.xu === xf.xh) {
    xaa.onShow = this.onShow;
    x9o.onShow = this.onShow;
    xdb.sendReadyEvent();
  }
  x2x.x31.x30 = new x2x.x31.x1sk;
  x2x.x31.x30.xmr();
  x2x.x31.x1sm = new x2x.x31.x1sz(x2x.x31.x30.x1tc(), xaa.xad);
  if (xt.xu === xf.xo && x0.indexOf("/new/") > 0) {
    xad.x2ht(x0 + "log.php");
    xad.x2hu(true);
  }
  if (xdt) {
    x2x.x31.x1sm.x241();
    x2x.x31.x1sm.x1xm(false);
  }
  x2hn();
  x9p(x2hv, 0);
};
function x2hv() {
  xad.xie("Widget " + xci.name + " " + xci.version + " start");
  x9p(x2hq, 5e3);
  new x2x.x2ad(x2x.x31.x30.x1tc(), function (x2hw) {
    xaa.xcz = x2hw;
    xaa.x2x.x2y.x37.x9d(xcz.xd0(xcz.xd1.x2ay));
    xcz.x14h();
    var x2hx = xcz.xd0(xcz.xd1.x2b6);
    x2x.x31.x1cs.x1wh(x2hx);
    var x1sy = xcz.xd0(xcz.xd1.x223);
    x2x.x31.x30.x1d6(x1sy);
    xcz.x1d6(x1sy);
    var x225 = xcz.xd0(xcz.xd1.x226);
    x2x.x31.x30.x1hw(x225);
    x2x.x31.x1cs.x1tr(xcz.xd0(xcz.xd1.x21t), xcz.xd0(xcz.xd1.x21u), xcz.xd0(xcz.xd1.x21v), xcz.xd0(xcz.xd1.x21w), xcz.xd0(xcz.xd1.x21x), xcz.xd0(xcz.xd1.x21y), xcz.xd0(xcz.xd1.x21z), xcz.xd0(xcz.xd1.x220));
    x2x.x31.x30.x1d0();
    xcz.x1d0();
    x2x.x2z.xch.xaz(xcz.xd0(xcz.xd1.x2b5));
    x9p(x2hy, 0);
  });
}
function x2hy() {
  xkn.xmr();
  x2hr();
  xcz.x2bn(function () {
    xad.xae("ChangeInterface " + xcz.xd0(xcz.xd1.x1y2));
    x2x.x2z.xch.xaz(xcz.xd0(xcz.xd1.x2b5));
    if (x2x.x2y.x37.x9d(xcz.xd0(xcz.xd1.x2ay))) {
      xcz.x14h();
    }
  });
  function x2af() {
    xad.xae("-- IdentificationChange --");
    x2x.x30.xd3.xmr();
  }
  xcz.x2bm(x2af);
  var x2hz = xcz.xd0(xcz.xd1.x2bb);
  var x2i0 = false;
  if (x2hz !== "" && x2hz !== x2x.x32.x36()) {
    xcz.xwr(xcz.xd1.x2bb, x2x.x32.x36());
    xcz.x2h0();
    x2i0 = true;
    x9p(function () {
      x2x.x31.xdd.xde(x2x.x2y.x37.x9f(x2x.x2y.x37.x3f.x68) + " (" + x2hz + "->" + x2x.x32.x36() + ")", 5e3);
    }, 5e3);
  }
  x2x.x30.xhx.xug(xcz.xd0(xcz.xd1.xat));
  xcz.x2bo(function () {
    x2x.x30.xhx.xug(xcz.xd0(xcz.xd1.xat));
  });
  xad.xae("ready");
  x2x.x2z.xch.xb2(xa8);
  var x1ts = xcz.xd0(xcz.xd1.x21t);
  x2x.x2i1 = new x2x.x1wl;
  x2x.x2i1.xmr();
  x9p(x2i2, 3e3);
  xjs();
  if (x1x && x1x.length > 0) {
    for (var xd = 0; xd < x1x.length; xd++) {
      xad.xb6("e:" + x1x[xd].error + "(" + x1x[xd].x1z + ")" + x1x[xd].x1y);
    }
  }
  x9p(function () {
    var x2i3 = xt.xk7 + "-" + xt.xv, x2i4 = "n:" + xcz.xd0(xcz.xd1.x1y2) + "|t:" + xcz.xd0(xcz.xd1.x21t) + "|d:" + (xcz.xd0(xcz.xd1.x220) ? 1 : 0) + "|w:" + xcz.xd0(xcz.xd1.x2b6) + "|l:" + xcz.xd0(xcz.xd1.x2ay) + "|s:" + xcz.xd0(xcz.xd1.x226) + "|f:" + xcz.xd0(xcz.xd1.x223);
    xd8.xlv({xm2: x2i3, xm3: x2i4, version: x2x.x32.x36()});
    xd8.xlm();
    if (x2i0) {
      xd8.xm7(x2hz, x2x.x32.x36());
    }
  }, 5e3);
  var x1ie = 0, x2i5 = [20, 80, 160, 390], x2i6 = x2i5[x1ie], x2i7 = 0;
  function x2i8() {
    x9p(function () {
      x2i7 += x2i6;
      xd8.xma(x2i7);
      if (x1ie < x2i5.length - 1) {
        x1ie++;
        x2i6 = x2i5[x1ie] - x2i7;
        x2i8();
      }
    }, x2i6 * x2x.x2z.xch.xar);
  }
  x2i8();
}
x1e.onUnload = function () {
  xad.xae("unload");
  if (xcz.xd0(xcz.xd1.xd2)) {
    x2x.x30.xd3.xd4();
    xcz.xd5();
  }
  xcz.xd6();
  x2x.x30.xb4.xo9();
  xkn.xko();
  if (xt.xu === xf.xl) {
    gSTB.DeinitPlayer();
  } else if (xt.xu === xf.xh) {
    xht.unregistAllKey();
  }
  var xy = xa4(xaa.location);
  xy = xy.toLowerCase();
  if (xy.indexOf("forkstore") > 0) {
    x9o.location.href = "http://smart.obovse.ru";
  }
};
var x2i9 = false;
function x2i2() {
  if (!x2i9) {
    x2i9 = true;
    xad.xae("---------------- on show timeout -----------------");
    if (xt.xu === xf.xh) {
      xaa.xht.setOffScreenSaver();
      xaa.xht.setOffIdleEvent();
    }
    xhw();
  }
}
x1e.onShow = function () {
  xad.xae("----- show -----");
  x9p(x2i2, 2e3);
};
x2x.x2z.x2hs = function () {
  var _xg = xaa._xg, xch = x2x.x2z.xch, xah = this, x2ia = "[Widget]", x2ib = false, x2ic = false, x2id = "", x2ie = "", x2if = "", x2ig = 50, x2ih = 0, x17f = {x23x: [], xen: 0}, xmn = {xz4: new x2x.xg3(this)};
  this.xmn = xmn;
  this.x23t = {x2ii: 0, xxd: 1, x23u: 2, x23v: 3};
  this.x2ht = function (x2ij) {
    x2ib = true;
    x2id = x2ij;
  };
  this.x2ik = function () {
    x2ib = false;
  };
  this.x23y = function (xvz) {
    var x23x = [], xen = x17f.xen - xvz;
    if (xen < 0) {
      xen += x2ig;
    }
    for (var xd = 0; xd < xvz; xd++) {
      if (x17f.x23x[xen]) {
        x23x.push(x17f.x23x[xen]);
      }
      if (++xen === x2ig) {
        xen = 0;
      }
    }
    return x23x;
  };
  function x2il(xaf) {
    if (x2ib) {
      var data = "log=" + xaf, xn7 = new xa9;
      xn7.onreadystatechange = function () {
        if (xn7.readyState === 4) {
          if (xn7.destroy) xn7.destroy();
        }
      };
      xn7.open("POST", x2id, true);
      xn7.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xn7.send(data);
    }
  }
  function x2im() {
    var x2in = arguments, x2io = x2in[0], xv4 = xch.xbg(true), x1h1 = "[" + xch.xbz(xv4) + "]";
    for (var xd = 1; xd < x2in.length; xd++) {
      if (typeof x2in[xd] !== x9n) {
        var x3f = x2in[xd];
        if (x2io !== xah.x23t.x2ii || !x2ic) {
          xhm(x2ia + " " + x2in[xd]);
          x17f.x23x[x17f.xen] = {xf6: x2ih++, x1h1: xv4, type: x2io, data: x3f};
          if (++x17f.xen === x2ig) {
            x17f.xen = 0;
          }
        }
        xmn.xz4.xge();
        x2il(x1h1 + ";" + x2ie + ";" + x2if + ";" + x2ih + ";" + x3f);
      }
    }
  }
  this.xie = function (x2ip, x2iq, x2ir) {
    x2im(xah.x23t.xxd, x2ip, x2iq, x2ir);
  };
  this.x209 = function (x2ip, x2iq, x2ir) {
    x2im(xah.x23t.x23u, x2ip, x2iq, x2ir);
  };
  this.xb6 = function (x2ip, x2iq, x2ir) {
    x2im(xah.x23t.x23v, x2ip, x2iq, x2ir);
  };
  function xae(x2ip, x2iq, x2ir) {
    x2im(xah.x23t.x2ii, x2ip, x2iq, x2ir);
  }
  function xbd(x2ip, x2iq, x2ir) {
    xah.xb6(x2ip, x2iq, x2ir);
  }
  this.x2hu = function (x2is) {
    x2ic = x2is;
    this.xae = xae;
    this.xbd = xbd;
  };
  this.x2it = function () {
    xah.xae = xa8;
    xah.xbd = xah.xae;
  };
  if (!xdr) {
    xah.x2it();
  } else {
    xah.x2hu(false);
  }
  this.x2iu = function (id) {
    x2ie = id;
  };
  function x2iv() {
    var d = xch.xaq.now(), xkx = "xxxxxx-xxxxxy";
    xkx = xkx.replace(new x9w("[xy]", "g"), function (xky) {
      var r = (d + x9v.random() * 16) % 16 | 0;
      d = x9v.floor(d / 16);
      return (xky === "x" ? r : r & 3 | 8).toString(16);
    });
    return xkx;
  }
  x2if = x2iv();
  xaa.onerror = function (error, x1y, x1z, xhn) {
    xah.xb6(error, x1y + "(" + x1z + ")");
  };
};
var x2iw = function (x2ix) {
  var _xg = xaa._xg, xah = this, x2iy = xt.x2iy, x2iz = 0, x2j0 = false, x2j1 = 0, x2j2 = 0, x2j3 = 0, x2j4 = 0, x2j5 = false, x2j6 = x2ix, x2j7 = x19o("video", "css6a");
  this.x2j8 = true;
  if (x2x.x31.x197.x19h) {
    x2j7.style.width = x2x.x31.x197.x198 + "px";
    x2j7.style.height = x2x.x31.x197.x199 + "px";
  }
  this.x2j9 = function () {
    if (!x2j0) {
      x2j6.insertBefore(x2j7, x2j6.firstChild);
      x2j0 = true;
      xad.xae("[html] enable player");
    }
  };
  this.x2ja = function () {
    if (x2j0) {
      x2j7 = x2j6.removeChild(x2j7);
      x2j0 = false;
      xad.xae("[html] disable player");
    }
  };
  function x2jb(xb6) {
    x9q(x2jc);
    if (!x2j5) {
      var x2jd = xb6.target.error;
      switch (x2jd.code) {
        case x2jd.MEDIA_ERR_ABORTED:
          xad.xie("You aborted the video playback");
          break;
        case x2jd.MEDIA_ERR_NETWORK:
          xad.xie("A network error caused the video download to fail part-way");
          break;
        case x2jd.MEDIA_ERR_DECODE:
          xad.xie("The video playback was aborted due to a corruption problem ");
          xad.xie("or because the video used features your browser did not support.");
          break;
        case x2jd.MEDIA_ERR_ENCRYPTED:
          xad.xie("Video encrypted");
          break;
        case x2jd.MEDIA_ERR_SRC_NOT_SUPPORTED:
          xad.xie("The video could not be loaded, either because the server or network failed");
          xad.xie("or because the format is not supported");
          break;
        default:
          xad.xb6("[html] player err:" + x2jd.code);
      }
      if (x2j0) {
        x2iy.x2je.xge();
      }
    }
  }
  x2j7.addEventListener("error", x2jb, false);
  function x2jf() {
    xad.xae("[html] onabort");
  }
  x2j7.addEventListener("abort", x2jf, false);
  function x2jg() {
    xad.xae("[html] ondurationchange " + x2j7.duration);
  }
  x2j7.addEventListener("ondurationchange", x2jg, false);
  function x2jh() {
    xad.xae("[html] onstalled");
  }
  x2j7.addEventListener("stalled", x2jh, false);
  var x2jc, x2ji = 350;
  function x2jj(x12) {
    if (x2j0) {
      xad.xae("[html] onwaiting");
      x9q(x2jc);
      var x2jk = x9p(function () {
        x2iy.x22v.xge();
      }, x2ji);
      x2jc = x2jk;
    }
  }
  x2j7.addEventListener("waiting", x2jj, false);
  function x2jl() {
    var x2jm = "[html] onplay";
    x9q(x2jc);
    try {
      var x2jn = x2j7.audioTracks;
      if (typeof x2jn !== x9n) {
        x2jm += " atr:" + x2jn.length;
      }
      var x2jo = x2j7.videoTracks;
      if (typeof x2jo !== x9n) {
        x2jm += " vtr:" + x2jo.length;
      }
    } catch (x12) {}
    xad.xae(x2jm);
  }
  x2j7.addEventListener("play", x2jl, false);
  function x2jp() {
    var d = x2j7.duration;
    if (d) {
      x2j1 = d;
      if (xt.xu === xf.xn) {
        x2j1 = x2j1 / 1e3;
      }
    }
  }
  function x2jq(x2jr) {
    if (x2j7.videoWidth !== 0 && x2j7.videoWidth !== x2j3) {
      x2j3 = x2j7.videoWidth;
      x2j4 = x2j7.videoHeight;
      if (x2j1 === 0) {
        x2jp();
      }
      if (x2j0) {
        xad.xae("[html] [" + x2jr + "] metadata: " + x2j3 + " " + x2j4 + " " + x2j1);
        x2iy.x2js.xge({xck: x2j3, x1dq: x2j4, duration: x2j1});
      }
    }
  }
  function x2jt(x12) {
    xad.xae("[html] canplay");
    x2jq("canplay");
  }
  x2j7.addEventListener("canplay", x2jt, false);
  function x2ju(x12) {
    xad.xae("[html] canplaythrough");
    x2jq("canplaythrough");
  }
  x2j7.addEventListener("oncanplaythrough", x2jt, false);
  function x2jv() {
    xad.xae("[html] onplaying");
    x9q(x2jc);
    if (xvh) {
      x2iy.xve.xge();
      xvh = false;
    }
    if (x2j0) {
      x2iy.x22q.xge();
    }
  }
  x2j7.addEventListener("playing", x2jv, false);
  function x2jw(x12) {
    if (x2j0) {
      x2j2 = x2j7.currentTime;
      x2jp();
      if (xt.xu === xf.xn) {
        x2iy.x2jx.xge({x1mj: x2j1, x1mk: x2j2});
        if (x2j1 !== 0 && x2j2 !== 0 && x2j2 >= x2j1) {
          xad.xae("-timeupdate[spark] " + x2j2 + " " + x2j1);
          x2iy.x22r.xge();
        }
      } else {
        x2iy.x2jx.xge({x1mj: x2j1, x1mk: x2j2});
      }
    }
  }
  x2j7.addEventListener("timeupdate", x2jw, false);
  function x2jy(x16o) {
    x2jq("progress");
    if (xt.xu === xf.xn) {
      x2j2 = x2j7.currentTime;
      x2jp();
      if (x2j0) {
        if (x2j1 !== 0 && x2j2 !== 0 && x2j2 >= x2j1) {
          xah.stop();
          x2iy.x22r.xge();
        }
      }
    }
  }
  x2j7.addEventListener("progress", x2jy, false);
  function x2jz() {
    xad.xae("[html] onloadedmetadata");
    x2jq("onmetadata");
  }
  x2j7.addEventListener("loadedmetadata", x2jz, false);
  function x2k0(x12) {
    xad.xae("[html] ended.[" + x2j2 + " " + x2j1 + "] ");
    if (xt.xu === xf.xn) {
      if (x2j2 > 99.5 && x2j2 < 100.5 && x2j2 !== x2j1) {
        return;
      }
    }
    if (x2j0) {
      x2iy.x22r.xge();
    }
    x2j5 = true;
  }
  x2j7.addEventListener("ended", x2k0, false);
  function x2k1() {
    xad.xae("[html] seeked");
    if (xvh) {
      xad.xae("[html] is paused");
      x2iy.x22x.xge();
    }
  }
  x2j7.addEventListener("seeked", x2k1, false);
  if (xdr) {
    var x2k2 = function (x16o) {
      xad.xae("---- " + x16o.type);
    };
    x2j7.addEventListener("seeking", x2k2, false);
    x2j7.addEventListener("loadstart", x2k2, false);
    x2j7.addEventListener("loadeddata", x2k2, false);
    x2j7.addEventListener("abort", x2k2, false);
    x2j7.addEventListener("ratechange", x2k2, false);
    x2j7.addEventListener("canplaythrough", x2k2, false);
    x2j7.addEventListener("emptied", x2k2, false);
    x2j7.addEventListener("pause", x2k2, false);
    x2j7.addEventListener("suspend", x2k2, false);
    x2j7.addEventListener("readystatechange", x2k2, false);
    x2j7.addEventListener("volumechange", x2k2, false);
  }
  this.play = function (xsv, xts) {
    if (x2j0) {
      x2j1 = 0;
      x2j2 = 0;
      x2j3 = 0;
      x2j4 = 0;
      x2j5 = false;
      x2iz = 0;
      x2j7.src = xsv;
      if (xt.xu === xf.xk) {
        x2j7.data = xsv;
      }
      if (xts) {
        x2j7.type = xts;
        x2j7.setAttribute("type", xts);
      }
      if (xt.xu === xf.xo) {
        x2j7.setAttribute("preload", "auto");
      }
      try {
        x2j7.load();
        x2j7.play();
      } catch (xb6) {
        xad.xb6("[html] play exception " + xb6.name + ":" + xb6.message);
      }
    }
  };
  this.stop = function () {
    if (x2j0) {
      xad.xae("[html] stop");
      try {
        x2j7.pause();
      } catch (xb6) {
        xad.xb6("[html] stop exception " + xb6.name + ":" + xb6.message);
      }
      x2j5 = true;
      x2j7.src = "";
      if (xt.xu === xf.xk) {
        x2j7.data = "";
      }
      xvh = false;
    }
  };
  var xvh = false;
  this.pause = function () {
    try {
      x2j7.pause();
    } catch (xb6) {
      xad.xb6("[html] error on pause " + xb6.name + ":" + xb6.message);
    }
    xvh = true;
  };
  this.xve = function () {
    try {
      x2j7.play();
    } catch (xb6) {
      xad.xb6("[html] error on resume " + xb6.name + ":" + xb6.message);
    }
    xvh = false;
  };
  this.xvh = function () {
    return xvh;
  };
  this.x2k3 = function (xxl) {
    try {
      x2j7.pause();
      x2j7.currentTime += xxl;
      if (!xvh) {
        x2j7.play();
      }
    } catch (x12) {}
  };
  this.x2k4 = function (xxl) {
    try {
      x2j7.pause();
      x2j7.currentTime -= xxl;
      if (!xvh) {
        x2j7.play();
      }
    } catch (x12) {}
  };
  this.xvu = function (x2k5) {
    try {
      x2j7.pause();
      x2j7.currentTime = x2j1 * x2k5;
      if (!xvh) {
        x2j7.play();
      }
    } catch (x12) {}
  };
  this.x21e = function () {
    return -1;
  };
  this.x21a = function () {
    return -1;
  };
  this.x21b = function () {
    return -1;
  };
  this.x217 = function () {
    return false;
  };
  this.x218 = function () {
    return x21d;
  };
  switch (xt.xu) {
    case xf.xo:
    case xf.xg:
      xah.x2k6 = [x1ze.x1zf, x1ze.x1zh, x1ze.x1zi, x1ze.x1zg, x1ze.x1zm, x1ze.x1zn, x1ze.x1zk];
      break;
    case xf.xn:
    case xf.xq:
      xah.x2k6 = [x1ze.x1zf, x1ze.x1zh, x1ze.x1zi, x1ze.x1zg, x1ze.x1zk];
      break;
    case xf.xm:
      this.x2k6 = [x1ze.x1zf, x1ze.x1zn, x1ze.x1zi, x1ze.x1zh];
      break;
    default:
      this.x2k6 = [x1ze.x1zf];
  }
  function x2k7(x2k8, x2k9) {
    var x2ka = "scale(" + x2k8 / 100 + xa4.fromCharCode(44) + x2k9 / 100 + ")";
    try {
      x2j7.width = "100%";
      x2j7.height = "100%";
      x2j7.style.transform = x2ka;
      x2j7.style.WebkitTransform = x2ka;
      x2j7.style.MozTransform = x2ka;
      x2j7.style.OTransform = x2ka;
    } catch (xb6) {}
  }
  function x2kb(x2k8, x2k9, x2kc, x2kd, x2ke) {
    try {
      x2j7.style.position = "absolute";
      x2j7.style.width = x2k8 + x2ke;
      x2j7.style.height = x2k9 + x2ke;
      x2j7.style.top = x2kc + x2ke;
      x2j7.style.left = x2kd + x2ke;
    } catch (xb6) {}
  }
  this.x1xq = function (x2kf) {
    var x2k8 = 100, x2k9 = 100, x2kd = 0, x2kc = 0;
    switch (x2kf) {
      case x1ze.x1zf:
        if (xt.xu === xf.xm) {
          if (x2j3 >= 704 && x2j3 <= 720 && x2j4 === 576) {
            x2k8 = 150;
            x2kd = -25;
          }
        }
        break;
      case x1ze.x1zh:
        x2kc = -7.15;
        x2k9 = 114.3;
        if (xt.xu === xf.xm) {
          x2kc = -25;
          x2kd = 0;
          x2k9 = 150;
          x2k8 = 150;
        }
        break;
      case x1ze.x1zi:
        x2kc = -7.15;
        x2kd = -7.15;
        x2k9 = 114.3;
        x2k8 = 114.3;
        if (xt.xu === xf.xm) {
          x2kc = -16.665;
          x2kd = 0;
          x2k9 = 133.333;
          x2k8 = 150;
        }
        break;
      case x1ze.x1zg:
        x2kc = -16.665;
        x2k9 = 133.333;
        x2kd = -16.665;
        x2k8 = 133.333;
        break;
      case x1ze.x2kg:
        x2kc = -25;
        x2k9 = 150;
        x2kd = -25;
        x2k8 = 150;
        break;
      case x1ze.x1zk:
        x2k8 = 75;
        x2kd = 12.5;
        break;
      case x1ze.x1zm:
        x2k8 = 133.333;
        x2kd = -16.666;
        break;
      case x1ze.x1zn:
        x2k8 = 150;
        x2kd = -25;
        break;
    }
    var x2ke = "%";
    if (xt.xu === xf.xk || xt.xu === xf.xn) {
      x2k8 = x2k8 * 1280 / 100;
      x2k9 = x2k9 * 720 / 100;
      x2kd = x2kd * 1280 / 100;
      x2kc = x2kc * 720 / 100;
      x2ke = "px";
    }
    switch (xt.xu) {
      case xf.xo:
      case xf.xg:
      case xf.xq:
        switch (xcz.xd0(xcz.xd1.x2bg)) {
          case xcz.x2dt.x2dw:
            x2k7(x2k8, x2k9);
            break;
          case xcz.x2dt.x2dv:
            x2kb(x2k8, x2k9, x2kc, x2kd, x2ke);
            break;
          default:
            x2k7(x2k8, x2k9);
        }
        break;
      case xf.xm:
        x2k7(x2k8, x2k9);
        break;
      default:
        x2kb(x2k8, x2k9, x2kc, x2kd, x2ke);
    }
    xad.xae("==== set aspect: a=" + x2kf + " w=" + x2k8 + "; h=" + x2k9 + "; t=" + x2kc + "; l=" + x2kd);
    return true;
  };
  this.x21g = function () {
    var xz = {x205: 0, x206: 0};
    var x2jn = x2j7.audioTracks;
    if (typeof x2jn !== x9n) {
      xad.xae(" atr:" + x2jn.length);
      if (x2jn.length > 0) {
        xz.x205 = x2jn.length;
        x2iz++;
        if (x2iz >= x2jn.length) {
          x2iz = 0;
        }
        xz.x206 = x2iz;
        for (var xd = 0; xd < x2jn.length; xd++) {
          if (xd === x2iz) {
            x2j7.audioTracks[xd].enabled = true;
          } else {
            x2j7.audioTracks[xd].enabled = false;
          }
        }
      } else {
        xz = {x205: 1, x206: 0};
      }
    } else {
      xad.xae("not supported");
    }
    return xz;
  };
};
var x2kh = function (x2j6) {
  var xah = this, x2j0 = false;
  var x2ki = x9o.createElement("iframe");
  x2ki.id = "iframe-video";
  x2ki.style.width = "96em";
  x2ki.style.height = "54em";
  x2ki.style.border = "0em";
  this.x2j9 = function () {
    if (!x2j0) {
      x2j6.insertBefore(x2ki, x2j6.firstChild);
      x2ki.style.display = "block";
      x2j0 = true;
      xad.xae("[iframe] enable player");
    }
  };
  this.x2ja = function () {
    if (x2j0) {
      x2ki.style.display = "none";
      var xql = x2j6.removeChild(x2ki);
      x2j0 = false;
      xad.xae("[iframe] disable player");
    }
  };
  this.play = function (xsv, xts) {
    if (x2j0) {
      x2ki.src = xsv;
    }
  };
  this.stop = function () {
    if (x2j0) {
      x2ki.src = "";
      xvh = false;
    }
  };
  var xvh = false;
  this.xvh = function () {
    return xvh;
  };
};
var x2kj = function (x2j6) {
  var _xg = xaa._xg, x2iy = xt.x2iy, x2j1 = 0, x2j2 = 0, x2j3 = 0, x2j4 = 0, x2kk = x9m, x2j0 = false;
  function x2kl(x2km) {
    if (x9o[x2km]) {
      return x9o[x2km];
    }
    if (xa3.x2kn.indexOf("Microsoft Internet") === -1) {
      if (x9o.embeds && x9o.embeds[x2km]) return x9o.embeds[x2km];
    } else {
      return x9o.getElementById(x2km);
    }
  }
  var x2ko = x19o("object", "css6b"), x2kp = x2ko.appendChild(x19o("param", x18b)), x2kq = x2ko.appendChild(x19o("param", x18b)), x2kr = x2ko.appendChild(x19o("embed", "css6d"));
  x2kp.name = "movie";
  x2kp.value = "swf/flashlsChromeless.swf?inline=1";
  x2kq.name = "wmode";
  x2kq.value = "opaque";
  x2kr.src = x2kp.value;
  x2kr.name = x2ko.id;
  x2kr.type = "application/x-shockwave-flash";
  x2kr.setAttribute("wmode", "opaque");
  x2ko.appendChild(x2kr);
  var flashlsEvents = xaa.flashlsEvents = {};
  function x2ks(x2kt) {
    flashlsEvents.onHLSReady = x2kt;
    x2ko.style.display = "block";
  }
  this.x2j9 = function () {
    if (!x2j0) {
      x2j6.insertBefore(x2ko, x2j6.firstChild);
      x2kk = x2kl("css6b");
      x2ks(xa8);
      x2j0 = true;
    }
  };
  this.x2ja = function () {
    if (x2j0) {
      x2ko.style.display = "none";
      var xql = x2j6.removeChild(x2ko);
      x2j0 = false;
    }
  };
  flashlsEvents.onHLSReady = function (x2ku) {};
  flashlsEvents.onVideoSize = function (x2ku, x2kv, x2kw) {
    xad.xae("======== onVideoSize " + x2kv + "x" + x2kw + " =============");
  };
  flashlsEvents.onState = function (x2ku, x2kx) {
    if (x2kx === "PLAYING") {
      x2iy.x22q.xge();
    } else if (x2kx === "PLAYING_BUFFERING") {
      x2iy.x22v.xge();
    }
    xad.xae("switching state to " + x2kx + ", bufferlen:" + x2kk.getbufferLength());
  };
  flashlsEvents.onSwitch = function (x2ku, x2ky) {
    xad.xae("switching level to " + x2ky);
  };
  flashlsEvents.onManifest = function (x2ku, xmb) {
    xad.xae("manifest loaded, playlist duration:" + xmb.toFixed(2));
    x2kk.playerPlay(-1);
  };
  flashlsEvents.onError = function (x2ku, xik, xn6, message) {
    xad.xae("========== error code:" + xik + " url:" + xn6 + " message:" + message);
    if (xdr) x2x.x31.xdd.xde(message, 5e3);
    switch (xik) {
      case 1:
      case 2:
        x2iy.x2je.xge();
        break;
    }
  };
  flashlsEvents.onFragmentLoaded = function (x2ku, x2kz) {
    xad.xae("onFragmentLoaded(): bandwidth:" + (x2kz.bandwidth / 1e3).toFixed(0) + "kb/s level:" + x2kz.level + " d:" + (x2kz.frag_duration / 1e3).toFixed(2) + " processing time:" + (x2kz.frag_processing_time / 1e3).toFixed(2));
  };
  flashlsEvents.onFragmentPlaying = function (x2ku, x2l0) {
    xad.xae("onFragmentPlaying(): metrics:" + x2l0.level + " sn:" + x2l0.seqnum + " cc:" + x2l0.continuity_counter + " video_width:" + x2l0.video_width + " video_height:" + x2l0.video_height + " tags:" + x2l0.tag_list);
    if (x2j3 !== x2l0.video_width || x2j4 !== x2l0.video_height) {
      x2j3 = x2l0.video_width;
      x2j4 = x2l0.video_height;
      x2iy.x2js.xge({xck: x2j3, x1dq: x2j4, duration: 0});
    }
  };
  flashlsEvents.onPosition = function (x2ku, x2l1) {
    x2j1 = x2l1.duration;
    x2j2 = x2l1.position;
    x2iy.x2jx.xge({x1mj: x2j1, x1mk: x2j2});
  };
  this.play = function (x2l2) {
    x2j3 = 0;
    x2j4 = 0;
    if (x2kk.playerLoad) {
      x2ks(xa8);
      x2kk.playerLoad(x2l2);
    } else {
      x2ks(function () {
        xad.xae("============== onHLSReady ================");
        x2kk.playerLoad(x2l2);
      });
    }
  };
  this.stop = function () {
    if (x2j0) {
      if (x2kk.playerStop) {
        x2kk.playerStop();
        xvh = false;
      }
    }
  };
  var xvh = false;
  this.pause = function () {
    xad.xae("[flashls] pause");
    if (x2j0) {
      if (x2kk.playerPause) {
        x2kk.playerPause();
        xvh = true;
      }
    }
  };
  this.xve = function () {
    xad.xae("[flashls] resume");
    if (x2j0) {
      if (x2kk.playerResume) {
        x2kk.playerResume();
        xvh = false;
      }
    }
  };
  this.xvh = function () {
    return xvh;
  };
  this.x2k3 = function (xxl) {
    if (x2j0) {
      if (x2kk.playerSeek) {
        var xkb = x2j2 + xxl;
        if (xkb > x2j1) xkb = x2j1;
        x2kk.playerSeek(xkb);
      }
    }
  };
  this.x2k4 = function (xxl) {
    if (x2j0) {
      if (x2kk.playerSeek) {
        var xkb = x2j2 - xxl;
        if (xkb < 0) xkb = 0;
        x2kk.playerSeek(xkb);
      }
    }
  };
  this.xvu = function (x2k5) {
    if (x2j0) {
      if (x2kk.playerSeek) {
        x2kk.playerSeek(x2k5 * x2j1);
      }
    }
  };
  this.x21e = function () {
    return 50;
  };
  this.x21a = function () {
    return 50;
  };
  this.x21b = function () {
    return 50;
  };
  this.x217 = function () {
    return false;
  };
  this.x218 = function () {
    return x21d;
  };
  this.x2k6 = [x1ze.x1zf, x1ze.x1zr, x1ze.x1zi];
  this.x1xq = function (x2kf) {
    var x2k8 = 100, x2k9 = 100;
    switch (x2kf) {
      case x1ze.x1zf:
        break;
      case x1ze.x1zr:
        x2k8 = 133.3;
        x2k9 = 133.3;
        break;
      case x1ze.x1zi:
        x2k9 = 133.3;
        break;
    }
    var x2ka = "scale(" + x2k8 / 100 + xa4.fromCharCode(44) + x2k9 / 100 + ")";
    x2ko.style.transform = x2ka;
    x2ko.style.WebkitTransform = x2ka;
    x2ko.style.MozTransform = x2ka;
    x2ko.style.OTransform = x2ka;
    return true;
  };
  this.x21g = function () {
    var xz = {x205: 0, x206: 0};
    return xz;
  };
};
var x2l3 = function (x2ix) {
  var _xg = xaa._xg, x2j0 = false, xah = this, x2iy = xt.x2iy, x2j6 = x2ix, x2l4 = x19o("video", "css6c"), x2l5, x2l6 = false, x2l7 = false, x2j3 = 0, x2j4 = 0, x2j1 = 0, x2j2 = 0;
  function x2l8(x5) {
    if (x2l6) {
      x5();
      return;
    }
    var x6 = x9o.createElement("script");
    x6.type = "text/javascript";
    x6.onload = function () {
      x2l6 = true;
      if (!x2l7) x5();
    };
    x6.async = false;
    x6.src = x0 + "js/lib/hls.min.js";
    x9o.getElementsByTagName("head")[0].appendChild(x6);
  }
  this.x2j9 = function () {
    if (!x2j0) {
      x2j6.insertBefore(x2l4, x2j6.firstChild);
      x2j0 = true;
    }
  };
  this.x2ja = function () {
    if (x2j0) {
      var xql = x2j6.removeChild(x2l4);
      x2j0 = false;
    }
  };
  function x2jv() {
    xad.xae("[HLSJS] playing");
    if (x2j0) {
      x2j3 = x2l4.videoWidth;
      x2j4 = x2l4.videoHeight;
      x2iy.x2js.xge({xck: x2j3, x1dq: x2j4, duration: x2j1});
      x2iy.x22q.xge();
      x9q(x2jc);
    }
  }
  x2l4.addEventListener("playing", x2jv, false);
  function x2jy() {
    x2j2 = x2l4.currentTime;
    x2iy.x2jx.xge({x1mj: x2j1, x1mk: x2j2});
  }
  x2l4.addEventListener("progress", x2jy, false);
  x2l4.addEventListener("timeupdate", x2jy, false);
  var x2jc, x2ji = 350;
  function x2jj(x12) {
    if (x2j0) {
      xad.xae("[hlsjs player] onwaiting");
      x9q(x2jc);
      var x2jk = x9p(function () {
        x2iy.x22v.xge();
      }, x2ji);
      x2jc = x2jk;
    }
  }
  x2l4.addEventListener("waiting", x2jj, false);
  var x2l9;
  function x2la(x2lb) {
    x2lb.on(xaa.Hls.Events.ERROR, function (x16o, x13x) {
      xad.xbd("[HLSJS] Error:" + x13x.details);
      switch (x13x.details) {
        case xaa.Hls.ErrorDetails.LEVEL_LOAD_ERROR:
        case xaa.Hls.ErrorDetails.MANIFEST_LOAD_ERROR:
          if (x2j0) {
            x2iy.x2je.xge();
          }
          break;
      }
    });
    x2lb.on(xaa.Hls.Events.LEVEL_LOADED, function (x16o, x13x) {
      x2j1 = x13x.details.totalduration;
    });
  }
  this.play = function (xsv, xts) {
    if (x2j0) {
      x2l7 = false;
      x2j2 = 0;
      x2j1 = 0;
      x2l8(function () {
        var url = xsv;
        var x2lc = {};
        x2lc.debug = false;
        x2lc.enableWorker = false;
        x2l5 = new xaa.Hls(x2lc);
        x2la(x2l5);
        x2l5.loadSource(url);
        x2l5.autoLevelCapping = -1;
        x2l5.attachMedia(x2l4);
        x2l5.startLoad();
        x2l4.play();
      });
    }
  };
  this.stop = function () {
    if (x2j0 && x2l6) {
      x2l5.stopLoad();
      x2l5.destroy();
      x2l4.pause();
      x2l4.src = "";
      xvh = false;
    } else {
      x2l7 = true;
    }
  };
  var xvh = false;
  this.pause = function () {
    x2l4.pause();
    xvh = true;
  };
  this.xve = function () {
    x2l4.play();
    xvh = false;
  };
  this.xvh = function () {
    return xvh;
  };
  this.x2k3 = function (xxl) {
    x2l4.pause();
    x2l4.currentTime += xxl;
    x2l4.play();
  };
  this.x2k4 = function (xxl) {
    x2l4.pause();
    x2l4.currentTime -= xxl;
    x2l4.play();
  };
  this.xvu = function (x2k5) {
    x2l4.pause();
    x2l4.currentTime = x2j1 * x2k5;
    x2l4.play();
  };
  this.x21e = function () {
    return -1;
  };
  this.x21a = function () {
    return -1;
  };
  this.x21b = function () {
    return -1;
  };
  this.x217 = function () {
    return false;
  };
  this.x218 = function () {
    return x21d;
  };
  this.x2k6 = [x1ze.x1zf, x1ze.x1zh, x1ze.x1zg];
  this.x1xq = function (x2kf) {
    var x2k8 = 100, x2k9 = 100, x2kd = 0, x2kc = 0;
    switch (x2kf) {
      case x1ze.x1zf:
        break;
      case x1ze.x1zh:
        x2kc = -7.15;
        x2k9 = 114.3;
        break;
      case x1ze.x1zg:
        x2kc = -16.665;
        x2k9 = 133.333;
        x2kd = -16.665;
        x2k8 = 133.333;
        break;
    }
    var x2ka = "scale(" + x2k8 / 100 + xa4.fromCharCode(44) + x2k9 / 100 + ")";
    x2l4.style.transform = x2ka;
    x2l4.style.WebkitTransform = x2ka;
    x2l4.width = "100%";
    x2l4.height = "100%";
    return true;
  };
  this.x21g = function () {
    var xz = {x205: 0, x206: 0};
    return xz;
  };
};
var x2ld = function (x2j6, x2le) {
  var _xg = xaa._xg, xah = this, xhx = x2x.x30.xhx, x2iy = xt.x2iy, xh6 = x9m, xhu = x9m, x2lf = x9m, x2e2 = false, x2lg = "1.000", x2lh = x2le, x2li = {type: xhx.xrx.xg, xry: xhx.xrz.xg}, x2j1 = 0, x2j2 = 0, x2j3 = 0, x2j4 = 0, x2iz = 0;
  function x2lj(x2lk, x2ll) {
    if (x2lk) {
      x2lk.OnBufferingStart = x2ll + ".x1yz";
      x2lk.OnBufferingProgress = x2ll + ".x1z0";
      x2lk.OnBufferingComplete = x2ll + ".x1z1";
      x2lk.OnStreamInfoReady = x2ll + ".x2lm";
      x2lk.OnConnectionFailed = x2ll + ".x2ln";
      x2lk.OnNetworkDisconnected = x2ll + ".x2lo";
      x2lk.OnRenderError = x2ll + ".x2lp";
      x2lk.OnRenderStart = x2ll + ".x2lq";
      x2lk.OnRenderComplete = x2ll + ".x2lr";
      x2lk.OnStreamNotFound = x2ll + ".x2ls";
      x2lk.OnServerError = x2ll + ".x2lt";
      x2lk.OnAuthenticationFailed = x2ll + ".x2lu";
      x2lk.OnCurrentPlayTime = x2ll + ".x2lv";
      x2lk.OnEvent = x2ll + ".x2lw";
    }
  }
  function x2lx() {
    var xfc = 0;
    if (x2e2) {
      xhu.Execute("SetDisplayArea", 0 + xfc, 0 + xfc, 960 - xfc * 2, 540 - xfc * 2);
    } else {
      xh6.SetDisplayArea(0 + xfc, 0 + xfc, 960 - xfc * 2, 540 - xfc * 2);
    }
  }
  var x2ly = x9m;
  function x2lz() {
    var x2m0 = xcz.x2e0.x2e1;
    if (xt.xv >= xhr) {
      x2m0 = xcz.xd0(xcz.xd1.x2be);
    }
    if (x2m0 !== x2ly) {
      xad.xae("----- Player.init -----");
      var x2m1 = true;
      if (xt.xv >= xhr) {
        x2m1 = false;
        x2m1 = x2m0 === xcz.x2e0.x2e1;
      }
      xhu = x9m;
      x2e2 = false;
      xh6 = x9m;
      if (!x2m1) {
        xhu = x9o.getElementById("pluginSef");
      }
      if (xhu !== x9m && xhu.Execute) {
        x2e2 = true;
        x2lg = xhu.Execute("GetPlayerVersion");
        xad.xae("Sef plugin ok. version:" + x2lg);
      } else {
        xad.xae("Standard plugin ok.");
        xh6 = x9o.getElementById("pluginPlayer");
      }
      var x2m2 = x9o.getElementById("pluginObjectTVMW");
      if ((xh6 !== x9m || x2e2) && x2m2 !== x9m) {
        try {
          x2m2.SetMediaSource();
        } catch (x12) {}
        x2lj(xh6, x2lh);
      } else {
        xad.xb6("error on init player");
      }
      x2lx();
      x2ly = x2m0;
    }
  }
  x2lz();
  var x2m3 = new x2m4;
  if (xt.xv <= xhq) {
    x2lf = new x2m5(x2j6);
  }
  function x2m6() {
    var x2m7 = xcz.xd0(xcz.xd1.x2b1);
    var x2m8 = x2m7 * (xcz.xd0(xcz.xd1.x2b2) / 100);
    var x2m9 = x9v.ceil(x2m8 / 16384) * 16384;
    var x2ma = x2m7 - x2m9;
    xad.xae("set buffers: " + x2m7 / 1024 + "Kb/" + x2m9 / 1024 + "Kb/" + x2ma / 1024 + "Kb");
    if (x2e2) {
      xhu.Execute("SetTotalBufferSize", x2m7);
      xhu.Execute("SetInitialBuffer", x2m9);
      xhu.Execute("SetInitialTimeOut", 20);
      xhu.Execute("SetPendingBuffer", x2ma);
    } else {
      xh6.SetTotalBufferSize(x2m7);
      xh6.SetInitialBuffer(x2m9);
      xh6.SetInitialTimeOut(20);
      xh6.SetPendingBuffer(x2ma);
    }
  }
  var x2mb = {x2mc: 1, x2md: 2, x2me: 3, x2mf: 4, x2mg: 5, x2mh: 6, x2mi: 7, x2mj: 8, x2mk: 9, x2ml: 10, x2mm: 11, x2mn: 12, x2mo: 13, x2mp: 14, x2mq: 15, x2mr: 16, x2ms: 17, x2mt: 18, x2mu: 19, x2mv: 20};
  this.x2mw = function (x2mx, x2my, x2mz) {
    switch (x2mx) {
      case x2mb.x2mp:
        xah.x2lv(x2my);
        break;
      case x2mb.x2mo:
        xah.x1z0(x2my);
        break;
      case x2mb.x2mm:
        xah.x1yz();
        break;
      case x2mb.x2mn:
        xah.x1z1();
        break;
      case x2mb.x2mc:
        xah.x2ln();
        break;
      case x2mb.x2mh:
        xah.x2lp(x2my);
        break;
      case x2mb.x2mk:
        xah.x2lm();
        break;
      case x2mb.x2mf:
        xah.x2lo();
        break;
      case x2mb.x2mi:
        xah.x2lq();
        break;
      case x2mb.x2mj:
        xah.x2lr();
        break;
      default:
        xad.xae("!!!!!!!! ============== Sef event:" + x2mx);
    }
  };
  this.x1z0 = function (xvt) {
    x2iy.bufferingProgress.xge(xvt);
  };
  this.x2lm = function () {
    x2iy.x22q.xge();
    x2n0();
  };
  this.x2ln = function () {
    x2iy.x2je.xge();
  };
  this.x2lo = function () {
    x2iy.x2n1.xge();
  };
  this.x2n2 = {x2n3: 0, x2n4: 1, x2n5: 2, x2n6: 3, x2n7: 4, x2n8: 5, x2n9: 6};
  this.x2lp = function (xt3) {
    xad.xae("Render error: " + xt3);
    x2iy.x2na.xge(xt3);
  };
  this.x2lq = function () {
    xad.xae("Render start");
    x2iy.x22w.xge();
    x2n0();
  };
  this.x2lr = function () {
    xad.xae("Render complete");
    x2iy.x22r.xge();
  };
  this.x1yz = function () {
    x2iy.x22v.xge();
  };
  this.x1z1 = function () {
    x2iy.x22w.xge();
  };
  this.x2ls = function () {
    xad.xae("Stream not found");
  };
  this.x2lt = function () {
    xad.xae("onServerError");
  };
  this.x2lu = function () {
    xad.xae("AuthenticationFailed");
  };
  this.x2lv = function (x1h1) {
    x2j2 = x1h1 / 1e3;
    x2iy.x2jx.xge({x1mj: x2j1, x1mk: x2j2});
    if (!x2e2) {
      if (x2j1 > 0 && x2j1 === x2j2) {
        x2iy.x22r.xge();
      }
    }
  };
  this.play = function (x2l2, x2nb) {
    x2lz();
    x2j1 = 0;
    x2j2 = 0;
    x2j3 = 0;
    x2j4 = 0;
    x2iz = 0;
    x2li = x2nb;
    xht.setOffScreenSaver();
    if (x2nb.xry === xhx.xrz.xs9) {
      if (x2l2.indexOf("|COMPONENT=HLS", 0) === -1) {
        x2l2 += "|COMPONENT=HLS";
        xad.xae("play hls stream: '" + x2l2 + "'");
      }
    }
    if (x2nb.type === xhx.xrx.xsa && x2nb.xry === xhx.xrz.xsl) {
      if (xt.xv <= xhq) {
        x2lf.play(x2l2);
        return;
      }
    }
    if (x2e2) {
      xhu.Open("Player", x2lg, "Player");
      xhu.Execute("InitPlayer", x2l2);
      xhu.OnEvent = x2lh + ".x2mw";
      if (xcz.xd0(xcz.xd1.x2b0)) {
        x2m6();
      }
      if (!xdr || xcz.xd0(xcz.xd1.x2b7)) {
        xhu.Execute("StartPlayback", 0);
        xad.xae("samsung sef start: '" + x2l2 + "'");
      }
    } else {
      if (xcz.xd0(xcz.xd1.x2b0)) {
        x2m6();
      }
      if (!xdr || xcz.xd0(xcz.xd1.x2b7)) {
        xh6.Play(x2l2);
        xad.xae("samsung start: '" + x2l2 + "'");
      }
    }
  };
  this.stop = function () {
    if (xt.xv <= xhq) {
      if (x2li.type === xhx.xrx.xsa && x2li.xry === xhx.xrz.xsl) {
        x2lf.stop();
        return;
      }
    }
    if (x2e2) {
      xhu.Execute("Stop");
      xhu.Execute("ClearScreen");
      xhu.Close();
    } else {
      xh6.Stop();
      xh6.ClearScreen();
    }
    xvh = false;
    xad.xae("samsung stop");
  };
  var xvh = false;
  this.pause = function () {
    if (x2e2) {
      xhu.Execute("Pause");
    } else {
      xh6.Pause();
    }
    xvh = true;
  };
  this.xve = function () {
    if (x2e2) {
      xhu.Execute("Resume");
    } else {
      xh6.Resume();
    }
    xvh = false;
  };
  this.xvh = function () {
    return xvh;
  };
  this.x2k3 = function (xxl) {
    if (x2e2) {
      xhu.Execute("JumpForward", xxl);
    } else {
      xh6.JumpForward(xxl);
    }
  };
  this.x2k4 = function (xxl) {
    if (x2e2) {
      xhu.Execute("JumpBackward", xxl);
    } else {
      xh6.JumpBackward(xxl);
    }
  };
  this.xvu = function (xvt) {
    if (x2j1 > 0) {
      var x2nc = x2j2 / x2j1, xf9 = xvt - x2nc, x2nd = xf9 * x2j1;
      if (x2nd > 0) {
        xah.x2k3(x2nd);
      } else {
        xah.x2k4(-1 * x2nd);
      }
    }
  };
  this.x21e = function () {
    if (xt.xv < xaa.xhs) {
      return x2m3.x2ne();
    } else {
      return -1;
    }
  };
  this.x21a = function () {
    if (xt.xv < xaa.xhs) {
      x2m3.x2nf(0);
      return x2m3.x2ne();
    } else {
      return -1;
    }
  };
  this.x21b = function () {
    if (xt.xv < xaa.xhs) {
      x2m3.x2nf(1);
      return x2m3.x2ne();
    } else {
      return -1;
    }
  };
  this.x217 = function () {
    if (xt.xv < xaa.xhs) {
      return x2m3.x217();
    } else {
      return false;
    }
  };
  this.x218 = function () {
    if (xt.xv < xaa.xhs) {
      return x2m3.x218();
    } else {
      return x21d;
    }
  };
  var x2n0 = function () {
    if (x2e2) {
      x2j1 = xhu.Execute("GetDuration") / 1e3;
      if (x2j1 < 0) x2j1 = 0;
      var xhi = xhu.Execute("GetVideoResolution");
      if (xhi && xhi !== -1 && -1 !== xhi.indexOf("|")) {
        xhi = xhi.split("|");
        x2j3 = xhi[0];
        x2j4 = xhi[1];
      }
    } else {
      x2j1 = xh6.GetDuration() / 1e3;
      if (x2j1 < 0) x2j1 = 0;
      x2j3 = xh6.GetVideoWidth();
      x2j4 = xh6.GetVideoHeight();
    }
    if (x2j3 === 5) {
      x2j4 = 432;
      x2j3 = 540;
    } else {
      if (x2j3 === 4) {
        x2j4 = 270;
        x2j3 = 480;
      } else {
        if (x2j3 === 3) {
          x2j4 = 288;
          x2j3 = 384;
        } else {
          if (x2j3 < 128 || x2j3 > 7680 || !x2j3) {
            x2j4 = 0;
            x2j3 = 0;
          }
        }
      }
    }
    xad.xae("StreamInfo: " + x2j3 + "x" + x2j4 + " " + x2j1);
    if (x2j3 !== 0) {
      x2iy.x2js.xge({xck: x2j3, x1dq: x2j4, duration: x2j1});
    }
  };
  this.x2k6 = [x1ze.x1zf, x1ze.x1zg, x1ze.x1zh, x1ze.x1zk];
  this.x1xq = function (x2kf) {
    x2n0();
    if (x2j3 !== 0 && !xvh) {
      var x2kd = 0, x2kc = 0, x2k8 = 960, x2k9 = 540, x2ng = 0, x2nh = 0, x2ni = x2j3, x2nj = x2j4, x2nk = x2j3 / x2j4;
      switch (x2kf) {
        case x1ze.x1zg:
          x2nh = xa0(0.115 * x2j4, 10);
          x2nj = xa0(0.77 * x2j4, 10);
          break;
        case x1ze.x1zh:
          x2nh = xa0(0.0625 * x2j4, 10);
          x2nj = xa0(0.875 * x2j4, 10);
          break;
        case x1ze.x1zi:
          x2ng = xa0(0.0625 * x2j3, 10);
          x2nh = xa0(0.0625 * x2j4, 10);
          x2ni = xa0(0.875 * x2j3, 10);
          x2nj = xa0(0.875 * x2j4, 10);
          break;
        case x1ze.x1zk:
          if (x2j3 <= 720 && x2nk <= 1.35) {
            x2k8 = 720;
            x2kd = 120;
          } else {
            xad.xae("not acceptable for this resolution");
          }
          break;
      }
      if (x2e2) {
        xhu.Execute("SetDisplayArea", x2kd, x2kc, x2k8, x2k9);
        if (x2kf !== x1ze.x1zf) {
          xhu.Execute("SetCropArea", x2ng, x2nh, x2ni, x2nj);
        }
      } else {
        xh6.SetDisplayArea(x2kd, x2kc, x2k8, x2k9);
        if (x2kf !== x1ze.x1zf) {
          xh6.SetCropArea(x2ng, x2nh, x2ni, x2nj);
        }
      }
      xad.xae("==== set aspect: a=" + x2nk + " crop=" + x2ng + ";" + x2nh + ";" + x2ni + ";" + x2nj + " screen=" + x2kd + ";" + x2kc + ";" + x2k8 + ";" + x2k9);
      return true;
    } else {
      xad.xae("--== temporary not work ==--");
      return false;
    }
  };
  this.x21g = function () {
    var xz = {x205: 0, x206: 0};
    if (x2e2) {
      var x2nl = xhu.Execute("GetCurrentStreamID", 1);
      x2iz = x2nl;
      var x2nm = xhu.Execute("GetTotalNumOfStreamID", 1);
      if (x2nm > 10) x2nm = 10;
      if (x2nm < 0) x2nm = 0;
      if (x2nm > 1) {
        xz.x205 = x2nm;
        if (++x2iz >= x2nm) {
          x2iz = 0;
        }
        var xhi = xhu.Execute("SetStreamID", "1", x2iz);
        xz.x206 = x2iz;
        xad.xae("streams " + x2nm + " " + xhi);
      }
    }
    return xz;
  };
};
var x2m4 = function () {
  var xah = this, xh6 = x9m, x2nn, x21c = false;
  function x2no() {
    var x2np = true;
    try {
      xh6 = x9o.getElementById("pluginAudio");
      x2nn = xh6.GetOutputDevice();
      xad.xae("audio device:" + x2nn);
      if (!xh6) {
        x2np = false;
      }
      x21c = xh6.GetUserMute() === 1;
    } catch (x12) {}
    return x2np;
  }
  x2no();
  this.x2nf = function (xf9) {
    xh6.SetVolumeWithKey(xf9);
  };
  this.x2ne = function () {
    var x219 = xh6.GetVolume();
    return x219;
  };
  this.x217 = function () {
    return xh6.GetUserMute() === 1;
  };
  this.x218 = function () {
    if (x21c) {
      xh6.SetUserMute(0);
      x21c = false;
    } else {
      xh6.SetUserMute(1);
      x21c = true;
    }
    return x21c;
  };
};
var x2m5 = function (x2j6) {
  var x2iy = xt.x2iy, x2nq = false, x2nr, x2ns = {};
  var x19j = x19o("div", "css69");
  x2j6.insertBefore(x19j, x2j6.firstChild);
  this.play = function (x2nt) {
    x19j.style.display = "block";
    var x2nu = "<object type='application/x-shockwave-flash' id='rmtpplayer' width='960' height='540' ><param name='movie' value='swf/flashplayer.swf' /><param name='FlashVars' value='file=" + x2nt + "' />" + "</object>";
    x19j.innerHTML = x2nu;
    xad.xae(x2nu);
    x2nq = true;
    xad.xae("play stream in flash player : '" + x2nt + "'");
    x9p(function () {
      x2ns = xaa.rmtpplayer;
    }, 500);
    x9q(x2nr);
    var x2nv = x9p(function () {
      if (x2nq) {
        x2iy.x22q.xge();
      }
    }, 5e3);
    x2nr = x2nv;
  };
  this.stop = function () {
    if (x2nq) {
      x2ns = x9m;
      x19j.innerHTML = " ";
      x19j.style.display = "none";
      x9q(x2nr);
      xad.xae("samsung flash stop");
      x2nq = false;
    }
  };
};
var x2nw = function (x2ix) {
  var _xg = xaa._xg, xah = this, xad = xaa.xad, x2iy = xt.x2iy, x2j6 = x2ix, x2nx = x9o.createElement("object"), x2j0 = false, x2ny, x2j3 = 0, x2j4 = 0, x2j1 = 0, x2nz = 0, x2o0 = false, x2o1 = false, x2o2 = false;
  try {
    x2ny = xaa.webapis.avplay;
  } catch (x12) {}
  function x2o3() {
    if (x2j0) {
      try {
        xaa.webapis.avplay.suspend();
      } catch (x12) {
        xad.xb6("[tizen] Error on suspend playing");
      }
    }
  }
  function x2o4() {
    if (x2j0) {
      try {
        x2nx.style.visibility = "visible";
      } catch (x12) {}
      try {
        xaa.webapis.avplay.restore();
      } catch (x12) {
        xad.xb6("[tizen] Error on restire playing");
      }
    }
  }
  x2nx.type = "application/avplayer";
  x2nx.style.width = "96em";
  x2nx.style.height = "54em";
  x2nx.style.visibility = "hidden";
  xaa.xic(x2o3);
  xaa.xid(x2o4);
  this.x2j9 = function () {
    if (!x2j0) {
      x2nx.style.visibility = "visible";
      x2j6.insertBefore(x2nx, x2j6.firstChild);
      x2j0 = true;
      xaa.webapis.appcommon.setScreenSaver(0, xa8);
      xad.xae("[tizen] enable player");
    }
  };
  this.x2ja = function () {
    if (x2j0) {
      try {
        x2nx.style.visibility = "hidden";
        x2nx = x2j6.removeChild(x2nx);
      } catch (xb6) {}
      x2j0 = false;
      xaa.webapis.appcommon.setScreenSaver(1, xa8);
      xad.xae("[tizen] disable player");
    }
  };
  var xg9 = {};
  var x2o5 = false;
  xg9.onbufferingstart = function () {
    xad.xae("[tizen] Buffering start.");
    x2o5 = true;
    x2iy.x22v.xge();
  };
  xg9.onbufferingprogress = function (x2o6) {
    if (typeof x2o6 === "number") {
      x2iy.bufferingProgress.xge(x2o6);
    }
    if (x2o2) {
      x2iy.x22w.xge();
      x2o2 = false;
    }
  };
  function x2o7() {
    try {
      var x2o8 = x2ny.getCurrentStreamInfo();
    } catch (xb6) {
      xad.xae("get info exception:" + xb6.message);
    }
    if (x2o8 && x2o8.length) {
      for (var xd = 0; xd < x2o8.length; xd++) {
        if (x2o8[xd].type === "VIDEO") {
          try {
            var x2o9 = x9u.parse(x2o8[xd].extra_info);
            x2j3 = x2o9.Width || 0;
            x2j4 = x2o9.Height || 0;
          } catch (xb6) {}
        }
      }
    }
    try {
      x2j1 = x2ny.getDuration() / 1e3 || 0;
    } catch (x12) {}
  }
  function x2oa() {
    try {
      var x2ob = x2ny.getTotalTrackInfo();
    } catch (xb6) {
      xad.xae("get info exception:" + xb6.message);
    }
    if (x2ob && x2ob.length) {
      for (var xd = 0; xd < x2ob.length; xd++) {
        if (x2ob[xd].type === "VIDEO") {
          try {
            var x2o9 = x9u.parse(x2ob[xd].extra_info);
            x2nz = x2o9.Bit_rate || 0;
          } catch (xb6) {}
        }
      }
    }
  }
  xg9.onbufferingcomplete = function (x16o) {
    x2o5 = false;
    xad.xae("[tizen] Buffering complete.");
    if (x2o0) {
      x2iy.x22w.xge();
    }
    if (!x2o1) {
      x2iy.x22q.xge();
    }
  };
  xg9.oncurrentplaytime = function (x2j2) {
    if (xdr) {}
    if (x2j1 === 0) {
      try {
        x2j1 = x2ny.getDuration() / 1e3 || 0;
      } catch (x12) {}
    }
    try {
      var x2oc = x2j2 / 1e3;
      x2iy.x2jx.xge({x1mj: x2j1, x1mk: x2oc});
    } catch (x12) {}
  };
  xg9.onevent = function (x2od, x2oe) {
    xad.xae("[tizen] event type : " + x2od + ", data: " + x2oe);
    if (x2od) {
      switch (x2od) {
        case "PLAYER_MSG_RESOLUTION_CHANGED":
          x2o7();
          x2iy.x2js.xge({xck: x2j3, x1dq: x2j4, duration: x2j1});
          break;
        case "PLAYER_MSG_BITRATE_CHANGE":
          break;
      }
    }
  };
  xg9.onerror = function (x16o) {
    var x2of = false;
    if (x16o) {
      switch (x16o) {
        case "PLAYER_ERROR_CONNECTION_FAILED":
          xad.xb6("[tizen] Connection error");
          x2iy.x2je.xge();
          break;
        case "PLAYER_ERROR_NOT_SUPPORTED_FILE":
          xad.xb6("[tizen] Not support file");
          x2iy.x2je.xge();
          break;
        case "PLAYER_ERROR_INVALID_OPERATION":
          xad.xb6("[tizen] Invalid operation");
          x2iy.x2je.xge();
          break;
        case "UNKNOWN_ERROR_EVENT_FROM_PLAYER":
          xad.xb6("[tizen] Unknown error");
          x2iy.x2je.xge();
          break;
        default:
          xad.xb6("[tizen] error: " + x16o);
          try {
            var x2jd = x16o.target.error;
            switch (x2jd.code) {
              case x2jd.MEDIA_ERR_ABORTED:
                xad.x209("You aborted the video playback");
                break;
              case x2jd.MEDIA_ERR_NETWORK:
                x2of = true;
                xad.x209("A network error caused the video download to fail part-way");
                break;
              case x2jd.MEDIA_ERR_DECODE:
                xad.x209("The video playback was aborted due to a corruption problem ");
                xad.x209("or because the video used features your browser did not support.");
                break;
              case x2jd.MEDIA_ERR_ENCRYPTED:
                xad.x209("Video encrypted");
                break;
              case x2jd.MEDIA_ERR_SRC_NOT_SUPPORTED:
                xad.x209("The video could not be loaded, either because the server or network failed");
                xad.x209("or because the format is not supported");
                break;
              default:
                xad.xb6("html player err:" + x2jd.code);
            }
          } catch (x12) {}
          if (x2j0 && x2of) {
            x2iy.x2je.xge();
          }
      }
    }
  };
  xg9.onsubtitlechange = function (xmb, x8k, x2og, x2oh) {
    xad.xae("[tizen] Subtitle Changed.");
  };
  xg9.ondrmevent = function (x2oi, x2oj) {
    xad.xae("[tizen] DRM callback: " + x2oi + ", data: " + x2oj);
  };
  xg9.onstreamcompleted = function () {
    xad.xae("[tizen] Stream Completed");
    try {
      x2ny.pause();
      x2ny.seekTo(0);
    } catch (x12) {}
    if (x2o0) {
      x2iy.x22r.xge();
      x2o0 = false;
    }
  };
  function x2ok() {
    xad.xae("[tizen] Play Video");
    try {
      x2ny.play();
      xvh = false;
    } catch (xb6) {
      xad.xb6("[tizen] Play error");
    }
  }
  function x2ol() {
    if (x2j0) {
      try {
        x2j1 = x2ny.getDuration() / 1e3 || 0;
      } catch (x12) {}
      x2iy.x2js.xge({xck: x2j3, x1dq: x2j4, duration: x2j1});
    }
  }
  function x2om(x2on, x2oo, start, x2op) {
    var x2oq = "|BITRATES=" + x2on + "~" + x2oo;
    if (start !== "" && start !== x9n) {
      x2oq += "|STARTBITRATE=" + start;
    }
    if (x2oo !== "" && x2oo !== x9n) {
      x2oq += "|SKIPBITRATE=" + x2op;
    }
    try {
      x2ny.setStreamingProperty("ADAPTIVE_INFO", x2oq);
    } catch (x12) {
      xad.xb6("[tizen] Error on set bitrate");
    }
  }
  this.play = function (xsv) {
    if (x2j0) {
      x2j3 = 0;
      x2j4 = 0;
      x2j1 = 0;
      try {
        x2ny.open(xsv);
      } catch (x12) {
        xad.xb6("[tizen] Error on open stream link");
      }
      try {
        x2ny.setListener(xg9);
      } catch (x12) {
        xad.xb6("[tizen] Error on set listener");
      }
      if (xcz.xd0(xcz.xd1.x2b0)) {
        var x2m7 = xcz.xd0(xcz.xd1.x2b1);
        try {
          x2ny.setBufferingParam("PLAYER_BUFFER_FOR_PLAY", "PLAYER_BUFFER_SIZE_IN_BYTE", x2m7);
        } catch (x12) {
          xad.xbd("[tizen] Error on set playing buffering param");
          xad.xbd(x12.name + ":" + x12.message);
        }
        try {
          x2ny.setBufferingParam("PLAYER_BUFFER_FOR_RESUME", "PLAYER_BUFFER_SIZE_IN_BYTE", x2m7);
        } catch (x12) {
          xad.xbd("[tizen] Error on set resume buffering param");
          xad.xbd(x12.name + ":" + x12.message);
        }
      }
      var x2or = function () {
        if (x2o1) {
          var state = "---";
          try {
            var state = x2ny.getState();
          } catch (x12) {}
          xad.xae("[tizen] Current state: " + state);
          try {
            x2ny.setDisplayRect(x2nx.offsetLeft, x2nx.x2os, x2nx.offsetWidth, x2nx.offsetHeight);
          } catch (x12) {
            xad.xb6("[tizen] Error on set display rect");
          }
          xad.xae("[tizen] prepare complete");
          x2o0 = true;
          x2o7();
          x2iy.x2js.xge({xck: x2j3, x1dq: x2j4, duration: x2j1});
          if (!x2o5) {
            x2iy.x22w.xge();
          }
          x2ok();
          x2o1 = false;
        }
      };
      var x2ot = function () {
        x2o1 = false;
        xad.xb6("[tizen] prepare error");
      };
      xad.xae("[tizen] preparing...");
      try {
        x2o1 = true;
        x2ny.prepareAsync(x2or, x2ot);
      } catch (xb6) {
        xad.xb6("[tizen] prepare exception:" + xb6.message || "--");
        x2o1 = false;
      }
    }
  };
  var xvh = false;
  this.stop = function () {
    if (x2j0) {
      xad.xae("[tizen] Stop Video");
      xvh = false;
      try {
        x2ny.stop();
      } catch (x12) {
        xad.xb6("[tizen] Error on stop video");
      }
      try {
        x2ny.close();
      } catch (x12) {
        xad.xb6("[tizen] Error on close video");
      }
      x2ou = -1;
      x2o1 = false;
      x2o0 = false;
    }
  };
  this.pause = function () {
    xad.xae("[tizen] Pause Video");
    try {
      x2ny.pause();
      xvh = true;
    } catch (x12) {
      xad.xae(x12);
    }
  };
  this.xve = function () {
    x2ok();
  };
  this.xvh = function () {
    return xvh;
  };
  this.x2k3 = function (xxl) {
    xad.xae("[tizen] FF Video");
    try {
      x2iy.x22v.xge();
      x2o2 = true;
      x2ny.jumpForward(xxl * 1e3);
    } catch (x12) {
      xad.xb6("[tizen] Error on ff");
    }
  };
  this.x2k4 = function (xxl) {
    xad.xae("[tizen] RW Video");
    try {
      x2iy.x22v.xge();
      x2o2 = true;
      x2ny.jumpBackward(xxl * 1e3);
    } catch (x12) {
      xad.xb6("[tizen] Error on rw");
    }
  };
  function x2ov() {
    xad.xae("[tizen] Seek success cb");
    try {
      var state = x2ny.getState();
      xvh = x2ny.getState() === "PAUSED";
    } catch (x12) {}
    if (xvh) {
      x2ok();
    }
  }
  function x2ow() {
    xad.xbd("[tizen] Seek error cb");
    try {
      var state = x2ny.getState();
      xvh = x2ny.getState() === "PAUSED";
    } catch (x12) {}
    if (xvh) {
      x2ok();
    }
  }
  this.xvu = function (x2k5) {
    var x2ox = (x2k5 * x2j1 >> 0) * 1e3;
    xad.xae("[tizen] Seek to " + x2ox);
    x2iy.x22v.xge();
    x2o2 = true;
    try {
      x2ny.pause();
      xvh = true;
      x2ny.seekTo(x2ox, x2ov, x2ow);
    } catch (xb6) {
      xad.xb6("[tizen] Error on seek");
    }
  };
  this.x21e = function () {
    return -1;
  };
  this.x21a = function () {
    return -1;
  };
  this.x21b = function () {
    return -1;
  };
  this.x217 = function () {
    return false;
  };
  this.x218 = function () {
    return x21d;
  };
  this.x2k6 = [x1ze.x1zt, x1ze.x1zu];
  this.x1xq = function (x2kf) {
    try {
      switch (x2kf) {
        case x1ze.x1zt:
          x2ny.setDisplayMethod("PLAYER_DISPLAY_MODE_FULL_SCREEN");
          break;
        case x1ze.x1zu:
          x2ny.setDisplayMethod("PLAYER_DISPLAY_MODE_LETTER_BOX");
          break;
        case x1ze.x1zv:
          x2ny.setDisplayMethod("PLAYER_DISPLAY_MODE_ORIGIN_SIZE");
          break;
        case x1ze.x1zw:
          x2ny.setDisplayMethod("PLAYER_DISPLAY_MODE_CROPPED_FULL");
          break;
        case x1ze.x1zx:
          x2ny.setDisplayMethod("PLAYER_DISPLAY_MODE_ZOOM_HALF");
          break;
        case x1ze.x1zy:
          x2ny.setDisplayMethod("PLAYER_DISPLAY_MODE_ZOOM_THREE_QUARTERS");
          break;
        case x1ze.x1zz:
          x2ny.setDisplayMethod("PLAYER_DISPLAY_MODE_ORIGIN_OR_LETTER");
          break;
        case x1ze.x200:
          x2ny.setDisplayMethod("PLAYER_DISPLAY_MODE_DST_ROI");
          break;
        case x1ze.x201:
          x2ny.setDisplayMethod("PLAYER_DISPLAY_MODE_ZOOM_16_9");
          break;
        case x1ze.x202:
          x2ny.setDisplayMethod("PLAYER_DISPLAY_MODE_ZOOM");
          break;
        case x1ze.x203:
          x2ny.setDisplayMethod("PLAYER_DISPLAY_MODE_ZOOM_CUSTOM");
          break;
      }
    } catch (x12) {
      xad.xb6("[tizen] error set aspect ratio " + x2kf);
    }
    return true;
  };
  var x2ou = -1;
  function x2oy() {
    var x2oz = {x1mj: [], x1mk: {}};
    try {
      var x2ob = x2ny.getTotalTrackInfo();
    } catch (xb6) {
      xad.xae("get info exception:" + xb6.message);
    }
    if (x2ob && x2ob.length) {
      for (var x2p0 = 0; x2p0 < x2ob.length; x2p0++) {
        if (x2ob[x2p0].type === "AUDIO") {
          try {
            var x2o9 = x9u.parse(x2ob[x2p0].extra_info), x1bu = x2o9.language || 0, x2p1 = x2o9.bit_rate || 0;
            xad.xae("============================");
            xe6(x2o9, 0, 32);
            xad.xae("audioTrack:" + x1bu + "|" + x2p1);
            x2oz.x1mj.push(x2p0);
          } catch (xb6) {
            xad.xae("parse info exception:" + xb6.message);
          }
        }
      }
    }
    try {
      var x2p2 = x2ny.getCurrentStreamInfo();
    } catch (xb6) {
      xad.xae("get info exception:" + xb6.message);
    }
    if (x2p2 && x2p2.length) {
      for (var x2p0 = 0; x2p0 < x2p2.length; x2p0++) {
        if (x2p2[x2p0].type === "AUDIO") {
          try {
            var x2o9 = x9u.parse(x2p2[x2p0].extra_info), x1bu = x2o9.language || 0, x2p1 = x2o9.bit_rate || 0;
            xad.xae("current audioTrack:" + x1bu + "|" + x2p1);
          } catch (xb6) {
            xad.xae("parse info exception:" + xb6.message);
          }
        }
      }
    }
    return x2oz;
  }
  this.x21g = function () {
    var xz = {x205: 0, x206: 0};
    if (x2o1) {
      return xz;
    }
    var x2oz = x2oy();
    if (x2oz.x1mj.length > 0) {
      xz.x205 = x2oz.x1mj.length;
    }
    if (x2ou < 0) {
      x2ou = 0;
    }
    x2ou++;
    if (x2ou + 1 > x2oz.x1mj.length) {
      x2ou = 0;
    }
    try {
      x2ny.setSelectTrack("AUDIO", x2oz.x1mj[x2ou]);
      xz.x206 = x2ou;
    } catch (xb6) {
      xad.xb6("error on set audio track: " + xb6.message);
    }
    return xz;
  };
};
var x2p3 = function () {
  var _xg = xaa._xg, x2iy = xt.x2iy, x2j1 = 0, x2j2 = 0, x2j3 = 0, x2j4 = 0, x2iz = 0, x2p4 = x9m;
  function x2p5() {
    var position = xi3.GetPosTime();
    x2j2 = position;
    x2iy.x2jx.xge({x1mj: x2j1, x1mk: x2j2});
    x2p4 = x9p(x2p5, 500);
  }
  function x2p6() {
    x9q(x2p4);
  }
  function x2p7() {
    x2p6();
    x2p4 = x9p(x2p5, 500);
  }
  xi3.InitPlayer();
  var x219 = xi3.GetVolume();
  x219 = parseInt(x219 / 5, 10) * 5;
  xi3.SetVolume(x219);
  var xje = xa4(xi3.RDir("vmode"));
  if (xje.indexOf("1080") >= 0) {
    xi3.SetViewport(1920, 1080, 0, 0);
  } else if (xje.indexOf("720") >= 0) {
    xi3.SetViewport(1280, 720, 0, 0);
  } else if (xje.indexOf("576") >= 0) {
    xi3.SetViewport(720, 576, 0, 0);
  } else if (xje.indexOf("480") >= 0) {
    xi3.SetViewport(720, 480, 0, 0);
  }
  xi3.SetTopWin(0);
  xi3.SetPIG(1, 256, 0, 0);
  xaa.stbEvent = {onEvent: function (data) {
    xad.xae("MAG event:" + data);
    data += "";
    if (data === "1") {
      x2iy.x22r.xge();
      x2p6();
    } else if (data === "2") {
      x2j1 = xi3.GetMediaLen();
      x2j2 = 0;
      xad.xae("duration:" + x2j1);
      x2iy.x22q.xge();
    } else if (data === "4") {
      x2iy.x22w.xge();
      x2p7();
    } else if (data === "5") {
      x2iy.x2je.xge();
    } else if (data === "7") {
      var x2p8 = xa4(xi3.GetVideoInfo());
      try {
        xa2("var mvinf=" + x2p8);
      } catch (x12) {
        xad.xb6("error parse vinf: '" + x2p8 + "'");
      }
      x2j3 = mvinf.pictureWidth;
      x2j4 = mvinf.pictureHeight;
      xad.xae("videosize:" + x2j3 + "x" + x2j4);
      x2iy.x2js.xge({xck: x2j3, x1dq: x2j4, duration: x2j1});
    } else if (data === "33") {
      if (xcz.xd0(xcz.xd1.x2bh)) {
        if (!xkl) {
          xkm();
        }
      }
    } else if (data === "32") {
      if (xcz.xd0(xcz.xd1.x2bh)) {
        if (xkl) {
          xkm();
        }
      }
    } else {
      xad.xae("unsupported MAG event:" + data);
    }
  }, event: 0};
  this.play = function (x2l2) {
    x2j1 = 0;
    x2j2 = 0;
    x2j3 = 0;
    x2j4 = 0;
    x2iz = 0;
    xi3.InitPlayer();
    xi3.Play(x2l2);
  };
  this.stop = function () {
    xi3.Stop();
    x2p6();
    xvh = false;
  };
  var xvh = false;
  this.pause = function () {
    xi3.Pause();
    xvh = true;
  };
  this.xve = function () {
    xi3.Continue();
    xvh = false;
  };
  this.xvh = function () {
    return xvh;
  };
  this.x2k3 = function (xxl) {
    var x2k5 = x2j2 + xxl;
    if (x2k5 > x2j1) x2k5 = x2j1;
    xi3.SetPosTime(x2k5);
  };
  this.x2k4 = function (xxl) {
    var x2k5 = x2j2 - xxl;
    if (x2k5 < 0) x2k5 = 0;
    xi3.SetPosTime(x2k5);
  };
  this.xvu = function (x2k5) {
    xi3.SetPosTime(x2j1 * x2k5);
  };
  this.x21e = function () {
    var x219 = 100;
    x219 = xi3.GetVolume();
    return x219;
  };
  this.x217 = function () {
    return xi3.GetMute() === 1;
  };
  var x2p9 = 5;
  this.x21a = function () {
    var x219 = 100;
    x219 = xi3.GetVolume();
    x219 += x2p9;
    if (x219 > 100) x219 = 100;
    xi3.SetVolume(x219);
    return x219;
  };
  this.x21b = function () {
    var x219 = 100;
    x219 = xi3.GetVolume();
    x219 -= x2p9;
    if (x219 < 0) {
      x219 = 0;
    }
    xi3.SetVolume(x219);
    return x219;
  };
  this.x218 = function (x2pa) {
    var x21c = xi3.GetMute();
    if (x21c === 1 !== x2pa) {
      if (x21c === 1) x21c = 0; else x21c = 1;
    }
    xad.xae("MAG mute " + x21c);
    xi3.SetMute(x21c);
    return x21c === 1;
  };
  this.x2k6 = [x1ze.x1zf, x1ze.x1zo, x1ze.x1zp, x1ze.x1zq, x1ze.x1zr, x1ze.x1zs];
  this.x1xq = function (x2kf) {
    var x1am = 0;
    switch (x2kf) {
      case x1ze.x1zo:
        x1am = 16;
        break;
      case x1ze.x1zp:
        x1am = 32;
        break;
      case x1ze.x1zq:
        x1am = 48;
        break;
      case x1ze.x1zr:
        x1am = 64;
        break;
      case x1ze.x1zs:
        x1am = 80;
        break;
    }
    var x2pb = xi3.GetAspect();
    xi3.SetAspect(x1am);
    xad.xae("MAG ar:" + x2pb + "->" + xi3.GetAspect());
    return true;
  };
  this.x21g = function () {
    var xz = {x205: 0, x206: 0};
    var x2pc = xi3.GetAudioPIDs();
    x2pc = eval(x2pc);
    var x2nm = x2pc.length;
    if (x2nm > 1) {
      x2iz++;
      if (x2iz >= x2nm) {
        x2iz = 0;
      }
      xi3.SetAudioPID(x2pc[x2iz].pid);
      xz.x205 = x2nm;
      xz.x206 = x2iz;
    }
    return xz;
  };
};
var x2pd = function (x2j6) {
  this.x2pe = {xju: 0, x2pf: 1};
  var _xg = xaa._xg, xah = this, x2iy = xt.x2iy, x2pg = ["ru", "en", "fr"], x2j1 = 0, x2j2 = 0, x2iz = 0, x2ph = "", x2ly = xah.x2pe.xju, x2pi = 0, x2pj = false, x2j0 = false, x2pk = x9o.createElement("object"), x2pl = {x2pm: 0, x2pn: 1, x2po: 2, x2pp: 3, x2pq: 4, x2pr: 5, x2ps: 6}, x2p4 = x9m;
  x2j6.style.background = "black";
  x2pk.style.position = "absolute";
  var x2pt = 96, x2pu = 54, x2pv = 0, x2pw = 0, x2px = "em";
  if (x2x.x31.x197.x19h) {
    x2pt = x2x.x31.x197.x198;
    x2pu = x2x.x31.x197.x199;
    x2px = "px";
  }
  x2pk.style.top = x2pv + x2px;
  x2pk.style.left = x2pw + x2px;
  x2pk.style.width = x2pt + x2px;
  x2pk.style.height = x2pu + x2px;
  x2pk.setAttribute("type", "video/mp4");
  x2pk.setAttribute("preBufferingTime", "0");
  x2pk.setAttribute("oneshot_url", "true");
  x2pk.setAttribute("autoStart", "true");
  x2pk.setAttribute("downloadable", "false");
  x2pk.id = "mediaplayer-video";
  this.x2j9 = function () {
    if (!x2j0) {
      x2j6.insertBefore(x2pk, x2j6.firstChild);
      x2j0 = true;
      xad.xae("[mediaplayer] enable player");
    }
  };
  this.x2ja = function () {
    if (x2j0) {
      var xql = x2j6.removeChild(x2pk);
      x2j0 = false;
      xad.xae("[mediaplayer] disable player");
    }
  };
  function x2p5() {
    if (x2pk.mediaPlayInfo) {
      var x2o8 = x2pk.mediaPlayInfo();
      if (x2o8) {
        x2j2 = x2o8.currentPosition / 1e3;
        x2iy.x2jx.xge({x1mj: x2j1, x1mk: x2j2});
      }
    }
    x2p4 = x9p(x2p5, 500);
  }
  function x2p6() {
    x9q(x2p4);
  }
  function x2p7() {
    x2p6();
    var x2py = x9p(x2p5, 500);
    x2p4 = x2py;
  }
  x2pk.onPlayStateChange = function () {
    var state = x2pk.playState;
    xad.xae("state change : " + state + "(" + x2pk.width + "x" + x2pk.height + ")");
    switch (state) {
      case x2pl.x2pn:
        x2iy.x22q.xge();
        x2pj = true;
        var x2o8;
        if (x2pk.mediaPlayInfo) {
          x2o8 = x2pk.mediaPlayInfo();
          if (x2o8) {
            x2j1 = x2o8.duration / 1e3;
          }
          x2p7();
        }
        break;
      case x2pl.x2pm:
        x2p6();
        x2pj = false;
        xad.xae("stopped");
        break;
      case x2pl.x2pr:
        x2p6();
        x2pj = false;
        x2iy.x22r.xge();
        break;
      case x2pl.x2pq:
        xad.xae("buffering state");
        break;
      case x2pl.x2ps:
        x2iy.x2je.xge();
        break;
    }
  };
  x2pk.onBuffering = function (x2pz) {
    if (x2pz) {
      x2iy.x22v.xge();
    }
    var x2o8 = x2pk.mediaPlayInfo();
    if (x2o8) {
      xad.xae("buf:" + x2pk.bufferingProgress + " " + x2pz + "; info:" + x2o8.duration + " " + x2o8.currentPosition + " " + x2o8.bufRemain + " " + x2o8.bitrateInstant + " " + x2o8.bitrateTarget);
      var x2q0 = x2pk.bufferingProgress;
      if (x2q0 === 100) {
        x2iy.x22w.xge();
      } else {
        x2iy.bufferingProgress.xge(x2q0 ? x2q0 : 0);
      }
    }
  };
  x2pk.onError = function (x2pz) {
    switch (x2pk.error) {
      case 1:
      case 2:
        x2iy.x2je.xge();
        break;
      default:
        xad.xb6("NetCast error:" + x2pk.error);
    }
  };
  this.play = function (x2l2, x2q1, x2q2) {
    if (x2j0) {
      x2j1 = 0;
      x2j2 = 0;
      x2iz = 0;
      x2pi = 0;
      x2ph = x2l2;
      x2ly = x2q1;
      if (!x2q2) {
        if (x2q1 === xah.x2pe.xju) {
          x2q2 = "video/mp4";
        } else {
          x2q2 = "application/x-netcast-av";
        }
      }
      x2pk.setAttribute("type", x2q2);
      x2pk.setAttribute("audioLanguage", "ru");
      if (x2q1 === xah.x2pe.xju) {
        x2iy.x22q.xge();
      }
      x2pk.data = x2l2;
      var x2q3 = 1;
      x2pk.play(x2q3);
    }
  };
  this.stop = function () {
    if (x2j0) {
      x2p6();
      try {
        x2pk.stop();
      } catch (x12) {}
      xad.xae("[mediaplayer] stop playing");
      xvh = false;
    }
  };
  var xvh = false;
  this.pause = function () {
    x2pi = x2j2 / x2j1;
    xad.xae("stop for pause on pos " + x2pi + "(" + x2j2 + "/" + x2j1 + ")");
    x2pk.stop();
    xvh = true;
  };
  this.xve = function () {
    var x2q4 = x2j1 * x2pi, x2q5 = x2j1, x2q6 = x2pi;
    xad.xae("resuming...");
    xah.play(x2ph, x2ly);
    xad.xae("seek for resume to pos " + x2q6 + "(" + x2q4 + "/" + x2q5 + ")");
    x2pk.seek(x2q4 * 1e3);
    xvh = false;
  };
  this.xvh = function () {
    return xvh;
  };
  this.x2k3 = function (xxl) {
    var x2k5 = x2j2 + xxl;
    if (x2k5 > x2j1) x2k5 = x2j1;
    x2pk.seek(x2k5 * 1e3);
  };
  this.x2k4 = function (xxl) {
    var x2k5 = x2j2 - xxl;
    if (x2k5 < 0) x2k5 = 0;
    x2pk.seek(x2k5 * 1e3);
  };
  this.xvu = function (x2k5) {
    var x2q4 = x2j1 * x2k5;
    x2pk.seek(x2q4 * 1e3);
  };
  this.x21e = function () {
    return -1;
  };
  this.x21a = function () {
    return -1;
  };
  this.x21b = function () {
    return -1;
  };
  this.x217 = function () {
    return false;
  };
  this.x218 = function () {
    return x21d;
  };
  this.x2k6 = [x1ze.x1zf, x1ze.x1zg, x1ze.x1zh, x1ze.x1zk];
  this.x1xq = function (x2kf) {
    var x2k8 = 96, x2k9 = 54, x2kc = 0, x2kd = 0, x2ke = "em";
    if (x2x.x31.x197.x19h) {
      x2k8 = x2x.x31.x197.x198;
      x2k9 = x2x.x31.x197.x199;
      x2ke = "px";
    }
    var x2q7 = x2k8, x2q8 = x2k9, x2q9 = x2kc, x2qa = x2kd;
    switch (x2kf) {
      case x1ze.x1zg:
        x2q9 = 0.115 * x2k9;
        x2q8 = 0.77 * x2k9;
        break;
      case x1ze.x1zh:
        x2q9 = 0.0625 * x2k9;
        x2q8 = 0.875 * x2k9;
        break;
      case x1ze.x1zi:
        x2qa = 0.0625 * x2k8;
        x2q9 = 0.0625 * x2k9;
        x2q7 = 0.875 * x2k8;
        x2q8 = 0.875 * x2k9;
        break;
      case x1ze.x1zk:
        x2q7 = x2k8 * 0.75;
        x2qa = x2k8 * 0.125;
        break;
    }
    if (x2pv !== x2q9) {
      x2pk.style.top = x2q9 + x2ke;
      x2pv = x2q9;
    }
    if (x2pw !== x2qa) {
      x2pk.style.left = x2qa + x2ke;
      x2pw = x2qa;
    }
    if (x2pt !== x2q7) {
      x2pk.style.width = x2q7 + x2ke;
      x2pt = x2q7;
    }
    if (x2pu !== x2q8) {
      x2pk.style.height = x2q8 + x2ke;
      x2pu = x2q8;
    }
    xad.xae("==== set aspect: a=" + x2kf + " w=" + x2q7 + "; h=" + x2q8 + "; t=" + x2q9 + "; l=" + x2qa + "; u=" + x2ke);
    return true;
  };
  this.x21g = function () {
    var xz = {x205: x2pg.length, x206: 0};
    if (x2pj) {
      x2iz++;
      if (x2iz >= x2pg.length) {
        x2iz = 0;
      }
      x2pk.stop();
      x2pk.setAttribute("audioLanguage", x2pg[x2iz]);
      var x2q3 = 1;
      x2pk.play(x2q3);
    }
    xz.x206 = x2iz;
    return xz;
  };
};
var x2qb = function (x2j6) {
  var _xg = xaa._xg, xah = this, x2iy = xt.x2iy;
  function x2qc(x2qd) {}
  try {
    xa6.Player.onEvent = x2qc;
  } catch (x12) {}
  this.play = function (x2l2) {
    xa6.Player.PListClear();
    xa6.Player.PListAdd(x2l2);
    xa6.Player.Play(x2l2);
  };
  this.stop = function () {
    xa6.Player.Stop();
    xvh = false;
  };
  var xvh = false;
  this.pause = function () {
    xa6.Player.Pause();
    xvh = true;
  };
  this.xve = function () {
    xa6.Player.Continue();
    xvh = false;
  };
  this.xvh = function () {
    return xvh;
  };
  this.x2k3 = function (xxl) {};
  this.x2k4 = function (xxl) {};
  this.xvu = function (x2k5) {};
  this.x21e = function () {
    var x219 = 100;
    x219 = xa0(xa6.Audio.GetVolume() / 1024, 10) * 100;
    return x219;
  };
  this.x21a = function () {
    var x219 = xah.x21e();
    if (++x219 > 100) x219 = 100;
    var x2qe = xa0(x219 / 100 * 1024, 10);
    if (x2qe > 1023) x2qe = 1023;
    xa6.Audio.SetVolume(x2qe);
    return x219;
  };
  this.x21b = function () {
    var x219 = xah.x21e();
    if (--x219 < 0) x219 = 0;
    var x2qe = xa0(x219 / 100 * 1024, 10);
    xa6.Audio.SetVolume(x2qe);
    return x219;
  };
  this.x217 = function () {
    return xa6.Audio.GetMute() === 1;
  };
  this.x218 = function () {
    var x21c = xa6.Audio.GetMute();
    if (x21c === 1) x21c = 0; else x21c = 1;
    xa6.Audio.SetMute(x21c);
    return x21c === 1;
  };
  this.x2k6 = [x1ze.x1zf];
  this.x1xq = function (x2kf) {
    return true;
  };
  this.x21g = function () {
    var xz = {x205: 0, x206: 0};
    return xz;
  };
};
var x21d = 654321, x1ze = {x1zf: 0, x1zg: 1, x1zh: 2, x1zi: 3, x1zj: 4, x1zl: 5, x1zm: 6, x1zn: 7, x1zk: 8, x2qf: 99, x1zo: 9, x1zp: 10, x1zq: 11, x1zr: 12, x1zs: 13, x1zt: 101, x1zu: 102, x1zv: 103, x1zw: 104, x1zx: 105, x1zy: 106, x1zz: 107, x200: 108, x201: 109, x202: 110, x203: 111};
xt.x2iy = {x22q: new x2x.xg3, x22r: new x2x.xg3, x2jx: new x2x.xg3, x22v: new x2x.xg3, bufferingProgress: new x2x.xg3, x22w: new x2x.xg3, x22x: new x2x.xg3, xve: new x2x.xg3, x2je: new x2x.xg3, x2n1: new x2x.xg3, x2na: new x2x.xg3, x2js: new x2x.xg3, x2qg: new x2x.xg3};
var x2qh = function () {
  var _xg = xaa._xg, xhx = x2x.x30.xhx, xt = xaa.xt, xf = xaa.xf, x9n = xaa.x9n, xd8 = xaa.xd8, xah = this, x2nb = {type: xhx.xrx.xg, xry: xhx.xrz.xg}, x2qi = x9m, x1dm, x2ph = x9m, x2pj = false, x2j1 = 0, x2qj = 0, x2j3 = 0, x2qk = 0, x2ql = 12e3, x2qm = 8e3, x2qn = 220, x2qo = 0, x2qp = x9m, x2qq = false, x2qr = 0, x2qs = x9m, x2qt = xdr ? 35e3 : 6e4, x2qu = x9m, x2qv = false, x2j6 = x9o.getElementById("css5"), x2qw = false, xmn = {x22p: new x2x.xg3(this), x22q: new x2x.xg3(this), x22r: new x2x.xg3(this), x22s: new x2x.xg3(this), x22t: new x2x.xg3(this), x22v: new x2x.xg3(this), bufferingProgress: new x2x.xg3(this), x22w: new x2x.xg3(this), x22x: new x2x.xg3(this), xve: new x2x.xg3(this), seek: new x2x.xg3(this), x22u: new x2x.xg3(this), x150: new x2x.xg3(this), x22y: new x2x.xg3(this), x22z: new x2x.xg3(this), x230: new x2x.xg3(this), x231: new x2x.xg3(this), x232: new x2x.xg3(this), x233: new x2x.xg3(this), x234: new x2x.xg3(this)}, x2qx = xt.x2iy, xb8 = {};
  this.xmn = xmn;
  this.xb8 = xb8;
  this.x21d = x21d;
  function x2qy() {
    var x2qz = true;
    switch (xt.xu) {
      case xf.xh:
        if (xt.xv === 2010) {
          if (x2nb.xry === xhx.xrz.xs9) {}
        }
        break;
      case xf.xj:
        switch (x2nb.xry) {
          case xhx.xrz.xsj:
          case xhx.xrz.xsl:
          case xhx.xrz.xsm:
            x2qz = false;
            break;
        }
        break;
    }
    return x2qz;
  }
  function x1yn() {
    var x2r0 = xcz.x1zc[x1dm.xua];
    if (x1dm.xua) {
      xad.xae("uid :" + x1dm.xua);
      if (typeof x2r0 !== x9n) {
        x2r1(x2r0[0]);
      } else {
        x2r1(x2qi.x2k6[0]);
      }
    } else {
      x2r1(x2qi.x2k6[x2qk]);
    }
    x2r2();
    x2qo = 0;
    xmn.x22q.xge();
    x22w();
    xd8.xm4();
  }
  function x2r3() {
    xmn.x22x.xge();
  }
  function x1z3() {
    xmn.xve.xge();
  }
  function x2r4() {
    xad.x209("Buffering timeout");
    x2r5();
  }
  function x22v() {
    x2qw = true;
    x9q(x2qs);
    var x2r6 = x9p(x2r4, x2qt);
    x2qs = x2r6;
    xmn.x22v.xge();
  }
  function bufferingProgress(x2r7) {
    x2qw = true;
    xmn.bufferingProgress.xge(x2r7);
  }
  function x2r8() {
    x9q(x2qs);
  }
  function x22w() {
    x2qw = false;
    x2r8();
    xmn.x22w.xge();
  }
  function x2r5() {
    if (!x2r9()) {
      x2pj = false;
      xah.xko();
      xmn.x22r.xge();
    } else {
      xmn.x22u.xge();
    }
  }
  x2qx.x22q.xgc(function (xg4, xsx) {
    x1yn();
  });
  x2qx.x22r.xgc(function (xg4, xsx) {
    if (x2nb.type === xhx.xrx.xs3 || x2nb.type === xhx.xrx.xsh) {
      x2pj = false;
      xah.xko();
      xmn.x22s.xge();
    } else {
      x2r9();
      xmn.x22u.xge();
    }
  });
  var x2ra = false, x2rb = 0, x2rc = 0;
  x2qx.x2jx.xgc(function (xg4, xsx) {
    if (x2j1 > 0 && x2j1 !== xsx.x1mj) {
      x2ra = true;
    }
    x2j1 = xsx.x1mj;
    x2qj = xsx.x1mk;
    if (xt.xu !== xf.xi) {
      if (x2qj > 0.8) {
        if (x2j1 === 0) {
          if (x2nb.type === xhx.xrx.xs3) {
            if (++x2rc >= 3) {
              x2rc = 0;
              x2rb = 0;
              x2nb.type = xhx.xrx.xsa;
              xad.x209("[Player] Correct stream type to [" + x2nb.type + "](d:" + x2j1 + " p:" + x2qj + " dd:" + x2ra + ")");
              xmn.x22z.xge(x2nb.type);
            }
          }
        } else {
          if (x2nb.type === xhx.xrx.xsa && (x2nb.xry === xhx.xrz.xs9 || x2nb.xry === xhx.xrz.xs7) && !x2ra && x2j1 > 900 && x2j1 < 10800 && x2j1 - x2qj > 120 && !x1dm.xsb) {
            if (++x2rb >= 2) {
              x2rc = 0;
              x2rb = 0;
              x2nb.type = xhx.xrx.xs3;
              xad.x209("[Player] Correct stream type to [" + x2nb.type + "](d:" + x2j1 + " p:" + x2qj + " dd:" + x2ra + ")");
              xmn.x22z.xge(x2nb.type);
            }
          }
        }
      }
    }
    if (x2nb.type !== xhx.xrx.xs3 && x2nb.type !== xhx.xrx.xsh) {
      return;
    }
    xmn.x22t.xge(xsx);
  });
  x2qx.x22v.xgc(function (xg4, xsx) {
    x22v();
    if (!x2qi.x2j8) {
      x2r2();
    }
  });
  x2qx.bufferingProgress.xgc(function (xg4, xsx) {
    bufferingProgress(xsx);
  });
  x2qx.x22w.xgc(function (xg4, xsx) {
    x22w();
    if (!x2qi.x2j8) {
      x2r2();
    }
  });
  x2qx.x22x.xgc(function (xg4, xsx) {
    x2r3();
  });
  x2qx.xve.xgc(function (xg4, xsx) {
    x1z3();
  });
  x2qx.x2je.xgc(function (xg4, xsx) {
    x2r5();
  });
  x2qx.x2n1.xgc(function (xg4, xsx) {
    x2r5();
  });
  x2qx.x2na.xgc(function (xg4, xsx) {
    x2r5();
  });
  x2qx.x2js.xgc(function (xg4, xsx) {
    if (x2qr > 0 && x2qr <= 1) {
      xad.xae("restore position " + x2qr);
      xah.xvu(x2qr, true);
      x2qr = 0;
    }
    x2j1 = xsx.duration;
    x2j3 = xsx.xck;
    if (xt.xu === xf.xk) {
      xmn.x22q.xge();
    }
    xmn.x230.xge(xsx);
  });
  function x2rd() {
    x2qu = x19q("div", "css6e");
  }
  function x2re() {
    if (!x2qv) {
      x2j6.insertBefore(x2qu, x2j6.firstChild);
      x2qv = true;
    }
  }
  function x2rf() {
    if (x2qv) {
      x2qu = x2j6.removeChild(x2qu);
      x2qv = false;
    }
  }
  this.xmr = function () {
    x2rg();
    x2rd();
  };
  function x2rh(x2ri) {
    x2qu.style.background = "url(" + x2ri + ")";
    x2qu.style.backgroundSize = "contain";
    x2qu.style.backgroundPosition = "center";
    x2qu.style.backgroundRepeat = "no-repeat";
    x2re();
    x2qu.style.display = "block";
  }
  function x2rj() {
    xad.xie("play[" + x2nb.type + "|" + x2nb.xry + "]: " + x2ph);
    xmn.x22p.xge();
    x2pj = true;
    x2j1 = 0;
    x2qj = 0;
    x2ra = false;
    x2rc = 0;
    x2rb = 0;
    x2j3 = 0;
    if (x2nb.type === xhx.xrx.xsi) {
      x2rh(x2ph);
      x1yn();
    } else if (x1dm.broadcast) {
      x2rk();
    } else {
      if (x2nb.type === xhx.xrx.xsh || x2nb.type === xhx.xrx.xs8) {
        x2rh(x0 + "img/bg_audio.jpg");
      }
      x2rl(x2ph);
    }
  }
  function x2rm() {
    if (x2pj) {
      xad.xae("reconnect. position before reconnecting: " + x2qj + "; attempt: " + ++x2qo);
      if (x2j1 > 0) {
        x2qr = x2qj / x2j1;
      } else x2qr = 0;
      xmn.x150.xge();
      var x2rn = x9p(function () {
        xad.x209("reconnect");
        xah.xko(false);
        x2rj();
      }, 0);
      x2qp = x2rn;
    } else {
      xad.xae("reconnection skipped");
    }
    x2qq = false;
  }
  function x2r9() {
    x2r2();
    if (x2pj && x2qo < x2qn) {
      var x2ro = x2qo === 0 ? x2ql : x2qm;
      if (x2nb.xry === xhx.xrz.xsg) {
        x2ro = 0;
      }
      x2qq = true;
      var x2rn = x9p(x2rm, x2ro);
      x2qp = x2rn;
      xad.x209("reconnecting[" + x2qo + "] at " + x2ro + " ms: " + x2ph);
      return true;
    }
    return false;
  }
  function x2r2() {
    if (x2qq) {
      xad.xae("cancel reconnection: " + x2ph);
    }
    x9q(x2qp);
    x2qq = false;
  }
  this.xv8 = function (xrw) {
    if (!x2pj || x2ph !== xrw.xs5()) {
      xah.xko(false);
      x1dm = xrw;
      x2qr = 0;
      x2qo = 0;
      x2nb = xrw.xu9();
      xmn.x22z.xge(x2nb.type);
      if (x2nb.type === xhx.xrx.xg) {
        xmn.x233.xge(x1dm);
        xad.xb6("unknown link type:" + xrw.href);
      } else {
        var x2rp = x2qy();
        if (!x2rp) {
          xmn.x234.xge(x1dm);
        }
        x2ph = xrw.xs5();
        x2rj();
      }
    } else {
      x1yn();
      xah.xve();
    }
    return true;
  };
  this.x1yj = function () {
    return x1dm;
  };
  this.xko = function (x2rq) {
    x2qw = false;
    x2r8();
    if (typeof x2rq === x9n) {
      x2rq = true;
    }
    if (x1dm && x1dm.broadcast) {
      x2rr();
    } else {
      x2rs();
    }
    x2r2();
    if (x2rq) {
      xad.xae("[Player] reset current link");
      x2ph = "";
    }
    x2rf();
    if (x2pj) {
      x2pj = false;
      if (x2rq) {
        xmn.x22r.xge();
      }
    }
  };
  this.pause = function () {
    xad.xae("pause " + x2qi.xvh());
    if (!x2qw) {
      if (!x2qi.xvh()) {
        x2qi.pause();
        x2r3();
      }
      return true;
    }
    xad.xae("pause disabled while buffering");
    return false;
  };
  this.xve = function () {
    xad.xae("resume " + x2qi.xvh());
    if (x2qi.xvh()) {
      x2qi.xve();
      x1z3();
    }
    return true;
  };
  this.xvi = function () {
    if (!x2qi.xvh()) {
      xah.pause();
    } else {
      xah.xve();
    }
    var x22x = x2qi.xvh();
    xad.xae("toggle pause " + x22x);
    return x22x;
  };
  this.xvh = function () {
    return x2qi.xvh();
  };
  function x2rt() {
    var xfp = 0;
    if (x2j1 > 0) {
      xfp = xa0(x2j1 / 100, 10);
    }
    if (xfp < 10) xfp = 10;
    if (xfp > 60) xfp = 60;
    xad.xae("jump step: " + xfp);
    return xfp;
  }
  this.x2k3 = function () {
    if (x2nb.type === xhx.xrx.xs3 || x2nb.type === xhx.xrx.xsh) {
      xmn.seek.xge();
      x2qi.x2k3(x2rt());
      return true;
    }
    return false;
  };
  this.x2k4 = function () {
    if (x2nb.type === xhx.xrx.xs3 || x2nb.type === xhx.xrx.xsh) {
      xmn.seek.xge();
      x2qi.x2k4(x2rt());
      return true;
    }
    return false;
  };
  this.xvu = function (xvt, x2ru) {
    if (!x2ru) {
      xmn.seek.xge();
    }
    x2qi.xvu(xvt);
  };
  this.x21e = function () {
    return x2qi.x21e();
  };
  this.x21a = function () {
    return x2qi.x21a();
  };
  this.x21b = function () {
    return x2qi.x21b();
  };
  this.x217 = function () {
    return x2qi.x217();
  };
  this.x218 = function () {
    var x21c = x2qi.x218();
    return x21c;
  };
  function x2r1(x2kf) {
    if (x1dm && x1dm.broadcast) {
      return;
    }
    var x2rv = x2qk;
    if (x2qi.x2k6.length > 1) {
      if (typeof x2kf === x9n) {
        x2rv++;
        if (x2rv >= x2qi.x2k6.length) {
          x2rv = 0;
        }
      } else {
        for (var xd = 0; xd < x2qi.x2k6.length; xd++) {
          if (x2qi.x2k6[xd] === x2kf) {
            x2rv = xd;
            break;
          }
        }
      }
      xad.xae("change aspect ratio: " + x2qk + "(" + x2qi.x2k6[x2qk] + ")" + " -> " + x2rv + "(" + x2qi.x2k6[x2rv] + ")");
      if (x2qi.x1xq(x2qi.x2k6[x2rv])) {
        xmn.x231.xge({xrw: x1dm, x1zd: x2qi.x2k6[x2qk], x1za: x2qi.x2k6[x2rv], x1zb: x2qi.x2k6[0]});
        if (x2rv !== x2qk) {
          x2qk = x2rv;
        }
      }
    }
  }
  this.x1xq = function (x2kf) {
    if (xt.xu === xf.xi) {
      if (xt.xv <= 2014) {
        if (xaa.NetCastLaunchRATIO) {
          xaa.NetCastLaunchRATIO();
          return;
        }
        if (xaa.NetCastLaunchQMENU) {
          xaa.NetCastLaunchQMENU();
          return;
        }
      }
    }
    x2r1(x2kf);
  };
  this.x21g = function () {
    var x2rw = x2qi.x21g();
    xmn.x232.xge(x2rw);
  };
  var x2rl = function () {
    xad.xb6("platform player not set");
  };
  var x2rs = function () {
    xad.xb6("platform player not set");
  };
  function x2rg() {
    switch (xt.xu) {
      case xf.xg:
        xah.x2rx = new x2iw(x2j6);
        xah.x2rx.x2ja();
        xah.x2pk = new x2pd(x2j6);
        xah.x2pk.x2ja();
        xah.x2ry = new x2kj(x2j6);
        xah.x2ry.x2ja();
        xah.x2rz = new x2l3(x2j6);
        xah.x2rz.x2ja();
        x2qi = xah.x2rx;
        x2rl = x2s0;
        x2rs = x2s1;
        break;
      case xf.xj:
        xah.x2rx = new x2iw(x2j6);
        x2qi = xah.x2rx;
        if (xdr) {
          xah.x2pk = new x2pd(x2j6);
          x2qi = xah.x2pk;
        }
        x2rl = x2s2;
        x2rs = x2s3;
        break;
      case xf.xm:
        xah.x2rx = new x2iw(x2j6);
        xah.x2rx.x2ja();
        xah.x2s4 = new x2nw(x2j6);
        xah.x2s4.x2ja();
        x2qi = xah.x2s4;
        x2rl = x2s5;
        x2rs = x2s6;
        break;
      case xf.xo:
        xah.x2rx = new x2iw(x2j6);
        xah.x2rx.x2ja();
        x2qi = xah.x2rx;
        x2rl = x2s7;
        x2rs = x2s8;
        break;
      case xf.xh:
        xah.x2s9 = new x2ld(x2j6, "xkn.x2s9");
        x2qi = xah.x2s9;
        x2rl = x2sa;
        x2rs = x2sb;
        break;
      case xf.xl:
        xah.x2sc = new x2p3;
        x2qi = xah.x2sc;
        x2rl = x2sd;
        x2rs = x2se;
        break;
      case xf.xi:
        xah.x2pk = new x2pd(x2j6);
        xah.x2pk.x2ja();
        xah.x2rx = new x2iw(x2j6);
        xah.x2rx.x2ja();
        x2qi = xah.x2pk;
        x2rl = x2sf;
        x2rs = x2sg;
        break;
      case xf.xp:
        x2qi = new x2qb(x2j6);
        x2rl = x2sh;
        x2rs = x2si;
        break;
      case xf.xk:
      case xf.xn:
      case xf.xq:
      case xf.xr:
        xah.x2pk = new x2pd(x2j6);
        xah.x2pk.x2ja();
        xah.x2rx = new x2iw(x2j6);
        xah.x2rx.x2ja();
        x2qi = xah.x2pk;
        x2rl = x2sj;
        x2rs = x2sk;
        break;
    }
  }
  function x2sl(x2l2) {
    var x2q2 = "video/mpeg", x2sm = x2l2.toLowerCase();
    if (x2nb.type === xhx.xrx.xsa || x2nb.type === xhx.xrx.xs3 || x2nb.type === xhx.xrx.xg) {
      switch (x2nb.xry) {
        case xhx.xrz.xs9:
          x2q2 = "application/vnd.apple.mpegurl";
          break;
        default:
          x2q2 = "video/mpeg";
          if (x2sm.indexOf(".wmv") > 0) {
            x2q2 = "video/x-ms-wmv";
          } else if (x2sm.indexOf(".mkv") > 0 || x2sm.indexOf(".mov") > 0 || x2sm.indexOf(".mp4") > 0 || x2sm.indexOf(".mpg") > 0) {
            x2q2 = "video/mp4";
          } else if (x2sm.indexOf(".mpd") > 0) {
            x2q2 = "application/dash+xml";
          } else if (x2sm.indexOf(".ssm/manifest") > 0) {
            x2q2 = "application/vnd.ms-sstr+xml";
          }
      }
    } else if (x2nb.type === xhx.xrx.xsh || x2nb.type === xhx.xrx.xs8) {
      if (x2sm.indexOf(".aac") > 0) {
        x2q2 = "audio/aac";
      } else if (x2sm.indexOf(".mp3")) {
        x2q2 = "audio/mp3";
      }
    }
    return x2q2;
  }
  function x2s0(x2l2) {
    var x2q1, x2sn = false;
    if (x2nb.xry === xhx.xrz.xs9) {
      var x2so = xcz.xd0(xcz.xd1.x2bf);
      if (x2so === xcz.x2dn.x2dp) {
        x2qi = xah.x2rz;
        x2qi.x2j9();
        x2sn = true;
      } else if (x2so === xcz.x2dn.x2de) {
        x2qi = xah.x2ry;
        x2qi.x2j9();
        x2sn = true;
      }
      if (x2sn) {
        x2qi.play(x2l2);
        return;
      }
    }
    if (x2nb.type === xhx.xrx.xs3) {
      x2q1 = xcz.xd0(xcz.xd1.x2bc);
    } else {
      x2q1 = xcz.xd0(xcz.xd1.x2bd);
    }
    if (x2q1 === xcz.x2da.x2dd) {
      var x2q2 = x2sl(x2l2);
      x2qi = xah.x2pk;
      x2qi.x2j9();
      x2qi.play(x2l2, xah.x2pk.x2pe.xju, x2q2);
    } else {
      x2qi = xah.x2rx;
      x2qi.x2j9();
      x2qi.play(x2l2);
    }
  }
  function x2s2(x2l2) {
    var x2q1;
    if (xdr) {
      if (x2nb.type === xhx.xrx.xs3) {
        x2q1 = xcz.xd0(xcz.xd1.x2bc);
      } else {
        x2q1 = xcz.xd0(xcz.xd1.x2bd);
      }
    } else {
      x2q1 = xcz.x2da.x2dc;
    }
    if (x2q1 === xcz.x2da.x2dd) {
      x2qi = xah.x2pk;
      x2qi.x2j9();
      x2qi.play(x2l2, xah.x2pk.x2pe.xju);
    } else {
      x2qi = xah.x2rx;
      x2qi.x2j9();
      x2qi.play(x2l2);
    }
  }
  function x2s5(x2l2) {
    var x2q1;
    if (x2nb.type === xhx.xrx.xs3) {
      x2q1 = xcz.xd0(xcz.xd1.x2bc);
    } else {
      x2q1 = xcz.xd0(xcz.xd1.x2bd);
    }
    if (x2q1 === xcz.x2da.x2df) {
      x2qi = xah.x2s4;
      x2qi.x2j9();
      x2qi.play(x2l2);
    } else {
      var x2q2 = x2sl(x2l2);
      x2qi = xah.x2rx;
      x2qi.x2j9();
      x2qi.play(x2l2, x2q2);
    }
  }
  function x2s7(x2l2) {
    var x2q2 = x2sl(x2l2);
    x2qi = xah.x2rx;
    x2qi.x2j9();
    x2qi.play(x2l2, x2q2);
  }
  function x2sa(x2l2) {
    xah.x2s9.play(x2l2, x2nb);
  }
  function x2sd(x2l2) {
    xah.x2sc.play(x2l2);
  }
  function x2sf(x2l2) {
    var x2q1, x2sp;
    if (x2nb.type === xhx.xrx.xs3) {
      x2q1 = xcz.xd0(xcz.xd1.x2bc);
      x2sp = xah.x2pk.x2pe.xju;
    } else {
      x2q1 = xcz.xd0(xcz.xd1.x2bd);
      x2sp = xah.x2pk.x2pe.x2pf;
    }
    if (x2q1 === xcz.x2da.x2dd) {
      x2qi = xah.x2pk;
      x2qi.x2j9();
      x2qi.play(x2l2, x2sp);
    } else {
      x2qi = xah.x2rx;
      x2qi.x2j9();
      x2qi.play(x2l2);
    }
  }
  function x2sh(x2l2) {
    x2qi.play(x2l2);
  }
  function x2sj(x2l2) {
    var x2q1, x2q2;
    if (x2nb.type === xhx.xrx.xs3) {
      x2q1 = xcz.xd0(xcz.xd1.x2bc);
    } else {
      x2q1 = xcz.xd0(xcz.xd1.x2bd);
    }
    if (x2q1 === xcz.x2da.x2dd) {
      x2qi = xah.x2pk;
      x2qi.x2j9();
      x2qi.play(x2l2, xah.x2pk.x2pe.xju);
    } else {
      x2q2 = x2sl(x2l2);
      x2qi = xah.x2rx;
      x2qi.x2j9();
      x2qi.play(x2l2, x2q2);
    }
  }
  function x2s1() {
    x2qi.stop();
    x2qi.x2ja();
  }
  function x2s3() {
    x2qi.stop();
    x2qi.x2ja();
  }
  function x2s6() {
    xah.x2s4.stop();
    xah.x2s4.x2ja();
    xah.x2rx.stop();
    xah.x2rx.x2ja();
  }
  function x2s8() {
    x2qi.stop();
    xah.x2rx.x2ja();
  }
  function x2sb() {
    xah.x2s9.stop();
  }
  function x2se() {
    xah.x2sc.stop();
  }
  function x2sg() {
    x2qi.stop();
    xah.x2pk.x2ja();
    xah.x2rx.x2ja();
  }
  function x2si() {
    x2qi.stop();
  }
  function x2sk() {
    x2qi.stop();
    xah.x2pk.x2ja();
    xah.x2rx.x2ja();
  }
  function x2rk() {
    switch (xt.xu) {
      case xf.xm:
        var params = x1dm.href.split("|");
        xad.xae("play tizen broadcast " + params[1] + " " + params[2]);
        var xil = {};
        xil.onsuccess = function () {
          xad.xae("Tune() is successfully done. And there is a signal.");
          x2j6.style.display = "none";
          var xh9 = x9o.body;
          xh9.style.background = "transparent";
          try {
            xa7.tvwindow.show(function () {}, function () {}, ["0%", "0%", "100%", "100%"], "MAIN", "BEHIND");
            xmn.x22q.xge();
          } catch (x12) {
            xmn.x22u.xge();
          }
        };
        xil.onnosignal = function () {
          xad.x209("Tune() is successfully done. But there is no signal.");
        };
        var xio = function () {
          xad.xb6("Tune() is error.");
        };
        xmn.x22p.xge();
        try {
          xa7.tvwindow.hide(function () {}, function () {}, "MAIN");
          var x2sq = {x33: params[1], x34: params[2]};
          xa7.tvchannel.tune(x2sq, xil, xio, "MAIN");
        } catch (error) {
          xad.xb6("Error name = " + error.name + ", Error message = " + error.message);
        }
        break;
    }
  }
  function x2rr() {
    switch (xt.xu) {
      case xf.xm:
        x2j6.style.display = "";
        var xh9 = x9o.body;
        xh9.style.background = "#000003";
        xa7.tvwindow.hide(function () {}, function () {}, "MAIN");
        break;
    }
  }
};
xaa.xkn = new x2qh;
xaa.x1b = true;
