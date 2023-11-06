import Item from "./Item";
import icon from "./img/credit-card.svg";

import { useState, useEffect } from "react";

export default function ListItems() {
    const [showMore, setShowMore] = useState(false);
    const [itemsShow, setItemsShow] = useState(6);
    const allItems = [
        { title: "Credit Cards", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Home Loans", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Health Insurance", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Car Insurance", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Boardband & NBN", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Personal Loans", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "High-interest Savings", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Electricity & Gas", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Mobile Plans", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Super Funds", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Share Trading", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Life Insurance", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Home Insurance", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Travel Insurance", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Travel Deals", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Crypto", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Car Loans", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Pet Insurance", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Transaction Accounts", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Money Transfers", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Shopping Deals", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Streaming", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Business Insurance", img: { icon }, url: "https://www.finder.com.au/" },
        { title: "Short Term Loans", img: { icon }, url: "https://www.finder.com.au/" },
    ];

    useEffect(() => {
        showMore ? setItemsShow(allItems.length) : setItemsShow(6);
    }, [showMore]);

    return (
        <>
            <ul className="items">
                {allItems.slice(0, itemsShow).map((item, index) =>
                    <Item key={index} title={item.title} img={item.img} url={item.url}></Item>
                )}
            </ul>
            <button className={`btn-arr ${showMore ? " btn-arr--up" : " btn-arr--down"}`} onClick={() => setShowMore(!showMore)}>{showMore ? "Show less categories" : "  Show more categories"}</button >
        </>
    )

}