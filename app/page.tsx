"use client";

import React from 'react';
import {useState} from "react"; // eslint-disable-line

export default function Home() {

  const [postInput, setPostInput] = useState<String>("");


  const METHODS = [
    {
      method: "POST",
      function: async function postPerson() {
        // Every Schema should also have a type for safety
       
        const res = await fetch("http://localhost:3000/api/person", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: postInput
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to post person.");
        }
      },
    },
    {
      method: "GET",
      function: async function getPersons() {
        const res = await fetch("http://localhost:3000/api/person", {
          // How can we change this link later when the website is deployed?
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to get persons.");
        }

        return res.json();
      },
    },
    {
      method: "DELETE",
      function: async function deletePerson() {
        const res = await fetch("http://localhost:3000/api/person", {
          method: "DELETE",
        });

        if (!res.ok) {
          throw new Error("Failed to post person.");
        }
      },
    },
  ];

  /*
  bg-${
        method.method == "GET"
          ? "green"
          : method.method == "POST"
          ? "blue"
          : method.method == "DELETE"
          ? "red"
          : ""
      }-500 shadow-${
        method.method == "GET"
          ? "green"
          : method.method == "POST"
          ? "blue"
          : method.method == "DELETE"
          ? "red"
          : ``
      }-300
  */

  const methods_elems = METHODS.map((method) =>
    method.method == "POST" ? (
      <input
        type="button"
        onClick={method.function}
        value="POST"
        className="http-button"
      />
    ) : (
      <button onClick={method.function} className={`http-button`}>
        <code>{method.method}</code>
      </button>
    )
  );

  return (
    <div className="flex justify-center">
      <input
        id="input"
        type="text"
        placeholder="John"
        className="text-2xl border-2 border-zinc-500 rounded-lg p-4"
      ></input>
      <input type='button' value='Submit' onClick={
        () => {
          const value = (document.getElementById('input') as HTMLInputElement).value;
          console.log('Setting post input...')
          alert('123')
          
          setPostInput(value);
          console.log(value)
          console.log(postInput);
          console.log('Post input set.')
        }
      }/>
      {methods_elems}
    </div>
  );
}