class listScroll {
    constructor(params){
        this.ulDom = params.ulDom;
        this.forward = params.forward;
        this.interval = params.interval;//滚动定时器
        this.showItemCount = params.showItemCount;    //需要移动的dom元素

        this.$ulDom = null;
        this._dataLength = 1;
        this._childDist = 0;   //一个li元素的宽度或高度，根据滚动方向决定
        this._rollTimer = null;//滚动定时器

        this.init();
    }

    init(){
        this.$ulDom = document.querySelector("#" + this.ulDom);
        let liDom = document.querySelector("#" + this.ulDom + ' li');
        let lisDom = document.querySelectorAll("#" + this.ulDom + ' li');
        this._dataLength = lisDom.length;

        if (liDom) {
            if(this.forward == 'portrait'){   //纵向滚动
                this._childDist = parseFloat(this.getStyle(liDom, 'height')) + parseFloat(this.getStyle(liDom, 'marginBottom'));
                console.log('this._childDist',this._childDist)
            }else if(this.forward == 'horizontal'){
                this._childDist = parseFloat(this.getStyle(liDom, 'width')) + parseFloat(this.getStyle(liDom, 'marginRight'));
            }
        }

        if (this._dataLength > this.showItemCount && !this._rollTimer) {
            //start the timer
            this._rollTimer = setInterval(() => {
                this.doRoll();
            }, this.interval);
        }
    }

    /**
     * doRoll
     */
    doRoll() {
        if (!this.ulDom) {
            return false;
        }
        this.$ulDom.style.transition = ".5s";
        var copydom = this.$ulDom.childNodes[0].cloneNode(true)
        this.$ulDom.appendChild(copydom);
        this.$ulDom.style.transform =`translateY(-${this._childDist}px)`;
        setTimeout(() => {
            this.$ulDom.style.transition = "none";
            this.$ulDom.removeChild(this.$ulDom.childNodes[0]);
            this.$ulDom.style.transform = 'translateY(0)';
        }, 1000);
    }

    /**
     * get the attr of one element
     * @param {*} obj element
     * @param {*} attr attribute
     */
    getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return document.defaultView.getComputedStyle(obj, null)[attr].replace('px', '');
        }
    }
}

export default listScroll;