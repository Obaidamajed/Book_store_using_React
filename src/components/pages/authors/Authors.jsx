import React, { useState } from 'react'
import { authors } from "../../../data/authors"
import "./authors.css"
const Authors = () => {
  const [search, setSearch] = useState("");

  // ** فكرة ال search **
  
  // console.log(authors.filter(a => a.name.toLowerCase().includes(search))); 
  // authors.filter(a => a.name.toLowerCase().includes(search)) حيبحث بالأرراي اللي اسمو آثرز اللي بملف الآثرز وحيشوف قيمة السيرش اللي جبتها من الإنبوت موجود بملف الآثرز او لا, اذا موجودة حيطبعلي اياها

  return (
    <section className="authors">
      <div className="authors-search-wrapper">
        <input value={search} onChange={e => setSearch(e.target.value)} type="search" placeholder='Search in authors'/>
        {/* e.target.value اللي بكتبو في الانبوت  */}
        {/* اللي بكتبو في الانبوت حيصير قيمة الفاليو الخاص بالانبوت نفسو  */}
      </div>
      <div className="authors-wrapper">
        {authors.filter(a => a.name.toLowerCase().includes(search))
        .map(author => 
          <div className="author" key={author.id}>
              <img src={author.image} alt={author.name} className="author-img"/>
              <h2 className="author-name">{author.name}</h2>
          </div>
          )}
      </div>
    </section>
  )
}
export default Authors