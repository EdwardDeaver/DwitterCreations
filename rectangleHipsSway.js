// Note: The effect of a pendulum sway is noticable when the viewport is 480px by 480px. 
c.width=1920
for(z=0;z<50;z++){
for(i=0;i<90;i++){
  x.fillStyle = 'rgb('+z+','+i+',0)';
  x.fillRect(i*20,z*20,S(t)*z,10)
}
}
