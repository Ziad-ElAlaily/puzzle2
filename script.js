var clicked;
var pos = { x: 0, y: 0 };
var temp = { x: 0, y: 0 };
var transform = { x: -20, y: 40 };
var box = $(".one");
var box1 = $(".two");

$(".one").mousemove(function (e) {
  if (!clicked) {
    return false;
  }

  temp.x = transform.x + (pos.y - e.pageY);
  temp.y = transform.y - (pos.x - e.pageX);
  box.css("transform", "rotateX(" + temp.x + "deg) rotateY(" + temp.y + "deg)");
});

$(".one").mousedown(function (e) {
  clicked = true;
  pos.x = e.pageX;
  pos.y = e.pageY;
});

$(".one").mouseup(function () {
  clicked = false;
  transform.x = temp.x;
  transform.y = temp.y;
});

// ---------------------two-----------
$(".two").mousemove(function (e) {
  if (!clicked) {
    return false;
  }

  temp.x = transform.x + (pos.y - e.pageY);
  temp.y = transform.y - (pos.x - e.pageX);
  box1.css(
    "transform",
    "rotateX(" + temp.x + "deg) rotateY(" + temp.y + "deg)"
  );
});

$(".two").mousedown(function (e) {
  clicked = true;
  pos.x = e.pageX;
  pos.y = e.pageY;
});

$(".two").mouseup(function () {
  clicked = false;
  transform.x = temp.x;
  transform.y = temp.y;
});
