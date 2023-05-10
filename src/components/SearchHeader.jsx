import React, { useEffect, useState } from 'react'
import { BsYoutube, BsSearch } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  }

  useEffect(() => {
    setText(keyword || '');
  }, [keyword])

  return (
    <header className={styles.header}>
      <Link to={'/'} className={styles.link}>
        <BsYoutube className={styles.bsYoutube}/>
        <h1 className={styles.h1}>Youtube</h1>
      </Link>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          className={styles.iunput}
          type='text'
          placeholder='Search...' 
          value={text} 
          onChange={(e) => setText(e.target.value)} />
          <button className={styles.button}>
            <BsSearch />
          </button>
      </form>
    </header>
  )
}

const styles = {
  header: "w-full flex p-4 text-2xl border-b border-zinc-600 mb-4",
  link: "flex items-center",
  bsYoutube: "text-4xl text-brand",
  h1: "font-bold ml-2 text-3xl",
  form: "w-full flex justify-center",
  iunput: "w-7/12 p-2 outline-none bg-black",
  button: "bg-zinc-600 px-4"
}