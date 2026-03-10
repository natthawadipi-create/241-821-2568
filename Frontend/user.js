//1. load user ทั้งหมดจาก api/users มาแสดงในหน้า user.html
const BASE_URL='http://localhost:8000';

window.onload=async()=>{
    await loadData();
}

const loadData=async()=>{
    const reponse=await axios.get(`${BASE_URL}/users`);
    console.log(reponse.data);

    const userDOM=document.getElementById('user');
    let htmlData='<div>';
//2. นำข้อมูล user ที่ได้มาแสดงผลในหน้าเว็บ
    for(let i=0;i<reponse.data.length;i++){
        const user=reponse.data[i];
        htmlData+=`<div>
        ${user.id} ${user.firstname} ${user.lastname}
        <button>Edit</button>
        <button class='delete' data-id='${user.id}'>Delete</button>
    
        </div>`
    }
    htmlData+='</div>';
    userDOM.innerHTML=htmlData;

    const deleteDOMs=document.getElementsByClassName('delete');
    for(let i=0;i<deleteDOMs.length;i++){
        deleteDOMs[i].addEventListener('click',async(event)=>{
            const id=event.target.dataset.id;
            try{//1.
                await axios.delete(`${BASE_URL}/users/${id}`);
                loadData();//recursive function คือการเรียกใช้ function ตัวเองอีกครั้ง เพื่อให้ข้อมูลที่แสดงในหน้าเว็บเป็นข้อมูลล่าสุดหลังจากที่มีการลบ user ออกไปแล้ว
            }catch(error){
                console.error(error);
            }
        })
    }
}