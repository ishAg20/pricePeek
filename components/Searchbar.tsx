"use client";

import { FormEvent, useState } from "react";

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isValidAmazonLink = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname;
      if (
        hostname.includes("amazon.com") ||
        hostname.match(/^amazon\.[a-z\.]{2,6}$/)
      ) {
        return true;
      }
    } catch (error) {
      return false;
    }
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = isValidAmazonLink(searchPrompt);
    if (!isValid) return alert("Please provide a valid Amazon Link");
    try {
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
          placeholder="Enter Amazon product link"
          className="flex-1 min-w-[200px] w-full p-3 border border-gray-300 rounded-lg shadow-xs text-base text-gray-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={searchPrompt === ""}
          className="bg-gray-900 border border-gray-900 rounded-lg shadow-xs px-5 py-3 text-white text-base font-semibold hover:opacity-90 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isLoading ? "Searching.." : "Search"}
        </button>
      </form>
    </>
  );
};

export default Searchbar;
