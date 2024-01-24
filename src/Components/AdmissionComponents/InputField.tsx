import React from 'react'

interface InputFieldType {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    className?: string;
    error?: string;
    value?: any;
    onChange?: any;
}

const InputField = ({ label, name, type = "text", placeholder, className = "", error, value, onChange, ...props }: InputFieldType, ref: any) => {

    return (
        <div className="form-control mt-2 px-2">
            <label className="label text-xl">
                <span className="label-text">{label}</span>
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className={`input input-bordered ${className}`}
                value={value}
                ref={ref}
                name={name}
                onChange={onChange}
                {...props}
            />
        </div>
    )
}

export default React.forwardRef(InputField)