var debounce = function(fn, t) {
    let timerId;
    return function(...args) {
        clearTimeout(timerId);

        timerId = setTimeout(()=> {
            func.apply(this, args);
        }, t);
    }
};
