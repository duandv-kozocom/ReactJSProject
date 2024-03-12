import { InputControl } from "@/components/common/InputControl";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DATA, TYPES } from "@/utils/data";
import { toast } from "react-toastify";
import { Product, Type } from "./types/Product";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE_PATH } from "@/constants/routes";

export function ProductCreateAndUpdate() {
  const initialValue = {
    id: "",
    name: "",
    description: "",
    price: "",
    discount: "",
    evaluate: "",
    order: "",
    priceFirst: "",
    priceSecond: "",
    priceThird: "",
    type: "",
    material: "",
    design: "",
    customization: "",
    image: "",
    imageList: "",
    versionFirst: "",
    versionSecond: "",
    versionThird: "",
    protection: "",
    warranty: "",
  };
  type ImageType = "image" | "imageList";
  const { id } = useParams<string>();
  const [products, setProducts] = useState<typeof initialValue>(initialValue);
  const [urlImageProduct, setUrlImageProduct] = useState<string>("");
  const [urlImageProductList, setUrlImageProductList] = useState<string>("");
  const navigate = useNavigate();

  const fetchDataProduct = () => {
    const dataProduct: any = DATA.filter((item: Product) => item.id === id)[0];
    setProducts(dataProduct);
    setUrlImageProduct(dataProduct?.image);
    setUrlImageProductList(dataProduct?.imageList);
  };

  const fileToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  useEffect(() => {
    fetchDataProduct();
  }, []);
  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { isSubmitting },
    reset,
    // setError,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: initialValue,
  });

  useEffect(() => {
    reset(products);
  }, [products]);

  const handleFormSubmit = async (data: any) => {
    const payload = {
      ...data,
      id: String(DATA.length + 1),
    };
    if (id) {
      toast.success("Cập nhật sản phẩm thành công!");
      setTimeout(() => {
        return navigate(ROUTE_PATH.PRODUCTS.LIST);
      }, 1000);
      for (let i = 0; i < DATA.length; i++) {
        if (DATA[i].id === id) {
          DATA[i] = payload;
          break;
        }
      }
    } else {
      await DATA.push(payload);
      toast.success("Thêm sản phẩm thành công!");
      setTimeout(() => {
        return navigate(ROUTE_PATH.PRODUCTS.LIST);
      }, 1000);
    }
  };
  const handleChangeType = (e: any) => {
    setValue("type", e.target.value);
  };
  const handleChangeDescription = (e: any) => {
    setValue("description", e.target.value);
  };
  const handleChangeImage = async (e: any, type: ImageType) => {
    if (e.target.files.length < 1) {
      return;
    }
    const file = e.target.files[0];
    const imageBase64: any = await fileToBase64(file);
    if (
      file.type !== "image/png" &&
      file.type !== "image/jpg" &&
      file.type !== "image/jpeg"
    ) {
      toast.error("Ảnh phải kiểu png, jpg, jpeg");
      e.target.value = "";
    } else {
      if (type === "image") {
        setValue("image", imageBase64);
        setUrlImageProduct(imageBase64);
      }
      if (type === "imageList") {
        setValue("imageList", imageBase64);
        setUrlImageProductList(imageBase64);
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="text-[16px] mr-10"
      >
        <div className="flex justify-between">
          <p className="text-[24px] mb-4">Thêm sản phẩm mới</p>
          <button
            className={`${isSubmitting ? "opacity-[0.5]" : "opacity-1"} px-10 py-0 bg-[#0D6EFD] rounded-full `}
            type="submit"
          >
            Lưu
          </button>
        </div>
        <div className="flex justify-between">
          <div className="w-[40%]">
            <InputControl
              control={control}
              name="name"
              maxLength={60}
              type="text"
              customBorder="rounded-lg"
              fontSizeLabel="text-sm leading-[21px]"
              classWrapper="mt-1 mb-4"
              label="Tên sản phẩm"
            />
            <InputControl
              control={control}
              name="price"
              maxLength={60}
              type="text"
              customBorder="rounded-lg"
              fontSizeLabel="text-sm leading-[21px]"
              classWrapper="mt-1 mb-4"
              label="Giá đã giảm"
            />
            <InputControl
              control={control}
              name="discount"
              maxLength={60}
              type="text"
              customBorder="rounded-lg"
              fontSizeLabel="text-sm leading-[21px]"
              classWrapper="mt-1 mb-4"
              label="Giá gốc chưa giảm"
            />

            <p className="text-[14px] font-semibold">Chi tiết</p>
            <textarea
              className="border border-gray-300 rounded w-full h-[100px] p-3"
              onChange={(e) => handleChangeDescription(e)}
              defaultValue={getValues("description")}
            ></textarea>

            <p className="text-[14px] font-semibold">Kiểu phiên bản</p>
            <select
              name="price"
              id=""
              onChange={(e) => handleChangeType(e)}
              className="border border-black mb-4 mt-1"
            >
              {TYPES.map((item: Type) => (
                <option
                  key={item.id}
                  value={item.id}
                  selected={item.id === getValues("type")}
                >
                  {item.nameType}
                </option>
              ))}
            </select>

            <div className="flex justify-between">
              <div>
                <p className="text-sm leading-[21px] mb-2 font-semibold text-gray-710">
                  Ảnh sản phẩm
                </p>
                <div className="flex flex-col items-center">
                  <div className="h-28 w-56 overflow-hidden relative bg-[#E3EDFD]">
                    {urlImageProduct && (
                      <img
                        className="object-contain w-full h-full "
                        src={urlImageProduct}
                        alt=""
                      />
                    )}
                  </div>
                  <label
                    htmlFor="upload-profile-picture"
                    className="whitespace-nowrap cursor-pointer inline-block mt-2 px-4 py-[1.5px] bg-blue-610 text-black font-semibold bg-[#0D6EFD] text-sm leading-[21px] rounded-full"
                  >
                    Thêm ảnh
                  </label>
                  <input
                    className="hidden"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => handleChangeImage(e, "image")}
                    id="upload-profile-picture"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[40%]">
            <InputControl
              control={control}
              name="material"
              maxLength={60}
              type="text"
              customBorder="rounded-lg"
              fontSizeLabel="text-sm leading-[21px]"
              classWrapper="mt-1 mb-4"
              label="Chất liệu"
            />
            <InputControl
              control={control}
              name="design"
              maxLength={60}
              type="text"
              customBorder="rounded-lg"
              fontSizeLabel="text-sm leading-[21px]"
              classWrapper="mt-1 mb-4"
              label="Thiết kế"
            />
            <InputControl
              control={control}
              name="customization"
              maxLength={60}
              type="text"
              customBorder="rounded-lg"
              fontSizeLabel="text-sm leading-[21px]"
              classWrapper="mt-1 mb-4"
              label="Tuỳ biến"
            />
            <InputControl
              control={control}
              name="protection"
              maxLength={60}
              type="text"
              customBorder="rounded-lg"
              fontSizeLabel="text-sm leading-[21px]"
              classWrapper="mt-1 mb-4"
              label="Độ bền"
            />
            <InputControl
              control={control}
              name="warranty"
              maxLength={60}
              type="text"
              customBorder="rounded-lg"
              fontSizeLabel="text-sm leading-[21px]"
              classWrapper="mt-1 mb-4"
              label="Bảo hành"
            />
            <div className="flex justify-between">
              <div>
                <p className="text-sm leading-[21px] mb-2 font-semibold text-gray-710">
                  Ảnh sản phẩm
                </p>
                <div className="flex flex-col items-center">
                  <div className="h-28 w-56 overflow-hidden relative bg-[#E3EDFD]">
                    {urlImageProductList && (
                      <img
                        className="object-contain w-full h-full "
                        src={urlImageProductList || getValues("imageList")}
                        alt=""
                      />
                    )}
                  </div>
                  <label
                    htmlFor="upload-profile-picture1"
                    className="whitespace-nowrap cursor-pointer inline-block mt-2 px-4 py-[1.5px] bg-blue-610 text-black font-semibold bg-[#0D6EFD] text-sm leading-[21px] rounded-full"
                  >
                    Thêm ảnh
                  </label>
                  <input
                    className="hidden"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => handleChangeImage(e, "imageList")}
                    id="upload-profile-picture1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
