const pad = document.querySelector('#padlock')
const message = document.querySelector('#text')

 pad.addEventListener('mouseenter',()=>{
    message.classList.remove( 'text_hidden');
    

});
pad.addEventListener('mouseleave',()=> {
    message.classList.add ( 'text_hidden');
    

});