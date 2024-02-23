import ContentCart from "@/Components/ContentCart";
import LayoutUser from "@/Components/Includes/LayoutUser";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Cart() {
    return (
        <>
            <Head title="Cart" />
            <LayoutUser page={"Cart"} singleBanner={true}>
                <ContentCart />
            </LayoutUser>
        </>
    );
}
