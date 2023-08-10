import Link from "next/link";

export default function NotFound(): React.ReactElement {
  return (
    <div className="mx-auto max-w-4xl my-20 items-center justify-center flex flex-col">
      <h1 className="text-center text-3xl text-orange-500 mb-10">
        This Link is Not Valid
      </h1>
      <Link href="/" className="text-center text-blue-500">
        Go Home
      </Link>
    </div>
  );
}
