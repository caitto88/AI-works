function clearInputs() {
    document.getElementById('angle').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('observer-height').value = '';
    document.getElementById('result').innerText = '';
}

function useDefaultValues() {
    document.getElementById('angle').value = 45;
    document.getElementById('distance').value = 100;
    document.getElementById('observer-height').value = 1.5;
}

function calculateMountainHeight() {
    const angle = parseFloat(document.getElementById('angle').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const observerHeight = parseFloat(document.getElementById('observer-height').value);

    if (isNaN(angle) || isNaN(distance) || isNaN(observerHeight)) {
        document.getElementById('result').innerText = '请输入所有字段的有效数字';
        return;
    }

    const radian = angle * (Math.PI / 180);
    const height = Math.tan(radian) * distance + observerHeight;

    document.getElementById('result').innerText = `山峰高度为: ${height.toFixed(2)} 米`;
}
