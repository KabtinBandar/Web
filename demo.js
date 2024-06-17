let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
window.onscroll = function(){
if (scrollY >= 300){
btn.style.display = 'block';
}else{
 btn.style.display = 'none';
}
};
btn.onclick = function(){
scroll({
left :0,
top : 0,
behavior :"smooth"
});
}
btn2.onclick = function(){
location.assign('https://www.youtube.com/');
}