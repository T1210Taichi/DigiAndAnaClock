class DigitalClock{
    constructor(Now) {
        this.hou = Now.getHours();
        this.min = Now.getMinutes();
        this.sec = Now.getSeconds();
        this.mil = Now.getMilliseconds();
    }

    hourHand(){
        let doubleDigit,oneDigit;

        this.hou %= 60;

        //数字を桁事に分解
        if(this.hou >= 10){
            doubleDigit = Math.floor(this.hou / 10);
            oneDigit = this.hou - doubleDigit*10;
        }else{
            doubleDigit = 0;
            oneDigit = this.hou;
        }

        let segd = this.print7seg(doubleDigit);
        let sego = this.print7seg(oneDigit);

        //二桁目
        //7セグ
        strokeWeight(8);
        let lx = 100;
        let rx = 200;
        let ty = 100;
        let cy = 200;
        let dy = 300;
        //二桁目
        //a
        stroke(200-200*segd[0]);
        line(rx,ty-10,rx,cy-10);
        //b
        stroke(200-200*segd[1]);
        line(lx+10,ty-10,rx-10,ty-10);
        //c
        stroke(200-200*segd[2]);
        line(lx,ty-10,lx,cy-10);
        //d
        stroke(200-200*segd[3]);
        line(lx,cy,lx,dy);
        //e
        stroke(200-200*segd[4]);
        line(lx+10,dy,rx-10,dy);
        //f
        stroke(200-200*segd[5]);
        line(rx,cy,rx,dy);
        //g
        stroke(200-200*segd[6]);
        line(lx+10,cy,rx-10,cy);

        //一桁目
        lx += 150;
        rx += 150;
        //a
        stroke(200-200*sego[0]);
        line(rx,ty-10,rx,cy-10);
        //b
        stroke(200-200*sego[1]);
        line(lx+10,ty-10,rx-10,ty-10);
        //c
        stroke(200-200*sego[2]);
        line(lx,ty-10,lx,cy-10);
        //d
        stroke(200-200*sego[3]);
        line(lx,cy,lx,dy);
        //e
        stroke(200-200*sego[4]);
        line(lx+10,dy,rx-10,dy);
        //f
        stroke(200-200*sego[5]);
        line(rx,cy,rx,dy);
        //g
        stroke(200-200*sego[6]);
        line(lx+10,cy,rx-10,cy);                

    }
    minuteHand(){
        let doubleDigit,oneDigit;

        this.min %= 60;

        //数字を桁事に分解
        if(this.min >= 10){
            doubleDigit = Math.floor(this.min / 10);
            oneDigit = this.min - doubleDigit*10;
        }else{
            doubleDigit = 0;
            oneDigit = this.min;
        }

        let segd = this.print7seg(doubleDigit);
        let sego = this.print7seg(oneDigit);

        //二桁目
        //7セグ
        strokeWeight(8);
        let lx = 100 + 150 + 200;
        let rx = 200 + 150 + 200;
        let ty = 100;
        let cy = 200;
        let dy = 300;
        //二桁目
        //a
        stroke(200-200*segd[0]);
        line(rx,ty-10,rx,cy-10);
        //b
        stroke(200-200*segd[1]);
        line(lx+10,ty-10,rx-10,ty-10);
        //c
        stroke(200-200*segd[2]);
        line(lx,ty-10,lx,cy-10);
        //d
        stroke(200-200*segd[3]);
        line(lx,cy,lx,dy);
        //e
        stroke(200-200*segd[4]);
        line(lx+10,dy,rx-10,dy);
        //f
        stroke(200-200*segd[5]);
        line(rx,cy,rx,dy);
        //g
        stroke(200-200*segd[6]);
        line(lx+10,cy,rx-10,cy);

        //一桁目
        lx += 150;
        rx += 150;
        //a
        stroke(200-200*sego[0]);
        line(rx,ty-10,rx,cy-10);
        //b
        stroke(200-200*sego[1]);
        line(lx+10,ty-10,rx-10,ty-10);
        //c
        stroke(200-200*sego[2]);
        line(lx,ty-10,lx,cy-10);
        //d
        stroke(200-200*sego[3]);
        line(lx,cy,lx,dy);
        //e
        stroke(200-200*sego[4]);
        line(lx+10,dy,rx-10,dy);
        //f
        stroke(200-200*sego[5]);
        line(rx,cy,rx,dy);
        //g
        stroke(200-200*sego[6]);
        line(lx+10,cy,rx-10,cy);
    }
    secondHand(){
        let doubleDigit,oneDigit;

        this.sec %= 60;

        //数字を桁事に分解
        if(this.sec >= 10){
            doubleDigit = Math.floor(this.sec / 10);
            oneDigit = this.sec - doubleDigit*10;
        }else{
            doubleDigit = 0;
            oneDigit = this.sec;
        }

        let segd = this.print7seg(doubleDigit);
        let sego = this.print7seg(oneDigit);

        //二桁目
        //7セグ
        strokeWeight(8);
        let lx = 100 + 150 + 200 + 150 + 200;
        let rx = 200 + 150 + 200 + 150 + 200;
        let ty = 100;
        let cy = 200;
        let dy = 300;
        //二桁目
        //a
        //二桁目
        //a
        stroke(200-200*segd[0]);
        line(rx,ty-10,rx,cy-10);
        //b
        stroke(200-200*segd[1]);
        line(lx+10,ty-10,rx-10,ty-10);
        //c
        stroke(200-200*segd[2]);
        line(lx,ty-10,lx,cy-10);
        //d
        stroke(200-200*segd[3]);
        line(lx,cy,lx,dy);
        //e
        stroke(200-200*segd[4]);
        line(lx+10,dy,rx-10,dy);
        //f
        stroke(200-200*segd[5]);
        line(rx,cy,rx,dy);
        //g
        stroke(200-200*segd[6]);
        line(lx+10,cy,rx-10,cy);

        //一桁目
        lx += 150;
        rx += 150;
        //a
        stroke(200-200*sego[0]);
        line(rx,ty-10,rx,cy-10);
        //b
        stroke(200-200*sego[1]);
        line(lx+10,ty-10,rx-10,ty-10);
        //c
        stroke(200-200*sego[2]);
        line(lx,ty-10,lx,cy-10);
        //d
        stroke(200-200*sego[3]);
        line(lx,cy,lx,dy);
        //e
        stroke(200-200*sego[4]);
        line(lx+10,dy,rx-10,dy);
        //f
        stroke(200-200*sego[5]);
        line(rx,cy,rx,dy);
        //g
        stroke(200-200*sego[6]);
        line(lx+10,cy,rx-10,cy);        
    }
    decimalHand(){
        let doubleDigit,oneDigit;
      if(this.mil >= 100){
           this.mil %= 100;
          //this.mil = Math.floor(this.mil);
      }
      
        //数字を桁事に分解
        if(this.mil >= 10){
            doubleDigit = Math.floor(this.mil / 10);
            oneDigit = this.mil - doubleDigit*10;
        }else{
            doubleDigit = 0;
            oneDigit = this.mil;
        }

        let segd = this.print7seg(doubleDigit);
        let sego = this.print7seg(oneDigit);

        //二桁目
        //7セグ
        strokeWeight(8);
        let lx = 100 + 150 + 200 + 150 + 200 + 150 + 200;
        let rx = 200 + 150 + 200 + 150 + 200 + 150 + 200;
        let ty = 100;
        let cy = 200;
        let dy = 300;
        //二桁目
        //a
        //二桁目
        //a
        stroke(200-200*segd[0]);
        line(rx,ty-10,rx,cy-10);
        //b
        stroke(200-200*segd[1]);
        line(lx+10,ty-10,rx-10,ty-10);
        //c
        stroke(200-200*segd[2]);
        line(lx,ty-10,lx,cy-10);
        //d
        stroke(200-200*segd[3]);
        line(lx,cy,lx,dy);
        //e
        stroke(200-200*segd[4]);
        line(lx+10,dy,rx-10,dy);
        //f
        stroke(200-200*segd[5]);
        line(rx,cy,rx,dy);
        //g
        stroke(200-200*segd[6]);
        line(lx+10,cy,rx-10,cy);

        //一桁目
        lx += 150;
        rx += 150;
        //a
        stroke(200-200*sego[0]);
        line(rx,ty-10,rx,cy-10);
        //b
        stroke(200-200*sego[1]);
        line(lx+10,ty-10,rx-10,ty-10);
        //c
        stroke(200-200*sego[2]);
        line(lx,ty-10,lx,cy-10);
        //d
        stroke(200-200*sego[3]);
        line(lx,cy,lx,dy);
        //e
        stroke(200-200*sego[4]);
        line(lx+10,dy,rx-10,dy);
        //f
        stroke(200-200*sego[5]);
        line(rx,cy,rx,dy);
        //g
        stroke(200-200*sego[6]);
        line(lx+10,cy,rx-10,cy);
    }
    HMcolon(){
      ellipse(400,250,5);
      ellipse(400,150,5);
    }
    MScolon(){
      ellipse(750,250,5);
      ellipse(750,150,5);
    }
    point(){
      ellipse(1100,300,5);
    }

    print7seg(number){
        if(0 == number){
          return this.print7seg0();
        }else if(1 == number){
          return this.print7seg1();
        }else if(2 == number){
          return this.print7seg2();
        }else if(3 == number){
          return this.print7seg3();           
        }else if(4 == number){
          return this.print7seg4();           
        }else if(5 == number){
          return this.print7seg5();           
        }else if(6 == number){
          return this.print7seg6();
        }else if(7 == number){
          return this.print7seg7();           
        }else if(8 == number){
          return this.print7seg8();               
        }else if(9 == number){
          return this.print7seg9();           
        }
    }
    //数字
    print7seg0(){
        return [1,1,1,1,1,1,0];
    }
    print7seg1(){
        return [1,0,0,0,0,1,0];
    }
    print7seg2(){
        return [1,1,0,1,1,0,1];
    }
    print7seg3(){
        return [1,1,0,0,1,1,1];
    }
    print7seg4(){
        return [1,0,1,0,0,1,1];
    }
    print7seg5(){
        return [0,1,1,0,1,1,1];
    }
    print7seg6(){
        return [0,1,1,1,1,1,1];
    }
    print7seg7(){
        return [1,1,1,0,0,1,0];
    }
    print7seg8(){
        return [1,1,1,1,1,1,1];
    }
    print7seg9(){
        return [1,1,1,0,1,1,1];
    }

}