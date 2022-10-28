// import React, { useEffect, useState } from "react";

// function Merchandiser() {
//   const [merchandiser, setMerchandiser] = useState([]);
//   // const [deleteMerchandiser, setDeleteMerchandiser] = useState([]);
//   const [addMerchandiser, setAddMerchandiser] = useState("");

//   async function fetchingMerchandiser() {
//     await fetch("http://127.0.0.1:3000/merchandisers")
//       .then((r) => r.json())
//       .then((merchandiser) => setMerchandiser(merchandiser));
//   }

//   useEffect(() => {
//     fetchingMerchandiser();
//   }, []);
//   console.log(merchandiser);

//   // const handleDestroy = (id) => {
//   //   fetch(`http://127.0.0.1:3000/merchandisers/${id}`, {
//   //     method: "DELETE",
//   //   })
//   //     .then((r) => r.json())
//   //     .then((deleteMerchandiser) => setDeleteMerchandiser(deleteMerchandiser));
//   // };

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("http://127.0.0.1:3000/merchandisers", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ addMerchandiser }),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((addMerchandiser) => setAddMerchandiser(addMerchandiser));
//       }
//     });
//   }

//   let merchandiserContainer = merchandiser.map((item) => (
//     <div className="contains">
//       <div className="right">
//         <h3>Merchandiser Name:{item.username}</h3>
//         <h4>Image:{item.image}</h4>
//         <h3> Role:{item.role}</h3>
//         <h4>Phone Number:{item.phone_number}</h4>
//         <h3>Email:{item.email}</h3>
//         <h4>Location:{item.location}</h4>
//         <h3>Merchandiser Name:{item.username}</h3>
//       </div>
//       <div className="left">
//         <button style={styles.button} onClick={handleDestroy}>
//           Delete Merchandiser
//         </button>
//       </div>
//     </div>
//   ));

//   return (
//     <div style={styles.all}>
//       <div>{merchandiserContainer}</div>

//       <div style={styles.merchandiserContainer}>
//         <form style={styles.form} onSubmit={handleSubmit}>
//           <h1>Add Merchandiser</h1>
//           username:
//           <textarea style={styles.textarea} />
//           image:
//           <textarea style={styles.textarea} />
//           {/* 
//         <button style={
//           styles.button
//         }>
//           Add Pl
//         </button> */}
//         </form>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   all: {
//     display: "flex",
//     flexDirection: "row",
//     margin: "100px",
//     padding: "50px",
//     justifycontent: "space between",
//   },
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   textarea: {
//     border: "1px solid #a9a9a9",
//     borderRadius: 5,
//     padding: 10,
//     margin: "10px 0",
//     minHeight: 50,
//     width: 500,
//   },
//   button: {
//     border: "1px solid #a9a9a9",
//     borderRadius: 5,
//     width: 300,
//     padding: 10,
//   },
// };

// export default Merchandiser;
