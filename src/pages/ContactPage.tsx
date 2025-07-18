import Header from "@/components/Header"
import SubmitForm from "@/components/SubmitForm"
import { HeadingData } from "@/lib/data/heading.data"


const ContactPage = () => {
  return (
    <div className="min-h-screen p-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <Header title={HeadingData[1].title} description={HeadingData[1].description}/>
        <SubmitForm/>
      </div>
      
    </div>
  )
}

export default ContactPage
