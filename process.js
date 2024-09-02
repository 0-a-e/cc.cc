//テスト用
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function senddata(url) {
    $('#bx').addClass('bxloading');
    $('#bx').html('<div class="hidebx"></div><div class="speedbox"><span class="speed speedprop"></span><i class="fas fa-link"></i></div>');
    const bxwidth =  $('#bx').width()
    const move = parseInt(bxwidth) - parseInt("100px");
    console.log(move);
    $('.speedbox').velocity(
      {
       left: move,
       queue: true,
       easing: "swing",
       color: "#fff",
      },2000);


    console.log("g");
    await sleep(1*99999993400);
    if (true) {
      $('#bx').addClass('success');
    } else {
      $('#bx').addClass('fail');
    }
    var bx = document.getElementById("bx");
    bx.style.backgroundColor = "rgba( 255, 255, 255, 0.4)";//"#082080"; 
    bx.innerHTML = "<h1 class='successtxt'>Success!</h1> <div class='ff'><i class='fff fas fa-link'></i></div>";
    document.getElementById("box").appendChild(bx);
    return "https://agar.io";

}
