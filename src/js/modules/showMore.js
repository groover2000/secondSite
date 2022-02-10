import { getRequest } from "../helpers/postRequest";

const showMore = (element, wrapper) => {

    const button = document.querySelector(element);
        

        button.addEventListener('click', async () =>{

            try {
                const res = await getRequest('http://localhost:3000/styles');
               
                res.forEach((item) => {
                    const div = document.createElement(div);
                    div.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');
                    div.innerHTML = ` 
                    <div class=styles-block>
                        <img src="${item.src}" alt>
                        <h4>${item.title}</h4>
                        <a href="${item.link}">Подробнее</a>
                    </div>`
                    
                    document.querySelector(wrapper).appendChild(div)
                })
            
            } catch (error) {
                console.log(error);
            }
           
            button.remove();
        })

}



export default showMore;