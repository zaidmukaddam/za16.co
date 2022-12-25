import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'

import { getAllContent } from '../lib/api'

import { Writing } from '../types'

import withLayout from '../components/withLayout'
import PageSummary from '../components/PageSummary'
import RecentWords from '../components/RecentWords'

function NotFound({
  words,
}: {
  words: Writing[]
}) {
  return (
    <>
      <NextSeo
        title="Not Found"
        description="Not all who wander are lost."
        openGraph={{
          title: 'Not Found',
          description: 'Not all who wander are lost.',
        }}
      />

      <header>
        <h1 className="text-3xl">undefined</h1>

        <PageSummary>
          <p>
            <span className="font-fanwood text-xl italic">
              Not all who wander are lost
            </span>
            . That being said, I didn&apos;t find what you&apos;re looking for.
          </p>

          <p>
            <Link href="/">
              <a>Return home</a>
            </Link>{' '}
            or check out some of my latest additions below.
          </p>
        </PageSummary>
      </header>

      <section className="grid grid-cols-1 gap-12">

        <RecentWords words={words} />
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const words = getAllContent('words', ['title', 'slug', 'description', 'date'])

  return {
    props: {
      words: words.slice(0, 4),
    },
  }
}

export default withLayout(NotFound)
