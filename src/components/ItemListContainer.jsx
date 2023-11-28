/* ItemListContainer Viene de App y va a ItemList */
import React from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { categoria } = useParams()
  const ojotas = [
    { id: 1, titulo: "Top", descripcion: "Modelo base", precio: 5000, categoria: "Hombre", image: "images/productos/Top.webp" },
    { id: 2, titulo: "Slim", descripcion: "Modelo fino de mujer", precio: 5500, categoria: "Mujer", image: "images/productos/Slim.webp" },
    { id: 3, titulo: "Power", descripcion: "Modelo comodo de hombre", precio: 9000, categoria: "Hombre", image: "images/productos/Power.webp" },
    { id: 4, titulo: "Sweet", descripcion: "Modelo economico de mujer", precio: 4500, categoria: "Mujer", image: "images/productos/Sweet.webp" },
    { id: 5, titulo: "Wadges", descripcion: "Modelo ergonomico de mujer", precio: 10000, categoria: "Mujer", image: "images/productos/Wadges.webp" },
    { id: 6, titulo: "Kmax", descripcion: "Modelo base de nene", precio: 8000, categoria: "Niño", image: "images/productos/KMax.webp" },
  ]

  const getOjotas = new Promise((resolve, reject) => {
    if (ojotas.length > 0) {
      setTimeout(() => {
        resolve(ojotas)
      }, 2000)
    } else {
      reject(new Error("No hay datos"))
    }
  })

  getOjotas
    .then((res) => {
    })
    .catch((error) => {
      console.log(error)
    })

  const filtrarProductos = ojotas.filter((producto) => producto.categoria === categoria)
  return (
    <div className='container'>
      {console.log(categoria)}
      <ItemList
        productos={categoria === undefined ? ojotas : filtrarProductos}
      />
    </div>
  );
  
}

export default ItemListContainer