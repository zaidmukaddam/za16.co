import { NextSeo } from 'next-seo'
import { GetServerSideProps } from 'next'

import NavLink from '../components/navLink'
import Link from 'next/link'

function Home({ greeting }: { greeting: string }) {
  return (
    <div className="py-32 px-6 md:px-0">
      <NextSeo
        title="There's no place like /home"
        description="A digital garden and second brain."
        openGraph={{
          title: "There's no place like /home",
          description: 'A digital garden and second brain.',
        }}
      />

      <div className="mx-auto max-w-2xl">
        <h1 className="text-stone-100 font-hammersmith mb-4 text-2xl">Zaid Mukaddam</h1>

        <p className="text-stone-500">{greeting}</p>
        <p className="text-stone-500">mumbai, in</p>
      </div>

      <main className="mx-auto max-w-2xl space-y-12 mt-12">
        <section className="space-y-4 prose">
          <p>
            <span className="font-fanwood text-xl italic">
              Product-focused indie software developer
            </span>
            .
          </p>

          <p>
            I&apos;m interested in open source, delightful user experiences, the
            future of the web, and empowering creators.
          </p>

          <p>
            When not writing code, I enjoy admiring software, capturing
            photographs, thinking about space, and hearing more about what I
            don&apos;t know.
          </p>

          <p>
            Find me on{' '}
            <Link href="https://twitter.com/zaidmukaddam">
              <a target="_blank">Twitter</a>
            </Link>
            ,{' '}
            <Link href="https://www.linkedin.com/in/zaidmukaddam/">
              <a target="_blank">LinkedIn</a>
            </Link>
            ,{' '}
            <Link href="https://github.com/zaidmukaddam">
              <a target="_blank">GitHub</a>
            </Link>
            , or{' '}
            <Link href="https://www.instagram.com/zaidmukaddam/">
              <a target="_blank">Instagram</a>
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-stone-100 font-hammersmith mb-4">Now</h2>

          <p className="prose">
            I&apos;m currently imagining what{' '}
            <Link href="/life">
              <a>life</a>
            </Link>{' '}
            I&apos;ll be proud of ten years from now. Working backward from
            there.
          </p>
        </section>

        <section className="flex flex-col">
          <h2 className="text-stone-100 font-hammersmith mb-4">The Garden</h2>
          <NavLink title="words" />
          <NavLink title="life" path="/life" />
        </section>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const greetings = [
    'brb, building a thing',
    'to infinity and beyond',
    'ad astra',
    'Computers are useless. They can only give you answers.',
    'bonjour',
    'guten tag',
    'nǐ hǎo',
    '01101000 01100101 01101100 01101100 01101111',
    'hello world',
    '/dev/null',
    'I would tell you a UDP joke, but you might not get it.',
    "Zaid'); DROP TABLE users;--",
  ]

  return {
    props: {
      greeting: greetings[Math.floor(Math.random() * greetings.length)],
    },
  }
}

export default Home
