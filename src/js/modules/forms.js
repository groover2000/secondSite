import {postRequest} from "../helpers/postRequest";
import { message } from "../data/messageData";
const forms = () => {

   const forms = document.forms;

   const insertElem = (insertSub, insertObj, animCls = '', message = '') => {

    let status = document.createElement(insertObj);
        status.classList.add(animCls);

    let statusText = document.createTextNode(message.loading);
        status.appendChild(statusText);
        insertSub.parentNode.appendChild(status);
        insertSub.style.display = 'none';

    return statusText;
   }

   const onChangeImage = (fileInput, form) => {
    let z = form.querySelector(fileInput)

    if(z) {
        z.addEventListener('change', () => {
            if(z.value) {
               const oldElem = form.querySelector('.file_upload div');
                oldElem.textContent = z.files[0].name.slice(0, 14);
            }else { 
                const oldElem = form.querySelector('.file_upload div');
                oldElem.textContent = 'Файл не выбран'
            }
        })
    }
   }

   const onSubimtForm = (form) => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let insItem = insertElem(form, 'div', 'animation', message);
        const formData = new FormData(form);
    
        try {
         const a = await postRequest('assets/server.php', formData)
         
             insItem.textContent = message.good;
             setTimeout(() => {
                insItem.remove() 
             }, 1000) 
               
        } catch (error) {
            console.log(error)
            insItem.textContent = message.bad;
            
            setTimeout(() => {
                insItem.remove()
            }, 1000)
        } finally {
         setTimeout(()=> {
            form.style.display = 'block';
         }, 1000)
        }
    })
   }


   forms.forEach((element) => {
    onChangeImage('input[type="file"]', element)
    onSubimtForm(element);    
   });
}

export default forms;