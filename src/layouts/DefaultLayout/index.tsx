import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      {/* TALK: This is similar a master page or layout page in ASP.NET, where the 'outlet' Components renders child pages content
      but the Header for e.g. is kept as a common element of all pages that share the same layout */}
      <Outlet />
    </LayoutContainer>
  )
}
