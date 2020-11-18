let yes = document.getElementById('yes');
let no = document.getElementById('no');
let choose = document.getElementsByClassName("choose");

no.addEventListener("mouseover", () => {
    if (choose[0].style.flexDirection === "row-reverse") {
        choose[0].style.flexDirection = "row";
    }
    else {
        choose[0].style.flexDirection = "row-reverse";
    }
})
yes.addEventListener("click", () => {
    alert("Đồng ý rồi nhé <3");
})