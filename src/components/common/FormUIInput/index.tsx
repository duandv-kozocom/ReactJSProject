import { forwardRef, InputHTMLAttributes, LegacyRef } from "react";

interface FormUIInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  fontSizeLabel?: string;
  classWrapper?: string;
  name?: string;
  error?: any;
  icon?: string;
  fixedHeight?: boolean;
  customBorder?: string;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export const FormUIInput = forwardRef(
  (props: FormUIInputProps, ref: LegacyRef<HTMLInputElement>) => {
    const {
      label,
      fontSizeLabel,
      classWrapper,
      name,
      error,
      icon,
      fixedHeight,
      customBorder,
      ...inputProps
    } = props;

    return (
      <div className={`w-full ${error ? "is-invalid" : ""}`}>
        <label
          className={`block text-sm leading-[21px] font-semibold text-gray-710 ${fontSizeLabel}`}
        >
          {label}
        </label>
        <div className={classWrapper}>
          <div className={`${icon ? "flex items-end space-x-2" : ""}`}>
            <input
              ref={ref}
              className={`appearance-none block w-full px-3.5 py-[10px] border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${customBorder}`}
              id={name}
              name={name}
              {...inputProps}
            />
            {icon && (
              <span className="text-base font-light text-gray-710">{icon}</span>
            )}
          </div>
          <div
            className={`feedback mt-1 text-xs leading-[18px] text-red whitespace-pre-wrap ${
              fixedHeight
                ? `${error?.message?.length > 0 ? " min-h-[20px]" : "hidden"}`
                : " min-h-[20px]"
            }  `}
          >
            {error?.message}
          </div>
        </div>
      </div>
    );
  }
);

FormUIInput.defaultProps = {
  fontSizeLabel: "text-sm",
  classWrapper: "mt-1",
  label: "",
  name: "",
  error: null,
  icon: "",
  fixedHeight: true,
  customBorder: "",
};
