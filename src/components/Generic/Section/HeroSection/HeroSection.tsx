"use client";
import React from "react";
import Image from "next/image";
import ButtonComponent from "@/components/Core/ButtonComponent";
import { Modal } from "react-bootstrap";
import "./hero-section.scss";

const HeroSection = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
                onClick={handleOpen}
              />
              <ButtonComponent
                label="Contact Us"
                role="button"
                variant="outline"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="hero-image-wrapper">
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              width={700}
              height={700}
              className="hero-image"
              loading="lazy"
            />
          </div>
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
    </section>
  );
};

export default HeroSection;
