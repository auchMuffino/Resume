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
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

  const anchors = document.querySelectorAll('.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
  

const copy=document.querySelector('#phone')


  copy.addEventListener('click', function (e) {
    navigator.clipboard.writeText('+375292607891')
    .then(() => {
      copy.title="Скопировано в буфер обмена"
    })
    .catch(err => {
      console.log('Something went wrong', err);
    });
  }) 

const copy1=document.querySelector('#email')

  copy1.addEventListener('click', function (e) {
    navigator.clipboard.writeText('ipatiinavarro@gmail.com')
    .then(() => {
      copy1.title="Скопировано в буфер обмена"
    })
    .catch(err => {
      console.log('Something went wrong', err);
    });
  })

  const copy2=document.querySelector('#discord')

  copy2.addEventListener('click', function (e) {
    navigator.clipboard.writeText('Muffino#1208')
    .then(() => {
      copy2.title="Скопировано в буфер обмена"
    })
    .catch(err => {
      console.log('Something went wrong', err);
    });
  })