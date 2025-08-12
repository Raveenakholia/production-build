/** @format */

// src/components/Contact.js
function Contact() {
  return (
    <div className='bg-light py-4'>
      <section
        id='contact'
        class='py-5 bg-light'>
        <div class='container'>
          <div class='row justify-content-center text-center'>
            <div class='col-md-8'>
              <h2 class='mb-4'>Get in Touch</h2>
              <p class='lead mb-4'>
                Whether you have a project in mind, a collaboration offer, or
                just want to say hello — I'm all ears. Let's create something
                beautiful together.
              </p>
            </div>
          </div>
          <div class='row justify-content-center'>
            <div class='col-md-8'>
              <form>
                <div class='mb-3'>
                  <label
                    for='name'
                    class='form-label'>
                    Your Name
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='name'
                    placeholder='Enter your name'
                  />
                </div>
                <div class='mb-3'>
                  <label
                    for='email'
                    class='form-label'>
                    Your Email
                  </label>
                  <input
                    type='email'
                    class='form-control'
                    id='email'
                    placeholder='Enter your email'
                  />
                </div>
                <div class='mb-3'>
                  <label
                    for='message'
                    class='form-label'>
                    Message
                  </label>
                  <textarea
                    class='form-control'
                    id='message'
                    rows='5'
                    placeholder='Write your message here...'></textarea>
                </div>
                <button
                  type='submit'
                  class='btn btn-dark px-4'>
                  Send Message
                </button>
              </form>

              <hr class='my-5' />

              <div class='text-center'>
                <p class='mb-1'>
                  <strong>Email:</strong> raveenakholia786@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
