"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

import { IoMdPerson } from "react-icons/io";
import { useTranslation } from "@/app/context/TranslationContext";
import { useState } from "react";
import "./style.css"
import { CgArrowTopRightR } from "react-icons/cg";

import { useRouter } from "next/navigation";
export function CardUnitComponent({ ele }) {
  const { t } = useTranslation();
  const iconCard = [
    { icon: AiOutlineWhatsApp, href: "", color: "#08521d" },
    { icon: FiPhoneCall, href: "", color: "#08521d" },
  ];
  let [favourite, setfavourite] = useState(false)
  let router = useRouter()

  return (
    <Card className="duration-300 cursor-pointer rounded-xl border border-[#ccc] dark:border-dark shadow-none hover:shadow" onClick={() => {
      router.push(`units/${ele.$id}`);
    }}>
      <CardHeader className="overflow-hidden p-0 rounded-t-xl relative ">
        <div className="layer  absolute top-0 left-0 flex flex-col items-end justify-between w-full h-[230px]" style={{ zIndex: "1" }}>
          <div className="icons flex gap-3 p-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon cursor-pointer bg-black-200 p-2 rounded-full text-white flex items-center justify-center"
              viewBox="0 0 22 18"
              fill="none"
            >
              <path
                d="M11.1638 4.00635C11.908 4.67805 12.6619 5.34115 13.4061 6.01286C15.2716 7.68351 17.137 9.34556 18.9831 11.0248C19.1474 11.1798 19.2731 11.4382 19.2731 11.6535C19.2924 13.4016 19.2924 15.1498 19.2827 16.9066C19.2827 17.7161 18.9638 18.0002 18.0649 18.0002C13.4448 18.0002 8.82472 18.0002 4.20464 18.0002C3.29609 18.0002 2.98679 17.7247 2.98679 16.9152C2.98679 15.1498 2.97713 13.3844 2.99646 11.619C2.99646 11.4554 3.06411 11.2401 3.18977 11.1282C5.78977 8.77719 8.40911 6.44344 11.0188 4.10969C11.0574 4.06663 11.0961 4.04941 11.1638 4.00635ZM17.9489 16.8291C17.9682 16.7602 17.9876 16.7257 17.9876 16.6827C17.9876 15.1067 17.9972 13.5308 17.9876 11.9549C17.9876 11.8085 17.8619 11.6363 17.7363 11.5243C15.6485 9.63835 13.5415 7.76102 11.4441 5.88368C11.3667 5.81479 11.2604 5.76312 11.1444 5.677C11.1444 9.43167 11.1444 13.1174 11.1444 16.8377C13.4255 16.8291 15.6679 16.8291 17.9489 16.8291Z"
                fill="#fff"
              />
              <path
                d="M11.0815 2.02401C9.47702 3.43632 7.94988 4.77112 6.42273 6.11453C5.15656 7.23405 3.90005 8.37078 2.64354 9.49891C2.31492 9.7917 1.91863 9.89504 1.50302 9.7142C1.1164 9.55057 0.913427 9.24917 1.00042 8.87026C1.04874 8.67219 1.17439 8.46551 1.33871 8.31911C4.306 5.64951 7.28296 2.9799 10.2696 0.31891C10.7625 -0.120283 11.2651 -0.10306 11.7774 0.353356C14.7254 2.98851 17.6637 5.62367 20.602 8.25883C21.1142 8.71525 21.1529 9.20611 20.7276 9.57641C20.312 9.9381 19.7901 9.89504 19.2875 9.43862C16.6584 7.08765 14.0391 4.73667 11.4198 2.3857C11.2845 2.27375 11.1878 2.14457 11.0815 2.02401Z"
                fill="#fff"
              />
            </svg>

            <svg
              className="icon cursor-pointer bg-black-200 p-2 rounded-full text-white flex items-center justify-center"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.75 5.75001L14.75 1.25001M14.75 1.25001H10.25M14.75 1.25001L8 8M6.5 1.25H4.85C3.58988 1.25 2.95982 1.25 2.47852 1.49524C2.05516 1.71095 1.71095 2.05516 1.49524 2.47852C1.25 2.95982 1.25 3.58988 1.25 4.85V11.15C1.25 12.4101 1.25 13.0402 1.49524 13.5215C1.71095 13.9448 2.05516 14.289 2.47852 14.5048C2.95982 14.75 3.58988 14.75 4.85 14.75H11.15C12.4101 14.75 13.0402 14.75 13.5215 14.5048C13.9448 14.289 14.289 13.9448 14.5048 13.5215C14.75 13.0402 14.75 12.4101 14.75 11.15V9.5"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {favourite ? (
              <svg
                className="icon cursor-pointer bg-black-200 p-2 rounded-full text-white items-center justify-center"
                viewBox="0 0 24 24"
                fill="red"
                stroke="red"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setfavourite(!favourite)}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke="red"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="icon cursor-pointer bg-black-200 p-2 rounded-full text-white items-center justify-center"
                viewBox="0 0 24 24"
                fill="transparent"
                stroke="#fff"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setfavourite(!favourite)}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke="#fff"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>


          <div className="p-2">
            <p className="text-white">Deilvery in</p>
            <p className="text-white font-bold">{ele.year}</p>
          </div>
        </div>
        <div className="relative w-full top-0 h-[230px] overflow-hidden rounded-t">
          <Image
            src={ele.href || "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"}
            alt={`${ele.name} profile picture`}
            layout="fill"
            objectFit="cover"

            className="transition-transform h-[230px] duration-500 hover:scale-110"
          />
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-2 bg-white dark:bg-dark rounded-b-xl ">
        <p className="font-bold capitalize text-base">{`${ele.name}`}</p>
        <p className="text-xs capitalize  text-gray-600 mb-5">{ele.address}</p>
        <div className="flex gap-3 align-center">
          <div className="bg-gray-100 relative p-1 h-[25px] flex flex-col justify-between">
            <p className="absolute  left-1 top-0 text-sm">2</p>
            <svg
              width={35}
              height={30}
              viewBox="0 0 23 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5811 14.1659C20.5691 14.3825 20.545 14.563 20.545 14.7435C20.5209 15.5617 20.3525 15.7542 19.6305 15.7783C18.5476 15.8144 18.355 15.6941 18.2949 14.8037C18.2708 14.3705 18.1144 14.2261 17.6812 14.2261C13.5058 14.2381 9.34251 14.2381 5.16714 14.2261C4.69786 14.2261 4.5294 14.3584 4.54144 14.8398C4.55347 15.5497 4.31281 15.7542 3.60288 15.7783C3.44646 15.7783 3.278 15.7783 3.12157 15.7783C2.30334 15.7663 2.11082 15.5738 2.09879 14.7315C2.09879 14.575 2.08675 14.4186 2.07472 14.2261C1.94236 14.202 1.83407 14.1659 1.72577 14.1659C0.727052 14.1298 0.570627 13.9854 0.570627 13.0108C0.570627 11.988 0.522495 10.9652 0.618758 9.94242C0.84738 7.6562 2.4357 6.40479 4.70989 6.65748C4.81819 6.66951 4.93852 6.65748 4.98665 6.65748C4.98665 5.06916 4.98665 3.541 4.98665 2.0008C4.98665 1.90454 4.96258 1.79625 4.95055 1.69998C4.86632 0.845659 5.01071 0.76143 5.86504 0.773463C8.35582 0.809561 10.8346 0.809561 13.3133 0.773463C14.1436 0.76143 14.312 0.89379 14.1797 1.73608C14.1195 2.1091 14.0834 2.47008 14.0232 2.86716C14.9498 2.86716 15.8041 2.91529 16.6584 2.85513C17.5007 2.79497 17.6331 2.89123 17.5127 3.70946C17.4887 3.86588 17.4646 4.02231 17.4646 4.19077C17.4646 4.9729 17.4646 5.74299 17.4646 6.60935C17.8015 6.60935 18.1024 6.62138 18.3911 6.60935C20.2682 6.50106 21.7603 7.99312 21.9167 9.68974C22.025 10.9171 22.001 12.1685 21.9889 13.4079C21.9889 13.8651 21.7122 14.1539 21.2188 14.1539C21.0143 14.1659 20.8218 14.1659 20.5811 14.1659ZM20.0517 12.6739C20.0517 11.988 20.0276 11.3142 20.0637 10.6283C20.0878 10.171 19.8832 10.0507 19.4621 10.0507C14.0353 10.0628 8.60851 10.0628 3.18173 10.0507C2.74856 10.0507 2.56806 10.1831 2.56806 10.6283C2.5801 11.988 2.59213 13.3597 2.56806 14.7194C2.55603 15.2609 2.84482 15.309 3.25393 15.2729C3.62695 15.2489 4.07216 15.4294 4.07216 14.7435C4.07216 13.8892 4.26468 13.7327 5.11901 13.7327C9.29438 13.7327 13.4577 13.7327 17.6331 13.7327C18.5837 13.7327 18.7281 13.841 18.7642 14.7796C18.7882 15.3211 19.1131 15.2609 19.45 15.2729C19.823 15.285 20.0757 15.2368 20.0517 14.7676C20.0276 14.0817 20.0517 13.3838 20.0517 12.6739ZM21.5798 13.6605C21.4956 12.1685 21.5437 10.7005 21.291 9.28062C21.0504 7.92092 19.823 7.05456 18.5355 7.04253C17.3443 7.0305 16.153 7.0305 14.9618 7.04253C12.459 7.06659 9.96821 7.11473 7.4654 7.12676C6.57497 7.12676 5.67251 7.00643 4.78209 7.06659C3.99996 7.12676 3.15767 7.22302 2.48383 7.57197C1.54528 8.05328 1.13617 9.02793 1.076 10.0868C1.02787 11.0013 1.05194 11.9278 1.05194 12.8544C1.05194 13.7688 1.076 13.7929 2.07472 13.6244C2.07472 12.6618 2.07472 11.6872 2.07472 10.7125C2.07472 9.79803 2.26725 9.61754 3.15767 9.61754C5.25137 9.61754 7.34507 9.61754 9.4508 9.61754C12.7718 9.61754 16.0929 9.61754 19.4139 9.61754C20.2923 9.61754 20.5209 9.84616 20.5209 10.7246C20.5209 11.6992 20.5209 12.6859 20.5209 13.6846C20.8819 13.6605 21.1466 13.6605 21.5798 13.6605ZM11.5565 6.63342C11.5565 5.5625 11.5926 4.56378 11.5445 3.5771C11.5084 2.96342 11.5926 2.807 12.2063 2.8431C12.6395 2.86716 13.0606 2.91529 13.4938 2.95139C13.578 2.34975 13.6623 1.84438 13.7345 1.31494C10.9669 1.31494 8.22346 1.31494 5.50406 1.31494C5.50406 3.05969 5.50406 4.8285 5.50406 6.63342C7.57369 6.63342 9.5591 6.63342 11.5565 6.63342ZM16.9833 6.58528C16.9833 5.45421 16.9833 4.40736 16.9833 3.37254C15.3228 3.37254 13.6984 3.37254 12.11 3.37254C12.11 4.45549 12.11 5.50234 12.11 6.58528C13.7465 6.58528 15.3228 6.58528 16.9833 6.58528ZM12.4831 6.8861V6.89814C13.2892 6.89814 14.0954 6.89814 14.9016 6.89814V6.8861C14.0954 6.8861 13.2892 6.8861 12.4831 6.8861Z"
                fill="#666666"
                stroke="#666666"
                strokeWidth="0.25"
              />
            </svg>
          </div>
          <div className="bg-gray-100 relative  h-[25px] flex flex-col justify-between">
            <p className="absolute  left- top-0 text-sm">3</p>
            <svg
              width={35}
              height={35}
              viewBox="0 0 22 21"
              fill="#666666"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.841309 19.4389C1.0138 19.0859 1.30262 18.9816 1.68772 18.9897C2.98342 19.0057 4.2751 18.9977 5.5708 18.9977C5.643 18.9977 5.71521 18.9977 5.79945 18.9977C5.79945 18.749 5.79945 18.5203 5.79945 18.2796C5.68713 18.2596 5.57481 18.2435 5.4665 18.2154C4.8367 18.0309 4.42353 17.6298 4.27911 16.9879C4.04244 15.941 3.82582 14.894 3.60118 13.843C3.56909 13.6865 3.51293 13.5822 3.34846 13.506C2.95534 13.3215 2.75477 12.8682 2.85104 12.447C2.9433 12.0298 3.30032 11.7169 3.73356 11.7049C4.26708 11.6888 4.8006 11.6928 5.33412 11.7009C5.4665 11.7009 5.51464 11.6607 5.55475 11.5364C5.77538 10.8264 6.35704 10.3811 7.10317 10.3731C8.21033 10.3651 9.31748 10.3651 10.4246 10.3731C11.1788 10.3811 11.7645 10.8264 11.9891 11.5444C12.0011 11.5885 12.0172 11.6327 12.0332 11.6848C13.8223 11.6848 15.6074 11.6848 17.4046 11.6848C17.4086 11.6206 17.4166 11.5645 17.4166 11.5043C17.4166 8.47566 17.4206 5.44703 17.4166 2.41839C17.4166 1.39146 16.4258 0.729569 15.5152 1.13874C15.102 1.32326 14.8453 1.64819 14.741 2.08544C14.9215 2.16968 15.098 2.22985 15.2584 2.32612C15.6275 2.54675 15.8601 2.8797 15.9845 3.29288C16.0086 3.3691 16.0728 3.45735 16.1409 3.49345C16.5461 3.71007 16.7667 4.13127 16.6785 4.55247C16.5822 5.00176 16.2292 5.32267 15.7599 5.33069C14.8613 5.34674 13.9587 5.34273 13.0602 5.33069C12.6029 5.32267 12.2298 5.00176 12.1415 4.58055C12.0453 4.13528 12.2579 3.71408 12.6751 3.49746C12.7433 3.46136 12.8115 3.37712 12.8315 3.3009C13.012 2.70721 13.3931 2.3181 13.9908 2.13759C14.051 2.11753 14.1272 2.05334 14.1433 1.99718C14.3639 1.14676 14.8974 0.625272 15.7639 0.45278C15.7839 0.448768 15.8 0.436734 15.816 0.428711C15.9885 0.428711 16.161 0.428711 16.3375 0.428711C16.3495 0.436734 16.3576 0.448768 16.3696 0.45278C17.4928 0.733581 18.0223 1.41151 18.0223 2.57483C18.0223 5.53127 18.0223 8.4877 18.0223 11.4441C18.0223 11.5244 18.0223 11.6006 18.0223 11.7129C18.1788 11.7129 18.3192 11.7049 18.4556 11.7129C18.8848 11.741 19.2418 12.0499 19.33 12.467C19.4223 12.8923 19.2177 13.3375 18.8206 13.518C18.6641 13.5903 18.612 13.6905 18.5799 13.843C18.3553 14.906 18.1386 15.969 17.8939 17.0281C17.7455 17.6699 17.3163 18.063 16.6825 18.2315C16.5822 18.2596 16.4779 18.2676 16.3856 18.2836C16.3856 18.5323 16.3856 18.761 16.3856 19.0017C16.4819 19.0017 16.5622 19.0017 16.6424 19.0017C17.9822 19.0017 19.326 19.0017 20.6659 19.0017C21.0871 19.0017 21.3358 19.2544 21.3398 19.6756C21.3398 19.8441 21.3398 20.0086 21.3398 20.177C21.3398 20.6985 21.1111 20.9272 20.5816 20.9272C15.0177 20.9272 9.44986 20.9272 3.88599 20.9272C3.82582 20.9272 3.76565 20.9312 3.70548 20.9232C3.54101 20.8951 3.43671 20.8028 3.43671 20.6263C3.43671 20.4538 3.537 20.3535 3.70147 20.3295C3.77367 20.3174 3.84989 20.3255 3.9221 20.3255C9.44184 20.3255 14.9576 20.3255 20.4773 20.3255C20.5616 20.3255 20.6458 20.3255 20.73 20.3255C20.73 20.0727 20.73 19.8481 20.73 19.6154C14.2997 19.6154 7.87738 19.6154 1.45907 19.6154C1.45907 19.8601 1.45907 20.0888 1.45907 20.3255C1.80807 20.3255 2.14102 20.3255 2.47397 20.3255C2.69058 20.3255 2.82697 20.4418 2.83098 20.6183C2.835 20.8028 2.69459 20.9232 2.46594 20.9232C2.18514 20.9272 1.90434 20.9111 1.62354 20.9272C1.24245 20.9472 0.981709 20.7948 0.841309 20.4378C0.841309 20.1048 0.841309 19.7719 0.841309 19.4389ZM17.7335 14.9501C17.2281 14.9501 16.7467 14.9501 16.2693 14.9501C15.8682 14.9501 15.467 14.9501 15.0699 14.9501C14.8533 14.9501 14.7169 14.8298 14.7129 14.6533C14.7089 14.4728 14.8453 14.3564 15.0579 14.3484C15.106 14.3484 15.1501 14.3484 15.1983 14.3484C16.0126 14.3484 16.8269 14.3484 17.6412 14.3484C17.7134 14.3484 17.7816 14.3484 17.8619 14.3484C17.914 14.1037 17.9621 13.8751 18.0143 13.6344C15.1421 13.6344 12.286 13.6344 9.42178 13.6344C9.42178 13.8751 9.42178 14.1037 9.42178 14.3484C9.51003 14.3484 9.58224 14.3484 9.65445 14.3484C10.9822 14.3484 12.31 14.3484 13.6378 14.3484C13.706 14.3484 13.7702 14.3444 13.8384 14.3524C13.9948 14.3765 14.0911 14.4647 14.1031 14.6292C14.1152 14.8017 14.0189 14.906 13.8544 14.9421C13.7902 14.9582 13.722 14.9501 13.6539 14.9501C12.318 14.9501 10.9862 14.9501 9.65044 14.9501C9.57422 14.9501 9.498 14.9501 9.40574 14.9501C9.40574 15.1828 9.40975 15.3914 9.40574 15.596C9.39771 16.0092 9.13697 16.2739 8.7278 16.2739C7.87337 16.2779 7.01893 16.2739 6.16449 16.2739C5.75131 16.2739 5.49057 16.0132 5.48656 15.6C5.48255 15.3874 5.48656 15.1788 5.48656 14.9582C5.13355 14.9582 4.8006 14.9582 4.45562 14.9582C4.58398 15.5478 4.70433 16.1295 4.83269 16.7071C4.98112 17.3891 5.33412 17.6699 6.02409 17.6699C9.40574 17.6699 12.7914 17.6699 16.173 17.6699C16.2332 17.6699 16.2934 17.6699 16.3536 17.6659C16.8229 17.6378 17.204 17.349 17.3123 16.8957C17.4607 16.2619 17.5851 15.62 17.7335 14.9501ZM9.41376 12.2986C9.41376 12.5553 9.41376 12.7799 9.41376 13.0126C9.48195 13.0166 9.54213 13.0246 9.59829 13.0246C12.4905 13.0246 15.3828 13.0246 18.279 13.0246C18.3432 13.0246 18.4114 13.0206 18.4756 13.0046C18.6521 12.9564 18.7524 12.812 18.7404 12.6315C18.7283 12.455 18.608 12.3266 18.4235 12.3066C18.3513 12.2986 18.279 12.2986 18.2028 12.2986C15.3547 12.2986 12.5106 12.2986 9.66247 12.2986C9.58625 12.2986 9.51003 12.2986 9.41376 12.2986ZM8.796 13.0126C8.84414 12.3186 8.6556 11.6046 9.15302 11.0069C9.10889 10.9868 9.08883 10.9748 9.07279 10.9748C8.38683 10.9748 7.69686 10.9587 7.01091 10.9828C6.54157 10.9989 6.14444 11.3759 6.10031 11.8453C6.06421 12.2264 6.09229 12.6155 6.09229 13.0126C6.99486 13.0126 7.8854 13.0126 8.796 13.0126ZM14.3518 18.9856C14.3037 18.7971 14.2516 18.6326 14.2235 18.4642C14.1994 18.3037 14.1312 18.2636 13.9748 18.2636C12.0493 18.2676 10.1198 18.2676 8.19428 18.2676C8.13411 18.2676 8.07795 18.2676 8.00574 18.2676C7.94557 18.5123 7.88941 18.7409 7.82924 18.9856C10.0115 18.9856 12.1616 18.9856 14.3518 18.9856ZM14.404 4.00692C13.9708 4.00692 13.5375 4.00291 13.1043 4.01093C12.8596 4.01494 12.7192 4.15935 12.7232 4.37597C12.7272 4.58055 12.8716 4.72898 13.1003 4.73299C13.9708 4.737 14.8453 4.737 15.7157 4.73299C15.9364 4.73299 16.0768 4.58858 16.0928 4.39202C16.1089 4.1754 15.9524 4.01494 15.7037 4.01093C15.2705 4.00291 14.8372 4.00692 14.404 4.00692ZM8.79199 13.6424C7.8854 13.6424 6.99085 13.6424 6.10031 13.6424C6.10031 13.8871 6.10031 14.1158 6.10031 14.3364C7.0069 14.3364 7.89743 14.3364 8.79199 14.3364C8.79199 14.0957 8.79199 13.8711 8.79199 13.6424ZM8.79199 14.9662C7.8854 14.9662 6.99085 14.9662 6.10432 14.9662C6.10432 15.2109 6.10432 15.4395 6.10432 15.6602C7.01091 15.6602 7.90145 15.6602 8.79199 15.6602C8.79199 15.4195 8.79199 15.1948 8.79199 14.9662ZM5.47051 13.0246C5.47051 12.7679 5.47051 12.5393 5.47051 12.3026C4.90089 12.3026 4.35132 12.2986 3.79774 12.3066C3.57711 12.3106 3.44473 12.455 3.44072 12.6556C3.43671 12.8562 3.5731 13.0206 3.78571 13.0206C4.33929 13.0287 4.89688 13.0246 5.47051 13.0246ZM13.4573 3.39317C14.1031 3.39317 14.7289 3.39317 15.3627 3.39317C15.2544 2.96795 14.8372 2.6671 14.3879 2.67913C13.9427 2.69116 13.5375 2.99603 13.4573 3.39317ZM11.3834 11.6888C11.2751 11.2395 10.8298 10.9507 10.3444 10.9748C9.94327 10.9948 9.47794 11.404 9.498 11.6888C10.1198 11.6888 10.7456 11.6888 11.3834 11.6888ZM4.31923 14.3364C4.72037 14.3364 5.09344 14.3364 5.47051 14.3364C5.47051 14.0917 5.47051 13.863 5.47051 13.6384C5.03327 13.6384 4.60805 13.6384 4.17081 13.6384C4.22295 13.8751 4.27109 14.1037 4.31923 14.3364ZM6.42524 18.2796C6.42524 18.5203 6.42524 18.749 6.42524 18.9856C6.68999 18.9856 6.9387 18.9856 7.20747 18.9856C7.26363 18.757 7.3238 18.5243 7.38397 18.2796C7.05503 18.2796 6.74615 18.2796 6.42524 18.2796ZM15.7558 18.9856C15.7558 18.7409 15.7558 18.5163 15.7558 18.2796C15.4349 18.2796 15.1261 18.2796 14.7971 18.2796C14.8573 18.5243 14.9134 18.753 14.9736 18.9856C15.2384 18.9856 15.4871 18.9856 15.7558 18.9856Z"
                fill="#666666"
              />
              <path
                d="M13.3769 6.69457C13.3769 6.80689 13.3809 6.92323 13.3769 7.03555C13.3649 7.20403 13.2686 7.30431 13.1001 7.31635C12.9276 7.32838 12.8073 7.23211 12.7912 7.06764C12.7712 6.82294 12.7712 6.57423 12.7872 6.32953C12.7992 6.15704 12.9437 6.04873 13.1041 6.06879C13.2726 6.08483 13.3689 6.18913 13.3769 6.35761C13.3809 6.46592 13.3769 6.57824 13.3769 6.69457Z"
                fill="#666666"
              />
              <path
                d="M14.6967 6.69841C14.6967 6.81875 14.7047 6.9391 14.6927 7.05944C14.6766 7.21187 14.5843 7.30013 14.4319 7.31216C14.2715 7.32821 14.1351 7.25199 14.123 7.09554C14.099 6.82677 14.099 6.54999 14.123 6.28122C14.1351 6.12477 14.2715 6.04856 14.4319 6.0646C14.5843 6.08065 14.6766 6.1689 14.6927 6.32133C14.7087 6.44569 14.6967 6.57405 14.6967 6.69841Z"
                fill="#666666"
              />
              <path
                d="M15.4431 6.67432C15.4431 6.55398 15.4311 6.43364 15.4471 6.31731C15.4712 6.14882 15.5795 6.06057 15.752 6.06458C15.9124 6.07261 16.0167 6.16487 16.0248 6.32533C16.0368 6.57003 16.0368 6.81874 16.0207 7.06343C16.0127 7.22389 15.9004 7.31214 15.7359 7.31214C15.5755 7.31615 15.4631 7.23191 15.4431 7.07146C15.4311 6.94309 15.4431 6.8067 15.4431 6.67432Z"
                fill="#666666"
              />
            </svg>
          </div>
          <div>  | </div>

          <div className="area-details flex items-center gap-3 ">
            <svg
              width={18}
              height={17}
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.2555 2.8722C3.11743 2.8722 3.0055 2.98413 3.0055 3.1222L3.0055 5.3722C3.0055 5.51027 3.11743 5.6222 3.2555 5.6222C3.39357 5.6222 3.5055 5.51027 3.5055 5.3722L3.5055 3.3722L5.5055 3.3722C5.64357 3.3722 5.7555 3.26027 5.7555 3.1222C5.7555 2.98413 5.64357 2.8722 5.5055 2.8722L3.2555 2.8722ZM13.4195 12.9326L3.43228 2.94543L3.07873 3.29898L13.0659 13.2862L13.4195 12.9326Z"
                fill="#303030"
              />
              <path
                d="M13.243 13.3592C13.3811 13.3592 13.493 13.2473 13.493 13.1092L13.493 10.8592C13.493 10.7212 13.3811 10.6092 13.243 10.6092C13.105 10.6092 12.993 10.7212 12.993 10.8592L12.993 12.8592L10.993 12.8592C10.855 12.8592 10.743 12.9712 10.743 13.1092C10.743 13.2473 10.855 13.3592 10.993 13.3592L13.243 13.3592ZM3.07908 3.29885L13.0663 13.286L13.4198 12.9325L3.43264 2.94529L3.07908 3.29885Z"
                fill="#313131"
              />
              <rect
                x="0.682617"
                y="0.548828"
                width="15.9014"
                height="15.9014"
                rx="2.5"
                stroke="#313131"
              />
            </svg>
            <span className="text-1 font-bold">{ele.area}&nbsp;m²</span>
          </div>


        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="installment text-xs capitalize  text-gray-600" data-cy="card-payment">
              <span data-cy="card-installments">{ele.monthly} Monthly</span>
              <span> / {ele.yearly} Years</span>
            </div>
            <div className="price flex gap-2 font-bold text-base">
              <span data-cy="card-price">
                <div>{ele.price}</div>
              </span>
              <span>{ele.currency}</span>
            </div>
          </div>


          <div className="flex items-end gap-2 ">
            {iconCard.map((link, index) => (
              <Link href={link.href} key={index} aria-label="social link">
                <link.icon className="text-2xl" />
              </Link>
            ))}
          </div>
        </div>
      </CardContent>

    </Card>
  );
}