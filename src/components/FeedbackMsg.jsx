

const feedbackMsg = () => {
  return (
    <>
        <div className="feedBackMsg" style={{display: "flex", paddingTop: "10rem"}}>
            <div>
                <h4>Get in Touch</h4>
                <textarea  placeholder="Enter Message"></textarea>
                <input type="text" placeholder="Enter your name" />
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Enter Subject" />
                <button>SEND</button>
            </div>
            <div>
                <div>
                    <i className="fa-solid fa-house"></i>
                    <p>Buttonwood, California</p>
                    <p>Rosemead, CA 91770</p>
                </div>
                <div>
                    <i className="fa-solid fa-phone"></i>
                    <p>+971 567 313 436</p>
                    <p>Mon to Fri 9am to 6pm</p>
                </div>
                <div>
                    <i class="fa-regular fa-envelope"></i>
                    <p>chrisjerry070@gmail.com</p>
                    <p>Send us your query anytime!</p>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default feedbackMsg