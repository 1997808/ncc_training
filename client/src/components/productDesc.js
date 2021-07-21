const DescItem = ({ title, desc }) => {
  return (
    <>
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-sm text-gray-500 leading-6 mb-5">{desc}</p>
    </>
  )
}

export const ProductDesc = () => {
  return (
    <div className="bg-gray-100 w-full">
      <div className="container mx-auto py-8">
        <DescItem title={"Warranty"} desc={"If issues experienced with the frame include a manufacturer's defect, or an issue resulting from an inherent flaw in the product, RAEN provides a 365 day warranty from the time of purchase. If you feel your product meets these requirements, please email warranty@domain.com explaining the nature of your warranty claim and all necessary details. Scratched lenses and physical damage are not covered by warranty. Unfortunately we do not manufacture or sell replacement lenses."} />
        <DescItem title={"Free FedEx 2-Day Shipping"} desc={"Free FedEx 2-Day Shipping is available exclusively to the U.S. on orders over $150. FedEx 2-Day packages are delivered Monday through Friday."} />
        <DescItem title={"Free FedEx Ground Shipping"} desc={"Free FedEx Ground Shipping is available exclusively to U.S. orders over $100."} />
        <DescItem title={"Free Returns"} desc={"Free returns are available on all U.S. order within 14 days of shipment."} />
      </div>
    </div>
  );
}