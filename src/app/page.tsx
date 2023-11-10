'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement your logic to handle email submission like sending to an API
    alert('Thank you for subscribing!');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CREATIX.GG</h1>
      <p>Where logic meets creativity. Stay tuned!</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type='email'
          value={email}
          onChange={handleEmailChange}
          placeholder='Your e-mail...'
          className={styles.input}
        />
        <button type='submit' className={styles.button}>
          Subscribe
        </button>
      </form>
    </div>
  );
}
