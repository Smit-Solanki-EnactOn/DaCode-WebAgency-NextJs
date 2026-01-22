"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    ProtectImageJS: {
      protect: (images: NodeListOf<HTMLImageElement> | HTMLImageElement[]) => void;
      getLabelledImages: () => NodeListOf<HTMLImageElement>;
    };
  }
}

export const useProtectImages = (mode: "all" | "labelled" = "labelled") => {
  useEffect(() => {
    const protectImages = () => {
      if (typeof window !== "undefined" && window.ProtectImageJS) {
        try {
          if (mode === "all") {
            // Protect all images on the page
            const images = document.querySelectorAll("img");
            window.ProtectImageJS.protect(images);
          } else {
            // Protect only images with 'protected' attribute
            const labelledImages = window.ProtectImageJS.getLabelledImages();
            if (labelledImages.length > 0) {
              window.ProtectImageJS.protect(labelledImages);
            }
          }
        } catch (error) {
          console.error("Error protecting images:", error);
        }
      }
    };

    // Wait for the script to load and images to render
    if (document.readyState === "complete") {
      protectImages();
    } else {
      window.addEventListener("load", protectImages);
      return () => window.removeEventListener("load", protectImages);
    }
  }, [mode]);
};
