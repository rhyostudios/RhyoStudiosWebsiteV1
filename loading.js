window.onload = () =>{
    document.getElementById("loading-r").style.top='0px'
    document.getElementById("loading-h").style.top='0px'
    document.getElementById("loading-y").style.top='0px'
    document.getElementById("loading-o").style.top='0px'

    setTimeout(()=>{
        document.getElementById("welcome-screen-id").style.top='-100vh'
        document.getElementById("loading-r").style.top='-100vh'
        document.getElementById("loading-h").style.top='-100vh'
        document.getElementById("loading-y").style.top='-100vh'
        document.getElementById("loading-o").style.top='-100vh'
    },1000)
}