import Image from "next/image";

export default function Home() {
  return (
    <figure className="bg-sky-100 rounded-xl p-8 dark:bg-sky-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="/waleed-pic.jpeg" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “I am makinng project with the help of Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-blue-500 dark:text-blue-400">
        Waleed Saddique
      </div>
      <div>
        Generative AI Engineer
        <img className="w-24 h-24 scure-full mx-auto" src="/waleed-pic.jpeg" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4"></div>
      <p className="text-lg font-medium">
        “This is my second file .I am makinng project with the help of Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
      <div className="text-red-500 dark:text-red-400">
        Waleed Saddique
      </div>
      <div>
        Generative AI Engineer
        </div>
        </div>
    </figcaption>
  </div>
</figure>
  );
}
