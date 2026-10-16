import React from 'react'

const Pagination = ({ onSetCurrentPage, currentPage, totalPages }) => {
    return (
        <div className="flex justify-center items-center gap-2 mt-10">
            <button
                onClick={() => onSetCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-xl border border-slate-300 text-sm font-medium bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
                Previous
            </button>
            <span className="text-sm font-semibold text-slate-700 px-4">
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={() => onSetCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-xl border border-slate-300 text-sm font-medium bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
                Next
            </button>
        </div>
    )
}

export default Pagination