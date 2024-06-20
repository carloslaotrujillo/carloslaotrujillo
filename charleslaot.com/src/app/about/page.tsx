import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Charles La O. I live in Florida, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi!
            <br />
            I’m Charles La O.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’m a tech enthusiast with a lifelong passion for exploring the
              frontiers of innovation. Growing up in Cuba, technology wasn’t as
              accessible, but I was lucky to receive a two-inch thick Toshiba
              with Windows 95 as a Christmas gift in 1997. It was then that I
              realized the power technology holds to shape our world. From
              dismantling my Nintendo and Walkman to experimenting with
              programming, I’ve always been fascinated by how things work and
              what it takes to build them.
            </p>
            <p>
              Through earning my Bachelor’s Degree in Electrical and Computer
              Engineering, my curiosity evolved into a career path. I delved
              into programming languages like Assembly, Java, and C/C++, Web
              Development and even explored PLC programming. Each step
              reinforced my passion for creating software and understanding the
              technology that drives our modern lives.
            </p>
            <p>
              Today, I thrive on the challenge of coding and solving problems.
              My journey has shown me that technology is more than just tools;
              it’s a gateway to endless possibilities. I look forward to
              exploring these possibilities with you through my work.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">            
            <SocialLink
              href="https://github.com/charleslaot"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/charleslaot"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:contact@charleslaot.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              contact@charleslaot.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
