function myFunction() {
    var x = document.getElementById("myMenu");
    if (x.className === "menu") {
        x.className += "responsive";
    } else {
        x.className = "menu";
    }
}
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// 触发 id="defaultOpen" click 事件
document.getElementById("defaultOpen").click();

// function openNav(num) {
//     document.getElementById("mySidenav" + num).style.width = "72%";
// }

// function closeNav(num) {
//     document.getElementById("mySidenav"+num).style.width = "0";
// }

//图片横向滚动
window.onload = function()
{
    var oDiv = document.getElementById("div1");
    var oUl = document.getElementsByTagName("ul")[0];
    var oLi = document.getElementsByTagName("li");
    var oA = document.querySelectorAll("a.font-size");
    var timer = null;
    var iSpeed = 3;
    //复制一遍ul
    oUl.innerHTML +=oUl.innerHTML;
    //ul的宽度是所有li宽度之和，复制ul之后的整个ul的宽度就是li的长度乘以一个li的宽度
    oUl.style.width = oLi.length*oLi[0].offsetWidth + "px";
    function fnMove()
    {
        //图片向左移动时的条件，即在div里的ul的offsetLeft小于一个ul的宽度
        if (oUl.offsetLeft<-oUl.offsetWidth/2)
        {
            //将整个复制的ul向右拖拽直至整个ul中的第一张图归位到起点
            oUl.style.left = 0;
        }
        //图片向右移动时的条件，即在div里的ul的offsetLeft大于等于0
        if (oUl.offsetLeft>=0)
        {
            //将整个复制的ul向左拖拽直至整个ul中的第一张图归位到起点
            oUl.style.left = -oUl.offsetWidth/2 + "px";
        }
        //给ul一个速度让整个ul的offsetLeft增加或减少，速度为正则向右移动，速度为负则向左移动
        oUl.style.left = oUl.offsetLeft +iSpeed + "px";
    }
    timer=setInterval(fnMove,30)
    //点击向左滚动即触发第一个a元素标签
    oA[0].onclick = function()
    {
        iSpeed = -3;
    }
    //点击向右滚动即触发第二个a元素标签
    oA[1].onclick = function()
    {
        iSpeed = 3;
    }
    //当鼠标移动到div里面的时候图片滚动暂停，此时清除定时器即可。
    oDiv.onmouseover = function()
    {
        clearInterval(timer);
    }
    //当鼠标移出div的时候图片继续滚动，此时重新加载定时器。
    oDiv.onmouseout = function()
    {
        timer=setInterval(fnMove,30);
    }
}

// new Vue({
//     el:'#table',
//     data:{
//     }
// })

new Vue({
    el: '.tabcontent',
    components: {
        sideNav: {
            template: `
            <div>
            <table width="30%" border="0" cellspacing="0" cellpadding="0">
            <tr height="30" onMouseOver="this.style.backgroundColor='#EFEDE7'"
            onMouseOut="this.style.backgroundColor='#F8F8F8'" bgcolor="#F8F8F8">
            <td align="center">
            <div style="color:#815600;cursor:pointer" class="name" @click="open = true">{{name}}</div>
            </td>
            </tr>
            </table>
            <div class="sidenav" :class="{open}">
                <a href="javascript:void(0)" class="closebtn" @click="open = false">&times;</a>
                <a href="#">{{content}}</a>
                
            </div>
            </div>`,
            props: ['name', 'content'],
            data() {
                return {
                    open: false,
                }
            }
        },
    },
    data: {
        sites:[
            {name:'领先十六', content:1},
            {name:'精选二期', content:2},
            {name:'华银价值'},
            {name:'领先十六'},
            {name:'领先十六'},
            {name:'领先十六'},
            {name:'领先十六'},
            {name:'领先十六'},
            {name:'领先十六'},
            {name:'领先十六'},
            {name:'领先十六'},
            {name:'领先十六'},
            {name:'领先十六'},
            {name:'领先十六'},
        ]
    },
    method: {
        openNav(name) {

        }
    }
})

new Vue({
    el:'#XinWenZhongXin',
    components:{
        tableTd:{
            template:
            `<table width="98%" border="0" cellspacing="0" cellpadding="0">
                <tr height="35">
                    <td align="left" class="td1">&nbsp;<img src="../image/arr.gif" align="absmiddle" />&nbsp;&nbsp;
                    <a :href="url" target="_blank">{{ name }}</a></td>
                    <td align="center" class="td2">2019.03.15</td>
                </tr>
            </table>`,
            props:['name','url']
        }
    },
    data:{
        items:[
            {name:'关于旗下S22218基金持有的信威集团估值方法调整的公告',url:'a.html'},
            {name:'华银精治获得卖方分析师水晶球奖评选投票资格',url:'b.html'},
            {name:'《嘉禾四号私募证券投资基金基金合同》变更的公告',url:'c.html'},
            {name:'关于《嘉禾二号私募证券投资基金基金合同》变更的公告',url:'a.html'},
            {name:'关于《嘉禾一号私募证券投资基金基金合同》变更的公告',url:'b.html'},
            {name:'关于资管产品运营过程中征收增值税公告',url:'c.html'},
            {name:'【彩虹一号私募证券投资基金】基金经理变更公告',url:'a.html'},
            {name:'【前海华银盛鑫一号私募基金】基金提前终止公告',url:'b.html'},
            {name:'华银精治获得中国最佳股票策略私募基金',url:'c.html'},
            {name:'《华银战略一号基金》通过中基协备案',url:'a.html'},
            {name:'华银精治参加国务院法制办私募调研',url:'b.html'},
            {name:'《凡得幸福轮动基金》、《凡得幸福金矿基金》意见征询公告',url:'c.html'},
            {name:'华银精治成为首只台州合伙基金管理人',url:'a.html'},
            {name:'《华银精选八期基金》发行预约中',url:'b.html'},
            {name:'华银精治成为首家落户浙江台州私募基金',url:'c.html'},
            {name:'《精选六期基金》成立公告',url:'a.html'},
            {name:'《共同成长基金》封闭备案中',url:'b.html'},
            {name:'《华银精选五期基金》发行预约中',url:'c.html'},
        ]

    }
})

new Vue({
    el:'#JiJinBaoGao',
    components:{
        tableJijin:{
            template:
            `<table width="98%" border="0" cellspacing="0" cellpadding="0">
            <tr height="35">
                <td align="left" class="td1">&nbsp;<img src="../image/arr.gif" align="absmiddle" />&nbsp;&nbsp;<a
                        :href="url" target="_blank">{{ name }}</a></td>
                <td align="center" class="td2">2019.03.15</td>
            </tr>
            </table`,
            props:['name','url']
        }
    },
    data:{
        items:[
            {name:'3月报告：维稳行情',url:'a.html'},
            {name:'2月报告：金基报晓',url:'b.html'},
            {name:'2017年度报告：皈依传统',url:'c.html'},
            {name:'12月报告：春季行情提前到来',url:'a.html'},
            {name:'11月报告：黑马逆袭才有新意',url:'b.html'},
            {name:'10月报告：中国梦，房产梦',url:'c.html'},
            {name:'9月报告：空头洗礼才有新生',url:'a.html'},
            {name:'8月报告：最后的晚餐',url:'b.html'},
            {name:'7月报告：洞仙歌',url:'c.html'},
            {name:'6月报告：震荡行情把握节奏',url:'a.html'},
            {name:'5月报告：劳动最光荣',url:'b.html'},
            {name:'4月报告：春季攻势仍将延续',url:'c.html'},
            {name:'3月报告：行情和春天有个约会',url:'a.html'},
            {name:'2月报告：红包行情近在眼前',url:'b.html'},
            {name:'2016年度报告：创业与创投',url:'c.html'},
            {name:'12月报告：小票继续精彩表现',url:'a.html'},
            {name:'11月报告：金融反腐大戏开幕',url:'b.html'},
            {name:'10月报告：并购整合推动市值管理',url:'c.html'},   
        ]
    }
})

