import Image from "next/image"
import Link from "next/link"
import { withRouter } from 'next/router';
// #6abfb4

const Navbar = ({ router }) => {
  let path = router.pathname.split('/')[1]
  console.log("path", path)
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#222222" }}>
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            <img className="main-logo" src='/assets/images/logo.png' alt="logo" />
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item rounded" style={{ backgroundColor: `${!path ? "#6abfb4" : ""}` }}>
              <Link href='/'>
                <a className="nav-link" aria-current="page" href="#">HOME</a>
              </Link>
            </li>
            <li className="nav-item rounded" style={{ backgroundColor: `${path === 'lighthouse-portal' ? "#6abfb4" : ""}` }}>
              <Link href="/lighthouse-portal/">
                <a className="nav-link">LIGHTHOUSE</a>
              </Link>
            </li>
            <li className="nav-item rounded" style={{ backgroundColor: `${path === 'blog-forum' ? "#6abfb4" : ""}` }}>
              <Link href="/blog-forum/">
                <a className="nav-link">BLOG/FORUM</a>
              </Link>
            </li>
            <li className="nav-item rounded" style={{ backgroundColor: `${path === 'about-us' ? "#6abfb4" : ""}` }}>
              <Link href='/about-us/' >
                <a className="nav-link">ABOUT US</a>
              </Link>
            </li>
            <li className="nav-item rounded" style={{ backgroundColor: `${path === 'privacy' ? "#6abfb4" : ""}` }}>
              <Link href="/privacy/">
                <a className="nav-link">PRIVACY</a>
              </Link>
            </li>
            <li className="nav-item rounded" style={{ backgroundColor: `${path === 'terms-conditions' ? "#6abfb4" : ""}` }}>
              <Link href="/terms-conditions/">
                <a className="nav-link">TERMS AND CONDITIONS</a>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)