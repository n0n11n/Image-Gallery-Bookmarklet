w = window.open("", "_blank");
d = w.document;
d.title = "image gallery";

valid = {
    jpg: 1,
    jpeg: 1,
    png: 1,
    gif: 1,
    svg: 1
};

//w.document.body.innerText = document.body.innerText;

var links = document.links;
var mylinks = [];

for (i = 0; l = links[i]; i++) {

    ext = l.href.split(".");
    ext = ext[ext.length - 1].toLowerCase();
    ext = ext.split("?")[0];
    if (valid[ext]) {
    d.body.innerHTML += '<img class="lazyload" src="https://i.imgur.com/sZJWdbK.gif" data-src="' + l.href + '" style="max-width: 90vw; height: 90vh;" /><br>'
    }
}


h = d.getElementsByTagName('head')[0];

var s = d.createElement('script');
s.src = 'https://rawgit.com/tuupola/jquery_lazyload/2.x/lazyload.js';
s.async = false;
s.defer = false;
h.appendChild(s);


s.addEventListener('load', () => {
  var s2 = d.createElement('script');
    s2.innerHTML = "lazyload();";
    h.appendChild(s2);
})

/*
Use:
https://www.yourjs.com/bookmarklet/
https://closure-compiler.appspot.com/home
to get this:
javascript:w%3Dwindow.open(%22%22%2C%22_blank%22)%3Bd%3Dw.document%3Bd.title%3D%22image%20gallery%22%3Bvalid%3D%7Bjpg%3A1%2Cjpeg%3A1%2Cpng%3A1%2Cgif%3A1%2Csvg%3A1%7D%3Bvar%20links%3Ddocument.links%2Cmylinks%3D%5B%5D%3Bfor(i%3D0%3Bl%3Dlinks%5Bi%5D%3Bi%2B%2B)ext%3Dl.href.split(%22.%22)%2Cext%3Dext%5Bext.length-1%5D.toLowerCase()%2Cext%3Dext.split(%22%3F%22)%5B0%5D%2Cvalid%5Bext%5D%26%26(d.body.innerHTML%2B%3D'%3Cimg%20class%3D%22lazyload%22%20src%3D%22https%3A%2F%2Fi.imgur.com%2FsZJWdbK.gif%22%20data-src%3D%22'%2Bl.href%2B'%22%20style%3D%22max-width%3A%2090vw%3B%20height%3A%2090vh%3B%22%20%2F%3E%3Cbr%3E')%3Bh%3Dd.getElementsByTagName(%22head%22)%5B0%5D%3Bvar%20s%3Dd.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Frawgit.com%2Ftuupola%2Fjquery_lazyload%2F2.x%2Flazyload.js%22%3Bs.async%3D!1%3Bs.defer%3D!1%3Bh.appendChild(s)%3Bs.addEventListener(%22load%22%2Cfunction()%7Bvar%20a%3Dd.createElement(%22script%22)%3Ba.innerHTML%3D%22lazyload()%3B%22%3Bh.appendChild(a)%7D)%3Bvoid+0

*/