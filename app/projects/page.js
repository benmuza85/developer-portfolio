// app/projects/page.js
export default function Projects() {
    return (
      <section className="projects py-20">
        <h1 className="text-4xl font-bold text-center text-primary">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          
          {/* Hangman Game Project */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-text">Hangman Game</h3>
            <p className="mt-2 text-gray-600">
              A classic Hangman game developed using HTML, CSS, and ReactJS. This project showcases my skills in creating interactive web applications and implementing game logic.
            </p>
            <a href="https://hangman-by-ben-ad2fdc258875.herokuapp.com/" target="_blank" className="text-secondary hover:underline">Play Game</a> | <a href="https://github.com/benmuza85/hangman" target="_blank" className="text-secondary hover:underline">GitHub</a>
          </div>
          
          {/* GoAdventure Project */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-text">GoAdventure</h3>
            <p className="mt-2 text-gray-600">
              A travel and leisure platform featuring holiday accommodations, activity bookings, flight and hotel reservations, and an online store. Managed UI design and full site maintenance.
            </p>
            <a href="https://goadventure.herokuapp.com" target="_blank" className="text-secondary hover:underline">Live Site</a>
          </div>
  
          {/* Galleries Pret Project */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-text">Galleries Pret</h3>
            <p className="mt-2 text-gray-600">
              A comprehensive travel and leisure site with integrated booking systems. Oversaw UI/UX design, corporate identity development, and payment gateway integration.
            </p>
            <a href="https://galleriespret.com" target="_blank" className="text-secondary hover:underline">Live Site</a>
          </div>
  
          {/* Bere Akademie Project */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-text">Bere Akademie</h3>
            <p className="mt-2 text-gray-600">
              Youth rugby training club website with an online store and booking system for training sessions. Handled UI design and ongoing maintenance.
            </p>
            <a href="https://bereakademie.co.za" target="_blank" className="text-secondary hover:underline">Live Site</a>
          </div>
  
          {/* Fitness Unplugged Project */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-text">Fitness Unplugged</h3>
            <p className="mt-2 text-gray-600">
              A website integrated with a Gym Management System where clients can join and purchase training and fitness packages. Managed UI design, payment gateway integration, and corporate identity development.
            </p>
            <a href="https://fitnessunplugged.co.za" target="_blank" className="text-secondary hover:underline">Live Site</a>
          </div>
  
          {/* Sally Slimming Studio Project */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-text">Moringa SA Pro</h3>
            <p className="mt-2 text-gray-600">
            Moringa SA Pro is company that sells health and beauty products on behalf of various Moringa product manufactures and suppliers. My role on this project was to redesign the UI and restructure the online store. I am fully responsible for managing the online store and website maintenance. 
            </p>
            <a href="https://moringa-sa.co.za/" target="_blank" className="text-secondary hover:underline">Live Site</a>
          </div>
  
  
        </div>
      </section>
    );
  }
  