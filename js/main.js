function setFigurecaption() {
    var x = document.getElementsByTagName("figcaption");
    var y = document.getElementsByTagName("img");  //get all img elements on the page

    // Kiểm tra xem số lượng phần tử có phải là nhỏ hơn hoặc bằng số lượng ảnh hay không
    var minLen = Math.min(x.length, y.length);

    for (var i = 0; i < minLen; i++) {
        x[i].innerHTML = y[i].alt;
    }
}
