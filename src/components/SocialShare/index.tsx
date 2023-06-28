import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const SocialShare = ({url, title}: {url: string; title: string;}) => {
  const shareUrl = 'https://ibanera-launchpad.bloxbytes.com/nft/detail/700e272b-6077-4e78-a2c5-9b2a0b0206e4'; 

  return (
    <div>
      <FacebookShareButton url={url} quote={title}>
        Facebook
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        Twitter
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={title}>
        Whatsapp
      </WhatsappShareButton>
    </div>
  );
};

export default SocialShare;
