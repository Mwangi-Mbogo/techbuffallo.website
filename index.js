
const testimonials = [
  {
    name: "Henry T",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "The rich aroma and bold flavor of coffee never fail to awaken my senses and give me the energy I need to tackle the day ahead. Whether it's a classic drip coffee or a fancy latte, coffee always delivers a satisfying and comforting experience. It's no wonder why it's the world's most popular beverage. Thank you, coffee, for being my constant companion and helping me power through each day. You truly are the best!" 

  },{
    name: "Edwin H",
    photoUrl: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Thank you, buffalo softwares, for making my work easier and more enjoyable. Keep up the great work!"
  },{
    name: "Miriam S",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I recently had the pleasure of staying at Aroma Dishes hotel and I must say, it was an unforgettable experience."
  }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial(){
  const {name, photoUrl, text} = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++
  if(idx === testimonials.length){
    idx = 0;
  }
  setTimeout(()=>{
      updateTestimonial();
  }, 2000)
}