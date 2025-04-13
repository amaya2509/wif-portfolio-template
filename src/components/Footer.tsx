const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-6 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Amaya Fernando. All rights reserved.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Made with ❤️ using React & TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
