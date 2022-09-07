import { SessionProvider } from "next-auth/react"
import Login from "./components/login-btn"


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Login>
      <Component {...pageProps} />
      </Login>
      
    </SessionProvider>
  )
}