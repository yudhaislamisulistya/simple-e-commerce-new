import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
              <Header></Header>
        <div>
          <h1>Ini Adalah Halaman Header</h1>
        </div>
    </>
  )
}
