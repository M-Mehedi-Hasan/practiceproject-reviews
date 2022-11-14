import { useState } from "react"
import reviews from "../reviews.js"
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa"
const ReviewCard = () => {

    const [index, setIndex] = useState(0)
    const {name, job, image, text} = reviews[index]
    const randomPerson = () => {
      let randomNumber = Math.floor(Math.random() * reviews.length)
      if (randomNumber === index) {       
        randomNumber = index + 1;
      }
        setIndex(checkNumber(randomNumber))
        console.log(randomNumber);
      } 
      

    const checkNumber = (number) => {
      if (number > reviews.length -1 ) {
        return 0;
      }
      if (number < 0 ) {
        return reviews.length -1;
      }
      return number
    }

    const prevReveiw = () => {
      setIndex(index => {
        let newIndex = index - 1
        return checkNumber(newIndex)})
    }

    const nextReveiw = () => {
      setIndex(index => {
        let newIndex = index + 1
        return checkNumber(newIndex)})
    }
    

  return (
    <div className="bg-white xs:w-[340px] sm:w-[600px] mx-auto rounded-sm py-5 px-6 shadow-lg hover:shadow-xl duration-700">
        <div className="before:absolute before:w-[150px] before:h-[150px] before:-top-1 before:-right-2 before:bg-blue-400 before:rounded-full w-[150px] h-[150px] relative mx-auto rounded-[50%] mb-6">
          <img src={image} alt={name} className="rounded-[50%] w-full h-full relative block" />
          <span className="absolute bg-blue-400 rounded-full h-10 w-10 top-0 left-0 place-items-center grid"><FaQuoteRight className="text-white" /></span>
        </div>
        <div className="mt-4 mb-2">
            <h6 className="capitalize tracking-widest text-center font-bold">{name}</h6>
            <p className="uppercase tracking-tight text-center text-blue-400">{job}</p>
        </div>
        <p className="text-center text-gray-500">{text}</p>
        <div className="flex justify-center my-5">
            <button onClick={prevReveiw} className="mr-4 block"><FaChevronLeft /></button>    
            <button onClick={nextReveiw} className="block"><FaChevronRight /></button>    
        </div>
        <button onClick={randomPerson} className="bg-sky-100 text-sky-400 hover:bg-sky-500 hover:text-gray-700 duration-700 rounded-sm px-2 block mx-auto">Surprise Me</button>
    </div>
  )
}

export default ReviewCard