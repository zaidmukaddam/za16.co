import Nav from './nav'

function withLayout(PageComponent: any) {
  const PageComponentWithLayout = ({ ...pageProps }) => {

    return (
      <div className="py-32 mx-auto max-w-2xl px-6 md:px-0">
        <Nav />

        <main className="mt-12">
          <PageComponent {...pageProps} />
        </main>
      </div>
    )
  }

  return PageComponentWithLayout
}

export default withLayout
