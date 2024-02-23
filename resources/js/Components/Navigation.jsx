import React from "react";

export default function Navigation({ totalPage, currentPage, perPage }) {
    // function Page() {
    //     for (let i = 1; i < totalPage + 1; i++) {
    //         const next = `&p=${currentPage + 1}`;
    //         const prev = `&p=${currentPage - 1}`;
    //         const isPage = `&p=${i}`;
    //         if (currentPage != 1 && i == 1) {
    //              return <li>
    //                 <a href={`/product?p=${prev}&pp=${perPage}`}>&lt;</a>
    //             </li>;
    //         }
    //         if (currentPage == i) {
    //             return <li data-active-page={i} class="active">
    //                 <span>{i}</span>
    //             </li>;
    //         } else if (currentPage <= 5) {
    //             <li>
    //                 <a href={`/product?p=${isPage}&pp=${perPage}`}>{i}</a>
    //             </li>;

    //             if (i >= 5) {
    //                 <>
    //                     <li data-active-page="" class="__other">
    //                         <span>...</span>
    //                     </li>
    //                     <li>
    //                         <a href={`/product?p=${prev}&pp=${next}`}>&gt;</a>
    //                     </li>
    //                 </>;

    //                 break;
    //             }
    //             if (totalPage <= 5 && i == totalPage) {
    //                 <li>
    //                     <a href={`/product?p=${prev}&pp=${next}`}>&gt;</a>
    //                 </li>;
    //             }
    //         } else if (currentPage > 5) {
    //             if (i >= 4 && i < currentPage) {
    //                 if (i == 4) {
    //                     <li data-active-page="" class="__other">
    //                         <span>...</span>
    //                     </li>;
    //                 }
    //                 continue;
    //             } else if (i <= totalPage && i < currentPage + 3) {
    //                 <li>
    //                     <a href={`/product?p=${isPage}&pp=${perPage}`}>@i</a>
    //                 </li>;
    //             } else {
    //                 if (currentPage != totalPage) {
    //                     <li>
    //                         <a href={`/product?p=${next}&pp=${perPage}`}>
    //                             &gt;
    //                         </a>
    //                     </li>;
    //                 }
    //                 break;
    //             }
    //         }
    //     }
    // }

    return (
        <ul>
            <li>
                <a href="#">&lt;</a>
            </li>
            <li className="active">
                <span>1</span>
            </li>
            <li>
                <a href="#">2</a>
            </li>
            <li>
                <a href="#">3</a>
            </li>
            <li>
                <a href="#">4</a>
            </li>
            <li>
                <a href="#">5</a>
            </li>
            <li>
                <a href="#">&gt;</a>
            </li>
        </ul>
    );
}
