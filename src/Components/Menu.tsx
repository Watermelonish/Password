
export const LANGUAGES = [
    { label: "English", code: "en" },
    { label: "Russian", code: "ru" },
    { label: "German", code: "ge" },
  ];

export const Menu = () => {
  return (
    <nav>
      <select defaultValue={"en"}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </nav>
  );
};