document.getElementById('personal-space-button').addEventListener('click',function() {
    window.location.href= "https://space.bilibili.com/698468026";
});

document.getElementById('small-list-button').addEventListener('click', function() {
    //移除旧按钮
    document.getElementById('personal-space-button').parentNode.removeChild(document.getElementById('personal-space-button'));
    document.getElementById('small-list-button').parentNode.removeChild(document.getElementById('small-list-button'));
    document.getElementById('kook-community-button').parentNode.removeChild(document.getElementById('kook-community-button'));
    document.getElementById('friendly-link-button').parentNode.removeChild(document.getElementById('friendly-link-button'));

    //创建新按钮
    var bilibiliButton = document.createElement('button');
    bilibiliButton.className = 'new-button bilibili-button';
    bilibiliButton.textContent = 'B站@一只普通的zgl';
    bilibiliButton.id = 'bilibili-button';

    var douyinButton = document.createElement('button');
    douyinButton.className = 'new-button douyin-button';
    douyinButton.textContent = "抖音@一只普通中国龙";
    douyinButton.id = 'douyin-button';

    //创建文字
    var alertText = document.createElement('p');
    alertText.className = 'alert-text';
    alertText.textContent = '如发现其他账号均为假冒！（按首页返回）';
    alertText.id = 'alert-text';

    bilibiliButton.onclick = function() {
        window.location.href = 'https://space.bilibili.com/696624440';
    };

    douyinButton.onclick = function() {
        window.location.href = 'https://www.douyin.com/user/MS4wLjABAAAADIVrbvIejur9Wbl04mqatRrvxk7gVN0W5yRZkGQ9b9Zn8jTCHsZHWPQafSoeGOEc';
    };

    //将新按钮和文字添加到页面
    document.body.appendChild(bilibiliButton);
    document.body.appendChild(douyinButton);
    document.body.appendChild(alertText);
});

document.getElementById('kook-community-button').addEventListener('click', function() {
    window.location.href = 'https://www.bilibili.com/opus/954922683362967553';
});

// 假设你的按钮有一个唯一的id，例如id="friendly-link-button"
document.getElementById('friendly-link-button').addEventListener('click', function() {
    // 移除旧按钮
    document.getElementById('personal-space-button').parentNode.removeChild(document.getElementById('personal-space-button'));
    document.getElementById('small-list-button').parentNode.removeChild(document.getElementById('small-list-button'));
    document.getElementById('kook-community-button').parentNode.removeChild(document.getElementById('kook-community-button'));
    document.getElementById('friendly-link-button').parentNode.removeChild(document.getElementById('friendly-link-button'));

    // 创建一个div元素来包含“旧版主页”和“网页导航站”按钮，并使其居中
    var centeredDiv = document.createElement('div');
    centeredDiv.style.textAlign = 'center'; // 使按钮居中显示
    centeredDiv.style.marginTop = '20px'; // 添加一些上边距

    // 创建“旧版主页”按钮
    var old_homepage_button = document.createElement('button');
    old_homepage_button.textContent = '旧版主页';
    old_homepage_button.className = 'animated-button'; // 添加animated-button类
    old_homepage_button.style.backgroundColor = '#0070C0'; // 深一点的青蓝色
    old_homepage_button.style.color = 'white';
    old_homepage_button.style.padding = '10px 20px'; // 添加一些内边距
    old_homepage_button.style.border = 'none'; // 移除边框
    old_homepage_button.style.borderRadius = '5px'; // 圆角边框
    old_homepage_button.style.cursor = 'pointer'; // 鼠标悬停时显示指针
    old_homepage_button.style.fontSize = '14px'; // 设置字体大小
    old_homepage_button.style.marginRight = '10px'; // 添加右侧间距
    old_homepage_button.onclick = function() {
        window.location.href = 'https://chinadragon123.github.io/MyHomepage/';
    };

    // 创建“网页导航站”按钮
    var web_navigation_button = document.createElement('button');
    web_navigation_button.textContent = '网页导航站';
    web_navigation_button.className = 'animated-button'; // 添加animated-button类
    web_navigation_button.style.backgroundColor = '#F5A623'; // 深一点的黄色
    web_navigation_button.style.color = 'white';
    web_navigation_button.style.padding = '10px 20px'; // 添加一些内边距
    web_navigation_button.style.border = 'none'; // 移除边框
    web_navigation_button.style.borderRadius = '5px'; // 圆角边框
    web_navigation_button.style.cursor = 'pointer'; // 鼠标悬停时显示指针
    web_navigation_button.style.fontSize = '14px'; // 设置字体大小
    web_navigation_button.style.marginRight = '10px'; // 添加右侧间距
    web_navigation_button.onclick = function() {
        window.location.href = 'https://chinadragon123.github.io/Web-navigation-station/';
    };

    // 将两个按钮添加到div中
    centeredDiv.appendChild(old_homepage_button);
    centeredDiv.appendChild(web_navigation_button);

    // 创建一个单独的div元素来包含“返回”按钮，并使其居中
    var backDiv = document.createElement('div');
    backDiv.style.textAlign = 'center'; // 使按钮居中显示
    backDiv.style.marginTop = '20px'; // 添加一些上边距

    // 创建“返回”按钮
    var back_button = document.createElement('button');
    back_button.textContent = '返回';
    back_button.className = 'animated-button'; // 添加animated-button类
    back_button.style.backgroundColor = '#333'; // 深灰色
    back_button.style.color = 'white';
    back_button.style.padding = '10px 20px'; // 添加一些内边距
    back_button.style.border = 'none'; // 移除边框
    back_button.style.borderRadius = '5px'; // 圆角边框
    back_button.style.cursor = 'pointer'; // 鼠标悬停时显示指针
    back_button.style.fontSize = '14px'; // 设置字体大小
    back_button.onclick = function() {
        window.location.href = 'index.html'; // 返回首页
    };

    // 将“返回”按钮添加到单独的div中
    backDiv.appendChild(back_button);

    // 将两个div添加到页面中
    document.body.appendChild(centeredDiv);
    document.body.appendChild(backDiv);
});

