try {
    console.log(x); // interpreter throwed this Error
} catch (error) {
    // console.log( error.stack);
}


sayMyName = name => {
    try {
        if (name != 'Safwan') {
            let error = new Error('wrong name !!!');
            error.name = 'Reference Error';
            throw error;
        }
        return name;
    } catch (err) {
        return err;
    }
};

// console.log(sayMyName('Nils'));

const addName = () => {
    /**
     * adding empty name is an Error
     * adding multi time same name is an Error
     */
    let name = document.getElementById('name').value;
    try {
        if (name == '') throw new Error('adding empty name is not possible !!');
    } catch (error) {
        document.getElementById('error').innerHTML = `${error.message}`;
        document.getElementById('error').style.visibility = 'visible';
        setTimeout(() => {
            document.getElementById('error').style.visibility = 'hidden';
        }, 5000);
        return error;
    }
    let fbw39 = JSON.parse(localStorage.getItem('list'));
    if (!fbw39) {
        fbw39 = [name];
    } else {
        try {
            if (fbw39.indexOf(name) >= 0) {
                throw new Error('adding multi time same name is not allowed !!');
           }
        } catch (error) {
            document.getElementById('error').innerHTML = `${error.message}`;
            document.getElementById('error').style.visibility = 'visible';
            setTimeout(() => {
                document.getElementById('error').style.visibility = 'hidden';
            }, 5000);
            return error;
        }
        fbw39.push(name);
    }
    localStorage.setItem('list', JSON.stringify(fbw39));
    document.getElementById('name').value = '';
    console.log(fbw39);
    let ul = document.getElementById('fbw39');
    ul.innerHTML = `  <li> <strong>FbW39 Names List: </strong></li>`;
    
    fbw39.forEach(element => {
        ul.innerHTML += `
        <li>${element}</li>
        `;
    });
};