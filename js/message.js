window.addEventListener('load',function () {
    // 头像
    let thumb = document.querySelectorAll('img[id]');
    let prevThumb = 0;
    for (let i =0;i<thumb.length;i++){
        thumb[i].onclick=function () {
            thumb[prevThumb].style.opacity = 1;
            this.style.opacity = 0.5;
            prevThumb = i;
        }
    }
    // 昵称
    let form = document.forms[0];
    // console.log(form.reset);
    let userName =document.querySelector('input[name=name]');
    let already = document.querySelector('#already');
    let left = document.querySelector('#left');
    let max = 100;
    already.innerText = 0;
    left.innerText = max;
    // 已输入
    let spans=document.querySelector('#zhangsan');
    let textarea =document.querySelector('textarea');
    textarea.onkeyup=function () {
        let value=this.value;
        already.innerText = value.length;
        left.innerText = max - value.length;
    };
    // 提交
    let fb =document.querySelector('.fb')
    let submit = document.querySelector('input[type=submit]');
    submit.onclick=function (e) {
        e.preventDefault();
        let imgs = thumb[prevThumb].src;
        let users =userName.value.trim();
        let time = new Date().toISOString().substr(0,10);
        let content = textarea.value;
        let obj = {imgs,users,time,content};
        form.reset();
        insertFb(obj);
        init();

    }
    function insertFb({imgs,users,time,content}) {
        let html=`
            <ul>
                 <span class="tximg"><img src="${imgs}"></span>
                 <p class="fbtime"><span>${time}</span>${users}</p>
                 <p class="fbinfo">${content}</p>
            </ul>
        `;
        fb.innerHTML = html + fb.innerHTML;
    }
    function init() {
        thumb[prevThumb].style.opacity = 1;
        prevThumb = 0;
        already.innerText = 0;
        left.innerText = max;
    }
})