import Image from "next/image";
import React from "react";

export default function ServiceMenu() {
  return (
    <div className="ml-10 mt-10">
      <div
        className="cursor-pointer"
        onClick={() => {
          document
            .getElementById("strategy1")
            .scrollIntoView({ behavior: "smooth" });
        }}
        style={{
          height: 56,
          width: 8,
          backgroundColor: "#824ADE",
          borderRadius: 4,
        }}
      ></div>
      <div
        className="cursor-pointer mt-2"
        onClick={() => {
          document
            .getElementById("strategy2")
            .scrollIntoView({ behavior: "smooth" });
        }}
        style={{
          height: 24,
          width: 8,
          backgroundColor: "#824ADE",
          borderRadius: 4,
        }}
      ></div>
      <div
        className="cursor-pointer mt-6"
        onClick={() => {
          document
            .getElementById("design1")
            .scrollIntoView({ behavior: "smooth" });
        }}
        style={{
          height: 24,
          width: 8,
          backgroundColor: "#2935A1",
          borderRadius: 4,
        }}
      ></div>
      <div
        className="cursor-pointer mt-2"
        onClick={() => {
          document
            .getElementById("design2")
            .scrollIntoView({ behavior: "smooth" });
        }}
        style={{
          height: 24,
          width: 8,
          backgroundColor: "#2935A1",
          borderRadius: 4,
        }}
      ></div>
      <div
        className="cursor-pointer mt-2"
        onClick={() => {
          document
            .getElementById("design3")
            .scrollIntoView({ behavior: "smooth" });
        }}
        style={{
          height: 24,
          width: 8,
          backgroundColor: "#2935A1",
          borderRadius: 4,
        }}
      ></div>
      <div
        className="cursor-pointer mt-6"
        onClick={() => {
          document
            .getElementById("development")
            .scrollIntoView({ behavior: "smooth" });
        }}
        style={{
          height: 24,
          width: 8,
          backgroundColor: "#A25B19",
          borderRadius: 4,
        }}
      ></div>
      <div
        className="cursor-pointer mt-6"
        onClick={() => {
          document
            .getElementById("growth")
            .scrollIntoView({ behavior: "smooth" });
        }}
        style={{
          height: 24,
          width: 8,
          backgroundColor: "#1E7B88",
          borderRadius: 4,
        }}
      ></div>
    </div>
  );
}
