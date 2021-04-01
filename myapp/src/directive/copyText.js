const co = {
    bind(el,{value}){
        el.$value = value;
        console.log(value);
    }
}