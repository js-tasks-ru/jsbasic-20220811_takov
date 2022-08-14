function truncate(str, n) {
    if (str.length > n) {
        return str.slice(0, n - 1) + "…";
    }

    return str;
}

truncate('Вот, что мне хотелось бы сказать на эту тему:', 20) === 'Вот, что мне хотело…';
truncate('Всем привет!', 20) === 'Всем привет!';