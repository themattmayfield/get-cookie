"use client";
import { deleteCookie } from "@/utils/actions";

const DeleteCookieButton = ({ reload }: { reload?: boolean }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={async () => {
        await deleteCookie();
        reload && window.location.reload();
      }}
    >
      Delete cookie
    </button>
  );
};

export default DeleteCookieButton;
