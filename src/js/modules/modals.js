
const modals = (openBtn, popup, closeBtn) => {

    const open = document.querySelectorAll(openBtn),
        modal = document.querySelector(popup),
        close = modal.querySelector(closeBtn);
        
        // const a = modalJump();

        open.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'flex';
                modalJump(true);
                document.body.style.overflow = 'hidden'
                
                // console.log(a);
                // document.body.style.paddingRight = a + 'px';
                // console.log(document.body.style.paddingRight)
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

        function modalJump(pos) {
            if (pos){
                const scrollTab = window.innerWidth - document.documentElement.clientWidth
                document.body.style.marginRight = scrollTab + 'px';
            }else {
                document.body.style.marginRight = 0;
            }
           
            
        }
        
}

export default modals;