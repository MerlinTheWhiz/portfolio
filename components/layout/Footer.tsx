export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-white/5 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-600 dark:text-[#737373]">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors hover:text-accent-primary dark:text-[#737373] dark:hover:text-accent-primary"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-sm text-gray-600 transition-colors hover:text-accent-primary dark:text-[#737373] dark:hover:text-accent-primary"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="text-sm text-gray-600 transition-colors hover:text-accent-primary dark:text-[#737373] dark:hover:text-accent-primary"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}