// const string = ``不再直接写入style代码(字符串),太多
// 新方法:放入新建的css.js里，然通过import引入
import string from './css.js'//string的名字自定义,但需要与css.js中的名字一致


// let n = 1
// demo.innerText = string.substr(0, n)
// demo2.innerHTML = string.substr(0, n)
// console.log(n)

// setInterval(() => {
//     n += 1
//     demo.innerHTML = string.substr(0, n)
//     // console.log(n + ':' + string.substr(0, n))
// }, 100)

// //时间间隔
// let time = 100

// //后面需要写两次重复的,function封装下
// const run = () => {
//     n += 1
//     if (n > string.length) {//停止计时器
//         window.clearInterval(id)
//         return
//     }
//     demo.innerText = string.substr(0, n)
//     demo2.innerHTML = string.substr(0, n)
//     // demo.scrollTop = 99999//粗暴
//     demo.scrollTop = demo.scrollHeight//当前页面滚动条的最大高度
//     // console.log(n + ':' + string.substr(0, n))
// }
// //传入封装好的代码,直接调用即可
// let id = setInterval(() => {//需提前声明变量名--'id'才能调用
//     run()
// }, time)

// //暂停,杀死计时器
// btnPause.onclick = () => {
//     window.clearInterval(id)//需提前声明变量名--'id'
// }

// //播放,新建计时器
// btnPlay.onclick = () => {
//     //第二次传入封装好的代码,直接调用即可
//     id = setInterval(() => {//需提前声明变量名--'id'才能调用
//         run()
//     }, time)
// }

// //慢速按钮(先杀死,在新建)
// btnSlow.onclick = () => {
//     window.clearInterval(id)
//     time = 300
//     id = setInterval(() => {//需提前声明变量名--'id'才能调用
//         run()
//     }, time)
// }

// //中速按钮(先杀死,在新建)
// btnNormal.onclick = () => {
//     window.clearInterval(id)
//     time = 100
//     id = setInterval(() => {//需提前声明变量名--'id'才能调用
//         run()
//     }, time)
// }

// //快速速按钮(先杀死,在新建)
// btnFast.onclick = () => {
//     window.clearInterval(id)
//     time = 0
//     id = setInterval(() => {//需提前声明变量名--'id'才能调用
//         run()
//     }, time)
// }

//____________________________________________
// let n = 1
// demo.innerText = string.substr(0, n)
// demo2.innerHTML = string.substr(0, n)

//代码世界:丑--重复就是丑!!垃圾!!不能重复!!!老前端带你写代码！
//优化代码：
// setInterval(() => {
//         run()
//     }, time)

// 拓展：
// const x = () => {
//     run()
// }
// x 和 run() 是否等价？
// 答案：当然等价了！！！x === run 函数相等

// 所以
// const x = () => {
//     run()
// }
// 等价于
// const x = (run)//注意此处不能写run()不然是函数的返回值！函数不加括号是函数的返回值
// 示例：
// //快速速按钮(先杀死,在新建)
// btnFast.onclick = () => {
//     window.clearInterval(id)
//     time = 0
//     id = setInterval(run, time)//run后不能加()，加了就不是函数了，是函数的返回值！！！
// }

// //时间间隔
// let time = 100

// //后面需要写两次重复的,function封装下
// const run = () => {
//     n += 1
//     if (n > string.length) {//停止计时器
//         pause()
//         return
//     }
//     demo.innerText = string.substr(0, n)
//     demo2.innerHTML = string.substr(0, n)
//     // demo.scrollTop = 99999//粗暴
//     demo.scrollTop = demo.scrollHeight//当前页面滚动条的最大高度
//     // console.log(n + ':' + string.substr(0, n))
// }

// // 优化代码：
// // id = setInterval(run, time)
// const play = () => {//封装运行
//     return setInterval(run, time)
// }


// // 优化代码：
// // window.clearInterval(id)
// const pause = () => {
//     window.clearInterval(id)//封装杀死
// }

// let id = play();//把play的结果返回id

// //暂停,杀死计时器
// btnPause.onclick = () => {
//     pause()
// }

// //播放,新建计时器
// btnPlay.onclick = () => {
//     //第二次传入封装好的代码,直接调用即可
//     id = play()
// }

// //慢速按钮(先杀死,在新建)
// btnSlow.onclick = () => {
//     pause()
//     time = 300
//     id = play()
// }

// //中速按钮(先杀死,在新建)
// btnNormal.onclick = () => {
//     pause()
//     time = 100
//     id = play()
// }

// //快速速按钮(先杀死,在新建)
// btnFast.onclick = () => {
//     pause()
//     time = 0
//     id = play()
// }

//____________________________________________
// let n = 1
// demo.innerText = string.substr(0, n)
// demo2.innerHTML = string.substr(0, n)
//还是丑（老前端）使用面向对象的方法进行再次优化！！！
// 把按钮监听函数也做成封装函数！！牛逼


// //时间间隔
// let time = 100

// //后面需要写两次重复的,function封装下
// const run = () => {
//     n += 1
//     if (n > string.length) {//停止计时器
//         pause()
//         return
//     }
//     demo.innerText = string.substr(0, n)
//     demo2.innerHTML = string.substr(0, n)
//     // demo.scrollTop = 99999//粗暴
//     demo.scrollTop = demo.scrollHeight//当前页面滚动条的最大高度
//     // console.log(n + ':' + string.substr(0, n))
// }

// // 优化代码：
// // id = setInterval(run, time)
// const play = () => {//封装运行
//     return setInterval(run, time)
// }


// // 优化代码：
// // window.clearInterval(id)
// const pause = () => {
//     window.clearInterval(id)//封装杀死
// }

// let id = play();//把play的结果返回id

// //暂停,杀死计时器
// btnPause.onclick = pause//等价变形


// //播放,新建计时器
// btnPlay.onclick = () => {
//     //第二次传入封装好的代码,直接调用即可
//     id = play()
// }


// const slow = () => {
//     pause()
//     time = 300
//     id = play()
// }
// //慢速按钮(先杀死,在新建)
// btnSlow.onclick = () => {
//     slow()//已经在上面封装，而且与直接slow等价，不需要箭头函数，再次优化

// }
// //等价变形原理：如果一个函数什么也没干，只是调用另一个函数，就是一句废话！使用等价变形进行优化
// btnSlow.onclick = slow//注意不能加括号，加了就会立即调用


// //继续先封装再等价变形！
// const normal = () => {
//     pause()
//     time = 100
//     id = play()
// }
// //中速按钮(先杀死,在新建)
// btnNormal.onclick = normal


// //继续先封装再等价变形！
// const fast = () => {
//     pause()
//     time = 0
//     id = play()
// }
// //快速速按钮(先杀死,在新建)
// btnFast.onclick = fast

//____________________________________________
//这个一个函数都是在操作播放器（player），把几个函数组织到一起变成对象（那么可以把这些函数放到播放器里），形成一个大播放器的内置函数（类似原型/属性）！针对这些函数进行封装，挂到大播放器里面
// 但是要注意：现在的函数变成了播放器的内置函数，调用函数时必须要加player！


// //正规写法：先获取！！
// const demo = document.querySelector('#demo')
// const demo2 = document.querySelector('#demo2')

// let n = 1
// demo.innerText = string.substr(0, n)
// demo2.innerHTML = string.substr(0, n)
// //时间间隔
// let time = 100

// const player = {
//     //后面需要写两次重复的,function封装下
//     run: () => {
//         n += 1
//         if (n > string.length) {//停止计时器
//             player.pause()
//             return
//         }
//         demo.innerText = string.substr(0, n)
//         demo2.innerHTML = string.substr(0, n)
//         // demo.scrollTop = 99999//粗暴
//         demo.scrollTop = demo.scrollHeight//当前页面滚动条的最大高度
//         // console.log(n + ':' + string.substr(0, n))
//     },
//     // 优化代码：
//     // id = setInterval(run, time)
//     play: () => {//封装运行
//         return setInterval(player.run, time)
//     },
//     // 优化代码：
//     // window.clearInterval(id)
//     pause: () => {
//         window.clearInterval(id)//封装杀死
//     },
//     slow: () => {
//         player.pause()
//         time = 300
//         id = player.play()
//     },
//     //继续先封装再等价变形！
//     normal: () => {
//         player.pause()
//         time = 100
//         id = player.play()
//     },
//     //继续先封装再等价变形！
//     fast: () => {
//         player.pause()
//         time = 0
//         id = player.play()
//     }

// }

// let id = player.play();//把play的结果返回id

// //暂停,杀死计时器
// //首先正规获取！
// document.querySelector('#btnPause')
//     .onclick = player.pause//等价变形

// //播放,新建计时器
// //首先正规获取！
// document.querySelector('#btnPlay')
//     .onclick = () => {
//         //第二次传入封装好的代码,直接调用即可
//         id = player.play()
//     }

// //慢速按钮(先杀死,在新建)
// //已经在上面封装，而且与直接slow等价，不需要箭头函数，再次优化
// //等价变形原理：如果一个函数什么也没干，只是调用另一个函数，就是一句废话！使用等价变形进行优化
// //首先正规获取！
// document.querySelector('#btnSlow')
//     .onclick = player.slow//注意不能加括号，加了就会立即调用

// //中速按钮(先杀死,在新建)
// //首先正规获取！
// document.querySelector('#btnNormal')
//     .onclick = player.normal

// //快速速按钮(先杀死,在新建)
// //首先正规获取！
// document.querySelector('#btnFast')
//     .onclick = player.fast


// //____________________________________________
// //继续丑！！把前面的声明变成初始化（init）方法也写入自身！！继续牛逼
// // init: () => {
// //     demo.innerText = string.substr(0, n)
// //     demo2.innerHTML = string.substr(0, n)
// //     id = player.play();//把play的结果返回id
// // },

// //正规写法：先获取！！
// const demo = document.querySelector('#demo')
// const demo2 = document.querySelector('#demo2')

// let n = 1
// //时间间隔
// let time = 100
// let id

// const player = {
//     init: () => {
//         demo.innerText = string.substr(0, n)
//         demo2.innerHTML = string.substr(0, n)
//         id = player.play();//把play的结果返回id
//     },
//     //后面需要写两次重复的,function封装下
//     run: () => {
//         n += 1
//         if (n > string.length) {//停止计时器
//             player.pause()
//             return
//         }
//         demo.innerText = string.substr(0, n)
//         demo2.innerHTML = string.substr(0, n)
//         // demo.scrollTop = 99999//粗暴
//         demo.scrollTop = demo.scrollHeight//当前页面滚动条的最大高度
//         // console.log(n + ':' + string.substr(0, n))
//     },
//     // 优化代码：
//     // id = setInterval(run, time)
//     play: () => {//封装运行
//         return setInterval(player.run, time)
//     },
//     // 优化代码：
//     // window.clearInterval(id)
//     pause: () => {
//         window.clearInterval(id)//封装杀死
//     },
//     slow: () => {
//         player.pause()
//         time = 300
//         id = player.play()
//     },
//     //继续先封装再等价变形！
//     normal: () => {
//         player.pause()
//         time = 100
//         id = player.play()
//     },
//     //继续先封装再等价变形！
//     fast: () => {
//         player.pause()
//         time = 0
//         id = player.play()
//     }

// }

// player.init()//只需要调用初始化即可！


// //暂停,杀死计时器
// //首先正规获取！
// document.querySelector('#btnPause')
//     .onclick = player.pause//等价变形

// //播放,新建计时器
// //首先正规获取！
// document.querySelector('#btnPlay')
//     .onclick = () => {
//         //第二次传入封装好的代码,直接调用即可
//         id = player.play()
//     }

// //慢速按钮(先杀死,在新建)
// //已经在上面封装，而且与直接slow等价，不需要箭头函数，再次优化
// //等价变形原理：如果一个函数什么也没干，只是调用另一个函数，就是一句废话！使用等价变形进行优化
// //首先正规获取！
// document.querySelector('#btnSlow')
//     .onclick = player.slow//注意不能加括号，加了就会立即调用

// //中速按钮(先杀死,在新建)
// //首先正规获取！
// document.querySelector('#btnNormal')
//     .onclick = player.normal

// //快速速按钮(先杀死,在新建)
// //首先正规获取！
// document.querySelector('#btnFast')
//     .onclick = player.fast


// //____________________________________________
// //还是丑！！每次调用play的结果都返回给id！！内置play


// //正规写法：先获取！！
// const demo = document.querySelector('#demo')
// const demo2 = document.querySelector('#demo2')

// let n = 1
// //时间间隔
// let time = 100
// let id

// const player = {
//     init: () => {
//         demo.innerText = string.substr(0, n)
//         demo2.innerHTML = string.substr(0, n)
//         player.play();//每次调用play的结果都返回给id
//     },
//     //后面需要写两次重复的,function封装下
//     run: () => {
//         n += 1
//         if (n > string.length) {//停止计时器
//             player.pause()
//             return
//         }
//         demo.innerText = string.substr(0, n)
//         demo2.innerHTML = string.substr(0, n)
//         // demo.scrollTop = 99999//粗暴
//         demo.scrollTop = demo.scrollHeight//当前页面滚动条的最大高度
//         // console.log(n + ':' + string.substr(0, n))
//     },
//     // 优化代码：
//     // id = setInterval(run, time)
//     play: () => {//封装运行
//         // return setInterval(player.run, time)//优化变成内置play并赋值给id，外面就不需要再赋值
//         id = setInterval(player.run, time);
//     },
//     // 优化代码：
//     // window.clearInterval(id)
//     pause: () => {
//         window.clearInterval(id)//封装杀死
//     },
//     slow: () => {
//         player.pause()
//         time = 300
//         player.play()
//     },
//     //继续先封装再等价变形！
//     normal: () => {
//         player.pause()
//         time = 100
//         player.play()
//     },
//     //继续先封装再等价变形！
//     fast: () => {
//         player.pause()
//         time = 0
//         player.play()
//     }

// }

// player.init()//只需要调用初始化即可！

// //暂停,杀死计时器
// //首先正规获取！
// document.querySelector('#btnPause')
//     .onclick = player.pause//等价变形

// //播放,新建计时器
// //首先正规获取！
// document.querySelector('#btnPlay')
//     .onclick = player.play //第二次传入封装好的代码,直接调用即可

// //慢速按钮(先杀死,在新建)
// //已经在上面封装，而且与直接slow等价，不需要箭头函数，再次优化
// //等价变形原理：如果一个函数什么也没干，只是调用另一个函数，就是一句废话！使用等价变形进行优化
// //首先正规获取！
// document.querySelector('#btnSlow')
//     .onclick = player.slow//注意不能加括号，加了就会立即调用

// //中速按钮(先杀死,在新建)
// //首先正规获取！
// document.querySelector('#btnNormal')
//     .onclick = player.normal

// //快速速按钮(先杀死,在新建)
// //首先正规获取！
// document.querySelector('#btnFast')
//     .onclick = player.fast



// //____________________________________________
// //丑丑丑！！为什么不把监听函数也放到（绑定到）函数的初始化里呢！牛牛牛！


// //正规写法：先获取！！
// const demo = document.querySelector('#demo')
// const demo2 = document.querySelector('#demo2')

// let n = 1
// //时间间隔
// let time = 100
// let id

// const player = {
//     init: () => {
//         demo.innerText = string.substr(0, n)
//         demo2.innerHTML = string.substr(0, n)
//         player.play();//每次调用play的结果都返回给id
//         //暂停,杀死计时器
//         //首先正规获取！
//         document.querySelector('#btnPause')
//             .onclick = player.pause//等价变形

//         //播放,新建计时器
//         //首先正规获取！
//         document.querySelector('#btnPlay')
//             .onclick = player.play //第二次传入封装好的代码,直接调用即可

//         //慢速按钮(先杀死,在新建)
//         //已经在上面封装，而且与直接slow等价，不需要箭头函数，再次优化
//         //等价变形原理：如果一个函数什么也没干，只是调用另一个函数，就是一句废话！使用等价变形进行优化
//         //首先正规获取！
//         document.querySelector('#btnSlow')
//             .onclick = player.slow//注意不能加括号，加了就会立即调用

//         //中速按钮(先杀死,在新建)
//         //首先正规获取！
//         document.querySelector('#btnNormal')
//             .onclick = player.normal

//         //快速速按钮(先杀死,在新建)
//         //首先正规获取！
//         document.querySelector('#btnFast')
//             .onclick = player.fast
//     },
//     //后面需要写两次重复的,function封装下
//     run: () => {
//         n += 1
//         if (n > string.length) {//停止计时器
//             player.pause()
//             return
//         }
//         demo.innerText = string.substr(0, n)
//         demo2.innerHTML = string.substr(0, n)
//         // demo.scrollTop = 99999//粗暴
//         demo.scrollTop = demo.scrollHeight//当前页面滚动条的最大高度
//         // console.log(n + ':' + string.substr(0, n))
//     },
//     // 优化代码：
//     // id = setInterval(run, time)
//     play: () => {//封装运行
//         // return setInterval(player.run, time)//优化变成内置play并赋值给id，外面就不需要再赋值
//         id = setInterval(player.run, time);
//     },
//     // 优化代码：
//     // window.clearInterval(id)
//     pause: () => {
//         window.clearInterval(id)//封装杀死
//     },
//     slow: () => {
//         player.pause()
//         time = 300
//         player.play()
//     },
//     //继续先封装再等价变形！
//     normal: () => {
//         player.pause()
//         time = 100
//         player.play()
//     },
//     //继续先封装再等价变形！
//     fast: () => {
//         player.pause()
//         time = 0
//         player.play()
//     }

// }

// player.init()//只需要调用初始化即可！


// //____________________________________________
// //丑爆了！！把函数的初始化里的监听函数还是重复！！声明绑定函数,然后再初始话调用函数即可！！继续优化！牛牛牛！


// //正规写法：先获取！！
// const demo = document.querySelector('#demo')
// const demo2 = document.querySelector('#demo2')

// let n = 1
// //时间间隔
// let time = 100
// let id

// const player = {
//     init: () => {
//         demo.innerText = string.substr(0, n)
//         demo2.innerHTML = string.substr(0, n)
//         player.play();//每次调用play的结果都返回给id
//         player.bindEvents()
//     },
//     bindEvents: () => {
//         //暂停,杀死计时器
//         //首先正规获取！
//         document.querySelector('#btnPause')
//             .onclick = player.pause//等价变形

//         //播放,新建计时器
//         //首先正规获取！
//         document.querySelector('#btnPlay')
//             .onclick = player.play //第二次传入封装好的代码,直接调用即可

//         //慢速按钮(先杀死,在新建)
//         //已经在上面封装，而且与直接slow等价，不需要箭头函数，再次优化
//         //等价变形原理：如果一个函数什么也没干，只是调用另一个函数，就是一句废话！使用等价变形进行优化
//         //首先正规获取！
//         document.querySelector('#btnSlow')
//             .onclick = player.slow//注意不能加括号，加了就会立即调用

//         //中速按钮(先杀死,在新建)
//         //首先正规获取！
//         document.querySelector('#btnNormal')
//             .onclick = player.normal

//         //快速速按钮(先杀死,在新建)
//         //首先正规获取！
//         document.querySelector('#btnFast')
//             .onclick = player.fast
//     },
//     //后面需要写两次重复的,function封装下
//     run: () => {
//         n += 1
//         if (n > string.length) {//停止计时器
//             player.pause()
//             return
//         }
//         demo.innerText = string.substr(0, n)
//         demo2.innerHTML = string.substr(0, n)
//         // demo.scrollTop = 99999//粗暴
//         demo.scrollTop = demo.scrollHeight//当前页面滚动条的最大高度
//         // console.log(n + ':' + string.substr(0, n))
//     },
//     // 优化代码：
//     // id = setInterval(run, time)
//     play: () => {//封装运行
//         // return setInterval(player.run, time)//优化变成内置play并赋值给id，外面就不需要再赋值
//         id = setInterval(player.run, time);
//     },
//     // 优化代码：
//     // window.clearInterval(id)
//     pause: () => {
//         window.clearInterval(id)//封装杀死
//     },
//     slow: () => {
//         player.pause()
//         time = 300
//         player.play()
//     },
//     //继续先封装再等价变形！
//     normal: () => {
//         player.pause()
//         time = 100
//         player.play()
//     },
//     //继续先封装再等价变形！
//     fast: () => {
//         player.pause()
//         time = 0
//         player.play()
//     }

// }

// player.init()//只需要调用初始化即可！


// //____________________________________________
// //丑出天际！！继续优化！继续把重复的绑定函数（bindEvents）优化，现在只有选择器和调用的函数不一样，其他都一样！！通过数据结构（哈希表）！牛逼思路！


// //正规写法：先获取！！
// const demo = document.querySelector('#demo')
// const demo2 = document.querySelector('#demo2')

// let n = 1
// //时间间隔
// let time = 100
// let id

// const player = {
//     init: () => {
//         demo.innerText = string.substr(0, n)
//         demo2.innerHTML = string.substr(0, n)
//         player.play();//每次调用play的结果都返回给id
//         player.bindEvents()
//     },
//     //数据结构:哈希表：一一对应
//     // const hashTable = {
//     //     '#btnPause': player.play,
//     //     '#btnPlay': player.play,
//     //     '#btnSlow': player.slow,
//     //     '#btnNormal': player.normal,
//     //     '#btnFast': player.fast
//     // }
//     //换个名字events事件
//     events: {
//         '#btnPause': player.play,
//         '#btnPlay': player.play,
//         '#btnSlow': player.slow,
//         '#btnNormal': player.normal,
//         '#btnFast': player.fast
//     },
//     bindEvents: () => {
//         //遍历哈希表,通过key和value调用
//         for (let key in events) {
//             // //获取值value//value只使用了一次，太繁琐优化
//             // const value = hashTable[key]
//             // document.querySelector(key).onclick = value

//             //优化后
//             document.querySelector(key).onclick = events[key]

//         }
//     },
//     //后面需要写两次重复的,function封装下
//     run: () => {
//         n += 1
//         if (n > string.length) {//停止计时器
//             player.pause()
//             return
//         }
//         demo.innerText = string.substr(0, n)
//         demo2.innerHTML = string.substr(0, n)
//         // demo.scrollTop = 99999//粗暴
//         demo.scrollTop = demo.scrollHeight//当前页面滚动条的最大高度
//         // console.log(n + ':' + string.substr(0, n))
//     },
//     // 优化代码：
//     // id = setInterval(run, time)
//     play: () => {//封装运行
//         // return setInterval(player.run, time)//优化变成内置play并赋值给id，外面就不需要再赋值
//         id = setInterval(player.run, time);
//     },
//     // 优化代码：
//     // window.clearInterval(id)
//     pause: () => {
//         window.clearInterval(id)//封装杀死
//     },
//     slow: () => {
//         player.pause()
//         time = 300
//         player.play()
//     },
//     //继续先封装再等价变形！
//     normal: () => {
//         player.pause()
//         time = 100
//         player.play()
//     },
//     //继续先封装再等价变形！
//     fast: () => {
//         player.pause()
//         time = 0
//         player.play()
//     }

// }

// player.init()//只需要调用初始化即可！


// //____________________________________________
// //丑！！还有bug！你不能再声明这个对象的时候，还用这个对象
// // 比如：就是错误的
// // var a = {
// //     xxx:a
// // }
// // a 为 undefined
// //events放到bindEvents里面是可以的，因为是异步
// //events放到外边的话，value就不能使用这个对象player，需要变成字符串
// //


// //正规写法：先获取！！
// const demo = document.querySelector('#demo')
// const demo2 = document.querySelector('#demo2')

// let n = 1
// //时间间隔
// let time = 100
// let id

// const player = {
//     init: () => {
//         demo.innerText = string.substr(0, n)
//         demo2.innerHTML = string.substr(0, n)
//         player.play();//每次调用play的结果都返回给id
//         player.bindEvents()
//     },
//     //数据结构:哈希表：一一对应
//     // const hashTable = {
//     //     '#btnPause': player.play,
//     //     '#btnPlay': player.play,
//     //     '#btnSlow': player.slow,
//     //     '#btnNormal': player.normal,
//     //     '#btnFast': player.fast
//     // }
//     //换个名字events事件
//     events: {
//         '#btnPause': 'play',
//         '#btnPlay': 'play',
//         '#btnSlow': 'slow',
//         '#btnNormal': 'normal',
//         '#btnFast': 'fast'
//     },
//     bindEvents: () => {//精髓！！！66666
//         //遍历哈希表,通过key和value调用
//         for (let key in player.events) {//注意修改为player开头
//             //获取value
//             const value = player.events[key]//events[key]=== pause/play/slow。。

//             document.querySelector(key).onclick = player[value]//重点：player去获取相应的字符串【value】然后对应到play的函数
//         }
//     },

//     //后面需要写两次重复的,function封装下
//     run: () => {
//         n += 1
//         if (n > string.length) {//停止计时器
//             player.pause()
//             return
//         }
//         demo.innerText = string.substr(0, n)
//         demo2.innerHTML = string.substr(0, n)
//         // demo.scrollTop = 99999//粗暴
//         demo.scrollTop = demo.scrollHeight//当前页面滚动条的最大高度
//         // console.log(n + ':' + string.substr(0, n))
//     },
//     // 优化代码：
//     // id = setInterval(run, time)
//     play: () => {//封装运行
//         // return setInterval(player.run, time)//优化变成内置play并赋值给id，外面就不需要再赋值
//         id = setInterval(player.run, time);
//     },
//     // 优化代码：
//     // window.clearInterval(id)
//     pause: () => {
//         window.clearInterval(id)//封装杀死
//     },
//     slow: () => {
//         player.pause()
//         time = 300
//         player.play()
//     },
//     //继续先封装再等价变形！
//     normal: () => {
//         player.pause()
//         time = 100
//         player.play()
//     },
//     //继续先封装再等价变形！
//     fast: () => {
//         player.pause()
//         time = 0
//         player.play()
//     }

// }

// player.init()//只需要调用初始化即可！


// //____________________________________________
// //丑！！还有bug！BUG:有可能遍历到player.events继承的对象
// // 猪队友有可能会手贱写了句: Object.prototype.x = 1
// // console(key)=>当遍历key就会遍历到x(不需要的x)
// //需要加入重要的防御性编程！！！！！！！！！牛逼

// // bindEvents: () => {
// //     for (let key in player.events) {//BUG:遍历player.events有可能遍历到player.events继承的对象
// //         const value = player.events[key]
// //         document.querySelector(key).onclick = player[value]
// //     }
// // },


// //正规写法：先获取！！
// const demo = document.querySelector('#demo')
// const demo2 = document.querySelector('#demo2')

// let n = 1
// //时间间隔
// let time = 100
// let id

// const player = {
//     init: () => {
//         demo.innerText = string.substr(0, n)
//         demo2.innerHTML = string.substr(0, n)
//         player.play();//每次调用play的结果都返回给id
//         player.bindEvents()
//     },
//     //数据结构:哈希表：一一对应
//     // const hashTable = {
//     //     '#btnPause': player.play,
//     //     '#btnPlay': player.play,
//     //     '#btnSlow': player.slow,
//     //     '#btnNormal': player.normal,
//     //     '#btnFast': player.fast
//     // }
//     //换个名字events事件
//     events: {
//         '#btnPause': 'pause',
//         '#btnPlay': 'play',
//         '#btnSlow': 'slow',
//         '#btnNormal': 'normal',
//         '#btnFast': 'fast'
//     },
//     bindEvents: () => {//精髓！！！66666
//         //遍历哈希表,通过key和value调用
//         for (let key in player.events) {//注意修改为player开头
//             if (player.events.hasOwnProperty(key)) {//防御性编程：如果key时player.events的自身属性则再运行代码，不考虑继承代码
//                 //获取value
//                 const value = player.events[key]//events[key]=== pause/play/slow。。

//                 document.querySelector(key).onclick = player[value]//重点：player去获取相应的字符串【value】然后对应到play的函数
//             }

//         }
//     },

//     //后面需要写两次重复的,function封装下
//     run: () => {
//         n += 1
//         if (n > string.length) {//停止计时器
//             player.pause()
//             return
//         }
//         demo.innerText = string.substr(0, n)
//         demo2.innerHTML = string.substr(0, n)
//         // demo.scrollTop = 99999//粗暴
//         demo.scrollTop = demo.scrollHeight//当前页面滚动条的最大高度
//         // console.log(n + ':' + string.substr(0, n))
//     },
//     // 优化代码：
//     // id = setInterval(run, time)
//     play: () => {//封装运行
//         // return setInterval(player.run, time)//优化变成内置play并赋值给id，外面就不需要再赋值
//         id = setInterval(player.run, time);
//     },
//     // 优化代码：
//     // window.clearInterval(id)
//     pause: () => {
//         window.clearInterval(id)//封装杀死
//     },
//     slow: () => {
//         player.pause()
//         time = 300
//         player.play()
//     },
//     //继续先封装再等价变形！
//     normal: () => {
//         player.pause()
//         time = 100
//         player.play()
//     },
//     //继续先封装再等价变形！
//     fast: () => {
//         player.pause()
//         time = 0
//         player.play()
//     }

// }

// player.init()//只需要调用初始化即可！


//____________________________________________
//最终大魔王！！丑丑！！始终都有优化的空间！！！不能容忍除了一个对象player和一个初始化，竟然还有其他的东西！！不能！！都放到自身上去

const player = {
    ui: {//比较特殊：是界面上的元素,单独用对象包裹
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    id: undefined,//默认undefin
    time: 100,
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    n: 1,//let n=1 把n放入对象身上就变成的自身属性，所有调用n的地方揩油都需要加player
    bindEvents: () => {//精髓！！！66666
        //遍历哈希表,通过key和value调用
        for (let key in player.events) {//注意修改为player开头
            if (player.events.hasOwnProperty(key)) {//防御性编程：如果key时player.events的自身属性则再运行代码，不考虑继承代码
                //获取value
                const value = player.events[key]//events[key]=== pause/play/slow。。

                document.querySelector(key).onclick = player[value]//重点：player去获取相应的字符串【value】然后对应到play的函数
            }

        }
    },
    init: () => {
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.bindEvents()
        player.play()//每次调用play的结果都返回给id
    },
    //数据结构:哈希表：一一对应
    // const hashTable = {
    //     '#btnPause': player.play,
    //     '#btnPlay': player.play,
    //     '#btnSlow': player.slow,
    //     '#btnNormal': player.normal,
    //     '#btnFast': player.fast
    // }
    //换个名字events事件


    //后面需要写两次重复的,function封装下
    run: () => {
        player.n += 1
        if (player.n > string.length) {//停止计时器
            player.pause()
            return
        }
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        // demo.scrollTop = 99999//粗暴
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight//当前页面滚动条的最大高度
        // console.log(n + ':' + string.substr(0, n))
    },
    // 优化代码：
    // id = setInterval(run, time)
    play: () => {//封装运行
        // return setInterval(player.run, time)//优化变成内置play并赋值给id，外面就不需要再赋值
        player.id = setInterval(player.run, player.time);
    },
    // 优化代码：
    // window.clearInterval(id)
    pause: () => {
        window.clearInterval(player.id)//封装杀死
    },
    slow: () => {
        player.pause()
        player.time = 300
        player.play()
    },
    //继续先封装再等价变形！
    normal: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    //继续先封装再等价变形！
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    }

}

player.init()//只需要调用初始化即可！