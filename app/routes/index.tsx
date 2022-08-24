import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <>
      <div className="px-5vw py-9 lg:py-12">
        <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
          <div className="relative sm:pb-16 sm:pt-8">

          <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
            <div className="mt-6 flex flex-wrap justify-center gap-8">
              {[
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
                  alt: "Php",
                  href: "https://php.net/",
                }, 
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png",
                  alt: "Jupyter",
                  href: "https://jupyter.org/"
                },
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png",
                  alt: "PostgreSQL",
                  href: "https://sqlite.org",
                },
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/2560px-R_logo.svg.png",
                  alt: "R",
                  href: "https://jupyter.org/"
                },
                {
                  src: "https://user-images.githubusercontent.com/1500684/157764484-ad64a21a-d7fb-47e3-8669-ec046da20c1f.svg",
                  alt: "Prisma",
                  href: "https://prisma.io",
                },
                {
                  src: "https://logojinni.com/image/logos/perl-programming-language.svg",
                  alt: "Perl",
                  href: "https://perl.org/wiki/"
                },
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png",
                  alt: "Laravel",
                  href: "https://laravel.com/"
                },
                {
                  src: "https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg",
                  alt: "Tailwind",
                  href: "https://tailwindcss.com",
                },
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2048px-Python.svg.png",
                  alt: "Python",
                  href: "https://www.pyhton.org",
                },
                {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQqovBOPcarJZcZlfqcekMZJ5VnDJ0AbZl2_MgErN_Bw&s",
                  alt: "Vue",
                  href: "https://vue.org",
                },
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
                  alt: "React",
                  href: "https://react.org"
                },
                {
                  src: "https://user-images.githubusercontent.com/1500684/157772447-00fccdce-9d12-46a3-8bb4-fac612cdc949.svg",
                  alt: "Vitest",
                  href: "https://vitest.dev",
                },
                {
                  src: "https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg",
                  alt: "Prettier",
                  href: "https://prettier.io",
                },
                {
                  src: "https://user-images.githubusercontent.com/1500684/157772990-3968ff7c-b551-4c55-a25c-046a32709a8e.svg",
                  alt: "ESLint",
                  href: "https://eslint.org",
                },
                {
                  src: "https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg",
                  alt: "TypeScript",
                  href: "https://typescriptlang.org",
                },
                {
                  src: "https://www.vertica.com/wp-content/uploads/2019/07/Golang.png",
                  alt: "Golang",
                  href: "https://go.dev/"
                },
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
                  alt: "Rust",
                  href: "https://www.rust-lang.org/"
                },
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png",
                  alt: "Tensorflow",
                  href: "https://www.tensorflow.org/"
                },
                {
                  src: "https://cdn.worldvectorlogo.com/logos/hadoop.svg",
                  alt: "Hadoop",
                  href: "https://www.rust-lang.org/"
                },
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
                  alt: "Amazon Web Services",
                  href: "https://aws.amazon.com/"
                },
                {
                  src: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
                  alt: "Firebase",
                  href: "https://firebase.com"
                }
              ].map((img) => (
                <a
                  key={img.href}
                  href={img.href}
                  className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
                >
                  <img alt={img.alt} src={img.src} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}