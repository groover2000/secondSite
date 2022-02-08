import { getRequest } from "../helpers/postRequest";

const showMore = (element, content) => {

    const button = document.querySelector(element),
        elements = document.querySelectorAll(content);

        // button.addEventListener('click', () => {
        //     button.style.display = 'none';

        //     elements.forEach((element) => {
        //         element.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
        //         element.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');
        //     })
            
           
        // })

        button.addEventListener('click', async () =>{
            try {
                const res = await getRequest('http://localhost:3000/styles');
                console.log(res);
            } catch (error) {
                console.log(error);
            }
           

        })

}

export default showMore;