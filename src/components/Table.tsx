import React, { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import tableeye from "../assets/tableeye.svg";
import tableEdit from "../assets/tableEdit.svg";
import tableDelete from "../assets/tableDelete.svg";
import search from '../assets/search.svg';
import dropdown from '../assets/dropdown.svg';

// Example Pexels image URLs for member avatars
const pexelsImages = [
  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
];

function ExampleTable({
  data = [],
}: {
  data?: Array<{
    address: string;
    dateTime: string;
    members: Array<string>; // Array of member image URLs
    amount: string;
  }>;}
) {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full px-8 pt-2">
      <div className="flex justify-center">
        <div className="w-full">
          <div className="flex justify-center w-full bg-white">
            <div className="relative w-full max-w-[1564px]">
              <div className="mb-2 mt-2">
                <h1 className="text-xl font-bold text-[#495057] font-poppins">
                  Transaction History 
                </h1>
                <div className="flex justify-between items-center pr-16">
                  <button className="flex items-center bg-[#01B39C] text-white font-poppins px-6 py-1 my-3 text-[12px] rounded-md">
                    All
                    <img src={dropdown} alt="Dropdown" className="ml-2 w-3 h-3" />
                  </button>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="bg-white border border-gray-300 rounded-md pl-10 pr-4 py-2 w-64"
                    />
                    <img
                      src={search}
                      alt="Search"
                      className="absolute left-3 top-2 w-7 h-7"
                    />
                  </div>
                </div>
              </div>
              <div>
                <Table
                  className="font-poppins w-full border-collapse"
                  style={{ minHeight: "300px" }}
                >
                  <TableHeader className="bg-[#F3F6F9]">
                    <TableRow>
                      <TableHead className="w-[40px] p-1">
                        <Checkbox />
                      </TableHead>
                      <TableHead className="text-[#495057] font-extrabold w-[150px] p-1">
                        Address
                      </TableHead>
                      <TableHead className="text-[#495057] font-extrabold w-[150px] p-1">
                        Date/Time
                      </TableHead>
                      <TableHead className="text-[#495057] font-extrabold w-[100px] p-1">
                        Members
                      </TableHead>
                      <TableHead className="text-[#495057] font-extrabold w-[100px] p-1">
                        Amount
                      </TableHead>
                      <TableHead className="text-[#495057] font-extrabold w-[100px] p-1">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-[#495057] p-1 w-[40px]">
                          <Checkbox />
                        </TableCell>
                        <TableCell className="text-[#495057] font-medium p-1 w-[150px]">
                          {item.address}
                        </TableCell>
                        <TableCell className="text-[#495057] font-medium p-1 w-[150px]">
                          {item.dateTime}
                        </TableCell>
                        <TableCell className="text-[#495057] font-medium p-1 w-[100px]">
                          <div className="flex -space-x-2">
                            {pexelsImages.map((image, idx) => (
                              <img
                                key={idx}
                                src={image}
                                alt={`Member ${idx + 1}`}
                                className="w-8 h-8 rounded-full border-2 border-white"
                              />
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="text-[#495057] font-medium p-1 w-[100px]">
                          {item.amount}
                        </TableCell>
                        <TableCell className="flex items-center space-x-2 text-[#495057] p-1 w-[100px]">
                          <img
                            src={tableeye}
                            alt="View"
                            className="w-7 h-7 cursor-pointer"
                          />
                          <img
                            src={tableEdit}
                            alt="Edit"
                            className="w-7 h-7 cursor-pointer"
                          />
                          <img
                            src={tableDelete}
                            alt="Delete"
                            className="w-7 h-7 cursor-pointer"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={6} className="text-right">
                        <div className="flex justify-end items-center space-x-2">
                          <Button
                            className={`border-2 bg-white text-xs px-4 py-1 rounded-md ${
                              currentPage === 1
                                ? "text-[#495057] font-bold"
                                : "text-[#405189] font-bold"
                            }`}
                            onClick={goToPreviousPage}
                            disabled={currentPage === 1}
                          >
                            Previous
                          </Button>
                          <div className="flex space-x-2">
                            {Array.from(
                              { length: totalPages },
                              (_, i) => i + 1
                            ).map((pageNumber) => (
                              <button
                                key={pageNumber}
                                className={`text-xs px-3 py-1 border-2 rounded-md ${
                                  pageNumber === currentPage
                                    ? "bg-[#405189] text-white font-bold"
                                    : "bg-white text-[#405189] font-bold"
                                }`}
                                onClick={() => handlePageClick(pageNumber)}
                              >
                                {pageNumber}
                              </button>
                            ))}
                          </div>
                          <Button
                            className={`border-2 bg-white text-xs px-4 py-1 rounded-md ${
                              currentPage === totalPages
                                ? "text-[#495057] font-bold"
                                : "text-[#405189] font-bold"
                            }`}
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                          >
                            Next
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleTable;
