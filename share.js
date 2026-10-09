// Makes a shareable ticket picture (PNG) and opens the phone's share sheet.
function rr(x,a,b,w,h,r){x.beginPath();x.moveTo(a+r,b);x.arcTo(a+w,b,a+w,b+h,r);x.arcTo(a+w,b+h,a,b+h,r);x.arcTo(a,b+h,a,b,r);x.arcTo(a,b,a+w,b,r);x.closePath()}
export async function makeCard({label,code,sub}){
  try{await document.fonts.load('italic 800 100px "Barlow Condensed"')}catch(e){}
  const c=document.createElement("canvas");c.width=1080;c.height=1350;const x=c.getContext("2d");
  const F=s=>'italic 800 '+s+'px "Barlow Condensed",Impact,sans-serif';
  x.fillStyle="#12161c";x.fillRect(0,0,1080,1350);
  x.save();x.beginPath();x.rect(0,0,1080,290);x.clip();
  const stripe=(x0,w,col)=>{x.fillStyle=col;x.beginPath();x.moveTo(x0,0);x.lineTo(x0+w,0);x.lineTo(x0+w-420,1350);x.lineTo(x0-420,1350);x.fill()};
  stripe(790,100,"#0a8bff");stripe(910,30,"#fff");stripe(960,100,"#0a8bff");x.restore();
  x.textAlign="left";x.font=F(100);const wA=x.measureText("LUCKY").width,wB=x.measureText("DROP").width,sx=(1080-wA-wB)/2-80;
  x.fillStyle="#fff";x.fillText("LUCKY",sx,190);x.fillStyle="#ff5a1f";x.fillText("DROP",sx+wA,190);
  x.fillStyle="#fff";rr(x,90,290,900,680,48);x.fill();
  x.textAlign="center";x.fillStyle="#5b6675";x.font=F(52);x.fillText(label.toUpperCase(),540,395);
  x.fillStyle="#12161c";x.font=F(330);x.fillText(code,540,705);
  x.fillStyle="#5b6675";x.font=F(56);x.fillText(sub,540,865);
  x.fillStyle="#fff";x.font=F(76);x.fillText("ONE FREE TICKET, EVERY DAY",540,1120);
  x.fillStyle="#ff5a1f";x.font=F(60);x.fillText(location.host,540,1205);
  for(let i=0;i<90;i++)for(let j=0;j<2;j++){x.fillStyle=(i+j)%2?"#fff":"#12161c";x.fillRect(i*12,1326+j*12,12,12)}
  return new Promise(r=>c.toBlob(r,"image/png"));
}
export async function shareCard(blob,text){
  const f=new File([blob],"luckydrop.png",{type:"image/png"});
  if(navigator.canShare&&navigator.canShare({files:[f]})){
    try{await navigator.share({files:[f],text});return}catch(e){if(e.name==="AbortError")return}
  }
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="luckydrop-ticket.png";a.click();
  window.open("https://wa.me/?text="+encodeURIComponent(text),"_blank");
}
