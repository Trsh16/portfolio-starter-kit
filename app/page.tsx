import Image from "next/image";
import { BlogPosts } from "./components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-3xl font-semibold tracking-tighter">
        Hi, I’m Trisha 👋
      </h1>

      <div className="shrink-0">
          <div className="
            relative
            w-40
            h-60
            md:w-48
            md:h-45
            rounded-2xl
            overflow-hidden
            border
            border-neutral-200
            dark:border-neutral-800
            shadow-lg
          ">
            <Image
              src="/images/profile.jpeg"
              alt="Trisha profile photo"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

      <h2 className="mb-6 text-xl text-neutral-600 dark:text-neutral-400">
        Information Systems Fresh Graduate & Junior Full-Stack Developer
      </h2>

      <p className="mb-4">
        I’m an Information Systems fresh graduate and a Junior Full-Stack
        Developer with a strong interest in building reliable, user-focused
        applications.
      </p>

      <p className="mb-4">
        I have hands-on experience working across both frontend and backend,
        developing web and mobile applications using modern technologies. On the
        frontend, I work with Vue.js to build responsive and interactive user
        interfaces. On the backend, I use NestJS with PostgreSQL to design APIs,
        manage data, and implement clean application logic.
      </p>

      <p className="mb-4">
        In addition to web development, I also develop iOS applications using
        Swift, focusing on clean architecture, user experience, and API
        integration. I’m comfortable working with data as well, using Python for
        data analysis to process, analyze, and visualize datasets.
      </p>

      <p className="mb-6">
        I enjoy learning new technologies, improving code quality, and
        collaborating in team environments. I’m currently seeking opportunities
        as a <strong>Junior Full-Stack Developer</strong>,{" "}
        <strong>Backend Developer</strong>, or <strong>iOS Developer</strong>,
        where I can continue growing my skills and contribute to impactful
        projects.
      </p>

      <div className="mb-8">
        <h3 className="mb-3 text-lg font-semibold">Tech Stack</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-700 dark:text-neutral-300">
          <li>
            <strong>Frontend:</strong> Vue.js, HTML, CSS, Bootstrap, JavaScript
          </li>
          <li>
            <strong>Backend:</strong> NestJS, REST API
          </li>
          <li>
            <strong>Database:</strong> PostgreSQL, MySQL, PHPMyAdmin, MongoDB
          </li>
          <li>
            <strong>Mobile:</strong> Swift (iOS), Dart
          </li>
          <li>
            <strong>Data:</strong> Python, PowerBI
          </li>
          <li>
            <strong>Tools:</strong> Git, API Integration
          </li>
        </ul>
      </div>

      <div className="my-8">
        <h3 className="mb-4 text-lg font-semibold">My Latest Projects</h3>
        <BlogPosts />
      </div>
    </section>
  );
}
