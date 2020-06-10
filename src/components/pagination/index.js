import React, { useState, useEffect } from 'react'

const pageCreator = (pagesNumber, setCurrentPage) => {
  let pagesElement = []

  for (let i = 0; i <= pagesNumber; i++) {
    pagesElement.push(<p onClick={() => setCurrentPage(i)}>{i}</p>)
  }
  return pagesElement
}

const Pagination = ({ total, setCurrentPage, valueOffset }) => {
  const [pages, setPages] = useState(0)
  useEffect(() => {
    const numberPages = total / valueOffset
    setPages(Math.ceil(numberPages))
  }, [total])

  if (total === 0) return null

  return <li>{pageCreator(pages, setCurrentPage)}</li>
}

export default Pagination
