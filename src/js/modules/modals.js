import modalJump from '../helpers/modalHelper';


const modals = () => {

    let keyPressed = false;

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            if(!keyPressed && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                
                    document.querySelector(selector).click();
                    keyPressed = true;
                    
            }
        })
    }

    const modals2 = (openBtn, popup, closeBtn, remove = false) => {
        const open = document.querySelectorAll(openBtn),
        modal = document.querySelector(popup),
        close = modal.querySelector(closeBtn);

       
        open.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                if(remove) {
                    item.remove();
                }
                keyPressed = true
                modal.style.display = 'flex';
                modalJump(true);
                document.body.style.overflow = 'hidden';
               
            })
        })
        modal.addEventListener('click', (e) => {
            if(e.target == modal) {
                modal.style.display = 'none';
                document.body.style.overflow = ''
                modalJump();
                
            }
        })
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = ''
            modalJump();
            
        })

        
    }
    modals2('.button-design', '.popup-design', '.popup-close');
    modals2('.button-consultation', '.popup-consultation', '.popup-close');
    modals2('.fixed-gift', '.popup-gift', '.popup-close', true);
    openByScroll('.fixed-gift');
}

export default modals;