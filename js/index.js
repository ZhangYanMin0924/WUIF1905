window.onload=function () {
    // let home=document.getElementById('home');
    // home.onmouseenter=function () {
    //     home.style.color='red';
    //     console.log(1);
    // }
    // home.onmouseleave=function () {
    //     home.style.color='#ffffff';
    // }

    // 轮播图
    let btnLists=document.getElementsByClassName('btnList');
    let lis=btnLists[0].getElementsByTagName('li');
    // for (let i=0;i<lis.length;i++){
    //     lis[i].onmouseenter=function () {
    //     this.style.backgroundColor='#04b680';
    //     }
    //     lis[i].onmouseleave=function () {
    //         this.style.backgroundColor='#ffffff';
    //     }
    // }

    let index=0;
    let rightBtn=document.querySelector('.rightBtn');
    let bannerImg=document.querySelectorAll('.banner-left-img>li');
    rightBtn.onclick=function() {
        index++;
        if (index == bannerImg.length) {
            index = 0;
        }
        Array.prototype.forEach.call(lis,function (elem) {
            elem.classList.remove('hot');
        })
        bannerImg.forEach(function (elem,value) {
            elem.style.zIndex = 1;
        })
        lis[index].classList.add('hot');
        bannerImg[index].style.zIndex = 999;

    }

    let leftBtn=document.querySelector('.leftBtn');
    leftBtn.onclick=function() {
        index--;
        if (index <0) {
            index = bannerImg.length-1;
        }
        Array.prototype.forEach.call(lis,function (elem) {
            elem.classList.remove('hot');
        })
        bannerImg.forEach(function (elem) {
            elem.style.zIndex = 1;

        })
        lis[index].classList.add('hot');
        bannerImg[index].style.zIndex = 999;
    }

    let bannerLeft=document.querySelector('.banner-left');
    let t=setInterval(rightBtn.onclick,1000);
    bannerLeft.onmouseenter=function(){
        clearInterval(t);
    }
    bannerLeft.onmouseleave=function(){
        t=setInterval(rightBtn.onclick,1000);
    }


    for (let i=0;i<lis.length;i++){
        lis[i].onclick=function () {
            index=i;
            Array.prototype.forEach.call(lis,function (elem) {
                elem.classList.remove('hot');
            })
            bannerImg1.forEach(function (elem) {
                elem.style.zIndex = 1;

            })
            lis[i].classList.add('hot');
            bannerImg1[i].style.zIndex = 999;
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


}