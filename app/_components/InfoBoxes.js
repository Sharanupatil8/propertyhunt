import InfoBox from "./InfoBox";

function InfoBoxes() {
  return (
    <section>
      <div className="container-xl lg:max-w-6xl m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-gray-50"
            buttenInfo={{
              text: "Browse Properties",
              link: "/properties",
              background: "bg-gray-700",
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            backgroundColor="bg-blue-50"
            buttenInfo={{
              text: "Add Property",
              link: "/properties/add",
              background: "bg-blue-700",
            }}
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
}

export default InfoBoxes;
