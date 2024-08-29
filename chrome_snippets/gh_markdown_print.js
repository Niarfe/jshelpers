/*
Set this script in Dev Tools snippets and run on github markdown page

Copies relevant content.
Removes everything from body.
Then places just the content back on body.
*/


function remove_all_class(theclass) {
    var linkicons = document.getElementsByClassName(
        theclass
    );
    while(linkicons[0]) {
        linkicons[0].parentNode.removeChild(linkicons[0]);
    };
}
remove_all_class("zeroclipboard-container");
remove_all_class('octicon octicon-link');

// Set EVERYTHING to color black for the printer
var allthethings = document.getElementsByTagName("*");
for (let idx of allthethings) {
    idx.style.color = "black";
}

// Secure the goods
let markdownContent = document.getElementsByClassName(
    "markdown-body entry-content container-lg"
)[0];

// Clear the table
var body = document.getElementsByTagName("BODY")[0];
while (body.firstChild) {
    body.firstChild.remove();
}

// Put the goods on the table
document.body.appendChild(markdownContent);
