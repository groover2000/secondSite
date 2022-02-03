import postRequest from "../helpers/postRequest";

const forms = () => {

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
           const formData = new FormData(element);
           formData.append('username', '123')
           const a = await postRequest('assets/server.php', formData)
           console.log(a)
           
       })
       
   });
   


}

export default forms;