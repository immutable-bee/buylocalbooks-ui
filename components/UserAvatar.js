import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import ProfileSVG from "../assets/svg/default-profile.svg";
function ClickableImage({ avatarLink = "", imageUrl }) {
  return (
    <Link
      href={avatarLink}
      className="h-16 flex-shrink-0 w-16 rounded-full border-2 p-0.5"
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          className="w-full h-full rounded-full"
          width={20}
          height={20}
          alt="Profile Image"
        />
      ) : (
        <Image
          src={ProfileSVG}
          width={20}
          height={20}
          className="w-full h-full rounded-full"
          alt="Default Profile"
        />
      )}
    </Link>
  );
}

ClickableImage.propTypes = {
  avatarLink: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default ClickableImage;
