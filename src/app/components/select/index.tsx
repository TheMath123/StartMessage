type OptionProps = {
  name: string;
  value?: any;
};

interface SelectProps {
  options: OptionProps[];
  label: string;
  errorMessage?: string;
  register?: any;
}

export function Select({
  options,
  label,
  errorMessage,
  register,
}: SelectProps) {
  function* generateOptions(options: OptionProps[]) {
    for (let [index, item] of options.entries()) {
      yield (
        <option
          selected={index === 0}
          key={`dpInput${item.name.trim()}#${index}`}
          value={item.value}
        >
          {item.name}
        </option>
      );
    }
  }

  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={label} className="text-base font-semibold">
        DDI*
      </label>
      <select
        id={label}
        name={label}
        aria-label={label}
        className="px-6 py-2 rounded-lg bg-input-bg text-text placeholder:text-input-placeholder"
        {...register}
      >
        {[...generateOptions(options)]}
      </select>
      {errorMessage && errorMessage.length > 1 && <span>{errorMessage}</span>}
    </div>
  );
}
