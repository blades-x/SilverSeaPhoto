// always declare all variables at the scope start
// the ok var was declared inside the "onclick" function scope,
//   so it was only available inside that function.
var ok;
var button = document.querySelectorAll('img.prof_pic')[0]; // was mispelled as "getElementByID"

button.onclick = function () {
    ok = true;
    // now that ok is set, we call the function that will check OK and do stuff.
    showDiv();
};

function showDiv() {
    // This code was run directly on page load only, ok was "undefined" at that time.
    // It was never run again, instead, put it in a function that is called on click.
    // This way, it is called after ok is true;

    var div; // declare variables at scope start, again.

    // no need to test ok == true, if ok is true the "if" will pass
    if (ok) {
        div = document.createElement('div');
        div.style.backgroundColor = "black";
        div.style.position = "absolute";
        div.style.width = "100%";
        div.style.height = "500px";
        div.style.zIndex = "100";
        div.style.position="fixed";
        div.style.opacity = ".8";
        // the div was inserted, but it had no content
        // divs with no content have no size, so the color is not visible
        div.textContent = 'hello';
        div.style.color = '#FFF';

        document.getElementsByTagName('body')[0].appendChild(div);
    };
}