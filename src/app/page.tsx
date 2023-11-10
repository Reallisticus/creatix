'use client';
import styles from './page.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [email, setEmail] = useState('');

  const notify = () =>
    toast.success('🦄 Success!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      } else {
        setEmail('');
        notify();
      }
    } catch (e) {
      if (e instanceof Error) {
        console.error({ message: e.message });
      } else {
        console.error({ message: 'Unknown error' });
      }
    }
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
        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </form>
    </div>
  );
}
