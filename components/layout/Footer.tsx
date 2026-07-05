import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="border-t border-gray-200 bg-background dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-600 dark:text-[#737373]">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/MerlinTheWhiz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 transition-colors hover:text-accent-primary dark:text-[#737373] dark:hover:text-accent-primary"
              title="GitHub"
            >
              {t("github")}
            </a>
            <a
              href="https://www.linkedin.com/in/michaelanokamcodes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 transition-colors hover:text-accent-primary dark:text-[#737373] dark:hover:text-accent-primary"
              title="LinkedIn"
            >
              {t("linkedin")}
            </a>
            <a
              href="https://x.com/madebymichael_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 transition-colors hover:text-accent-primary dark:text-[#737373] dark:hover:text-accent-primary"
              title="Twitter X"
            >
              {t("twitter")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
