document.addEventListener('DOMContentLoaded', ()=>{
    //btns
    const prevBtn = document.querySelector('.prev'),
          nextBtn = document.querySelector('.next');
    //content
    const content = document.querySelectorAll('.content');

    let sliderIndex = 0;

    function showContent(i){
        if(i >= content.length){
            sliderIndex = 0;
        }

        if(i < 0){
            sliderIndex = content.length - 1; 
        }

        content.forEach(item => {
            item.classList.add('hidden');
            item.classList.remove('show');
        })
  
        content[sliderIndex].classList.remove('hidden');
        content[sliderIndex].classList.add('show');
    }

    function slider(i){
        showContent(sliderIndex += i);
    }

    slider(sliderIndex);

    nextBtn.addEventListener('click', ()=>{
        slider(1);
    })

    prevBtn.addEventListener('click', ()=>{
        slider(-1);
    })
})