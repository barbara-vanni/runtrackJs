document.addEventListener("DOMContentLoaded", function() {
    let textarea = document.getElementById("keylogger");

    function logKey(e) {
        if (e.key >= 'a' && e.key <= 'z') {
            if (e.target.id === textarea) {
                textarea.value += e.key + e.key;
            }
            textarea.value += e.key;
        }
    }

    window.addEventListener("keydown", logKey);
});