import { useState } from "react";

// "Mohammed Ali Hassan" -> "MH" (first letter of the first name + first letter of the last name)
function getInitials(name) {
  const words = name.trim().split(/\s+/).filter(Boolean);
  const first = words[0]?.[0] ?? "";
  const last = words.length > 1 ? words[words.length - 1][0] : "";
  return (first + last).toUpperCase();
}

// Shows the photo found in the CV. No photo (or a photo that fails to load) -> initials.
export default function Avatar({ name, photo }) {
  const [failedPhoto, setFailedPhoto] = useState(null);

  if (photo && photo !== failedPhoto) {
    return <img className="avatar" src={photo} alt={name} onError={() => setFailedPhoto(photo)} />;
  }
  return (
    <div className="avatar" aria-label={name}>
      {getInitials(name)}
    </div>
  );
}
