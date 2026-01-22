"use client";
import { useProtectImages } from "@/hooks/useProtectImages";

export default function ImageProtection() {
  // Use "all" to protect all images, or "labelled" to protect only images with protected attribute
  useProtectImages("all");
  
  return null;
}
