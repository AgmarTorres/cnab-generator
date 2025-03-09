function resizeString(input, size){
    if (input.length > size) return texto.slice(0, size);

    return input;
}

function fillSpaceLeft(input = "", size) {
    return resizeString(input).padStart(size, ' ');
}

function fillSpaceRight(input = "", size) {
    return resizeString(input).padEnd(size, ' ');
}

function fillZerosLeft(input = "", size) {
    return resizeString(input).padStart(size, '0');
}

function fillZerosRight(input = "", size) {
    return resizeString(input).padEnd(size, '0');
}

module.exports = {
    fillSpaceLeft,
    fillSpaceRight,
    fillZerosLeft,
    fillZerosRight,
}