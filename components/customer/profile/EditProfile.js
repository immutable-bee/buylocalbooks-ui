const EditProfile = ({ isEditingHandler }) => {
  const [displayName, setDisplayName] = useState("");

  return (
    <>
      <div>
        <div>
          <div className="border-2 border-black rounded-full overflow-hidden inline-block">
            <Image
              src={
                user.photoURL ? user.photoURL : "./images/default-profile.svg"
              }
              width={129}
              height={129}
              className="mx-auto rounded-full"
              alt="icon"
            />
          </div>
        </div>

        <div className="flex absolute right-0 top-24 justify-center !border !border-gray-400 rounded-xl p-2">
          <button onClick={isEditingHandler}>
            <Image
              src="./images/icons/edit-btn.svg"
              width={16}
              height={16}
              alt="icon"
              className="p-1"
            />
          </button>
        </div>
      </div>
      <div className="pt-4">
        <form onSubmit={handleFormSubmit}>
          <label className="block">
            Display Name:
            <input
              type="text"
              value={displayName}
              placeholder={user.displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-lg"
            />
          </label>
          <button type="submit">Save</button>
        </form>

        <p className="text-sky-500 font-normal mb-0">{user?.email}</p>
        <div className="flex gap-1 justify-center mt-2">
          <span>
            <Image
              src="/images/icons/black-location-icon.svg"
              width={18}
              height={18}
              alt="icon"
            />
          </span>
          <span className="text-gray-500">
            {user.state ? user.state : "Location not added"}
          </span>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
