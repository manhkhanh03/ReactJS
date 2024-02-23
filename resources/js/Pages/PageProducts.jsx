import React, { createContext } from "react";
import { Head } from "@inertiajs/react";
import ContentProducts from "@/Components/Includes/ContentProducts";
import LayoutUser from "@/Components/Includes/LayoutUser";

export const Products = createContext(null);
export default function PageProducts({ products, currentPage, perPage }) {
    return (
        <Products.Provider value={products}>
            <Head title={"Products"} />
            <LayoutUser page={"Products"} singleBanner={true}>
                <ContentProducts
                    currentPage={currentPage}
                    perPage={perPage}
                />
            </LayoutUser>
        </Products.Provider>
    );
}
