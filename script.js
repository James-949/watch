var th = 0;
var dq = 0;
var sa = 0;
var i = 0;
while (i < 1) {
    i++;
    document.getElementById("sa").innerHTML = sa;
    document.getElementById("dq").innerHTML = dq;
    document.getElementById("th").innerHTML = th;
    if (th = 576) {
        th = 0;
        dq = 1;
    } else if (dq = 30) {
        dq = 0;
        sa = 1;
    } else if (sa = 5) {
        sa = 0;
    }
}
