window.onload = () =>{
    document.head.querySelectorAll("[rel='stylesheet']").forEach((elem)=>{
        elem.removeAttribute("disabled");
    });
};

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
    }