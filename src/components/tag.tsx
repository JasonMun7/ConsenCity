"use client";
import { useState, useEffect } from "react"

type tagProps = {
    label: string;
    div1?: string;
    div2?: string;
    div3?: string;
}



export default function Tag({ label, div1, div2, div3 }: tagProps) {
    

    return (
        <div className={div1}>
            <div className = {div2}/>
            <span className = {div3}>{label}</span>
        </div>
    )
}