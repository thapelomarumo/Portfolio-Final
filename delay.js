$('a').click(function (e) {
    e.preventDefault(); 
    setTimeout(function () {
        window.location.href = "$a";
    }, 10000);
});
