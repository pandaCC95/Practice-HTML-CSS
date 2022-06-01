//冒泡排序
function bubble(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
}

//选择排序
function choose(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        var tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
}

//获取元素节点
function $(vArg) {
  //<1>对参数进行区分
  switch (vArg[0]) {
    case "#": //id
      return document.getElementById(vArg.substring(1));
      break;
    case ".": //class name
      return elementByClassName(document, vArg.substring(1));
      break;
    default:
      //对参数的前5个字符进行判断
      var str = vArg.substring(0, 5);
      if (str == "name=") {
        return document.getElementsByName(vArg.substring(5));
      } else {
        return document.getElementsByTagName(vArg);
      }
      break;
  }
}


function elementByClassName(parent, classStr) {
  //<1>找到parent下所有的元素节点
  var nodes = parent.getElementsByTagName('*');
  var result = []; //用来记录所有符合条件的元素节点
  for (var i = 0; i < nodes.length; i++) {
    //<2>如果符合条件，存到result
    if (nodes[i].className == classStr) {
      result.push(nodes[i]);
    }
  }
  return result;
}




//获取当前样式的兼容函数
function getStyle(elem, attr) {
  return elem.currentStyle ? elem.currentStyle[attr] :
    getComputedStyle(elem)[attr];
}


//删除空白节点
function removeSpaceNode(nodes) {
  var arr = [];  //数组用来存放不是空白节点的
  for (var i = 0; i < nodes.length; i++) {
    //判断是否是空白节点
    if (!(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue))) {
      arr.push(nodes[i]);
    }
  }
  return arr;
}

//删除子节点上的空白节点
function removeSpaceNode2(parent) {
  for (var i = parent.childNodes.length - 1; i >= 0; i--) {
    if (parent.childNodes[i].nodeType == 3 && /^\s+$/.test(parent.childNodes[i].nodeValue)) {
      //删除该空白节点
      parent.removeChild(parent.childNodes[i]);
    }
  }
}

/* 
         [注] 创造一个带文本的元素节点
        
        
         */
function createElementWithText(tagName, text) {
  var node = document.createElement(tagName);
  var oText = document.createTextNode(text);
  node.appendChild(oText);
  return node;
}


/* 
            封装insertAfter函数
        
         */
function insertAfter(newNode, oldNode) {
  //判断oldNode是否是最后一个节点
  var parent = oldNode.parentNode;
  if (oldNode == parent.lastChild) {
    //最后一个节点，直接插入到子节点的末尾
    parent.appendChild(newNode);
  } else {
    //插入到oldNode的下一个节点之前
    parent.insertBefore(newNode, oldNode.nextSibling);
  }
}


//setCookie()
function setCookie(name, value, day) {
  var oDate = new Date();
  oDate.setDate(oDate.getDate() + day);
  document.cookie = name + "=" + value + ";expires=" + oDate;
}


//getCookie()
function getCookie(name) {
  //获取到的cookie是个字符串
  var str = document.cookie;
  var arr = str.split("; ");
  for (var i = 0; i < arr.length; i++) {
    var arr1 = arr[i].split("=");
    if (arr1[0] == name) {
      return arr1[1];
    }
  }
}


//removeCookie()
function removeCookie(name){
  setCookie(name, 1, -1);
}