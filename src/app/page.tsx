import DeleteCookieButton from "@/components/DeleteCookieButton";
import SetCookieButton from "@/components/SetCookieButton";
import { getCookie } from "@/utils/actions";
import Link from "next/link";

const RSCPage = async () => {
  const secretCookie = await getCookie();

  const mainText = `This is a RSC. ${
    secretCookie
      ? `The secret cookie is: ${secretCookie}`
      : `To see the secret cookie, click the "set cookie" button.`
  }`;

  return (
    <>
      <div>
        <p className="text-base md:text-lg bold">
          This is a RSC.{" "}
          {secretCookie ? (
            <>
              The secret cookie is:{" "}
              <span className="text-blue-500">{secretCookie}</span>
            </>
          ) : (
            'To see the secret cookie, click the "set cookie" button.'
          )}
        </p>
        {secretCookie ? <DeleteCookieButton /> : <SetCookieButton />}
      </div>
      <Link className="animate-bounce" href="/client">
        View client page {"=>"}
      </Link>
    </>
  );
};
export default RSCPage;
