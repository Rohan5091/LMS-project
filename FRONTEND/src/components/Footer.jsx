
import{BsFacebook,BsInstagram,BsTwitter,BsLinkedin} from "react-icons/bs"

function Footer() {
  const date= new Date();
  const year=date.getFullYear();
  return (
    <>
      <footer className='relative flex-col text-white gap-5 sm:flex-row px-8 left-0 bottom-0 flex text-center bg-blue-950 justify-between py-5  '>
          <section className='text-xl'>
              Copyright {year} | All right reserve
          </section>
          <section className='flex items-center justify-center gap-4'>
               <a href="#" className='hover:text-yellow-400 text-2xl' >
                  <BsFacebook/>
               </a>
               <a href="#" className='hover:text-yellow-400 text-2xl' >
                  <BsInstagram/>
               </a>
               <a href="#" className='hover:text-yellow-400 text-2xl' >
                  <BsTwitter/>
               </a>
               <a href="#" className='hover:text-yellow-400 text-2xl' >
                  <BsLinkedin/>
               </a>
          </section>
      </footer>   
    </>
  )
}

export default Footer