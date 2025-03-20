import React, { useState } from "react";
import ResidentCard from "./ResidentCard";
import "./ResidentsList.css";

function ResidentsList({ residents }) {
    const [currentPage, setCurrentPage] = useState(1);
    const residentsPerPage = 8;


    const indexOfLastResident = currentPage * residentsPerPage;
    const indexOfFirstResident = indexOfLastResident - residentsPerPage;
    const currentResidents = residents.slice(indexOfFirstResident, indexOfLastResident);


    const totalPages = Math.ceil(residents.length / residentsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className="residents">
                {currentResidents.map((resident, index) => (
                    <ResidentCard key={index} url={resident} />
                ))}
            </div>

            {/* Paginación */}
            {residents.length > residentsPerPage && (
                <div className="pagination">
                    <button
                        className="pagination-button"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Anterior
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={`pagination-button ${currentPage === i + 1 ? "active" : ""}`}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        className="pagination-button"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Siguiente
                    </button>
                </div>
            )}
        </div>
    );
}

export default ResidentsList;
