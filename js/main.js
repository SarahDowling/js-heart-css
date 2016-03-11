var $header = $('header');
var $h1 = $('h1');
var $main = $('main');
var $mainP  = $('main p:first-child');
var $h2 = $('h2');
var $mainList = $('main list');
var $img = $('img');
var $dl = $('dl');
var $dt = $('dt');
var $lastList = $('ul li:last-child');
var $firstList = $('ul li:first-child');

$header.addClass('masthead');

$h1.removeClass('big-heading');
$h1.addClass('logo');

$main.addClass('wrapper');

$mainP.addClass('intro');

$h2.addClass('slug-head');

$mainList.addClass('slug-list');

$img.addClass('slug-img');

$firstList.addClass('slug-list-first');
$lastList.addClass('slug-list-last');

$dl.addClass('classification');

$dt.removeClass('big-label');

$img.addClass('slug-img');

$lastList.show();

// show\
