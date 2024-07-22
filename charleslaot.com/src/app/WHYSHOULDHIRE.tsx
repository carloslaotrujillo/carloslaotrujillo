/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gtxaxZNb0lu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BriefcaseIcon className="h-6 w-6" />
          <span className="sr-only">My Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Skills
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Experience
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Achievements
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hire Me: Your Next Top Talent
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    As a seasoned software engineer with a passion for problem-solving and a track record of delivering
                    high-impact projects, I'm excited to bring my expertise to your team.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Hire Me
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Download Resume
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">My Skills</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Expertise That Delivers</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I've honed a diverse set of skills that enable me to tackle complex challenges and deliver exceptional
                  results. From front-end development to back-end architecture, I'm proficient in the latest
                  technologies and best practices.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Front-end Development</h3>
                <p className="text-sm text-muted-foreground">
                  Expertise in React, Vue.js, and modern JavaScript frameworks. Skilled in responsive design,
                  accessibility, and user experience.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Back-end Engineering</h3>
                <p className="text-sm text-muted-foreground">
                  Proficient in Node.js, Python, and Java. Experienced in building scalable and secure APIs, databases,
                  and microservices.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">DevOps and Cloud</h3>
                <p className="text-sm text-muted-foreground">
                  Knowledgeable in containerization, CI/CD, and cloud infrastructure. Comfortable with tools like
                  Docker, Kubernetes, and AWS.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Work Experience</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">A Proven Track Record</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I've had the privilege of working with leading companies across various industries, delivering
                  impactful projects and driving innovation. My diverse experience has equipped me with the skills to
                  thrive in dynamic environments and tackle complex challenges.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Senior Software Engineer</h3>
                <p className="text-sm text-muted-foreground">Acme Inc. | 2020 - Present</p>
                <p className="text-sm text-muted-foreground">
                  Spearheaded the development of a mission-critical web application, leading a team of engineers to
                  deliver a scalable and user-friendly platform. Collaborated closely with stakeholders to understand
                  requirements and implement innovative solutions.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Software Engineer Intern</h3>
                <p className="text-sm text-muted-foreground">Globex Corporation | 2019 - 2020</p>
                <p className="text-sm text-muted-foreground">
                  Contributed to the development of a mobile app, gaining hands-on experience in cross-platform
                  development and agile methodologies. Demonstrated strong problem-solving skills and a keen eye for
                  detail.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="achievements" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Achievements</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recognized for Excellence</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Throughout my career, I've been recognized for my contributions and the impact of my work. These
                  accolades are a testament to my dedication, problem-solving skills, and commitment to delivering
                  exceptional results.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Hackathon Winner</h3>
                <p className="text-sm text-muted-foreground">
                  Awarded first place at the 2021 Acme Hackathon for developing a innovative AI-powered solution to
                  streamline customer support.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Employee of the Year</h3>
                <p className="text-sm text-muted-foreground">
                  Recognized as the Employee of the Year at Globex Corporation in 2020 for my outstanding contributions
                  and dedication to the team.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Open-Source Contributor</h3>
                <p className="text-sm text-muted-foreground">
                  Active contributor to several open-source projects, including popular JavaScript libraries and tools.
                  My contributions have been recognized and merged by the maintainers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid items-center justify-center gap-6 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Let's Connect</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Ready to Discuss Your Needs?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm excited to learn more about your company and how I can contribute to your success. Let's schedule
                  a call to discuss my qualifications and how I can help your team achieve its goals.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <form className="w-full max-w-md space-y-4">
                  <Input type="text" placeholder="Your Name" className="w-full" />
                  <Input type="email" placeholder="Your Email" className="w-full" />
                  <Textarea placeholder="Your Message" className="w-full" rows={4} />
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 John Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
