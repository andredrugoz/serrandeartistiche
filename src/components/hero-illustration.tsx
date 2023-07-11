import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'
import immagine from "../images/paint_home_n.jpg"
import { BackgroundGradient } from './background-gradient'

export function HeroIllustration() {
  const scrollRevealOneRef = useRef<HTMLDivElement[]>([])
  const scrollRevealTwoRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (scrollRevealOneRef.current.length > 0) {
      scrollRevealOneRef.current.map((ref, index) =>
        ScrollReveal().reveal(scrollRevealOneRef.current[index], {
          delay: 1000,
          duration: 1400,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'bottom',
          interval: 200,
        })
      )
    }

    if (scrollRevealTwoRef.current.length > 0) {
      scrollRevealTwoRef.current.map((ref, index) =>
        ScrollReveal().reveal(scrollRevealTwoRef.current[index], {
          delay: 400,
          duration: 600,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'right',
          interval: 150,
        })
      )
    }

    return () => ScrollReveal().destroy()
  }, [])

  return (
    <div>
      <BackgroundGradient className="absolute inset-0 lg:hidden" />
      <div
        ref={(el: HTMLDivElement) => scrollRevealTwoRef.current.push(el)}
        className="absolute top-4 left-16 lg:-top-20 lg:left-24"
      >
        <svg
          width="124"
          height="64"
          viewBox="0 0 124 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="0%"
              y1="50%"
              x2="114.418%"
              y2="50%"
              id="squares-1-a"
            >
              <stop stopColor="#6EFACC" offset="0%" />
              <stop stopColor="#6EFACC" stopOpacity="0" offset="100%" />
            </linearGradient>
          </defs>
          <path
            d="M0 0h4v4H0V0zm0 12h4v4H0v-4zm0 12h4v4H0v-4zm0 12h4v4H0v-4zm0 12h4v4H0v-4zm0 12h4v4H0v-4zM12 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM24 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM36 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM48 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM60 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM72 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM84 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM96 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4z"
            fill="url(#squares-1-a)"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div
        ref={(el: HTMLDivElement) => scrollRevealTwoRef.current.push(el)}
        className="absolute hidden bottom-0 lg:left-40 lg:block"
      >
        <svg
          width="64"
          height="88"
          viewBox="0 0 64 88"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="0%"
              y1="50%"
              x2="114.418%"
              y2="50%"
              id="squares-2-a"
            >
              <stop stopColor="#6EFACC" offset="0%" />
              <stop stopColor="#6EFACC" stopOpacity="0" offset="100%" />
            </linearGradient>
          </defs>
          <path
            d="M80 574h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4z"
            transform="rotate(90 359 279)"
            fill="url(#squares-2-a)"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div
        ref={(el: HTMLDivElement) => scrollRevealTwoRef.current.push(el)}
        className="absolute -top-48 left-96 hidden drop-shadow-2xl lg:block"
      >
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              cx="56.15%"
              cy="27.43%"
              fx="56.15%"
              fy="27.43%"
              r="57.526%"
              gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
              id="ball-1-a"
            >
              <stop stopColor="#eef2ff" offset="0%" />
              <stop stopColor="#c7d2fe" offset="34.827%" />
              <stop stopColor="#818cf8" offset="100%" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="200" fill="#ffffff" fillRule="evenodd" />
          <circle
            cx="200"
            cy="200"
            r="200"
            fill="url(#ball-1-a)"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div
        ref={(el: HTMLDivElement) => scrollRevealOneRef.current.push(el)}
        className="hero-ball hero-ball-2 absolute left-16 top-72 drop-shadow-2xl lg:top-80 lg:-left-16"
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              cx="56.15%"
              cy="27.43%"
              fx="56.15%"
              fy="27.43%"
              r="57.526%"
              gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
              id="ball-2-a"
            >
              <stop stopColor="#eef2ff" offset="0%" />
              <stop stopColor="#c7d2fe" offset="34.827%" />
              <stop stopColor="#818cf8" offset="100%" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="100" fill="#ffffff" fillRule="evenodd" />
          <circle
            cx="100"
            cy="100"
            r="100"
            fill="url(#ball-2-a)"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div
        ref={(el: HTMLDivElement) => scrollRevealTwoRef.current.push(el)}
        className="hero-illustration-browser drop-shadow-2xl"
      ><img
      alt="serrande artistiche"
      className="mx-auto lg:aspect-[5/3] lg:w-full"
      src={immagine}
    />
        
        
      </div>
      <div
        ref={(el: HTMLDivElement) => scrollRevealOneRef.current.push(el)}
        className="hero-ball hero-ball-3 absolute drop-shadow-2xl"
        style={{ top: '402px', left: '440px' }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              cx="56.15%"
              cy="27.43%"
              fx="56.15%"
              fy="27.43%"
              r="57.526%"
              gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
              id="ball-3-a"
            >
              <stop stopColor="#eef2ff" offset="0%" />
              <stop stopColor="#c7d2fe" offset="34.827%" />
              <stop stopColor="#818cf8" offset="100%" />
            </radialGradient>
          </defs>
          <circle cx="40" cy="40" r="40" fill="#ffffff" fillRule="evenodd" />
          <circle
            cx="40"
            cy="40"
            r="40"
            fill="url(#ball-3-a)"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div
        ref={(el: HTMLDivElement) => scrollRevealOneRef.current.push(el)}
        className="hero-ball hero-ball-4 absolute -top-5 left-44 lg:-top-20 lg:left-72"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              cx="56.15%"
              cy="27.43%"
              fx="56.15%"
              fy="27.43%"
              r="57.526%"
              gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
              id="ball-4-a"
            >
              <stop stopColor="#eef2ff" offset="0%" />
              <stop stopColor="#c7d2fe" offset="34.827%" />
              <stop stopColor="#818cf8" offset="100%" />
            </radialGradient>
            <filter
              x="-500%"
              y="-500%"
              width="1000%"
              height="1000%"
              filterUnits="objectBoundingBox"
              id="dropshadow-ball-4"
            >
              <feOffset
                dx="24"
                dy="24"
                in="SourceAlpha"
                result="shadowOffsetOuter"
              />
              <feGaussianBlur
                stdDeviation="24"
                in="shadowOffsetOuter"
                result="shadowBlurOuter"
              />
              <feColorMatrix
                values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.22 0"
                in="shadowBlurOuter"
              />
            </filter>
          </defs>
          <circle
            cx="20"
            cy="20"
            r="20"
            fill="#ffffff"
            fillRule="evenodd"
            filter="url(#dropshadow-ball-4)"
          />
          <circle
            cx="20"
            cy="20"
            r="20"
            fill="url(#ball-4-a)"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div
        ref={(el: HTMLDivElement) => scrollRevealOneRef.current.push(el)}
        className="hero-ball hero-ball-5 absolute lg:-bottom-20 lg:left-80"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              cx="56.15%"
              cy="27.43%"
              fx="56.15%"
              fy="27.43%"
              r="57.526%"
              gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
              id="ball-5-a"
            >
              <stop stopColor="#eef2ff" offset="0%" />
              <stop stopColor="#c7d2fe" offset="34.827%" />
              <stop stopColor="#818cf8" offset="100%" />
            </radialGradient>
            <filter
              x="-500%"
              y="-500%"
              width="1000%"
              height="1000%"
              filterUnits="objectBoundingBox"
              id="dropshadow-ball-5"
            >
              <feOffset
                dx="24"
                dy="24"
                in="SourceAlpha"
                result="shadowOffsetOuter"
              />
              <feGaussianBlur
                stdDeviation="24"
                in="shadowOffsetOuter"
                result="shadowBlurOuter"
              />
              <feColorMatrix
                values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.22 0"
                in="shadowBlurOuter"
              />
            </filter>
          </defs>
          <circle
            cx="12"
            cy="12"
            r="12"
            fill="#ffffff"
            fillRule="evenodd"
            filter="url(#dropshadow-ball-5)"
          />
          <circle
            cx="12"
            cy="12"
            r="12"
            fill="url(#ball-5-a)"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  )
}
