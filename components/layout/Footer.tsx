"use client";

import Link from "next/link";

export default function Footer() {
  const linkColumns = [
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]
    }
  ];

  return (
    <footer className="bg-[#1a2332] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="flex justify-between items-start">
          <div className="shrink-0">
            <div className="bg-white px-4 sm:px-6 py-2 sm:py-3 text-black font-bold text-xs sm:text-sm">
              LOGO
            </div>
          </div>

          <div className="grid grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {linkColumns.map((column, index) => (
              <div key={index}>
                <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-2 sm:space-y-2.5">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}


