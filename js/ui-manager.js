/**
 * =============================================================================
 * МЕНЕДЖЕР ИНТЕРФЕЙСА
 * =============================================================================
 */

class UIManager {
    constructor(dataLoader, cardManager) {
        this.dataLoader = dataLoader;
        this.cardManager = cardManager;
        this.currentCardId = null;
    }

    init() {
        this.attachGlobalListeners();
        this.initResetButton();
    }

    attachGlobalListeners() {
        // Закрытие контекстного меню
        document.addEventListener('click', (e) => {
            const menu = document.getElementById('context-menu');
            if (menu && !menu.contains(e.target)) {
                menu.classList.add('hidden');
            }
        });

        // Закрытие модального окна
        document.getElementById('modal-close').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('modal-overlay').addEventListener('click', (e) => {
            if (e.target.id === 'modal-overlay') {
                this.closeModal();
            }
        });
    }

    initResetButton() {
        const resetBtn = document.getElementById('reset-data');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm('RESET ALL DATA?')) {
                    this.cardManager.resetAllCards();
                    this.showNotice(this.dataLoader.t('data_reset'));
                }
            });
        }
    }

    showContextMenu(e, cardEl) {
        const menu = document.getElementById('context-menu');
        menu.innerHTML = '';
        menu.classList.remove('hidden');

        const x = e.pageX;
        const y = e.pageY;
        menu.style.left = `${x}px`;
        menu.style.top = `${y}px`;

        // Коррекция позиции
        const rect = menu.getBoundingClientRect();
        if (x + rect.width > window.innerWidth) {
            menu.style.left = `${window.innerWidth - rect.width - 10}px`;
        }
        if (y + rect.height > window.innerHeight) {
            menu.style.top = `${window.innerHeight - rect.height - 10}px`;
        }

        const createItem = (text, onClick) => {
            const item = document.createElement('div');
            item.className = 'context-menu-item';
            item.textContent = text;
            item.addEventListener('click', () => {
                menu.classList.add('hidden');
                onClick();
            });
            return item;
        };

        const createSeparator = () => {
            const sep = document.createElement('div');
            sep.className = 'context-menu-separator';
            return sep;
        };

        this.currentCardId = cardEl.getAttribute('data-card-id');

        menu.appendChild(createItem(this.dataLoader.t('edit_card'), () => {
            this.openEditModal(this.currentCardId);
        }));

        menu.appendChild(createSeparator());

        // Типы карточек
        DANAYI_CONFIG.cardTypes.forEach(type => {
            menu.appendChild(createItem(type.label, () => {
                this.cardManager.changeCardType(this.currentCardId, type.id);
            }));
        });

        menu.appendChild(createSeparator());

        menu.appendChild(createItem(this.dataLoader.t('delete'), () => {
            this.cardManager.deleteCard(this.currentCardId);
        }));
    }

    openEditModal(cardId) {
        const cardData = this.cardManager.cards[cardId] || {};
        const cardEl = document.querySelector(`.inline-card[data-card-id="${cardId}"]`);

        const html = `
            <div class="danayi-modal-row">
                <label>${'TYPE:'}</label>
                <div class="danayi-type-options">
                    ${DANAYI_CONFIG.cardTypes.map((t, i) => `
                        <button class="danayi-type-btn ${cardData.type === t.id ? 'active' : ''}" 
                                data-type="${t.id}">${t.label}</button>
                    `).join('')}
                </div>
            </div>
            <div class="danayi-modal-row">
                <label>${'FRONT:'}</label>
                <textarea class="danayi-modal-input" id="input-side1" rows="2">${cardData.side1 || ''}</textarea>
            </div>
            <div class="danayi-modal-row">
                <label>${'BACK:'}</label>
                <textarea class="danayi-modal-input" id="input-side2" rows="2">${cardData.side2 || ''}</textarea>
            </div>
            <div class="danayi-modal-buttons">
                <button id="modal-save">${this.dataLoader.t('save')}</button>
                <button id="modal-cancel">${this.dataLoader.t('cancel')}</button>
            </div>
        `;

        document.getElementById('modal-title').textContent = this.dataLoader.t('edit_card');
        document.getElementById('modal-body').innerHTML = html;
        document.getElementById('modal-overlay').classList.remove('hidden');

        this.attachModalListeners(cardId);
    }

    attachModalListeners(cardId) {
        const overlay = document.getElementById('modal-overlay');
        const typeBtns = overlay.querySelectorAll('.danayi-type-btn');
        let selectedType = this.cardManager.cards[cardId]?.type || 'medium';

        typeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                typeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedType = btn.getAttribute('data-type');
            });
        });

        document.getElementById('modal-cancel').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('modal-save').addEventListener('click', () => {
            const side1 = document.getElementById('input-side1').value.trim();
            const side2 = document.getElementById('input-side2').value.trim();

            if (!side1) {
                this.showNotice(this.dataLoader.t('fill_front'));
                return;
            }

            this.cardManager.updateCard(cardId, side1, side2, selectedType);
            this.closeModal();
        });
    }

    closeModal() {
        document.getElementById('modal-overlay').classList.add('hidden');
        this.currentCardId = null;
    }

    showNotice(message) {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 250);
        }, 2500);
    }
}
