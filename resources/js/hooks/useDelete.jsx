import React from "react";

export default function useDelete(event) {
    event.currentTarget.parentNode.remove();
}
