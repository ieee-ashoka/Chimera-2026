"use client";
import React, { useEffect } from "react";
import "./globals.css";
import ChimeraNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const canvas = document.getElementById("dotsCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (!canvas || !ctx) return;

    const particlesArray: {
      x: number;
      y: number;
      z: number; // Depth
      size: number;
      opacity: number; // Current opacity
      targetOpacity: number; // Target opacity for reveal
      isRevealed: boolean; // Whether the particle is fully revealed
    }[] = [];
    const numberOfParticles = 180;
    let mouseX = 0;
    let mouseY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;

    function init() {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        const depth = Math.random();
        const size = Math.random() * 0.6 + 0.15;
        particlesArray.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: depth,
          size: size * (1 + depth),
          opacity: 0,
          targetOpacity: 0.4 + Math.random() * 0.6,
          isRevealed: false,
        });
      }
    }

    function drawParticles() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        if (!particle.isRevealed) {
          particle.opacity += 0.01;
          if (particle.opacity >= particle.targetOpacity) {
            particle.opacity = particle.targetOpacity;
            particle.isRevealed = true;
          }
        }

        ctx.beginPath();
        const adjustedSize = particle.size * (1 + particle.z);
        ctx.arc(particle.x, particle.y, adjustedSize, 0, Math.PI * 2);

        ctx.shadowBlur = 3;
        ctx.shadowColor = "white";

        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });
    }

    function updateParticles() {
      const dx = mouseX - prevMouseX;
      const dy = mouseY - prevMouseY;

      particlesArray.forEach((particle) => {
        if (particle.isRevealed) {
          const movementFactor = 0.01 + particle.z * 0.03;
          particle.x += dx * movementFactor;
          particle.y += dy * movementFactor;

          if (particle.x > canvas.width) particle.x = 0;
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.y > canvas.height) particle.y = 0;
          if (particle.y < 0) particle.y = canvas.height;
        }
      });
    }

    function animate() {
      drawParticles();
      updateParticles();
      prevMouseX = mouseX;
      prevMouseY = mouseY;
      requestAnimationFrame(animate);
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }

    function handleMouseMove(event: MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <html lang="en" className="h-full w-full">
      <body className="flex flex-col min-h-screen w-full bg-[url('/images/test.jpg')] bg-cover bg-center bg-fixed">
        <ChimeraNavbar />
        <canvas
          id="dotsCanvas"
          className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
        />
        <div className="flex-1 relative z-10 overflow-y-auto" id="scroll-view">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
