import { useRouter } from "next/router";
import { useEffect, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import { getSearchResults } from "../../services/blbn";
import { LocalStoresContext } from "../../context/LocalStoresContext";
import SearchBar from "../../components/SearchBar";
import NoResultsFound from "../../components/searchresults/noresultsfound";
import LocationDisplay from "../../components/LocationDisplay";
import ResultsFound from "../../components/searchresults/resultsfound";
import { useNavigationContext } from "../../context/NavigationContext";
import UserAvatar from "../../components/UserAvatar";

const search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { storeIds: contextStoreIds } = useContext(LocalStoresContext);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const { previousPage } = useNavigationContext();

  const [cursor, setCursor] = useState(null);
  const [isResultsEnd, setIsResultsEnd] = useState(false);

  // get search results

  useEffect(() => {
    if (contextStoreIds.length === 0) return;
    if (isResultsEnd) return;
    const { term, filter, local } = router.query;
    setSearchTerm(term);
    const localBool = local === "true";

    const searchArgs = {
      storeIds: contextStoreIds,
      searchTerm: term,
      filter,
      local: localBool,
      firstQuery: cursor ? false : true,
      cursor: cursor,
    };

    const search = async () => {
      if (!cursor) {
        setLoading(true);
      }
      const data = await getSearchResults(searchArgs);
      if (data) {
        setSearchResults((prevResults) => [...prevResults, ...data]);
        if (data.length < 12) {
          setIsResultsEnd(true);
        }
      } else {
        setSearchResults([]);
      }
      setLoading(false);
    };
    search();
  }, [contextStoreIds, router.query, cursor]);

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
        ) : searchResults.length > 0 ? (
          <ResultsFound
            results={searchResults}
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

export default search;
