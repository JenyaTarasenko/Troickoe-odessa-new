"use client";
import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";  
 
export default function EncryptedTextDemo() {
  return (
    <div className="mx-auto flex max-w-lg items-center justify-center">
      <p className="text-left">
        Дежурим прямо в Троицком и выезжаем сразу после звонка — подача от 20 минут 24/7,
        бережная эвакуация транспорта любой сложности от легковых авто до спецтехники, 
        с заблокированными колесами или из кювета по честной, фиксированной цене с доставкой по району,
        и всей Украине.{" "}
        <EncryptedText text="Дежурим прямо в Троицком и выезжаем сразу после звонка — подача от 20 минут 24/7," /> 

      </p>
    </div>
  );
}
