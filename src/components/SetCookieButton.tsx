"use client";
import { setCookie } from "@/utils/actions";
import { useRouter } from "next/navigation";

const SetCookieButton = ({ reload }: { reload?: boolean }) => {
  const { refresh } = useRouter();

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={async () => {
        await setCookie();
        refresh();
        reload && window.location.reload();
      }}
    >
      Set cookie
    </button>
  );
};

export default SetCookieButton;
