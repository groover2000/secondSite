import postRequest from "../helpers/postRequest";

const forms = () => {


    const message = {
        loading: 'ОТПРАВКА...',
        good: 'ОТПРАВЛЕНО',
        bad: 'ОШИБКА'
    }
   const forms = document.forms;
   console.log(forms);
   
   forms.forEach((element, i) => {
    
    let z = element.querySelector('input[type="file"]') 
    if(z) {
        z.addEventListener('change', () => {
            if(z.value) {
                // const file = document.createElement(`div`);
                // const fileContent = document.createTextNode(z.value)
                // file.appendChild(fileContent);
                
                const oldElem = element.querySelector('.file_upload div');
                oldElem.textContent = z.files[0].name.slice(0, 14);
                // oldElem.parentNode.replaceChild(file, oldElem)
                console.log()
            }else {
                const oldElem = element.querySelector('.file_upload div');
                oldElem.textContent = 'Файл не выбран'
            }
        })
    }
       element.addEventListener('submit', async (e) => {
           e.preventDefault();

           let status = document.createElement('div');
           status.classList.add('animation')
           let statusText = document.createTextNode(message.loading)
           status.appendChild(statusText)
           element.parentNode.appendChild(status);

           element.style.display = 'none';
           const formData = new FormData(element);
          
           try {
            const a = await postRequest('assets/server.php', formData)
                if(a.ok) {
                    statusText.textContent = message.good;
                    const b = await a.text()
                    console.log(b);
                    setTimeout(() => {
                        statusText.remove()
                    }, 1000) 
                }else {
                    throw new Error('ERROR')
                }
                  
           } catch (error) {
               statusText.textContent = message.bad;
               console.log(error);
               setTimeout(() => {
                   statusText.remove()
               }, 1000)
           } finally {
            setTimeout(()=> {
                element.style.display = 'block';
            }, 1000)
           }
           
           
       })
       
   });
   


}

export default forms;