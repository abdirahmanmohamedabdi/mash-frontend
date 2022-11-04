import React from 'react'

function EditMerchandiser({ editForm, handleMerchantUpdate, handleChange }) {
    let {username, image, email, location, contact} = editForm

// PATCH request; calls handleCustomerUpdate to push changes to the page
    function handleEditForm(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/merchandisers/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(editForm),
        })
            .then(resp => resp.json())
            .then(updatedMerchant => {
                handleMerchantUpdate(updatedMerchant)})
    }

    return (
        <div>
            <h4>Edit Customer</h4>
            <form onSubmit={handleEditForm}>
                <input type="text" username="username" value={username} onChange={handleChange}/>
                <input type="image" src='#' value={image} onChange={handleChange}/>
                <input type="text" name="email" value={email} onChange={handleChange}/>
                <input type="text" name="location" value={location} onChange={handleChange}/>
                <input type="integer" name="contact" value={contact} onChange={handleChange}/>
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}

 export default EditMerchandiser;