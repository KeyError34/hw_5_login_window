import React from 'react';
import styles from "./styles.module.scss"

function Icon({ IconComponent,size ,color, ...props}){
    return (
        <IconComponent
          className={styles.icon}
          style={{ fill: color, width: size, height: size }}
          {...props}
        />
      );

}
export default Icon; 