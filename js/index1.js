window.onload=function () {
    let home=document.getElementById('home');
    home.onmouseenter=function () {
        home.style.color='#00c1de';
    }
    home.onmouseleave=function () {
        home.style.color='#ffffff';
    }
    // 轮播图

    let btnLists=document.getElementsByClassName('btnList');
    let lis=btnLists[0].getElementsByTagName('li');
    let bannerLeft=document.querySelector('.banner-left');
    let current=0,next=0;
    let rightBtn=document.querySelector('.rightBtn');
    let leftBtn=document.querySelector('.leftBtn');
    let bannerImg=document.querySelectorAll('.banner-left-img>li');
    let w= bannerImg[0].offsetWidth;
    let flag=true;
    rightBtn.onclick=function(){
        if (!flag){
            return
        }
        flag=false;
        next++;
        if (next == bannerImg.length){
            next=0;
        }
        bannerImg[next].style.left = w + 'px';
        lis[current].classList.remove('hot')
        lis[next].classList.add('hot');
        animate(bannerImg[current],{left: -w});
        animate(bannerImg[next],{left:0},function () {
            flag=true;
        });
        current=next;
    }
    leftBtn.onclick=function(){
        if (!flag){
            return
        }
        flag=false;
        next--;
        if (next < 0){
            next = bannerImg.length - 1;
        }
        bannerImg[next].style.left = -w + 'px';
        lis[current].classList.remove('hot')
        lis[next].classList.add('hot');
        animate(bannerImg[current],{left: w});
        animate(bannerImg[next],{left:0},function () {
            flag=true;
        });
        current=next;
    }



    let t=setInterval(rightBtn.onclick,1000);
    bannerLeft.onmouseenter=function(){
        clearInterval(t);
    }
    bannerLeft.onmouseleave=function(){
        t=setInterval(rightBtn.onclick,1000);
    }

    for (let i=0;i<lis.length;i++){
        lis[i].onclick=function () {
            if (current == i){
                return;
            }
            next=i;
            if (next > current){
                bannerImg[next].style.left = w + 'px';
                animate(bannerImg[current],{left: -w});
                animate(bannerImg[next],{left:0});
            } else {
                bannerImg[next].style.left = -w + 'px';
                animate(bannerImg[current],{left: w});
                animate(bannerImg[next],{left:0});
            }
            lis[current].classList.remove('hot')
            lis[next].classList.add('hot');
            current=next;
        }
    }


    // 个人博客日记
    let dairylist=document.querySelectorAll('.dairy-list>li');
    dairylist.forEach(function (elem,index) {
        elem.onclick=function () {
            for (let i=0;i<dairylist.length;i++){
                dairylist[i].classList.remove('new');
            }
            this.classList.add('new');
        }
    })


    // 个人博客日记列表
    let tabLists=document.querySelectorAll('.tabList>li');
    // let a=document.getElementsByClassName('tabList');
    // let b=a[0].getElementsByTagName('li')
    tabLists.forEach(function (elem,index) {
        // console.log(elem);
        elem.onmouseenter=function () {
            for (let i=0;i<tabLists.length;i++){
                tabLists[i].classList.remove('hot')
            }
            this.classList.add('hot');
        }
    })
    // console.log(tabLists);
    // console.log(a);
    // console.log(a[0]);
    // console.log(b);
    // console.log(b[0]);

    // 加载
    let viewH=window.innerHeight;
    let imgs=document.querySelectorAll('.lazyload');
    let positionArr=[];
    imgs.forEach(function (ele) {
        let t = ele.offsetTop;
        let parent=ele.offsetParent;
        t += parent.offsetTop;

        while (parent.nodeName.toLowerCase()!=="body") {
            parent = parent.offsetParent;
            t+=parent.offsetTop;
        }
        // console.dir(parent.nodeName.toLowerCase());
        // console.log(ele.offsetTop);
        positionArr.push(t);
    });
    // console.log(positionArr);
    window.onscroll = function () {
        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        for (let i=0;i<positionArr.length;i++){
            // console.log(viewH);
            // console.log(scrolltop);
            // console.log(positionArr[i]);
            // console.log('-----');
            if (scrolltop + viewH >= positionArr[i]+50){
                if (!imgs[i].src){
                    imgs[i].src=imgs[i].getAttribute('aa');
                }

            }
        }

    }

}