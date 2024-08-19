'use client'

// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-primary text-white mt-12">
        <div className="container mx-auto py-6 text-center">
          <p>&copy; {new Date().getFullYear()} Benson Muzarakuza. All Rights Reserved.</p>
          <p>Connect with me on <a href="https://linkedin.com/in/benson-muzarakuza" className="text-secondary hover:underline">LinkedIn</a></p>
        </div>
  
        <style jsx>{`
          footer {
            background-color: #1F2937; /* Primary color */
            margin-top: 20px;
            padding-top: 1rem;
            padding-bottom: 1rem;
            color: #F3F4F6; /* Light gray text */
          }
          .text-secondary {
            color: #3B82F6; /* Secondary color */
          }
        `}</style>
      </footer>
    );
  }
  