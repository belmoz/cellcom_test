
export function create(el, className) {
    const res = document.createElement(el);
    if (className) {
        res.className = className;
    }
    return res;
}

export function multyAppend(main, arr) {
    main.append(arr[0]);
    arr.shift();
    if (arr.length != 0) {
        multyAppend(main, arr);
    }
    return main;
}