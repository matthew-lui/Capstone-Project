import { useState} from 'react'
import Modal from 'react-modal';



function Profile({user, setUser, loggedIn}) {
    const [updatedEmail, setUpdatedEmail] = useState(loggedIn.email)
    const [showModal, setShowModal] = useState(false);
    const handleSubmit = (e) =>{
    e.preventDefault()
    fetch(`/restaurants/${user.id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },        
        body: JSON.stringify({
            email: updatedEmail
            
        })      
        
    })
    .then(r => {
      if(r.ok){
        r.json().then(setUser) 
      } else {
        r.text().then(console.warn)
      }
    })
    
    setShowModal(false)
}

    

    return (
        <><div className="profile-page-container">
            <div>
          <div className='profile-page'>
            <h1>Welcome {loggedIn.username}</h1>
            <p>Email: {loggedIn.email}</p>
            <button className="fancy-button"onClick={() => setShowModal(true)}>Update Email</button>
          </div>
          <Modal className='modal'
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
          >
            <form onSubmit={handleSubmit}>
              <label>
                New Email:
                <input className="input-field"
                  type="email"
                  value={updatedEmail}
                  onChange={e => setUpdatedEmail(e.target.value)}
                />
              </label>
              <button className="fancy-button"type="submit">Save</button>
              <button className="fancy-button"onClick={() => setShowModal(false)}>Cancel</button>
            </form>
          </Modal>
          </div>
          </div>
        </>
      );
    }
    
    export default Profile;