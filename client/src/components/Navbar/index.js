import {Link} from "react-router-dom";
import styles from "./styles.module.css";
import { Button, ButtonGroup } from '@chakra-ui/react';
import {useAuth} from '../../contexts/AuthContext';

function Navbar() {
  const {loggedIn} = useAuth{};
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">eCommerce</Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        {
          !loggedIn && (
          <>
            <Link to="/Login">
              <Button colorScheme='blue'>Login</Button>
            </Link>
            <Link to="/Register">
              <Button colorScheme='blue'>Register</Button>
            </Link>
          </>
        )}

        {
          loggedIn && (
            <>
              <Link to="/profile">
                <Button colorScheme='blue'>Profile</Button>
              </Link>
            </>
          )
        }
      </div>
    </nav>
  );
}


export default Navbar;
