const gallery = function() {

    let img = document.querySelectorAll('.gelement img');
    let cbtn = document.querySelector('.cbtn');

    
    img.forEach(function(element){
        element.addEventListener('click' , function(event){
            
            let showimg = document.getElementById('showimg');
            let imgname = document.getElementById('imgname');

            showimg.src = event.target.src;
            showimg.alt = event.target.alt;
            imgname.textContent = event.target.alt;
            showimg.parentElement.classList.add('active');
            showimg.parentElement.classList.remove('gshow');

            cbtn.addEventListener('click', function(){
                showimg.parentElement.classList.remove('active');
                showimg.parentElement.classList.add('gshow');

            });
        });
    });



}();