"use client";
import React from "react";
import Image from "next/image";
import ButtonComponent from "@/components/Core/ButtonComponent";
import "./hero-section.scss";
import ModalComponent from "@/components/Core/ModalComponent";
import heroImage from "../../../../../public/images/hero-image.png"

const HeroSection = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [isStatic, setIsStatic] = React.useState(false);

  const handleOpenDefault = () => {
    setIsStatic(false);
    setShowModal(true);
  };

  const handleOpenStatic = () => {
    setShowModal(true);
    setIsStatic(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsStatic(false);
  };

  return (
    <section className="hero-section" dir="ltr">
      <div className="container">
        <div className="section-wrapper">
          {/* Left Side */}
          <div className="hero-content">
            <div className="design-element-1"></div>
            <h1 className="hero-title">
              We help you create your{" "}
              <span className="primary-color">website</span>
            </h1>
            <p className="hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut
              turpis adipiscing tempus, magna elit nunc iaculis sit. Libero
              velit quis leo non. At donec egestas cras in libero pellentesque.
              Donec amet phasellus.
            </p>

            <div className="btn-wrapper">
              <ButtonComponent
                label="Get Started"
                role="button"
                variant="primary"
                onClick={handleOpenDefault}
              />
              <ButtonComponent
                label="Contact Us"
                role="button"
                variant="outline"
                onClick={handleOpenStatic}
              />
            </div>
          </div>

          {/* Right Side */}
          {heroImage && (
            <div className="hero-image-wrapper">
              <Image
                src={heroImage}
                alt="Hero Image"
                width={700}
                height={700}
                className="hero-image"
                loading="lazy"
              />
            </div>
          )}
        </div>

        {/* Background Design */}
        <div className="design-element-2">
          <Image
            src="/images/design-element-2.png"
            alt="Background Design"
            width={600}
            height={600}
            loading="lazy"
          />
        </div>
      </div>
      <ModalComponent
        showModal={showModal}
        handleClose={handleCloseModal}
        isStatic={isStatic}
      />
    </section>
  );
};

export default HeroSection;
