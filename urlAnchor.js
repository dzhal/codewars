function removeUrlAnchor(url) {
    // TODO: complete
    if (!url.match(/.+(#)/gi)) return url;
    return url.match(/.+(#)/gi)[0]?.split('#')[0] ? url.match(/.+(#)/gi)[0].split('#')[0] : url;
}

removeUrlAnchor('www.codewars.com#about')
console.log(removeUrlAnchor('www.codewars.com/katas/'));