export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="border p-4 border-[#dadada] rounded-md bg-[#EEEEEE]">
      <h1 className="text-xl font-bold border-b pb-2">{title}</h1>
      <p>{children}</p>
    </div>
  );
}

