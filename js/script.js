const tabs = document.querySelectorAll('.tabs-tablist-item');
const content = document.querySelectorAll('.tabs-content-item');
for( let i = 0; i< content.length; i++){
    content[i].classList.add('js-content-hidden');
}
content[0].classList.remove('js-content-hidden');
tabs[0].classList.add('js-active');
for(let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', (event) =>{ 
        event.preventDefault(); 
        const id = event.currentTarget.getAttribute('href').substring(1);
        for( let i = 0; i < content.length; i++){
            content[i].classList.add('js-content-hidden');
            if(content[i].getAttribute('id') == id){
                content[i].classList.remove('js-content-hidden');
            }
        }
        for(let i = 0; i< tabs.length; i++){
            tabs[i].classList.remove('js-active');
        }
        event.currentTarget.classList.add('js-active');
    });
}