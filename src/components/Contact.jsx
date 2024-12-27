const Contact = () => {
  return (
    <section id="contact" aria-label="Contact Me">
      <h2>Contact</h2>
      <form action="your-form-handler" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
