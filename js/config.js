/**
 * =============================================================================
 * КОНФИГУРАЦИЯ ПРИЛОЖЕНИЯ
 * Настройки, языки, пути к данным
 * =============================================================================
 */

const DANAYI_CONFIG = {
    // === ЯЗЫКИ ===
    languages: {
        en: {
            name: 'English',
            enabled: true,
            dataFile: 'data/cards-en.json'
        },
        ru: {
            name: 'Русский',
            enabled: true,
            dataFile: 'data/cards-ru.json'
        },
        fa: {
            name: 'فارسی',
            enabled: false,  // Деактивирован
            dataFile: 'data/cards-fa.json'
        },
        es: {
            name: 'Español',
            enabled: false,  // Деактивирован
            dataFile: 'data/cards-es.json'
        },
        kk: {
            name: 'Қазақша',
            enabled: false,  // Деактивирован
            dataFile: 'data/cards-kk.json'
        }
    },
    
    // === Язык по умолчанию ===
    defaultLanguage: 'en',
    
    // === Ключ для localStorage ===
    storageKey: 'danayi_cards_data',
    
    // === Типы карточек ===
    cardTypes: [
        { id: 'square', label: '1x1' },
        { id: 'rectangle', label: '2x1' },
        { id: 'full', label: 'FULL' }
    ],
    
    // === Переводы интерфейса ===
    translations: {
        en: {
            block1_title: 'MAIN COLLECTION',
            block2_title: 'SECONDARY COLLECTION',
            add_card: '+ ADD_CARD',
            new_card: 'NEW_CARD',
            edit_card: 'EDIT_CARD',
            side1_label: 'FRONT_SIDE:',
            side2_label: 'BACK_SIDE:',
            card_type: 'CARD_TYPE:',
            save: 'SAVE',
            cancel: 'CANCEL',
            delete: 'DELETE',
            move_left: 'MOVE_LEFT',
            move_right: 'MOVE_RIGHT',
            edit: 'EDIT',
            no_cards: 'NO_CARDS_AVAILABLE',
            fill_front: 'FILL_FRONT_SIDE',
            card_added: 'CARD_ADDED',
            card_updated: 'CARD_UPDATED',
            card_deleted: 'CARD_DELETED',
            card_moved: 'CARD_MOVED'
        },
        ru: {
            block1_title: 'ОСНОВНАЯ КОЛЛЕКЦИЯ',
            block2_title: 'ВТОРИЧНАЯ КОЛЛЕКЦИЯ',
            add_card: '+ ДОБАВИТЬ',
            new_card: 'НОВАЯ КАРТОЧКА',
            edit_card: 'РЕДАКТИРОВАТЬ',
            side1_label: 'ЛИЦЕВАЯ:',
            side2_label: 'ОБОРОТНАЯ:',
            card_type: 'ТИП:',
            save: 'СОХРАНИТЬ',
            cancel: 'ОТМЕНА',
            delete: 'УДАЛИТЬ',
            move_left: 'ВЛЕВО',
            move_right: 'ВПРАВО',
            edit: 'ИЗМЕНИТЬ',
            no_cards: 'НЕТ КАРТОЧЕК',
            fill_front: 'ЗАПОЛНИТЕ ЛИЦЕВУЮ',
            card_added: 'КАРТОЧКА ДОБАВЛЕНА',
            card_updated: 'КАРТОЧКА ОБНОВЛЕНА',
            card_deleted: 'КАРТОЧКА УДАЛЕНА',
            card_moved: 'КАРТОЧКА ПЕРЕМЕЩЕНА'
        }
    }
};
