import { useEffect, useState } from "react";
import BookDetailView from "../../components/BookDetailView";
import { useRouter } from "next/router";
import { getListingDetails } from "../../services/blbn";

const listingdetail = () => {
  const [details, setDetails] = useState({});
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    const fetchDetails = async (id) => {
      const listingDetails = await getListingDetails(id);
      setDetails(listingDetails);
    };

    if (id) {
      fetchDetails(id);
    }
  }, [router.query]);

  return <BookDetailView />;
};

export default listingdetail;
