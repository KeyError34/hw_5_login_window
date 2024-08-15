import styles from "./styles.module.scss";
import Login from "../../components/login/index";
import MainLogo from "../../assets/icons/mainLogo.svg";
function LoginPage() {
  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.logoContainer}>
        <img className={styles.imgCont} src={MainLogo} alt="MainLogo" />
      </div>

      <div className={styles.loginContainer}>
        <h1 >LIFE IS WASTED ON THE LIVING</h1>
        <p>Sign in <br/> with</p>
        <Login />
      </div>
    </div>
  );
}
export default LoginPage;
