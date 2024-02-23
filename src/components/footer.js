import "../styles/footer.css"


function Footer(){



    return(
        <div className="footer">
           
            <div className="footer__description">
                <h1 className="heading-XL">Contact</h1>
                <p className="text-L">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            </div>
                <form className="footer__form">
                <section className="footer-name">
                    <label for="name" className="text-L">NAME</label>
                    <input type="text" name="name" id="name"></input>
                </section>
                <section className="footer-email">
                    <label for="email" className="text-L">EMAIL</label>
                    <input type="text" name="email" id="email"></input>
                </section>
                <section className="footer-email">
                    <label for="message" className="text-L">MESSAGE</label>
                    <textarea  name="message" id="message" rows={3} cols={40}></textarea>
                </section>
                <section class="submission">
                  <input type="submit" value="SEND MESSAGE"></input>
                     </section>

                </form>
          
          
        </div>
    )
}


export default Footer