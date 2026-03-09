const submitData = async () => {
    let firstnameDOM = document.querySelector('input[name=firstname]');
    let lastnameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]:checked');
    let interestDOMs = document.querySelectorAll('input[name=interests]:checked');
    let descriptionDOM = document.querySelector('textarea[name=description]');
    let messageDOM = document.getElementById('message')

    try{
        let interests =''
        for (let i = 0 ; i < interestDOMs.length; i++) {
            interests += interestDOMs[i].value
            if (i != interestDOMs.length - 1){
            interests += ','
        }
    }

    let userData ={
        firstname: firstnameDOM.value,
        lastname: lastnameDOM.value,
        age: ageDOM.value,
        gender: genderDOM ? genderDOM.value:null,
        description: descriptionDOM.value,
        interests: interests
    };
        console.log('submitData',userData);
        const response = await axios.post('http://localhost:8000/users',userData);

        console.log('response',response);
        messageDOM.innerText = 'บันทึกข้อมูลสำเร็จ'
        messageDOM.className = 'message success'

    }catch(error){
        console.error('Error:',error)
        messageDOM.innerText = 'เกิดข้อผิดพลาด'
        messageDOM.className = 'message danger'
    }
};