import Card from "@/components/Card"
import Header from "@/components/Header"
import { HeadingData } from "@/lib/data/heading.data"
import { PropertyData } from "@/lib/data/property.data"


const FeaturePage = () => {
  return (
    <div className="bg-black  min-h-screen p-8">
      <div className="max-w-7xl mx-auto">

        <Header title={HeadingData[0].title} description={HeadingData[0].description} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {
            PropertyData.map((data, idx) => {
              return (

                <Card key={idx} title={data.title} description={data.description} imgUrl={data.imgUrl} tags={data.tags} price={data.price} button={data.button} />

              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default FeaturePage
