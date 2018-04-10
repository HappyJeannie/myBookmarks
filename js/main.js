var keys = {
  "0" : {"0":"q","1":"w","2":"e","3":"r","4":"t","5":"y","6":"u","7":"i","8":"o","9":"p","length":10},
  "1" : {"0":"a","1":"s","2":"d","3":"f","4":"g","5":"h","6":"j","7":"k","8":"l","length":9},
  "2" : {"0":"z","1":"x","2":"c","3":"v","4":"b","5":"n","6":"m","length":7},
  "length" : 3
}
var hash = {
  "a":"https://www.aliyun.com",
  "b":"http://www.bootcss.com/",
  "c":undefined,
  "d":"http://www.ourd3js.com/",
  "e":"https://exmail.qq.com/",
  "f":"www.facebook.com",
  "g":"http://www.google.cn/",
  "h":"https://happyjeannie.github.io/",
  "i":"http://www.iconfont.cn/",
  "j":"https://jirengu.com/",
  "k":undefined,
  "l":"https://lanhuapp.com/",
  "m":"https://developer.mozilla.org/zh-CN/",
  "n":"https://nodejs.org/",
  "o":undefined,
  "p":"https://www.processon.com",
  "q":"http://www.qq.com/",
  "r":"http://react-china.org/",
  "s":"https://ssr.vuejs.org/zh/",
  "t":undefined,
  "u":undefined,
  "v":"https://cn.vuejs.org/",
  "w":"https://alpha.wallhaven.cc/",
  "x":"https://xiedaimala.com/",
  "y":"www.youtube.com",
  "z":"https://www.zhihu.com/"
}
var index = 0;
while(index < keys["length"]){
  var div = document.createElement('div');
  main.appendChild(div);
  var index1 = 0;
  var row = keys[index];
  while(index1 < row["length"]){
    var kbd = document.createElement('kbd');
    kbd.textContent = row[index1];
    div.appendChild(kbd);
    var btn1 = document.createElement('button');
    var btn2 = document.createElement('button');
    btn1.className = 'edit';
    btn2.className = 'del';
    btn1.textContent = "编辑";
    btn2.textContent = "删除";
    kbd.appendChild(btn1);
    kbd.appendChild(btn2);
    index1++;
  }
  index++;
}
document.onkeypress = function(e){  //此处的e是形参！形参！写什么都可以
  var key = e.key;
  var website = hash[key];
  //location.href = website;    //当前页面重定向
  window.open(website,'_target');
}