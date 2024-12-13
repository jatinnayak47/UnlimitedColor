const rand_color = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId
const  startchangingcolor = function(){
  if(!intervalId){
  intervalId = setInterval(changeBgColor,1000);
}
  function changeBgColor(){
    document.body.style.backgroundColor = rand_color();
  }
}

const stopchangingcolor = function(){
 clearInterval(intervalId)
 intervalId = null
}

// console.log(rand_color());
document.querySelector("#start").addEventListener('click', startchangingcolor);

document.querySelector("#stop").addEventListener('click', stopchangingcolor);
