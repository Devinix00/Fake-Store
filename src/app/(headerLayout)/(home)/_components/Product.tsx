import { motion } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import useCart from "@/app/_hooks/useCart";
import useCartStore from "@/app/_stores/useCartStore";

const FramerImage = motion(Image);
const FramerLink = motion(Link);

interface ProductProps {
  product: Product;
}

function Product({ product }: ProductProps) {
  const { productIds } = useCartStore();
  const { handleAddCart } = useCart();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -50% 0px",
  });

  const isAddedCart = productIds.includes(product.id);

  const animationProps = (delay = 0) => ({
    initial: { opacity: 0 },
    animate: isInView && { opacity: 1 },
    transition: { type: "just", delay: delay },
  });

  return (
    <div>
      <li
        ref={ref}
        key={product.id}
        className="w-[100%] min-h-[100vh] flex flex-col md:flex-row gap-20 items-center justify-center"
      >
        <FramerImage
          width={250}
          height={250}
          src={product.image}
          alt={product.title}
          {...animationProps(0)}
        />
        <section className="flex flex-col gap-2 w-[100%]">
          <FramerLink
            href={`/detail/${product.id}`}
            className="text-lg md:text-2xl font-bold hover:underline w-fit"
            {...animationProps(0.3)}
          >
            {product.title}
          </FramerLink>
          <motion.p
            {...animationProps(0.6)}
            className="text-md md:text-xl font-medium"
          >
            {product.category}
          </motion.p>
          <motion.section
            {...animationProps(0.9)}
            className="flex gap-2 items-center"
          >
            <p className="text-md md:text-xl font-extrabold">
              ${product.price}
            </p>
            <p className="text-md md:text-xl text-red font-semibold">
              {product.rating.rate}%
            </p>
          </motion.section>
          <motion.p
            {...animationProps(1.2)}
            className="text-sm md:text-lg font-medium mt-5 break-words"
          >
            {product.description}
          </motion.p>
          <motion.button
            {...animationProps(1.5)}
            disabled={isAddedCart}
            onClick={() => handleAddCart(product.id)}
            className={`w-[100%] md:w-40 h-12 rounded-xl text-white text-md md:text-lg font-semibold mt-5 ${
              isAddedCart ? "bg-gray-300" : "bg-red"
            }`}
          >
            {isAddedCart ? "Added to Cart" : "Cart"}
          </motion.button>
        </section>
      </li>
    </div>
  );
}

export default Product;
