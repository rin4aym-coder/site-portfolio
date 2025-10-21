/*Анимации выезда */

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);

  let NumSkills = document.querySelectorAll('.skills_numbers');
  for (let elm of NumSkills) {
    observer.observe(elm);
  }

  let TextMe = document.querySelectorAll('.text_me');
  for (let elm of TextMe) {
      observer.observe(elm);
  }

  let imageElements = document.querySelectorAll('.image_pieces');
  for (let elm of imageElements) {
      observer.observe(elm);
  }

  let coverElements = document.querySelectorAll('.expirience_image');
  for (let elm of coverElements) {
      observer.observe(elm);
  }

  let expTextElements = document.querySelectorAll('.expirience_text');
  for (let elm of expTextElements) {
      observer.observe(elm);
  }

  /*Анимации выезда конец */


/*Анимации прокуртки до момента*/
  document.getElementById('scroll_ill').addEventListener('click', function() {
    const target = document.getElementById('end_scroll_ill');
    target.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll_concept').addEventListener('click', function() {
  const target = document.getElementById('end_scroll_concept');
  target.scrollIntoView({ behavior: 'smooth' });
});

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
/*Анимации прокуртки до момента*/


/*Мини галерея*/
