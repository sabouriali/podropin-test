import { useState } from "react";

function Description() {
  const [description, setDescription] = useState("");
  const [descriptionFocused, setDescriptionFocused] = useState(false);

  function handleDescriptionFocus() {
    setDescriptionFocused(true);
  }
  function handleDescriptionBlur() {
    setDescriptionFocused(false);
  }

  return (
    <section className="p-4 bg-white rounded-2xl mb-6">
      <h3 className="mb-6">توضیحات (اختیاری)</h3>
      <p className="text-gray-400 text-xs mb-4">
        اگر توضیحات کوتاهی دارید که می خواهید در بارنامه درج شود اینجا اضافه
        کنید.
      </p>

      <form>
        <div className="relative">
          <textarea
            name="description"
            id="description"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onFocus={handleDescriptionFocus}
            onBlur={handleDescriptionBlur}
            className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-0.25 pt-3 rounded-lg w-full h-full transition-colors"
          />
          <label
            htmlFor="description"
            className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition ${
              descriptionFocused
                ? "scale-75 -translate-y-2.5 translate-x-1/8 !text-blue-600"
                : description.length > 0 &&
                  "scale-75 -translate-y-2.5 translate-x-1/8"
            }`}
          >
            توضیحات
          </label>
        </div>
      </form>
    </section>
  );
}

export default Description;
