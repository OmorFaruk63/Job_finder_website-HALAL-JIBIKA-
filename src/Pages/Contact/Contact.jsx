
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-form-container">
                <h2>Contact Us</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" placeholder="Your Message" rows="4" required />
                    </div>

                    <button className='contact-btn' type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
