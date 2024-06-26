"use client";  // Adiciona essa linha para indicar que o componente é do lado do cliente
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./css.module.css";
import Spinner from "./Spinner";
import ErrorGetData from "./ErrrorGetData";

export default function Main() {
  const [products, setProducts] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [errorFetch, setErrorFetch] = useState(false);


  useEffect(() => {
    const getProduct = async () => {
        try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      setProducts(data);
      setListProduct(data);
        }catch {
          setErrorFetch(true);
        }
    };

    getProduct();
  }, []);

  const orderAz = () => {
    const newList = [...listProduct].sort((a, b) => a.title.localeCompare(b.title));
    setListProduct(newList);
  };

  const orderP = () => {
    const newList = [...listProduct].sort((a, b) => a.price - b.price);
    setListProduct(newList);
  };

  const orderPr = () => {
    const newList = [...listProduct].sort((a, b) => b.price - a.price);
    setListProduct(newList);
  };
  
  if (errorFetch == true) {
    return <ErrorGetData/>
  }
  if(listProduct[0] == null){
      return(
      <main>
        <Spinner/>
        </main>
        )
  }



  return (
    <main className={styles.main}>
      <input type="text" placeholder="Pesquisar..." onChange={(e) => setSearch(e.target.value)} />
      <button onClick={orderAz}>Ordenar A-Z</button>
      <button onClick={orderP}>Ordenar Preço Menor - Maior</button>
      <button onClick={orderPr}>Ordenar Preço Maior - Menor</button> <br></br>
      <div className={styles.main}>
        {listProduct.map((product) => (
          <div className={styles.card} key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <Image src={product.image} alt={product.title} width={100} height={100} />
            <Link href={`/product/${product.id}`}>Detalhes</Link>
          </div>
        ))}
      </div>
    </main>
    
        );
      }
      