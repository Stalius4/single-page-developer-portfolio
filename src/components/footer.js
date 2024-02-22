import "../styles/footer.css"


function Footer(){



    return(
        <div className="footer-outer">
            <div className="footer-inner">
            <div className="footer-left">
                <h1>Contact</h1>
                <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            </div>
            <div className="footer-right">
                <form>
                <section className="footer-name">
                    <label for="name">NAME</label>
                    <input type="text" name="name" id="name"></input>
                </section>
                <section className="footer-email">
                    <label for="email">EMAIL</label>
                    <input type="text" name="email" id="email"></input>
                </section>
                <section className="footer-email">
                    <label for="message">MESSAGE</label>
                    <textarea  name="message" id="message" rows={3} cols={40}></textarea>
                </section>
                <section class="submission">
                  <input type="submit" value="SEND MESSAGE"></input>
                     </section>





                </form>
            </div>
            </div>
        </div>
    )
}


export default Footer