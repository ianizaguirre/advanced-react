import Link from 'next/link';

const Nav = props => (
  <div>
    <Link href="/sell">
      <a>Sell!</a>
    </Link>
    <Link href="/">
      <a>HOME</a>
    </Link>
  </div>
);

export default Nav;
