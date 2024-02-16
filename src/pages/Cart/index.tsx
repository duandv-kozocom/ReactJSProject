export function Cart() {
  return (
    <>
      <h3 className="text-[30px] mt-[26px]">My cart (3)</h3>
      <div>
        <div className="flex">
          <div className="mt-5 p-4 w-[70%] border border-gray-300 rounded">
            <div className="relative w-full flex">
              <img src="images/img-group.png" className="h-20 w-20" alt="" />
              <div className="ml-2 text-[16px]">
                <p className="text-black font-[500]">
                  T-shirts with multiple colors, for men and lady
                </p>
                <p className="text-gray-500">Size: medium, Color: blue, </p>
                <p className="text-gray-500">
                  Material: Plastic Seller: Artel Market
                </p>
                <button className="text-[#FA3434] rounded px-3 py-1 border border-gray-300 mt-2">
                  Remove
                </button>
                <button className="text-[#0D6EFD] rounded px-3 py-1 border border-gray-300 mt-2 ml-2">
                  Save for later
                </button>
              </div>
              <div className="absolute right-0 top-0 text-[16px] font-semibold">
                <p className="text-right mb-2">$78.99</p>
                <select
                  className="w-[120px] h-10 border border-gray-300 rounded px-2"
                  id=""
                >
                  <option value="">Qty: 9</option>
                </select>
              </div>
            </div>
            <div className="h-[1px] w-full border border-gray-300 mt-5" />
            <div className="flex justify-between">
              <button
                className="flex items-center px-4 py-1 bg-[#0D6EFD] text-white rounded mt-4"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  />
                </svg>
                Back to shop
              </button>
              <button className="px-4 py-1 text-[#0D6EFD] border border-gray-300 rounded mt-4">
                Remove all
              </button>
            </div>
          </div>
          <div className="w-[30%] text-[16px]">
            <div className="border border-gray-300 rounded mt-5 ml-5">
              <p className="mt-3 ml-3">Have a coupon?</p>
              <div className="flex m-3">
                <input
                  type="text"
                  className="border border-gray-300 rounded-l-lg p-2 w-full"
                  placeholder="Add coupon"
                />
                <button className="text-[#0D6EFD] py-3 px-5 border border-gray-300 rounded-r-lg">
                  Apply
                </button>
              </div>
            </div>
            <div className="border border-gray-300 rounded mt-5 ml-5 text-[16px] text-gray-600">
              <div className="p-3">
                <div className="flex justify-between">
                  <p>Subtotal:</p>
                  <p>$1403.97</p>
                </div>
                <div className="flex justify-between">
                  <p>Discount::</p>
                  <p className="text-[#FA3434]">- $60.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Tax:</p>
                  <p className="text-[#00B517]">+ $14.00</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between font-[600]">
                  <p>Total:</p>
                  <p>$1357.97</p>
                </div>
                <button className="w-full h-10 text-white bg-[#00B517] rounded my-4">
                  Checkout
                </button>
                <div className="flex gap-5 justify-center">
                  <img src="/images/payment1.png" alt="" />
                  <img src="/images/payment2.png" alt="" />
                  <img src="/images/payment3.png" alt="" />
                  <img src="/images/payment4.png" alt="" />
                  <img src="/images/payment5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
