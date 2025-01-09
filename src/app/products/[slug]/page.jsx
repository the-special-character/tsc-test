import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductItem = async ({ params }) => {
  const slug = (await params).slug;
  const res = await fetch(`http://localhost:3000/products?slug=${slug}`);
  const json = await res.json();
  const item = json[0];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-2">
        <div className="relative w-full aspect-square">
          <Image src={item.image} alt={`${item.title} Image`} fill />
          <div className="absolute z-10 right-4 top-4 flex flex-col gap-2">
            {item.onSale && <Badge className="justify-center">Sale</Badge>}
            {item.popular && <Badge className="justify-center">Popular</Badge>}
          </div>
        </div>
        <h1 className="line-clamp-2">{item.title}</h1>
        <div className="flex gap-2">
          <p>
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(item.price)}
          </p>
          {item.discount && (
            <p className="line-through">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(item.price + (item.price * item.discount) / 100)}
            </p>
          )}
        </div>
        <div>
          <h4 className="sr-only">Reviews</h4>
          <div className="flex items-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  aria-hidden="true"
                  className={cn(
                    item.rating.rate > rating ? "fill-gray-900" : "",
                    "size-5 shrink-0"
                  )}
                />
              ))}
            </div>
            <p className="sr-only">{item.rating.rate} out of 5 stars</p>
            <span
              href="#"
              className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              {item.rating.count} reviews
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
