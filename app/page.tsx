"use client";

export default async function Home() {
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
            name: "Noor",
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
    }
  ];

  const methods_elems = METHODS.map((method) => ( 
    <button
      onClick={method.function}
      className={`bg-${
        method.method == "GET"
          ? "green"
          : method.method == "POST"
          ? "blue"
          : method.method == "DELETE"
          ? "red"
          : ``
      }-500 shadow-${
        method.method == "GET"
          ? "green"
          : method.method == "POST"
          ? "blue"
          : method.method == "DELETE"
          ? "red"
          : ``
      }-300 http-button`}
    >
      <code>{method.method}</code>
    </button>
  ));

  // const count = await getCount();

  return (
    <div className="flex justify-center">
      {methods_elems}
    </div>
  );
}

// async function getPersons() {
//   const res = await fetch("http://localhost:3000/api/person", {
//     // How can we change this link later when the website is deployed?
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to get persons.");
//   }

//   return res.json();
// }

// async function postPerson() {
//   // Every Schema should also have a type for safety
//   const res = await fetch("http://localhost:3000/api/person", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: "Noor",
//     }),
//   });

//   if (!res.ok) {
//     throw new Error("Failed to post person.");
//   }
// }

// async function deletePerson() {
//   const res = await fetch("http://localhost:3000/api/person", {
//     method: "DELETE",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to post person.");
//   }
// }
