import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  /* Hook para recuperar los datos de la categoría */
  useEffect(function () { /* El primer parametro de useEffect es la funcion que queremos que se ejecute y el segundo parámetro */
    setLoading(true)
    window.fetch('https://petgram-server-iko-8mw0avk5b.now.sh/categories') /* es qué dependencias necesita este efecto para ejecutarse */
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, []) /* Acepta un array con todas las dependencias. Si el array viene vació significa que esto solo debe ejecutarse cuando se monte el componente */

  return { categories, loading } /* De devuelve la propiedad categories como un json después de hacer fetch de la categorías */
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  /* Hook para generar el componente de categorías fijo */
  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200 /* Booleano para saber si el scroll del eje y pasó los 200px hacia abajo */
      showFixed !== newShowFixed && setShowFixed(newShowFixed) /* Si el scroll pasa los 200, entonces se setea showFixed con el valor de newShowFixed */
    }
    document.addEventListener('scroll', onScroll) /* Listener para escuchar cuando se haga scroll, y después ejecutará el método onScroll */
    return () => document.removeEventListener('scroll', onScroll) /* Con esto se limpia el listener cada vez que el efecto se vuelva a ejecutar para no generar memory leak */
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}> {/* Si se le pasa el parámetro true, entonces agregará la clase css 'fixed' */}
      {
        loading
          ? <Item key='loading'><Category /></Item>
          : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>) /* Con el ...category (operador rest ...) le pasas toda las props de category */
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true) /* si el scroll pasa los 200px hacia abajo, se ejecuta la función renderList con el parámetro fixed en true */}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
