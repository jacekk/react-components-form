import React from 'react';
import FieldConnect from './FieldConnect';
import ErrorField from './ErrorField';

const TextareaField = ({
    wrapperClassName,
    className,
    onChange,
    name,
    errors,
    error,
    value,
    label,
    placeholder
}) => (
    <div className={wrapperClassName}>
        {label && <label>{label}</label>}
        <textarea
            name={name}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            placeholder={placeholder}
            className={className}
        />
        {error && <ErrorField errors={errors} />}
    </div>
);

export default FieldConnect(TextareaField);