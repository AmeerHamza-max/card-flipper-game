const isstatus=document.querySelector('h5');
var addFriend=document.querySelector('#add');
var check=0;
// var removeFriend=document.querySelector('#remove');
addFriend.addEventListener('click',function(){
    if(check==0){
    isstatus.innerHTML='Friends';
    isstatus.style.color='green';
    console.log('hui hui hui')
    addFriend.innerHTML='Remove Friend '
    check=1;
    }
    else{
        isstatus.innerHTML='Stranger';
        isstatus.style.color='red';
        addFriend.innerHTML='Add Friend'
        check=0;
    }
    

});
// removeFriend.addEventListener('click',function(){
//     isstatus.innerHTML='Stranger';
//     isstatus.style.color='red';
// })

