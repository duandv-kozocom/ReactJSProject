interface Props {
  setOpenPopupDelete: (value: boolean) => void;
  handleDeleteProduct: (id: string) => void;
  idDeleteProduct: string;
}
export function PopupDeleteProduct(props: Props) {
  const {
    setOpenPopupDelete,
    handleDeleteProduct,
    idDeleteProduct,
  } = props;

  return (
    <>
      <div className="fixed flex justify-center items-center z-10 top-1/2 left-1/2 h-[300px] w-[500px] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded border">
        <div>
          <p className="text-[18px]">You really want to delete this product</p>
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => setOpenPopupDelete(false)}
              className="text-[18px] text-white px-4 py-1 bg-[#0D6EFD] rounded-xl"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                setOpenPopupDelete(false);
                handleDeleteProduct(idDeleteProduct);
              }}
              className="text-[18px] text-white px-4 py-1 bg-[#0D6EFD] rounded-xl"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
