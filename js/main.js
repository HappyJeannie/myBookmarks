//document.getElementsByTagName('body')[0].style.height = window.innerHeight + 'px';

//页面数据初始化
var keys = init()['keys'];
var hash = init()['hash'];

//生成键盘
generateKeyboard(hash,keys);

//监听页面
listenToUser(hash);





//页面数据初始化
function init(){
  var keys = {
    "0" : {"0":"q","1":"w","2":"e","3":"r","4":"t","5":"y","6":"u","7":"i","8":"o","9":"p","length":10},
    "1" : {"0":"a","1":"s","2":"d","3":"f","4":"g","5":"h","6":"j","7":"k","8":"l","length":9},
    "2" : {"0":"z","1":"x","2":"c","3":"v","4":"b","5":"n","6":"m","length":7},
    "length" : 3
  }
  var hash = {
    "a":"www.aliyun.com",
    "b":"www.bootcss.com",
    "c":undefined,
    "d":"www.ourd3js.com",
    "e":"exmail.qq.com",
    "f":"www.facebook.com",
    "g":"www.google.cn",
    "h":"happyjeannie.github.io",
    "i":"www.iconfont.cn",
    "j":"jirengu.com",
    "k":undefined,
    "l":"lanhuapp.com",
    "m":"developer.mozilla.org/zh-CN",
    "n":"nodejs.org",
    "o":undefined,
    "p":"www.processon.com",
    "q":"www.qq.com",
    "r":"react-china.org",
    "s":"ssr.vuejs.org/zh",
    "t":undefined,
    "u":undefined,
    "v":"cn.vuejs.org",
    "w":"alpha.wallhaven.cc",
    "x":"xiedaimala.com",
    "y":"www.youtube.com",
    "z":"www.zhihu.com"
  }
  var hashLocalStorage = getFromLocalStorage('url');
  if(hashLocalStorage){
    hash = hashLocalStorage;
  }
  return {"keys":keys,"hash":hash};
} 
//创建元素并添加属性
function createEle(tag,attr){
  var tagName = document.createElement(tag);
  if(attr){
    if(attr.class){
      tagName.className = attr.class;
    }
    if(attr.id){
      tagName.id = attr.id;
    }
    if(attr.text){
      tagName.textContent = attr.text;
    }
  }
  
  return tagName;
}

//监听页面
function listenToUser(hash){
  document.onkeypress = function(e){  //此处的e是形参！形参！写什么都可以
    var key = e.key;
    var website ='http://' + hash[key];
    //location.href = website;    //当前页面重定向
    window.open(website,'_target');
  }
}
//生成button
function createButton(hash,id){
  var btn1 = createEle('button',{'class':'edit','id':id,'text':'E'})
  btn1.onclick = function(e){
    var key = e['target']['id'];
    var url = prompt('请输入新的网址：');
    if(url){
      hash[key] = url;
      localStorage.setItem('url',JSON.stringify(hash));
      e.target.nextSibling.src ='http://' + url + '/favicon.ico';
    }
  }
  return btn1;
}

//生成图片
function createImg(hash,key){
  var img = createEle('img');
  if(hash[key] == undefined || hash[key] == ''){
    img.src = './img/base.png';
  }else{
    img.src ='http://' + hash[key] + '/favicon.ico';
  }
  img.onerror = function(e){
    e.target.src = './img/base.png';
  }
  return img;
}
//生成键盘
function generateKeyboard(hash,keys){
  for(var index = 0;index < keys["length"];index++){
    var div = createEle('div',{'class':'key'});
    var row = keys[index];
    for(var index1 = 0; index1< row["length"];index1++){
      var key = row[index1];
      var kbd = createEle('kbd');
  
      var span = createEle('span',{'text':key});
  
      var btn1 = createButton(hash,key);
      
      var img = createImg(hash,key);

      kbd.appendChild(span);
      kbd.appendChild(btn1);
      kbd.appendChild(img);
  
      div.appendChild(kbd);
  
      main.appendChild(div);
    }
  }
}
// 下面是工具函数
function getFromLocalStorage(name){
  return JSON.parse(localStorage.getItem(name) || 'null')
}