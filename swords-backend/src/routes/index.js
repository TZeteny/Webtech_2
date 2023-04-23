import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { addViewToListingRoute } from "./addViewToListing";
import { createNewListingRoute } from "./createNewListing";
import { deleteListingRoute } from "./deleteListing";

export default [
    addViewToListingRoute,
    getAllListingsRoute,
    getListingRoute,
    createNewListingRoute,
    deleteListingRoute,
];
