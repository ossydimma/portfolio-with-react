

const feedbackMsg = () => {
  return (
    <>
        <div className="feedBackMsgCon" style={{marginTop: "8rem"}}>
            <div  className="feedBackMsg">
                <h2>Get in Touch</h2>
                <textarea  placeholder="Enter Message"></textarea>

                <div className="feedBack-inputs">
                    <div className="feedBack-input">
                        <input type="text" placeholder="Enter your name" />
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div className="feedBack-input2">
                        <input type="text" placeholder="Enter Subject" />
                    </div>
                </div>
               
                <div className="feedBack-Btn">
                    <button>SEND</button>
                </div>
                
            </div>
            <div className="feedBackDetails">
                <div className="iconFlex">
                    <i className="fa-solid fa-house"></i>
                    <div>
                        <p>Abuja, Nigeria</p>
                        <p>Onitsha, Anambra</p>
                    </div>   
                </div>

                <div className="iconFlex">
                    <i className="fa-solid fa-phone"></i>
                    <div>
                        <p>+971 567 313 436</p>
                        <p>Mon to Fri 9am to 6pm</p>
                    </div>
                </div>
                
        
                <div className="iconFlex">
                    <i class="fa-regular fa-envelope"></i>
                    <div>
                        <p>chrisjerry070@gmail.com</p>
                        <p>Send us your query anytime!</p>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default feedbackMsg