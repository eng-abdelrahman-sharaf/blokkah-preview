import React, { ReactNode, forwardRef } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from "@/app/lib/utils";

import AlertCircle from '@/components/icons/AlertCircle';

export enum InputType {
    default = 'default',
    text = 'text',
    email = 'email',
    password = 'password',
    number = 'number',
    otp = 'otp'
}

interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>, VariantProps<typeof inputVariants> {
    label?: string;
    startComponent?: ReactNode;
    endComponent?: ReactNode;
    hintMessage?: string;
    error?: boolean;
    errorMessage?: string;
    inputType?: 'text' | 'email' | 'password' | 'number' | 'otp';
}

const inputVariants = cva(
    "flex items-center gap-2 shadow-sm border border-Gray-300 px-4 w-full text-Gray-500 rounded-lg bg-transparent focus-within:shadow-inputFocusedBoxShadow focus-within:border-Brand-300 focus:outline-none",
    {
        variants: {
            error: {
                true: "border-Error-300",
                false: ""
            },
            inputType: {
                text: "",
                email: "",
                password: "",
                number: "",
                otp: "max-w-[48px] max-h-[48px] px-1 sm:max-w-[64px] sm:max-h-[64px] w-full h-full sm:px-2 py-[2px]"
            }
        },
        defaultVariants: {
            error: false,
            inputType: 'text'
        },
    }
);

const inputFieldVariants = cva(
    "flex-grow py-3 border-none outline-none focus:outline-none text-Gray-900 placeholder:text-Gray-500 text-md font-regular",
    {
        variants: {
            disabled: {
                true: "bg-Gray-50",
                false: ""
            },
            inputType: {
                otp: "w-full h-full text-10xl sm:text-16xl font-medium text-center",
                text: "",
                email: "",
                password: "",
                number: "",
                default: ""
            }
        },
        defaultVariants: {
            disabled: false,
            inputType: 'default'
        },
    }
);

const Input = forwardRef<HTMLInputElement, IInputProps>(({
    id,
    label,
    startComponent,
    endComponent,
    error,
    hintMessage,
    errorMessage,
    inputType = 'text',
    ...props
}, ref) => {

    return (
        <div className="flex flex-col items-start w-full bg-white">
            {/* input label */}
            {label ? (
                <label
                    htmlFor={id}
                    className="text-Gray-700 text-sm font-medium mb-[6px]"
                >
                    {label}
                </label>
            ) : null}

            {/* input container */}
            <div className={cn(inputVariants({ error, inputType }), "relative w-full input-container transition-shadow transition-colors")}>
                {/* start icon */}
                {startComponent ? (startComponent) : null}

                {/* input field */}
                <input
                    ref={ref}
                    aria-invalid={error}
                    className={cn(inputFieldVariants({ disabled: props.disabled, inputType }))}
                    type={inputType}
                    {...props}
                />

                {/* end icon */}
                {(error || endComponent) ?
                    (
                        error ? (
                            <div title={errorMessage} className='max-w-[20px] max-h-[20px]'>
                                <AlertCircle />
                            </div>
                        ) : (endComponent ? endComponent : null)
                    )
                    : null
                }
            </div>

            {(errorMessage || hintMessage) ?
                (
                    <div className={cn('text-sm font-medium mt-[6px]', errorMessage && 'text-Error-500', hintMessage && 'text-Gray-600')}>
                        {errorMessage ? errorMessage : null}
                        {hintMessage ? hintMessage : null}
                    </div>
                )
                : null
            }
        </div>
    );
});

Input.displayName = 'Input';

export default React.memo(Input);