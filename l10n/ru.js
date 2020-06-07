define(function(require, exports, module) {
    return module.exports = {
        'template': {
            'default': 'Диаграмма связей (Mind map)',
            'tianpan': 'Общий вид,
            'structure': 'Структурная схема',
            'filetree': 'Организационная структура каталога',
            'right': 'Логическая структурная схема',
            'fish-bone': 'Скелетная схема'
        },
        'theme': {
            'classic': 'Классическая тема',
            'classic-compact': 'Компактная классическая тема',
            'snow': 'Нежно-холодная',
            'snow-compact': 'Компактная холодная',
            'fish': 'Скелетная схема',
            'wire': 'Каркасная',
            'fresh-red': 'Красная',
            'fresh-soil': 'Тёмно желтая',
            'fresh-green': 'Художественный Зеленый',
            'fresh-blue': 'Небесно голубой',
            'fresh-purple': 'Фиолетовый',
            'fresh-pink': 'Тёмно-розовый',
            'fresh-red-compat': 'Компактный красный',
            'fresh-soil-compat': 'Компактный желтый',
            'fresh-green-compat': 'Компактный зелёный',
            'fresh-blue-compat': 'Компактный голубой',
            'fresh-purple-compat': 'Компактный пурпур',
            'fresh-pink-compat': 'Компактный розовый',
            'tianpan': 'Классический',
            'tianpan-compact': 'Компактный'
        },
        'maintopic': 'Основная тема',
        'topic': 'Название ветви',
        'panels': {
            'history': 'История',
            'template': 'Шабллон',
            'theme': 'Оболочка',
            'layout': 'Расположение',
            'style': 'Стиль',
            'font': 'Текст',
            'color': 'Цвет',
            'background': 'Фон',
            'insert': 'Вставить',
            'arrange': 'Выровнять',
            'nodeop': 'Текущий',
            'priority': 'Приоритет',
            'progress': 'Прогресс',
            'resource': 'Источник',
            'note': 'Примечание',
            'attachment': 'Вложение',
            'word': 'Текст'
        },
        'ui': {
            'command': {
                'appendsiblingnode': 'Добавить родственный узел',
                'appendparentnode': 'Добавить родительский узел',
                'appendchildnode': 'Добавить дочерний узел',
                'removenode': 'Удалить',
                'editnode': 'Редактировать',
                'arrangeup': 'Наверх',
                'arrangedown': 'Вниз',
                'resetlayout': 'Сброс макета',
                'expandtoleaf': 'Развернуть все узлы',
                'expandtolevel1': 'Развернуть до 1 уровня',
                'expandtolevel2': 'Развернуть до 2 уровня',
                'expandtolevel3': 'Развернуть до 3 уровня',
                'expandtolevel4': 'Развернуть до 4 уровня',
                'expandtolevel5': 'Развернуть до 5 уровня',
                'expandtolevel6': 'Развернуть до 6 уровня',
                'fullscreen': 'Во весь экран',
                'outline': 'Обвести'
            },
            'search': 'Найти',
            'expandtoleaf': 'Развернуть',
            'back': 'Вернуться',
            'undo': 'Отмена последнего действия (Ctrl + Z)',
            'redo': 'Повтор последнего действия (Ctrl + Y)',
            'tabs': {
                'idea': 'Идея',
                'appearence': 'Общий вид',
                'view': 'Просмотр'
            },
            'bold': 'Жирный',
            'italic': 'Курсив',
            'forecolor': 'Цвет шрифта',
            'fontfamily': 'Шрифт',
            'fontsize': 'Размер',
            'layoutstyle': 'Тема',
            'node': 'Действие с узлом',
            'hand': 'Позволить перетаскивание',
            'camera': 'Вернуться к корневому узлу',
            'zoom-in': 'Увеличить масштаб (Ctrl+)',
            'zoom-out': 'Уменьшить масштаб (Ctrl-)',
            'markers': 'Тэг',
            'help': 'Справка',
            'preference': 'Предпочтеня',
            'expandnode': 'Разместить на одном листе',
            'collapsenode': 'Скрыть подуровни',
            'template': 'Щаблон',
            'theme': 'Тема',
            'clearstyle': 'Отмена стиля',
            'copystyle': 'Скопировать стиль',
            'pastestyle': 'Применить стиль',
            'appendsiblingnode': 'Та же тема',
            'appendchildnode': 'Применить тему для ветви',
            'arrangeup': 'Тема как у верхнего узла',
            'arrangedown': 'Тема для ветви ниже',
            'editnode': 'Изменить узел',
            'removenode': 'удалить узел',
            'priority': 'Приоритет',
            'progress': {
                'p1': 'Ожидаем',
                'p2': 'Выполнено 1/8',
                'p3': 'Выполнено 1/4',
                'p4': 'Выполнено 3/8',
                'p5': 'Выполнено половина',
                'p6': 'Выполнено 5/8',
                'p7': 'Выполнено 3/4',
                'p8': 'Выполнено 7/8',
                'p9': 'Готово!',
                'p0': 'Очистка'
            },
            'resource': {
                'add': 'Добавить'
            },
            'link': 'Гиперссылка',
            'image': 'Картинка',
            'note': 'Примечание',
            'insertlink': 'Вставить гиперссылку',
            'insertimage': 'Вставить картинку',
            'insertnote': 'Вставить примечание',
            'removelink': 'Удалить имеющуюся гиперссылку',
            'removeimage': 'Удалить имеющееся изображение',
            'removenote': 'Удалить имеющуееся примечание',
            'resetlayout': 'Сброс макета',
            'navigator': 'Навигатор',
            'selectall': 'Выделить всё',
            'selectrevert': 'Отмена выделения',
            'selectsiblings': 'Выбрать узлы того же уровня',
            'selectlevel': 'Выбрать уровень',
            'selectpath': 'Выбрать путь',
            'selecttree': 'Выбрать ветвь',
            'noteeditor': {
                'title': 'Примечание',
                'hint': 'Поддержка грамматики ГитХаб',
                'placeholder': 'Выберите узел для редактирования примечаний'
            },
            'dialog': {
                'image': {
                    'title': 'Изображение',
                    'imagesearch': 'Поиск изображений',
                    'keyword': 'Ключерые слова：',
                    'placeholder': 'Введите ключевые слова для поиска',
                    'baidu': 'Поиск',
                    'linkimage': 'Привязанное изображение',
                    'linkurl': 'Ссылка URL：',
                    'placeholder2': 'Ссылка должна начинаться с http(s)://',
                    'imagehint': 'Название картинки：',
                    'placeholder3': 'Возможно：Текст, появляющийся при наведении курсора на изображение',
                    'preview': 'Предпросмотр изображения：',
                    'uploadimage': 'Загрузить изображение',
                    'selectfile': 'Выберите файл изображения...',
                    'ok': 'OK',
                    'cancel': 'Отмена',
                    'formatinfo': 'Изображение должно быть в формате jpg、gif or png'
                },
                'hyperlink': {
                    'title': 'Название гиперссылкы',
                    'linkurl': 'URL гиперссылки：',
                    'linkhint': 'Примечание：',
                    'placeholder': 'Гиперссылка должна начинаться с http(s):// или ftp://',
                    'placeholder2': 'Возможно：Текст, появляющийся при наведении курсора на гиперссылке',
                    'ok': 'OK',
                    'cancel': 'Отмена'

                },
                'exportnode': {
                    'title': 'Экспорт узла',
                    'ok': 'OK',
                    'cancel': 'Отмена'
                }
            }
        },
        'runtime': {
            'minder': {
                'maintopic': 'Основное Проект'
            },
            'node': {
                'arrangeup': 'Упорядочить выше',
                'appendchildnode': 'Прикрепить дочерний узел',
                'appendsiblingnode': 'Прикрепить соседний узел',
                'arrangedown': 'Упорядочить ниже',
                'removenode': 'Удалить',
                'appendparentnode': 'Прикрепить родительский узел',
                'selectall': 'Выбрать всё',
                'topic': 'Заголовок темы',
                'importnode': 'Импортировать узел',
                'exportnode': 'Экспортировать узел'
            },
            'input': {
                'edit': 'Изменить'
            },
            'priority': {
                'main': 'Приоритет',
                'remove': 'Удалить',
                'esc': 'Отмена'
            },
            'progress': {
                'main': 'Прогресс',
                'remove': 'Удалить',
                'esc': 'Отменить'
            },
            'history': {
                'undo': 'Отменить последнее',
                'redo': 'Повторить последнее'
            }
        }
    };
});
