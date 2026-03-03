/**
 * =============================================================================
 * ЗАГРУЗЧИК ДАННЫХ
 * =============================================================================
 */

class DataLoader {
    constructor() {
        this.cardsData = {};
    }

    async loadCards() {
        const stored = localStorage.getItem(DANAYI_CONFIG.storageKey);
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                console.error('Error parsing localStorage', e);
            }
        }

        try {
            const response = await fetch(DANAYI_CONFIG.dataFile);
            if (response.ok) {
                const data = await response.json();
                return data;
            }
        } catch (e) {
            console.error('Error loading JSON', e);
        }

        return {};
    }

    saveCards(cards) {
        localStorage.setItem(DANAYI_CONFIG.storageKey, JSON.stringify(cards));
    }

    t(key) {
        return DANAYI_CONFIG.translations[key] || key;
    }

    clearData() {
        localStorage.removeItem(DANAYI_CONFIG.storageKey);
    }
}

window.dataLoader = new DataLoader();
