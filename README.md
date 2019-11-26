# vue-list-scroll
A component for list scroll

# use
```javascript
import listScroll from 'vue-list-scroll';

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
    ulDom: 'your dom id',
    forward: 'portrait',   //portrait | horizontal
    showItemCount: 3,           
    interval: 4000,
}
```
