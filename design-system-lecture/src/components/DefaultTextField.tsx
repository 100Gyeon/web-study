import { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import IconButton from './IconButton';

interface DefaultTextFieldProps {
  iconPath: string;
  iconAlt: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  id: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError: boolean;
  errorMessage: string;
}

export default function DefaultTextField({
  iconPath,
  iconAlt,
  onIconClick,
  id,
  placeholder,
  onChange,
  value,
  isError,
  errorMessage,
}: DefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused ? 'border-secondary' : !value ? 'border-mono300' : 'border-primary';

  return (
    <div>
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
        text-primary
        border-b
        ${borderColor}
      `}
      >
        <input
          id={id}
          className="outline-none"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {!!value && <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
