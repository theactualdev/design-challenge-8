import './App.css'
import heroImage from './assets/hero-image.svg'

function App() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
    <div className="wrapper flex justify-around md:flex-row flex-col-reverse px-4 md:px-0">
      <div className="image-wrapper">
        <img src={heroImage} alt="Hero" className='' />
      </div>
      <div className="content-wrapper max-w-[487px] md:mt-16 ">
        <h1 className='font-workSans text-[88px] text-white font-bold mb-10 '>Take your designs to the next level</h1>
        <p className='font-workSans text-[24px] text-white font-extralight opacity-85 mb-10 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu.</p>
        <button className='bg-[#E5B94B] font-workSans font-medium text-[32px] px-[42px] py-3 rounded-[36px] mb-10 md:mb-0 '>Explore</button>
      </div>
    </div>
    <footer className='bg-[#252525] flex mt-2 text-white justify-around font-workSans'>
      Copyright &copy; theactualdev { year }
      <a href="https://www.figma.com/design/4UbuQuyAc6FheovBkMGNKo/50%2B-Landing-page-designs-(Community)?node-id=868%3A162&t=SA7ItWQbz2TS46DT-1">Figma</a>
    </footer>
    </>
  )
}

export default App
