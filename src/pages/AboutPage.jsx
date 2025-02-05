import {  FaGithub, FaLinkedin } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-purple-800 mb-6">About me</h1>
        <p className="text-gray-700 text-lg mb-8">
          Hi there! My name is Armando Marelius and I am a passioned web developer with ecperience in React, Tailwind , Js and more.
          Follow me on my social media to keep up with my work , thanks
        </p>
        <div className="flex justify-center space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/armandomarelius"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors duration-300"
          >
            <FaGithub size={32} />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/armando-marelius-garc%C3%ADa-paulsen-a03648346/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;