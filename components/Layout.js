import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import React from 'react';


export default function Layout({ title, children }) {
  return (
=======
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';


export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    
>>>>>>> 8087a8e (third)
    <>
      <Head>
        <title>{title ? title + ' - Next Store' : ' Next Store'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <a className="font-bold text-red-700 text-3xl justify-center items-center"> Next Store</a>
            </Link>
            <div>
              <Link href="/cart">
<<<<<<< HEAD
                <a className="p-2">Cart</a>
=======
              <a className="p-2">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                </a>
>>>>>>> 8087a8e (third)
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4 justify-center items-center">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-outer shadow-lg">
          <p>Copyright © 2022 Richard Sykes</p>
        </footer>
      </div>
    </>
  );
}


