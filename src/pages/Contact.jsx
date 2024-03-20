import React from 'react'
import Form from '../components/Form'
import {useNavigate} from 'react-router-dom'
const Contact = () => {
  const nav = useNavigate('');
  const subConact = (e) => {
    e.preventDefault();
    nav('/thankyou');
  }

  return (
    <div>
      <main class="container-fluid">
        <div class="container p-5">
          <div class="formArea row justify-content-between rounded-5 p-0 my-5">
            <form class="col-md-8 row justify-content-center align-content-center m-0 border-end border-5 text-dark" onSubmit={subConact}>
              <label for="name">Name:</label>
              <input type="text" name="name" placeholder="Your name..." required />
              <br />
              <label for="phone">Phone:</label>
              <input type="tel" name="phone" placeholder="Your phone..." required />
              <br />
              <label for="email">Email:</label>
              <input type="email" name="email" placeholder="Your email..." required />
              <br />
              <label for="comments">Comments:</label>
              <textarea id="comments" name="comments" placeholder="Enter your comments..."></textarea>
              <br />
              <br />
              <br />
              <input class="my-3" type="submit" value="Submit" />
            </form>
            <div class="formPic col-md-4">
            </div>
          </div>
        </div>
        <Form/> 
      </main>
    </div>
  )
}

export default Contact