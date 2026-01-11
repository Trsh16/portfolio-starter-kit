import Image from "next/image";

export const metadata = {
  title: 'Resume',
  description: 'Read my resume.',
}

export default function Resume() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Resume</h1>
      {/* HEADER */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
        <Image
          src="/images/full.jpg"
          alt="Trisha Alexis"
          width={180}
          height={180}
          className="rounded-2xl object-cover"
        />
        <div>
          <h1 className="text-4xl font-bold">Trisha Alexis Likorawung</h1>
          <p className="text-gray-600 mt-2">
            Junior Full-Stack Website Developer | iOS Developer | UI/UX Designer | Data Analyst | Mobile App Developer
          </p>
          <p className="mt-4 text-sm text-gray-500">
            +62 813 2562 8436 | ✉️ trishaalexis16@gmail.com
          </p>
          <p className="text-sm text-gray-500">
            linkedin.com/in/trisha-alexis-45275b267/ | github.com/Trsh16
          </p>
        </div>
      </div>

      {/* ABOUT */}
      <Section title="About Me">
        <p className="text-gray-700 leading-relaxed">
          My name is Trisha Alexis Likorawung, usually called Trisha. I am a Fresh Graduate in Information Systems from
          Universitas Ciputra, Surabaya (October 2025). I am passionate about technology, application development,
          especially iOS, full-stack web, and UI/UX design. I enjoy creating user-focused digital solutions combining
          functionality, efficiency, and aesthetics.
        </p>
      </Section>

      {/* SKILLS */}
      <Section title="Skills">
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><b>Languages:</b> English (C1), Mandarin (HSK 2)</li>
          <li><b>Programming:</b> Swift, JavaScript, Java, C#, C++, PHP, Vue, NestJS, Laravel, Flutter, Python, HTML, CSS, MySQL, PostgreSQL, MongoDB</li>
          <li><b>Data:</b> Power BI, Tableau, Excel, Pandas, Numpy</li>
          <li><b>Design:</b> Figma, Photoshop, Illustrator, Premiere Pro, Procreate</li>
          <li><b>Tools:</b> VS Code, Xcode, Android Studio, GitHub, Postman</li>
          <li><b>Management:</b> Jira, Miro, Notion, Google Calendar</li>
        </ul>
      </Section>

      {/* EDUCATION */}
      <Section title="Education">
        <ul className="space-y-3 text-gray-700">
          <li>
            <b>Universitas Ciputra Surabaya</b> — Information Systems (2021–2025) <br />
            GPA: 3.71
          </li>
          <li><b>Gloria 2 Christian High School</b> (2018–2021) — Avg: 85.46</li>
          <li><b>Gloria 2 Christian Junior High School</b> (2015–2018) — Avg: 89.23</li>
        </ul>
      </Section>

      {/* EXPERIENCE */}
      <Section title="Experience">
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-lg">Apple Developer Academy — iOS Developer (2024)</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Built multiple iOS apps using Swift & SwiftUI</li>
              <li>Published educational game Beach Buddy to App Store</li>
              <li>Worked on OCR app, meeting assistant, restaurant randomizer, tree inspection app</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Fumindo Mandiri Sejahtera — Junior Full-Stack Developer (2024–2025)</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Built internal web & mobile systems</li>
              <li>Handled documentation, UAT testing, feature development</li>
              <li>Worked on frontend + backend + performance improvements</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section title="Certifications">
        <ul className="list-disc pl-6 text-gray-700">
          <li>Scrum Foundation Professional Certification (SFPC)</li>
          <li>SAP01, SCM600</li>
          <li>Certified Programmer (BNSP)</li>
          <li>C1 English Proficiency Test</li>
        </ul>
      </Section>

      {/* ORGANIZATION */}
      <Section title="Organizations & Committees">
        <ul className="list-disc pl-6 text-gray-700">
          <li>Secretary — UKM Kanvas (2022–2023)</li>
          <li>Committee — EPIC Event (2022–2023)</li>
          <li>Member — Google DSC, UKM PMK, Boys Brigade</li>
        </ul>
      </Section>
    </section>
  );
}

/* Reusable Section Component */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">{title}</h2>
      {children}
    </div>
  );
}
