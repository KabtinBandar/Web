
let After = document.getElementById('after');
let Before = document.getElementById('before');
let Append = document.getElementById('append');
let content = document.getElementById('content');
let Contenier = document.getElementById('Container');
Contenier.style.backgroundColor = "black";
content.style.color = 'red';
Contenier.style.height = '50px';
Contenier.style.width = '200px';
After.addEventListener('click' , function(){
Contenier.after(content);
});
Before.addEventListener('click' , function(){
  Contenier.before(content);
  });
  Append.addEventListener('click' , function(){
    Contenier.append(content);
    });