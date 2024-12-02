import React from 'react'

const Home = () => {
  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form  className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            //value={name}
            //onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
          <label htmlFor="ID">ID</label>
          <input
            type="text"
            id="name"
            name="name"
            //value={name}
            //onChange={(e) => setName(e.target.value)}
            placeholder="Enter your ID"
            required
          />
          <button type="submit">
            Submit
          </button>
        </div>
        </form>
        </div>
        

  )
}

export default Home
