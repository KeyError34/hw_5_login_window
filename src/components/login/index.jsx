import styles from "./styles.module.scss";
import React from "react";
import { ReactComponent as GoogleIcon} from "../../assets/icons/google.svg"
import { ReactComponent as AppleIcon } from '../../assets/icons/apple.svg'; 
import {ReactComponent as XIcon}from '../../assets/icons/x.svg'
import Icon from "../iconLogo/index";
function Login() {
  return <div className={styles.loginContainer}>
 <Icon IconComponent={AppleIcon} size={98}/>
 <Icon IconComponent={GoogleIcon} size={98} />
 <Icon IconComponent={XIcon} />
  </div>;
}
export default Login;
