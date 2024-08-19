// app/about/page.js
import Image from 'next/image';
import profileImage from '@public/images/profile.jpg';

export default function About() {
  return (
    <section className="about py-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3">
          <Image src={profileImage} alt="Profile Image" className="rounded-full shadow-lg" />
        </div>
        <div className="w-full md:w-2/3 mt-8 md:mt-0 md:ml-12">
          <h1 className="text-4xl font-bold text-primary">About Me</h1>
          <p className="mt-4 text-lg text-gray-700">I am Benson Muzarakuza, a Senior Web Developer, Illustrator, and Digital Marketer based in Pretoria, South Africa. With a robust background in Business Administration, Finance, and Accounting, I transitioned to digital marketing, web design, and graphic design, driven by a passion for creating impactful digital experiences.</p>
          <p className="mt-4 text-lg text-gray-700">Over the years, I have honed my skills through hands-on experience, online tutorials, and formal education, including a Web Design Certificate from Cape Town University and a Full Stack Web Development (MERN) course from Stellenbosch University. My expertise spans a range of technologies including HTML, CSS, JavaScript, React, WordPress, and various digital marketing tools.</p>
          <p className="mt-4 text-lg text-gray-700">I specialize in crafting custom WordPress websites, managing digital marketing campaigns, and developing comprehensive web applications. My work is driven by a commitment to excellence and a keen eye for detail, ensuring that every project I undertake meets the highest standards of quality and performance.</p>
        </div>
      </div>
    </section>
  );
}



