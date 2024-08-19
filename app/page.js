// app/page.js
export default function Home() {
    return (
      <section className="home text-center">
        <div className="py-20">
          <h1 className="text-5xl font-bold text-primary">Welcome to My Developer Portfolio</h1>
          <p className="mt-4 text-lg text-gray-700">Explore my work, learn more about me, and feel free to get in touch.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-text">About Me</h2>
            <p className="mt-2 text-gray-600">I am a passionate developer with expertise in web design, development, and digital marketing. Click below to learn more about my journey.</p>
            <a href="/about" className="mt-4 inline-block text-secondary hover:underline">Read More →</a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-text">My Projects</h2>
            <p className="mt-2 text-gray-600">I have worked on a diverse range of projects, from travel websites to e-commerce platforms. Click below to see my work.</p>
            <a href="/projects" className="mt-4 inline-block text-secondary hover:underline">View Projects →</a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-text">Contact Me</h2>
            <p className="mt-2 text-gray-600">Interested in working together or want to get in touch? Click below for my contact information.</p>
            <a href="/contact" className="mt-4 inline-block text-secondary hover:underline">Get in Touch →</a>
          </div>
        </div>
      </section>
    );
  }
  