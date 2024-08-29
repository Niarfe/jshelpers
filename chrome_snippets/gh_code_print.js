/*
Set this script in Dev Tools snippets and run on github markdown page
*/

function remove_all_id(theid) {
    var e_id = document.getElementById(theid);
    e_id.parentNode.removeChild(e_id);
}

function remove_all_class(theclass) {
    var linkicons = document.getElementsByClassName(
        theclass
    );
    while(linkicons[0]) {
        linkicons[0].parentNode.removeChild(linkicons[0]);
    };
}

remove_all_id("StickyHeader")
remove_all_class("position-relative js-header-wrapper ");
remove_all_class('d-flex flex-column border rounded-2 mb-3 pl-1');
remove_all_class('Box-sc-g0xbh4-0 jfjHXm');
remove_all_class('Box-sc-g0xbh4-0 nSWSp');
remove_all_class('Box-sc-g0xbh4-0 hVZtwF react-code-view-bottom-padding');
remove_all_class('Box-sc-g0xbh4-0 kbVgFY');

//remove_all_class('');
//remove_all_class('');
//remove_all_class('');
//remove_all_class('');
//remove_all_class('');
//remove_all_class('');
//remove_all_class('');
//remove_all_class('');


// Set EVERYTHING to color black for the printer
var allthethings = document.getElementsByTagName("*");
for (let idx of allthethings) {
    idx.style.color = "black";
}
remove_all_class('Box-sc-g0xbh4-0 kbVgFY');
