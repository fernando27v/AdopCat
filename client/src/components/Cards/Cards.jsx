import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cat from "../Cat/Cat";
import ReactPaginate from "react-paginate";
import { getCats } from "../../redux/slices/catSlice";
import styles from "./Cards.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Cards() {
  const cats = useSelector((state) => state.catSlice.cats);
  const dispatch = useDispatch();
  const [catsPerPage, setCatsPerPage] = useState(12);
  const [pageCount, setPageCount] = useState(
    Math.ceil(cats?.length / catsPerPage)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastCat = catsPerPage * currentPage;
  const indexOfFirstCat = indexOfLastCat - catsPerPage;
  const currentCats = cats?.slice(indexOfFirstCat, indexOfLastCat);

  useEffect(() => {
    dispatch(getCats());
  }, [dispatch]);
  useEffect(() => {
    setPageCount(Math.ceil(cats?.length / catsPerPage));
  }, [catsPerPage, cats.length]);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[currentPage])

  return (
    <div>
     
      <div className={styles.divCats}>
        {currentCats &&
          currentCats.map((cat) => {
            return <Cat key={cat.id} cat={cat} />;
          })}
      </div>
      <div className={styles.divPaginate}>
        {cats?.length > 0 && (
          <ReactPaginate
            breakLabel={"..."}
            nextLabel={"next"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            onPageChange={(e) => setCurrentPage(e.selected + 1)}
            marginPagesDisplayed={3}
            pageCount={pageCount}
            previousLabel={"previous"}
            renderOnZeroPageCount={null}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            activeClassName={"active"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
          />
        )}
      </div>
    </div>
  );
}

export default Cards;
