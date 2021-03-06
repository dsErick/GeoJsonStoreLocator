const storeForm = $('#store-form');
const storeId = $('#store-id');
const storeAddress = $('#store-address');

// Send POST to API to add store
storeForm.on('submit', async (e) => {
    e.preventDefault();

    if (storeId.val() === '' || storeAddress.val() === '') {
        alert('Please fill in fields');
    }

    const sendBody = {
        storeID: storeId.val(),
        address: storeAddress.val()
    }

    try {
        const res = await axios.post('/api/v1/stores', {
            storeID: sendBody.storeID,
            address: sendBody.address
        });
        
        alert('Store added succesfully!');
        window.location.href = '/index.html';
    } catch (err) {
        console.log(err.response);
        if (err.response.status === 400) {
            alert('Store already exists');
        } else if (err.response.status === 500) {
            alert('Server Error');
        }
        return;
    }
    // try {
    //     const res = await fetch('/api/v1/stores', {
    //         method: 'post',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(sendBody)
    //     });
        
    //     if (res.status === 400) {
    //         throw Error('Store already exists');
    //     } else if (res.status === 500) {
    //         throw Error('Server error');
    //     }

    //     alert('Store added succesfully!');
    //     window.location.href = '/index.html';
    // } catch (err) {
    //     alert(err);
    //     return;
    // }
});