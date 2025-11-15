import { useState, useEffect } from 'react'

import Sidebar from './sidebar'

import NavBar from './navbar'
import NavBarG from './navbar_global'
import Alert from './alerts'
import Modal from './modal'
import initialQuestionPaper from './questions.json'
export default function MainLayout(props) {
  // Move questionPaper to state
  const [questionPaper, setQuestionPaper] = useState(initialQuestionPaper)
  const [alert, setAlert] = useState('')
  const [visible, setVisible] = useState(true)
  const [index, updateIndex] = useState(0)
  const [review, setReview] = useState(false)
  const [count, setCount] = useState(new Set())
  const [modalText, setModalText] = useState('')
  const [modalType, setModalType] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  useEffect(() => {
    props.setResult(questionPaper)
  },[questionPaper])
  const selectOption = (optionNumber) => {
    setQuestionPaper(prev => ({
      ...prev,
      [index]: {
        ...prev[index],
        chosen: optionNumber
      }
    }))
  }

  const updateModalText = (t, v) => {
    setModalText(t)
    setModalType(v)
  }

  const toggleReview = () => {
    setAlert(count.has(index) ? "remove_review" : "review")
    setTimeout(() => {
      setAlert('')
    }, 2000)
    setCount(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const countArray = [...count]

  const toggleSidebar = () => {
    setVisible(!visible);
  }

  const setIndex = (i) => {
    updateIndex(i);
  }

  console.log(modalText);

  return (
    <>
      <Modal modalText={modalText} result={questionPaper} type={modalType} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      <NavBarG updateModalText={updateModalText} setModalVisible={setModalVisible}/>
      <div className={`main-container ${visible ? 'sidebar-active' : ''}`}>
        <NavBar index={index} reviewCount={countArray.length} updateModalText={updateModalText} />
        <div className="d-inline-flex p-2">
          <button
            className={`btn btn-outline-primary`}
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            onClick={toggleSidebar}
          >
            <i className="bi bi-justify"></i>
          </button>
        </div>
        <div className="container ml-5 bg-body-secondary border border-body-secondary">
          <div className="container d-inline-flex flex-column">
            <h3 className="mt-2">{`Screen ${index}`}</h3>
          </div>
          <Alert type={alert} />
          <div className="container bg-white d-inline-flex flex-column mt-5 ml-10 mb-5">
            <h2>{`${questionPaper[index]["question"]}`}</h2>
            <h5><span className="bg-primary mt-5">Ans.</span></h5>

            <div className="form-check ">
              <input
                className="form-check-input bg-secondary"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked={questionPaper[index]["chosen"] === 1}
                onChange={() => selectOption(1)}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                {`${questionPaper[index]["options"]["i"]}`}
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input bg-secondary"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked={questionPaper[index]["chosen"] === 2}
                onChange={() => selectOption(2)}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                {`${questionPaper[index]["options"]["ii"]}`}
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input bg-secondary"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
                checked={questionPaper[index]["chosen"] === 3}
                onChange={() => selectOption(3)}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                {`${questionPaper[index]["options"]["iii"]}`}
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input bg-secondary"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
                checked={questionPaper[index]["chosen"] === 4}
                onChange={() => selectOption(4)}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault4">
                {`${questionPaper[index]["options"]["iv"]}`}
              </label>
            </div>

          </div>
          <div className="container d-inline-flex justify-content-center mb-3">
            <button className="btn btn-danger" onClick={toggleReview}>marked for review</button>
          </div>
        </div>
        <Sidebar toggleSide={toggleSidebar} visible={visible} setIndex={setIndex} reviewList={count} />
      </div>
    </>
  )
}


