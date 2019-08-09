window.onload = function () {
    var allLis=$('tab_head').getElementsByTagName('li');
    var allDoms=$('tab_body').getElementsByClassName('dom');

    console.log(allLis);
    console.log(allDoms);

    for(var i =0;i<allLis.length;i++){
        var li = allLis[i];
        li.index=i;
        li.onmouseover = function () {
            for (var j=0;j<allLis.length;j++){
                allLis[j].className='';
            };
            this.className='selected';
            for (var j=0;j<allDoms.length;j++){
                allDoms[j].style.display='none';
            };
            allDoms[this.index].style.display='inline-block';
        }
    }

    function $(id) {
        return typeof id === "string"? document.getElementById(id):null;
    }
}