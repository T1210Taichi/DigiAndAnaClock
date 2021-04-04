//モード
var mode = true; 
var clock=1;

//日付取得
var Now;
var Ana;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(400,500);
  
  Now = new Date();
  Ana = new AnalogClock(Now);
}

function draw() {
  Now = new Date();
  
  background(255);
  
  clock %= (99*60*60*60);
  
  if(mode){

    Ana.clockBord();
    Ana.secondHand(clock);
    Ana.minuteHand(clock);
    Ana.hourHand(clock);
    
  }else{
    var dig = new DigitalClock(Now); 
    //時を表示
    dig.hourHand();
    //H-Mコロン
    dig.HMcolon();
    //分を表示
    dig.minuteHand();
    //M-Sコロン
    dig.MScolon();
    //秒を表示
    dig.secondHand();
    //小数点
    dig.point();
    //ミリ
    dig.decimalHand();
  }
  clock++;
}

//モードを変える
document.getElementById("change-mode").onclick = function() {
  if(mode){
    mode = false;
  }else{
    mode = true;
  }
};s