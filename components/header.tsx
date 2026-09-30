'use client'

import { useState } from 'react'

const navigationItems = ['Home', 'Latest Job', 'Admit Card', 'Results', 'Admission', 'UP Scholarship', 'Syllabus']

export default function Header() {
  const [moreOpen, setMoreOpen] = useState(false)

  return (
    <header className="siteHeader">
      <div className="brandBanner">
        <div className="logoMark" aria-label="Sarkari Result logo">
          <span className="logoRing">SR</span>
          <span className="logoText">Sarkari<br />Result</span>
        </div>
        <div className="brandCopy">
          <h1>SARKARI RESULT®</h1>
          <p>WWW.SARKARIRESULT.COM</p>
        </div>
      </div>

      <nav className="mainNav" aria-label="Main navigation">
        <div className="navLinks">
          {navigationItems.map((item) => (
            <a href="#" key={item} className="navLink">
              {item}
            </a>
          ))}
          <div className="moreMenu">
            <button
              type="button"
              className="navLink moreButton"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((open) => !open)}
            >
              More <span aria-hidden="true">⌄</span>
            </button>
            {moreOpen && (
              <div className="dropdown" role="menu">
                <a href="#" role="menuitem">Contact</a>
                <a href="#" role="menuitem">About Us</a>
              </div>
            )}
          </div>
        </div>
        <button type="button" className="searchButton" aria-label="Search">
          <span aria-hidden="true">⌕</span>
        </button>
      </nav>

      <div className="introContent">
        <h2>Sarkari Result 2026 – SarkariResult.com – SarkariResults – Sarkari Result Official</h2>
        <p className="welcomeLine">
          Welcome to No. 1 Education Portal Official Sarkari Result 2026 SarkariResult.Com | Trusted by Millions
          <a href="#" className="iosBadge">▣ Sarkari Result IOS</a>
        </p>
        <p className="socialLine">
          <a href="#">Sarkari Result Android Apps</a><span> || </span>
          <a href="#">Sarkari Result Youtube Channel</a><span> || </span>
          <a href="#">Sarkari Result Apple / IOS Apps</a><span>|| </span>
          <a href="#">Follow Instagram</a>
        </p>
        <div className="updates" aria-label="Latest updates">
          <a href="#">IBPS Gramin Bank RRB Online Form 2026</a><span> || </span>
          <a href="#">UP Assistant Teacher Primary Online Form 2026</a><span> || </span>
          <a href="#">UP PGT Teacher Online Form 2026</a><br />
          <a href="#">UPSSSC Lekhpal Document Upload 2026</a><span> || </span>
          <a href="#">MPESB Sub Engineer Online Form 2026</a><span> || </span>
          <a href="#">Sarkari Result Outsourcing Jobs</a><br />
          <a href="#">Railway Paramedical Post Online Form 2026</a><span> || </span>
          <a href="#">UP Anganwadi Helper Online Form 2026</a><span> || </span>
          <a href="#">SSC 10+2 CHSL 2026 Online Form</a>
        </div>
      </div>

      <style jsx>{`
        .siteHeader {
          width: min(100%, 1080px);
          margin: 0 auto;
          font-family: Arial, Helvetica, sans-serif;
          color: #050505;
          background: #fff;
        }
        .brandBanner {
          height: 190px;
          display: flex;
          align-items: center;
          padding: 0 22px;
          background: #b5163d;
          color: #fff;
        }
        .logoMark {
          width: 140px;
          height: 140px;
          display: grid;
          place-items: center;
          position: relative;
          border: 10px dotted #27364d;
          border-radius: 50%;
          background: #e5bfd2;
          color: #14356a;
          text-align: center;
          transform: rotate(-8deg);
          flex: 0 0 auto;
        }
        .logoRing { position: absolute; top: 10px; font-size: 13px; font-weight: 700; }
        .logoText { font-family: Georgia, serif; font-size: 19px; line-height: 0.95; font-weight: 700; transform: rotate(8deg); }
        .brandCopy { flex: 1; text-align: center; margin-right: 140px; }
        .brandCopy h1 { margin: 0; font-size: clamp(28px, 4vw, 42px); font-weight: 700; }
        .brandCopy p { margin: 3px 0 0; font-size: clamp(16px, 2vw, 21px); font-weight: 700; }
        .mainNav { height: 50px; display: flex; background: #050505; color: #fff; }
        .navLinks { display: flex; min-width: 0; flex: 1; }
        .navLink { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 0 14px; border-right: 1px solid #fff; color: #fff; font-size: 16px; font-weight: 700; text-decoration: none; white-space: nowrap; }
        .navLink:hover, .navLink:focus-visible { background: #222; outline: none; }
        .moreMenu { position: relative; }
        .moreButton { height: 50px; border: 0; border-right: 1px solid #fff; background: transparent; cursor: pointer; }
        .dropdown { position: absolute; z-index: 3; top: 50px; left: 0; min-width: 150px; background: #050505; box-shadow: 0 5px 12px #0005; }
        .dropdown a { display: block; padding: 11px 14px; color: #fff; text-decoration: none; font-weight: 700; }
        .dropdown a:hover, .dropdown a:focus-visible { background: #333; }
        .searchButton { width: 58px; border: 0; background: #050505; color: #fff; font-size: 32px; cursor: pointer; }
        .searchButton:hover, .searchButton:focus-visible { background: #222; outline: none; }
        .introContent { padding: 19px 18px 6px; text-align: center; }
        .introContent h2 { margin: 0 0 35px; color: #00e; font-family: Georgia, 'Times New Roman', serif; font-size: 27px; line-height: 1.25; }
        .welcomeLine { margin: 0 0 27px; color: red; font-size: 16px; font-weight: 700; }
        .iosBadge { display: inline-block; margin-left: 5px; padding: 3px 10px; border-radius: 14px; background: #1262c9; color: #fff; text-decoration: none; font-size: 14px; }
        .socialLine, .updates { color: #00e; font-family: Georgia, 'Times New Roman', serif; font-size: 17px; font-weight: 700; line-height: 1.65; }
        .socialLine { margin: 0 0 12px; }
        .introContent a { color: #00e; text-decoration: none; }
        .introContent a:hover, .introContent a:focus-visible { text-decoration: underline; }
        .updates { margin: 0; }
        @media (max-width: 800px) {
          .brandBanner { height: 150px; padding: 0 12px; }
          .logoMark { width: 108px; height: 108px; }
          .brandCopy { margin-right: 0; }
          .brandCopy h1 { font-size: 27px; }
          .brandCopy p { font-size: 14px; }
          .mainNav { overflow-x: auto; }
          .navLinks { flex: 0 0 auto; }
          .introContent h2 { font-size: 22px; }
          .welcomeLine, .socialLine, .updates { font-size: 15px; }
        }
        @media (max-width: 480px) {
          .brandBanner { height: 120px; }
          .logoMark { width: 78px; height: 78px; border-width: 6px; }
          .logoText { font-size: 13px; }
          .logoRing { top: 5px; font-size: 9px; }
          .brandCopy h1 { font-size: 22px; }
          .brandCopy p { font-size: 11px; }
          .navLink { padding: 0 12px; font-size: 14px; }
          .searchButton { width: 50px; }
          .introContent { padding-left: 10px; padding-right: 10px; }
        }
      `}</style>
    </header>
  )
}
