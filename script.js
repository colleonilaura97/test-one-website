
function fattoriale (form) {
    var n = form.inputbox.value;
    var risultato = 1;

    for (var i=1; i<n; i = i+1){
        risultato = risultato*(i+1);
    }
    alert (risultato);
}