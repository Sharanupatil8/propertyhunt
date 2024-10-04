import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

function ShareButton({ property }) {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/property/${property._id}`;
  const emailSubject = `Check out this property: ${property.name}`;
  const emailBody = `Take a look at this property for rent: ${property.name}. You can view it here: ${shareUrl}`;

  return (
    <>
      <h3 className="text-xl font-bold text-center pt-3">
        Share This Property
      </h3>
      <div className="flex gap-3 justify-center pb-6">
        <FacebookShareButton
          url={shareUrl}
          quote={property.name}
          hashtag={`#${property.type}ForRent`}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <TwitterShareButton
          url={shareUrl}
          title={property.name}
          hashtags={[`${property.type}`, "ForRent"]}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>

        <WhatsappShareButton
          url={shareUrl}
          title={property.name}
          separator=":: "
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>

        <EmailShareButton
          url={shareUrl}
          subject={emailSubject}
          body={emailBody}
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>
      </div>
    </>
  );
}

export default ShareButton;
