import { useEffect } from "react";
import BookDetailView from "../../components/BookDetailView";
import { useRouter } from "next/router";
import { getListingDetails } from "../../services/blbn";

const listingdetail = () => {
  const [details, setDetails] = useState({});
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    const fetchDetails = async (id) => {
      details = await getListingDetails(id);
    };

    if (id) {
      fetchDetails(id);
      setDetails(details);
    }
  }, [router.query]);

  return <BookDetailView />;
};

export default listingdetail;
