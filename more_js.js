// Base_js.js
document.addEventListener('DOMContentLoaded', function() {
    // 获取旧按钮并添加点击事件
    var essentialAppButton = document.getElementById('essential-app-button');
    if (essentialAppButton) {
         essentialAppButton.addEventListener('click', function() {
              // 隐藏旧按钮
              essentialAppButton.style.display = 'none';
              document.getElementById('fan-kui').parentNode.removeChild(document.getElementById('fan-kui'));

              // 创建新按钮的容器
              var newButtonsContainer = document.createElement('div');
              newButtonsContainer.style.textAlign = 'center'; // 使按钮居中显示
              newButtonsContainer.style.marginTop = '20px'; // 添加一些上边距
              document.body.appendChild(newButtonsContainer);

              // 创建并添加“微信”按钮
              var weixinButton = document.createElement('button');
              weixinButton.textContent = '微信';
              weixinButton.className = 'animated-button'; // 添加animated-button类
              weixinButton.style.backgroundColor = '#07c160'; // 微信主题色
              weixinButton.style.color = 'white';
              weixinButton.style.padding = '10px 20px';
              weixinButton.style.border = 'none';
              weixinButton.style.borderRadius = '5px';
              weixinButton.style.cursor = 'pointer';
              weixinButton.style.fontSize = '16px';
              weixinButton.onclick = function() {
                  window.location.href = 'https://weixin.qq.com/';
              };
              newButtonsContainer.appendChild(weixinButton);

              // 为按钮添加间距
              newButtonsContainer.appendChild(document.createTextNode(' ')); // 添加一个空格作为间距

              // 创建并添加“QQ”按钮
              var qqButton = document.createElement('button');
              qqButton.textContent = 'QQ';
              qqButton.className = 'animated-button'; // 添加animated-button类
              qqButton.style.backgroundColor = '#12B7F5'; // QQ主题色
              qqButton.style.color = 'white';
              qqButton.style.padding = '10px 20px';
              qqButton.style.border = 'none';
              qqButton.style.borderRadius = '5px';
              qqButton.style.cursor = 'pointer';
              qqButton.style.fontSize = '16px';
              qqButton.onclick = function() {
                  window.location.href = 'https://im.qq.com/';
              };
              newButtonsContainer.appendChild(qqButton);

              // 为按钮添加间距
              newButtonsContainer.appendChild(document.createTextNode(' ')); // 添加一个空格作为间距

              // 创建并添加“钉钉”按钮
              var dingdingButton = document.createElement('button');
              dingdingButton.textContent = '钉钉';
              dingdingButton.className = 'animated-button'; // 添加animated-button类
              dingdingButton.style.backgroundColor = '#007fff'; // 钉钉主题色
              dingdingButton.style.color = 'white';
              dingdingButton.style.padding = '10px 20px';
              dingdingButton.style.border = 'none';
              dingdingButton.style.borderRadius = '5px';
              dingdingButton.style.cursor = 'pointer';
              dingdingButton.style.fontSize = '16px';
              dingdingButton.onclick = function() {
                  window.location.href = 'https://www.dingtalk.com/';
              };
              newButtonsContainer.appendChild(dingdingButton);

              // 为按钮添加间距
              newButtonsContainer.appendChild(document.createTextNode(' ')); // 添加一个空格作为间距

              // 创建并添加“Google Chrome”按钮
              var chromeButton = document.createElement('button');
              chromeButton.textContent = 'Google Chrome';
              chromeButton.className = 'animated-button'; // 添加animated-button类
              chromeButton.style.backgroundColor = '#eec400'; // Google Chrome主题色
              chromeButton.style.color = 'white';
              chromeButton.style.padding = '10px 20px';
              chromeButton.style.border = 'none';
              chromeButton.style.borderRadius = '5px';
              chromeButton.style.cursor = 'pointer';
              chromeButton.style.fontSize = '16px';
              chromeButton.onclick = function() {
                  window.location.href = 'https://www.google.cn/chrome/';
              };
              newButtonsContainer.appendChild(chromeButton);

              // 为按钮添加间距
              newButtonsContainer.appendChild(document.createTextNode(' ')); // 添加一个空格作为间距

              // 创建并添加“返回”按钮
              var returnButton = document.createElement('button');
              returnButton.textContent = '返回';
              returnButton.className = 'animated-button'; // 添加animated-button类
              returnButton.style.backgroundColor = '#333'; // 深灰色
              returnButton.style.color = 'white';
              returnButton.style.padding = '10px 20px';
              returnButton.style.border = 'none';
              returnButton.style.borderRadius = '5px';
              returnButton.style.cursor = 'pointer';
              returnButton.style.fontSize = '16px';
              returnButton.onclick = function() {
                  // 返回上一页或指定页面
                  window.location.href = 'more.html';
              };
              newButtonsContainer.appendChild(returnButton);
         });
    }
});

document.getElementById("python-download-pack").addEventListener('click',function() {
    window.location.href= "https://www.bilibili.com/opus/945860031807488003";
});
