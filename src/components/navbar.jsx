import { useState, useEffect } from 'react'
import Timer from './timer'
  export default function NavBar(props) {
    const [indexArray, setIndexArray] = useState(new Set())
   useEffect(() => {
     !indexArray.has(props.index) && setIndexArray((prev) => {
      return new Set([...prev, props.index])
    })
  }, [props.index])
   let indexListArray = [...indexArray]
  return (
      <>
      <style>{`
      .visited{
        background-color: var(--bs-success);
        color: white;
        border: none;
        padding: 3px;
        border-radius: 4px;
        margin-left: 50px;
        margin-top: 5px;
      }
      .not-visited {
        margin-left: 50px;
        margin-top: 7px;
      }
      .not-visited span {
        border: 1px solid blue;
        border-radius: 4px;
        padding: 4px;
      }
      .review{
        background-color: var(--bs-danger);
        color: white;
        border: none;
        padding: 3px;
        border-radius: 4px;
        margin-left: 50px;
        margin-top: 7px;
      }`
      }
      </style>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light border-bottom border-body-secondary`}>
  <div className="container-fluid d-flex">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <p><span className={`visited`}>{`visited: ${indexListArray.length - 1}/25`}</span></p>
    <p  className="not-visited">not visited: <span>{`${25-(indexListArray.length-1)}`}</span></p>
    <p><span  className="review">{`review: ${props.reviewCount}`}</span></p>
    <Timer minutes={40} seconds={0} updateModalText={props.updateModalText}/>
</div>
    </div>
</nav>
</>
  )
  }
