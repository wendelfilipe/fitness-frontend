"use client"

import { Button } from "@/components/ui/button"
import React from "react";

export default function Register(){
    function handleClick(e: React.FormEvent){
        e.preventDefault();
        console.log("Clickou")
    }
    
    return (
        <div className="container bg-white flex flex-col justify-center items-center h-screen">
            <form className="bg-white shadow-2xl p-8 rounded-2xl">
                <div className="flex flex-col w-96">
                    <label htmlFor="Name">Nome</label>
                    <input className="border-black border-2 rounded-md p-2" type="text" id="Name" name="Name" />
                </div>
                <div className="flex flex-col w-96 mt-3">
                    <label htmlFor="Email">Senha</label>
                    <input className="border-black border-2 rounded-md p-2" type="text" id="Email" name="Email" />
                </div>
                <div className="flex flex-col w-96 mt-3">
                    <label htmlFor="Email">Confirmar Senha</label>
                    <input className="border-black border-2 rounded-md p-2" type="text" id="Email" name="Email" />
                </div>
                <div className="mt-3 flex flex-col items-center">
                    <Button onClick={(e: React.FormEvent) => handleClick(e)}>Click</Button>
                </div>
            </form>
        </div>
    )
}