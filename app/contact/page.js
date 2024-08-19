// app/contact/page.js
export default function Contact() {
    return (
      <section className="contact py-20">
        <h1 className="text-4xl font-bold text-center text-primary">Contact Me</h1>
        <div className="flex flex-col md:flex-row justify-between mt-10">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700">Feel free to reach out to me for collaborations, freelance work, or any inquiries you may have. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            <p className="mt-4 text-lg text-gray-700"><strong>Email:</strong> benmuzagocloud@gmail.com</p>
            <p className="mt-2 text-lg text-gray-700"><strong>Phone:</strong> +27 64 787 9037</p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <form className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message" rows="4"></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
  