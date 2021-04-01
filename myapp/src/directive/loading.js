const loading = {
    bind(el, { value }) {
        console.log(el);
        el.$value = value
        if (el.$value) {
            el.handler = () => {
                console.log(el);
                console.log('1111');
                const dd = document.createElement('div');
                document.body.appendChild(dd);
                dd.className = 'loading_';
                el.style.display = 'none';
                setTimeout(()=>{
                    document.body.removeChild(dd);
                    el.style.display = 'block'
                },30000)
            }
            el.addEventListener('click', el.handler)
        }
    },

}
export default loading