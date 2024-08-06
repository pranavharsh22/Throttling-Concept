const loggedfunction=()=>{
    console.count('logged function ')
}

const throttle=(fn,d)=>{
    let flag=true;
    return function(){
        let context=this;
        args=arguments
        if(flag){
            fn.apply(context,args)
            flag=false

        }
        setTimeout(()=>{
            flag=true
        },d)
    }
}

const betterloggedfunction=throttle(loggedfunction,1000)

window.addEventListener('resize',betterloggedfunction)

const final=()=>{
    console.count('final function')
}
window.addEventListener('resize',final)


