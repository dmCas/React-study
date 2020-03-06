import React, { Component } from 'react';
import { Timeline, Card } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import './index.less'
class Archive extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          "createdAt": "2019-11-11  10:57",
          "updatedAt": "2020-03-01  18:16",
          "id": 7,
          "title": "blog  迁移到  http://xiangxi.red/doc",
          "readedCount": 64,
          "author": "gong",
          "summary": "迁移",
          "category": [
            "前端"
          ],
          "tag": [
            "JS"
          ],
          "content": "<p><a  href=\"http://xiangxi.red/doc\"  target=\"_self\">doc</a>&nbsp;</p>\n"
        },
        {
          "createdAt": "2019-04-15  22:27",
          "updatedAt": "2020-03-01  12:11",
          "id": 6,
          "title": "event  loop  回答得最难受的一次面试",
          "readedCount": 153,
          "author": "Gong",
          "summary": "记一次最近面试中的  event  loop",
          "category": [
            "面试"
          ],
          "tag": [
            "JS"
          ],
          "content": "<p>前端面试基本上都会问  event  loop，我们也都知道  event  loop  是怎么回事，不就是一个同步任务、一个异步任务嘛，多简单呐，</p>\n<p>然而~~~</p>\n<blockquote>面试官：说说  event  loop</blockquote>\n<blockquote>我：因为  js  是单线程，</blockquote>\n<blockquote>面试官（打断）：为什么  js    是单线程    ？</blockquote>\n<blockquote>我：  emmmmmmmmmm  （最后只能以不太清楚结尾...）</blockquote>\n<blockquote>面试官：继续说  event  loop</blockquote>\n<blockquote>我：会先把同步任务推到执行栈里去执行，异步任务进入任务队列中，</blockquote>\n<blockquote>面试官（打断）：什么是同步任务  ？什么是异步任务  ？</blockquote>\n<blockquote>我：<span  style=\"color:  rgba(0,0,0,0.65);background-color:  rgb(255,255,255);font-size:  14px;\">emmmmmmmmmm  （说不清楚）</span>&nbsp;</blockquote>\n<blockquote><span  style=\"color:  rgba(0,0,0,0.65);background-color:  rgb(255,255,255);font-size:  14px;\">面试官：继续说  event  loop</span>&nbsp;</blockquote>\n<blockquote>我：<span  style=\"color:  rgba(0,0,0,0.65);background-color:  rgb(255,255,255);font-size:  14px;\">当执行栈中的同步任务执行完毕后就去会去查看任务队列中有没有待执行的微任务</span>  ，</blockquote>\n<blockquote>面试官（打断）：什么是微任务  ？</blockquote>\n<blockquote>我：emmmmmmmmmm  （说不清楚）</blockquote>\n<blockquote>面试官：<span  style=\"color:  rgba(0,0,0,0.65);background-color:  rgb(255,255,255);font-size:  14px;\">继续</span></blockquote>\n<blockquote><span  style=\"color:  rgba(0,0,0,0.65);background-color:  rgb(255,255,255);font-size:  14px;\">我：会先去任务队里中查看有没有待执行的微任务，有微任务就先执行微任务，没有微任务就去查找有没有宏任务，有宏任务就执行宏任务</span></blockquote>\n<p><span  style=\"color:  rgba(0,0,0,0.65);background-color:  rgb(255,255,255);font-size:  14px;\">至此算是回答完了，但是回答的过程好难受啊，也看出来了，每当我说出个概念的时候面试官就会逮着这个概念问，什么是  xxx  ？  为什么是  xxx  ？</span></p>\n<p><span  style=\"color:  rgba(0,0,0,0.65);background-color:  rgb(255,255,255);font-size:  14px;\">也是自己基础不牢固，所以才会觉得难受</span></p>\n<p><span  style=\"color:  rgb(209,72,65);background-color:  rgb(255,255,255);font-size:  14px;\">所以啊，不但要知其然也要知其所以然啊，在之后的学习过程中要铭记这点。</span></p>\n<p><span  style=\"color:  rgba(0,0,0,0.65);background-color:  rgb(255,255,255);font-size:  14px;\">那么来好好说道说道这个  event  loop</span></p>\n<h3><span  style=\"color:  rgba(0,0,0,0.85);background-color:  rgb(255,255,255);\">二、为什么  js  是单线程  ？</span></h3>\n<p>javascript  的一大特点就是单线程，也就是说同一时间只能做一件事件，那么，为什么不能是多线程呢  ？  这样不是还能提升效率吗  ？</p>\n<p>js  为单线程，主要和它的用途有关，js  的主要用途是与用户互动、操作  dom  ，这决定了它只能是单线程，否则会带来复杂的同步问题，js  是多线程的话，一个线程在  dom  添加内容，一个线程删除  dom，这两个线程同时执行的话，这时候浏览器以哪个线程为准呢  ？</p>\n<p>为了避免复杂性，js  设计的时候就是按单线程设计的。</p>\n<p>为了利用多核  CPU  的计算功 能，HTML 提出的 web worker 标准。允许 js 创建多线程，但是子线程完全受主线程控制，且不得操作 dom。所以这个标准，并没有改变 js 是单线程的本质。</p>\n<h3>二、任务队列</h3>\n<p>单线程就意味着，所有的任务需要排队，前一个人任务结束后，才能执行后一个任务，。如果前一个任务执行耗时很长，后一个任务就不得不一直等待。如果排队是因为计算量大，cpu 忙不过来，也就算了，但很多时候 cpu 是闲着的，因为 IO设备（输入和输出设备）比如 ajax请求、IO，不得不等待执行结果出来，再往下执行。</p>\n<p>所以设计成，有 IO 设置的时候下挂起任务，主线程先执行后面的任务，等 IO 有结果了，再回过头来把挂起的任务执行下去。</p>\n<p>于是乎，任务分为了两种：同步任务、异步任务。</p>\n<p><span style=\"color: rgb(209,72,65);\">同步任务</span>：在主线程上排队的任务，只有前一个任务执行完毕，才能执行下一个任务。</p>\n<p><span style=\"color: rgb(209,72,65);\">异步任务</span>：不进入主线程，而是进入‘任务队列’（task queue）的任务，主线程中的同步任务执行完毕的时候才会到任务队里查有没有待执行的微任务，有待执行的微任务就执行微任务，微任务执行完毕后，就查看有没有待执行的宏任务，有待执行的宏任务就执行宏任务。</p>\n<pre>（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。<br><br>（2）主线程之外，还存在一个\"任务队列\"（task queue）。只要异步任务有了运行结果，就在\"任务队列\"之中放置一个事件。<br><br>（3）一旦\"执行栈\"中的所有同步任务执行完毕，系统就会读取\"任务队列\"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。<br><br>（4）主线程不断重复上面的第三步。</pre>\n<p>什么是宏任务、微任务 ？</p>\n<p>用例子加深巩固 new promise、promise.reslove settimeout</p>\n<p>明天补上~</p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n"
        },
        {
          "createdAt": "2019-04-13 15:21",
          "updatedAt": "2020-03-01 12:43",
          "id": 5,
          "title": "面试题的细嚼慢咽，真香啊",
          "readedCount": 95,
          "author": "Gong",
          "summary": "你觉得可以从 const let 聊到内存分配、垃圾回收、浅拷贝、深拷贝、闭包、原型、防抖、节流 吗 ？",
          "category": [
            "面试"
          ],
          "tag": [
            "JS"
          ],
          "content": "<h2>Q：</h2>\n<pre>var a = {n: 1}<br>var b = a<br>a.x = a = {n: 2}<br>console.log(a.x)<br>console.log(b.x)</pre>\n<h2>A：</h2>\n<h2><span style=\"color: rgb(73,73,73);background-color: rgb(255,255,255);font-size: 14px;font-family: Arial, Helvetica, sans-serif;\">在js引擎中对变量的存储主要有两种位置：栈内存、堆内存。基础数据类型：栈内存、复杂数据类型：堆内存。复杂数据类型保存的只是一个指向堆内存的一个指针。</span></h2>\n<p><span style=\"font-family: monospace;\">1. <code>var a = {n: 1}</code></span> ，表示在堆内存中分配空间保存 <span style=\"font-family: monospace;\"><code>{n: 1}</code></span> ,  <span style=\"font-family: monospace;\"><code>a</code></span> 保存的是对该堆内存地址的指针</p>\n<img src=\"https://upload-images.jianshu.io/upload_images/7256750-43f3e3c22d66861a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\" alt=\"undefined\" style=\"float:left;height: auto;width: auto\"/>\n<p><span style=\"font-family: monospace;\">2. <code>var b = a</code></span>，<span style=\"font-family: monospace;\"><code>a</code></span> 赋值给 <span style=\"font-family: monospace;\"><code>b</code></span>，<span style=\"font-family: monospace;\"><code>b</code></span> 指针也指向堆内存中的  <span style=\"font-family: monospace;\"><code>{n: 1}</code></span>&nbsp;</p>\n<img src=\"https://upload-images.jianshu.io/upload_images/7256750-bb354eb8908c097b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\" alt=\"undefined\" style=\"float:left;height: auto;width: auto\"/>\n<p>3.  <span style=\"color: rgba(0,0,0,0.65);background-color: rgb(241,241,241);font-size: 14px;\">a.x = a = {n: 2}</span>  赋值是从右到左，但是<code>.</code><span style=\"color: rgb(36,41,46);background-color: rgb(255,255,255);font-size: 14px;\">的优先级高于</span><code>=</code><span style=\"color: rgb(36,41,46);background-color: rgb(255,255,255);font-size: 14px;\">，所以先执行</span><code>a.x</code><span style=\"color: rgb(36,41,46);background-color: rgb(255,255,255);font-size: 14px;\">，堆内存中的</span><code>{n: 1}</code><span style=\"color: rgb(36,41,46);background-color: rgb(255,255,255);font-size: 14px;\">就会变成</span><code>{n: 1, x: undefined}</code><span style=\"color: rgb(36,41,46);background-color: rgb(255,255,255);font-size: 14px;\">，改变之后相应的</span><code>b.x</code><span style=\"color: rgb(36,41,46);background-color: rgb(255,255,255);font-size: 14px;\">也变化了，因为指向的是同一个对象。此时的 </span><span style=\"color: rgba(0,0,0,0.65);background-color: rgb(241,241,241);font-size: 14px;\">a.x</span>  指的是堆内存中 <span style=\"color: rgba(0,0,0,0.65);background-color: rgb(241,241,241);font-size: 14px;font-family: monospace;\">a、</span></p>\n<img src=\"https://upload-images.jianshu.io/upload_images/7256750-57ce8c3b9aa1d3fb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\" alt=\"undefined\" style=\"float:left;height: auto;width: auto\"/>\n<p>执行完 <code>.</code>运算符后再来计算  <span style=\"color: rgba(0,0,0,0.65);background-color: rgb(241,241,241);font-size: 14px;font-family: monospace;\">=</span>  赋值运算符，<span style=\"color: rgba(0,0,0,0.65);background-color: rgb(241,241,241);font-size: 14px;\">a = {n: 2}</span> ，此时在堆内存在分配的新空间保存  <span style=\"color: rgba(0,0,0,0.65);background-color: rgb(241,241,241);font-size: 14px;\">{n: 2}</span>  ，赋值给 <code>a</code> ， <span style=\"color: rgba(0,0,0,0.65);background-color: rgb(241,241,241);font-size: 14px;font-family: monospace;\">a</span> 的指针指向该新堆中地址</p>\n<img src=\"https://upload-images.jianshu.io/upload_images/7256750-1f6bf97c40007f4a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\" alt=\"undefined\" style=\"float:left;height: auto;width: auto\"/>\n<p>赋值运算 <code>= </code>返回的是 右边的值，所以把 <span style=\"color: rgba(0,0,0,0.65);background-color: rgb(241,241,241);font-size: 14px;\">{n: 2}</span> 赋值给 <span style=\"color: rgba(0,0,0,0.65);background-color: rgb(241,241,241);font-size: 14px;\">a.x</span> ，之前也说了<span style=\"color: rgba(0,0,0,0.65);background-color: rgb(241,241,241);font-size: 14px;\">a.x</span>  指的是之前<code> a、b</code> 所共同指向内存地址中的 <code>x </code> 值，也就是，也就是<code> b.x</code></p>\n<img src=\"https://upload-images.jianshu.io/upload_images/7256750-a1602f0df62ef0ad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\" alt=\"undefined\" style=\"float:left;height: auto;width: auto\"/>\n<h3>关键点：简单数据类型和复杂数据类型在内存中的存储，运算符 <code>.</code> <code> =</code> 执行的先后顺序，执行  <span style=\"color: rgba(0,0,0,0.65);background-color: rgb(241,241,241);font-size: 14px;\">a.x</span>  的时候 <span style=\"color: rgba(0,0,0,0.65);background-color: rgb(241,241,241);font-size: 14px;\">a.x</span>  指的是  <span style=\"color: rgba(0,0,0,0.65);background-color: rgb(241,241,241);font-size: 14px;font-family: monospace;\">a、b</span>  所指的堆内存中的 <span style=\"color: rgba(0,0,0,0.65);background-color: rgb(241,241,241);font-size: 14px;\">x</span>   值，后面赋值的时候改变的也就是该堆内存中的 <span style=\"color: rgba(0,0,0,0.65);background-color: rgb(241,241,241);font-size: 14px;\">x</span> 值</h3>\n<h2 style=\"text-align:start;\"></h2>\n<h2 style=\"text-align:left;\"><span style=\"color: rgba(0,0,0,0.85);background-color: rgb(255,255,255);\">Q：const、let 的区别？const 定义的值能不能更变 ？ 为什么 ？</span></h2>\n<h2><span style=\"color: rgba(0,0,0,0.85);background-color: rgb(255,255,255);\">A: </span></h2>\n<p><span style=\"color: rgba(0,0,0,0.65);background-color: rgb(255,255,255);font-size: 14px;\">大家都知道const用来定义常量，let用来定义变量。对于const定义的常量能不能改变得分两种情况。</span> const 定义的为基本数据类型，则不能改变，定义的为object类型则可以修改属性。</p>\n<p><span style=\"color: rgb(209,72,65);\">why  ？</span></p>\n<p><span style=\"font-family: Times New Roman;\">上面也说到，基础类型是存储在栈内存里，复杂类型是存储在堆内存里。栈内存中的变量大小是已知的或者是有范围上限的，而堆内存中的对象大小是未知的，这大概也是 <code>null</code></span>&nbsp;</p>\n<p><span style=\"font-family: Times New Roman;\">为什么存储在栈内存中的原因（个人猜测）；我们 <code>const obj = { a: 1 }</code> 定义对象的时候，该常量 <code>obj </code>保存的是对堆内存的指针，我们改变 <code>a</code> 的值并不会改变</span><span style=\"color: rgba(0,0,0,0.65);background-color: rgb(241,241,241);font-size: 14px;font-family: monospace;\">obj</span> 的指针</p>\n<p>，因此我们可以改变属性 <code>a</code> 的值。<span style=\"color: rgba(0,0,0,0.65);background-color: rgb(241,241,241);font-size: 14px;font-family: monospace;\">const b = 2</span>  定义简单数据类型时，值就相当于 <code>const</code> 对象的指针，如果这个值改变了，那么指针就改变了，所以此时不能改变常量的值。</p>\n<p>由此可见，<code>const</code> 保证的只是定义的 指针保持不变，并不是确保值不变。</p>\n<p>这也是为什么 const、let 定义的变量不能二次声明，因为用const、let 声明变量的时候都会先去内存中（栈内存、堆内存）中查找是否存在该变量名，如果存在就报错，不存在则分配新的空间存储该变量的值。</p>\n<h3><span style=\"color: rgb(209,72,65);background-color: rgb(255,255,255);font-size: 14px;\">很容易忽略的一点</span>&nbsp;</h3>\n<pre>var a = new String('123')<br>var b = String('123')<br>var c = '123'<br>console.log(a==b, a===b, b==c, b===c, a==c, a===c)  <br>&gt;&gt;&gt; true false true true true false<br>console.log(typeof a)<br>&gt;&gt;&gt; 'object'</pre>\n<p><span style=\"color: rgb(209,72,65);\">这是为什么 ？</span></p>\n<p>new操作符是根据构造函数生成实例的，生成的是<span style=\"color: rgb(209,72,65);\">对象</span>，而不是基本类型，所以也就解释了上面输出。</p>\n<pre>var a = new String('123')<br>var b = new String('123')<br>console.log(a==b, a===b)<br>&gt;&gt;&gt; false false</pre>\n<p>很明显，如果 <code>a、b</code> 是存储在栈内存的话，则两者应该想等，说明两者是 <code>object</code> 类型，存在堆内存</p>\n<p>其实，我们所说的值的类型和引用类型、值传递、引用传递、浅拷贝、深拷贝，都是围绕栈堆内存展开的，一个是处理值、一个是处理指针。</p>\n<h3 style=\"text-align:start;\"><span style=\"color: rgb(209,72,65);\">说到这里就还可以扯下内存分配和垃圾回收</span></h3>\n<p>一般来说栈内存是线性有序存储、容量小，系统分配效果高，而堆内存首先要在堆内存中分配新的存储区域，之后又要把指针存储到栈内存中，相对来说效益就低了点。不可能一直存储变量，不回收变量，这样会影响性能，那我们就可以把已经无用的变量进行回收。</p>\n<p>垃圾回收方面，栈内存中的变量基本上用完就回收了，而堆内存中的变量因为可能存在很多不确定的引用，只要当所有引用的变量都销毁之后才能回收。</p>\n<p>常用垃圾回收方式：引用计数、标记清除</p>\n<h3><span style=\"color: rgb(209,72,65);\">到这里有可以说到闭包了~~~</span></h3>\n<h3><span style=\"color: rgb(209,72,65);\">说到闭包也可以扯扯防抖和节流~~~</span></h3>\n<h2><span style=\"color: rgb(209,72,65);\">知识点都是相关联的，一路带一路~~~</span></h2>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n"
        },
        {
          "createdAt": "2019-04-10 18:50",
          "updatedAt": "2020-02-25 13:19",
          "id": 4,
          "title": "JS 数组去重",
          "readedCount": 66,
          "author": "Gong",
          "summary": "数组去重的多种方式",
          "category": [
            "前端"
          ],
          "tag": [
            "JS"
          ],
          "content": "<p>数组去重在项目中也是常见的需求，一般都是后端SQL做处理了，那么前端处理的话，该怎么做呢？</p>\n<h2>双重循环</h2>\n<pre>&nbsp;&nbsp;const unique = arr =&gt; {<br>    let newArray = []<br>    let i = 0,<br>        isRepeat = false,<br>        len = arr.length<br>    for (i; i &lt; len; i++) {<br>      isRepeat = false<br>      let j = 0,<br>          newLen = newArray.length<br>      for (j; j &lt; newLen; j ++) {<br>        if (arr[i] === newArray[j]) {<br>          isRepeat = true<br>          break<br>        }<br>      }<br>      !isRepeat &amp;&amp; newArray.push(arr[i])<br>    }<br>    return newArray<br>  }</pre>\n<h2>forEach+includes</h2>\n<pre>&nbsp;const unique = arr =&gt; {<br>    let newArr = []<br>    arr.forEach(item =&gt;  !newArr.includes(item) &amp;&amp; newArr.push(item))<br>    return newArr<br>  }</pre>\n<h2>sort先排序，再判断相邻的元素是否相等</h2>\n<pre>const unique = arr =&gt; {<br>    let newArr = []<br>    arr.sort()<br>    arr.forEach((item, i) =&gt; {<br>      item !== arr[i+1] &amp;&amp; newArr.push(item)<br>    })<br>    return newArr<br>  }</pre>\n<h2>filter+indexof</h2>\n<pre>const unique = arr =&gt; {<br>    return arr.filter((item, index) =&gt; arr.indexOf(item) === index)<br>  }</pre>\n<h2>reduce</h2>\n<pre>const unique = arr =&gt; {<br>  return arr.reduce((pre, cur) =&gt; {<br>    !pre.includes(cur) &amp;&amp; pre.push(cur)<br>    return pre<br>  }, [])<br>}</pre>\n<h2>set</h2>\n<pre>const unique = arr =&gt; [...new Set(arr)]</pre>\n"
        },
        {
          "createdAt": "2019-03-31 15:53",
          "updatedAt": "2020-03-02 13:47",
          "id": 3,
          "title": "node + koa + mysql 搭建博客 server 端",
          "readedCount": 314,
          "author": "Gong",
          "summary": "基于 koa2 框架构建 noder server、sequelize 操作数据库，为web端提供接口服务 ",
          "category": [
            "服务端",
            "数据库"
          ],
          "tag": [
            "Koa",
            "Mysql",
            "Sequelize",
            "Node"
          ],
          "content": "<h3>koa-generator 搭建node服务器</h3>\n<p>通过 koa-generator 构建项目，全局安装</p>\n<pre>npm install -g koa-generato</pre>\n<p>创建 node-server 项目</p>\n<pre>koa node-server&nbsp;</pre>\n<p>进入项目</p>\n<pre>cd node-server&nbsp;</pre>\n<p>安装依赖</p>\n<pre>npn install</pre>\n<p>运行</p>\n<pre>npm dev</pre>\n<p>访问</p>\n<pre>&nbsp;localhost:3000</pre>\n<p><span style=\"color: rgb(0,0,0);font-family: Lucida Grande;\">出现 Hello Koa 2!，则表明项目运行成功</span>&nbsp;</p>\n<p>先看routes文件</p>\n<p>index.js</p>\n<pre>const router = require('koa-router')()<br>router.get('/', async (ctx, next) =&gt; {<br>  await ctx.render('index', {<br>    title: 'Hello Koa 2!'<br>  })<br>})<br>router.get('/string', async (ctx, next) =&gt; {<br>  ctx.body = 'koa2 string'<br>})<br>router.get('/json', async (ctx, next) =&gt; {<br>  ctx.body = {<br>    title: 'koa2 json'<br>  }<br>})<br>module.exports = router</pre>\n<p>users.js</p>\n<pre>const router = require('koa-router')()<br>router.prefix('/users')<br>router.get('/', function (ctx, next) {<br>  ctx.body = 'this is a users response!'<br>})<br>router.get('/bar', function (ctx, next) {<br>  ctx.body = 'this is a users/bar response'<br>})<br>module.exports = router</pre>\n<p>分别访问下列路由试试</p>\n<pre>http://localhost:3000/string | http://localhost:3000/users | http://localhost:3000/bar</pre>\n<p>大概你已经猜到了，koa-router 定义路由访问时返回相应的内容，那我们只需要把相应的 data 返回去就行了，只是我们的数据得从数据库查询出来。</p>\n<p>本地安装数据库此处就不再细说了，查阅资料可自行安装。</p>\n<p><a href=\"https://pan.baidu.com/s/1v18a7Z0E-VjM--oxmfwdFA\" target=\"_blank\">mysql可视化工具 Navicat</a>   提取码：ekzr</p>\n<p>安装后链接本地mysql</p>\n<p><span style=\"color: rgba(0,0,0,0.65);background-color: rgb(255,255,255);font-size: 14px;\">项目安裝 mysql</span>&nbsp;</p>\n<pre>npm install mysql --save</pre>\n<p><span style=\"color: rgba(0,0,0,0.65);background-color: rgb(255,255,255);font-size: 14px;\">安裝 </span><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: monospace;\">sequelize</span>&nbsp;</p>\n<pre>npm install --save sequelize</pre>\n<p><a href=\"https://itbilu.com/nodejs/npm/VkYIaRPz-.html#induction-install\" target=\"_blank\">sequelize 中文文档</a>   |  <a href=\"http://docs.sequelizejs.com/\" target=\"_blank\">sequelizejs 英文文档</a>&nbsp;</p>\n<p>新建 sequelize.js，建立连接池</p>\n<pre>const Sequelize = require('sequelize');<br>const sequelize = new Sequelize('dev', 'root', '123456', {<br>  host: 'localhost',<br>  dialect: 'mysql',<br>  operatorsAliases: false,<br>  pool: {<br>    max: 5,<br>    min: 0,<br>    acquire: 30000,<br>    idle: 10000<br>  }<br>})<br>sequelize<br>  .authenticate()<br>  .then(() =&gt; {<br>    console.log('MYSQL 连接成功......');<br>  })<br>  .catch(err =&gt; {<br>    console.error('链接失败:', err);<br>  });<br>// 根据模型自动创建表<br>sequelize.sync()<br>module.exports = sequelize</pre>\n<p>创建 model、controllers 文件夹 定义model：定义表结构；<span style=\"color: rgba(0,0,0,0.65);background-color: rgb(255,255,255);font-size: 14px;\">controller：定义对数据库的查询方法</span></p>\n<img src=\"https://upload-images.jianshu.io/upload_images/7256750-18968aeb5a1b5ddb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\" alt=\"undefined\" style=\"float:left;height: auto;width: auto\"/>\n<p>以tag.js为例</p>\n<p>model：tag.js</p>\n<pre>const sequelize = require('../sequelize ')<br>const Sequelize = require('sequelize')<br>const moment = require('moment') // 日期处理库<br>// 定义表结构<br>const tag = sequelize.define('tag', { <br>  id: {<br>    type: Sequelize.INTEGER(11), // 设置字段类型<br>    primaryKey: true, // 设置为主建<br>    autoIncrement: true // 自增<br>  },<br>  name: {<br>    type: Sequelize.STRING,<br>    unique: { // 唯一<br>      msg: '已添加'<br>    }<br>  },<br>  createdAt: {<br>    type: Sequelize.DATE,<br>    defaultValue: Sequelize.NOW,<br>    get() {<br>      return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm') // this.getDataValue 获取当前字段value<br>    }<br>  },<br>  updatedAt: {<br>    type: Sequelize.DATE,<br>    defaultValue: Sequelize.NOW,<br>    get() {<br>      return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm')<br>    }<br>  }<br>},<br>{<br>  freezeTableName: true // sequelize会自动使用传入的模型名（define的第一个参数）的复数做为表名 设置true取消默认设置<br>})<br>module.exports = tag</pre>\n<p><span style=\"color: rgba(0,0,0,0.65);background-color: rgb(255,255,255);font-size: 14px;\">controller:</span> tag.s  定义了 create、findAll、findAndCountAll、destroy 方法</p>\n<pre>const Tag = require('../model/tag')<br>const Op = require('sequelize').Op<br>const listAll = async (ctx) =&gt; {<br>  const data = await Tag.findAll()<br>  ctx.body = {<br>    code: 1000,<br>    data<br>  }<br>}<br>const list = async (ctx) =&gt; {<br>  const query = ctx.query<br>  const where = {<br>    name: {<br>      [Op.like]: `%${query.name}%`<br>    }<br>  }<br>  const {rows:data, count: total } = await Tag.findAndCountAll({<br>    where,<br>    offset: (+query.pageNo - 1) * +query.pageSize,<br>    limit: +query.pageSize,<br>    order: [<br>      ['createdAt', 'DESC']<br>    ]<br>  })<br>  ctx.body = {<br>    data,<br>    total,<br>    code: 1000,<br>    desc: 'success'<br>  }<br>}<br>const create = async (ctx) =&gt; {<br>  const params = ctx.request.body<br>  if (!params.name) {<br>    ctx.body = {<br>      code: 1003,<br>      desc: '标签不能为空'<br>    }<br>    return false<br>  }<br>  try {<br>    await Tag.create(params)<br>    ctx.body = {<br>      code: 1000,<br>      data: '创建成功'<br>    }<br>  }<br>  catch(err) {<br>    const msg = err.errors[0]<br>    ctx.body = {<br>      code: 300,<br>      data: msg.value + msg.message<br>    }<br>  }<br>}<br>const destroy = async ctx =&gt; {<br>  await Tag.destroy({where: ctx.request.body})<br>  ctx.body = {<br>    code: 1000,<br>    desc: '删除成功'<br>  }<br>}<br>module.exports = {<br>  list,<br>  create,<br>  listAll,<br>  destroy<br>}</pre>\n<p>在 routers 文件夹 index.js 中引入定义好的 tag <span style=\"color: rgba(0,0,0,0.65);background-color: rgb(255,255,255);font-size: 14px;\">controller</span> ，定义路由</p>\n<pre>const router = require('koa-router')()<br>const Tag = require('../controllers/tag')<br>// tag<br>router.get('/tag/list', Tag.list)<br>router.get('/tag/list/all', Tag.listAll)<br>router.post('/tag/create', Tag.create)<br>router.post('/tag/destroy', Tag.destroy)<br>module.exports = router<br>/* 如每个 route 是单独的文件，可以使用 router.prefix 定义路由前缀<br>router.prefix('/tag')<br>router.get('/list', Tag.list)<br>router.get('/list/all', Tag.listAll)<br>router.post('/create', Tag.create)<br>router.post('/destroy', Tag.destroy)<br>*/</pre>\n<p>因为 app 中 已经引入 <span style=\"color: rgba(0,0,0,0.65);background-color: rgb(255,255,255);font-size: 14px;\">routers </span> 中的 index.js 调用了 app.use了，所以此处不需再引入</p>\n<p>在浏览器里输入 localhost:3000/tag/list 就可以看到返回的数据结构了，只不过 data 为空数组，因为我们还没添加进去任何数据</p>\n<h4>到这里，model 定义表结构、sequelize操作数据库、koa-router 定义路由 这一套流程算是完成了，其他表结构，接口 都是一样定义的</h4>\n<p><a href=\"https://github.com/gzwgq222/blog-server\" target=\"_blank\">blog-server 源码</a>&nbsp;</p>\n<p>有问题欢迎提 <a href=\"https://github.com/gzwgq222/blog-server/issues\" target=\"_blank\">Issues </a>&nbsp;</p>\n<p>错误之处，望斧正</p>\n<p>觉得不错或对你有帮助，<a href=\"https://github.com/gzwgq222/blog-server\" target=\"_blank\">欢迎 star</a>&nbsp;</p>\n"
        }
      ]
    }
  }

  render() {
    const ListDate = this.state.data.map((item) => (
      <Timeline.Item key={item.id + Math.random()}>
        <Link to={`/web/index/${item.id}`} >

          <span style={{ paddingRight: 10 }}>{item.createdAt.slice(0, 10)}</span>  {item.title}
        </Link>
      </Timeline.Item>

    )
    )
    return (
      <div>
        <Card bordered={false}>
          <Timeline>
            <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} color="red">
              <span style={{ fontSize: 18 }}>2020</span>
            </Timeline.Item>
            {
              ListDate
            }
          </Timeline>
        </Card>
      </div>
    )
  }
}

export default Archive