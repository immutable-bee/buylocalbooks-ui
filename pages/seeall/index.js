import { useEffect, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import { getLocalListings } from "../../services/blbn";
import { LocalStoresContext } from "../../context/LocalStoresContext";
import SearchBar from "../../components/SearchBar";
import NoResultsFound from "../../components/searchresults/noresultsfound";
import LocationDisplay from "../../components/LocationDisplay";
import ResultsFound from "../../components/searchresults/resultsfound";
import { useNavigationContext } from "../../context/NavigationContext";
import UserAvatar from "../../components/UserAvatar";
import { useRouter } from "next/router";

const SeeAll = () => {
  const [results, setResults] = useState([]);
  const { storeIds: contextStoreIds, localStores } =
    useContext(LocalStoresContext);
  const [loading, setLoading] = useState(true);
  const { previousPage } = useNavigationContext();

  const [cursor, setCursor] = useState(null);
  const [isResultsEnd, setIsResultsEnd] = useState(false);

  const router = useRouter();

  const { type } = router.query;

  useEffect(() => {
    if (contextStoreIds.length === 0) return;
    if (isResultsEnd) return;

    if (type) {
      if (type === "stores") {
        if (localStores.length > 0) {
          setResults(localStores);
          setLoading(false);
          setIsResultsEnd(true);
        }
      } else {
        const fetchArgs = {
          storeIds: contextStoreIds,
          firstQuery: cursor ? false : true,
          cursor: cursor,
        };

        const search = async () => {
          if (!cursor) {
            setLoading(true);
          }
          const data = await getLocalListings(fetchArgs);
          if (data) {
            setResults((prevResults) => [...prevResults, ...data]);
            if (data.length < 12) {
              setIsResultsEnd(true);
            }
          } else {
            setResults([]);
          }
          setLoading(false);
        };
        search();
      }
    }
  }, [contextStoreIds, cursor, isResultsEnd, type, localStores]);

  return (
    <section>
      <div className="container mx-auto px-3 pt-5">
        <div className="sm:flex items-center justify-between">
          <div className="">
            <h2 className="flex items-center">
              <Link href={previousPage ? previousPage : "/"}>
                <span className="">
                  <Image
                    src="./images/icons/back-arrow.svg"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                </span>
              </Link>
              <span className="mx-3 text-2xl font-bold">Buylocalbooks</span>
            </h2>

            <LocationDisplay />
          </div>
          <UserAvatar avatarLink="/profile" />
        </div>
        <div className="sm:flex items-center justify-end sm:pt-2 px-2 pt-4">
          <SearchBar placeholder="Search Here" />
        </div>
        {loading ? (
          <h1>Loading...</h1>
        ) : results.length > 0 ? (
          <ResultsFound
            type={type}
            results={results}
            setCursor={setCursor}
            isResultsEnd={isResultsEnd}
          />
        ) : (
          <NoResultsFound searchTerm={searchTerm} />
        )}
      </div>
    </section>
  );
};

export default SeeAll;
