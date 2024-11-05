"use client";
import React from "react";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();

  const route = () => {
    router.push("/dashboard");
  };
  return (
    <div className="z-10 fixed w-screen ">
      <section>
        <div className="bg-[#fff] dark:bg-gray-900  p-2">
          <div className="flex h-screen">
            <div className="m-auto text-center">
              <div>
                <svg
                  width={631}
                  className="not-found"
                  style={{ margin: "auto" }}
                  height={379}
                  viewBox="0 0 631 379"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M317.524 379C488.625 379 627.33 368.857 627.33 356.346C627.33 343.834 488.625 333.692 317.524 333.692C146.423 333.692 7.71875 343.834 7.71875 356.346C7.71875 368.857 146.423 379 317.524 379Z"
                      fill="#F2F2F2"
                    />
                    <path
                      d="M305.65 108.342C255.175 108.342 218.934 144.112 218.934 227.575C218.934 322.166 255.175 347.205 305.65 347.205C356.126 347.205 394.526 319.781 394.526 227.575C394.526 129.009 356.126 108.342 305.65 108.342ZM305.982 315.807C271.021 315.807 252.757 293.152 252.757 227.636C252.757 169.827 271.769 139.342 306.73 139.342C341.691 139.342 360.703 159.367 360.703 227.636C360.703 291.5 340.943 315.807 305.982 315.807Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M188.708 281.229H167.839V213.348C167.839 209.743 166.542 206.285 164.234 203.735C161.926 201.186 158.795 199.754 155.531 199.754H150.641C149.025 199.754 147.424 200.105 145.931 200.788C144.438 201.472 143.081 202.473 141.938 203.735C140.796 204.998 139.889 206.496 139.27 208.146C138.652 209.795 138.334 211.563 138.334 213.348V281.229H79.4676C78.2566 281.229 77.0661 280.884 76.0117 280.226C74.9573 279.568 74.0748 278.62 73.4497 277.474C72.8246 276.329 72.4783 275.024 72.4442 273.687C72.4101 272.35 72.6895 271.026 73.2552 269.843L135.558 139.594C136.335 137.97 136.806 136.189 136.942 134.358C137.079 132.528 136.878 130.686 136.352 128.944C135.826 127.201 134.986 125.595 133.883 124.221C132.779 122.847 131.435 121.734 129.932 120.95L126.254 119.032C123.398 117.542 120.133 117.322 117.134 118.417C114.136 119.513 111.633 121.839 110.144 124.916L34.1574 281.926C32.8635 284.6 32.1865 287.585 32.1865 290.616C32.1865 293.037 32.6182 295.434 33.4569 297.671C34.2956 299.907 35.5249 301.939 37.0746 303.651C38.6243 305.363 40.4641 306.721 42.4888 307.647C44.5136 308.573 46.6838 309.05 48.8754 309.05H138.334V351.974C138.334 354.114 138.715 356.233 139.457 358.21C140.198 360.187 141.285 361.983 142.655 363.496C144.024 365.009 145.651 366.21 147.441 367.029C149.23 367.848 151.149 368.269 153.086 368.269H153.086C155.024 368.269 156.942 367.848 158.732 367.029C160.522 366.21 162.148 365.009 163.518 363.496C164.888 361.983 165.974 360.187 166.716 358.21C167.457 356.233 167.839 354.114 167.839 351.974V309.05H188.708C192.049 309.05 195.252 307.585 197.614 304.976C199.975 302.367 201.302 298.829 201.302 295.14C201.302 291.45 199.975 287.912 197.614 285.304C195.252 282.695 192.049 281.229 188.708 281.229Z"
                      fill="#007867"
                    />
                    <path
                      d="M575.157 281.229H554.287V213.348C554.287 209.743 552.99 206.285 550.682 203.735C548.374 201.186 545.244 199.754 541.98 199.754H537.089C535.473 199.754 533.873 200.105 532.379 200.788C530.886 201.472 529.529 202.473 528.387 203.735C527.244 204.998 526.337 206.496 525.719 208.146C525.1 209.795 524.782 211.563 524.782 213.348V281.229H465.916C464.705 281.229 463.514 280.884 462.46 280.226C461.406 279.568 460.523 278.62 459.898 277.474C459.273 276.329 458.926 275.024 458.892 273.687C458.858 272.35 459.138 271.026 459.703 269.843L522.007 139.594C522.783 137.97 523.254 136.189 523.391 134.358C523.527 132.528 523.326 130.686 522.8 128.944C522.275 127.201 521.435 125.595 520.331 124.221C519.228 122.847 517.883 121.734 516.38 120.95L512.702 119.032C509.846 117.542 506.581 117.322 503.583 118.417C500.584 119.513 498.081 121.839 496.593 124.916L420.606 281.926C419.312 284.6 418.635 287.585 418.635 290.616C418.635 295.505 420.393 300.194 423.523 303.651C426.653 307.108 430.897 309.05 435.324 309.05H524.782V351.974C524.782 356.296 526.336 360.44 529.103 363.496C531.869 366.552 535.622 368.269 539.534 368.269C543.447 368.269 547.199 366.552 549.966 363.496C552.733 360.44 554.287 356.296 554.287 351.974V309.05H575.157C578.497 309.05 581.7 307.585 584.062 304.976C586.423 302.367 587.75 298.829 587.75 295.14C587.75 291.45 586.423 287.912 584.062 285.304C581.7 282.695 578.497 281.229 575.157 281.229Z"
                      fill="#007867"
                    />
                    <path
                      d="M194.466 273.28H173.597V205.399C173.597 203.614 173.278 201.846 172.66 200.197C172.041 198.547 171.135 197.049 169.992 195.786C168.849 194.524 167.492 193.523 165.999 192.84C164.506 192.156 162.905 191.805 161.289 191.805H156.399C153.135 191.805 150.004 193.237 147.696 195.786C145.388 198.336 144.091 201.794 144.091 205.399V273.28H85.2254C84.0144 273.28 82.8239 272.935 81.7695 272.277C80.7151 271.619 79.8326 270.671 79.2075 269.525C78.5825 268.38 78.2361 267.075 78.202 265.738C78.1679 264.401 78.4473 263.077 79.013 261.894L141.316 131.645C142.093 130.021 142.564 128.24 142.7 126.41C142.837 124.579 142.636 122.737 142.11 120.995C141.584 119.252 140.744 117.646 139.641 116.272C138.537 114.898 137.193 113.786 135.69 113.001L132.012 111.083C129.156 109.593 125.891 109.373 122.892 110.469C119.894 111.564 117.391 113.89 115.902 116.967L39.9153 273.977C38.6213 276.651 37.9443 279.636 37.9443 282.668V282.668C37.9443 287.556 39.7026 292.245 42.8324 295.702C45.9622 299.159 50.207 301.101 54.6332 301.101H144.091V344.025C144.091 346.165 144.473 348.284 145.214 350.261C145.956 352.238 147.042 354.034 148.412 355.547C149.782 357.061 151.409 358.261 153.198 359.08C154.988 359.899 156.907 360.32 158.844 360.32H158.844C162.757 360.32 166.509 358.603 169.276 355.547C172.042 352.492 173.597 348.347 173.597 344.025V301.101H194.466C196.12 301.101 197.758 300.742 199.286 300.042C200.814 299.343 202.202 298.319 203.371 297.027C204.541 295.735 205.468 294.202 206.101 292.514C206.734 290.827 207.06 289.018 207.06 287.191V287.191C207.06 285.364 206.734 283.555 206.101 281.868C205.468 280.18 204.541 278.646 203.371 277.355C202.202 276.063 200.814 275.038 199.286 274.339C197.758 273.64 196.12 273.28 194.466 273.28V273.28Z"
                      stroke="#3F3D56"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M585.951 273.28H565.081V205.399C565.081 201.794 563.784 198.336 561.476 195.786C559.168 193.237 556.038 191.805 552.773 191.805H547.883C546.267 191.805 544.667 192.156 543.173 192.84C541.68 193.523 540.323 194.524 539.181 195.786C538.038 197.049 537.131 198.547 536.513 200.197C535.894 201.846 535.576 203.614 535.576 205.399V273.28H476.71C475.499 273.28 474.308 272.935 473.254 272.277C472.2 271.619 471.317 270.671 470.692 269.525C470.067 268.38 469.72 267.075 469.686 265.738C469.652 264.401 469.932 263.077 470.497 261.894L532.8 131.645C533.577 130.021 534.048 128.24 534.185 126.41C534.321 124.579 534.12 122.737 533.594 120.995C533.069 119.252 532.228 117.646 531.125 116.272C530.021 114.898 528.677 113.786 527.174 113.001L523.496 111.083C520.64 109.593 517.375 109.373 514.377 110.469C511.378 111.564 508.875 113.89 507.386 116.967L431.4 273.977C430.106 276.651 429.429 279.636 429.429 282.668C429.429 287.556 431.187 292.245 434.317 295.702C437.447 299.159 441.691 301.101 446.118 301.101H535.576V344.025C535.576 348.347 537.13 352.492 539.897 355.547C542.663 358.603 546.416 360.32 550.328 360.32V360.32C554.241 360.32 557.993 358.603 560.76 355.547C563.527 352.492 565.081 348.347 565.081 344.025V301.101H585.951C587.604 301.101 589.242 300.742 590.77 300.042C592.298 299.343 593.686 298.319 594.856 297.027C596.025 295.735 596.953 294.202 597.586 292.514C598.219 290.827 598.544 289.018 598.544 287.191V287.191C598.544 283.502 597.217 279.963 594.856 277.355C592.494 274.746 589.291 273.28 585.951 273.28V273.28Z"
                      stroke="#007867"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M606.068 352.767C605.018 346.857 609.571 341.618 614.068 338.212C618.565 334.807 623.82 331.461 625.355 325.681C627.56 317.375 620.991 309.768 615.878 303.209C612.085 298.34 608.827 292.993 606.174 287.278C605.11 284.986 604.132 282.591 603.853 280.034C603.449 276.352 604.52 272.689 605.599 269.177C609.193 257.477 613.036 245.876 617.127 234.373"
                      stroke="#3F3D56"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M591.843 270.379C593.622 271.094 595.527 271.342 597.408 271.105C599.289 270.867 601.094 270.15 602.681 269.011C604.268 267.871 605.594 266.34 606.554 264.538C607.514 262.736 608.082 260.712 608.213 258.626C608.345 256.54 608.035 254.449 607.31 252.517C606.585 250.586 605.463 248.867 604.034 247.496C602.604 246.125 600.906 245.14 599.073 244.617C597.24 244.095 595.322 244.05 593.471 244.486L593.777 251.435L590.8 245.479C587.879 246.996 585.622 249.731 584.526 253.084C584.136 254.259 583.9 255.488 583.823 256.736C583.635 259.664 584.316 262.58 585.763 265.042C587.211 267.504 589.345 269.378 591.843 270.379V270.379Z"
                      stroke="#3F3D56"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M604.575 231.973C605.273 229.845 606.445 227.946 607.982 226.449C609.52 224.953 611.374 223.909 613.373 223.412L614.379 230.018L616.245 223.08C618.836 223.122 621.347 224.073 623.417 225.795C625.486 227.516 627.007 229.92 627.759 232.659C628.511 235.397 628.456 238.329 627.602 241.031C626.747 243.733 625.137 246.064 623.004 247.69C620.872 249.315 618.327 250.149 615.737 250.073C613.147 249.996 610.646 249.012 608.595 247.264C606.544 245.515 605.049 243.091 604.327 240.343C603.604 237.594 603.691 234.663 604.575 231.973H604.575Z"
                      fill="#57B894"
                    />
                    <path
                      d="M605.246 229.588C605.944 227.46 607.116 225.56 608.653 224.064C610.191 222.568 612.044 221.523 614.044 221.026L615.05 227.633L616.916 220.694C619.507 220.737 622.018 221.687 624.088 223.409C626.157 225.131 627.678 227.535 628.43 230.273C629.182 233.012 629.127 235.944 628.272 238.645C627.418 241.347 625.808 243.679 623.675 245.304C621.543 246.929 618.998 247.764 616.408 247.687C613.817 247.611 611.316 246.627 609.266 244.878C607.215 243.129 605.72 240.705 604.998 237.957C604.275 235.209 604.362 232.278 605.246 229.588H605.246Z"
                      stroke="#3F3D56"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M613.732 303.342C616.554 304.473 619.653 304.417 622.44 303.186C625.227 301.954 627.506 299.633 628.842 296.665C630.179 293.697 630.481 290.289 629.689 287.091C628.897 283.893 627.068 281.129 624.55 279.325L623.116 284.657L622.1 277.973C622.089 277.968 622.079 277.963 622.068 277.96C620.559 277.354 618.957 277.083 617.353 277.161C615.749 277.24 614.174 277.666 612.719 278.417C611.265 279.168 609.958 280.228 608.874 281.537C607.791 282.846 606.951 284.377 606.404 286.045C605.856 287.712 605.611 289.482 605.683 291.254C605.755 293.026 606.143 294.764 606.823 296.371C607.504 297.977 608.464 299.42 609.65 300.616C610.835 301.812 612.222 302.739 613.732 303.342H613.732Z"
                      fill="#57B894"
                    />
                    <path
                      d="M614.314 300.926C617.136 302.057 620.235 302.001 623.022 300.769C625.809 299.538 628.088 297.217 629.424 294.249C630.761 291.28 631.063 287.873 630.271 284.675C629.479 281.477 627.65 278.713 625.132 276.909L623.698 282.241L622.682 275.557C622.672 275.551 622.661 275.547 622.65 275.544C621.141 274.938 619.539 274.666 617.935 274.745C616.331 274.823 614.756 275.25 613.301 276.001C611.847 276.752 610.54 277.812 609.456 279.121C608.373 280.429 607.533 281.961 606.986 283.628C606.438 285.296 606.193 287.066 606.265 288.837C606.337 290.609 606.725 292.348 607.405 293.954C608.086 295.561 609.046 297.003 610.232 298.2C611.417 299.396 612.804 300.322 614.314 300.926H614.314Z"
                      stroke="#3F3D56"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M601.007 325.764C601.492 328.813 602.912 331.585 605.028 333.615C607.144 335.645 609.827 336.81 612.628 336.915C615.429 337.019 618.178 336.056 620.413 334.188C622.647 332.319 624.233 329.659 624.902 326.653C625.572 323.646 625.286 320.477 624.091 317.677C622.897 314.876 620.867 312.615 618.342 311.271C615.816 309.927 612.95 309.584 610.223 310.297C607.495 311.011 605.073 312.739 603.363 315.191L608.808 324.245L601.367 319.44C600.79 321.485 600.667 323.654 601.007 325.764Z"
                      fill="#57B894"
                    />
                    <path
                      d="M601.511 323.975C601.996 327.024 603.416 329.796 605.532 331.826C607.647 333.856 610.331 335.021 613.132 335.125C615.933 335.23 618.682 334.267 620.917 332.398C623.151 330.53 624.736 327.87 625.406 324.863C626.076 321.857 625.789 318.688 624.595 315.888C623.4 313.087 621.37 310.825 618.845 309.482C616.32 308.138 613.454 307.795 610.727 308.508C607.999 309.222 605.577 310.95 603.866 313.402L609.312 322.456L601.871 317.651C601.294 319.696 601.171 321.865 601.511 323.975V323.975Z"
                      stroke="#3F3D56"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M5.28973 305.058C6.45865 305.527 7.71029 305.69 8.946 305.534C10.1817 305.378 11.3677 304.907 12.4105 304.159C13.4534 303.41 14.3245 302.404 14.9553 301.22C15.586 300.036 15.9592 298.706 16.0453 297.336C16.1315 295.965 15.9283 294.591 15.4517 293.322C14.9752 292.053 14.2383 290.924 13.2992 290.023C12.36 289.122 11.2443 288.475 10.04 288.132C8.83569 287.788 7.57565 287.759 6.35922 288.045L6.56024 292.611L4.60457 288.698C2.6852 289.694 1.20241 291.491 0.482041 293.695C0.226208 294.466 0.0706801 295.274 0.0200981 296.094C-0.103344 298.018 0.344308 299.934 1.29522 301.551C2.24612 303.169 3.64846 304.4 5.28973 305.058Z"
                      fill="#57B894"
                    />
                    <path
                      d="M14.967 358.013C14.2767 354.13 17.2681 350.687 20.2229 348.45C23.1778 346.212 26.6303 344.014 27.6385 340.217C29.0875 334.759 24.7715 329.762 21.4122 325.452C18.92 322.253 16.7797 318.74 15.0362 314.985C14.2783 313.51 13.762 311.899 13.5112 310.226C13.2463 307.807 13.9499 305.4 14.6587 303.092C17.0201 295.406 19.5448 287.783 22.2328 280.226"
                      stroke="#3F3D56"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M5.62079 303.882C6.78971 304.352 8.04135 304.515 9.27706 304.359C10.5128 304.203 11.6988 303.732 12.7416 302.983C13.7844 302.234 14.6555 301.228 15.2863 300.044C15.9171 298.86 16.2902 297.531 16.3764 296.16C16.4625 294.789 16.2593 293.416 15.7828 292.147C15.3062 290.878 14.5693 289.748 13.6302 288.848C12.6911 287.947 11.5754 287.299 10.3711 286.956C9.16674 286.613 7.90671 286.583 6.69028 286.87L6.8913 291.436L4.93563 287.523C3.01626 288.519 1.53346 290.316 0.813095 292.519C0.557265 293.291 0.40174 294.099 0.351155 294.919C0.227705 296.842 0.675354 298.758 1.62626 300.376C2.57717 301.993 3.97952 303.224 5.62079 303.882V303.882Z"
                      stroke="#3F3D56"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M13.9855 278.649C14.4442 277.251 15.2141 276.003 16.2243 275.02C17.2345 274.037 18.4524 273.35 19.7658 273.024L20.4271 277.364L21.653 272.806C23.3551 272.833 25.0052 273.458 26.365 274.589C27.7247 275.721 28.7238 277.3 29.2181 279.099C29.7123 280.898 29.676 282.825 29.1145 284.6C28.553 286.375 27.4953 287.907 26.0941 288.975C24.6929 290.043 23.0207 290.591 21.319 290.541C19.6173 290.49 17.9741 289.844 16.6267 288.695C15.2792 287.546 14.2972 285.953 13.8225 284.148C13.3477 282.342 13.4048 280.416 13.9855 278.649Z"
                      fill="#57B894"
                    />
                    <path
                      d="M14.4259 277.081C14.8846 275.683 15.6546 274.435 16.6647 273.452C17.6749 272.469 18.8928 271.783 20.2062 271.456L20.8675 275.797L22.0934 271.238C23.7955 271.266 25.4456 271.891 26.8054 273.022C28.1652 274.153 29.1643 275.733 29.6585 277.532C30.1527 279.331 30.1164 281.257 29.5549 283.032C28.9934 284.808 27.9357 286.34 26.5345 287.407C25.1333 288.475 23.4612 289.024 21.7595 288.973C20.0577 288.923 18.4145 288.277 17.0671 287.127C15.7196 285.978 14.7376 284.386 14.2629 282.58C13.7882 280.775 13.8453 278.849 14.4259 277.081V277.081Z"
                      stroke="#3F3D56"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M20.0019 325.54C21.8557 326.282 23.8921 326.246 25.723 325.437C27.5539 324.628 29.0512 323.103 29.9296 321.152C30.8079 319.202 31.0059 316.963 30.4858 314.862C29.9657 312.761 28.7638 310.945 27.1093 309.76L26.1673 313.263L25.4993 308.871C25.4927 308.868 25.4859 308.865 25.4789 308.863C24.4873 308.465 23.4344 308.286 22.3804 308.337C21.3263 308.389 20.2917 308.669 19.3358 309.162C18.3798 309.656 17.5213 310.352 16.8091 311.212C16.097 312.072 15.5453 313.079 15.1855 314.174C14.8257 315.27 14.6648 316.433 14.7122 317.597C14.7595 318.761 15.0141 319.904 15.4614 320.959C15.9087 322.015 16.54 322.963 17.319 323.749C18.0981 324.534 19.0098 325.143 20.0019 325.54Z"
                      fill="#57B894"
                    />
                    <path
                      d="M20.3847 323.952C22.2385 324.695 24.2749 324.658 26.1058 323.849C27.9367 323.04 29.434 321.515 30.3124 319.565C31.1907 317.615 31.3887 315.376 30.8686 313.275C30.3485 311.174 29.1466 309.358 27.4921 308.172L26.5501 311.676L25.8822 307.284C25.8756 307.28 25.8687 307.278 25.8617 307.275C24.8704 306.878 23.8179 306.7 22.7644 306.753C21.7108 306.805 20.6769 307.085 19.7216 307.579C17.7923 308.575 16.3004 310.377 15.5741 312.589C14.8478 314.8 14.9466 317.24 15.8488 319.371C16.751 321.502 18.3826 323.15 20.3847 323.952V323.952Z"
                      stroke="#3F3D56"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M11.6419 340.271C11.9607 342.274 12.8933 344.096 14.2835 345.429C15.6737 346.763 17.4369 347.529 19.2773 347.597C21.1177 347.666 22.9235 347.033 24.3918 345.805C25.86 344.578 26.9015 342.83 27.3416 340.855C27.7816 338.88 27.5934 336.798 26.8086 334.958C26.0237 333.118 24.6899 331.632 23.0309 330.749C21.3719 329.866 19.4886 329.64 17.6967 330.109C15.9049 330.578 14.3135 331.714 13.1895 333.325L16.7676 339.273L11.8786 336.116C11.4995 337.46 11.4183 338.885 11.6419 340.271Z"
                      fill="#57B894"
                    />
                    <path
                      d="M11.972 339.095C12.2907 341.099 13.2234 342.92 14.6136 344.254C16.0038 345.588 17.7669 346.353 19.6074 346.422C21.4478 346.49 23.2536 345.858 24.7218 344.63C26.1901 343.402 27.2316 341.654 27.6716 339.679C28.1117 337.704 27.9235 335.622 27.1386 333.782C26.3538 331.942 25.02 330.456 23.361 329.573C21.702 328.691 19.8186 328.465 18.0268 328.934C16.2349 329.403 14.6436 330.538 13.5196 332.149L17.0976 338.098L12.2086 334.94C11.8296 336.284 11.7484 337.709 11.972 339.095V339.095Z"
                      stroke="#3F3D56"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M282.464 221.287C287.978 221.287 292.448 214.897 292.448 207.015C292.448 199.133 287.978 192.744 282.464 192.744C276.95 192.744 272.479 199.133 272.479 207.015C272.479 214.897 276.95 221.287 282.464 221.287Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M336.79 221.611C342.304 221.611 346.774 215.222 346.774 207.34C346.774 199.458 342.304 193.068 336.79 193.068C331.276 193.068 326.806 199.458 326.806 207.34C326.806 215.222 331.276 221.611 336.79 221.611Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M329.155 249.506C329.155 255.954 321.003 261.183 310.949 261.183C300.894 261.183 292.742 255.954 292.742 249.506C292.742 243.921 298.856 239.25 307.026 238.108C308.326 237.919 309.637 237.826 310.949 237.829C313.147 237.822 315.339 238.083 317.485 238.608C324.31 240.288 329.155 244.537 329.155 249.506Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M284.813 218.044C290.328 218.044 294.798 211.654 294.798 203.772C294.798 195.89 290.328 189.5 284.813 189.5C279.299 189.5 274.829 195.89 274.829 203.772C274.829 211.654 279.299 218.044 284.813 218.044Z"
                      stroke="#3F3D56"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M339.139 218.368C344.653 218.368 349.123 211.978 349.123 204.096C349.123 196.214 344.653 189.824 339.139 189.824C333.624 189.824 329.154 196.214 329.154 204.096C329.154 211.978 333.624 218.368 339.139 218.368Z"
                      stroke="#3F3D56"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M313.297 257.94C323.353 257.94 331.504 252.712 331.504 246.263C331.504 239.814 323.353 234.586 313.297 234.586C303.242 234.586 295.091 239.814 295.091 246.263C295.091 252.712 303.242 257.94 313.297 257.94Z"
                      stroke="#3F3D56"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M317.702 239.581C317.707 240.397 317.43 241.184 316.927 241.781C316.689 242.068 316.401 242.297 316.079 242.454C315.758 242.611 315.411 242.693 315.059 242.695H309.186C308.462 242.667 307.778 242.324 307.283 241.74C306.788 241.157 306.522 240.38 306.543 239.581C306.54 238.948 306.708 238.329 307.025 237.803C308.324 237.601 309.636 237.501 310.948 237.505C313.149 237.497 315.343 237.776 317.485 238.335C317.63 238.731 317.704 239.154 317.702 239.581Z"
                      fill="white"
                    />
                    <path
                      d="M284.814 203.123C286.435 203.123 287.75 201.671 287.75 199.879C287.75 198.088 286.435 196.636 284.814 196.636C283.192 196.636 281.877 198.088 281.877 199.879C281.877 201.671 283.192 203.123 284.814 203.123Z"
                      fill="white"
                    />
                    <path
                      d="M339.433 203.123C341.054 203.123 342.369 201.671 342.369 199.879C342.369 198.088 341.054 196.636 339.433 196.636C337.811 196.636 336.496 198.088 336.496 199.879C336.496 201.671 337.811 203.123 339.433 203.123Z"
                      fill="white"
                    />
                    <path
                      opacity="0.3"
                      d="M342.369 233.613C343.991 233.613 345.306 232.16 345.306 230.369C345.306 228.578 343.991 227.126 342.369 227.126C340.747 227.126 339.433 228.578 339.433 230.369C339.433 232.16 340.747 233.613 342.369 233.613Z"
                      fill="#E7D040"
                    />
                    <path
                      opacity="0.3"
                      d="M270.718 233.613C272.34 233.613 273.654 232.16 273.654 230.369C273.654 228.578 272.34 227.126 270.718 227.126C269.096 227.126 267.781 228.578 267.781 230.369C267.781 232.16 269.096 233.613 270.718 233.613Z"
                      fill="#E7D040"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width={631} height={379} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-black dark:text-white p-2 mb-4 mt-4">
                The stuff you were looking for doesn&apos;t exist
              </p>
              <button
                class="bg-pine_green-500 hover:bg-white-400 hover:text-pine_green-500 text-white font-bold py-2 px-4 rounded"
                onClick={route}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
