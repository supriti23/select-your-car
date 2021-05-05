
const Dropdown = ({
  handleChange,
  value,
  placeholder,
  inputName,
  list,
  elementList,
  styles,
  handleFocus,
}) => {
  return (
    <>
      <input
        list={list}
        name={inputName}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        style={styles}
      />
      <datalist id={list}>
        {elementList.map((val, id) => (
          <option key={id} value={val} />
        ))}
      </datalist>
    </>
  );
};
export default Dropdown;
