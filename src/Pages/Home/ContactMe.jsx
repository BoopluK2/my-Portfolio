export default function ContactMe() {
    return (
      <section id="Contact" className="contact--section">
        <div>
          {/* <p className="sub--title">Get In Touch</p> */}
          <h2>Свезатся со мной</h2>
        </div>
        <form className="contact--form--container">
          <div className="container">
            {/* <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label> */}
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Имя</span>
              <input
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            {/* <label htmlFor="phone-number" className="contact--label">
              <span className="text-md"></span>
              <input
                type="number"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
                required
              />
            </label> */}
          </div>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Cообщение</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              placeholder="Напиши мне"
            />
          </label>
          <label htmlFor="checkboc" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">Я принимаю условия</span>
          </label>
          <div>
            <button className="btn btn-primary contact--form--btn">Отправить</button>
          </div>
        </form>
      </section>
    );
  }
  