import React, { useState } from "react";
import data from "../../tour.json"
import "../styles/App.css"
console.log(data);

const App = () => {
  let [tourList, setTourList] = useState(data)
  let [selected, setSelected] = useState(null)

  function selected_div(id) {

    setSelected(selected === id ? null : id)

  }


  



  return (
    <main id="main">
      <h1>Tours List</h1>
      <div className="container">

        {tourList.length == 0 && <div>
          <h1>No tours left</h1>
          <button onClick={() => {
            window.location.reload()
          }} className="btn" >reload</button>
        </div>}

        {tourList.length > 0 && tourList.map((list, i) => {

          return <div className="single-tour" onClick={() => {
            selected_div(i)
          }}>
            <img src={list.image} />
            <h3 className="title" >{list.name}</h3>
            <p className="tour-price">${list.price}</p>
            <div>
              {selected === i ? (
                <p className="tour-info">{list.description}</p>

              ) : null}
            </div>
            <button onClick={() => {
              setTourList(tourList.filter((v, index) => {
                return index != i
              }))
            }} className="delete-btn">Delete</button>
          </div>
        })}


      </div>



    </main>
  )
}
export default App;
