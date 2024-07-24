// app.js

const api = '<https://h.aaaapp.cn/single_post>';  // 单个帖子提取接口
const userId = '4EBFCE79994BE1CE23AF24AEBE119E11';  // 替换为你的 userId
const secretKey = 'a9b7d286dbfe0d7b7193df525f879beb'; // 替换为你的 secretKey

function fetchVideoData() {
    const url = document.getElementById('videoUrl').value;

    if (!url) {
        alert('请输入视频URL');
        return;
    }

    const params = {
        userId: userId,
        secretKey: secretKey,
        url: url
    };

    fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
    .then(response => response.json())
    .then(data => {
        displayResult(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('请求出错，请稍后再试。');
    });
}

function displayResult(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}
