document.addEventListener('DOMContentLoaded', function() {
    const getCodeButton = document.getElementById('getCodeButton');
    const countdownSpan = document.getElementById('countdown');
    let countdownInterval;
    let timeLeft = 60;

    getCodeButton.addEventListener('click', function() {
        // Disable the button and start the countdown
        getCodeButton.disabled = true;
        countdownSpan.textContent = timeLeft + ' 秒后重新获取';

        countdownInterval = setInterval(function() {
            timeLeft--;
            countdownSpan.textContent = timeLeft + ' 秒后重新获取';

            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                getCodeButton.disabled = false;
                countdownSpan.textContent = '';
                timeLeft = 60;
            }
        }, 1000);
    });

    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function() {
        const phone = document.getElementById('phone').value;
        const verificationCode = document.getElementById('verificationCode').value;

        // Simple validation - replace with your actual login logic
        if (phone && verificationCode) {
            alert('登录成功！');
        } else {
            alert('手机号或验证码不能为空！');
        }
    });
});
