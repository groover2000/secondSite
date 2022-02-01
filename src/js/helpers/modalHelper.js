

function modalJump(pos) {
    if (pos){
        const scrollTab = window.innerWidth - document.documentElement.clientWidth
        document.body.style.marginRight = scrollTab + 'px';
    }else {
        document.body.style.marginRight = 0;
    }

}
export default modalJump;