let wheterinf;
fetch('https://api.open-meteo.com/v1/forecast?latitude=32.65&longitude=51.67&current_weather=true').then(json=>{return json.json();}).then(Date=>{wheterinf= Date.current_weather.temperature ;afterFetch(); });
afterFetch=()=>{ const text=document.querySelector('.text');
const pic=document.querySelector('.pic')
text.innerHTML=`<p> ${wheterinf}°C</p>`;
const week=document.querySelector('.week');
const date = new Date();
const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
week.textContent=(dayName); // مثلا: "Monday"
if (wheterinf<10&& wheterinf>0){
pic.classList.add('snow');
}
if(wheterinf<20 && wheterinf>10){pic.classList.add('ok')};
if(wheterinf<30 && wheterinf>20){pic.classList.add('okcloud')};
if( wheterinf>30){pic.classList.add('hot')};

if (wheterinf<=0){
    pic.classList.add('ice');
    }};
    setInterval(afterFetch, 5000);


