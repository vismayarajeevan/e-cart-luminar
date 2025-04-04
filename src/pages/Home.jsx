


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/slices/productSlice';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header';

const Home = () => {
  const dispatch = useDispatch();
  const { allProducts, loading, errorMsg } = useSelector(
    (state) => state.productReducer
  );

  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 8;
  const totalPage = Math.ceil(allProducts?.length / productPerPage);
  const currentPageProductLastIndex = currentPage * productPerPage;
  const currentPageProductFirstIndex = currentPageProductLastIndex - productPerPage;
  const visibleAllProducts = allProducts?.slice(
    currentPageProductFirstIndex,
    currentPageProductLastIndex
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const navigateToNextPage = () => {
    if (currentPage !== totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const navigateToPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Header insideHome={true} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-16 h-16 border-4 border-blue-800 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-lg text-gray-600">Loading products...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {allProducts?.length > 0 ? (
                visibleAllProducts?.map((product) => (
                  <div
                    key={product?.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={product?.thumbnail}
                        alt={product?.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                        {product?.title}
                      </h3>
                      <Link
                        to={`/${product?.id}/view`}
                        className="inline-block w-full text-center bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-2 px-4 rounded-lg hover:from-blue-900 hover:to-indigo-950 transition-colors duration-300"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full flex justify-center items-center py-12">
                  <p className="text-xl text-red-600 font-semibold">
                    No products found
                  </p>
                </div>
              )}
            </div>

            {allProducts?.length > 0 && (
              <div className="flex items-center justify-center space-x-4 mt-12">
                <button
                  onClick={navigateToPrevPage}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-full ${
                    currentPage === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-800 text-white hover:bg-blue-900'
                  }`}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <span className="text-lg font-medium text-gray-700">
                  Page {currentPage} of {totalPage}
                </span>
                <button
                  onClick={navigateToNextPage}
                  disabled={currentPage === totalPage}
                  className={`p-2 rounded-full ${
                    currentPage === totalPage
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-800 text-white hover:bg-blue-900'
                  }`}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Home;