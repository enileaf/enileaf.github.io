/**
 * =============================================================================
 * КОНФИГУРАЦИЯ ПРИЛОЖЕНИЯ
 * =============================================================================
 */

const DANAYI_CONFIG = {
    // === Данные карточек ===
    dataFile: 'data/cards.json',
    
    // === Ключ для localStorage ===
    storageKey: 'danayi_inline_cards',
    
    // === Тема по умолчанию ===
    defaultTheme: 'dark',
    themeStorageKey: 'danayi_theme',
    
    // === Типы карточек ===
    cardTypes: [
        { id: 'compact', label: 'S' },
        { id: 'medium', label: 'M' },
        { id: 'wide', label: 'L' }
    ],
    
    // === Переводы интерфейса ===
    translations: {
        edit_card: 'EDIT_CARD',
        delete: 'DELETE',
        change_type: 'CHANGE_TYPE',
        save: 'SAVE',
        cancel: 'CANCEL',
        fill_front: 'FILL_FRONT_SIDE',
        card_updated: 'CARD_UPDATED',
        card_deleted: 'CARD_DELETED',
        type_changed: 'TYPE_CHANGED',
        data_reset: 'DATA_RESET'
    }
};
