# vue-list-scroll
A component for list scroll

# use
```javascript
import listScroll from 'common/activity/listScroll.js';

this.$nextTick(()=>{
    new listScroll({
        ulDom: "your dom name",
        forward: "portrait",
        showItemCount: 1,
        interval: 2000
    });
});
```

# params
```javascript
{
    ulDom: 'your dom name',  
    // 绑定的dom的id，不需要传#
    forward: 'portrait',        
    // 纵向：portrait | 横向：horizontal
    showItemCount: 3,           
    // ul一次可以同时展示li的个数，一般是1，2，3。和判断ul是否滚动有关
    interval: 4000,             
    // 滚动时间间隔
}
```
