import { useEffect, useState } from "react";
import BookDetailView from "../../components/BookDetailView";
import { useRouter } from "next/router";
import { getListingDetails } from "../../services/blbn";

const listingdetail = () => {
  const [details, setDetails] = useState({});
  const [store, setStore] = useState({});
  const [isMember, setIsMember] = useState(true); // [TODO] create/get from context
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    const fetchDetails = async (id) => {
      const listingDetails = await getListingDetails(id);

      const { owner, ...listing } = listingDetails;

      setDetails(listing);
      setStore(owner);
    };

    if (id) {
      fetchDetails(id);
    }
  }, [router.query]);

  return <BookDetailView book={details} store={store} isMember={isMember} />;
};

export default listingdetail;
