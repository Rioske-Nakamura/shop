import Image from "next/image";
import styles from "../componentes/Main.module.css"; 
export default function Main() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch("https://api.escuelajs.co/api/v1/products");
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();
    }, []);

    return (
        <main className={styles.main}>
            {products.map((product) => (
                <div className={styles.card} key={product.id}>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <Image src={product.images} alt={product.title} width={100} height={100} />
                </div>
            ))}
        </main>
    );
}
