// import Link from "next/Link";
import styles from "./css.module.css";
import Image  from "next/image";

export default function Macarrao(){
    return(
        <footer className={styles.footer } >


<ul class="social-list">
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">LinkedIn</a></li>
        </ul>
        
<div class="content">
      
        <p>A nossa empressa é a mehor gaste seu dinheiro aqui.</p>
       
        <p c>Desde 2007</p>
    </div>
    <div className={styles.logoFooter}>
            <Image src="/images/logo.jpg" alt="Logo da Empresa" width={50} height={50} className={styles.logo} />
          </div>

                    

    
           
    
    
        </footer>
    )
}