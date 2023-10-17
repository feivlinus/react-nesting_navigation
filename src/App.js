import "./styles.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Link from "./components/Link";
import Logo from "./components/Logo";
import Avatar from "./components/Avatar";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link url="#home">Home</Link>
          <Link url="#about">About</Link>
          <Link url="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
