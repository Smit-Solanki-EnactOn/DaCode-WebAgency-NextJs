"use client";
import React, { useState } from "react";
import "./news-article-section.scss";
import { blogData } from "../../../../data/myData";
import InfoCardV2 from "../../Cards/InfoCardV2/InfoCardV2";
import { Pagination } from "react-bootstrap";
import {
  MdKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const NewsArticleSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const blogPerPage = 12;
  // const blogPerPage = 8;

  const totalPage = Math.ceil(blogData.length / blogPerPage);

  const indexOfLastBlog = currentPage * blogPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogPerPage;

  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  // function of pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLastPage = () => {
    setCurrentPage(totalPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Dynamic page number
  const dynamicPageNumber = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(
        <Pagination.Item
          onClick={() => handlePageChange(i)}
          active={i === currentPage}
          key={i}
        >
          {i}
        </Pagination.Item>
      );
    }
    return pageNumbers;
  };

  return (
    <section className="news-article-section" dir="ltr">
      <div className="container">
        <div className="news-article-wrapper">
          <div className="news-article-cards-wrapper">
            {currentBlogs.map((blog) => (
              <InfoCardV2 key={blog.id} data={blog} />
            ))}
          </div>
          <Pagination className="mt-5 d-flex justify-content-end pagination">
            <Pagination.First
              onClick={handleFirstPage}
              disabled={currentPage === 1}
            >
              <MdKeyboardDoubleArrowLeft />
            </Pagination.First>
            <Pagination.Prev onClick={handlePrev} disabled={currentPage === 1}>
              <MdOutlineArrowBackIos />
            </Pagination.Prev>
            {dynamicPageNumber()}
            <Pagination.Next
              onClick={handleNext}
              disabled={currentPage === totalPage}
            >
              <MdOutlineArrowForwardIos />
            </Pagination.Next>
            <Pagination.Last
              onClick={handleLastPage}
              disabled={currentPage === totalPage}
            >
              <MdOutlineKeyboardDoubleArrowRight />
            </Pagination.Last>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default NewsArticleSection;
