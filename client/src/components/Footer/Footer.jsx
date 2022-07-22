import React, { useState } from 'react'
import styles from './Footer.module.css';

export default function Footer() {


  const input = {}
    const obje = {saludo:'hola'} 

    const [state, setState] = useState( obje.legth ? obje : input
      
    )

  
  return (
    <div className={styles.footer}> 
        Footer
    </div>
  )
}
