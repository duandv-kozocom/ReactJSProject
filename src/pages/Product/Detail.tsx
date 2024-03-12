<<<<<<< Updated upstream
=======
import { CATEGORY, DATA, TYPES } from "@/utils/data";
import { useEffect, useState } from "react";
>>>>>>> Stashed changes
import { Helmet } from "react-helmet-async";

export function ProductDetail() {
<<<<<<< Updated upstream
=======
  const { id } = useParams<string>();
  const [detailProduct, setDetailProduct] = useState<Product>();
  const [categoryProduct, setCategoryProduct] = useState<Category>();
  const fetchDataProduct = () => {
    const dataProduct = DATA.filter((item: Product) => item.id === id)[0];
    setDetailProduct(dataProduct);
    setCategoryProduct(CATEGORY);
  };
  useEffect(() => {
    fetchDataProduct();
  }, []);
>>>>>>> Stashed changes
  return (
    <>
      <Helmet>
        <title>Product detail</title>
        <meta name="description" content="Product detail" />
      </Helmet>
      <div className="flex">
        <div>
          <img
            src="/images/ao-thun.png"
            className="w-[380px] h-[380px]"
            alt=""
          />
          <img
            src="/images/gallery.png"
            className="mt-5 w-[380px] h-[56px]"
            alt=""
          />
        </div>
        <div className="mx-5">
          <div className="flex">
            <img src="/images/check.png" alt="" />
            <span className="text-[16px] text-[#00B517]">In stock</span>
          </div>
          <p className="text-[22px]">
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </p>
          <div className="flex gap-2 items-center text-[16px] mb-[10px]">
            <img src="/images/rating.png" alt="" />
            <p className="text-[16px] text-[#FF9017] ">9.3</p>
            <img src="/images/message-icon.svg" alt="" />
            <span>32 reviews</span>
            <img src="/images/shopping-basket.svg" alt="" />
            <span>154 sold</span>
          </div>
          <div className="text-[18px] w-full h-[72px] bg-[#FFF0DF] flex">
            <div className="p-3 mr-5">
              <p className="text-[#FA3434] font-[600]">$98.00</p>
              <p className="text-[#606060]">50-100 pcs</p>
            </div>
            <div className="border border-[#BDC1C8] w-0 h-[48px] my-3"></div>
            <div className="p-3 mr-5">
              <p className="text-[#FA3434] font-[600]">$98.00</p>
              <p className="text-[#606060]">50-100 pcs</p>
            </div>
<<<<<<< Updated upstream
            <div className="border border-[#BDC1C8] w-0 h-[48px] my-3"></div>
            <div className="p-3 mr-5">
              <p className="text-[#FA3434] font-[600]">$98.00</p>
              <p className="text-[#606060]">50-100 pcs</p>
            </div>
          </div>
          <div className="text-[18px] mt-5">
            <div className="flex mb-4">
              <p className="w-[30%]">Price: </p>
              <p>Negotiable</p>
            </div>
            <hr className="mb-4"/>
            <div className="flex mb-4">
              <p className="w-[30%]">Type: </p>
              <p>Classic shoes</p>
            </div>
            <div className="flex mb-4">
              <p className="w-[30%]">Material: </p>
              <p>Plastic material</p>
            </div>
            <div className="flex mb-4">
              <p className="w-[30%]">Design: </p>
              <p>Modern nice</p>
            </div>
            <hr className="mb-4" />
            <div className="flex mb-4">
              <p className="w-[30%]">Customization: </p>
              <p>Customized logo and design custom packages</p>
            </div>
            <div className="flex mb-4">
              <p className="w-[30%]">Protection: </p>
              <div>Refund Policy</div>
            </div>
            <div className="flex mb-4">
              <p className="w-[30%]">Warranty: </p>
              <p>2 years full warranty</p>
=======
            <div className="text-[18px] w-full h-[72px] bg-[#FFF0DF] flex">
              <div className="p-3 mr-5">
                <p className="text-[#FA3434] font-[600]">
                  ${categoryProduct?.priceFirst}
                </p>
                <p className="text-[#606060]">
                  {categoryProduct?.versionFirst}
                </p>
              </div>
              <div className="border border-[#BDC1C8] w-0 h-[48px] my-3"></div>
              <div className="p-3 mr-5">
                <p className="text-[#FA3434] font-[600]">
                  ${categoryProduct?.priceSecond}
                </p>
                <p className="text-[#606060]">
                  {categoryProduct?.versionSecond}
                </p>
              </div>
              <div className="border border-[#BDC1C8] w-0 h-[48px] my-3"></div>
              <div className="p-3 mr-5">
                <p className="text-[#FA3434] font-[600]">
                  ${categoryProduct?.priceThird}
                </p>
                <p className="text-[#606060]">
                  {categoryProduct?.versionThird}
                </p>
              </div>
            </div>
            <div className="text-[18px] mt-5">
              <div className="flex mb-4">
                <p className="w-[40%]">Price: </p>
                <p>{detailProduct.price}</p>
              </div>
              <hr className="mb-4" />
              <div className="flex mb-4">
                <p className="w-[40%]">Type: </p>
                <p>{(TYPES.find((type) => type.id === detailProduct.type))?.nameType}</p>
              </div>
              <div className="flex mb-4">
                <p className="w-[40%]">Material: </p>
                <p>{detailProduct.material}</p>
              </div>
              <div className="flex mb-4">
                <p className="w-[40%]">Design: </p>
                <p>{detailProduct.design}</p>
              </div>
              <hr className="mb-4" />
              <div className="flex mb-4">
                <p className="w-[40%]">Customization:</p>
                <p>{detailProduct.customization}</p>
              </div>
              <div className="flex mb-4">
                <p className="w-[40%]">Protection: </p>
                <div>{detailProduct.protection}</div>
              </div>
              <div className="flex mb-4">
                <p className="w-[40%]">Warranty: </p>
                <p>{detailProduct.warranty}</p>
              </div>
>>>>>>> Stashed changes
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
