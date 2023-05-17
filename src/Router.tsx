import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>

      {/* TALK: You can have many layout pages as in the example below and make them render whenever a
      specific path is beeing requested ('/admin' in this case). All child routes are accessable
      by appending their paths to the end of the parent route path */}
      {/* <Route path="/admin" element={<AdminLayout />}>
        <Route path="/products" element={<Home />} />
      </Route> */}
    </Routes>
  )
}
