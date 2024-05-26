"use client";

import DeleteCookieButton from "@/components/DeleteCookieButton";
import SetCookieButton from "@/components/SetCookieButton";
import { getCookie } from "@/utils/actions";
import Link from "next/link";
import { useEffect, useState } from "react";

const ClientPage = () => {
  const [secretCookie, setSecretCookie] = useState<string>();

  useEffect(() => {
    const getTheSecretCookie = async () => {
      const response = await getCookie();
      setSecretCookie(response);
    };
    getTheSecretCookie();
  }, []);
  const mainText = `This is a client page. ${
    secretCookie ? `The secret cookie is: ${secretCookie}` : ``
  }`;
  return (
    <>
      <div>
        <p className="text-base md:text-lg bold">
          This is a client page.{" "}
          {secretCookie ? (
            <>
              The secret cookie is:{" "}
              <span className="text-blue-500">{secretCookie}</span>
            </>
          ) : (
            'To see the secret cookie, click the "set cookie" button.'
          )}
        </p>
        {secretCookie ? (
          <DeleteCookieButton reload />
        ) : (
          <SetCookieButton reload />
        )}
      </div>
      <div className="max-w-md">
        <p>
          Using a server action to get the cookie and set it to some state. This
          should be enough to imply that in a fetch function you can use the
          same server action to get the cookie.
        </p>
      </div>
      <Link className="animate-bounce" href="/">
        View RSC page {"=>"}
      </Link>
    </>
  );
};

export default ClientPage;
