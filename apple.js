let btn = document.querySelector('button.deals')
let modal = document.querySelector('.item_deals_modal')
let modalBg = document.querySelector('.item-deals-modal-bg')
let modalClose = document.querySelector('.close')

btn.onclick = () =>{
    modal.style.display = "block"
    modal.style.top = "80%"
    modalBg.style.display = "block"
    modalClose.style.display = 'block'
    setTimeout(() =>{
        modalBg.style.opacity = "1"
        modalClose.style.opacity = '1'
    }, 300)
}
class ItcAccordion {
    constructor(target, config) {
        this._el = typeof target === 'string' ? document.querySelector(target) : target;
        const defaultConfig = {
            alwaysOpen: true
        };
        this._config = Object.assign(defaultConfig, config);
        this.addEventListener();
    }
    addEventListener() {
        this._el.addEventListener('click', (e) => {
            const elHeader = e.target.closest('.accordion__header');
            if (!elHeader) {
                return;
            }
            if (!this._config.alwaysOpen) {
                const elOpenItem = this._el.querySelector('.accordion__item_show');
                if (elOpenItem) {
                    elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
                }
            }
            elHeader.parentElement.classList.toggle('accordion__item_show');
        });
    }
}

new ItcAccordion('#accordion-1');
new ItcAccordion('#accordion-2');

