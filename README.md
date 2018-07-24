# jquery.period.js
批次讓元素間隔時間執行

# 簡單使用
這個範例是讓所有的 .item 間距 200 毫秒，批次動畫的增加高度。
````javascript
$(".item").period({
    delayTimes: 200,
    before: function (){
        // ...
    },
    todo: function(index){
        // ...
    },
    after: function (){
        // ...
    }
})
````

# 看範例
前往查看 Codepen => https://codepen.io/fdjkgh580/pen/NBRLae
