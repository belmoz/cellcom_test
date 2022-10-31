import { create, multyAppend } from "../utils/helpers.js";

export function paginator(page, totalPages, handleChangePage) {
    const paginRow = create('div', 'pagination');
    const btnPrev = create('button', 'pagination__btn pagination__btn_prev');
    const btnNext = create('button', 'pagination__btn pagination__btn_next');
    const pageValue = create('span', 'pagination__value');
    pageValue.innerText = page;
    btnPrev.innerText = 'prev';
    btnNext.innerText = 'next';
    multyAppend(paginRow, [btnPrev, pageValue, btnNext]);

    page === 1 ? btnPrev.classList.add('disabled') : btnPrev.classList.remove('disabled');
    page === totalPages ? btnNext.classList.add('disabled') : btnNext.classList.remove('disabled');

    btnPrev.onclick = e => {
        e.preventDefault();
        if (page > 1) {
            handleChangePage(page - 1);
        }
    }
    btnNext.onclick = e => {
        e.preventDefault();
        if (page < totalPages || totalPages === 0) {
            handleChangePage(page + 1);
        }

    }

    return paginRow;
}

