window.onload = function () {
    var tab = new TabSwitch('div1');//1、把window.onload事件对应的方法写成构造函数TabSwitch
};

function TabSwitch(id) {
    var oDiv = document.getElementById(id);
    this.oBtn = oDiv.getElementsByTagName('input');//将外面需要访问的变量改成属性
    this.aDiv = oDiv.getElementsByTagName('div');
    var _this = this;
    for (var i = 0; i < this.oBtn.length; i++) {
        this.oBtn[i].index = i;
        this.oBtn[i].onclick = function () {
            _this.tab(this);//这里的this变成了oBtn对象了,所以要在上面保存构造函数创建的对象代表的this
        };
    }
};

this.TabSwitch.prototype.tab = function (oBtn) {
    for (var i = 0; i < this.aDiv.length; i++) {
        this.oBtn[i].className = '';
        this.aDiv[i].style.display = 'none';
    }
    oBtn.className = "active";
    this.aDiv[oBtn.index].style.display = 'block';
};