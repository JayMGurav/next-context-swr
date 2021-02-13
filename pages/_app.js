import { BooksProvider } from '@/state/booklist-context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <BooksProvider>
      <Component {...pageProps} />
    </BooksProvider>
  )
}

export default MyApp
