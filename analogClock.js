class AnalogClock{
  constructor(Now) {
    this.hou = Now.getHours() % 12;
    this.min = Now.getMinutes();
    this.sec = Now.getSeconds();
    
    //初期
    this.secX=200;
    this.minX=200;
    this.houX=200;
  }
  
  //アナログ時計
  clockBord(){
    //ellipse(windowWidth, windowHeight, 200);
    //円を表示
    //ellipse(Xの位置,Yの位置,直径)
    strokeWeight(1);
    stroke(1);
    //ellipse(windowWidth/2, windowHeight/2,400);
    ellipse(200,200,400);
    //数字
    let posX=180;
    let posY=50;
    let nol= 220-posY;
    textSize(40);
    for(let i=1;i<=12;i++){
      //text(テキスト,Xの位置,Yの位置)
      text(i,posX-nol*sin(-radians((360/12)*i)),posX+30-nol*cos(-radians((360/12)*i)));
  }
}
  secondHand(clock){
    let nol = 150;
    // line(始点のx座標, 始点のy座標, 終点のx座標, 終点のy座標);
    stroke(255,0,0);
    line(200,200,this.secX-nol*sin(-(radians((360/(60))*this.sec))-radians((360/(24*99))*clock)),this.secX-nol*cos(-(radians((360/(60))*this.sec))- radians((360/(24*99))*clock)));
  }
  minuteHand(clock){
    let nol = 170;
    // line(始点のx座標, 始点のy座標, 終点のx座標, 終点のy座標);
    strokeWeight(4);
    stroke(1);
    line(200,200,this.minX-nol*sin(-(radians((360/(60))*this.min)) - radians((360/(24*99*60)*clock))),this.minX-nol*cos(-(radians((360/(60)))*this.min)-radians((360/(24*99*60))*clock)));
  }
  hourHand(clock){
      let nol = 100;
      // line(始点のx座標, 始点のy座標, 終点のx座標, 終点のy座標);
      strokeWeight(8);
      line(200,200,this.houX-nol*sin(-(radians((360/(12))*this.hou) -(radians((30/60))*this.min) - radians((360/(24*99*60*12))*clock))),this.houX-nol*cos(-(radians((360/(12))*this.hou)) -(radians((30/(60))*this.min)) -(radians((360/(24*99*60*12))*clock))));
  }
}