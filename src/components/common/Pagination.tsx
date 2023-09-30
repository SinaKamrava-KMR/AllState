import { useState } from "react";
import { HiChevronLeft,HiChevronRight } from "react-icons/hi";
type PaginationType = {
  pages: number;
  currentPage: number;
  onChange: (value: number) => void;
};

const Pagination = ({ currentPage = 1, pages, onChange }: PaginationType) => {
  const [pagePosition, setPagePosition] = useState<number>(currentPage);
  const pagesList: number[] = Array.from(
    { length: pages },
    (_, idx) => idx + 1
  );

  const handleOnPrevPage = (): void => {
    const page = pagePosition > 1 ? pagePosition - 1 : pagePosition;
    onChange(page);
    setPagePosition(page);
  };
  const handleOnNextPage = (): void => {
    const page = pagePosition < pages ? pagePosition + 1 : pagePosition;
    onChange(page);
    setPagePosition(page);
  };

  return (
    <nav className="mx-auto">
      <ul className="list-style-none flex gap-2">
        <li onClick={handleOnPrevPage}>
          <div className="relative block rounded bg-transparent px-3 py-1.5 text-xl text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white cursor-pointer">
           <HiChevronLeft/>
          </div>
        </li>
        {pagesList.map((p) => {
          return (
            <li key={p}>
              <p
                className={`relative block rounded bg-transparent px-3 py-1.5 text-sm  transition-all duration-300  dark:text-white cursor-default ${
                  p == pagePosition && "bg-green-100"
                } 
                dark:${
                  p == pagePosition && "bg-slate-800"
                }`}
              >
                {p}
              </p>
            </li>
          );
        })}

        <li onClick={handleOnNextPage}>
          <div className="relative block rounded bg-transparent px-3 py-1.5 text-xl text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white cursor-pointer ">
            <HiChevronRight/>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
